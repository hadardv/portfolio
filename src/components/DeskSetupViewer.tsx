// DeskSetupViewer.tsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass.js";

type Props = {
  src: string;
  style?: React.CSSProperties;
  autoRotate?: boolean;
  helpers?: boolean;
  /** "contain" shows all of the model, "cover" fills the screen (cropping allowed) */
  fit?: "contain" | "cover";
  /** disable OrbitControls for background usage */
  interactive?: boolean;
  /** extra mesh-name hints to hide (starfield/backdrop planes) */
  hideByName?: string[];
};

export default function DeskSetupViewer({
  src,
  style,
  autoRotate = true,
  helpers = false,
  fit = "cover",
  interactive = false,
  hideByName = ["background", "backdrop", "sky", "space", "plane"],
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const DPR = Math.min(window.devicePixelRatio, 2.5);
    renderer.setPixelRatio(DPR);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearAlpha(0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = false;
    container.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      52,
      container.clientWidth / container.clientHeight,
      0.05,
      3000
    );
    camera.position.set(2, 1.4, 2.6);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = interactive;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.6;
    controls.enableZoom = false;
    controls.minDistance = 0.2;
    controls.maxDistance = 8;
    controls.maxPolarAngle = Math.PI * 0.48;

    // Post
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const smaa = new SMAAPass();
    composer.addPass(smaa);

    // Environment + light
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    const dir = new THREE.DirectionalLight(0xffffff, 0.5);
    dir.position.set(5, 8, 6);
    scene.add(dir);

    // Helpers
    let grid: THREE.GridHelper | undefined;
    let axes: THREE.AxesHelper | undefined;
    if (helpers) {
      grid = new THREE.GridHelper(20, 20);
      axes = new THREE.AxesHelper(1);
      scene.add(grid, axes);
    }

    // Framing utils
    const frameObject = (obj: THREE.Object3D) => {
      const box = new THREE.Box3().setFromObject(obj);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      // distances to fit height/width (vertical FOV)
      const vFov = (camera.fov * Math.PI) / 180;
      const distForHeight = size.y / 2 / Math.tan(vFov / 2);
      const distForWidth = size.x / 2 / (Math.tan(vFov / 2) * camera.aspect);

      // contain => choose MAX (show all). cover => choose MIN (fill, allow crop)
      const dist =
        fit === "cover"
          ? Math.min(distForHeight, distForWidth) * 0.95
          : Math.max(distForHeight, distForWidth) * 1.05;

      camera.position.set(
        center.x + dist,
        center.y + dist * 0.45,
        center.z + dist
      );
      camera.near = Math.max(0.01, dist / 100);
      camera.far = dist * 100;
      camera.lookAt(center);
      camera.updateProjectionMatrix();
      controls.target.copy(center);
      controls.update();
    };

    // Load GLB + hide backdrops
    const loader = new GLTFLoader();
    const draco = new DRACOLoader();
    draco.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
    );
    loader.setDRACOLoader(draco);

    loader.load(
      src,
      (gltf) => {
        const root = gltf.scene;
        root.traverse((o: THREE.Object3D) => {
          const mesh = o as THREE.Mesh;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if (!(mesh as any).isMesh) return;
          // hide by name hints (case-insensitive)
          const nm = (mesh.name || "").toLowerCase();
          if (hideByName.some((h) => nm.includes(h))) mesh.visible = false;

          // give PBR a bit of pop on dark gradient
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const mat = mesh.material as any;
          if (mat && "envMapIntensity" in mat) mat.envMapIntensity = 0.6;
        });

        scene.add(root);
        frameObject(root);
      },
      undefined,
      (err) => console.error("Failed to load GLB:", err)
    );

    // Resize
    const onResize = () => {
      const { clientWidth, clientHeight } = container;
      const dpr = Math.min(window.devicePixelRatio, 2.5);
      renderer.setPixelRatio(dpr);
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      composer.setSize(clientWidth, clientHeight);
      smaa.setSize(clientWidth * dpr, clientHeight * dpr);
    };
    window.addEventListener("resize", onResize);

    // Loop
    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      controls.update();
      composer.render();
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      composer.dispose();
      smaa.dispose?.();
      renderer.dispose();
      pmrem.dispose();
      draco.dispose();
      if (grid) scene.remove(grid);
      if (axes) scene.remove(axes);
      const canvas = renderer.domElement;
      canvas.parentElement?.removeChild(canvas);
    };
  }, [src, autoRotate, helpers, fit, interactive, hideByName.join(",")]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: interactive ? "auto" : "none", // background shouldn't steal scroll
        ...style,
      }}
      aria-label="3D background viewer"
    />
  );
}

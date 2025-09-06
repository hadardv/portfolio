// DeskSetupViewer.tsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

type Props = {
  /** Public URL of your GLB (e.g. "/models/gaming_setup_low-poly.glb") */
  src: string;
  /** Fill parent size (default: 100% x 100%) */
  style?: React.CSSProperties;
  /** Start with a gentle spin */
  autoRotate?: boolean;
  /** Show grid/axes for debugging */
  helpers?: boolean;
};

export default function DeskSetupViewer({
  src,
  style,
  autoRotate = true,
  helpers = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf3f3f3);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      2000
    );
    camera.position.set(2, 1.5, 3);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.5;

    // Environment (image-based lighting)
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    // Key light (adds soft shadow + spec)
    const dir = new THREE.DirectionalLight(0xffffff, 2.0);
    dir.position.set(5, 10, 5);
    dir.castShadow = true;
    dir.shadow.mapSize.set(2048, 2048);
    scene.add(dir);
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    // Optional helpers
    let grid: THREE.GridHelper | undefined;
    let axes: THREE.AxesHelper | undefined;
    if (helpers) {
      grid = new THREE.GridHelper(20, 20);
      axes = new THREE.AxesHelper(1);
      scene.add(grid, axes);
    }

    // Simple ground to catch shadows (optional)
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 50),
      new THREE.ShadowMaterial({ opacity: 0.15 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Frame camera to object utility
    const frameObject = (obj: THREE.Object3D) => {
      const box = new THREE.Box3().setFromObject(obj);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = (camera.fov * Math.PI) / 180;
      const dist = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.5;

      camera.position.set(
        center.x + dist,
        center.y + dist * 0.5,
        center.z + dist
      );
      camera.near = Math.max(0.01, dist / 100);
      camera.far = dist * 100;
      camera.lookAt(center);
      camera.updateProjectionMatrix();

      controls.target.copy(center);
      controls.update();
    };

    // Load GLB
    const loader = new GLTFLoader();
    let modelRoot: THREE.Object3D | null = null;

    loader.load(
      src,
      (gltf) => {
        modelRoot = gltf.scene;

        // Make meshes shadow-aware and ensure standard material settings
        modelRoot.traverse((obj) => {
          const mesh = obj as THREE.Mesh;
          if (mesh.isMesh) {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            const mat = mesh.material;
            if (Array.isArray(mat))
              mat.forEach((m) => ((m as THREE.Material).needsUpdate = true));
            else if (mat) mat.needsUpdate = true;
          }
        });

        scene.add(modelRoot);
        frameObject(modelRoot);
      },
      undefined,
      (err) => {
        console.error("Failed to load GLB:", err);
      }
    );

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    // Render loop
    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      controls.update();
      renderer.render(scene, camera);
    };
    loop();

    // Cleanup
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      renderer.dispose();
      pmrem.dispose();
      if (modelRoot) modelRoot.traverse(() => {}); // no-op; kept for symmetry
      if (grid) scene.remove(grid);
      if (axes) scene.remove(axes);
      const canvas = renderer.domElement;
      if (canvas.parentElement) canvas.parentElement.removeChild(canvas);
    };
  }, [src, autoRotate, helpers]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", ...style }}
      aria-label="3D desk setup viewer"
    />
  );
}

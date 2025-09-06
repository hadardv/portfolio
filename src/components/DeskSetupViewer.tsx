// DeskSetupViewer.tsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
// mouse controls (zoom, rotate)
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// This loads the glb file format
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// decompressed draco compressed meshes inside glb.
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

type Props = {
  src: string; // path to my 3d model
  style?: React.CSSProperties; // inline styles for the container
  autoRotate?: boolean; // spins the camera automatically
  helpers?: boolean; //toggle grid/axes for debbuging
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
    // Creates the GPU renderer, antialias true smooths jagged edges
    // alpha true enables transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
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
    scene.background = null;

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

    // Environment (IBL)
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    // Lights
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

    // Soft ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 50),
      new THREE.ShadowMaterial({ opacity: 0.05 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Frame camera utility
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

    // GLTF + DRACO loader
    const loader = new GLTFLoader();

    // Option 1: use Google's hosted decoder (easiest)
    const draco = new DRACOLoader();
    draco.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
    );
    // Option 2 (local): put decoder files in /public/draco/ and use:
    // draco.setDecoderPath("/draco/");
    loader.setDRACOLoader(draco);

    let modelRoot: THREE.Object3D | null = null;

    loader.load(
      src, // e.g. "/models/setup-draco.glb"
      (gltf) => {
        modelRoot = gltf.scene;

        modelRoot.traverse((obj) => {
          const mesh = obj as THREE.Mesh;
          if (mesh.isMesh) {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
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

    // Resize
    const onResize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    // Loop
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
      draco.dispose();
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

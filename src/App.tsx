// App.tsx
import DeskSetupViewer from "./components/DeskSetupViewer";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DeskSetupViewer
        src="/models/gaming_setup_low-poly.glb"
        autoRotate
        helpers={false}
      />
    </div>
  );
}

// App.tsx
import DeskSetupViewer from "./components/DeskSetupViewer";
import "./App.css";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DeskSetupViewer
        src="/models/setup-draco.glb"
        autoRotate
        helpers={false}
      />
    </div>
  );
}

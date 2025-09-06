// App.tsx
import DeskSetupViewer from "./components/DeskSetupViewer";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DeskSetupViewer src="/models/setup.glb" autoRotate helpers={false} />
    </div>
  );
}

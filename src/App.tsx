// App.tsx
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="h-screen bg-gradient-to-r from-[#280137] to-black min-h-screen">
          <Navbar />
          <Hero />
          <div className="h-screen bg-gradient-to-b from-black to-[#280137] min-h-screen">
            <About />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

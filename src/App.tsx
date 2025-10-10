// App.tsx
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GlobalCursorGlow from "./utils/GlobalCursorGlow";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalCursorGlow />
      <div className="relative z-0">
        <div className="h-screen bg-gradient-to-r from-[#280137] to-black min-h-screen">
          <Navbar />
          <Hero />
          <div className="h-screen bg-gradient-to-b from-black to-[#280137] min-h-screen">
            <About />
          </div>
          <div className="h-screen bg-gradient-to-t from-black to-[#280137] min-h-screen">
            <Projects />
          </div>
          {/* <div className="h-10px bg-gradient-to-b from-black to-[#280137] min-h-screen">
            <Tech />
          </div> */}
          <div className="h-screen bg-gradient-to-b from-black to-[#280137] min-h-screen">
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

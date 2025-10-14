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
  //bg-gradient-to-r from-[#280137] to-black
  return (
    <BrowserRouter>
      <GlobalCursorGlow />
      <div className="section-one">
        <Navbar />
        <Hero />
        <div className="section-two">
          <About />
        </div>
        <div className="section-one">
          <Projects />
        </div>
        <div className="section-two">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

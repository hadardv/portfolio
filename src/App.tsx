// App.tsx
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import GlobalCursorGlow from "./utils/GlobalCursorGlow";

export default function App() {
  return (
    <BrowserRouter>
      {/* <GlobalCursorGlow /> */}
      <Navbar />
      <Hero />
      <div className="section-one">
        <About />
      </div>
      <div className="section-two">
        <Projects />
      </div>
      <div className="section-one">
        <About />
      </div>
      <div className="section-two">
        <Contact />
      </div>
    </BrowserRouter>
  );
}

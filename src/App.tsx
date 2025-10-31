// App.tsx
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stack from "./components/Stack";
// import GlobalCursorGlow from "./utils/GlobalCursorGlow";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-[calc(64px+env(safe-area-inset-top))]">
        <div className="section-two">
          <Hero />
        </div>
        <div className="section-one">
          <About />
        </div>
        <div className="section-two">
          <Projects />
        </div>
        <Stack />
        <div className="section-two">
          <Contact />
        </div>
      </main>
    </BrowserRouter>
  );
}

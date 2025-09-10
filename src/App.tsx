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
        <div className="bg-[url('/herobg4.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
    </BrowserRouter>
  );
}

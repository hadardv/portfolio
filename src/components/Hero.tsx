import { useEffect, useRef } from "react";
// import DeskSetupViewer from "../components/DeskSetupViewer";
import "./hero.css";

export default function Hero() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Auto-size the blue name pill to the text width
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const text = svg.querySelector<SVGTextElement>("#name-text");
    const bg = svg.querySelector<SVGRectElement>("#name-bg");
    if (!text || !bg) return;

    const padX = 12; // left/right padding for the pill
    const box = text.getBBox();
    bg.setAttribute("width", String(box.width + padX * 2));
    text.setAttribute(
      "x",
      String(parseFloat(bg.getAttribute("x") || "0") + padX)
    );
  }, []);

  return (
    <section id="hero" className="container ">
      {/* Background 3D scene */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden opacity-80">
        <DeskSetupViewer
          src="/models/space_boi.glb"
          fit="cover"
          interactive
          autoRotate
          style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 1 }}
        />
      </div> */}

      <div className="content relative z-20 sticky top-16 md:top-24 px-6 sm:px-10 md:px-16">
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 614 390"
          width="614"
          height="456"
        >
          <g id="Frame">
            <g id="headline">
              <text
                x="60"
                y="120"
                fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
                fontSize="92"
                fontWeight="800"
                fill="#fff0d0ff"
                letterSpacing="1"
                id="text"
              >
                <tspan x="60" dy="0">
                  Frontend,
                </tspan>
                <tspan x="60" dy="108">
                  Backend,
                </tspan>
                <tspan x="60" dy="108">
                  Fullstack.
                </tspan>
              </text>
            </g>

            <g id="box-figma">
              <g id="box">
                <path
                  id="figny9-box"
                  strokeWidth="2"
                  stroke="#2563EB"
                  fill="#2563EB"
                  fillOpacity="0.05"
                  d="M587 10H28V350H587V10Z"
                />
                <path
                  id="figny9-adjust-1"
                  strokeWidth="2"
                  stroke="#2563EB"
                  fill="white"
                  d="M33 5H23V15H33V5Z"
                />
                <path
                  id="figny9-adjust-3"
                  strokeWidth="2"
                  stroke="#2563EB"
                  fill="white"
                  d="M33 325H23V335H33V325Z"
                />
                <path
                  id="figny9-adjust-4"
                  strokeWidth="2"
                  stroke="#2563EB"
                  fill="white"
                  d="M592 325H582V335H592V325Z"
                />
                <path
                  id="figny9-adjust-2"
                  strokeWidth="2"
                  stroke="#2563EB"
                  fill="white"
                  d="M592 5H582V15H592V5Z"
                />
              </g>
            </g>

            <g id="cursor">
              <path
                strokeWidth="2"
                stroke="white"
                fill="#2563EB"
                d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z"
              />

              <rect
                id="name-bg"
                x="470"
                y="343"
                rx="6"
                ry="6"
                width="130"
                height="30"
                fill="#2563EB"
              />

              <text
                id="name-text"
                x="482"
                y="364"
                fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
                fontSize="16"
                fill="white"
              >
                Hadar David
              </text>
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
}

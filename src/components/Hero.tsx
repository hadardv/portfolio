import { useEffect, useRef } from "react";
import "./hero.css";

export default function Hero() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const text = svg.querySelector<SVGTextElement>("#name-text");
    const bg = svg.querySelector<SVGRectElement>("#name-bg");
    if (!text || !bg) return;

    const padX = 12;
    const box = text.getBBox();
    bg.setAttribute("width", String(box.width + padX * 2));
    text.setAttribute(
      "x",
      String(parseFloat(bg.getAttribute("x") || "0") + padX)
    );
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <svg
          className="name"
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-40 0 654 390"
          role="img"
          aria-labelledby="heroTitle"
          preserveAspectRatio="xMidYMid meet"
        >
          <title id="heroTitle">Frontend, Backend, Fullstack</title>
          <g id="Frame">
            <g id="headline" transform="translate(0,-26)">
              <text
                x="20"
                y="120"
                fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
                fontSize="92"
                fontWeight="800"
                fill="#fff0d0ff"
                letterSpacing="1"
                id="text"
              >
                <tspan x="48" dy="0">
                  Frontend,
                </tspan>
                <tspan x="48" dy="108">
                  Backend,
                </tspan>
                <tspan x="48" dy="108">
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
                x="472"
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

        {/* CTA */}
        <div className="cta">
          <label className="radio-label">
            <input
              type="radio"
              name="option"
              checked
              disabled
              className="radio-input"
            />
            <span className="radio-custom"></span>
            <span className="radio-text">Slide to find more</span>
          </label>
        </div>
      </div>
    </section>
  );
}

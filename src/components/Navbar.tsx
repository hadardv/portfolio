import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-20 ${
        scrolled ? "bg-primary/90" : "bg-white/15"
      } backdrop-blur`}
    >
      {/* centered row with reliable padding */}
      <div className="container mx-auto max-w-[1280px] h-16 px-4 sm:px-8 flex items-center justify-between">
        <Link
          to="/"
          className="shrink-0"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold">
            Hadar{" "}
            <span className="hidden sm:inline">| Full Stack Developer</span>
          </p>
        </Link>

        <ul className="hidden sm:flex items-center gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-[18px] font-medium cursor-pointer ${
                active === nav.title ? "text-white" : "text-white/80"
              } hover:text-white`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <button
          className="sm:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setToggle((t) => !t)}
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]"
          />
        </button>
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } sm:hidden p-6 black-gradient absolute top-16 right-4 min-w-[180px] z-30 rounded-xl`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-[16px] font-medium ${
                active === nav.title ? "text-white" : "text-white/80"
              }`}
              onClick={() => {
                setToggle(false);
                setActive(nav.title);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

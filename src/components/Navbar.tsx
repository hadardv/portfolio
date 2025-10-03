import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function go(id: string, e: React.MouseEvent) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const navH = document.querySelector("nav")?.offsetHeight ?? 72;
    const y = el.getBoundingClientRect().top + window.scrollY - navH + 50;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActive(id);
    setToggle(false);
  }

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
      <div className="w-full h-16 flex items-center justify-between !px-4 sm:!px-6 lg:!px-8">
        <Link
          to="/"
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

        <ul className="hidden sm:flex items-center gap-10 ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-[18px] font-medium cursor-pointer ${
                active === nav.id ? "text-white" : "text-white/80"
              } hover:text-white`}
            >
              <a href={`#${nav.id}`} onClick={(e) => go(nav.id, e)}>
                {nav.title}
              </a>
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
        <ul className="flex flex-col gap-4 ">
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
              <a href={`#${nav.id}`} onClick={(e) => go(nav.id, e)}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

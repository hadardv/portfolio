import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import menu from "../assets/menu.svg";
import close from "../assets/close.png";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function go(id: string, e: React.MouseEvent) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const navH = document.querySelector("nav")?.offsetHeight ?? 72;
    const y = el.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActive(id);
    setToggle(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur
    ${scrolled ? "top-8 sm:top-0" : "top-0"}`}
      style={{ WebkitBackdropFilter: "blur(12px)" }}
    >
      <div className="w-full h-16 flex items-center justify-between !px-4 sm:!px-6 lg:!px-8">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className={`text-[#5a189a] text-[18px] font-bold`}>
            Hadar{" "}
            <span className="hidden sm:inline">| Full Stack Developer</span>
          </p>
        </Link>

        <ul className="hidden sm:flex items-center gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-[#5a189a] text-[18px] font-medium cursor-pointer ${
                active === nav.id ? "text-[#5a189a]" : "text-[#5a189a]/80"
              } hover:text-[#5a189a]`}
            >
              <a href={`#${nav.id}`} onClick={(e) => go(nav.id, e)}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="sm:hidden p-2 "
          aria-label="Toggle menu"
          onClick={() => setToggle((t) => !t)}
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] "
          />
        </button>
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } sm:hidden flex-col gap-3 p-6 absolute top-16 right-10 min-w-[180px] z-30 rounded-xl bg-white/60 backdrop-blur-md shadow-lg`}
      >
        <ul className="flex flex-col gap-3 w-full">
          {navLinks.map((nav) => (
            <li key={nav.id} onClick={() => setToggle(false)}>
              <a
                href={`#${nav.id}`}
                onClick={(e) => go(nav.id, e)}
                className={`block w-full text-center py-2 px-3 rounded-lg text-[#5a189a] font-medium
                      hover:bg-white hover:shadow-sm transition
                      ${
                        active === nav.id
                          ? "bg-white text-[#4a148c] font-semibold"
                          : "bg-white/70"
                      }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

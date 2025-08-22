import { useEffect, useState } from "react";
import { navLink } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-white-50 text-xl md:text-2xl font-semibold"
        >
          TRIPBANDUNG
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-7">
            {navLink.map((nav) => (
              <li key={nav.name} className="text-white-50 relative group">
                <a href={nav.link}>
                  <span>{nav.name}</span>
                  <span className="absolute -bottom-1 w-0 left-0 bg-white h-0.5 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white-50 text-2xl z-[101]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 right-5 bg-black rounded-lg shadow-lg md:hidden z-[101]">
            <ul className="flex flex-col space-y-4 p-5">
              {navLink.map((nav) => (
                <li key={nav.name}>
                  <a
                    href={nav.link}
                    className="text-white-50"
                    onClick={() => setMenuOpen(false)} // close after click
                  >
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

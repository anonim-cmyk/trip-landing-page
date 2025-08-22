import { navLink } from "../constants";

const Navbar = () => {
  return (
    <header className="fixed w-full py-5 px-5 md:px-20 z-[100] transition-all duration-300 ease-in-out">
      <div className="mx-auto items-center flex justify-between">
        <a
          href="#hero"
          className="text-white-50 text-xl md:text-2xl font-semibold"
        >
          TRIPBANDUNG
        </a>
        <nav>
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
      </div>
    </header>
  );
};

export default Navbar;

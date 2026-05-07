import logo from "../assets/images/LOGO.png";
import NavItem from "./navItem";
import type { NavItemInterface } from "./navItem";
import ResponsiveMenu from "./ResponsiveMenu";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const itens: NavItemInterface[] = [
    { name: "Home", href: "/home" },
    { name: "Passeios", href: "/trips" },
    { name: "Rotas", href: "/rotas" },
    { name: "Kittrip", href: "/kittrip" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed md:inset-x-20 inset-x-10 top-6 z-50 md:px-4">
      <nav className=" md:rounded-full rounded-3xl bg-custom-white/95 shadow-2xl backdrop-blur-md border border-slate-200">
        <div className="flex items-center justify-between px-6 py-2">
          <div>
            <a href="/">
              <img src={logo} alt="Logo" className="w-35 md:w-40" />
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-5 list-none">
              {itens.map((item, index) => (
                <NavItem key={index} name={item.name} href={item.href} />
              ))}
            </ul>
          </div>
          <div className=" items-center gap-6 hidden md:flex">
            <button className="group inline-flex items-center gap-3 rounded-full bg-white px-2 py-2 shadow-xl transition-all duration-300 hover:scale-105">
              <span className="pl-4 text-black font-alan-sans-medium">
                Agendar Passeio
              </span>

              <div className="grid h-10 w-10 place-items-center rounded-full bg-custom-blue-light text-white">
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>
            </button>
          </div>
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </div>
        </div>
      </nav>

      <ResponsiveMenu open={open} />
    </header>
  );
}

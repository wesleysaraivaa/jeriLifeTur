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
    { name: "Home", href: "#home" },
    { name: "Passeios", href: "#passeios" },
    { name: "Tour Leste", href: "#tour-leste" },
    { name: "Tour Oeste", href: "#tour-oeste" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  const [open, setOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Fecha o menu quando clica em um link
  };

  return (
    <header className="fixed md:inset-x-10 inset-x-4 top-3 z-50 md:px-4">
      <nav className=" md:rounded-full rounded-2xl bg-custom-white/90 shadow-2xl backdrop-blur-lg border border-white/20">
        <div className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3">
          <div>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick("#home"); }}>
              <img src={logo} alt="Logo" className="w-28 sm:w-32 md:w-40" />
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-5 list-none">
              {itens.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      handleLinkClick(item.href); 
                    }}
                  >
                    <NavItem name={item.name} href={item.href} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" items-center gap-6 hidden md:flex">
            <button 
              className="group inline-flex items-center gap-3 rounded-full bg-white px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 shadow-xl transition-all duration-300 hover:scale-105"
              onClick={(e) => { e.preventDefault(); handleLinkClick("#contato"); }}
            >
              <span className="text-custom-blue font-alan-sans-medium text-[clamp(0.75rem,1.5vw,1rem)]">
                Agendar Passeio
              </span>

              <div className="grid h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 place-items-center rounded-full bg-custom-blue-light text-white group-hover:bg-white group-hover:text-custom-blue-light transition-all duration-300">
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>
            </button>
          </div>
          <div className="md:hidden text-custom-blue cursor-pointer" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faBarsStaggered} className="text-xl" />
          </div>
        </div>
      </nav>

      <ResponsiveMenu open={open} handleLinkClick={handleLinkClick} />
    </header>
  );
}

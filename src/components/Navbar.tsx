import logo from "../assets/images/LOGO.png";
import NavItem from "./navItem";
import type { NavItemInterface } from "./navItem";
import { CalendarDays, Menu } from "lucide-react";
import ResponsiveMenu from "./ResponsiveMenu";
import { useState } from "react";

export default function Navbar() {
  const itens: NavItemInterface[] = [
    { name: "Home", href: "/home" },
    { name: "Passeios", href: "/trips" },
    { name: "Rotas", href: "/rotas" },
    { name: "Kittrip", href: "/kittrip" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-6 z-50 px-4">
      <nav className=" md:rounded-full rounded-3xl bg-custom-white/95 shadow-2xl backdrop-blur-md border border-slate-200">
        <div className="container flex items-center justify-between py-4">
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
          <div className="flex items-center gap-6">
            <button className="flex px-2 py-1 overflow-hidden rounded-full bg-[#F5F5F5]">
              <span className="md:px-5 px-3 py-2 font-alan-sans-medium text-sm text-custom-blue-light ">
                Agendar Passeio
              </span>
              <span className="flex items-center justify-center bg-custom-blue-light px-2.5 rounded-full">
                <CalendarDays size={20} />
              </span>
            </button>
          </div>
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu size={24} className="text-4xl" />
          </div>
        </div>
      </nav>

      <ResponsiveMenu open={open} />
    </header>
  );
}

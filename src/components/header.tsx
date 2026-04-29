import { CalendarDays, MoveUpRight } from "lucide-react";
import NavItem from "./navItem";
import type { NavItemInterface } from "./navItem";
import logo from "../assets/images/LOGO.png";

export default function Header() {
  const itens: NavItemInterface[] = [
    { name: "Home", href: "/home" },
    { name: "Passeios", href: "/trips" },
    { name: "Rotas", href: "/rotas" },
    { name: "Kittrip", href: "/kittrip" },
  ];

  return (
    <header className="fixed inset-x-0 top-6 z-50 mx-auto flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-6xl rounded-full bg-custom-white/95 px-6 py-4 shadow-2xl backdrop-blur-md border border-slate-200">
        <div>
          <a href="/">
            <img src={logo} alt="Logo" className="w-40 object-cover h-full" />
          </a>
        </div>

        <ul className="flex items-center gap-6 list-none">
          {itens.map((item, index) => (
            <NavItem key={index} name={item.name} href={item.href} />
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <CalendarDays size={20} />
          <button className="flex px-2 py-1 overflow-hidden rounded-full bg-[#F5F5F5]">
            <span className="px-5 py-2 font-alan-sans-medium text-sm text-custom-blue-light ">
              Agendar Passeio
            </span>
            <span className="flex items-center justify-center bg-custom-blue-light px-2.5 rounded-full">
              <MoveUpRight size={20} />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

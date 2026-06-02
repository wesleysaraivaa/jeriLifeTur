import { motion, AnimatePresence } from "framer-motion";

type ResponsiveMenuProps = {
  open: boolean;
  handleLinkClick: (href: string) => void;
};

export default function ResponsiveMenu({ open, handleLinkClick }: ResponsiveMenuProps) {
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Passeios", href: "#passeios" },
    { name: "Tour Leste", href: "#tour-leste" },
    { name: "Tour Oeste", href: "#tour-oeste" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className="mt-3"
        >
          <ul className="flex flex-col justify-center items-center gap-6 py-6 px-4 rounded-2xl bg-custom-white/90 shadow-2xl backdrop-blur-lg border border-white/20">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-xl font-bold text-custom-blue hover:text-custom-blue-light transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

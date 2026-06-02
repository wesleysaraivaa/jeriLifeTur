import { motion, AnimatePresence } from "framer-motion";

type ResponsiveMenuProps = {
  open: boolean;
};

export default function ResponsiveMenu({ open }: ResponsiveMenuProps) {
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
            <li>
              <a
                href="/home"
                className="text-xl font-bold text-custom-blue hover:text-custom-blue-light transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/trips"
                className="text-xl font-bold text-custom-blue hover:text-custom-blue-light transition-colors"
              >
                Passeios
              </a>
            </li>
            <li>
              <a
                href="/rotas"
                className="text-xl font-bold text-custom-blue hover:text-custom-blue-light transition-colors"
              >
                Rotas
              </a>
            </li>
            <li>
              <a
                href="/kittrip"
                className="text-xl font-bold text-custom-blue hover:text-custom-blue-light transition-colors"
              >
                Kittrip
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

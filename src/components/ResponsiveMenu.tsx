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
        >
          <ul className="flex flex-col justify-center items-center gap-10 py-4 rounded-3xl bg-custom-white/95 shadow-2xl backdrop-blur-md border border-slate-200">
            <li>
              <a
                href="/home"
                className="text-lg font-bold text-custom-blue-light"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/trips"
                className="text-lg font-bold text-custom-blue-light"
              >
                Passeios
              </a>
            </li>
            <li>
              <a
                href="/rotas"
                className="text-lg font-bold text-custom-blue-light"
              >
                Rotas
              </a>
            </li>
            <li>
              <a
                href="/kittrip"
                className="text-lg font-bold text-custom-blue-light"
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

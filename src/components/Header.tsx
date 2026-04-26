import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import logo from "@/assets/fontafix-logo.svg";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
        >
          <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-2">
              <img src={logo} alt="Fontafix" className="h-6 md:h-7 w-auto" />
            </a>
            <a
              href="tel:+34900000000"
              className="inline-flex items-center gap-2 bg-gradient-cyan text-navy-deep font-semibold px-4 py-2.5 rounded-full text-sm shadow-cyan hover:scale-105 active:scale-95 transition-transform"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              <span className="hidden sm:inline">Llamar ahora</span>
              <span className="sm:hidden">Llamar</span>
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

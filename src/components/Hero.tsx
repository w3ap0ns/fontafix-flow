import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, ArrowRight, Droplets } from "lucide-react";
import logo from "@/assets/fontafix-logo.svg";
import flow from "@/assets/hero-flow.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-gradient-hero text-white"
    >
      {/* Parallax flow image */}
      <motion.img
        src={flow}
        alt=""
        aria-hidden
        style={{ y: y1 }}
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen pointer-events-none"
      />

      {/* Giant background type */}
      <motion.div
        style={{ y: y2, opacity }}
        aria-hidden
        className="absolute -bottom-10 -left-6 md:-left-10 select-none pointer-events-none"
      >
        <span className="font-display text-[28vw] md:text-[18vw] leading-none text-stroke text-white/10 tracking-tighter block">
          FLOW
        </span>
      </motion.div>

      {/* Floating drop */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-8 md:right-24 w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-cyan blur-2xl opacity-70"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-cyan/40 blur-3xl"
      />

      {/* Header logo */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-6 md:pt-8 flex items-center justify-between">
        <img src={logo} alt="Fontafix" className="h-7 md:h-9 w-auto invert brightness-0" style={{ filter: "invert(1) brightness(2)" }} />
        <a
          href="tel:+34900000000"
          className="hidden md:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
        >
          <Phone className="w-4 h-4" /> +34 900 000 000
        </a>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-28 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          Disponibles 24/7 en Castellón
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter max-w-5xl"
        >
          Fontanería <br />
          <span className="relative inline-block">
            <span className="bg-gradient-cyan bg-clip-text text-transparent">profesional</span>
            <Droplets className="absolute -top-2 -right-8 md:-right-12 w-6 h-6 md:w-10 md:h-10 text-cyan animate-float" />
          </span>{" "}
          <br className="hidden md:block" />
          en Castellón.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed"
        >
          Reparaciones, instalaciones y urgencias resueltas con honestidad,
          precisión y precios sin sorpresas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 bg-gradient-cyan text-navy-deep font-bold px-8 py-4 rounded-full text-base shadow-cyan hover:shadow-[0_30px_80px_-20px_oklch(0.72_0.18_230_/_0.7)] hover:scale-[1.03] active:scale-95 transition-all"
          >
            Pide tu presupuesto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </a>
          <a
            href="tel:+34900000000"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/20 active:scale-95 transition-all"
          >
            <Phone className="w-5 h-5" />
            Llamar ahora
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-4 md:gap-10 max-w-2xl"
        >
          {[
            { v: "15+", l: "Años de experiencia" },
            { v: "24/7", l: "Servicio urgencias" },
            { v: "4.9★", l: "Valoración media" },
          ].map((s) => (
            <div key={s.l} className="border-l-2 border-cyan/60 pl-4">
              <div className="font-display text-3xl md:text-4xl text-cyan">{s.v}</div>
              <div className="text-xs md:text-sm text-white/60 mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

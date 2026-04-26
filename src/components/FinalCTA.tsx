import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contacto" className="relative bg-navy-deep text-white overflow-hidden">
      {/* giant background type */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <div className="font-display text-[28vw] md:text-[18vw] leading-none text-stroke text-white/[0.06] tracking-tighter">
          FONTAFIX
        </div>
      </div>

      {/* glow */}
      <div aria-hidden className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[80vw] h-96 rounded-full bg-cyan/40 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-32 md:py-44 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block text-cyan font-mono text-sm uppercase tracking-widest"
        >
          ¿Listo para arreglarlo?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-6 leading-[0.9] tracking-tighter"
        >
          Llámanos. <br />
          <span className="text-cyan italic font-light">
            Lo solucionamos hoy.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 text-lg md:text-xl text-white/70 max-w-xl mx-auto"
        >
          Presupuesto sin compromiso. Atendemos toda la provincia de Castellón.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="tel:+34900000000"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-cyan text-navy-deep font-bold px-10 py-5 rounded-full text-lg shadow-cyan hover:scale-[1.04] active:scale-95 transition-all"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            900 000 000
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="mailto:hola@fontafix.es"
            className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-cyan font-medium px-6 py-4 transition"
          >
            o escríbenos a hola@fontafix.es
          </a>
        </motion.div>
      </div>

      {/* footer */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-white/50">
          <span>© {new Date().getFullYear()} Fontafix · Castellón de la Plana</span>
          <span className="font-mono text-xs tracking-widest uppercase">Fontanería · Calefacción · Urgencias</span>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Clock, ShieldCheck, BadgeEuro, Sparkles } from "lucide-react";

const items = [
  { icon: Clock, title: "24/7", sub: "Disponibilidad", desc: "Cubrimos urgencias cualquier día del año, sin recargos abusivos." },
  { icon: ShieldCheck, title: "100%", sub: "Certificados", desc: "Técnicos titulados y empresa registrada en la Generalitat Valenciana." },
  { icon: BadgeEuro, title: "0€", sub: "Sorpresas", desc: "Presupuesto cerrado por escrito antes de empezar el trabajo." },
  { icon: Sparkles, title: "★★★★★", sub: "Garantía", desc: "Garantía real de 2 años en todos nuestros trabajos e instalaciones." },
];

export function WhyUs() {
  return (
    <section className="relative py-28 md:py-40 bg-secondary overflow-hidden">
      <div aria-hidden className="absolute -right-20 top-20 w-96 h-96 rounded-full bg-gradient-cyan opacity-20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <span className="text-cyan font-mono text-sm uppercase tracking-widest">Por qué Fontafix</span>
            <h2 className="font-display text-5xl md:text-7xl mt-4 leading-[0.9]">
              Cuatro razones, <br />
              <span className="text-cyan italic font-light">cero excusas.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-6 md:col-start-7 text-lg text-muted-foreground"
          >
            Un equipo local que entiende Castellón. Trato directo, materiales de calidad y la
            tranquilidad de un servicio que cumple con lo prometido.
          </motion.p>
        </div>

        {/* Overlapping cards */}
        <div className="relative mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.sub}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative bg-card rounded-3xl p-7 md:p-8 border border-border shadow-soft hover:shadow-cyan hover:-translate-y-2 transition-all duration-500 ${
                i === 1 ? "lg:translate-y-8" : ""
              } ${i === 3 ? "lg:translate-y-8" : ""}`}
            >
              <it.icon className="w-7 h-7 text-cyan" strokeWidth={2} />
              <div className="mt-8">
                <div className="font-display text-5xl md:text-6xl text-navy-deep leading-none">{it.title}</div>
                <div className="font-display text-sm uppercase tracking-widest text-cyan mt-2">{it.sub}</div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

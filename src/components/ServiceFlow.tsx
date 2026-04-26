import { motion } from "framer-motion";
import { AlertTriangle, Search, Wrench, Flame } from "lucide-react";

const steps = [
  {
    icon: AlertTriangle,
    title: "Urgencias 24/7",
    desc: "Llegamos en menos de 60 minutos a cualquier punto de Castellón ante cualquier emergencia.",
    tag: "01 — Aviso",
  },
  {
    icon: Search,
    title: "Detección de fugas",
    desc: "Localizamos la fuga sin obras innecesarias usando tecnología de detección no invasiva.",
    tag: "02 — Diagnóstico",
  },
  {
    icon: Wrench,
    title: "Instalaciones",
    desc: "Baños, cocinas, redes de agua y desagües instalados con materiales de primera marca.",
    tag: "03 — Solución",
  },
  {
    icon: Flame,
    title: "Calefacción & ACS",
    desc: "Calderas, termos y sistemas de calefacción. Mantenimiento, reparación y sustitución.",
    tag: "04 — Confort",
  },
];

export function ServiceFlow() {
  return (
    <section id="servicios" className="relative py-28 md:py-40 overflow-hidden">
      {/* huge background word */}
      <div aria-hidden className="absolute inset-x-0 top-10 select-none pointer-events-none">
        <div className="font-display text-[22vw] md:text-[14vw] leading-none text-stroke text-navy-deep/[0.05] text-center tracking-tighter">
          SOLUCIÓN
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="text-cyan font-mono text-sm uppercase tracking-widest">Nuestro flujo</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 leading-[0.95]">
            Del problema <br />
            <span className="italic font-light">al</span> <span className="text-cyan">arreglo</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Un proceso transparente, rápido y sin sorpresas. Así trabaja Fontafix.
          </p>
        </motion.div>

        <div className="relative mt-20 md:mt-28">
          {/* connecting line */}
          <div aria-hidden className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative group ${i % 2 === 1 ? "md:translate-y-12" : ""}`}
              >
                {/* node dot */}
                <div className="hidden md:flex absolute -top-12 left-8 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-cyan ring-4 ring-cyan/20 group-hover:ring-cyan/40 transition" />
                </div>

                <div className="relative bg-card rounded-3xl p-6 md:p-7 border border-border shadow-soft hover:shadow-navy hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col items-start gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-cyan flex items-center justify-center text-navy-deep">
                      <s.icon className="w-6 h-6" strokeWidth={2.2} />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground tracking-wider">{s.tag}</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl leading-tight">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

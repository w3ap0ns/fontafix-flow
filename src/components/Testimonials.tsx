import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const reviews = [
  {
    name: "María Sánchez",
    role: "Vecina del Grao",
    photo: t2,
    quote: "Llamé un domingo por la noche por una fuga y vinieron en menos de 40 minutos. Profesionales, limpios y muy honestos con el precio.",
  },
  {
    name: "Carlos Bellver",
    role: "Restaurante en el centro",
    photo: t3,
    quote: "Renovaron toda la fontanería del local sin parar el negocio. Trabajo impecable y plazos cumplidos al día. Repetiremos seguro.",
  },
  {
    name: "Javier Moliner",
    role: "Comunidad de propietarios",
    photo: t1,
    quote: "Detectaron una fuga complicada en el garaje sin romper nada. Otra empresa nos había presupuestado el triple. Recomendados 100%.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  const go = (d: number) => setI((p) => (p + d + reviews.length) % reviews.length);

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 select-none pointer-events-none">
        <div className="font-display text-[20vw] md:text-[12vw] leading-none text-stroke text-cyan/10 text-center tracking-tighter">
          OPINIONES
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan font-mono text-sm uppercase tracking-widest">Clientes felices</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4">
            Lo que dicen <br className="md:hidden"/>
            <span className="italic font-light">de nosotros</span>
          </h2>
        </div>

        <div className="relative bg-gradient-hero rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-white shadow-navy overflow-hidden">
          <Quote className="absolute top-8 right-8 w-24 h-24 md:w-40 md:h-40 text-cyan/20" strokeWidth={1} />

          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              <div className="md:col-span-4 flex md:block items-center gap-5">
                <div className="relative w-24 h-24 md:w-full md:aspect-square rounded-2xl md:rounded-3xl overflow-hidden ring-4 ring-cyan/30 shrink-0">
                  <img src={r.photo} alt={r.name} loading="lazy" width={512} height={512} className="w-full h-full object-cover" />
                </div>
                <div className="md:mt-6">
                  <div className="font-display text-xl md:text-2xl">{r.name}</div>
                  <div className="text-sm text-white/60 mt-1">{r.role}</div>
                  <div className="flex gap-1 mt-3">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="w-4 h-4 fill-cyan text-cyan" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="font-display text-2xl md:text-4xl leading-snug tracking-tight">
                  "{r.quote}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 md:mt-14 flex items-center justify-between">
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Reseña ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-cyan" : "w-4 bg-white/30"}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Anterior"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-cyan hover:text-navy-deep active:scale-90 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Siguiente"
                className="w-12 h-12 rounded-full bg-cyan text-navy-deep flex items-center justify-center hover:scale-110 active:scale-90 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceFlow } from "@/components/ServiceFlow";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fontafix · Fontanería profesional en Castellón 24/7" },
      {
        name: "description",
        content:
          "Fontaneros profesionales en Castellón. Urgencias 24/7, detección de fugas, instalaciones y calefacción. Presupuesto sin compromiso.",
      },
      { property: "og:title", content: "Fontafix · Fontanería profesional en Castellón" },
      { property: "og:description", content: "Reparaciones, urgencias e instalaciones con honestidad y precios sin sorpresas." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <ServiceFlow />
      <WhyUs />
      <Testimonials />
      <FinalCTA />
      <WhatsAppFAB />
    </main>
  );
}


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Las recetas tienen de verdad buen sabor?",
    a: "¡Sí! El mayor enfoque de la nutri fue unir salud con sabor de verdad. Nada de comida aburrida — son recetas realmente ricas, probadas y aprobadas."
  },
  {
    q: "¿Son recetas saludables?",
    a: "Todas son saludables, equilibradas y pensadas para ofrecer los nutrientes y vitaminas que su cuerpo necesita para empezar bien el día."
  },
  {
    q: "¿Las recetas sirven para toda la familia?",
    a: "¡Por supuesto! Son ideas que agradan a adultos y niños, con ingredientes accesibles y mucho sabor."
  },
  {
    q: "¿Las recetas son fáciles de hacer?",
    a: "¡Sí! La mayoría de las recetas son simples, con ingredientes accesibles e instrucciones claras, perfectas para el día a día ajetreado."
  },
  {
    q: "¿Necesito saber cocinar para aprovechar?",
    a: "¡No! Las recetas fueron pensadas para todos los niveles de habilidad en la cocina — incluyendo principiantes."
  },
  {
    q: "¿Tienen una lista de ingredientes accesibles?",
    a: "Sí. La nutri priorizó ingredientes que encuentras con facilidad en mercados comunes, sin necesidad de productos caros o raros."
  },
  {
    q: "¿Necesitaré batidora o utensilios especiales?",
    a: "¡No! Las recetas fueron pensadas para el día a día, usando utensilios simples que ya tienes en casa, como cuchara, tenedor, licuadora y sartén."
  }
];

export function FAQ() {
  return (
    <section className="bg-secondary px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="relative mb-16 text-center">
          <div className="absolute top-1/2 hidden h-[2px] w-full bg-primary md:block"></div>
          <h2 className="relative inline-block bg-secondary px-8 font-headline text-2xl font-extrabold text-[#3D1F08]">
            DUDAS FRECUENTES
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="rounded-xl border bg-white px-6 shadow-sm">
              <AccordionTrigger className="text-left font-bold text-[#3D1F08] hover:text-primary hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

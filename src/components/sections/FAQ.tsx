
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "As receitas têm mesmo sabor de verdade?",
    a: "Sim! O maior foco da nutri Camila foi unir saúde com sabor de verdade. Nada de comida sem graça — são receitas realmente gostosas, testadas e aprovadas."
  },
  {
    q: "São receitas saudáveis?",
    a: "Todas são saudáveis, equilibradas e pensadas para oferecer os nutrientes e vitaminas que seu corpo precisa para começar bem o dia."
  },
  {
    q: "As receitas servem para a família toda?",
    a: "Com certeza! São ideias que agradam adultos e crianças, com ingredientes acessíveis e muito sabor."
  },
  {
    q: "As receitas são fáceis de fazer?",
    a: "Sim! A maioria das receitas é simples, com ingredientes acessíveis e instruções claras, perfeitas para o dia a dia corrido."
  },
  {
    q: "Preciso saber cozinhar para aproveitar?",
    a: "Não! As receitas foram pensadas para todos os níveis de habilidade na cozinha — inclusive iniciantes."
  },
  {
    q: "Tem lista de ingredientes acessíveis?",
    a: "Sim. A nutri priorizou ingredientes que você encontra com facilidade em mercados comuns, sem precisar de produtos caros ou raros."
  },
  {
    q: "Vou precisar de batedeira ou utensílios especiais?",
    a: "Não! As receitas foram pensadas para o dia a dia, usando utensílios simples que você já tem em casa, como colher, garfo, liquidificador e frigideira."
  }
];

export function FAQ() {
  return (
    <section className="bg-secondary px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="relative mb-16 text-center">
          <div className="absolute top-1/2 hidden h-[2px] w-full bg-primary md:block"></div>
          <h2 className="relative inline-block bg-secondary px-8 font-headline text-3xl font-extrabold text-[#3D1F08] md:text-4xl">
            DÚVIDAS FREQUENTES
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

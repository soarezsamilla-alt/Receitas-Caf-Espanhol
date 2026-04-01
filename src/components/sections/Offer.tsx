import Image from 'next/image';
import { CheckCircle2, Star } from 'lucide-react';

const valueItems = [
  { name: '+350 Cafés da Manhã de Nutri', price: 'R$129,00' },
  { name: 'Bônus 1: 250 Sobremesas Zero Açúcar', price: '$29.00' },
  { name: 'Bônus 2: 80 Receitas de Marmitas FIT', price: '$27.00' },
  { name: 'Bônus 3: 50 Receitas de Sucos Detox', price: '$24.00' },
  { name: 'Bônus 4: 50 Receitas Anti-Inflamatórias', price: '$24.00' },
  { name: 'Bônus 5: 30 Receitas de Pães sem Glúten', price: '$19.00' },
];

export function Offer() {
  const customImageUrl = 'https://image2url.com/r2/default/images/1774747163588-0537d5b9-3ac4-4282-9ae1-b2349d1997d4.blob';
  
  return (
    <section id="price" className="bg-secondary/50 px-4 py-16">
      <div className="mx-auto max-w-md">
        {/* Card Principal com Efeito de Brilho */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#FFF9F2] border-2 border-primary/40 shadow-[0_0_25px_rgba(232,96,10,0.25)] ring-1 ring-primary/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(232,96,10,0.4)]">
          
          {/* Top Badge */}
          <div className="absolute top-6 right-[-35px] rotate-45 bg-accent px-12 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg z-20">
            Oferta Única
          </div>

          <div className="p-8 text-center md:p-10">
            {/* Header */}
            <header className="mb-6">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <h3 className="font-headline text-2xl font-black text-[#3D1F08] leading-tight">
                350 CAFÉS DA MANHÃ<br />
                <span className="text-primary uppercase">De Nutri (Com Sabor)®</span>
              </h3>
            </header>

            {/* Product Image */}
            <div className="relative mx-auto mb-8 aspect-square w-full max-w-[280px]">
              <Image
                src={customImageUrl}
                alt="350 Cafés da Manhã de Nutri Mockup"
                fill
                className="object-contain"
                data-ai-hint="ebook mockup"
              />
            </div>

            {/* What's Included */}
            <div className="mb-8 space-y-3 rounded-2xl bg-primary/5 p-6 text-left border border-primary/10">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Incluso no pacote:</p>
              {valueItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm font-medium">
                  <span className="flex items-center gap-2 text-[#3D1F08]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2CAC43]" />
                    {item.name}
                  </span>
                  <span className="text-muted-foreground line-through decoration-1 opacity-60">{item.price}</span>
                </div>
              ))}
            </div>

            {/* Pricing Section */}
            <div className="mb-8">
              <p className="text-sm font-bold text-muted-foreground line-through">De R$ 240,00 por apenas:</p>
              <div className="mt-1 flex items-center justify-center gap-1">
                <span className="text-2xl font-bold text-[#3D1F08]">6x</span>
                <span className="text-4xl font-black text-primary">R$ 5,69</span>
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">ou R$ 29,90 à vista</p>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <a 
                href="https://pay.kiwify.com.br/SEU-LINK-AQUI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="animate-pulse-cta active-scale flex w-full items-center justify-center rounded-2xl bg-[#2CAC43] py-5 text-xl font-black uppercase text-white shadow-[0_10px_20px_-5px_rgba(44,172,67,0.4)] transition-all hover:bg-[#1e8a32]"
              >
                COMPRAR AGORA!
              </a>
              <div className="flex items-center justify-center gap-4 text-[10px] font-bold uppercase text-muted-foreground/60">
                <span className="flex items-center gap-1">🔒 Compra Segura</span>
                <span className="flex items-center gap-1">✅ Acesso Imediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

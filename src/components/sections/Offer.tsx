
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckCircle2, Star, Clock } from 'lucide-react';

const valueItems = [
  { name: '+350 Cafés da Manhã de Nutri', price: '$97.00' },
  { name: 'Bônus 1: 250 Sobremesas Zero Açúcar', price: '$29.00' },
  { name: 'Bônus 2: 80 Receitas de Marmitas FIT', price: '$27.00' },
  { name: 'Bônus 3: 50 Receitas de Sucos Detox', price: '$24.00' },
  { name: 'Bônus 4: 50 Receitas Anti-Inflamatórias', price: '$24.00' },
  { name: 'Bônus 5: 30 Receitas de Pães sem Glúten', price: '$19.00' },
];

export function Offer() {
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 });
  const customImageUrl = 'https://image2url.com/r2/default/images/1774747163588-0537d5b9-3ac4-4282-9ae1-b2349d1997d4.blob';

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
            else {
              h = 23; m = 59; s = 59;
            }
          }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const f = (n: number) => n.toString().padStart(2, '0');

  return (
    <section id="price" className="bg-secondary/50 px-4 py-10">
      <div className="mx-auto max-w-lg">
        <div className="relative overflow-hidden rounded-[2rem] bg-white border border-black/10 shadow-2xl">
          
          {/* Header Bar - Timer */}
          <div className="flex h-14 w-full items-center justify-center gap-4 bg-[#1e1b26] px-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 fill-red-600 text-red-600" />
              <span className="text-[10px] font-black uppercase tracking-tighter text-red-600">
                A OFERTA EXPIRA EM
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-black text-[#1e1b26]">
                {f(timeLeft.h)}
              </div>
              <span className="text-sm font-bold text-white">:</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-black text-[#1e1b26]">
                {f(timeLeft.m)}
              </div>
              <span className="text-sm font-bold text-white">:</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-black text-[#1e1b26]">
                {f(timeLeft.s)}
              </div>
            </div>
          </div>

          <div className="p-6 text-center md:p-8">
            {/* Header */}
            <header className="mb-4">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                ))}
              </div>
              <h3 className="font-headline text-xl font-black text-[#3D1F08] leading-tight">
                +350 CAFÉS DA MANHÃ<br />
                <span className="text-primary uppercase">De Nutri (Com Sabor)®</span>
              </h3>
            </header>

            {/* Product Image */}
            <div className="relative mx-auto mb-4 aspect-square w-full max-w-[200px]">
              <Image
                src={customImageUrl}
                alt="350 Cafés da Manhã de Nutri Mockup"
                fill
                className="object-contain"
                data-ai-hint="ebook mockup"
              />
            </div>

            {/* Highlighted Items */}
            <div className="mb-4 space-y-0.5">
              <p className="text-sm font-black text-primary uppercase tracking-tight">+ MARMITAS FIT</p>
              <p className="text-sm font-black text-primary uppercase tracking-tight">+ SOBREMESAS SEM AÇÚCAR</p>
              <p className="text-sm font-black text-primary uppercase tracking-tight">+ SUCOS DETOX</p>
            </div>

            {/* What's Included */}
            <div className="mb-5 space-y-2 rounded-xl bg-primary/5 p-4 text-left border border-primary/10">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Incluso no pacote:</p>
              {valueItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs font-medium">
                  <span className="flex items-center gap-1.5 text-[#3D1F08]">
                    <CheckCircle2 className="h-3 w-3 shrink-0 text-[#2CAC43]" />
                    {item.name}
                  </span>
                  <span className="text-muted-foreground line-through decoration-1 opacity-60">{item.price}</span>
                </div>
              ))}
            </div>

            {/* Pricing Section */}
            <div className="mb-5">
              <p className="text-lg font-black text-[#3D1F08]/60 line-through decoration-[#3D1F08]/40 decoration-2">
                De $ 197,00
              </p>
              <div className="mt-1 flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-primary">$</span>
                <span className="text-7xl font-black tracking-tighter text-primary">
                  7
                </span>
                <span className="text-4xl font-bold text-primary">,90</span>
              </div>
              <div className="mt-2">
                <p className="text-sm font-black uppercase tracking-widest text-[#3D1F08]">
                  PAGAMENTO ÚNICO
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-3">
              <a 
                href="https://pay.kiwify.com.br/SEU-LINK-AQUI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="animate-pulse-cta active-scale flex w-full items-center justify-center rounded-xl bg-[#2CAC43] py-4 text-lg font-black uppercase text-white shadow-lg transition-all hover:bg-[#1e8a32]"
              >
                COMPRAR AGORA!
              </a>
              
              <p className="animate-pulse text-xs font-black text-red-600">
                Você NÃO vai encontrar esse preço depois.
              </p>

              <div className="flex items-center justify-center gap-3 text-[9px] font-bold uppercase text-muted-foreground/60">
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

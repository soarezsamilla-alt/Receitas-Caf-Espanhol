
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
    <section id="price" className="bg-secondary/50 px-4 py-16">
      <div className="mx-auto max-w-lg">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-black/10 shadow-2xl">
          
          {/* Header Bar - Timer (Based on Reference Image) */}
          <div className="flex h-16 w-full items-center justify-center gap-4 bg-[#1e1b26] px-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 fill-red-600 text-red-600" />
              <span className="text-[10px] font-black uppercase tracking-tighter text-red-600 sm:text-xs">
                A OFERTA EXPIRA EM
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-black text-[#1e1b26]">
                {f(timeLeft.h)}
              </div>
              <span className="font-bold text-white">:</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-black text-[#1e1b26]">
                {f(timeLeft.m)}
              </div>
              <span className="font-bold text-white">:</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-black text-[#1e1b26]">
                {f(timeLeft.s)}
              </div>
            </div>
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
                +350 CAFÉS DA MANHÃ<br />
                <span className="text-primary uppercase">De Nutri (Com Sabor)®</span>
              </h3>
            </header>

            {/* Product Image */}
            <div className="relative mx-auto mb-8 aspect-square w-full max-w-[240px]">
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

            {/* Pricing Section (Restored to Primary Orange Style) */}
            <div className="mb-8">
              <p className="text-base font-bold text-[#8a8a8a] line-through decoration-red-500/50 decoration-2">
                De $ 197,00
              </p>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-primary">$</span>
                <span className="text-8xl font-black tracking-tighter text-primary">
                  7
                </span>
                <span className="text-5xl font-bold text-primary">,90</span>
              </div>
              <p className="mt-2 text-xs font-black uppercase tracking-widest text-[#8a8a8a]">
                PAGAMENTO ÚNICO
              </p>
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

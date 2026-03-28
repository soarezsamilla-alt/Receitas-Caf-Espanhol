
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

const valueItems = [
  { name: '+350 Cafés da Manhã de Nutri', price: 'R$129,00' },
  { name: 'Bônus 1: 200 Sobremesas Zero Açúcar', price: 'R$29,00' },
  { name: 'Bônus 2: 60 Receitas de Marmitas FIT', price: 'R$15,00' },
  { name: 'Bônus 3: 60 Receitas de Sucos Detox', price: 'R$29,00' },
  { name: 'Bônus 4: 30 Receitas Anti-Inflamatórias', price: 'R$19,00' },
  { name: 'Bônus 5: 20 Receitas de Pães sem Glúten', price: 'R$19,00' },
];

export function Offer() {
  const mockup = PlaceHolderImages.find(p => p.id === 'ebook-mockup') || PlaceHolderImages[0];
  
  return (
    <section id="price" className="bg-secondary px-4 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-3xl bg-[#BF4D07] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="p-8 text-center md:p-12">
            <div className="relative mx-auto mb-10 h-64 w-64 md:h-80 md:w-80">
              <Image
                src={mockup.imageUrl}
                alt="Product Mockup"
                fill
                className="rounded-2xl object-cover shadow-2xl"
                data-ai-hint={mockup.imageHint}
              />
            </div>

            <h3 className="font-headline text-2xl font-extrabold text-white md:text-3xl">
              350 CAFÉS DA MANHÃ<br />DE NUTRI (COM SABOR)®
            </h3>

            <ul className="mt-8 space-y-3 text-lg font-bold text-white">
              <li className="flex items-center justify-center gap-2">
                <span className="text-[#0eee43]">+</span> MARMITAS FIT
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-[#0eee43]">+</span> SOBREMESAS SEM AÇÚCAR
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-[#0eee43]">+</span> SUCOS DETOX
              </li>
            </ul>

            {/* Value Anchor Box */}
            <div className="mt-10 rounded-2xl border-2 border-primary/40 bg-[#3D1F08] p-8 text-left shadow-inner">
              <p className="mb-6 border-b border-primary/30 pb-4 text-center font-headline text-lg font-bold uppercase tracking-widest text-[#FDF3E7]">
                Tudo que você recebe hoje:
              </p>
              
              <div className="space-y-4">
                {valueItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-dashed border-primary/20 pb-2 text-sm text-[#FDF3E7]">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0eee43]" />
                      {item.name}
                    </span>
                    <span className="text-orange-400 line-through">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t-2 border-primary/50 pt-8 text-center">
                <p className="text-sm font-bold uppercase text-[#FAE8CE]">Valor total:</p>
                <p className="font-headline text-2xl font-bold text-orange-400 line-through">R$240,00</p>
                
                <p className="mt-6 text-sm font-bold uppercase text-white">Hoje por apenas:</p>
                <p className="font-headline text-6xl font-black text-primary md:text-7xl">R$29,90</p>
                <p className="mt-2 text-xl font-bold uppercase text-[#FDF3E7]">ou 6x de R$5,69</p>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://pay.kiwify.com.br/SEU-LINK-AQUI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="animate-pulse-cta inline-block w-full rounded-full bg-[#2CAC43] px-12 py-6 text-2xl font-black uppercase text-white shadow-2xl transition-all hover:bg-[#1e8a32] hover:scale-105"
              >
                COMPRAR AGORA!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

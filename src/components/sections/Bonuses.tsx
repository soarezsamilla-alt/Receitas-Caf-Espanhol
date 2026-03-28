import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const bonuses = [
  { 
    title: '200 SOBREMESAS ZERO AÇÚCAR', 
    oldPrice: 'R$29,00', 
    id: 'BÔNUS 1',
    imgId: 'bonus-desserts'
  },
  { 
    title: '60 RECEITAS DE MARMITAS FIT', 
    oldPrice: 'R$15,00', 
    id: 'BÔNUS 2',
    imgId: 'bonus-lunch'
  },
  { 
    title: '60 RECEITAS DE SUCOS DETOX', 
    oldPrice: 'R$29,00', 
    id: 'BÔNUS 3',
    imgId: 'bonus-detox'
  },
  { 
    title: '30 RECEITAS ANTI-INFLAMATÓRIAS', 
    subtitle: '(Almoço e Jantar)',
    oldPrice: 'R$19,00', 
    id: 'BÔNUS 4',
    imgId: 'bonus-anti-inflammatory'
  },
  { 
    title: '20 RECEITAS DE PÃES SEM GLÚTEN', 
    oldPrice: 'R$19,00', 
    id: 'BÔNUS 5',
    imgId: 'bonus-bread'
  },
];

export function Bonuses() {
  return (
    <section className="bg-secondary px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-headline text-2xl font-normal leading-tight text-foreground">
          RECEBA AINDA<br /><b className="font-extrabold uppercase tracking-tight">+ 5 BÔNUS EXCLUSIVOS:</b>
        </h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((bonus, idx) => {
            const img = PlaceHolderImages.find(p => p.id === bonus.imgId) || PlaceHolderImages[0];
            return (
              <div key={idx} className="group overflow-hidden rounded-2xl bg-[#BF4D07] shadow-xl transition-transform hover:-translate-y-2">
                <div className="relative h-56 w-full">
                  <Image
                    src={img.imageUrl}
                    alt={bonus.title}
                    fill
                    className="object-cover"
                    data-ai-hint={img.imageHint}
                  />
                </div>
                <div className="p-8 text-white">
                  <span className="text-sm font-bold uppercase tracking-widest opacity-80">{bonus.id}:</span>
                  <h4 className="mt-4 font-headline text-2xl font-bold leading-tight">
                    {bonus.title}
                    {bonus.subtitle && <span className="block text-lg font-normal opacity-80">{bonus.subtitle}</span>}
                  </h4>
                  <div className="mt-6 flex items-baseline gap-2">
                    <del className="text-lg opacity-60">{bonus.oldPrice}</del>
                    <span className="text-xl font-bold text-[#0eee43]">HOJE É GRÁTIS!</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a href="#price" className="inline-block rounded-full bg-primary px-12 py-6 text-2xl font-bold uppercase text-white shadow-2xl transition-all hover:bg-primary/90 hover:scale-105">
            QUERO AS RECEITAS!
          </a>
        </div>
      </div>
    </section>
  );
}

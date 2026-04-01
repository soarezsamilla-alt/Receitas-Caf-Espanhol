import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const bonuses = [
  { 
    title: '250 SOBREMESAS ZERO AÇÚCAR', 
    oldPrice: '$29.00', 
    id: 'BÔNUS 1',
    imgId: 'bonus-desserts'
  },
  { 
    title: '80 RECEITAS DE MARMITAS FIT', 
    oldPrice: '$27.00', 
    id: 'BÔNUS 2',
    imgId: 'bonus-lunch'
  },
  { 
    title: '50 RECEITAS DE SUCOS DETOX', 
    oldPrice: '$24.00', 
    id: 'BÔNUS 3',
    imgId: 'bonus-detox'
  },
  { 
    title: '50 RECEITAS ANTI-INFLAMATÓRIAS', 
    subtitle: '(Almoço e Jantar)',
    oldPrice: '$24.00', 
    id: 'BÔNUS 4',
    imgId: 'bonus-anti-inflammatory'
  },
  { 
    title: '30 RECEITAS DE PÃES SEM GLÚTEN', 
    oldPrice: '$19.00', 
    id: 'BÔNUS 5',
    imgId: 'bonus-bread'
  },
];

export function Bonuses() {
  return (
    <section className="bg-secondary px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-headline text-2xl font-normal leading-tight text-foreground">
          RECEBA AINDA<br /><b className="font-extrabold uppercase tracking-tight">+ 5 BÔNUS EXCLUSIVOS:</b>
        </h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {bonuses.map((bonus, idx) => {
            const img = PlaceHolderImages.find(p => p.id === bonus.imgId) || PlaceHolderImages[0];
            return (
              <div key={idx} className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#E8600A] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden sm:h-40">
                  <Image
                    src={img.imageUrl}
                    alt={bonus.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={img.imageHint}
                  />
                  
                  {/* Destaque BÔNUS - Badge Flutuante com Efeito */}
                  <div className="absolute left-3 top-3 z-10">
                    <div className="relative">
                      <div className="absolute -inset-1 animate-pulse rounded-lg bg-white/50 blur"></div>
                      <span className="relative inline-flex items-center rounded-lg bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#E8600A] shadow-xl">
                        <span className="mr-2 h-2 w-2 rounded-full bg-[#E8600A] animate-ping" />
                        {bonus.id}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-4">
                  <h4 className="font-headline text-lg sm:text-base font-bold leading-tight text-white">
                    {bonus.title}
                    {bonus.subtitle && <span className="block text-[11px] font-normal text-white/80 mt-1">{bonus.subtitle}</span>}
                  </h4>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex flex-col">
                      <del className="text-sm font-bold text-white/80 decoration-white/40 decoration-2">{bonus.oldPrice}</del>
                      <span className="text-base font-black text-[#0eee43]">GRÁTIS!</span>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl shadow-inner">
                      🎁
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a href="#price" className="animate-pulse-cta active-scale inline-block rounded-full bg-primary px-10 py-5 text-xl font-black uppercase text-white shadow-2xl transition-all hover:bg-primary/90 hover:scale-105">
            QUERO AS RECEITAS!
          </a>
        </div>
      </div>
    </section>
  );
}

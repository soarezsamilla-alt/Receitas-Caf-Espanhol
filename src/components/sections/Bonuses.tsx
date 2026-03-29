
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
    <section className="bg-secondary px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-headline text-2xl font-normal leading-tight text-foreground">
          RECEBA AINDA<br /><b className="font-extrabold uppercase tracking-tight">+ 5 BÔNUS EXCLUSIVOS:</b>
        </h2>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {bonuses.map((bonus, idx) => {
            const img = PlaceHolderImages.find(p => p.id === bonus.imgId) || PlaceHolderImages[0];
            return (
              <div key={idx} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Image Container with Badge */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={img.imageUrl}
                    alt={bonus.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={img.imageHint}
                  />
                  {/* Floating Badge - Highlighted Focus */}
                  <div className="absolute left-3 top-3 z-10">
                    <span className="inline-flex items-center rounded-lg bg-primary px-3 py-1.5 text-[10px] font-black uppercase tracking-tighter text-white shadow-lg ring-2 ring-white/20 animate-in fade-in zoom-in duration-500">
                      <span className="mr-1 h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      {bonus.id}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h4 className="font-headline text-lg font-bold leading-tight text-[#3D1F08]">
                    {bonus.title}
                    {bonus.subtitle && <span className="block text-xs font-normal text-muted-foreground mt-1">{bonus.subtitle}</span>}
                  </h4>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex flex-col">
                      <del className="text-xs text-muted-foreground opacity-70">{bonus.oldPrice}</del>
                      <span className="text-sm font-black text-[#2CAC43]">GRÁTIS!</span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-secondary/50 flex items-center justify-center">
                      <span className="text-primary font-bold text-xs">🎁</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <a href="#price" className="animate-pulse-cta inline-block rounded-full bg-primary px-12 py-6 text-2xl font-black uppercase text-white shadow-2xl transition-all hover:bg-primary/90 hover:scale-105">
            QUERO AS RECEITAS!
          </a>
        </div>
      </div>
    </section>
  );
}


import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const images = PlaceHolderImages.filter(img => img.id.startsWith('hero-breakfast-'));
  const marqueeImages = [...images, ...images]; // Duplicate for infinite scroll effect

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3D1F08] to-[#5a2f0f] px-4 py-20 text-center text-white">
      {/* Background SVG Wave */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
          <path fill="#ffffff" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <h1 className="font-headline text-2xl font-extrabold uppercase leading-tight tracking-tight">
          +350 CAFÉS DA MANHÃ DE NUTRI
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg text-[#FAE8CE] md:text-xl">
          Prontas em 15 minutos, com ingredientes que você já tem em casa.
          Pare de comer o mesmo pão com ovo por falta de tempo e criatividade.
        </p>

        {/* Carousel */}
        <div className="relative mt-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <div className="flex w-max animate-scroll gap-6">
            {marqueeImages.map((img, idx) => (
              <div key={idx} className="h-48 w-72 overflow-hidden rounded-xl shadow-2xl md:h-56 md:w-80">
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                  data-ai-hint={img.imageHint}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Button asChild size="lg" className="h-16 rounded-full bg-primary px-12 text-xl font-bold uppercase tracking-wide transition-transform hover:scale-105">
            <a href="#price">Quero as Receitas!</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

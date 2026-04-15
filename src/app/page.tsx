
import { Hero } from '@/components/sections/Hero';
import { RecipeGrid } from '@/components/sections/RecipeGrid';
import { Bonuses } from '@/components/sections/Bonuses';
import { Offer } from '@/components/sections/Offer';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { SalesPopup } from '@/components/sections/SalesPopup';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, X, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Lucía Méndez',
    comment: '¡Increíble! He bajado 4 kilos en un mes sin pasar hambre. Los panqueques de banana son mi salvación cada mañana.',
    avatarId: 'avatar-female-1',
    rating: 5
  },
  {
    name: 'Carlos Rivera',
    comment: 'Como alguien que siempre tiene prisa, estas recetas de 15 minutos son perfectas. Sabrosas y realmente me mantienen lleno.',
    avatarId: 'avatar-male-1',
    rating: 5
  },
  {
    name: 'Elena Gómez',
    comment: 'Nunca pensé que la avena pudiera saber tan bien. Las combinaciones de la nutri son geniales. ¡Totalmente recomendado!',
    avatarId: 'avatar-female-2',
    rating: 5
  },
  {
    name: 'Mateo Torres',
    comment: 'La mejor inversión que he hecho este año. Variedad increíble y con ingredientes que ya tenía en mi cocina. ¡Excelente!',
    avatarId: 'avatar-male-2',
    rating: 5
  },
  {
    name: 'Sofía Castro',
    comment: 'Soy muy exigente con el sabor y estas recetas me sorprendieron. El brownie de sartén es de otro mundo, delicioso y sano.',
    avatarId: 'avatar-female-3',
    rating: 5
  },
  {
    name: 'Andrés Pardo',
    comment: 'Práctico y económico. No gasto una fortuna en productos raros y los resultados se notan. Mi energía ha mejorado mucho.',
    avatarId: 'avatar-male-3',
    rating: 5
  }
];

export default function Home() {
  const nutritionist = PlaceHolderImages.find(p => p.id === 'nutritionist') || PlaceHolderImages[0];
  const howToReceiveImageUrl = 'https://image2url.com/r2/default/images/1774747649347-c0afd8d7-12d6-4509-a72a-d94cc2f99cd7.blob';

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Benefits Section */}
      <section className="bg-background px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-headline text-2xl font-normal text-[#3D1F08]">
            LO QUE VAS<br /><b className="font-extrabold uppercase">A ENCONTRAR:</b>
          </h2>
          <ul className="space-y-1">
            {[
              { icon: '✓', text: 'Recetas de hasta 350 calorías' },
              { icon: '☺', text: 'Con sabores deliciosos de verdad' },
              { icon: '🥄', text: 'Con proteínas y vitaminas esenciales' },
              { icon: '⏰', text: 'Listas en hasta 15 minutos' },
              { icon: '🛒', text: 'Con ingredientes comunes' },
              { icon: '🍴', text: 'Usa solo licuadora y sartén' },
              { icon: '📋', text: 'Paso a paso de preparación' },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-base font-medium leading-tight">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                  {item.icon}
                </span>
                <span className="pt-1">{item.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-16 text-center">
            <a href="#price" className="animate-pulse-cta active-scale inline-block rounded-full bg-primary px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-primary/90">
              ¡QUIERO LAS RECETAS!
            </a>
          </div>
        </div>
      </section>

      <RecipeGrid />

      {/* Nutritionist Profile */}
      <section className="bg-background px-4 py-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[1376/768] w-full overflow-hidden">
            <Image
              src={nutritionist.imageUrl}
              alt="Shopia Fonseca"
              fill
              className="object-cover"
              data-ai-hint={nutritionist.imageHint}
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-headline text-2xl font-normal leading-tight text-center md:text-left">
              MENÚ CREADO<br /><b className="font-extrabold uppercase text-primary">POR LA NUTRICIONISTA</b><br />SHOPIA FONSECA
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Shopia Fonseca, nutricionista especializada en alimentación funcional, creó más de 350 recetas de desayunos saludables, deliciosos de verdad y que están listos en hasta 15 minutos. Cada receta fue pensada para ofrecer todos los nutrientes que su cuerpo necesita al inicio del día, con foco en el sabor y la practicidad.
            </p>
          </div>
        </div>
      </section>

      <Bonuses />

      {/* Problems Section */}
      <section className="bg-white px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-headline text-2xl font-normal text-[#3D1F08]">
            PARA PERSONAS<br /><b className="font-extrabold uppercase">QUE ENFRENTAN:</b>
          </h2>
          <ul className="space-y-2">
            {[
              'Falta de opciones saludables de desayuno',
              'Dificultad para perder peso y alimentarse bien',
              'Falta de recetas sabrosas que nutren',
              'Falta de recetas rápidas para el desayuno',
              'Falta de nutrientes necesarios para el día',
            ].map((problem, idx) => (
              <li key={idx} className="flex items-start gap-4 text-base font-medium leading-tight text-[#3D1F08]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  <X className="h-4 w-4" />
                </span>
                <span className="pt-1">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-[#3D1F08] px-4 py-10 text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-headline text-2xl font-normal">
            VEA LAS <b className="font-extrabold uppercase">VENTAJAS</b>
          </h2>
          <ul className="space-y-2">
            {[
              'Menú creado por una nutricionista',
              'Más de 350 opciones saludables',
              'Bajísimas en calorías',
              'Sabor nuevo todos los días sin aburrirse',
              'Hechas en menos de 15 minutos',
              'No necesita utensilios profesionales',
              'Nutrición completa para empezar el día',
            ].map((adv, idx) => (
              <li key={idx} className="flex items-start gap-4 text-base font-medium leading-tight">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <span className="pt-1">{adv}</span>
              </li>
            ))}
          </ul>
          <div className="mt-16 text-center">
            <a href="#price" className="animate-pulse-cta active-scale inline-block rounded-full bg-primary px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-primary/90">
              ¡QUIERO LAS RECETAS!
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-headline text-2xl font-normal text-[#3D1F08]">
            VEA LO QUE DICE<br /><b className="font-extrabold uppercase">QUIEN LAS ADQUIRIÓ:</b>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((test, idx) => {
              const avatar = PlaceHolderImages.find(p => p.id === test.avatarId) || PlaceHolderImages[0];
              return (
                <Card key={idx} className="border-none bg-white shadow-lg transition-transform hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20">
                        <Image
                          src={avatar.imageUrl}
                          alt={test.name}
                          fill
                          className="object-cover"
                          data-ai-hint={avatar.imageHint}
                        />
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-[#3D1F08]">{test.name}</h4>
                        <div className="flex gap-0.5">
                          {[...Array(test.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm italic leading-relaxed text-muted-foreground">
                      "{test.comment}"
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Offer />

      {/* How to Receive Section */}
      <section className="bg-background px-4 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 font-headline text-2xl font-normal text-[#3D1F08]">
            ¿CÓMO<br /><b className="font-extrabold uppercase">RECIBIRÉ LAS RECETAS?</b>
          </h2>
          
          <div className="relative mx-auto my-12 h-64 w-full max-w-2xl">
            <Image
              src={howToReceiveImageUrl}
              alt="Mockup de dispositivos"
              fill
              className="object-contain"
              data-ai-hint="ebook delivery"
            />
          </div>

          <ul className="grid gap-6 text-left md:grid-cols-2">
            {[
              'Recibe por E-mail y WhatsApp',
              'Puedes verlo en el celular',
              'Puedes visualizarlo en la computadora',
              'Míralo en la tablet',
              'Nuevas recetas mensualmente',
              '¿Perdiste la receta? Te la enviamos de nuevo',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-lg font-bold">
                <Check className="text-[#2CAC43]" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7-Day Guarantee Section */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border-4 border-dashed border-primary/20 p-8 md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[#3D1F08] text-white shadow-xl md:h-40 md:w-40">
               <div className="text-center">
                 <span className="block text-5xl font-black leading-none">7</span>
                 <span className="block text-sm font-bold uppercase tracking-widest">Días</span>
                 <span className="block text-[10px] uppercase">de Garantía</span>
               </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-headline text-lg font-black text-[#3D1F08] uppercase leading-tight">
                Su Satisfacción Garantizada o<br />Su Dinero de Vuelta
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                ¡El riesgo es todo mío! Tiene <strong className="text-primary">7 días completos</strong> para acceder al contenido, probar las recetas y ver los resultados. Si no ama las recetas o siente que no es para usted, basta un clic para recibir el 100% de su dinero de vuelta. Sin preguntas y sin complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <Footer />
      
      {/* Sales Notification Popup */}
      <SalesPopup />
    </main>
  );
}

import { Hero } from '@/components/sections/Hero';
import { RecipeGrid } from '@/components/sections/RecipeGrid';
import { Bonuses } from '@/components/sections/Bonuses';
import { Offer } from '@/components/sections/Offer';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, X } from 'lucide-react';

export default function Home() {
  const nutritionist = PlaceHolderImages.find(p => p.id === 'nutritionist') || PlaceHolderImages[0];
  const deviceMockup = PlaceHolderImages.find(p => p.id === 'ebook-mockup') || PlaceHolderImages[0];

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Benefits Section */}
      <section className="bg-background px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-headline text-4xl font-normal text-[#3D1F08] md:text-5xl">
            O QUE VOCÊ<br /><b className="font-extrabold uppercase">VAI ENCONTRAR:</b>
          </h2>
          <ul className="space-y-6">
            {[
              { icon: '✓', text: 'Receitas de até 350 calorias' },
              { icon: '☺', text: 'Com sabores deliciosos de verdade' },
              { icon: '🥄', text: 'Com proteínas e vitaminas essenciais' },
              { icon: '⏰', text: 'Prontas em 15 minutos' },
              { icon: '🛒', text: 'Com ingredientes comuns' },
              { icon: '🍴', text: 'Use apenas liquidificador e frigideira' },
              { icon: '📋', text: 'Passo a passo de preparo' },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-xl font-medium leading-tight">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  {item.icon}
                </span>
                <span className="pt-1">{item.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-16 text-center">
            <a href="#price" className="inline-block rounded-full bg-primary px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-primary/90">
              QUERO AS RECEITAS!
            </a>
          </div>
        </div>
      </section>

      <RecipeGrid />

      {/* Nutritionist Profile */}
      <section className="bg-background px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-2xl md:h-[600px]">
            <Image
              src={nutritionist.imageUrl}
              alt="Camila Moura"
              fill
              className="object-cover"
              data-ai-hint={nutritionist.imageHint}
            />
          </div>
          <div className="text-left">
            <h2 className="font-headline text-3xl font-normal leading-tight md:text-5xl">
              CARDÁPIO FEITO<br /><b className="font-extrabold uppercase text-primary">PELA NUTRICIONISTA</b><br />CAMILA MOURA
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Camila Moura, nutricionista especializada em alimentação funcional, criou mais de 350 receitas de cafés da manhã saudáveis, deliciosos de verdade e que ficam prontos em até 15 minutos. Cada receita foi pensada para oferecer todos os nutrientes que seu corpo precisa logo no início do dia, com foco no sabor e na praticidade.
            </p>
          </div>
        </div>
      </section>

      <Bonuses />

      {/* Problems Section */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-headline text-4xl font-normal text-[#3D1F08] md:text-5xl">
            PARA PESSOAS<br /><b className="font-extrabold uppercase">QUE ENFRENTAM:</b>
          </h2>
          <ul className="space-y-6">
            {[
              'Falta de opções saudáveis de café da manhã',
              'Dificuldade em perder peso e alimentar-se bem',
              'Falta de receitas saborosas que nutrem',
              'Falta de receitas rápidas para o café da manhã',
              'Falta de nutrientes necessários para o dia',
            ].map((problem, idx) => (
              <li key={idx} className="flex items-start gap-4 text-xl font-medium leading-tight text-[#3D1F08]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  <X />
                </span>
                <span className="pt-1">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-[#3D1F08] px-4 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-headline text-4xl font-normal md:text-5xl">
            VEJA AS <b className="font-extrabold uppercase">VANTAGENS</b>
          </h2>
          <ul className="space-y-6">
            {[
              'Cardápio criado por uma nutricionista',
              'Mais de 350 opções saudáveis',
              'Baixíssimas em calorias',
              'Sabor novo todos os dias sem enjoar',
              'Feitas em menos de 15 minutos',
              'Não precisa de utensílios profissionais',
              'Nutrição completa pra começar o dia',
            ].map((adv, idx) => (
              <li key={idx} className="flex items-start gap-4 text-xl font-medium leading-tight">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl font-bold text-primary">
                  <Check />
                </span>
                <span className="pt-1">{adv}</span>
              </li>
            ))}
          </ul>
          <div className="mt-16 text-center">
            <a href="#price" className="inline-block rounded-full bg-primary px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-primary/90">
              QUERO AS RECEITAS!
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-headline text-4xl font-normal text-[#3D1F08] md:text-5xl">
            VEJA O QUE DIZ<br /><b className="font-extrabold uppercase">QUEM ADQUIRIU:</b>
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
            {PlaceHolderImages.filter(p => p.id.startsWith('testimonial-')).map((test, idx) => (
              <div key={idx} className="w-[300px] shrink-0 overflow-hidden rounded-2xl shadow-xl md:w-[350px]">
                <Image
                  src={test.imageUrl}
                  alt={test.description}
                  width={400}
                  height={500}
                  className="h-full w-full object-cover"
                  data-ai-hint={test.imageHint}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Offer />

      {/* Guarantee Section */}
      <section className="bg-[#3D1F08] px-4 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-primary p-12 text-center text-white shadow-2xl">
          <h3 className="mb-6 font-headline text-3xl font-extrabold md:text-4xl">
            Devolvemos seu Dinheiro e<br />você Fica com o Produto!
          </h3>
          <p className="text-xl leading-relaxed">
            <strong className="font-black">Essa é nossa garantia:</strong> teste por 30 dias e se não gostar, devolvemos seu dinheiro na hora e você ainda fica com o produto!
          </p>
        </div>
      </section>

      {/* How to Receive Section */}
      <section className="bg-background px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 font-headline text-4xl font-normal text-[#3D1F08] md:text-5xl">
            COMO IREI<br /><b className="font-extrabold uppercase">RECEBER AS RECEITAS?</b>
          </h2>
          
          <div className="relative mx-auto my-12 h-64 w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl md:h-[400px]">
            <Image
              src={deviceMockup.imageUrl}
              alt="Mockup of devices"
              fill
              className="object-cover"
              data-ai-hint={deviceMockup.imageHint}
            />
          </div>

          <ul className="grid gap-6 text-left md:grid-cols-2">
            {[
              'Recebe no E-mail e Whatsapp',
              'Pode imprimir no papel',
              'Pode ver no celular',
              'Pode visualizar no computador',
              'Veja no tablet',
              'Novas receitas mensalmente',
              'Perdeu a receita? Enviamos de novo',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-lg font-bold">
                <Check className="text-[#2CAC43]" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ />

      <Footer />
    </main>
  );
}

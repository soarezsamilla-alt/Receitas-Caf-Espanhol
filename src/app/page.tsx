
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
  const howToReceiveImageUrl = 'https://image2url.com/r2/default/images/1774747649347-c0afd8d7-12d6-4509-a72a-d94cc2f99cd7.blob';

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Benefits Section */}
      <section className="bg-background px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-headline text-2xl font-normal text-[#3D1F08]">
            O QUE VOCÊ<br /><b className="font-extrabold uppercase">VAI ENCONTRAR:</b>
          </h2>
          <ul className="space-y-1">
            {[
              { icon: '✓', text: 'Receitas de até 350 calorias' },
              { icon: '☺', text: 'Com sabores deliciosos de verdade' },
              { icon: '🥄', text: 'Com proteínas e vitaminas essenciais' },
              { icon: '⏰', text: 'Prontas em até 15 minutos' },
              { icon: '🛒', text: 'Com ingredientes comuns' },
              { icon: '🍴', text: 'Use apenas liquidificador e frigideira' },
              { icon: '📋', text: 'Passo a passo de preparo' },
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
              QUERO AS RECEITAS!
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
              CARDÁPIO FEITO<br /><b className="font-extrabold uppercase text-primary">PELA NUTRICIONISTA</b><br />SHOPIA FONSECA
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Shopia Fonseca, nutricionista especializada em alimentação funcional, criou mais de 350 receitas de cafés da manhã saudáveis, deliciosos de verdade e que ficam prontos em até 15 minutos. Cada receita foi pensada para oferecer todos os nutrientes que seu corpo precisa logo no início do dia, com foco no sabor e na praticidade.
            </p>
          </div>
        </div>
      </section>

      <Bonuses />

      {/* Problems Section */}
      <section className="bg-white px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-headline text-2xl font-normal text-[#3D1F08]">
            PARA PESSOAS<br /><b className="font-extrabold uppercase">QUE ENFRENTAM:</b>
          </h2>
          <ul className="space-y-2">
            {[
              'Falta de opções saudáveis de café da manhã',
              'Dificuldade em perder peso e alimentar-se bem',
              'Falta de receitas saborosas que nutrem',
              'Falta de receitas rápidas para o café da manhã',
              'Falta de nutrientes necessários para o dia',
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
            VEJA AS <b className="font-extrabold uppercase">VANTAGENS</b>
          </h2>
          <ul className="space-y-2">
            {[
              'Cardápio criado por uma nutricionista',
              'Mais de 350 opções saudáveis',
              'Baixíssimas em calorias',
              'Sabor novo todos os dias sem enjoar',
              'Feitas em menos de 15 minutos',
              'Não precisa de utensílios profissionais',
              'Nutrição completa pra começar o dia',
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
              QUERO AS RECEITAS!
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-headline text-2xl font-normal text-[#3D1F08]">
            VEJA O QUE DIZ<br /><b className="font-extrabold uppercase">QUEM ADQUIRIU:</b>
          </h2>
          <div className="grid grid-cols-3 gap-2 md:gap-8">
            {PlaceHolderImages.filter(p => p.id.startsWith('testimonial-')).map((test, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl md:rounded-3xl shadow-lg md:shadow-xl transition-transform hover:scale-[1.02]">
                <Image
                  src={test.imageUrl}
                  alt={test.description}
                  width={400}
                  height={600}
                  className="h-auto w-full object-contain"
                  data-ai-hint={test.imageHint}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Offer />

      {/* How to Receive Section */}
      <section className="bg-background px-4 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 font-headline text-2xl font-normal text-[#3D1F08]">
            COMO IREI<br /><b className="font-extrabold uppercase">RECEBER AS RECEITAS?</b>
          </h2>
          
          <div className="relative mx-auto my-12 h-64 w-full max-w-2xl">
            <Image
              src={howToReceiveImageUrl}
              alt="Mockup of devices"
              fill
              className="object-contain"
              data-ai-hint="ebook delivery"
            />
          </div>

          <ul className="grid gap-6 text-left md:grid-cols-2">
            {[
              'Recebe no E-mail e Whatsapp',
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

      {/* 7-Day Guarantee Section */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border-4 border-dashed border-primary/20 p-8 md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[#3D1F08] text-white shadow-xl md:h-40 md:w-40">
               <div className="text-center">
                 <span className="block text-5xl font-black leading-none">7</span>
                 <span className="block text-sm font-bold uppercase tracking-widest">Dias</span>
                 <span className="block text-[10px] uppercase">de Garantia</span>
               </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-headline text-lg font-black text-[#3D1F08] uppercase leading-tight">
                Sua Satisfação Garantida ou<br />Seu Dinheiro de Volta
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                O risco é todo meu! Você tem <strong className="text-primary">7 dias inteiros</strong> para acessar o conteúdo, testar as receitas e ver os resultados. Se você não amar as receitas ou achar que não é para você, basta um clique para receber 100% do seu dinheiro de volta. Sem perguntas e sem complicações.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <Footer />
    </main>
  );
}

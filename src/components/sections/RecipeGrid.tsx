import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const recipes = [
  { name: 'CAFÉ DE FRIGIDEIRA COM OVOS E FRIOS', meta: '10 MINUTOS / 195 CALORIAS', imgId: 'recipe-frigideira' },
  { name: 'PIZZA RÁPIDA DE FRIGIDEIRA', meta: '3 INGREDIENTES / 207 CALORIAS', imgId: 'recipe-pizza' },
  { name: 'PANQUECA FIT DE BANANA', meta: '7 MINUTOS / 183 CALORIAS', imgId: 'recipe-panqueca' },
  { name: 'OMELETE DE FRIOS TOSTADA', meta: '9 MINUTOS / 125 CALORIAS', imgId: 'hero-breakfast-1' },
  { name: 'SALADA DE FRUTAS DIGESTIVAS', meta: '6 FRUTAS / 120 CALORIAS', imgId: 'hero-breakfast-2' },
  { name: 'PÃO CREMOSO GRATINADO', meta: '8 MINUTOS / 170 CALORIAS', imgId: 'hero-breakfast-3' },
  { name: 'SHAKES DETOX SABOROSOS', meta: '6 MINUTOS / 120 CALORIAS', imgId: 'hero-breakfast-4' },
  { name: 'BOLO DE BANANA DE CANECA', meta: '3 INGREDIENTES / 175 CALORIAS', imgId: 'recipe-panqueca' },
  { name: 'SANDUÍCHE PROTEICO DE FRIGIDEIRA', meta: '10 MINUTOS / 180 CALORIAS', imgId: 'hero-breakfast-1' },
  { name: 'BROWNIE DE FRIGIDEIRA (3 ING.)', meta: '10 MINUTOS / 176 CALORIAS', imgId: 'recipe-frigideira' },
];

export function RecipeGrid() {
  return (
    <section className="bg-secondary px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-headline text-2xl font-normal leading-tight text-foreground">
          VEJA O QUE VOCÊ<br /><b className="font-extrabold uppercase">VAI APRENDER:</b>
        </h2>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipes.map((recipe, idx) => {
            const img = PlaceHolderImages.find(p => p.id === recipe.imgId) || PlaceHolderImages[0];
            return (
              <Card key={idx} className="overflow-hidden border-none shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-56 w-full">
                  <Image
                    src={img.imageUrl}
                    alt={recipe.name}
                    fill
                    className="object-cover"
                    data-ai-hint={img.imageHint}
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-headline text-lg font-bold leading-snug">{recipe.name}</h3>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{recipe.meta}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-headline text-3xl font-extrabold text-foreground md:text-4xl">
            + 350 OUTRAS <span className="text-primary">OPÇÕES DA NUTRI!</span>
          </h3>
          <div className="mt-8">
            <a href="#price" className="inline-block rounded-full bg-primary px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-primary/90 hover:shadow-2xl">
              QUERO AS RECEITAS!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

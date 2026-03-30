import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const recipes = [
  { name: 'CAFÉ DE FRIGIDEIRA COM OVOS E FRIOS', meta: '10 MINUTOS / 195 CALORIAS', imgId: 'recipe-frigideira' },
  { name: 'PIZZA RÁPIDA DE FRIGIDEIRA', meta: '3 INGREDIENTES / 207 CALORIAS', imgId: 'recipe-pizza' },
  { name: 'PANQUECA FIT DE BANANA', meta: '7 MINUTOS / 183 CALORIAS', imgId: 'recipe-panqueca' },
  { name: 'OMELETE DE FRIOS TOSTADA', meta: '9 MINUTOS / 125 CALORIAS', imgId: 'recipe-omelete' },
  { name: 'SALADA DE FRUTAS DIGESTIVAS', meta: '6 FRUTAS / 120 CALORIAS', imgId: 'recipe-salada' },
  { name: 'PÃO CREMOSO GRATINADO', meta: '8 MINUTOS / 170 CALORIAS', imgId: 'recipe-pao' },
  { name: 'SHAKES DETOX SABOROSOS', meta: '6 MINUTOS / 120 CALORIAS', imgId: 'recipe-shakes' },
  { name: 'BOLO DE BANANA DE CANECA', meta: '3 INGREDIENTES / 175 CALORIAS', imgId: 'recipe-bolo-caneca' },
  { name: 'SANDUÍCHE PROTEICO DE FRIGIDEIRA', meta: '10 MINUTOS / 180 CALORIAS', imgId: 'recipe-sanduiche' },
  { name: 'BROWNIE DE FRIGIDEIRA (3 ING.)', meta: '10 MINUTOS / 176 CALORIAS', imgId: 'recipe-brownie' },
];

export function RecipeGrid() {
  return (
    <section className="bg-secondary px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-headline text-2xl font-normal leading-tight text-foreground">
          VEJA O QUE VOCÊ<br /><b className="font-extrabold uppercase">VAI APRENDER:</b>
        </h2>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {recipes.map((recipe, idx) => {
            const img = PlaceHolderImages.find(p => p.id === recipe.imgId) || PlaceHolderImages[0];
            return (
              <Card key={idx} className="overflow-hidden border-none shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-40 w-full">
                  <Image
                    src={img.imageUrl}
                    alt={recipe.name}
                    fill
                    className="object-cover"
                    data-ai-hint={img.imageHint}
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-headline text-sm font-bold leading-snug line-clamp-2">{recipe.name}</h3>
                  <p className="mt-1 text-[10px] font-medium text-muted-foreground uppercase">{recipe.meta}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-headline text-2xl font-extrabold text-foreground">
            + 350 OUTRAS <span className="text-primary">OPÇÕES DA NUTRI!</span>
          </h3>
          <div className="mt-8">
            <a href="#price" className="animate-pulse-cta active-scale inline-block rounded-full bg-primary px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-primary/90 hover:shadow-2xl">
              QUERO AS RECEITAS!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

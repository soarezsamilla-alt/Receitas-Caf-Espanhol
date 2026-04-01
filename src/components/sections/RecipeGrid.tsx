
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const recipes = [
  { name: 'DESAYUNO DE SARTÉN CON HUEVOS Y EMBUTIDOS', meta: '10 MINUTOS / 195 CALORÍAS', imgId: 'recipe-frigideira' },
  { name: 'PIZZA RÁPIDA DE SARTÉN', meta: '3 INGREDIENTES / 207 CALORÍAS', imgId: 'recipe-pizza' },
  { name: 'PANQUEQUE FIT DE BANANA', meta: '7 MINUTOS / 183 CALORÍAS', imgId: 'recipe-panqueca' },
  { name: 'OMELETTE DE EMBUTIDOS TOSTADA', meta: '9 MINUTOS / 125 CALORÍAS', imgId: 'recipe-omelete' },
  { name: 'ENSALADA DE FRUTAS DIGESTIVAS', meta: '6 FRUTAS / 120 CALORÍAS', imgId: 'recipe-salada' },
  { name: 'PAN CREMOSO GRATINADO', meta: '8 MINUTOS / 170 CALORÍAS', imgId: 'recipe-pao' },
  { name: 'BATIDOS DETOX SABROSOS', meta: '6 MINUTOS / 120 CALORÍAS', imgId: 'recipe-shakes' },
  { name: 'BIZCOCHO DE BANANA EN TAZA', meta: '3 INGREDIENTES / 175 CALORÍAS', imgId: 'recipe-bolo-caneca' },
  { name: 'SÁNDWICH PROTEICO DE SARTÉN', meta: '10 MINUTOS / 180 CALORÍAS', imgId: 'recipe-sanduiche' },
  { name: 'BROWNIE DE SARTÉN (3 ING.)', meta: '10 MINUTOS / 176 CALORÍAS', imgId: 'recipe-brownie' },
];

export function RecipeGrid() {
  return (
    <section className="bg-secondary px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-headline text-2xl font-normal leading-tight text-foreground">
          MIRA LO QUE<br /><b className="font-extrabold uppercase">VAS A APRENDER:</b>
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
            ¡+ 350 OTRAS <span className="text-primary">OPCIONES DE LA NUTRI!</span>
          </h3>
          <div className="mt-8">
            <a href="#price" className="animate-pulse-cta active-scale inline-block rounded-full bg-primary px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-primary/90 hover:shadow-2xl">
              ¡QUIERO LAS RECETAS!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

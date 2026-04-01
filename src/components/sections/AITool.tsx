
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Clock, Flame, UtensilsCrossed, Loader2, Sparkles } from 'lucide-react';
import { personalizedBreakfastRecipeSuggestion, type PersonalizedBreakfastRecipeSuggestionOutput } from '@/ai/flows/personalized-breakfast-recipe-suggestion';

export function AITool() {
  const [ingredients, setIngredients] = useState('');
  const [time, setTime] = useState('15');
  const [goal, setGoal] = useState('Pérdida de Peso');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedBreakfastRecipeSuggestionOutput | null>(null);

  async function handleGenerate() {
    if (!ingredients.trim()) return;
    setLoading(true);
    try {
      const availableIngredients = ingredients.split(',').map(i => i.trim());
      const preparationTimeMinutes = parseInt(time) || 15;
      const data = await personalizedBreakfastRecipeSuggestion({
        availableIngredients,
        preparationTimeMinutes,
        dietaryGoals: goal
      });
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-extrabold text-foreground md:text-4xl">
            GENERADOR DE RECETAS <span className="text-primary">PERSONALIZADAS CON IA</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tienes ingredientes de sobra? ¡Nuestra IA crea un desayuno de nutri exclusivo para ti!
          </p>
        </div>

        <Card className="border-2 border-primary/20 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UtensilsCrossed className="text-primary" />
              ¿Qué tienes en la nevera?
            </CardTitle>
            <CardDescription>Escribe los ingredientes separados por coma</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-bold">Ingredientes Disponibles</label>
                <Input 
                  placeholder="Ej: Huevo, banana, avena, canela..." 
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Tiempo Máximo (minutos)</label>
                <Input 
                  type="number" 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">Meta Dietética</label>
              <Input 
                placeholder="Ej: Adelgazar, Ganar Masa, Sin Gluten..." 
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
            </div>
            <Button 
              className="w-full bg-primary text-lg font-bold" 
              size="lg"
              disabled={loading || !ingredients}
              onClick={handleGenerate}
            >
              {loading ? <Loader2 className="mr-2 animate-spin" /> : <Sparkles className="mr-2 h-5 w-5" />}
              GENERAR RECETA PERSONALIZADA
            </Button>
          </CardContent>
        </Card>

        {result && (
          <div className="mt-12 space-y-8">
            {result.recipes.map((recipe, i) => (
              <Card key={i} className="overflow-hidden border-2 border-primary/10 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CardHeader className="bg-secondary/30">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-extrabold text-primary">{recipe.name}</CardTitle>
                      <CardDescription className="text-base italic">{recipe.description}</CardDescription>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1 text-sm font-bold bg-white px-3 py-1 rounded-full shadow-sm">
                        <Clock className="h-4 w-4 text-primary" /> {recipe.preparationTimeMinutes} min
                      </div>
                      <div className="flex items-center gap-1 text-sm font-bold bg-white px-3 py-1 rounded-full shadow-sm">
                        <Flame className="h-4 w-4 text-accent" /> {recipe.calorieCount} kcal
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="mb-4 font-headline text-xl font-bold underline decoration-primary decoration-4 underline-offset-4">Ingredientes:</h4>
                      <ul className="space-y-2">
                        {recipe.ingredients.map((ing, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-600" /> {ing}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-4 font-headline text-xl font-bold underline decoration-primary decoration-4 underline-offset-4">Modo de Preparación:</h4>
                      <ol className="list-decimal space-y-3 pl-4">
                        {recipe.instructions.map((step, j) => (
                          <li key={j} className="text-sm font-medium leading-relaxed">{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

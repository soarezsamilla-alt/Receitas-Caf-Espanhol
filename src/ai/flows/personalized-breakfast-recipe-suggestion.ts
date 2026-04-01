
'use server';
/**
 * @fileOverview A Genkit flow that generates personalized, healthy breakfast recipes based on user input.
 *
 * - personalizedBreakfastRecipeSuggestion - A function that handles the personalized recipe generation process.
 * - PersonalizedBreakfastRecipeSuggestionInput - The input type for the function.
 * - PersonalizedBreakfastRecipeSuggestionOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PersonalizedBreakfastRecipeSuggestionInputSchema = z.object({
  availableIngredients: z
    .array(z.string())
    .describe('Una lista de ingredientes que el usuario tiene disponibles.'),
  preparationTimeMinutes: z
    .number()
    .describe('El tiempo máximo de preparación preferido para la receta en minutos.'),
  dietaryGoals: z
    .string()
    .describe(
      'Objetivos dietéticos específicos, por ejemplo, "pérdida de peso", "alto en proteínas", "bajo en carbohidratos", etc. Esta herramienta está optimizada para objetivos de pérdida de peso.'
    ),
});
export type PersonalizedBreakfastRecipeSuggestionInput = z.infer<
  typeof PersonalizedBreakfastRecipeSuggestionInputSchema
>;

const PersonalizedBreakfastRecipeSuggestionOutputSchema = z.object({
  recipes: z
    .array(
      z.object({
        name: z.string().describe('El nombre de la receta de desayuno.'),
        description: z
          .string()
          .describe('Una breve descripción de la receta.'),
        ingredients: z
          .array(z.string())
          .describe('Una lista de ingredientes necesarios para la receta.'),
        instructions: z
          .array(z.string())
          .describe('Instrucciones paso a paso para preparar la receta.'),
        preparationTimeMinutes: z
          .number()
          .describe('El tiempo aproximado de preparación para la receta en minutos.'),
        calorieCount: z
          .number()
          .describe('El recuento aproximado de calorías por porción.'),
        isHealthy: z
          .boolean()
          .describe('Verdadero si la receta se considera saludable, falso de lo contrario.'),
        isWeightLossFriendly: z
          .boolean()
          .describe('Verdadero si la receta es adecuada para la pérdida de peso, falso de lo contrario.'),
      })
    )
    .describe('Un arreglo de 1 a 3 recetas de desayuno personalizadas.'),
});
export type PersonalizedBreakfastRecipeSuggestionOutput = z.infer<
  typeof PersonalizedBreakfastRecipeSuggestionOutputSchema
>;

const generateBreakfastRecipesPrompt = ai.definePrompt({
  name: 'generateBreakfastRecipesPrompt',
  input: { schema: PersonalizedBreakfastRecipeSuggestionInputSchema },
  output: { schema: PersonalizedBreakfastRecipeSuggestionOutputSchema },
  prompt: `Eres un experto nutricionista especializado en crear recetas de desayuno saludables, rápidas y deliciosas adaptadas para la pérdida de peso.
Tu objetivo es sugerir 1-3 recetas de desayuno basadas en la entrada del usuario.

Asegúrate de que las recetas sean:
- Saludables y adecuadas para la pérdida de peso.
- Rápidas de preparar, idealmente dentro de {{{preparationTimeMinutes}}} minutos.
- Utilicen los ingredientes disponibles tanto como sea posible.
- Deliciosas y variadas para evitar el aburrimiento.

Aquí están las especificaciones del usuario:
Ingredientes Disponibles: {{{availableIngredients}}}
Tiempo de Preparación Preferido: {{{preparationTimeMinutes}}} minutos
Objetivo Dietético: {{{dietaryGoals}}}

Genera 1-3 recetas de desayuno únicas que cumplan con estos criterios. Cada receta debe estar en ESPAÑOL e incluir:
- Un nombre pegadizo.
- Una breve descripción.
- Una lista de ingredientes.
- Instrucciones paso a paso.
- Tiempo aproximado de preparación en minutos.
- Recuento aproximado de calorías.
- Un booleano que indique si la receta se considera saludable.
- Un booleano que indique si la receta es adecuada para la pérdida de peso.

Si no puedes crear una receta con las restricciones dadas, explica por qué y sugiere ajustes. RESPONDE SIEMPRE EN ESPAÑOL.`,
});

const personalizedBreakfastRecipeSuggestionFlow = ai.defineFlow(
  {
    name: 'personalizedBreakfastRecipeSuggestionFlow',
    inputSchema: PersonalizedBreakfastRecipeSuggestionInputSchema,
    outputSchema: PersonalizedBreakfastRecipeSuggestionOutputSchema,
  },
  async (input) => {
    const { output } = await generateBreakfastRecipesPrompt(input);
    return output!;
  }
);

export async function personalizedBreakfastRecipeSuggestion(
  input: PersonalizedBreakfastRecipeSuggestionInput
): Promise<PersonalizedBreakfastRecipeSuggestionOutput> {
  return personalizedBreakfastRecipeSuggestionFlow(input);
}

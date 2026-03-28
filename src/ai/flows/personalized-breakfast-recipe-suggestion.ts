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
    .describe('A list of ingredients the user currently has available.'),
  preparationTimeMinutes: z
    .number()
    .describe('The preferred maximum preparation time for the recipe in minutes.'),
  dietaryGoals: z
    .string()
    .describe(
      'Specific dietary goals, for example, "weight loss", "high protein", "low carb", etc. This tool is optimized for weight loss goals.'
    ),
});
export type PersonalizedBreakfastRecipeSuggestionInput = z.infer<
  typeof PersonalizedBreakfastRecipeSuggestionInputSchema
>;

const PersonalizedBreakfastRecipeSuggestionOutputSchema = z.object({
  recipes: z
    .array(
      z.object({
        name: z.string().describe('The name of the breakfast recipe.'),
        description: z
          .string()
          .describe('A brief description of the recipe.'),
        ingredients: z
          .array(z.string())
          .describe('A list of ingredients required for the recipe.'),
        instructions: z
          .array(z.string())
          .describe('Step-by-step instructions for preparing the recipe.'),
        preparationTimeMinutes: z
          .number()
          .describe('The approximate preparation time for the recipe in minutes.'),
        calorieCount: z
          .number()
          .describe('The approximate calorie count per serving.'),
        isHealthy: z
          .boolean()
          .describe('True if the recipe is considered healthy, false otherwise.'),
        isWeightLossFriendly: z
          .boolean()
          .describe('True if the recipe is suitable for weight loss, false otherwise.'),
      })
    )
    .describe('An array of 1 to 3 personalized breakfast recipes.'),
});
export type PersonalizedBreakfastRecipeSuggestionOutput = z.infer<
  typeof PersonalizedBreakfastRecipeSuggestionOutputSchema
>;

const generateBreakfastRecipesPrompt = ai.definePrompt({
  name: 'generateBreakfastRecipesPrompt',
  input: { schema: PersonalizedBreakfastRecipeSuggestionInputSchema },
  output: { schema: PersonalizedBreakfastRecipeSuggestionOutputSchema },
  prompt: `You are an expert nutritionist specialized in creating healthy, quick, and delicious breakfast recipes tailored for weight loss.
Your goal is to suggest 1-3 breakfast recipes based on the user's input.

Ensure the recipes are:
- Healthy and suitable for weight loss.
- Quick to prepare, ideally within {{{preparationTimeMinutes}}} minutes.
- Utilizes the available ingredients as much as possible.
- Delicious and varied to avoid boredom.

Here are the user's specifications:
Available Ingredients: {{{availableIngredients}}}
Preferred Preparation Time: {{{preparationTimeMinutes}}} minutes
Dietary Goal: {{{dietaryGoals}}}

Generate 1-3 unique breakfast recipes that meet these criteria. Each recipe should include:
- A catchy name.
- A brief description.
- A list of ingredients.
- Step-by-step instructions.
- Approximate preparation time in minutes.
- Approximate calorie count.
- A boolean indicating if the recipe is considered healthy.
- A boolean indicating if the recipe is suitable for weight loss.

If you cannot create a recipe with the given constraints, explain why and suggest adjustments.`,
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

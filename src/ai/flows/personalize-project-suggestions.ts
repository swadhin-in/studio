'use server';

/**
 * @fileOverview A flow for personalizing project suggestions based on user interaction data.
 *
 * - personalizeProjectSuggestions - A function that suggests projects and skills based on user interests.
 * - PersonalizeProjectSuggestionsInput - The input type for the personalizeProjectSuggestions function.
 * - PersonalizeProjectSuggestionsOutput - The return type for the personalizeProjectSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeProjectSuggestionsInputSchema = z.object({
  interactionData: z
    .string()
    .describe("User interaction data, such as viewed pages, time spent on pages, and search queries."),
});
export type PersonalizeProjectSuggestionsInput = z.infer<typeof PersonalizeProjectSuggestionsInputSchema>;

const PersonalizeProjectSuggestionsOutputSchema = z.object({
  suggestedProjects: z
    .array(z.string())
    .describe("A list of project names suggested based on user interaction data."),
  suggestedSkills: z
    .array(z.string())
    .describe("A list of skills suggested based on user interaction data."),
});
export type PersonalizeProjectSuggestionsOutput = z.infer<typeof PersonalizeProjectSuggestionsOutputSchema>;

export async function personalizeProjectSuggestions(
  input: PersonalizeProjectSuggestionsInput
): Promise<PersonalizeProjectSuggestionsOutput> {
  return personalizeProjectSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeProjectSuggestionsPrompt',
  input: {schema: PersonalizeProjectSuggestionsInputSchema},
  output: {schema: PersonalizeProjectSuggestionsOutputSchema},
  prompt: `Based on the following user interaction data: {{{interactionData}}}, suggest relevant projects and skills.

Return the suggested projects and skills in the following JSON format:
{
  "suggestedProjects": ["Project 1", "Project 2"],
  "suggestedSkills": ["Skill 1", "Skill 2"]
}
`,
});

const personalizeProjectSuggestionsFlow = ai.defineFlow(
  {
    name: 'personalizeProjectSuggestionsFlow',
    inputSchema: PersonalizeProjectSuggestionsInputSchema,
    outputSchema: PersonalizeProjectSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

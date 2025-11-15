'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a compelling hero section for a personal portfolio website.
 *
 * It uses the Gemini API to create an engaging introduction based on a summary of the website owner's skills and experience.
 * The flow includes functions for generating the hero section and defining the input and output schemas.
 *
 * - generateHeroSection - A function that handles the generation of the hero section content.
 * - GenerateHeroSectionInput - The input type for the generateHeroSection function.
 * - GenerateHeroSectionOutput - The return type for the generateHeroSection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeroSectionInputSchema = z.object({
  name: z.string().describe('The name of the portfolio owner.'),
  title: z.string().describe('The professional title of the portfolio owner.'),
  summary: z.string().describe('A brief summary of the portfolio owner skills and experience.'),
  primaryButtonText: z.string().describe('The text for the primary call-to-action button.'),
  primaryButtonLink: z.string().describe('The link for the primary call-to-action button.'),
  secondaryButtonText: z.string().describe('The text for the secondary call-to-action button.'),
  secondaryButtonLink: z.string().describe('The link for the secondary call-to-action button.'),
  linkedinUrl: z.string().describe('The URL for the LinkedIn profile.'),
  githubUrl: z.string().describe('The URL for the GitHub profile.'),
});

export type GenerateHeroSectionInput = z.infer<typeof GenerateHeroSectionInputSchema>;

const GenerateHeroSectionOutputSchema = z.object({
  heroSectionContent: z.string().describe('The generated HTML content for the hero section.'),
});

export type GenerateHeroSectionOutput = z.infer<typeof GenerateHeroSectionOutputSchema>;

export async function generateHeroSection(input: GenerateHeroSectionInput): Promise<GenerateHeroSectionOutput> {
  return generateHeroSectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeroSectionPrompt',
  input: {schema: GenerateHeroSectionInputSchema},
  output: {schema: GenerateHeroSectionOutputSchema},
  prompt: `You are an expert web designer specializing in creating compelling hero sections for personal portfolio websites.

  Based on the information provided, generate an HTML hero section that is concise, engaging, and highlights the portfolio owner's key skills and experience.

  The hero section should include:
  - A headline featuring the portfolio owner's name and title.
  - A brief summary of their skills and experience.
  - A primary call-to-action button linking to the projects section.
  - A secondary call-to-action button linking to the contact section.
  - Links to their LinkedIn and GitHub profiles.

  Use the following information to generate the hero section:
  Name: {{{name}}}
  Title: {{{title}}}
  Summary: {{{summary}}}
  Primary Button Text: {{{primaryButtonText}}}
  Primary Button Link: {{{primaryButtonLink}}}
  Secondary Button Text: {{{secondaryButtonText}}}
  Secondary Button Link: {{{secondaryButtonLink}}}
  LinkedIn URL: {{{linkedinUrl}}}
  GitHub URL: {{{githubUrl}}}

  Ensure the generated HTML is well-formatted and uses appropriate tags for semantic structure and accessibility.
  Include classes for styling purposes.

  The generated HTML should look like this:
  <section class="hero">
    <div class="hero-content">
      <h1>{{name}}</h1>
      <p>{{title}}</p>
      <p>{{summary}}</p>
      <div class="hero-buttons">
        <a href="{{primaryButtonLink}}" class="primary-button">{{primaryButtonText}}</a>
        <a href="{{secondaryButtonLink}}" class="secondary-button">{{secondaryButtonText}}</a>
      </div>
      <div class="social-links">
        <a href="{{linkedinUrl}}" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
        <a href="{{githubUrl}}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
      </div>
    </div>
  </section>`,
});

const generateHeroSectionFlow = ai.defineFlow(
  {
    name: 'generateHeroSectionFlow',
    inputSchema: GenerateHeroSectionInputSchema,
    outputSchema: GenerateHeroSectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

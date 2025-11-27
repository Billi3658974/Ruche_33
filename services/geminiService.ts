import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateEducationalContent = async (topic: string): Promise<string> => {
  if (!apiKey) {
    return "L'API Key Gemini est manquante. Veuillez configurer l'environnement.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Agis en tant que professeur d'université populaire engagé et pédagogue.
      Sujet: "${topic}".
      Contexte: Tu t'adresses à des citoyens du mouvement "La Ruche 33", qui cherchent à comprendre les enjeux de société pour reprendre le pouvoir politique.
      Consignes:
      1. Explique le concept de manière claire et accessible mais sans simplisme.
      2. Fais le lien avec l'actualité ou les problèmes structurels (oligarchie, institutions).
      3. Termine par 3 questions ouvertes pour lancer un débat en assemblée.
      4. Utilise un formatage Markdown (titres, gras, listes).
      5. Reste concis (environ 400 mots).
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Aucune réponse générée.";
  } catch (error) {
    console.error("Erreur Gemini:", error);
    return "Désolé, l'Université Populaire est momentanément indisponible (Erreur API).";
  }
};

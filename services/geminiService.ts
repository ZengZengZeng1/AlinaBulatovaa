
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

// Fix: Initialize GoogleGenAI once at the module level using process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export class GeminiService {
  /**
   * Generates a chat response using the Gemini API.
   * Complies with @google/genai guidelines for generateContent and text extraction.
   */
  async chat(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
    try {
      // Fix: Call generateContent directly on ai.models with the specified model and contents
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...history,
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
        }
      });

      // Fix: Access response.text property directly as per modern SDK guidelines
      return response.text || "I'm sorry, I couldn't process that.";
    } catch (error) {
      console.error("Gemini Chat Error:", error);
      return "Something went wrong. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();

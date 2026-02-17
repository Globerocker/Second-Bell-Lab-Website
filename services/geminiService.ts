import { GoogleGenAI, Type } from "@google/genai";
import { ChatMessage, ImageGenerationConfig } from "../types";

// Helper to get API key securely and safely for browser environments
const getApiKey = () => {
  try {
    // Check if process is defined (node/build env)
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY || '';
    }
    return '';
  } catch (e) {
    return '';
  }
};

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Nano Banana (formerly Second Bell Lab), a premium after-school education center.
Your goal is to assist both prospective Parents and Investors.

Key Information about Nano Banana:
- Concept: Closes the gap between public schooling and real-world skills.
- Model: Academic Support + Practical Life Skills + Physical Development + Supervision.
- Locations: Initial launch in Phoenix, Arizona.
- 5 Pillars: Physical Connection & Discipline, Academic Competence, Communication & Social Skill, Financial Literacy, Entrepreneurship & Initiative.
- Target Market: Dual-income households, highly saturated "daylight niche", opportunity in 3pm-6pm+ window.
- Culture: Rule #1 No Lying, Strict No-Bullying, Self-Reliance ("Solve Problems at the Lowest Level").
- Membership: $600-$900/month.
- Groups: Builders (11-14y) and Creators (15-17y).
- Growth: Phase 1 MVP -> Phase 2 Expansion -> Phase 3 Replication.

Tone: Professional, confident, educational, and premium.
For Investors: Focus on scalability, recurring revenue, and market fragmentation.
For Parents: Focus on holistic development, safety, and future-proofing their child.

When asked about images, encourage using the image generation tool.
When asked about location or market data, use Google Search.
`;

export const generateChatResponse = async (
  history: ChatMessage[],
  newMessage: string,
  onStream: (chunk: string) => void
): Promise<{ text: string; groundingUrls?: Array<{ uri: string; title: string }> }> => {
  const apiKey = getApiKey();
  // We can't throw here if we want to avoid crashing the UI entirely, but the call will fail later.
  // Best to let the UI handle the error if the key is missing.
  if (!apiKey) console.warn("API Key is missing. Chat functionality will not work.");

  const ai = new GoogleGenAI({ apiKey });

  // Use Gemini 3 Pro for complex reasoning and grounding
  const model = "gemini-3-pro-preview";

  const chat = ai.chats.create({
    model,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      thinkingConfig: { thinkingBudget: 1024 }, // Moderate thinking budget
      tools: [{ googleSearch: {} }],
    },
    history: history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }],
    })),
  });

  const result = await chat.sendMessageStream({ message: newMessage });

  let fullText = "";
  let groundingUrls: Array<{ uri: string; title: string }> = [];

  for await (const chunk of result) {
    // Cast to any to safely access properties that might vary in stream
    const c = chunk as any;
    
    // Check for grounding chunks
    const groundingChunks = c.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (groundingChunks) {
      groundingChunks.forEach((gc: any) => {
        if (gc.web?.uri) {
          groundingUrls.push({ uri: gc.web.uri, title: gc.web.title || "Source" });
        }
        if (gc.maps?.uri) {
             groundingUrls.push({ uri: gc.maps.uri, title: gc.maps.title || "Map Location" });
        }
      });
    }

    const text = c.text;
    if (text) {
      fullText += text;
      onStream(fullText);
    }
  }

  return { text: fullText, groundingUrls };
};

export const generateMarketingImage = async (config: ImageGenerationConfig): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("API Key not found");

  const ai = new GoogleGenAI({ apiKey });

  // Using Gemini 3 Pro Image Preview for high quality
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: {
      parts: [
        { text: config.prompt }
      ]
    },
    config: {
      imageConfig: {
        aspectRatio: config.aspectRatio,
        imageSize: config.imageSize
      }
    }
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }

  throw new Error("No image generated");
};
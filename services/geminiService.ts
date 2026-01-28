
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are an AI assistant for Samby, a 20-year-old freelance graphic designer from Batangas. 
Samby specializes in designing professional graphics for the e-sports industry. 
He is also a social media manager, photographer, videographer, and video editor.
Your goal is to answer questions about Samby's skills, availability, and background in a friendly, professional, and slightly creative tone.
If someone asks to hire him, suggest they use the 'Let's work together' button or email contact@samby.design.
Keep responses concise and engaging.`;

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  try {
    // @google/genai: Always initialize GoogleGenAI with a named parameter apiKey directly from process.env.API_KEY.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // @google/genai: Using models.generateContent with the concatenated conversation history and new message.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: newMessage }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    // @google/genai: Directly access the .text property of the response object.
    return response.text || "I didn't catch that. Could you say it again?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Something went wrong. Please try again in a moment.";
  }
};

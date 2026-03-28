// utils/gemini.js

import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

// Check API key BEFORE creating instance
if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not defined in .env file");
}

// Debug: Log the first 10 characters of the key
// console.log("API Key loaded:", process.env.GEMINI_API_KEY?.substring(0, 10) + "...");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getGeminiResponse = async (query) => {
  try {
    if (!query) {
      throw new Error("Query parameter is required");
    }


    const model = genAI.getGenerativeModel({
      model: "gemini-3.1-flash-lite-preview",
    });

    const result = await model.generateContent(query);
    const text = result.response.text();

    return text;
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export default getGeminiResponse;
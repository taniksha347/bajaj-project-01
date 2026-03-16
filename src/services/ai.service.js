import { GoogleGenerativeAI } from "@google/generative-ai";
import logger from "../utils/logger.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const getAIResponse = async (prompt) => {
    try {
        const customPrompt = `Give as short answer as you can give... in a word/2 words or as short as can be given... Question: ${prompt}`;
        const result = await model.generateContent(customPrompt);
        const response = await result.response;
        const text = response.text();
        return text.trim();
    } catch (error) {
        logger.error(`AI Service Error: ${error.message}`);
        throw new Error("Failed to generate AI response");
    }
};

export default {
    getAIResponse
};

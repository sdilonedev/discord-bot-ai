import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

// Configuration constants
const MODEL_NAME = "gemini-1.5-flash-latest";
const PROMPTS_DIRECTORY = path.join(__dirname, "../prompts");

// Initialize the AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export class AIService {
  constructor() {}

  /**
   * Generates an AI response based on a prompt and user input.
   * Throws an error if the prompt file is missing or the AI fails.
   */
  async generateResponse(promptName: string, input: string): Promise<string> {
    const prompt = this.loadPrompt(promptName);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    try {
      const result = await model.generateContent(`${prompt}\n${input}`);
      return result.response.text();
    } catch (error) {
      console.error("Error generating AI response:", error);
      throw new Error("Failed to generate AI response.");
    }
  }

  /**
   * Loads a prompt from a text file.
   * Throws an error if the prompt file does not exist.
   */
  private loadPrompt(promptName: string): string {
    const promptPath = path.join(PROMPTS_DIRECTORY, `${promptName}.txt`);

    if (!fs.existsSync(promptPath)) {
      throw new Error(`Prompt file not found: ${promptName}`);
    }

    return fs.readFileSync(promptPath, "utf-8");
  }
}

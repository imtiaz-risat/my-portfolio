import { GoogleGenerativeAI } from "@google/generative-ai";
import { PORTFOLIO_CONTEXT } from "@/lib/portfolio-context";

export async function POST(req) {
  try {
    const { message, history } = await req.json();
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "Google API key not configured" },
        { status: 500 },
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    // User requested 'gemini-2.5-flash-lite', but falling back to 'gemini-1.5-flash'
    // if the specific model is not available or correct.
    // You can change this to 'gemini-2.0-flash-exp' or others as needed.
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: PORTFOLIO_CONTEXT,
    });

    const chat = model.startChat({
      history: history || [],
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return Response.json({ response: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return Response.json(
      { error: "Failed to generate response" },
      { status: 500 },
    );
  }
}

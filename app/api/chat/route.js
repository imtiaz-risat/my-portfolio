import Groq from "groq-sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PORTFOLIO_CONTEXT } from "@/lib/portfolio-context";

// Groq is the primary provider; Google Gemini is the fallback when Groq is
// unavailable (missing key, rate limit, outage, empty response).

async function askGroq(message, history) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error("Groq API key not configured");

  const groq = new Groq({ apiKey });

  // Convert Gemini-style history ({role, parts}) to OpenAI-style ({role, content})
  const convertedHistory = (history || []).map((turn) => ({
    role: turn.role === "model" ? "assistant" : turn.role,
    content: turn.parts?.[0]?.text ?? turn.content ?? "",
  }));

  const messages = [
    { role: "system", content: PORTFOLIO_CONTEXT },
    ...convertedHistory,
    { role: "user", content: message },
  ];

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages,
    max_tokens: 500,
  });

  const text = completion.choices[0]?.message?.content ?? "";
  if (!text.trim()) throw new Error("Groq returned an empty response");

  return text;
}

async function askGemini(message, history) {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) throw new Error("Google API key not configured");

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite",
    systemInstruction: PORTFOLIO_CONTEXT,
  });

  // The client already speaks Gemini's shape, but tolerate OpenAI-style turns too.
  const convertedHistory = (history || []).map((turn) => ({
    role: turn.role === "assistant" ? "model" : turn.role,
    parts: turn.parts ?? [{ text: turn.content ?? "" }],
  }));

  const chat = model.startChat({
    history: convertedHistory,
    generationConfig: {
      maxOutputTokens: 500,
    },
  });

  const result = await chat.sendMessage(message);
  const text = result.response.text();
  if (!text.trim()) throw new Error("Gemini returned an empty response");

  return text;
}

export async function POST(req) {
  const { message, history } = await req.json();

  try {
    const text = await askGroq(message, history);
    console.log("Chat response from: GROQ (llama-3.3-70b-versatile)");
    return Response.json({ response: text, provider: "groq" });
  } catch (groqError) {
    console.error("Groq failed, falling back to Gemini:", groqError);

    try {
      const text = await askGemini(message, history);
      console.log("Chat response from: GEMINI (gemini-2.5-flash-lite) [fallback]");
      return Response.json({ response: text, provider: "gemini" });
    } catch (geminiError) {
      console.error("Gemini fallback failed:", geminiError);
      return Response.json(
        { error: "Failed to generate response" },
        { status: 500 },
      );
    }
  }
}

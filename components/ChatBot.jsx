"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Minus } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CatPeek from "./CatPeek";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      parts:
        "Hi there. I’m Grumpy, the office cat for Risat’s portfolio. I can help you explore his experience, skills, and projects.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const suggestedQuestions = [
    "What are Risat's top skills?",
    "Tell me about his projects.",
    "How can I contact Risat?",
  ];

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = text.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", parts: userMessage }]);
    setIsLoading(true);

    try {
      // Format history for Gemini API (user/model roles)
      // Exclude the initial greeting message if it's from the model
      const history = messages
        .filter((_, index) => index > 0)
        .map((m) => ({
          role: m.role,
          parts: [{ text: m.parts }],
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, history }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [...prev, { role: "model", parts: data.response }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: "Meow… Grumpy missed a step. 😿 Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(input);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-10 right-4 max-w-md w-[90vw] md:w-[402px] h-[80vh] md:h-[600px] bg-black border border-emerald-500/30 rounded-2xl shadow-2xl shadow-emerald-500/10 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-emerald-900/20 border-b border-emerald-500/20 px-6 py-4 flex items-center justify-between backdrop-blur-sm">
              <div className="flex items-center gap-2">
                {/* <div className="flex items-center justify-center overflow-hidden">
                  <img
                    src="lottie/grumpy-cat.png" // your image in /public
                    alt="Cat Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div> */}
                <div>
                  <h3 className="font-bold text-white text-md md:text-lg">
                    Talk with Grumpy
                  </h3>
                  <p className="text-xs text-emerald-400/80">
                    The Office Cat at Risat's Portfolio
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <Minus size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 pb-10 space-y-4 scrollbar-thin scrollbar-thumb-emerald-500/20 scrollbar-track-transparent relative">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                      msg.role === "user"
                        ? "bg-emerald-600 text-white rounded-tr-none"
                        : "bg-white/10 text-gray-100 rounded-tl-none"
                    }`}
                  >
                    <div className="prose prose-invert prose-sm max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          a: ({ node, ...props }) => (
                            <a
                              {...props}
                              className="text-emerald-300 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          ),
                          p: ({ node, ...props }) => (
                            <p {...props} className="mb-2 last:mb-0" />
                          ),
                          ul: ({ node, ...props }) => (
                            <ul {...props} className="list-disc ml-4 mb-2" />
                          ),
                          ol: ({ node, ...props }) => (
                            <ol {...props} className="list-decimal ml-4 mb-2" />
                          ),
                        }}
                      >
                        {msg.parts}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-100" />
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />

              {/* Suggested Questions */}
              {messages.length === 1 && (
                <div className="flex flex-col gap-2 mt-4 px-2">
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(q)}
                        disabled={isLoading}
                        className="text-xs bg-emerald-900/30 text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded-xl hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-colors text-left"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Cat Avatar in Chat */}
              {/* <div className="sticky bottom-0 right-0 flex justify-end pointer-events-none">
                <CatPeek className="static w-20 h-20 -mr-4 -mb-4 transform rotate-0" />
              </div> */}
            </div>
            {/* Cat Avatar in Chat */}
            <div className="absolute bottom-[88px] left-0 pointer-events-none">
              <CatPeek className="static w-20 h-20 -mr-4 -mb-4 transform rotate-0" />
            </div>
            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-emerald-500/20 bg-black backdrop-blur-sm"
            >
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my projects..."
                  className="w-full bg-white/5 border border-emerald-500/20 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 placeholder:text-gray-500 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 disabled:opacity-50 disabled:hover:bg-emerald-500 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <CatPeek
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
          />
        )}
      </AnimatePresence>
    </>
  );
}


import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!message.trim()) return;
    
    const userMsg = message;
    setMessage('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an expert cleaning consultant for Olia Cleaning Services in Coventry. 
        Answer this user question professionally: "${userMsg}". 
        Keep it concise, helpful, and encourage them to book with Olia Cleaning Services if they need professional help.`,
        config: {
          systemInstruction: "You are a professional cleaning expert. Be polite, practical, and informative about cleaning techniques and Olia's services.",
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. Please try again or call us!";
      setChatHistory(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error(error);
      setChatHistory(prev => [...prev, { role: 'model', text: "Service temporarily unavailable. Please call us directly!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 w-14 h-14 bg-[#2C4A3E] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-40 border-2 border-white/20"
      >
        <Bot className="w-7 h-7" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-28 md:right-6 md:w-96 md:h-[500px] z-50 flex flex-col glass rounded-none md:rounded-3xl shadow-2xl overflow-hidden border border-[#2C4A3E]/10 animate-in slide-in-from-bottom duration-300">
          <div className="p-4 bg-[#2C4A3E] text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm">Olia AI Consultant</p>
                <p className="text-[10px] text-white/70">Always available</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/50">
            {chatHistory.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                <Bot className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p className="text-sm">Hi! Ask me anything about cleaning or our services in Coventry.</p>
              </div>
            )}
            {chatHistory.map((chat, idx) => (
              <div key={idx} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  chat.role === 'user' 
                  ? 'bg-[#2C4A3E] text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-none'
                }`}>
                  {chat.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#2C4A3E]" />
                  <span className="text-xs text-gray-500 italic">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAskAI()}
              placeholder="Ask a cleaning question..."
              className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-[#2C4A3E] outline-none"
            />
            <button 
              onClick={handleAskAI}
              className="bg-[#2C4A3E] text-white p-2 rounded-full hover:bg-[#1a2d25]"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;

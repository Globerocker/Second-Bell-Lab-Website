import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, ImageGenerationConfig } from '../types';
import { generateChatResponse, generateMarketingImage } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: "Hello! I am the Second Bell Lab™ Assistant. I can answer questions about our curriculum, business model, or schedule. I can also generate visual concepts for our new locations. How can I help you?",
      timestamp: Date.now()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Image Generation State
  const [showImageTools, setShowImageTools] = useState(false);
  const [imageConfig, setImageConfig] = useState<ImageGenerationConfig>({
    prompt: "Modern learning center interior with students working on laptops and whiteboards, warm lighting, photorealistic",
    aspectRatio: "16:9",
    imageSize: "1K"
  });
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const modelMsgId = (Date.now() + 1).toString();
      // Initialize empty model message for streaming
      setMessages(prev => [...prev, {
        id: modelMsgId,
        role: 'model',
        text: '',
        timestamp: Date.now(),
        isThinking: true
      }]);

      const response = await generateChatResponse(
        [...messages, userMsg],
        userMsg.text,
        (streamedText) => {
           setMessages(prev => prev.map(m => 
             m.id === modelMsgId 
               ? { ...m, text: streamedText, isThinking: false }
               : m
           ));
        }
      );

      // Final update with grounding data if any
      setMessages(prev => prev.map(m => 
        m.id === modelMsgId 
          ? { ...m, text: response.text, groundingUrls: response.groundingUrls, isThinking: false }
          : m
      ));

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "I apologize, but I encountered an error connecting to the knowledge base.",
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateImage = async () => {
    if (isGeneratingImage) return;
    setIsGeneratingImage(true);
    
    // Add a placeholder message
    const tempId = Date.now().toString();
    setMessages(prev => [...prev, {
      id: tempId,
      role: 'model',
      text: `Generating image: "${imageConfig.prompt}"...`,
      timestamp: Date.now(),
      isThinking: true
    }]);

    try {
      const base64Image = await generateMarketingImage(imageConfig);
      
      setMessages(prev => prev.map(m => 
        m.id === tempId 
        ? { 
            ...m, 
            text: `Here is the concept art for: "${imageConfig.prompt}"`, 
            imageUrl: base64Image,
            isThinking: false 
          }
        : m
      ));
    } catch (error) {
      setMessages(prev => prev.map(m => 
        m.id === tempId 
        ? { ...m, text: "Sorry, I failed to generate the image. Please try again.", isThinking: false }
        : m
      ));
    } finally {
      setIsGeneratingImage(false);
      setShowImageTools(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <div>
           <h2 className="text-xl font-bold text-brand-navy"><i className="fa-solid fa-sparkles text-brand-gold mr-2"></i>AI Admissions & Relations</h2>
           <p className="text-xs text-slate-500">Powered by Gemini 3 Pro • Search Grounded • Maps Integrated</p>
        </div>
        <button 
           onClick={() => setShowImageTools(!showImageTools)}
           className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${showImageTools ? 'bg-brand-navy text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          <i className="fa-solid fa-image mr-2"></i>
          {showImageTools ? 'Hide Image Tools' : 'Create Visuals'}
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-navy text-white rounded-br-none' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-bl-none'
                }`}>
                  {msg.imageUrl && (
                    <div className="mb-3 rounded-lg overflow-hidden border border-slate-200">
                      <img src={msg.imageUrl} alt="Generated Content" className="w-full h-auto" />
                    </div>
                  )}
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {msg.text}
                    {msg.isThinking && <span className="inline-block w-2 h-2 ml-2 bg-brand-gold rounded-full animate-bounce"></span>}
                  </div>
                  
                  {/* Grounding Sources */}
                  {msg.groundingUrls && msg.groundingUrls.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                       <p className="text-xs font-bold text-slate-400 mb-2">Sources:</p>
                       <div className="flex flex-wrap gap-2">
                          {msg.groundingUrls.map((url, i) => (
                            <a 
                              key={i} 
                              href={url.uri} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-1 bg-slate-50 border border-slate-200 rounded text-xs text-blue-600 hover:underline"
                            >
                              {url.title.includes("Map") ? <i className="fa-solid fa-location-dot"></i> : <i className="fa-solid fa-link"></i>}
                              {url.title}
                            </a>
                          ))}
                       </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-200">
            <div className="max-w-4xl mx-auto flex gap-4">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about enrollment, the market, or investment data..."
                className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputText.trim()}
                className="px-6 py-3 bg-brand-gold text-brand-navy font-bold rounded-xl hover:bg-brand-goldhover disabled:opacity-50 transition-colors"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Image Tools Sidebar */}
        {showImageTools && (
          <div className="w-80 bg-white border-l border-slate-200 p-6 overflow-y-auto shadow-xl z-10 animate-fade-in-right">
            <h3 className="font-bold text-lg mb-6 text-brand-navy">Visual Generator</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Prompt</label>
                <textarea
                  value={imageConfig.prompt}
                  onChange={(e) => setImageConfig({...imageConfig, prompt: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm h-32 focus:ring-2 focus:ring-brand-gold focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Size</label>
                <select 
                  value={imageConfig.imageSize}
                  onChange={(e) => setImageConfig({...imageConfig, imageSize: e.target.value as any})}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                >
                  <option value="1K">1K (Standard)</option>
                  <option value="2K">2K (High Res)</option>
                  <option value="4K">4K (Ultra)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Aspect Ratio</label>
                <div className="grid grid-cols-3 gap-2">
                  {["1:1", "3:4", "4:3", "9:16", "16:9"].map(ratio => (
                    <button
                      key={ratio}
                      onClick={() => setImageConfig({...imageConfig, aspectRatio: ratio as any})}
                      className={`px-2 py-2 text-xs border rounded ${
                        imageConfig.aspectRatio === ratio 
                        ? 'bg-brand-navy text-white border-brand-navy' 
                        : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerateImage}
                disabled={isGeneratingImage}
                className="w-full py-3 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-dark transition-colors disabled:opacity-50"
              >
                {isGeneratingImage ? 'Generating...' : 'Generate Image'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiAssistant;

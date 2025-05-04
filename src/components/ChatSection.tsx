import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Message } from '../types';
import { sendMessage } from '../services/api';
import { formatDate, generateId } from '../utils/helpers';

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      content: "Hello! I'm AgroBuddy AI, your agricultural assistant. How can I help with your farming or gardening questions today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const userMessage: Message = {
      id: generateId(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    const aiResponse = await sendMessage(inputValue);
    setIsLoading(false);
    setMessages(prev => [...prev, aiResponse]);
  };

  return (
    <section id="chat" className="py-10 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-green-900 mb-6 text-center">Chat with AgroBuddy AI</h2>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-green-200">
        <div className="h-96 p-4 overflow-y-auto bg-gradient-to-b from-green-50 to-white">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}
            >
              <div className={`inline-block max-w-[80%] px-4 py-3 rounded-lg ${
                message.sender === 'user' 
                  ? 'bg-green-600 text-white rounded-tr-none'
                  : 'bg-gray-100 text-gray-800 rounded-tl-none border-l-4 border-green-500'
              }`}>
                <p className="text-sm">{message.content}</p>
                <span className="block text-xs mt-1 opacity-70">
                  {formatDate(message.timestamp)}
                </span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
                <Sprout className="h-5 w-5 text-green-700" />
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="p-3 border-t border-green-100 bg-green-50">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about crops, pests, weather advice..."
              className="flex-grow p-2 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className={`bg-green-600 text-white rounded-md p-2 ${
                isLoading || !inputValue.trim() 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-green-700'
              }`}
              disabled={isLoading || !inputValue.trim()}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
      <p className="text-xs text-center text-gray-500 mt-2">
        Try asking about crop recommendations, pest control, or weather advice
      </p>
    </section>
  );
};

export default ChatSection;
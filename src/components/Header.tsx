import React from 'react';
import { Sprout } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-800 to-green-700 text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sprout className="h-8 w-8 text-green-300" />
          <div>
            <h1 className="text-xl font-bold">AgroBuddy AI</h1>
            <p className="text-xs text-green-200">Your Intelligent Farming Assistant</p>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-green-100 hover:text-white transition-colors">Features</a>
          <a href="#chat" className="text-green-100 hover:text-white transition-colors">Chat</a>
          <a href="#weather" className="text-green-100 hover:text-white transition-colors">Weather</a>
        </nav>
        
        <button className="md:hidden text-green-100 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
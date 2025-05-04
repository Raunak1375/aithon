import React from 'react';
import { Sprout, Mail, Phone, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sprout className="h-8 w-8 text-green-400 mr-2" />
              <h3 className="text-xl font-bold">AgroBuddy AI</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your intelligent farming assistant powered by the latest in agricultural technology and AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#chat" className="text-gray-400 hover:text-white transition-colors">Chat with AI</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#weather" className="text-gray-400 hover:text-white transition-colors">Weather</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contact Us</h4>
            <div className="space-y-3">
              <p className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-green-500" />
                info@agrobuddy.ai
              </p>
              <p className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2 text-green-500" />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-sm text-center text-gray-500">
            © {new Date().getFullYear()} AgroBuddy AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
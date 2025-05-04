import React from 'react';
import Header from './components/Header';
import ChatSection from './components/ChatSection';
import FeaturesSection from './components/FeaturesSection';
import WeatherWidget from './components/WeatherWidget';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white font-sans">
      <Header />
      
      <main>
        <section className="py-16 px-4 text-center bg-[url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat relative">
          <div className="absolute inset-0 bg-green-900 bg-opacity-70"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Growing Smarter with AgroBuddy AI
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Your intelligent farming assistant for personalized crop advice, weather insights, and sustainable agriculture practices.
            </p>
            <a 
              href="#chat" 
              className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition-colors"
            >
              Chat with AgroBuddy
            </a>
          </div>
        </section>
        
        <FeaturesSection />
        <ChatSection />
        <WeatherWidget />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
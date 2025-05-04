import React from 'react';
import { Sprout, Cloud, Bug, Droplet } from 'lucide-react';
import { Feature } from '../types';

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: '1',
      title: 'Crop Tips & Planning',
      description: 'Get personalized recommendations for crop selection, planting schedules, and rotation strategies based on your local conditions.',
      icon: 'sprout'
    },
    {
      id: '2',
      title: 'Weather-Based Advice',
      description: 'Receive timely suggestions based on current and forecasted weather conditions to optimize your farming activities.',
      icon: 'cloud'
    },
    {
      id: '3',
      title: 'Organic Pest Control',
      description: 'Learn natural and eco-friendly methods to manage pests and diseases without harmful chemicals.',
      icon: 'bug'
    },
    {
      id: '4',
      title: 'Soil Health Management',
      description: 'Understand your soil composition and get guidance on improving fertility and structure for healthier crops.',
      icon: 'droplet'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sprout':
        return <Sprout className="h-8 w-8 text-green-600" />;
      case 'cloud':
        return <Cloud className="h-8 w-8 text-green-600" />;
      case 'bug':
        return <Bug className="h-8 w-8 text-green-600" />;
      case 'droplet':
        return <Droplet className="h-8 w-8 text-green-600" />;
      default:
        return <Sprout className="h-8 w-8 text-green-600" />;
    }
  };

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
          How AgroBuddy AI Helps Your Farm
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500 transform transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
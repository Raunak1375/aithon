import React, { useEffect, useState } from 'react';
import { Cloud, Sun, CloudRain, CloudDrizzle, Wind, Droplets, CloudSun } from 'lucide-react';
import { WeatherData } from '../types';
import { fetchWeatherData } from '../services/api';

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);
      const data = await fetchWeatherData();
      setWeather(data);
      setLoading(false);
    };

    getWeatherData();
  }, []);

  const getWeatherIcon = (iconName: string) => {
    switch (iconName) {
      case 'sun':
        return <Sun className="h-10 w-10 text-yellow-500" />;
      case 'cloud':
        return <Cloud className="h-10 w-10 text-gray-500" />;
      case 'rain':
        return <CloudRain className="h-10 w-10 text-blue-500" />;
      case 'drizzle':
        return <CloudDrizzle className="h-10 w-10 text-blue-400" />;
      case 'cloud-sun':
        return <CloudSun className="h-10 w-10 text-gray-600" />;
      default:
        return <Sun className="h-10 w-10 text-yellow-500" />;
    }
  };

  if (loading) {
    return (
      <section id="weather" className="py-10 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">Local Weather</h2>
          <div className="flex justify-center">
            <div className="animate-pulse flex space-x-4 bg-green-800 rounded-lg p-6 max-w-md w-full">
              <div className="rounded-full bg-green-700 h-16 w-16"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-green-700 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-green-700 rounded"></div>
                  <div className="h-4 bg-green-700 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!weather) {
    return (
      <section id="weather" className="py-10 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">Local Weather</h2>
          <p className="text-center">Unable to fetch weather data. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="weather" className="py-10 bg-green-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Local Weather</h2>
        <div className="max-w-md mx-auto bg-gradient-to-br from-green-800 to-green-700 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-medium text-green-100">{weather.location}</h3>
                <p className="text-green-200">{weather.condition}</p>
              </div>
              <div className="flex items-center">
                {getWeatherIcon(weather.icon)}
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center justify-center">
                <span className="text-5xl font-bold">{weather.temperature}°C</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center">
                  <Droplets className="h-5 w-5 text-blue-300 mr-2" />
                  <div>
                    <p className="text-sm text-green-200">Humidity</p>
                    <p className="font-medium">{weather.humidity}%</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Wind className="h-5 w-5 text-green-200 mr-2" />
                  <div>
                    <p className="text-sm text-green-200">Wind</p>
                    <p className="font-medium">{weather.windSpeed} km/h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="px-6 py-3 bg-green-800 bg-opacity-50">
            <p className="text-xs text-center text-green-200">
              Weather data updated just now • Perfect for field work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherWidget;
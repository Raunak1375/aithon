import { Message } from '../types';
import { generateId } from '../utils/helpers';

// Sends a message and simulates AI response based on keywords
export const sendMessage = async (message: string): Promise<Message> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    let aiResponse = "I'm sorry, I don't have enough information to answer that question. Could you provide more details about your crops or specific agricultural concern?";
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('tomato') || lowerMessage.includes('tomatoes')) {
      aiResponse = "Tomatoes thrive in well-drained soil with pH 6.0-6.8. They need 6-8 hours of sunlight daily. Water consistently at the base to prevent fungal diseases. For pest control, consider companion planting with basil or marigolds.";
    } else if (lowerMessage.includes('pest') || lowerMessage.includes('insect')) {
      aiResponse = "For organic pest control, consider neem oil, diatomaceous earth, or introducing beneficial insects like ladybugs. Crop rotation and companion planting are excellent preventative measures.";
    } else if (lowerMessage.includes('fertilizer') || lowerMessage.includes('nutrient')) {
      aiResponse = "For organic fertilization, compost is excellent for long-term soil health. For immediate nutrient needs, consider fish emulsion (high in nitrogen), bone meal (phosphorus), or wood ash (potassium). Always test your soil before fertilizing.";
    } else if (lowerMessage.includes('weather') || lowerMessage.includes('rain') || lowerMessage.includes('temperature')) {
      aiResponse = "Based on your local weather forecast, conditions look favorable for field work in the next 48 hours. Temperatures will remain moderate with minimal precipitation expected.";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      aiResponse = "Hello! I'm AgroBuddy AI, your agricultural assistant. How can I help with your farming or gardening questions today?";
    }

    return {
      id: generateId(),
      content: aiResponse,
      sender: 'ai',
      timestamp: new Date()
    };
  } catch (error) {
    console.error('Error sending message:', error);
    return {
      id: generateId(),
      content: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
      sender: 'ai',
      timestamp: new Date()
    };
  }
};

// Fetches real weather data from Open-Meteo for New Delhi
export const fetchWeatherData = async (): Promise<any> => {
  try {
    const latitude = 28.6139;
    const longitude = 77.2090;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;

    const response = await fetch(url);
    const data = await response.json();

    const now = new Date();
    const currentHourIndex = data.hourly.time.findIndex((t: string) =>
      new Date(t).getHours() === now.getHours()
    );
    const temperature = data.hourly.temperature_2m[currentHourIndex];

    return {
      location: "New Delhi, India",
      temperature,
      condition: "Live forecast from Open-Meteo",
      humidity: null,
      windSpeed: null,
      icon: "thermometer"
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

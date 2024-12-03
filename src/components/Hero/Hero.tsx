import React from 'react';
import { Headphones, Languages } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Learn Languages Through
              <span className="text-indigo-600"> Immersive Podcasts</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your language learning journey with AI-powered bilingual podcasts. 
              Perfect for learners at any level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center">
                <Headphones className="w-5 h-5 mr-2" />
                Start Listening
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors flex items-center justify-center">
                <Languages className="w-5 h-5 mr-2" />
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80" 
              alt="Person listening to podcast"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
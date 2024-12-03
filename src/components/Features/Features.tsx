import React from 'react';
import { Brain, Mic, Globe2, Headphones, BookOpen, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Learning",
    description: "Smart content adaptation to your learning pace and style"
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Native Pronunciations",
    description: "Crystal-clear audio from native speakers in both languages"
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Bilingual Support",
    description: "Seamlessly switch between languages while listening"
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Offline Access",
    description: "Download episodes for learning on the go"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Interactive Transcripts",
    description: "Follow along with synchronized bilingual transcripts"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Personalized Content",
    description: "Topics tailored to your interests and proficiency level"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need for effective language learning</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-indigo-600 transition-colors group"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                <div className="text-indigo-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
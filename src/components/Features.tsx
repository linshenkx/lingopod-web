import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, MessageSquare, Mic2, FileText, Languages, Music, Rocket, Smartphone } from 'lucide-react';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      key: 'extract'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      key: 'dialogue'
    },
    {
      icon: <Mic2 className="w-6 h-6" />,
      key: 'tts'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      key: 'subtitle'
    },
    {
      icon: <Languages className="w-6 h-6" />,
      key: 'switch'
    },
    {
      icon: <Music className="w-6 h-6" />,
      key: 'audio'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      key: 'api'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      key: 'platform'
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-24 bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">
            {t('features.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-dark-200 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature) => (
            <div key={feature.key} className="bg-dark-700/50 p-4 sm:p-6 rounded-xl">
              <div className="text-accent-500 mb-3">{feature.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">
                {t(`features.items.${feature.key}.title`)}
              </h3>
              <p className="text-sm sm:text-base text-dark-200">
                {t(`features.items.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
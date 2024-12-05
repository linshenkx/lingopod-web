import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Brain, MessageSquare, Mic2, FileText, Languages, Music, Rocket, Smartphone } from 'lucide-react';
import { container, heading } from '../styles/components';
import Card from './shared/Card';
import GradientIcon from './shared/GradientIcon';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      key: 'extract',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      key: 'dialogue',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Mic2 className="w-6 h-6" />,
      key: 'tts',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      key: 'subtitles',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Languages className="w-6 h-6" />,
      key: 'switch',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Music className="w-6 h-6" />,
      key: 'audio',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      key: 'api',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      key: 'platform',
      color: 'from-emerald-500 to-green-500'
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-dark-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      
      <div className={`${container} relative z-10`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`${heading.h2} text-white mb-4`}>
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.key} className="p-6">
              <GradientIcon
                icon={feature.icon}
                gradient={feature.color}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {t(`features.${feature.key}.title`)}
              </h3>
              <p className="text-gray-400">
                {t(`features.${feature.key}.description`)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
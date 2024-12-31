import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Brain, MessageSquare, Mic2, FileText, Languages, Music, Rocket, 
  Smartphone, BookOpen, GraduationCap, Award, Rss, Settings, Clock, 
  RefreshCw, Sliders 
} from 'lucide-react';
import { container, heading } from '../styles/components';
import Card from './shared/Card';
import GradientIcon from './shared/GradientIcon';

interface Feature {
  icon: React.ReactNode;
  key: string;
  color: string;
  highlight?: boolean;
  level?: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
  className?: string;
}

const Features = () => {
  const { t } = useTranslation();

  const mainFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      key: 'extract',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Languages className="w-6 h-6" />,
      key: 'ttsAndSwitch',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      key: 'subtitles',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      key: 'platform',
      color: 'from-emerald-500 to-green-500'
    }
  ];

  const englishLevels = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      key: 'englishLevels.levels.beginner',
      color: 'from-yellow-500 to-amber-500',
      highlight: true,
      level: '初级'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      key: 'englishLevels.levels.intermediate',
      color: 'from-orange-500 to-red-500',
      highlight: true,
      level: '中级'
    },
    {
      icon: <Award className="w-6 h-6" />,
      key: 'englishLevels.levels.advanced',
      color: 'from-purple-500 to-pink-500',
      highlight: true,
      level: '高级'
    }
  ];

  const rssFeatures = [
    {
      icon: <Settings className="w-6 h-6" />,
      key: 'rssFeatures.features.management',
      color: 'from-blue-500 to-indigo-500',
      highlight: true
    },
    {
      icon: <Clock className="w-6 h-6" />,
      key: 'rssFeatures.features.autoFetch',
      color: 'from-green-500 to-teal-500',
      highlight: true
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      key: 'rssFeatures.features.smartUpdate',
      color: 'from-purple-500 to-pink-500',
      highlight: true
    },
    {
      icon: <Sliders className="w-6 h-6" />,
      key: 'rssFeatures.features.customConfig',
      color: 'from-red-500 to-orange-500',
      highlight: true
    }
  ];

  const FeatureSection = ({ title, subtitle, features, className = '' }: FeatureSectionProps) => {
    const isEnglishLevels = features === englishLevels;
    
    return (
      <div className={className}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {isEnglishLevels 
              ? t('englishLevels.progressiveDescription')
              : subtitle}
          </p>
        </motion.div>
        <div className={`
          grid gap-8 mx-auto
          ${features.length === 3 
            ? 'grid-cols-1 md:grid-cols-3 max-w-6xl justify-items-center' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl'
          }
        `}>
          {features.map((feature: Feature, index: number) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={isEnglishLevels ? 'w-full max-w-md md:max-w-sm' : 'w-full'}
            >
              <Card 
                key={feature.key} 
                className={`p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                  feature.highlight 
                    ? 'ring-2 ring-primary-500/50 bg-dark-800/80 backdrop-blur-sm shadow-xl' 
                    : 'hover:bg-dark-800/50'
                }`}
              >
                <GradientIcon
                  icon={feature.icon}
                  gradient={feature.color}
                  className={`${isEnglishLevels ? 'w-16 h-16 mb-6' : 'w-14 h-14 mb-6'}`}
                />
                {isEnglishLevels && (
                  <>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {t(`${feature.key}.title`)}
                    </h3>
                    <div className="text-gray-500 mb-6">
                      {t(`${feature.key}.description`)}
                    </div>
                  </>
                )}
                {!isEnglishLevels && (
                  <>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {t(feature.key === 'ttsAndSwitch' 
                        ? 'features.ttsAndSwitch.title'
                        : feature.key.startsWith('englishLevels') || feature.key.startsWith('rssFeatures') 
                          ? `${feature.key}.title`
                          : `features.${feature.key}.title`)}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                      {t(feature.key === 'ttsAndSwitch'
                        ? 'features.ttsAndSwitch.description'
                        : feature.key.startsWith('englishLevels') || feature.key.startsWith('rssFeatures')
                          ? `${feature.key}.description`
                          : `features.${feature.key}.description`)}
                    </p>
                  </>
                )}
                {feature.highlight && feature.key.includes('englishLevels.levels') && (
                  <ul className="w-full space-y-3">
                    {(t(`${feature.key}.features`, { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index} className="text-gray-400 flex items-center gap-3 text-base justify-center">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="features" className="relative py-32 bg-dark-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-800/50" />
      
      <div className={`${container} relative z-10`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className={`${heading.h2} text-white mb-6 text-5xl`}>
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-32">
          <FeatureSection 
            title={t('features.mainFeatures.title')}
            subtitle={t('features.mainFeatures.subtitle')}
            features={mainFeatures}
          />

          <FeatureSection 
            title={t('englishLevels.title')}
            subtitle={t('englishLevels.subtitle')}
            features={englishLevels}
          />

          <FeatureSection 
            title={t('rssFeatures.title')}
            subtitle={t('rssFeatures.subtitle')}
            features={rssFeatures}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
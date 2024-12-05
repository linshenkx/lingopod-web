import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Database, Smartphone, Layout, Globe } from 'lucide-react';
import { container, heading } from '../styles/components';
import ArchitectureCard from './shared/ArchitectureCard';

const ArchitectureSection = () => {
  const { t } = useTranslation();

  const architecture = [
    {
      icon: <Database className="w-6 h-6 text-blue-500" />,
      title: t('platforms.architecture.api.title'),
      description: t('platforms.architecture.api.description'),
      link: "https://github.com/linshenkx/lingopod"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-green-500" />,
      title: t('platforms.architecture.client.title'),
      description: t('platforms.architecture.client.description'),
      link: "https://github.com/linshenkx/lingopod-client"
    },
    {
      icon: <Layout className="w-6 h-6 text-purple-500" />,
      title: t('platforms.architecture.manager.title'),
      description: t('platforms.architecture.manager.description'),
      link: "https://github.com/linshenkx/lingopod-manager"
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: t('platforms.architecture.web.title'),
      description: t('platforms.architecture.web.description'),
      link: "https://github.com/linshenkx/lingopod-web"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <h2 className={`${heading.h2} text-white mb-4 text-center`}>
        {t('platforms.architecture.title')}
      </h2>
      <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 text-center">
        {t('platforms.architecture.subtitle')}
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {architecture.map((item) => (
          <ArchitectureCard
            key={item.title}
            {...item}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ArchitectureSection;

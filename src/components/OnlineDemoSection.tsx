import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Monitor, Globe, Server, AlertTriangle } from 'lucide-react';
import { heading } from '../styles/components';
import Card from './shared/Card';
import GradientIcon from './shared/GradientIcon';

const OnlineDemoSection = () => {
  const { t } = useTranslation();

  const onlineDemo = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: t('platforms.demo.client.title'),
      link: "https://client.lingopod.top",
      description: t('platforms.demo.client.description'),
      action: t('platforms.demo.client.action'),
      gradient: 'from-blue-500 to-cyan-500',
      key: 'client'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: t('platforms.demo.manager.title'),
      link: "https://manager.lingopod.top",
      description: t('platforms.demo.manager.description'),
      action: t('platforms.demo.manager.action'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('platforms.demo.api.title'),
      link: "https://server.lingopod.top/api/v1/users/health",
      description: t('platforms.demo.api.description'),
      action: t('platforms.demo.api.action'),
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <h2 className={`${heading.h2} text-white mb-6 text-center`}>
        {t('platforms.demo.title')}
      </h2>
      <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16 text-center leading-relaxed">
        {t('platforms.demo.subtitle')}
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {onlineDemo.map((demo) => (
          <Card 
            key={demo.title} 
            className="p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex flex-col items-start space-y-4">
              <GradientIcon
                icon={demo.icon}
                gradient={demo.gradient}
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {demo.title}
                </h3>
                <p className="text-base text-gray-400 mb-6 leading-relaxed">
                  {demo.description}
                </p>
                <div className="space-y-4">
                  <a
                    href={demo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center px-6 py-2.5 
                      text-sm font-medium text-white
                      bg-gradient-to-r ${demo.gradient}
                      rounded-lg transition-all duration-300
                      hover:scale-105 hover:shadow-lg
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-800 focus:ring-blue-500
                    `}
                  >
                    {demo.action}
                    <Globe className="w-4 h-4 ml-2" />
                  </a>
                  {demo.key === 'client' && (
                    <div className="flex items-center text-sm text-yellow-500 bg-yellow-500/10 px-3 py-2 rounded-lg">
                      <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0" />
                      测试账号：test/test（仅供功能体验，仅支持微信公众号文章链接）
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default OnlineDemoSection;
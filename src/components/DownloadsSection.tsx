import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Globe, Download } from 'lucide-react';
import { heading } from '../styles/components';
import Card from './shared/Card';
import GradientIcon from './shared/GradientIcon';

const DownloadsSection = () => {
  const { t } = useTranslation();

  const downloads = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t('platforms.downloads.android.title'),
      link: "https://ghproxy.always200.com/https://github.com/linshenkx/lingopod-client/releases/latest/download/lingopod-android.apk",
      action: t('platforms.downloads.android.action'),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: t('platforms.downloads.windows.title'),
      link: "https://ghproxy.always200.com/https://github.com/linshenkx/lingopod-client/releases/latest/download/lingopod-windows.zip",
      action: t('platforms.downloads.windows.action'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('platforms.downloads.web.title'),
      link: "https://ghproxy.always200.com/https://github.com/linshenkx/lingopod-client/releases/latest/download/lingopod-web.zip",
      action: t('platforms.downloads.web.action'),
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className={`${heading.h2} text-white mb-6 text-center`}>
        {t('platforms.downloads.title')}
      </h2>
      <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16 text-center leading-relaxed">
        {t('platforms.downloads.subtitle')}
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {downloads.map((item) => (
          <Card key={item.title} className="p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-start space-y-4">
              <GradientIcon
                icon={item.icon}
                gradient={item.gradient}
                className="w-12 h-12"
              />
              <div className="w-full">
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center justify-center w-full px-6 py-2.5 
                    text-sm font-medium text-white
                    bg-gradient-to-r ${item.gradient}
                    rounded-lg transition-all duration-300
                    hover:scale-105 hover:shadow-lg
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-800 focus:ring-blue-500
                  `}
                >
                  {item.action}
                  <Download className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="https://github.com/linshenkx/lingopod-client/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          {t('platforms.downloads.more')}
          <Globe className="w-4 h-4 ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default DownloadsSection;
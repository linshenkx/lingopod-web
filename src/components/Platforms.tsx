import React from 'react';
import { useTranslation } from 'react-i18next';
import { Monitor, Globe, Smartphone, ExternalLink, ArrowRight } from 'lucide-react';

const Platforms = () => {
  const { t } = useTranslation();

  const mainPlatform = {
    icon: <Monitor className="w-8 h-8" />,
    title: t('platforms.web'),
    description: "client.lingopod.top",
    link: "https://client.lingopod.top"
  };

  const otherPlatforms = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('platforms.admin'),
      description: "server.lingopod.top",
      link: "https://server.lingopod.top",
      note: "测试环境，可自行部署"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: t('platforms.mobile'),
      description: "GitHub",
      link: "https://github.com/linshenkx/lingopod-client",
      note: "即将推出"
    }
  ];

  return (
    <section id="platforms" className="py-12 sm:py-16 lg:py-24 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">
            {t('platforms.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-dark-200 max-w-2xl mx-auto">
            {t('platforms.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* 主要平台 */}
          <a
            href={mainPlatform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-8 group"
          >
            <div className="bg-gradient-to-r from-accent-500/10 to-accent-600/10 p-6 sm:p-8 rounded-xl border border-accent-500/50 hover:border-accent-500 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="bg-accent-500/20 p-4 rounded-xl">
                  {mainPlatform.icon}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {mainPlatform.title}
                  </h3>
                  <p className="text-dark-200 mb-4">{mainPlatform.description}</p>
                  <button className="inline-flex items-center gap-2 bg-accent-500 text-white px-6 py-2 rounded-lg hover:bg-accent-600 transition-colors">
                    立即使用 <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </a>

          {/* 其他平台 */}
          <div className="grid sm:grid-cols-2 gap-4">
            {otherPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-dark-800 p-4 sm:p-6 rounded-xl border border-dark-700 hover:border-accent-500 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-accent-500 bg-dark-700/50 p-2 rounded-lg">
                      {platform.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {platform.title}
                    </h3>
                  </div>
                  <p className="text-sm text-dark-200 mb-1">{platform.description}</p>
                  <p className="text-xs text-dark-400">{platform.note}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
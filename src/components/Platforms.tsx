import React from 'react';
import { useTranslation } from 'react-i18next';
import { Monitor, Globe, Smartphone, ExternalLink, Download, Server, Github } from 'lucide-react';

const Platforms = () => {
  const { t } = useTranslation();

  const demoLinks = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: t('platforms.demo.web'),
      description: "client.lingopod.top",
      link: "https://client.lingopod.top",
      note: "test/test"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: t('platforms.demo.admin'),
      description: "manager.lingopod.top",
      link: "https://manager.lingopod.top"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('platforms.demo.api'),
      description: "server.lingopod.top",
      link: "https://server.lingopod.top",
      note: t('platforms.demo.note')
    }
  ];

  const downloads = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: t('platforms.downloads.android'),
      link: "https://ghproxy.always200.com/https://github.com/linshenkx/lingopod-client/releases/latest/download/lingopod-android.apk"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: t('platforms.downloads.windows'),
      link: "https://github.com/linshenkx/lingopod-client/releases/latest/download/lingopod-windows.zip"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('platforms.downloads.web'),
      link: "https://github.com/linshenkx/lingopod-client/releases/latest/download/lingopod-web.zip"
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

        <div className="max-w-5xl mx-auto space-y-12">
          {/* 在线演示 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white text-center">
              {t('platforms.demo.title')}
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {demoLinks.map((demo, index) => (
                <a
                  key={index}
                  href={demo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-dark-800 p-4 sm:p-6 rounded-xl border border-dark-700 hover:border-accent-500 transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-accent-500 bg-dark-700/50 p-2 rounded-lg">
                        {demo.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        {demo.title}
                      </h3>
                    </div>
                    <p className="text-sm text-dark-200 mb-1">{demo.description}</p>
                    {demo.note && <p className="text-xs text-dark-400">{demo.note}</p>}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 客户端下载 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white text-center">
              {t('platforms.downloads.title')}
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {downloads.map((download, index) => (
                <a
                  key={index}
                  href={download.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-800 p-4 rounded-xl border border-dark-700 hover:border-accent-500 transition-all duration-300 group flex items-center justify-center gap-3"
                >
                  <div className="text-accent-500 bg-dark-700/50 p-2 rounded-lg">
                    {download.icon}
                  </div>
                  <span className="text-white font-medium">{download.title}</span>
                  <Download className="w-4 h-4 text-dark-200 group-hover:text-accent-500" />
                </a>
              ))}
            </div>
            <div className="text-center mt-4">
              <a
                href="https://github.com/linshenkx/lingopod-client/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-dark-200 hover:text-accent-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{t('platforms.downloads.more')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
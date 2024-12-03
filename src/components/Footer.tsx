import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 py-8 sm:py-12 border-t border-dark-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="LingoPod" className="w-8 h-8" />
              <span className="text-lg sm:text-xl font-bold text-white">LingoPod</span>
            </div>
            <p className="text-sm sm:text-base text-dark-200">
              {t('hero.subtitle')}
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 text-white">
              {t('nav.features')}
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {Object.keys(t('features.items', { returnObjects: true })).map((key) => (
                <li key={key}>
                  <a href="#features" className="text-dark-200 hover:text-white transition-colors">
                    {t(`features.items.${key}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 text-white">
              {t('platforms.title')}
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a 
                  href="https://server.lingopod.top"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-200 hover:text-white transition-colors"
                >
                  {t('platforms.admin')}
                </a>
              </li>
              <li>
                <a 
                  href="https://client.lingopod.top"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-200 hover:text-white transition-colors"
                >
                  {t('platforms.web')}
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/linshenkx/lingopod-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-200 hover:text-white transition-colors"
                >
                  {t('platforms.mobile')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 text-white">
              {t('footer.about')}
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a 
                  href="https://github.com/linshenkx/lingopod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-200 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{t('footer.github')}</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/linshenkx/lingopod/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-200 hover:text-white transition-colors"
                >
                  {t('footer.license')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-4 border-t border-dark-800">
          <p className="text-sm text-dark-200">
            &copy; {currentYear} LingoPod. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
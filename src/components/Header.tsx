import React from 'react';
import { Menu, Github, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed w-full bg-dark-900/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="LingoPod" className="w-8 h-8" />
            <span className="text-xl font-bold text-white">LingoPod</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-dark-200 hover:text-white transition-colors">
              {t('nav.features')}
            </a>
            <a href="#platforms" className="text-dark-200 hover:text-white transition-colors">
              {t('nav.platforms')}
            </a>
            <a 
              href="https://github.com/linshenkx/lingopod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-200 hover:text-white transition-colors flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>{t('nav.github')}</span>
            </a>
            <LanguageSwitcher />
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-dark-200 hover:text-white transition-colors">
                {t('nav.features')}
              </a>
              <a href="#platforms" className="text-dark-200 hover:text-white transition-colors">
                {t('nav.platforms')}
              </a>
              <a 
                href="https://github.com/linshenkx/lingopod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-200 hover:text-white transition-colors flex items-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>{t('nav.github')}</span>
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
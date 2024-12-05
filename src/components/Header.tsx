import React from 'react';
import { Menu, Github, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitch from './shared/LanguageSwitch';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { href: '#features', label: t('nav.features') },
    { href: '#architecture', label: t('nav.architecture') },
    { href: '#demo', label: t('nav.demo') },
    { href: '#downloads', label: t('nav.downloads') },
    {
      href: 'https://github.com/linshenkx/lingopod',
      label: t('nav.github'),
      icon: <Github className="w-5 h-5" />,
      external: true
    }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full backdrop-blur-md z-50 border-b border-white/10"
      style={{
        backgroundColor: 'rgba(17, 24, 39, 0)'
      }}
    >
      <nav className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img src="/favicon.png" alt="LingoPod" className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              LingoPod
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon && item.icon}
                <span>{item.label}</span>
              </motion.a>
            ))}
            <LanguageSwitch />
          </div>

          <motion.button 
            className="md:hidden text-white"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                    whileHover={{ x: 4 }}
                  >
                    {item.icon && item.icon}
                    <span>{item.label}</span>
                  </motion.a>
                ))}
                <div className="pt-2">
                  <LanguageSwitch />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
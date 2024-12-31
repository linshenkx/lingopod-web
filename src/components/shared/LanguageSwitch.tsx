import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const nextLang = currentLang === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(nextLang);
    try {
      localStorage.setItem('i18nextLng', nextLang);
    } catch (error) {
      console.warn('Unable to save language preference to localStorage:', error);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors"
      aria-label={`Switch to ${i18n.language === 'en' ? '中文' : 'English'}`}
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm">
        {languages.find(lang => lang.code === i18n.language)?.flag}
      </span>
    </motion.button>
  );
};

export default LanguageSwitch;

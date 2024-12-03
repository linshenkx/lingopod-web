import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors"
      aria-label="Toggle language"
    >
      <Languages className="w-5 h-5" />
      <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
    </button>
  );
}

export default LanguageSwitcher;
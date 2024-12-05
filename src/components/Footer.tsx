import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Heart } from 'lucide-react';
import { container } from '../styles/components';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className={`${container} py-6`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <img src="/favicon.png" alt="LingoPod" className="w-6 h-6" />
              <span className="text-lg font-bold text-white">LingoPod</span>
            </div>
            <a
              href="https://github.com/linshenkx/lingopod"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
          </motion.div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>{t('footer.copyright')}</span>
            <span>·</span>
            <div className="flex items-center gap-1">
              <span>{t('footer.made.text')}</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>{t('footer.made.by')}</span>
              <a
                href="https://github.com/linshenkx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-400"
              >
                LinShen
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
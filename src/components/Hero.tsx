import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = [
    {
      src: "https://ghproxy.always200.com/https://raw.githubusercontent.com/linshenkx/lingopod-client/main/images/home-dark.png",
      alt: "LingoPod Home Dark Mode"
    },
    {
      src: "https://ghproxy.always200.com/https://raw.githubusercontent.com/linshenkx/lingopod-client/main/images/player-dark.png",
      alt: "LingoPod Player Dark Mode"
    }
  ];

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1); // Set direction to 1 for next slide
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1); // Set direction to 1 for next slide
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1); // Set direction to -1 for previous slide
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const slideVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-dark-900 to-dark-950">
      {/* 背景效果 - 优化层叠效果 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/5 to-transparent backdrop-blur-[1px]" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* 左侧内容区域 */}
          <motion.div
            className="text-center lg:text-left space-y-6 md:space-y-8 lg:ml-12"
          >
            <div className="space-y-4">
              <motion.h1 
                className="relative font-display font-extrabold tracking-tight w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-6 md:mb-8 whitespace-normal pb-2">
                  <span className="inline-block bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent [text-wrap:balance] leading-[1.4] hover:scale-105 transition-transform duration-300">
                    {t('hero.title')}
                  </span>
                  <motion.span 
                    className="inline-flex items-center ml-2 md:ml-3 text-primary-400 hover:text-primary-300 align-middle"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Headphones className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                  </motion.span>
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-gray-300/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium [text-wrap:pretty]"
              >
                {t('hero.subtitle')}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent"
              >
                lingopod.top
              </motion.p>
            </div>

            {/* 按钮组 - 突出“立即体验”按钮 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/linshenkx/lingopod-client"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-5 py-2.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] active:bg-white/[0.15] text-white font-medium backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/25 focus:ring-offset-2 focus:ring-offset-dark-900"
              >
                <Github className="w-5 h-5 mr-2 transition-transform group-hover:scale-110 group-hover:rotate-3" />
                <span className="relative inline-block overflow-hidden">
                  <span className="relative inline-block transform transition-transform group-hover:translate-y-[-100%]">
                    GitHub
                  </span>
                  <span className="absolute top-full left-0 inline-block transform transition-transform group-hover:translate-y-[-100%]">
                    GitHub
                  </span>
                </span>
              </a>
              <a 
                href="https://client.lingopod.top/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 hover:from-primary-500 hover:via-primary-400 hover:to-primary-500 active:from-primary-700 active:via-primary-600 active:to-primary-700 text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-dark-900"
              >
                <span className="relative z-10 flex items-center">
                  <span className="relative inline-block overflow-hidden">
                    <span className="relative inline-block transform transition-transform group-hover:translate-y-[-100%] whitespace-nowrap">
                      {t('hero.tryNow')} 
                      <span className="ml-1 inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                    <span className="absolute top-full left-0 inline-block transform transition-transform group-hover:translate-y-[-100%] whitespace-nowrap">
                      {t('hero.tryNow')}
                      <span className="ml-1 inline-block transform translate-x-1">→</span>
                    </span>
                  </span>
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* 轮播图区域 - 优化阴影和边框效果 */}
          <div className="relative w-full max-w-5xl mx-auto lg:mx-0 lg:-mr-8">
            <div className="relative aspect-[16/12] rounded-3xl overflow-hidden shadow-3xl shadow-black/40 backdrop-blur-lg">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentSlide}
                  src={images[currentSlide].src}
                  alt={images[currentSlide].alt}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0 w-full h-full object-contain p-2"
                />
              </AnimatePresence>

              {/* 轮播控制按钮 - 优化交互效果 */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentSlide ? 1 : -1);
                      setCurrentSlide(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-6 bg-primary-500'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* 左右箭头 - 优化按钮样式 */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/90 hover:text-white backdrop-blur-sm transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/90 hover:text-white backdrop-blur-sm transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
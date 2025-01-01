import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const { t } = useTranslation();
  const sliderRef = useRef<Slider>(null);

  const images = [
    {
      src: "https://ghproxy.always200.com/https://raw.githubusercontent.com/linshenkx/lingopod-client/main/images/home-dark.jpg",
      alt: "LingoPod Home Dark Mode"
    },
    {
      src: "https://ghproxy.always200.com/https://raw.githubusercontent.com/linshenkx/lingopod-client/main/images/player-dark.jpg",
      alt: "LingoPod Player Dark Mode"
    },
    {
      src: "https://ghproxy.always200.com/https://raw.githubusercontent.com/linshenkx/lingopod-client/main/images/create-job.jpg",
      alt: "LingoPod Player Create Job"
    },
    {
      src: "https://ghproxy.always200.com/https://raw.githubusercontent.com/linshenkx/lingopod-client/main/images/job-manager.jpg",
      alt: "LingoPod Player Job Manager"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    className: "rounded-3xl overflow-hidden",
    dotsClass: "slick-dots custom-dots",
    customPaging: () => (
      <div className="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300" />
    ),
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-dark-900 to-dark-950">
      {/* 背景效果 */}
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
                  <span className="inline-block bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent leading-[1.4] hover:scale-105 transition-transform duration-300">
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
                className="text-lg sm:text-xl md:text-2xl text-gray-300/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium space-y-2"
              >
                <span className="block">{t('hero.subtitle1')}</span>
                <span className="block">{t('hero.subtitle2')}</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent max-w-full overflow-visible whitespace-nowrap leading-relaxed py-2"
              >
                lingopod.top
              </motion.p>
            </div>

            {/* 按钮组 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-8 md:gap-12 justify-center lg:justify-start mt-16"
            >
              <motion.a
                href="https://github.com/linshenkx/lingopod"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-dark-800/60 hover:bg-dark-800/80 border border-white/10 hover:border-white/20 text-white/90 hover:text-white transition-all duration-300 backdrop-blur-sm group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 mr-2" />
                <span>GitHub</span>
              </motion.a>

              <a
                href="https://client.lingopod.top/"
                className="relative inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 group overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
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

          {/* 轮播图区域 */}
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[480px] mx-auto lg:ml-auto lg:mr-16 xl:mr-24 mt-12 lg:mt-0">
            <div className="relative aspect-[3/5] backdrop-blur-lg border border-white/10 rounded-3xl">
              <Slider ref={sliderRef} {...sliderSettings}>
                {images.map((image, index) => (
                  <div key={index} className="outline-none px-4 py-5 h-full">
                    <div className="relative h-full flex items-center justify-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="max-w-full max-h-full w-auto h-auto object-contain select-none rounded-2xl shadow-xl"
                        draggable="false"
                      />
                    </div>
                  </div>
                ))}
              </Slider>

              {/* 自定义切换按钮 */}
              <motion.button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/90 hover:text-white backdrop-blur-sm transition-all duration-300 z-10"
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/90 hover:text-white backdrop-blur-sm transition-all duration-300 z-10"
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Headphones } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const { t } = useTranslation();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    {
      src: "https://ghproxy.always200.com/https://raw.githubusercontent.com/linshenkx/lingopod-client/main/images/home-dark.png",
      alt: "LingoPod 主页深色模式"
    },
    {
      src: "https://ghproxy.always200.com/https://raw.githubusercontent.com/linshenkx/lingopod-client/main/images/player-dark.png",
      alt: "LingoPod 播放器深色模式"
    }
  ];

  return (
    <section className="min-h-[90vh] flex items-center bg-dark-900 py-8 sm:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="w-full lg:w-1/2 lg:pr-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] bg-clip-text text-transparent">
              {t('hero.title')} 🎙️
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://client.lingopod.top"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0ea5e9] text-white px-8 py-3 rounded-lg hover:bg-[#38bdf8] transition-colors flex items-center justify-center"
              >
                <Headphones className="w-5 h-5 mr-2" />
                {t('hero.start')}
              </a>
              <a
                href="https://github.com/linshenkx/lingopod"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                <Github className="w-5 h-5 mr-2" />
                {t('hero.explore')}
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="absolute -inset-1 bg-[#0ea5e9]/20 rounded-2xl blur-xl"></div>
              <div className="relative">
                <Slider {...sliderSettings} className="w-full">
                  {images.map((image, index) => (
                    <div key={index} className="px-2">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="rounded-xl w-full shadow-lg"
                        style={{
                          maxHeight: '70vh',
                          objectFit: 'contain',
                          backgroundColor: '#1a1b1e'
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
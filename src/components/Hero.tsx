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
      src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
      alt: "Person listening to podcast 1"
    },
    {
      src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80",
      alt: "Studio microphone setup"
    },
    {
      src: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=1200&q=80",
      alt: "Person with headphones"
    }
  ];

  return (
    <section className="min-h-screen flex items-center bg-dark-900 py-8 sm:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="w-full lg:w-5/12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-dark-200 mb-6 sm:mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://client.lingopod.top"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 text-white px-8 py-3 rounded-lg hover:bg-accent-600 transition-colors flex items-center justify-center"
              >
                <Headphones className="w-5 h-5 mr-2" />
                {t('hero.start')}
              </a>
              <a
                href="https://github.com/linshenkx/lingopod"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-dark-700 text-dark-200 px-8 py-3 rounded-lg hover:bg-dark-800 transition-colors flex items-center justify-center"
              >
                <Github className="w-5 h-5 mr-2" />
                {t('hero.explore')}
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="relative w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl blur-lg opacity-75"></div>
              <div className="relative">
                <Slider {...sliderSettings} className="w-full">
                  {images.map((image, index) => (
                    <div key={index} className="aspect-[4/3] px-2">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="rounded-lg w-full h-full object-cover"
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
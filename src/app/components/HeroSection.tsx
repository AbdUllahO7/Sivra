import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Carousel images
  const slides = [
    {
      id: 1,
      image: '/assets/hero1.png',
      title: t('home.slide1Title'),
      subtitle: t('home.slide1Subtitle')
    },
    {
      id: 2,
      image: '/assets/hero2.png',
      title: t('home.slide2Title'),
      subtitle: t('home.slide2Subtitle')
    },
    {
      id: 3,
      image: '/assets/hero3.png',
      title: t('home.slide3Title'),
      subtitle: t('home.slide3Subtitle')
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="home" className="relative min-h-screen bg-[#fafafa] overflow-hidden pt-20">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/5 rounded-full">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-black/70">
                {t('home.badge')}
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                {t('home.mainTitle')}
              </h1>
              <div className="h-1 w-20 bg-black rounded-full"></div>
            </div>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-black/70 leading-relaxed max-w-xl">
              {t('home.tagline')}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                t('home.strategicBranding'),
                t('home.digitalProducts'),
                t('home.fullSupport')
              ].map((feature, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-black text-[#fafafa] rounded-lg text-sm font-medium hover:bg-black/90 transition-colors duration-300"
                >
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-black text-[#fafafa] rounded-lg font-semibold text-center overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>{t('home.bookConsultation')}</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>

              <a
                href="#services"
                className="px-8 py-4 bg-black/5 text-black rounded-lg font-semibold text-center hover:bg-black/10 transition-all duration-300 hover:shadow-lg"
              >
                {t('home.learnMore')}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-black/10">
              {[
                { number: '100+', label: t('home.stat1') },
                { number: '50+', label: t('home.stat2') },
                { number: '95%', label: t('home.stat3') }
              ].map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-2xl lg:text-3xl font-bold text-black">{stat.number}</div>
                  <div className="text-xs lg:text-sm text-black/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Carousel with Background Images */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* Slides */}
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Slide Content */}
                  <div className="absolute inset-0 flex items-end p-8">
                    <div 
                      className="space-y-2 transform transition-all duration-700 delay-300"
                      style={{ 
                        opacity: index === currentSlide ? 1 : 0,
                        transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)'
                      }}
                    >
                      <h3 className="text-2xl font-bold text-white">{slide.title}</h3>
                      <p className="text-white/90 text-sm max-w-md">{slide.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? 'w-8 h-2 bg-white'
                        : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Auto-play indicator */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                  aria-label={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
                >
                  {isAutoPlaying ? (
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-black/5 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-black/5 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-black/50 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
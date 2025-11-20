import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  isActive: boolean;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  image, 
  imageAlt, 
  features, 
  isActive, 
  onClick 
}) => {
    const { t } = useTranslation();
  return (
    <div
      className={`group relative cursor-pointer transition-all duration-500 ${
        isActive ? 'scale-105' : 'hover:scale-102'
      }`}
      onClick={onClick}
    >
      {/* Card Container */}
      <div className={`relative bg-[#fafafa] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border ${
        isActive ? 'border-black' : 'border-black/10'
      }`}>
        
        {/* Image Section */}
        <div className="relative h-72 overflow-hidden bg-white">
          <div 
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
              isActive 
                ? 'from-black/60 via-black/20 to-transparent' 
                : 'from-black/40 via-transparent to-transparent group-hover:from-black/60'
            }`}></div>
          </div>

          {/* Active Badge */}
          {isActive && (
            <div className="absolute top-4 right-4 px-4 py-2 bg-black text-white text-xs font-semibold rounded-full animate-pulse">
              Selected
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <h3 className={`text-2xl font-bold transition-colors duration-300 ${
              isActive ? 'text-black' : 'text-black/80 group-hover:text-black'
            }`}>
              {title}
            </h3>
            <div className={`h-0.5 rounded-full transition-all duration-500 ${
              isActive ? 'w-16 bg-black' : 'w-8 bg-black/30 group-hover:w-12 group-hover:bg-black/60'
            }`}></div>
          </div>

          {/* Description */}
          <p className="text-black/70 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-2 text-sm text-black/60"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-black mt-0.5">•</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
        
            <a
              href="https://sivra.gumroad.com/"
              target = "blank"
              className="relative px-6 py-2.5 text-sm font-semibold text-[#fafafa] bg-black rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <span className="relative z-10"> {t('services.learnMore')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
        </div>

        {/* Hover Border Effect */}
        <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`} style={{
          boxShadow: 'inset 0 0 0 2px rgba(0, 0, 0, 0.1)'
        }}></div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.brandStrategy.title'),
      description: t('services.brandStrategy.description'),
      image: '/assets/pro1.png',
      imageAlt: 'Brand Strategy & Identity',
      features: [
        t('services.brandStrategy.feature1'),
        t('services.brandStrategy.feature2'),
        t('services.brandStrategy.feature3'),
        t('services.brandStrategy.feature4')
      ]
    },
    {
      title: t('services.digitalMarketing.title'),
      description: t('services.digitalMarketing.description'),
      image: '/assets/pro2.png',
      imageAlt: 'Marketing & Growth',
      features: [
        t('services.digitalMarketing.feature1'),
        t('services.digitalMarketing.feature2'),
        t('services.digitalMarketing.feature3'),
        t('services.digitalMarketing.feature4')
      ]
    },
    {
      title: t('services.digitalProducts.title'),
      description: t('services.digitalProducts.description'),
      image: '/assets/pro3.png',
      imageAlt: 'Digital Product Development',
      features: [
        t('services.digitalProducts.feature1'),
        t('services.digitalProducts.feature2'),
        t('services.digitalProducts.feature3'),
        t('services.digitalProducts.feature4')
      ]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative bg-[#fafafa]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/5 rounded-full">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-black/70">
              {t('services.badge')}
            </span>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              {t('services.ourOffering')}
            </h2>
            <div className="h-1 w-20 bg-black rounded-full mx-auto"></div>
          </div>

          {/* Description */}
          <p className="text-lg lg:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
            {t('services.offeringDesc')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              imageAlt={service.imageAlt}
              features={service.features}
              isActive={activeService === index}
              onClick={() => setActiveService(activeService === index ? null : index)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <div className="relative bg-black rounded-2xl p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white),
                                  linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px'
              }}></div>
            </div>

            <div className="relative z-10 text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {t('services.workWithUs')}
                </h3>
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                  {t('services.workWithUsDesc')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="group px-8 py-4 bg-white text-black rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>{t('services.bookConsultation')}</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>

                <a
                  href="#story"
                  className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  {t('services.viewPortfolio')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '100+', label: t('services.stat1') },
            { number: '50+', label: t('services.stat2') },
            { number: '30+', label: t('services.stat3') },
            { number: '95%', label: t('services.stat4') }
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-black">{stat.number}</div>
              <div className="text-sm text-black/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
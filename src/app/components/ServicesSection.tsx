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
  isTechService?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  image, 
  imageAlt, 
  features, 
  isActive, 
  onClick,
  isTechService = false
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`group relative cursor-pointer transition-all duration-500 ${
        isActive ? 'scale-[1.02]' : ''
      }`}
      onClick={onClick}
    >
      {/* Card Container */}
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
        
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Tech Service Badge */}
          {isTechService && (
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
              AI Powered
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6 flex-1">
            {description}
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="https://wa.me/905360330996"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-black text-white rounded-xl font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-gray-900 hover:shadow-lg hover:scale-[1.02] text-center inline-block"
          >
            {t('services.learnMore')}
          </a>
        </div>
      </div>
    </div>
  );
};

const TechServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  image, 
  features, 
  isActive, 
  onClick 
}) => {
  const { t } = useTranslation();

  const techIcons = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      label: 'Websites'
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      label: 'CRM'
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email'
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      label: 'AI'
    }
  ];

  return (
    <div
      className={`group relative cursor-pointer transition-all duration-500 ${
        isActive ? 'scale-[1.02]' : ''
      }`}
      onClick={onClick}
    >
      {/* Card Container */}
      <div className="relative  rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <div 
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 opacity-40"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0  to-transparent"></div>

          {/* AI Badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-black text-xs font-bold rounded-full shadow-lg backdrop-blur-sm animate-pulse">
            🤖 AI Powered
          </div>

          {/* Tech Icons Grid */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
            {techIcons.map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-2 group/icon">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-black transform transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:bg-white/20">
                  {tech.icon}
                </div>
                <span className="text-black text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-2xl font-bold text-black mb-4">
            {title}
          </h3>

          {/* Description */}
          <p className="text-black leading-relaxed mb-6 flex-1">
            {description}
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-900 text-sm">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="https://wa.me/905360330996"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-black text-white rounded-xl font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-[1.02] text-center inline-block"
          >
            {t('services.learnMore')}
          </a>
        </div>
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
      ],
      isTech: false
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
      ],
      isTech: false
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
      ],
      isTech: false
    },
    {
      title: t('services.techSolutions.title'),
      description: t('services.techSolutions.description'),
      image: '/assets/Technology-solution-vector-icon-by-back1design1.jpg',
      imageAlt: 'Technology Solutions',
      features: [
        t('services.techSolutions.feature1'),
        t('services.techSolutions.feature2'),
        t('services.techSolutions.feature3'),
        t('services.techSolutions.feature4')
      ],
      isTech: true
    }
  ];

  return (
    <section id="services" className="py-20 px-4 relative bg-white">
      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
              {t('services.badge')}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
            {t('services.ourOffering')}
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.offeringDesc')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            service.isTech ? (
              <TechServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                imageAlt={service.imageAlt}
                features={service.features}
                isActive={activeService === index}
                onClick={() => setActiveService(activeService === index ? null : index)}
              />
            ) : (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                imageAlt={service.imageAlt}
                features={service.features}
                isActive={activeService === index}
                onClick={() => setActiveService(activeService === index ? null : index)}
                isTechService={service.isTech}
              />
            )
          ))}
        </div>

        <div className="relative bg-black rounded-3xl p-12 overflow-hidden">
          <div className="relative z-10 text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              {t('services.workWithUs')}
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {t('services.workWithUsDesc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/905360330996"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black rounded-xl font-semibold transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105"
              >
                {t('services.bookConsultation')}
              </a>

              <a
                href="#story"
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {t('services.viewPortfolio')}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '100+', label: t('services.stat1') },
            { number: '50+', label: t('services.stat2') },
            { number: '30+', label: t('services.stat3') },
            { number: '95%', label: t('services.stat4') }
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl font-bold text-black">{stat.number}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

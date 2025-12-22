import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// --- IMPORTANT: Adjust these paths to match your project structure ---
// Assuming images are in an 'assets' folder relative to this component
import serv1Image from '/assets/serv1.jpeg';
import serv2Image from '/assets/serv2.jpeg';
import serv3Image from '/assets/serv3.jpeg';
import serv4Image from '/assets/serv4.jpeg';
// ---------------------------------------------------------------------

interface UnifiedServiceCardProps {
  title: string;
  description: string;
  features: string[];
  isActive: boolean;
  onClick: () => void;
  imageSrc: string; // Changed from icons[] to a single image source string
  badge?: string;
}

const UnifiedServiceCard: React.FC<UnifiedServiceCardProps> = ({
  title,
  description,
  features,
  isActive,
  onClick,
  imageSrc, // New prop
  badge
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`group relative cursor-pointer transition-all duration-500 h-full ${
        isActive ? 'scale-[1.02]' : ''
      }`}
      onClick={onClick}
    >
      {/* Main Card Container */}
      <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
        
        {/* Header Section (Image) */}
        {/* Changed padding to p-0 so image fits corner to corner */}
        <div className="relative h-56 overflow-hidden bg-black flex items-center justify-center p-0 group">
          
          {/* The Image */}
          <img 
            src={imageSrc} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay so badge is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30"></div>

          {badge && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold rounded-full tracking-widest uppercase z-10">
              {badge}
            </div>
          )}
           {/* Old Icon Grid removed here */}
        </div>

        {/* Content Section (Light) */}
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">
            {title}
          </h3>
          <p className="text-gray-500 leading-relaxed mb-6 flex-1 text-sm">
            {description}
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-black transition-colors duration-300">
                  <svg className="w-2.5 h-2.5 text-black group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/905360330996"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-black text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-gray-800 hover:shadow-lg text-center"
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
      badge: 'Identity',
      // Replaced 'icons' array with 'imageSrc'
      imageSrc: '/assets/serv1.jpeg',
      features: [t('services.brandStrategy.feature1'), t('services.brandStrategy.feature2'), t('services.brandStrategy.feature3'), t('services.brandStrategy.feature4')]
    },
    {
      title: t('services.digitalMarketing.title'),
      description: t('services.digitalMarketing.description'),
      badge: 'Growth',
      imageSrc: '/assets/serv2.jpeg',
      features: [t('services.digitalMarketing.feature1'), t('services.digitalMarketing.feature2'), t('services.digitalMarketing.feature3'), t('services.digitalMarketing.feature4')]
    },
    {
      title: t('services.digitalProducts.title'),
      description: t('services.digitalProducts.description'),
      badge: 'Product',
      imageSrc: '/assets/serv3.jpeg',
      features: [t('services.digitalProducts.feature1'), t('services.digitalProducts.feature2'), t('services.digitalProducts.feature3'), t('services.digitalProducts.feature4')]
    },
    {
      title: t('services.techSolutions.title'),
      description: t('services.techSolutions.description'),
      badge: 'AI Powered',
      imageSrc: '/assets/serv4.jpeg',
      features: [t('services.techSolutions.feature1'), t('services.techSolutions.feature2'), t('services.techSolutions.feature3'), t('services.techSolutions.feature4')]
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">
            {t('services.badge')}
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tighter">
            {t('services.ourOffering')}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('services.offeringDesc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <UnifiedServiceCard
              key={index}
              {...service}
              isActive={activeService === index}
              onClick={() => setActiveService(activeService === index ? null : index)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            {t('services.workWithUs')}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a href="https://wa.me/905360330996" className="px-10 py-5 bg-white text-black rounded-2xl font-bold hover:scale-105 transition-transform">
              {t('services.bookConsultation')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
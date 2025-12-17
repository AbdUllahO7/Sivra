import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ServiceIcon {
  icon: React.ReactNode;
  label: string;
}

interface UnifiedServiceCardProps {
  title: string;
  description: string;
  features: string[];
  isActive: boolean;
  onClick: () => void;
  icons: ServiceIcon[];
  badge?: string;
}

const UnifiedServiceCard: React.FC<UnifiedServiceCardProps> = ({
  title,
  description,
  features,
  isActive,
  onClick,
  icons,
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
        
        {/* Header Section (Dark) */}
        <div className="relative h-56 overflow-hidden bg-black flex items-center justify-center p-6">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          {badge && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold rounded-full tracking-widest uppercase">
              {badge}
            </div>
          )}

          {/* Icon Grid/Layout */}
          <div className="relative z-10 flex gap-4 items-center justify-center w-full">
            {icons.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group/icon">
                <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:-translate-y-1">
                  <div className="w-7 h-7">{item.icon}</div>
                </div>
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
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
      icons: [
        { label: 'Logo', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 21a10.003 10.003 0 008.384-4.562l.054.09m-3.44 2.04l.054-.09A10.003 10.003 0 0112 3c1.255 0 2.443.23 3.534.649m2.926 2.712A10.003 10.003 0 0121 12c0 1.255-.23 2.443-.649 3.534m-2.712 2.926A10.003 10.003 0 0112 21a10.003 10.003 0 01-8.384-4.562l-.054-.09m3.44-2.04l-.054.09a10.003 10.003 0 004.562 8.384l.09.054m2.04-3.44l.09.054a10.003 10.003 0 008.384-4.562l.054-.09" /></svg> },
        { label: 'Voice', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg> }
      ],
      features: [t('services.brandStrategy.feature1'), t('services.brandStrategy.feature2'), t('services.brandStrategy.feature3'), t('services.brandStrategy.feature4')]
    },
    {
      title: t('services.digitalMarketing.title'),
      description: t('services.digitalMarketing.description'),
      badge: 'Growth',
      icons: [
        { label: 'Ads', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg> },
        { label: 'SEO', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> }
      ],
      features: [t('services.digitalMarketing.feature1'), t('services.digitalMarketing.feature2'), t('services.digitalMarketing.feature3'), t('services.digitalMarketing.feature4')]
    },
    {
      title: t('services.digitalProducts.title'),
      description: t('services.digitalProducts.description'),
      badge: 'Product',
      icons: [
        { label: 'UX', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
        { label: 'UI', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 8h8v8H8z" /></svg> }
      ],
      features: [t('services.digitalProducts.feature1'), t('services.digitalProducts.feature2'), t('services.digitalProducts.feature3'), t('services.digitalProducts.feature4')]
    },
    {
      title: t('services.techSolutions.title'),
      description: t('services.techSolutions.description'),
      badge: 'AI Powered',
      icons: [
        { label: 'Web', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9" /></svg> },
        { label: 'AI', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> }
      ],
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
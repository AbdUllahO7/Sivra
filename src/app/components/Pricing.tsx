'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  setupPrice: string;
  monthlyPrice: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const Pricing: React.FC = () => {
  const { t } = useTranslation();
  
  // Get pricing tiers from translations
  const pricingTiers: PricingTier[] = t('pricing.tiers', { returnObjects: true }) as PricingTier[];

  return (
    <section  className="relative py-24 overflow-hidden bg-[#fafafa]" id="pricing">
      {/* Background Decorative Elements */}
    
      <div className="container mx-auto px-4 max-w-[1600px] relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="relative px-8 py-3 text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-full border border-gray-600">
              {t('pricing.badge')}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black">
            {t('pricing.title')}
          </h2>
          <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto mb-4 font-medium">
            {t('pricing.subtitle')}
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('pricing.description')}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.id}
              className="group relative flex"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-wider rounded-full shadow-xl border-2 border-black">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`relative bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border-2 flex flex-col w-full ${
                  tier.highlighted
                    ? 'border-black shadow-2xl shadow-gray-500/50'
                    : 'border-gray-300 hover:border-gray-400 hover:shadow-xl hover:shadow-gray-400/30'
                }`}
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-tight min-h-[60px] flex items-center">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 text-xs font-medium mb-4 min-h-[36px]">
                    {tier.tagline}
                  </p>

                  {/* Pricing */}
                  <div
                    className={`rounded-2xl p-5 mb-4 ${
                      tier.highlighted
                        ? 'bg-gradient-to-br from-black to-gray-900'
                        : 'bg-gradient-to-br from-gray-800 to-gray-900'
                    }`}
                  >
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-1 min-h-[32px] flex items-center justify-center">
                        {tier.setupPrice}
                      </div>
                      <div className="text-gray-300 text-sm font-medium min-h-[24px] flex items-center justify-center">
                        {tier.monthlyPrice}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-xs leading-relaxed mb-4 min-h-[72px]">
                    {tier.description}
                  </p>
                </div>

                {/* Features - flex-grow to push button to bottom */}
                <div className="px-6 pb-6 flex-grow flex flex-col">
                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <svg
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            tier.highlighted ? 'text-black' : 'text-gray-700'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-800 font-medium text-xs leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/905360330996?text=${encodeURIComponent(`Hi, I'm interested in the ${tier.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 text-center ${
                      tier.highlighted
                        ? 'bg-black text-white hover:bg-gray-900 shadow-lg hover:shadow-xl hover:scale-105'
                        : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white shadow-md hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {t('pricing.cta')}
                  </a>
                </div>

                {/* Bottom Accent */}
                {tier.highlighted && (
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-700 via-black to-gray-700" />
                )}
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Pricing;
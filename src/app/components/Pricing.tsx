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
    <section className="relative py-24 overflow-hidden bg-[#fafafa]" id="pricing">
      {/* Background Decorative Elements */}
    
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`group relative ${tier.highlighted ? 'lg:-mt-4 lg:mb-0' : ''}`}
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
                className={`relative bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border-2 ${
                  tier.highlighted
                    ? 'border-black shadow-2xl shadow-gray-500/50 lg:scale-105'
                    : 'border-gray-300 hover:border-gray-400 hover:shadow-xl hover:shadow-gray-400/30'
                }`}
              >
                {/* Header */}
                <div className="p-8 pb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium mb-6">
                    {tier.tagline}
                  </p>

                  {/* Pricing */}
                  <div
                    className={`rounded-2xl p-6 mb-6 ${
                      tier.highlighted
                        ? 'bg-gradient-to-br from-black to-gray-900'
                        : 'bg-gradient-to-br from-gray-800 to-gray-900'
                    }`}
                  >
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">
                        {tier.setupPrice}
                      </div>
                      <div className="text-gray-300 text-lg font-medium">
                        {tier.monthlyPrice}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    {tier.description}
                  </p>
                </div>

                {/* Features */}
                <div className="px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
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
                        <span className="text-gray-800 font-medium text-base">
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
                    className={`block w-full py-4 rounded-full font-bold text-base uppercase tracking-wider transition-all duration-300 text-center ${
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

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-6">
            {t('pricing.bottomText')}
          </p>
          <a
            href="https://wa.me/905360330996?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20custom%20solution"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold uppercase tracking-wider text-black bg-white rounded-full hover:shadow-2xl hover:shadow-gray-400/60 transition-all duration-500 hover:scale-105 relative overflow-hidden border-2 border-white hover:bg-gray-100"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            
            <span className="relative z-10">{t('pricing.contactCta')}</span>
            <svg
              className="w-6 h-6 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
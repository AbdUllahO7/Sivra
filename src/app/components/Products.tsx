'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  image: string;
}

const Products: React.FC = () => {
  const { t } = useTranslation();
  
  // Get products array from translations
  const products: Product[] = t('products.items', { returnObjects: true }) as Product[];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100" id="products">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-300/20 to-slate-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-slate-300/20 to-gray-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="relative px-8 py-3 text-sm font-semibold tracking-wider uppercase text-white bg-black before:absolute before:inset-0 before:bg-gradient-to-r before:from-gray-800 before:to-black before:rounded-full before:-z-10 rounded-full">
              {t('products.badge')}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
            {t('products.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto mb-4 font-medium">
            {t('products.subtitle')}
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('products.description')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {products.map((product, index) => (
            <a
              key={product.id}
              href="https://sivra.gumroad.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-400/40 hover:-translate-y-3 border border-gray-200 backdrop-blur-sm">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/0 to-black/0 group-hover:from-gray-900/5 group-hover:to-black/5 transition-all duration-500 z-10 rounded-3xl" />
                
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-black rounded-full shadow-lg border border-gray-200">
                      {product.category}
                    </span>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl border-2 border-black">
                      <svg
                        className="w-8 h-8 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 relative z-20">
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                    {product.subtitle}
                  </p>
                  <p className="text-gray-600 text-base mb-6 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-black font-bold text-sm uppercase tracking-wider group-hover:text-gray-700 transition-colors duration-300">
                    <span>{t('products.shopNow')}</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 via-black to-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="https://sivra.gumroad.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold uppercase tracking-wider text-white bg-black rounded-full hover:shadow-2xl hover:shadow-gray-400/60 transition-all duration-500 hover:scale-105 relative overflow-hidden border-2 border-black hover:bg-gray-900"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            
            <span className="relative z-10">{t('products.viewAll')}</span>
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

export default Products;
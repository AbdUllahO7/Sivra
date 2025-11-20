import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  currentLang: string;
  changeLanguage: (lng: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, changeLanguage }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#fafafa]/98 backdrop-blur-xl shadow-lg border-b border-black/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:rounded-xl group-hover:scale-105 overflow-hidden">
                <Image
                  width={500}
                  height={500} 
                  src="/assets/logo-removebg-preview.png" 
                  alt="SIVRA Logo" 
                  className=" w-[60px] h-[65px] object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-black transition-all duration-300 group-hover:tracking-wide">
                SIVRA
              </span>
              <span className="text-[10px] font-medium text-black/50 tracking-widest uppercase">
                {t('nav.tagline')}
              </span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { href: '#home', label: t('nav.home') },
              { href: '#services', label: t('nav.services') },
              { href: '#story', label: t('nav.ourStory') },
              { href: '#contact', label: t('nav.contact') }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-black/70 hover:text-black transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-3/4 transition-all duration-500 ease-out"></span>
                <span className="absolute inset-0 rounded-lg bg-black/0 group-hover:bg-black/5 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Right Section: CTA & Language Selector */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://sivra.gumroad.com/"
              target = "blank"
              className="relative px-6 py-2.5 text-sm font-semibold text-[#fafafa] bg-black rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <span className="relative z-10">{t('nav.getStarted')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>

            {/* Language Selector */}
            <div className="relative">
              <select 
                value={currentLang} 
                onChange={(e) => changeLanguage(e.target.value)}
                className="appearance-none bg-black/5 hover:bg-black/10 border border-black/10 rounded-lg px-3 py-2 pr-8 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-300 cursor-pointer"
              >
                <option value="en">EN</option>
                <option value="tr">TR</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none">
                <svg className="w-4 h-4 text-black/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button & Language */}
          <div className="flex lg:hidden items-center space-x-3">
            <div className="relative">
              <select 
                value={currentLang} 
                onChange={(e) => changeLanguage(e.target.value)}
                className="appearance-none bg-black/5 border border-black/10 rounded-lg px-3 py-2 pr-7 text-xs font-medium text-black focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-300"
              >
                <option value="en">EN</option>
                <option value="tr">TR</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-3 h-3 text-black/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 border-t border-black/10">
            <div className="flex flex-col space-y-1">
              {[
                { href: '#home', label: t('nav.home') },
                { href: '#services', label: t('nav.services') },
                { href: '#story', label: t('nav.ourStory') },
                { href: '#contact', label: t('nav.contact') }
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-black/70 hover:text-black hover:bg-black/5 rounded-lg transition-all duration-300 transform hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 px-4 py-3 text-sm font-semibold text-[#fafafa] bg-black rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.getStarted')}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface Skill {
  id: string;
  title: string;
  icon: 'moon' | 'circle';
}

const PersonalSkills: React.FC = () => {
  const { t } = useTranslation();
  
  // Get skills array from translations
  const skills: Skill[] = t('skills.items', { returnObjects: true }) as Skill[];

  // Split skills into left and right groups
  const leftSkills = skills.slice(0, 3);
  const rightSkills = skills.slice(3, 6);

  // Render icon based on type
  const renderIcon = (icon: 'moon' | 'circle') => {
    if (icon === 'circle') {
      return (
        <div className="w-6 h-6 rounded-full bg-black" />
      );
    }
    return (
      <div className="w-6 h-6 relative">
        <div className="absolute inset-0 rounded-full bg-black" />
        <div className="absolute inset-0 rounded-full bg-white translate-x-1" />
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-black text-white px-6 py-2 text-sm font-medium tracking-wider uppercase">
              {t('skills.badge')}
            </span>
          </div>
        </div>

        {/* Skills Diagram */}
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-center gap-12">
            {/* Left Skills */}
            <div className="flex flex-col gap-8 flex-1">
              {leftSkills.map((skill, index) => (
                <div
                  key={skill.id}
                  className="flex items-center justify-end gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white border-2 border-black px-6 py-4 rounded-full shadow-lg hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-base font-bold text-black text-center">
                      {skill.title}
                    </h3>
                  </div>
                  {renderIcon(skill.icon)}
                </div>
              ))}
            </div>

            {/* Center Circle */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-2xl relative overflow-hidden group">
                {/* Decorative moon icons */}
                <div className="absolute top-8 left-12 w-8 h-8">
                  <div className="absolute inset-0 rounded-full bg-black opacity-20" />
                  <div className="absolute inset-0 rounded-full bg-white translate-x-1 opacity-20" />
                </div>
                <div className="absolute top-8 right-12 w-8 h-8">
                  <div className="absolute inset-0 rounded-full bg-black opacity-20" />
                  <div className="absolute inset-0 rounded-full bg-white -translate-x-1 opacity-20" />
                </div>
                <div className="absolute bottom-8 left-16 w-8 h-8">
                  <div className="absolute inset-0 rounded-full bg-black opacity-20" />
                  <div className="absolute inset-0 rounded-full bg-white translate-x-1 opacity-20" />
                </div>
                <div className="absolute bottom-8 right-16 w-8 h-8">
                  <div className="absolute inset-0 rounded-full bg-black opacity-20" />
                  <div className="absolute inset-0 rounded-full bg-white -translate-x-1 opacity-20" />
                </div>
                
                <h2 className="text-3xl font-bold text-black text-center z-10">
                  {t('skills.title')}
                </h2>
              </div>
            </div>

            {/* Right Skills */}
            <div className="flex flex-col gap-8 flex-1">
              {rightSkills.map((skill, index) => (
                <div
                  key={skill.id}
                  className="flex items-center gap-4 animate-fade-in"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  {renderIcon(skill.icon)}
                  <div className="bg-white border-2 border-black px-6 py-4 rounded-full shadow-lg hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-base font-bold text-black text-center">
                      {skill.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden">
            {/* Center Circle */}
            <div className="flex justify-center mb-12">
              <div className="w-48 h-48 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-2xl">
                <h2 className="text-2xl font-bold text-black text-center px-4">
                  {t('skills.title')}
                </h2>
              </div>
            </div>

            {/* All Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.id}
                  className="flex items-center gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {renderIcon(skill.icon)}
                  <div className="bg-white border-2 border-black px-6 py-4 rounded-full shadow-lg hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 flex-1">
                    <h3 className="text-sm font-bold text-black text-center">
                      {skill.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-700 text-lg leading-relaxed">
            {t('skills.description')}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default PersonalSkills;
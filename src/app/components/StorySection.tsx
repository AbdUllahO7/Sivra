import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const StorySection: React.FC = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const storySteps = [
    {
      number: '01',
      title: t('story.theBeginning'),
      description: t('story.beginningDesc'),
      year: '2022'
    },
    {
      number: '02',
      title: t('story.theEvolution'),
      description: t('story.evolutionDesc'),
      year: '2023'
    },
    {
      number: '03',
      title: t('story.theExpansion'),
      description: t('story.expansionDesc'),
      year: '2024'
    },
    {
      number: '04',
      title: t('story.theVision'),
      description: t('story.visionDesc'),
      year: '2025+'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % storySteps.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, storySteps.length]);

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="story" className="py-24 px-6 relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, black 1px, transparent 1px),
                            linear-gradient(to bottom, black 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/5 rounded-full">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-black/70">
              {t('story.badge')}
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              {t('story.title')}
            </h2>
            <div className="h-1 w-20 bg-black rounded-full mx-auto"></div>
          </div>

          <p className="text-lg lg:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
            {t('story.founderIntro')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Story Content */}
          <div className="space-y-8">
            {/* Main Story Text */}
            <div className="bg-[#fafafa] rounded-2xl p-8 border border-black/10">
              <p className="text-lg text-black/80 leading-relaxed mb-6">
                {t('story.text')}
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              {/* Mission */}
              <div className="group relative">
                <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                <div className="relative bg-[#fafafa] rounded-2xl p-6 border-2 border-black">
                  <h3 className="text-xl font-bold text-black mb-3 flex items-center space-x-2">
                    <span className="text-2xl">🎯</span>
                    <span>{t('story.ourMission')}</span>
                  </h3>
                  <p className="text-black/70 leading-relaxed">
                    {t('story.missionText')}
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="group relative">
                <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                <div className="relative bg-[#fafafa] rounded-2xl p-6 border-2 border-black">
                  <h3 className="text-xl font-bold text-black mb-3 flex items-center space-x-2">
                    <span className="text-2xl">✨</span>
                    <span>{t('story.ourVision')}</span>
                  </h3>
                  <p className="text-black/70 leading-relaxed">
                    {t('story.visionText')}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                t('story.clarityFirst'),
                t('story.purposeDriven'),
                t('story.ideasToImpact')
              ].map((value, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-black/90 transition-colors duration-300"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Journey Timeline */}
          <div className="relative">
            {/* Timeline Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black mb-8">
                {t('story.ourJourney')}
              </h3>

              <div className="relative space-y-8">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-black/10"></div>

                {storySteps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer transition-all duration-500 ${
                      currentStep === index ? 'scale-102' : 'hover:scale-101'
                    }`}
                    onClick={() => handleStepClick(index)}
                  >
                    {/* Step Number Circle */}
                    <div className="absolute left-0 w-12 h-12 flex items-center justify-center">
                      <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                        currentStep === index
                          ? 'bg-black border-black text-white scale-110 shadow-lg'
                          : 'bg-white border-black/20 text-black/40 group-hover:border-black/40'
                      }`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="ml-20">
                      <div className={`rounded-2xl p-6 transition-all duration-500 ${
                        currentStep === index
                          ? 'bg-black text-white shadow-xl'
                          : 'bg-[#fafafa] border border-black/10 hover:border-black/20'
                      }`}>
                        {/* Year Badge */}
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                          currentStep === index
                            ? 'bg-white/20 text-white'
                            : 'bg-black/5 text-black/50'
                        }`}>
                          {step.year}
                        </div>

                        {/* Title */}
                        <h4 className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                          currentStep === index ? 'text-white' : 'text-black'
                        }`}>
                          {step.title}
                        </h4>

                        {/* Description */}
                        <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                          currentStep === index ? 'text-white/80' : 'text-black/70'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 flex items-center space-x-2">
              <div className="flex-1 h-1 bg-black/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-black transition-all duration-500 rounded-full"
                  style={{ width: `${((currentStep + 1) / storySteps.length) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-black/50">
                {currentStep + 1}/{storySteps.length}
              </span>
            </div>

            {/* Auto-play Control */}
            <div className="mt-6 flex items-center justify-center space-x-2">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="px-4 py-2 bg-black/5 hover:bg-black/10 rounded-lg text-sm font-medium text-black/70 transition-colors duration-300 flex items-center space-x-2"
              >
                {isAutoPlaying ? (
                  <>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Play</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StorySection;
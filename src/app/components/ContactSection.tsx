import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: t('contact.email'),
      description: t('contact.emailDesc'),
      link: 'mailto:sivra.product@gmail.com',
      value: 'sivra.product@gmail.com'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      title: t('contact.whatsapp'),
      description: t('contact.whatsappDesc'),
      link: 'https://wa.me/+905360330996',
      value: '+90 (536) 033 09 96'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      title: t('contact.instagram'),
      description: t('contact.instagramDesc'),
      link: 'https://www.instagram.com/sivra.studio/',
      value: 'sivra.studio'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      title: t('contact.linkedin'),
      description: t('contact.linkedinDesc'),
      link: 'http://linkedin.com/in/anoosha-moshkelgosha-568239261',
      value: 'SIVRA Studio'
    }
  ];

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Contact Form Submission from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#fafafa] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/5 rounded-full">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-black/70">
              {t('contact.badge')}
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              {t('contact.title')}
            </h2>
            <div className="h-1 w-20 bg-black rounded-full mx-auto"></div>
          </div>

          <p className="text-lg lg:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
            {t('contact.connectDesc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Side - Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-8">
              {t('contact.getInTouch')}
            </h3>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`relative bg-white rounded-2xl p-6 border transition-all duration-300 ${
                    hoveredCard === index
                      ? 'border-black shadow-xl scale-102'
                      : 'border-black/10 hover:border-black/20 shadow-md'
                  }`}>
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        hoveredCard === index
                          ? 'bg-black text-white scale-110'
                          : 'bg-black/5 text-black group-hover:bg-black/10'
                      }`}>
                        {method.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                          hoveredCard === index ? 'text-black' : 'text-black/80'
                        }`}>
                          {method.title}
                        </h4>
                        <p className="text-sm text-black/60 mb-2">
                          {method.description}
                        </p>
                        <p className="text-sm font-medium text-black/80">
                          {method.value}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 ${
                        hoveredCard === index ? 'translate-x-1' : ''
                      }`}>
                        <svg className="w-5 h-5 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                      hoveredCard === index ? 'opacity-100' : 'opacity-0'
                    }`} style={{
                      boxShadow: 'inset 0 0 0 2px rgba(0, 0, 0, 0.1)'
                    }}></div>
                  </div>
                </a>
              ))}
            </div>

          </div>

        <div className="relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform duration-300 hover:translate-x-1 hover:translate-y-1"></div>
            <div className="relative bg-white rounded-2xl p-8 border-2 border-black">
              <h3 className="text-2xl font-bold text-black mb-6">
                {t('contact.sendMessage')}
              </h3>

              {/* Success Message */}
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm font-medium">
                    ✓ Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm font-medium">
                    ✗ Failed to send message. Please try again or email us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black/80 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#fafafa] border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all duration-300"
                    placeholder={t('contact.namePlaceholder')}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black/80 mb-2">
                    {t('contact.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#fafafa] border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all duration-300"
                    placeholder={t('contact.emailPlaceholder')}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black/80 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-[#fafafa] border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group w-full px-8 py-4 bg-black text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span>
                    {status === 'loading' ? 'Sending...' : t('contact.sendButton')}
                  </span>
                  {status !== 'loading' && (
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                  {status === 'loading' && (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
             </div>



        {/* Bottom CTA */}
        
      </div>
    </section>
  );
};

export default ContactSection;
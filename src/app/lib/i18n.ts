import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from '../messages/en.json';
import trTranslations from '../messages/tr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    debug: false,
    resources: {
      en: {
        translation: enTranslations
      },
    
      tr: {
        translation: trTranslations
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
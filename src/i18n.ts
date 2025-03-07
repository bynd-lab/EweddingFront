import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import azTranslations from './translations/az.json';
import ruTranslations from './translations/ru.json';
import enTranslations from './translations/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      az: {
        translation: azTranslations,
      },
      ru: {
        translation: ruTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    fallbackLng: 'az',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n; 
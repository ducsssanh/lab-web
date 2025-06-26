import { useLanguage } from '../contexts/LanguageContext';
import { en } from '../locales/en';
import { vi } from '../locales/vi';

const translations = {
  en,
  vi,
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  return { t, language };
}; 
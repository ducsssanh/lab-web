"use client";

import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
  };

  return (
    <div className="language-selector">
      <button 
        className={`lang-btn ${language === 'en' ? 'active' : ''}`} 
        onClick={() => handleLanguageChange('en')}
      >
        English
      </button>
      <button 
        className={`lang-btn ${language === 'vi' ? 'active' : ''}`} 
        onClick={() => handleLanguageChange('vi')}
      >
        Tiếng Việt
      </button>
    </div>
  );
};

export default LanguageSwitcher; 
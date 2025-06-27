"use client";

import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
  };

  return (
    <div className="language-selector">
      <div className="flex items-center space-x-2">
        <Globe size={16} className="text-gray-600" />
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
    </div>
  );
};

export default LanguageSwitcher; 
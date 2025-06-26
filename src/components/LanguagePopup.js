"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, X } from 'lucide-react';

const LanguagePopup = () => {
  const { language, changeLanguage } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);

  const languages = [
    { code: 'en', name: 'English', shortName: 'EN', flag: '🇺🇸', description: 'Continue in English' },
    { code: 'vi', name: 'Tiếng Việt', shortName: 'VI', flag: '🇻🇳', description: 'Tiếp tục bằng tiếng Việt' }
  ];

  useEffect(() => {
    // Kiểm tra xem người dùng đã chọn ngôn ngữ chưa
    const hasChosenLanguage = localStorage.getItem('hasChosenLanguage');
    
    if (!hasChosenLanguage) {
      // Hiển thị popup sau 1 giây
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLanguageSelect = (langCode) => {
    changeLanguage(langCode);
    localStorage.setItem('hasChosenLanguage', 'true');
    setShowPopup(false);
  };

  const handleClose = () => {
    localStorage.setItem('hasChosenLanguage', 'true');
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex items-center space-x-3">
              <Globe size={32} />
              <div>
                <h2 className="text-2xl font-bold">Choose Language</h2>
                <p className="text-blue-100 text-sm">Chọn ngôn ngữ</p>
              </div>
            </div>
          </div>

          {/* Language Options */}
          <div className="p-6 space-y-4">
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center space-x-4 ${
                  language === lang.code
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                }`}
              >
                <span className="text-3xl">{lang.flag}</span>
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-semibold text-gray-800">{lang.name}</h3>
                  <p className="text-sm text-gray-500">{lang.description}</p>
                </div>
                {language === lang.code && (
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 text-center">
            <p className="text-sm text-gray-500">
              You can change language anytime from the top menu
              <br />
              Bạn có thể thay đổi ngôn ngữ bất cứ lúc nào từ menu trên cùng
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LanguagePopup; 
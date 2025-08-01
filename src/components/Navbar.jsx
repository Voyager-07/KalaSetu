import React, { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = ({ language = 'en', setLanguage, currentSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const navItems = {
    en: {
      home: 'Home',
      products: 'Products',
      journey: 'Journey',
      about: 'About',
      brandName: 'KalaSetu',
      tagline: "Artisan Bridge"
    },
    hi: {
      home: 'होम',
      products: 'उत्पाद',
      journey: 'यात्रा',
      about: 'हमारे बारे में',
      brandName: 'कलासेतु',
      tagline: 'कलाकारों का बाज़ार'
    }
  };

  const currentLang = navItems[language];

  const handleNavClick = (section) => {
    setIsMobileMenuOpen(false); // Close on click
    if (scrollToSection) scrollToSection(section);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-lg border-b-2 border-amber-200">
      <div className="container mx-auto px-2 py-2">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="" className="w-14 h-14 rounded-full" />
            <div className='flex flex-col'>
              <h1 className="text-2xl font-bold text-amber-900 font-serif">{currentLang.brandName}</h1>
              <h4 className='text-xs font-semibold text-amber-700/70 font-serif'>{currentLang.tagline}</h4>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-8">
              {['home', 'products', 'journey', 'about'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`text-lg font-semibold font-serif transition-all duration-300 hover:scale-105 ${
                    currentSection === section
                      ? 'text-amber-900 border-b-2 border-amber-600 transform scale-105'
                      : 'text-amber-700 hover:text-amber-900'
                  }`}
                >
                  {currentLang[section]}
                </button>
              ))}
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform"
              title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-semibold">
                {language === 'en' ? 'हिन्दी' : 'EN'}
              </span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleMobileMenu} className="p-2 rounded-md text-amber-800 hover:bg-amber-100">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-lg bg-amber-50 border border-amber-200 shadow-sm space-y-3">
            {['home', 'products', 'journey', 'about'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`block w-full text-left text-lg font-semibold font-serif transition-all duration-200 ${
                  currentSection === section ? 'text-amber-900' : 'text-amber-700 hover:text-amber-900'
                }`}
              >
                {currentLang[section]}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="mt-2 flex items-center space-x-2 w-full justify-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full shadow-md hover:from-amber-700 hover:to-orange-700"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-semibold">
                {language === 'en' ? 'हिन्दी' : 'EN'}
              </span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

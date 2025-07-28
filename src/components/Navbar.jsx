import React from "react"
import { Globe } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = ({ language = 'en', setLanguage, currentSection, scrollToSection }) => {
    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'hi' : 'en');
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
        if (scrollToSection) {
            scrollToSection(section);
        }
    };

    return (
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-lg border-b-2 border-amber-200">
        <div className="container mx-auto px-2 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div> */}
              <img src={logo} alt="" className="w-14 h-14 rounded-full" />
              <div className='flex flex-col'>
                <h1 className="text-2xl font-bold text-amber-900 font-serif">{currentLang.brandName}</h1>
                <h4 className='text-xs font-semibold text-amber-700/70 font-serif'>{currentLang.tagline}</h4>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-8">
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

              {/* Mobile Menu (Hidden for now, can be expanded) */}
              <div className="md:hidden">
                <select 
                  value={currentSection} 
                  onChange={(e) => handleNavClick(e.target.value)}
                  className="bg-amber-100 text-amber-900 rounded-lg px-3 py-1 font-serif font-semibold border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {['home', 'products', 'journey', 'about'].map((section) => (
                    <option key={section} value={section}>
                      {currentLang[section]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language Toggle Button */}
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
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
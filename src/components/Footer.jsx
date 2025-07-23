import React from "react";

const Footer = ({ language = 'en' }) => {
    const content = {
        en: {
            title: "Vocal for Local",
            tagline: "Every purchase is a vote for preserving India's rich artisan heritage",
            qrText: "Scan to visit our website",
            copyright: "© 2024 Vocal for Local. Made with ❤️ for Indian Artisans."
        },
        hi: {
            title: "वोकल फॉर लोकल",
            tagline: "हर खरीदारी भारत की समृद्ध कारीगर विरासत को संरक्षित करने के लिए एक वोट है",
            qrText: "हमारी वेबसाइट पर जाने के लिए स्कैन करें",
            copyright: "© 2024 वोकल फॉर लोकल। भारतीय कारीगरों के लिए ❤️ से बनाया गया।"
        }
    };

    const currentContent = content[language] || content.en;

    // Generate a simple QR code using a free QR code API
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent('https://kalasetu.com')}`;

    return (
      <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 font-serif">{currentContent.title}</h3>
            <p className="text-amber-100 text-lg mb-8">
              "{currentContent.tagline}"
            </p>
            
            {/* QR Code Section */}
            <div className="mb-8 flex flex-col items-center">
              <div className="bg-white p-4 rounded-xl shadow-lg mb-3">
                <img 
                  src={qrCodeUrl}
                  alt="QR Code to visit website"
                  className="w-30 h-30"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              <p className="text-amber-200 text-sm font-medium">
                {currentContent.qrText}
              </p>
            </div>
            
            <div className="flex justify-center space-x-6 mb-8">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-amber-800">
              <p className="text-amber-200">
                {currentContent.copyright.split('❤️')[0]}
                <a 
                  href="https://www.linkedin.com/in/voyager7/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-110 cursor-pointer"
                >
                  ❤️
                </a>
                {currentContent.copyright.split('❤️')[1]}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
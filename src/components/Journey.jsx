import React from "react";

const Journey = ({ language = 'en' }) => {
  const content = {
    en: {
      title: "Our Journey",
      subtitle: "From a small initiative to a movement that celebrates India's rich artisan heritage",
      steps: [
        {
          year: "2020",
          title: "The Vision",
          description: "Founded with a dream to connect skilled Indian artisans with global markets, preserving centuries-old traditions."
        },
        {
          year: "2021",
          title: "First Community",
          description: "Partnered with 50 artisan families across 5 states, creating sustainable livelihood opportunities."
        },
        {
          year: "2022",
          title: "Digital Expansion",
          description: "Launched our digital platform, enabling direct sales and showcasing authentic Indian craftsmanship."
        },
        {
          year: "2023",
          title: "National Recognition",
          description: "Received the National Award for Supporting Traditional Arts and Crafts."
        },
        {
          year: "2024",
          title: "Global Reach",
          description: "Expanded to serve customers worldwide, with 500+ artisan partners across 15 states."
        }
      ]
    },
    hi: {
      title: "हमारी यात्रा",
      subtitle: "एक छोटी सी पहल से लेकर भारत की समृद्ध कारीगर विरासत का जश्न मनाने वाले आंदोलन तक",
      steps: [
        {
          year: "2020",
          title: "दृष्टि",
          description: "कुशल भारतीय कारीगरों को वैश्विक बाजारों से जोड़ने और सदियों पुरानी परंपराओं को संरक्षित करने के सपने के साथ स्थापना।"
        },
        {
          year: "2021",
          title: "पहला समुदाय",
          description: "5 राज्यों में 50 कारीगर परिवारों के साथ साझेदारी, स्थायी आजीविका के अवसर सृजित करना।"
        },
        {
          year: "2022",
          title: "डिजिटल विस्तार",
          description: "हमारे डिजिटल प्लेटफॉर्म का शुभारंभ, प्रत्यक्ष बिक्री और प्रामाणिक भारतीय शिल्पकला का प्रदर्शन।"
        },
        {
          year: "2023",
          title: "राष्ट्रीय मान्यता",
          description: "पारंपरिक कला और शिल्प के समर्थन के लिए राष्ट्रीय पुरस्कार प्राप्त किया।"
        },
        {
          year: "2024",
          title: "वैश्विक पहुंच",
          description: "15 राज्यों में 500+ कारीगर साझीदारों के साथ दुनिया भर के ग्राहकों की सेवा करने के लिए विस्तार।"
        }
      ]
    }
  };

  const currentLang = content[language];

  return (
    <div className="pt-28 pb-12 bg-gradient-to-r from-orange-800 via-red-800 to-orange-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4 font-serif">{currentLang.title}</h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            {currentLang.subtitle}
          </p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          {/* Continuous timeline line */}
          <div className="absolute left-8 top-8 w-0.5 h-full bg-gradient-to-b from-amber-400 to-orange-400"></div>
          
          {currentLang.steps.map((step, index) => (
            <div key={index} className="flex items-start mb-16 relative">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold font-serif shadow-lg z-10 relative">
                {step.year}
              </div>
              <div className="ml-8 flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">{step.title}</h3>
                <p className="text-orange-100 text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
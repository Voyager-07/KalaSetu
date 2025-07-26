import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import artisan1 from '../assets/artisan-1.png';
import artisan2 from '../assets/artisan-2.png';

const Hero = ({ language = 'en', scrollToSection }) => {
    const [currentSection, setCurrentSection] = useState('home');
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const content = {
        en: {
            mainTitle: "Vocal for Local",
            subtitle: "Discover the Soul of India Through Handcrafted Excellence",
            description: "Step into a world where every piece tells a story. We bridge the gap between you and India's finest artisans, bringing centuries of skill and tradition to your doorstep Join us in celebrating true artistry",
            shopButton: "Shop Products",
            journeyButton: "Our Journey"
        },
        hi: {
            mainTitle: "वोकल फॉर लोकल",
            subtitle: "भारतीय शिल्पकारी की विरासत का जश्न",
            description: "भारत भर के कुशल कलाकारों से सीधे जुड़ें। हर खरीदारी पारंपरिक शिल्प का समर्थन करती है, सांस्कृतिक विरासत को संरक्षित करती है, और स्थानीय समुदायों को सशक्त बनाती है।",
            shopButton: "उत्पाद खरीदें",
            journeyButton: "हमारी यात्रा"
        }
    };

    const currentContent = content[language];

    return (
        <div className="pt-35 pb-20 relative overflow-hidden">
            {/* Animated Artisan Images */}
            <img 
                className={`absolute w-80 left-[-25px] bottom-[-50px] transition-all duration-1000 ease-out ${
                    isVisible ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'
                } hover:scale-105 hover:translate-y-[-10px] transition-transform duration-300`}  
                src={artisan1} 
                alt="" 
            />
            <img 
                className={`absolute w-72 right-[-15px] bottom-[-20px] transition-all duration-1000 ease-out delay-200 ${
                    isVisible ? 'transform translate-x-0 opacity-100' : 'transform translate-x-20 opacity-0'
                } hover:scale-105 hover:translate-y-[-10px] transition-transform duration-300`}  
                src={artisan2} 
                alt="" 
            />

            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Main Title with staggered animation */}
                    <h2 className={`text-6xl md:text-8xl font-bold text-amber-900 mb-6 font-serif leading-tight transition-all duration-1000 ease-out ${
                        isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
                    } hover:scale-105 transition-transform duration-300`}>
                        {currentContent.mainTitle}
                    </h2>

                    {/* Subtitle with fade-in animation */}
                    <p className={`text-2xl md:text-3xl text-amber-800 mb-8 font-serif italic transition-all duration-1000 ease-out delay-300 ${
                        isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
                    }`}>
                        "{currentContent.subtitle}"
                    </p>

                    {/* Description with slide-up animation */}
                    <p className={`text-xl text-amber-700 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-500 ${
                        isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
                    }`}>
                        {currentContent.description}
                    </p>

                    {/* Buttons with bounce-in animation */}
                    <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 ease-out delay-700 ${
                        isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
                    }`}>
                        <button 
                            onClick={() => {
                                navigate("/products");
                                window.location.reload();
                            }}
                            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 active:scale-95"
                        >
                            {currentContent.shopButton}
                        </button>
                        <button 
                            onClick={() => scrollToSection('journey')}
                            className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 active:scale-95"
                        >
                            {currentContent.journeyButton}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Animated Background Elements */}
            <div className={`absolute top-1/2 left-10 w-32 h-32 opacity-20 transition-all duration-1500 ease-out delay-1000 ${
                isVisible ? 'transform rotate-0 scale-100 opacity-20' : 'transform rotate-45 scale-0 opacity-0'
            }`}>
                <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600 animate-spin-slow">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="50" cy="50" r="10" fill="currentColor"/>
                </svg>
            </div>
            
            <div className={`absolute bottom-1/4 right-10 w-24 h-24 opacity-20 transition-all duration-1500 ease-out delay-1200 ${
                isVisible ? 'transform rotate-0 scale-100 opacity-20' : 'transform -rotate-45 scale-0 opacity-0'
            }`}>
                <svg viewBox="0 0 100 100" className="w-full h-full text-orange-600 animate-pulse">
                    <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="15" fill="currentColor"/>
                </svg>
            </div>

            {/* Floating particles animation */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-float opacity-60"></div>
                <div className="absolute top-3/4 left-3/4 w-3 h-3 bg-orange-400 rounded-full animate-float-delayed opacity-40"></div>
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-amber-500 rounded-full animate-float-slow opacity-50"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-orange-500 rounded-full animate-float opacity-70"></div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    25% { transform: translateY(-15px) translateX(5px); }
                    50% { transform: translateY(-25px) translateX(0px); }
                    75% { transform: translateY(-10px) translateX(-5px); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 4s ease-in-out infinite;
                    animation-delay: 1s;
                }
                
                .animate-float-slow {
                    animation: float-slow 5s ease-in-out infinite;
                    animation-delay: 2s;
                }
                
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Hero;
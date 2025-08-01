import React from "react";
import { Star, Heart, ShoppingCart, Users, Award, MapPin, Phone, Mail, Crown, Sparkles, Palette } from 'lucide-react';
import Meet1 from "../assets/Meet1.png";
import Meet2 from "../assets/Meet2.png";
import Meet3 from "../assets/Meet3.png";
import Meet4 from "../assets/Meet4.png";

const Meet = ({ language = 'en' }) => {
    const content = {
        en: {
            title: "Our Community",
            subtitle: "Connecting you with over 500 expert craftspeople across 15 states, each a custodian of unique cultural artistry",
            artisansCount: "500+ Artisans",
            artisansDesc: "Skilled craftspeople from across 15 states, each bringing their unique heritage and expertise",
            craftFormsCount: "50+ Craft Forms",
            craftFormsDesc: "From textiles to pottery, woodwork to metalcraft, preserving diverse traditional art forms",
            generationsTitle: "Generations of Wisdom",
            generationsDesc: "Centuries-old techniques passed down through families, creating authentic masterpieces",
            meetArtisansTitle: "Meet Our Master Craftsmen",
            legacyText: "Preserving Ancient Arts"
        },
        hi: {
            title: "हमारा समुदाय",
            subtitle: "उन प्रतिभाशाली कलाकारों से मिलें जो हर रचना में जान डालते हैं, पीढ़ियों से चली आ रही परंपराओं को आगे बढ़ाते हैं",
            artisansCount: "500+ कलाकार",
            artisansDesc: "15 राज्यों के कुशल शिल्पकार, हर एक अपनी अनूठी विरासत और विशेषज्ञता लेकर आता है",
            craftFormsCount: "50+ शिल्प रूप",
            craftFormsDesc: "वस्त्र से लेकर मिट्टी के बर्तन तक, लकड़ी के काम से धातु शिल्प तक, विविध पारंपरिक कला रूपों का संरक्षण",
            generationsTitle: "पीढ़ियों की बुद्धिमत्ता",
            generationsDesc: "सदियों पुरानी तकनीकें जो परिवारों में पीढ़ी-दर-पीढ़ी चली आ रही हैं, प्रामाणिक कृतियों का निर्माण करती हैं",
            meetArtisansTitle: "हमारे मास्टर शिल्पकारों से मिलें",
            legacyText: "प्राचीन कलाओं का संरक्षण"
        }
    };

    const currentContent = content[language];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-orange-900 via-red-800 to-amber-900 py-20 overflow-hidden">
            {/* Subtle glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center mb-8">
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent rounded-full"></div>
                        <div className="mx-6 p-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-2xl">
                            <Crown className="w-10 h-10 text-white drop-shadow-lg" />
                        </div>
                        <div className="w-20 h-1 bg-gradient-to-l from-transparent via-amber-300 to-transparent rounded-full"></div>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-amber-200 via-white to-amber-200 bg-clip-text text-transparent mb-8 font-serif tracking-wide drop-shadow-2xl">
                        {currentContent.title}
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-amber-100 text-xl md:text-2xl leading-relaxed font-medium mb-6 drop-shadow-lg">
                            {currentContent.subtitle}
                        </p>
                        <div className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-amber-300/30">
                            <div className="text-amber-200 font-bold text-lg tracking-wider">
                                ॐ {currentContent.legacyText} ॐ
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section with Enhanced Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
                    {[
                        {
                            icon: Users,
                            title: currentContent.artisansCount,
                            desc: currentContent.artisansDesc,
                            color: "from-amber-400 to-orange-500",
                            glowColor: "shadow-amber-500/25"
                        },
                        {
                            icon: Award,
                            title: currentContent.craftFormsCount,
                            desc: currentContent.craftFormsDesc,
                            color: "from-orange-400 to-red-500",
                            glowColor: "shadow-orange-500/25"
                        },
                        {
                            icon: Heart,
                            title: currentContent.generationsTitle,
                            desc: currentContent.generationsDesc,
                            color: "from-red-400 to-rose-500",
                            glowColor: "shadow-red-500/25"
                        }
                    ].map((item, index) => (
                        <div key={index} className="group">
                            <div className={`relative p-10 rounded-3xl bg-gradient-to-br from-white/95 to-amber-50/95 backdrop-blur-xl shadow-2xl ${item.glowColor} border border-amber-200/50 hover:border-amber-300/70 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 hover:shadow-3xl`}>
                                {/* Enhanced Corner Elements */}
                                <div className="absolute top-0 left-0 w-8 h-8">
                                    <div className="w-full h-full border-l-4 border-t-4 border-amber-400 rounded-tl-2xl shadow-lg"></div>
                                </div>
                                <div className="absolute top-0 right-0 w-8 h-8">
                                    <div className="w-full h-full border-r-4 border-t-4 border-amber-400 rounded-tr-2xl shadow-lg"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 w-8 h-8">
                                    <div className="w-full h-full border-l-4 border-b-4 border-amber-400 rounded-bl-2xl shadow-lg"></div>
                                </div>
                                <div className="absolute bottom-0 right-0 w-8 h-8">
                                    <div className="w-full h-full border-r-4 border-b-4 border-amber-400 rounded-br-2xl shadow-lg"></div>
                                </div>
                                
                                <div className="text-center relative">
                                    <div className="w-24 h-24 mx-auto mb-8 relative">
                                        <div className={`w-full h-full bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ${item.glowColor}`}>
                                            <item.icon className="w-12 h-12 text-white drop-shadow-lg" />
                                        </div>
                                        <div className="absolute -top-3 -right-3">
                                            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                                                <Sparkles className="w-4 h-4 text-white animate-pulse" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-800 to-red-700 bg-clip-text text-transparent mb-6 font-serif">{item.title}</h3>
                                    <p className="text-orange-700 leading-relaxed font-medium text-lg">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Artisans Gallery Section - Enhanced Light Theme */}
                <div className="relative">
                    <div className="bg-gradient-to-br from-amber-50/95 via-orange-50/95 to-red-50/95 backdrop-blur-xl rounded-3xl p-16 shadow-2xl border border-white/50 relative overflow-hidden">
                        {/* Subtle inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/10 via-transparent to-orange-200/10 rounded-3xl"></div>
                        
                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center justify-center mb-6">
                                    <div className="w-16 h-1 bg-gradient-to-r from-transparent to-orange-500 rounded-full"></div>
                                    <div className="mx-4 p-3 rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-xl">
                                        <Palette className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="w-16 h-1 bg-gradient-to-l from-transparent to-orange-500 rounded-full"></div>
                                </div>
                                <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-800 via-red-700 to-orange-800 bg-clip-text text-transparent mb-6 font-serif">{currentContent.meetArtisansTitle}</h3>
                                <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full shadow-lg"></div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                                {[
                                    {
                                        name: "Ramesh Kumar",
                                        craft: language === 'en' ? "Banarasi Weaving" : "बनारसी बुनाई",
                                        location: language === 'en' ? "Varanasi, UP" : "वाराणसी, उ.प्र.",
                                        experience: language === 'en' ? "35 years" : "25 साल",
                                        image: Meet1,
                                        accent: "from-amber-500 to-orange-600"
                                    },
                                    {
                                        name: "Meera Devi",
                                        craft: language === 'en' ? "Brass Crafting" : "पीतल शिल्प",
                                        location: language === 'en' ? "Moradabad, UP" : "मुरादाबाद, उ.प्र.",
                                        experience: language === 'en' ? "12 years" : "18 साल",
                                        image: Meet2,
                                        accent: "from-orange-500 to-red-600"
                                    },
                                    {
                                        name: "Sita Kumari",
                                        craft: language === 'en' ? "Madhubani Painting" : "मधुबनी चित्रकारी",
                                        location: language === 'en' ? "Bihar" : "बिहार",
                                        experience: language === 'en' ? "10 years" : "30 साल",
                                        image: Meet3,
                                        accent: "from-red-500 to-rose-600"
                                    },
                                    {
                                        name: "Ahmed Hassan",
                                        craft: language === 'en' ? "Pashmina Weaving" : "पश्मीना बुनाई",
                                        location: language === 'en' ? "Srinagar, J&K" : "श्रीनगर, जे&के",
                                        experience: language === 'en' ? "11 years" : "22 साल",
                                        image: Meet4,
                                        accent: "from-orange-600 to-amber-600"
                                    }
                                ].map((artisan, index) => (
                                    <div key={index} className="group text-center">
                                        <div className="relative mb-8">
                                            <div className={`w-28 h-28 mx-auto rounded-full p-1 bg-gradient-to-br ${artisan.accent} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                                                <img 
                                                    src={artisan.image} 
                                                    alt={artisan.name}
                                                    className="w-full h-full rounded-full object-cover shadow-xl"
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                                <div className={`w-10 h-10 bg-gradient-to-br ${artisan.accent} rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                                    <Palette className="w-5 h-5 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br from-white/80 to-orange-50/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-orange-200/50 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500">
                                            <h4 className="text-xl font-bold bg-gradient-to-r from-orange-800 to-red-700 bg-clip-text text-transparent mb-3 font-serif">{artisan.name}</h4>
                                            <p className="text-orange-700 text-sm mb-2 font-semibold">{artisan.craft}</p>
                                            <p className="text-orange-600 text-xs mb-2 flex items-center justify-center font-medium">
                                                <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                                                {artisan.location}
                                            </p>
                                            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-300/50">
                                                <p className="text-orange-800 text-xs font-bold">
                                                    {artisan.experience} {language === 'en' ? 'experience' : 'अनुभव'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meet;

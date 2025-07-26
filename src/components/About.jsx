import React from "react";
import { Heart, Users, Award, MapPin, Phone, Mail } from 'lucide-react';

const About = ({ language = 'en' }) => {
    const content = {
        en: {
            title: 'About Us',
            subtitle: 'Empowering artisans, preserving traditions, and celebrating the soul of Indian craftsmanship',
            mission: {
                title: 'Our Mission',
                description: 'To empower local artisans by providing them a platform to showcase their talent, preserve India\'s rich cultural heritage, and connect their craftsmanship with the global market - ensuring they receive the recognition, respect, and value they truly deserve.'
            },
            impact: {
                title: 'Our Impact',
                stats: {
                    artisans: 'Artisan Partners',
                    states: 'States Covered',
                    crafts: 'Craft Forms',
                    customers: 'Happy Customers'
                }
            },
            values: {
                title: 'Our Core Values',
                empowerment: {
                    title: 'Empowerment',
                    description: 'Enabling artisans with opportunities to grow and succeed.'
                },
                heritage: {
                    title: 'Heritage',
                    description: 'Preserving and promoting India\'s cultural craftsmanship.'
                },
                fairValue: {
                    title: 'Fair Value',
                    description: 'Ensuring dignity, recognition, and rightful earnings for every artisan.'
                }
            },
            contact: {
                title: 'Contact Us'
            }
        },
        hi: {
            title: 'हमारे बारे में',
            subtitle: 'कारीगरों को सशक्त बनाना, परंपराओं को संरक्षित करना, और भारतीय शिल्पकला की आत्मा का जश्न मनाना',
            mission: {
                title: 'हमारा मिशन',
                description: 'स्थानीय कारीगरों को उनकी प्रतिभा दिखाने के लिए एक मंच प्रदान करके, भारत की समृद्ध सांस्कृतिक विरासत को संरक्षित करके, और उनकी शिल्पकला को वैश्विक बाजार से जोड़कर सशक्त बनाना - यह सुनिश्चित करते हुए कि उन्हें वह पहचान, सम्मान और मूल्य मिले जिसके वे वास्तव में हकदार हैं।'
            },
            impact: {
                title: 'हमारा प्रभाव',
                stats: {
                    artisans: 'कारीगर साझीदार',
                    states: 'राज्य कवर किए गए',
                    crafts: 'शिल्प रूप',
                    customers: 'खुश ग्राहक'
                }
            },
            values: {
                title: 'हमारे मुख्य मूल्य',
                empowerment: {
                    title: 'सशक्तिकरण',
                    description: 'कारीगरों को बढ़ने और सफल होने के अवसर प्रदान करना।'
                },
                heritage: {
                    title: 'विरासत',
                    description: 'भारत की सांस्कृतिक शिल्पकला का संरक्षण और प्रचार।'
                },
                fairValue: {
                    title: 'उचित मूल्य',
                    description: 'हर कारीगर के लिए गरिमा, पहचान और उचित कमाई सुनिश्चित करना।'
                }
            },
            contact: {
                title: 'हमसे संपर्क करें'
            }
        }
    };

    const currentLang = content[language];

    return (
        <div className="pt-28 pb-12">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-amber-900 mb-4 font-serif">{currentLang.title}</h2>
              <p className="text-xl text-amber-700 max-w-2xl mx-auto">
                {currentLang.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-amber-200">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">{currentLang.mission.title}</h3>
                  <p className="text-amber-700 text-lg leading-relaxed">
                    {currentLang.mission.description}
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-amber-200">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">{currentLang.impact.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-900 font-serif">500+</div>
                      <div className="text-amber-700">{currentLang.impact.stats.artisans}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-900 font-serif">15</div>
                      <div className="text-amber-700">{currentLang.impact.stats.states}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-900 font-serif">50+</div>
                      <div className="text-amber-700">{currentLang.impact.stats.crafts}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-900 font-serif">10k+</div>
                      <div className="text-amber-700">{currentLang.impact.stats.customers}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-amber-200">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">{currentLang.values.title}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-amber-900">{currentLang.values.empowerment.title}</h4>
                        <p className="text-amber-700">{currentLang.values.empowerment.description}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Heart className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-amber-900">{currentLang.values.heritage.title}</h4>
                        <p className="text-amber-700">{currentLang.values.heritage.description}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-amber-900">{currentLang.values.fairValue.title}</h4>
                        <p className="text-amber-700">{currentLang.values.fairValue.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-amber-200">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">{currentLang.contact.title}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-amber-600 mr-3" />
                      <span className="text-amber-700">+91 988674XXX</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-amber-600 mr-3" />
                      <span className="text-amber-700">kalasetu.team@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                      <span className="text-amber-700">
                        {language === 'en' ? 'Lucknow, Uttar Pradesh' : 'लखनऊ, उत्तर प्रदेश'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default About;
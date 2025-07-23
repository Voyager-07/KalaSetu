import React from "react";
import { Heart, Users, Award, MapPin, Phone, Mail } from 'lucide-react';

const About = ({ language = 'en' }) => {
    const content = {
        en: {
            title: 'About Us',
            subtitle: 'Empowering artisans, preserving traditions, and celebrating the soul of Indian craftsmanship',
            mission: {
                title: 'Our Mission',
                description: 'To create a sustainable ecosystem where traditional Indian artisans can thrive in the modern world. We bridge the gap between age-old craftsmanship and contemporary markets, ensuring that these invaluable skills are preserved for future generations.'
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
                title: 'Our Values',
                authenticity: {
                    title: 'Authenticity',
                    description: 'Every product is genuinely handcrafted by skilled artisans'
                },
                community: {
                    title: 'Community',
                    description: 'Supporting artisan families and their communities'
                },
                heritage: {
                    title: 'Heritage',
                    description: 'Preserving centuries-old traditions and techniques'
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
                description: 'एक स्थायी पारिस्थितिकी तंत्र बनाना जहाँ पारंपरिक भारतीय कारीगर आधुनिक दुनिया में फल-फूल सकें। हम पुरानी शिल्पकला और समकालीन बाजारों के बीच की खाई को पाटते हैं, यह सुनिश्चित करते हुए कि ये अमूल्य कौशल भावी पीढ़ियों के लिए संरक्षित रहें।'
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
                title: 'हमारे मूल्य',
                authenticity: {
                    title: 'प्रामाणिकता',
                    description: 'प्रत्येक उत्पाद वास्तव में कुशल कारीगरों द्वारा हस्तनिर्मित है'
                },
                community: {
                    title: 'समुदाय',
                    description: 'कारीगर परिवारों और उनके समुदायों का समर्थन'
                },
                heritage: {
                    title: 'विरासत',
                    description: 'सदियों पुरानी परंपराओं और तकनीकों का संरक्षण'
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
                      <Award className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-amber-900">{currentLang.values.authenticity.title}</h4>
                        <p className="text-amber-700">{currentLang.values.authenticity.description}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-amber-900">{currentLang.values.community.title}</h4>
                        <p className="text-amber-700">{currentLang.values.community.description}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Heart className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-amber-900">{currentLang.values.heritage.title}</h4>
                        <p className="text-amber-700">{currentLang.values.heritage.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-amber-200">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">{currentLang.contact.title}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-amber-600 mr-3" />
                      <span className="text-amber-700">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-amber-600 mr-3" />
                      <span className="text-amber-700">hello@vocalforlocal.in</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                      <span className="text-amber-700">
                        {language === 'en' ? 'Lucknow, Uttar Pradesh, India' : 'लखनऊ, उत्तर प्रदेश, भारत'}
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
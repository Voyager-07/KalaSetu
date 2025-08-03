import React from "react";
import { useState } from "react";
import { Upload, QrCode, Palette, Eye, X } from 'lucide-react';

const FeatureCards = ({ language = 'en', navigateToPage }) => {
    const [isQrModalOpen, setIsQrModalOpen] = useState(false);

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent('https://kalasetuapp.netlify.app/')}`;

    const openQrModal = () => setIsQrModalOpen(true);
    const closeQrModal = () => setIsQrModalOpen(false);

    const handleSubmitDesign = () => {
        if (navigateToPage) {
            navigateToPage('products');
        }
    };

    const content = {
        en: {
            uploadTitle: "Upload Your Design",
            uploadDescription: "Are you a creator? Upload your handmade designs to sell on our platform!",
            uploadButton: "Submit Design",
            journeyTitle: "See the Artisan's Journey",
            journeyDescription: "Scan the QR to explore behind-the-scenes work and meet the artisan.",
            journeyButton: "View QR Code",
            qrModalTitle: "Artisan's Journey QR Code",
            qrModalDescription: "Scan this QR code to explore the artisan's story"
        },
        hi: {
            uploadTitle: "अपना डिज़ाइन अपलोड करें",
            uploadDescription: "क्या आप एक रचनाकार हैं? हमारे प्लेटफॉर्म पर बेचने के लिए अपने हस्तनिर्मित डिज़ाइन अपलोड करें!",
            uploadButton: "डिज़ाइन जमा करें",
            journeyTitle: "कारीगर की यात्रा देखें",
            journeyDescription: "पर्दे के पीछे के काम का पता लगाने और कारीगर से मिलने के लिए QR स्कैन करें।",
            journeyButton: "QR कोड देखें",
            qrModalTitle: "कारीगर की यात्रा QR कोड",
            qrModalDescription: "कारीगर की कहानी जानने के लिए इस QR कोड को स्कैन करें"
        }
    };

    const currentContent = content[language];

    return (
        <div className="py-20 relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="50" cy="50" r="10" fill="currentColor"/>
                </svg>
            </div>
            
            <div className="absolute bottom-10 right-10 w-24 h-24 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full text-orange-600">
                    <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="15" fill="currentColor"/>
                </svg>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    
                    {/* Upload Design Card */}
                    <div className="group">
                        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-amber-100 relative overflow-hidden">
                            {/* Card background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-3xl"></div>
                            
                            {/* Decorative corner elements */}
                            <div className="absolute top-0 left-0 w-6 h-6">
                                <div className="w-full h-full border-l-3 border-t-3 border-amber-400 rounded-tl-2xl"></div>
                            </div>
                            <div className="absolute top-0 right-0 w-6 h-6">
                                <div className="w-full h-full border-r-3 border-t-3 border-amber-400 rounded-tr-2xl"></div>
                            </div>
                            
                            <div className="relative z-10 text-center">
                                {/* Icon */}
                                <div className="w-20 h-20 mx-auto mb-6 relative">
                                    <div className="w-full h-full bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                        <Upload className="w-10 h-10 text-white drop-shadow-lg" />
                                    </div>
                                    <div className="absolute -top-2 -right-2">
                                        <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                                            <Palette className="w-3 h-3 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold text-amber-900 mb-4 font-serif group-hover:text-amber-800 transition-colors duration-300">
                                    {currentContent.uploadTitle}
                                </h3>
                                
                                <p className="text-amber-700 text-lg leading-relaxed mb-8 max-w-sm mx-auto">
                                    {currentContent.uploadDescription}
                                </p>

                                <button 
                                    onClick={handleSubmitDesign}
                                    className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 active:scale-95"
                                >
                                    {currentContent.uploadButton}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Artisan's Journey Card */}
                    <div className="group">
                        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-amber-100 relative overflow-hidden">
                            {/* Card background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 rounded-3xl"></div>
                            
                            {/* Decorative corner elements */}
                            <div className="absolute bottom-0 left-0 w-6 h-6">
                                <div className="w-full h-full border-l-3 border-b-3 border-orange-400 rounded-bl-2xl"></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-6 h-6">
                                <div className="w-full h-full border-r-3 border-b-3 border-orange-400 rounded-br-2xl"></div>
                            </div>
                            
                            <div className="relative z-10 text-center">
                                {/* Icon */}
                                <div className="w-20 h-20 mx-auto mb-6 relative">
                                    <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                        <QrCode className="w-10 h-10 text-white drop-shadow-lg" />
                                    </div>
                                    <div className="absolute -top-2 -right-2">
                                        <div className="w-6 h-6 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                                            <Eye className="w-3 h-3 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold text-amber-900 mb-4 font-serif group-hover:text-amber-800 transition-colors duration-300">
                                    {currentContent.journeyTitle}
                                </h3>
                                
                                <p className="text-amber-700 text-lg leading-relaxed mb-8 max-w-sm mx-auto">
                                    {currentContent.journeyDescription}
                                </p>

                                <button onClick={openQrModal} className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                                    {currentContent.journeyButton}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* QR Code Modal */}
            {isQrModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop with blur */}
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={closeQrModal}
                    ></div>
                    
                    {/* Modal Content */}
                    <div className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-md mx-4 border border-amber-200">
                        {/* Close button */}
                        <button
                            onClick={closeQrModal}
                            className="absolute top-4 right-4 p-2 text-amber-600 hover:text-amber-800 hover:bg-amber-100 rounded-full transition-all duration-200"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        
                        <div className="text-center pt-4">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl">
                                <QrCode className="w-8 h-8 text-white" />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">
                                {currentContent.qrModalTitle}
                            </h3>
                            
                            <p className="text-amber-700 mb-6">
                                {currentContent.qrModalDescription}
                            </p>
                            
                            <div className="bg-amber-50 rounded-2xl p-6 mb-6">
                                <img 
                                    src={qrCodeUrl} 
                                    alt="QR Code" 
                                    className="w-32 h-32 mx-auto"
                                />
                            </div>
                            
                            <div className="text-xs text-amber-600">
                                kalasetuapp.netlify.app
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeatureCards;

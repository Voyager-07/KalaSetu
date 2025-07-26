import React from "react";

import { Star, Heart, ShoppingCart, Users, Award, MapPin, Phone, Mail } from 'lucide-react';

import banarasiSaree from "../assets/Banarasi-Saree.png";
import Bangles from "../assets/Bangles.png";
import BrassDecor from "../assets/Brass Decor.png";
import Madhubani from "../assets/Painting.png";
import Pashmina from "../assets/Pashmina.png";
import WoodenCraft from "../assets/Wooden Crafts.png";
import ClayArt from "../assets/Clay art.png";


const products = [
    {
        id: 1,
        name: {
            en: "Handwoven Banarasi Silk Saree",
            hi: "हाथ से बुनी बनारसी रेशम साड़ी"
        },
        artisan: "Ramesh Weaver",
        location: "Varanasi, UP",
        price: "₹12,000",
        image: banarasiSaree,
        rating: 4.8,
        description: {
            en: "Exquisite handwoven silk saree with traditional golden zari work",
            hi: "पारंपरिक सुनहरे जरी काम के साथ उत्कृष्ट हाथ से बुनी रेशम साड़ी"
        }
    },
    {
        id: 2,
        name: {
            en: "Brass Decorative Diya Set",
            hi: "पीतल की सजावटी दिया सेट"
        },
        artisan: "Meera Craftsperson",
        location: "Moradabad, UP",
        price: "₹3,500",
        image: BrassDecor,
        rating: 4.9,
        description: {
            en: "Handcrafted brass diyas with intricate mandala patterns",
            hi: "जटिल मंडला पैटर्न के साथ हस्तशिल्प पीतल के दिए"
        }
    },
    {
        id: 3,
        name: {
            en: "Madhubani Painting",
            hi: "मधुबनी चित्रकारी"
        },
        artisan: "Sita Devi",
        location: "Bihar",
        price: "₹2,500",
        image: Madhubani,
        rating: 4.7,
        description: {
            en: "Traditional Madhubani art depicting ancient folklore",
            hi: "प्राचीन लोककथाओं को दर्शाती पारंपरिक मधुबनी कला"
        }
    },
    {
        id: 4,
        name: {
            en: "Kashmiri Pashmina Shawl",
            hi: "कश्मीरी पश्मीना शॉल"
        },
        artisan: "Ahmed Weaver",
        location: "Srinagar, J&K",
        price: "₹15,000",
        image: Pashmina,
        rating: 5.0,
        description: {
            en: "Pure pashmina shawl with delicate hand embroidery",
            hi: "नाजुक हाथ की कढ़ाई के साथ शुद्ध पश्मीना शॉल"
        }
    },
    {
        id: 5,
        name: {
            en: "Wooden Carved Elephant",
            hi: "लकड़ी का नक्काशीदार हाथी"
        },
        artisan: "Karthik Sculptor",
        location: "Mysore, Karnataka",
        price: "₹3,200",
        image: WoodenCraft,
        rating: 4.6,
        description: {
            en: "Intricately carved rosewood elephant with traditional motifs",
            hi: "पारंपरिक रूपांकनों के साथ जटिल रूप से नक्काशीदार शीशम लकड़ी का हाथी"
        }
    },
    {
        id: 6,
        name: {
            en: "Rajasthani Clay Toy Set",
            hi: "राजस्थानी मिट्टी के खिलौनों का सेट"
        },
        artisan: "Lakshmi Potter",
        location: "Jaipur, Rajasthan",
        price: "₹1,500",
        image: ClayArt,
        rating: 4.8,
        description: {
            en: "Hand-painted ceramic pottery with traditional Rajasthani designs",
            hi: "राजस्थानी पारंपरिक डिज़ाइनों वाले हस्त-चित्रित सिरेमिक खिलौने"
        }
    }
];

const ProductCard = ({ product, language = 'en' }) => {
    const content = {
        en: {
            by: "by",
            addToCart: "Add to Cart"
        },
        hi: {
            by: "द्वारा",
            addToCart: "कार्ट में जोड़ें"
        }
    };

    const currentContent = content[language] || content.en;

    return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-amber-200">
            <div className="relative overflow-hidden rounded-t-xl">
                <img src={product.image} alt={product.name[language]} className="w-full h-48 object-cover"/>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Heart className="w-5 h-5 text-red-500" />
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2 font-serif">
                    {product.name[language] || product.name.en}
                </h3>
                <p className="text-amber-700 text-sm mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {currentContent.by} {product.artisan}
                </p>
                <p className="text-amber-600 text-sm mb-3 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {product.location}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                    {product.description[language] || product.description.en}
                </p>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                    <span className="text-2xl font-bold text-amber-900 font-serif">{product.price}</span>
                </div>
                {/* <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {currentContent.addToCart}
                </button> */}
            </div>
        </div>
    );
};

const Products = ({ language = 'en', navigateToPage }) => {
    const content = {
        en: {
            title: "Artisan Products",
            subtitle: "Discover authentic handcrafted treasures made by skilled artisans from across India",
            viewMore: "View More"
        },
        hi: {
            title: "कारीगर उत्पाद",
            subtitle: "भारत भर के कुशल कारीगरों द्वारा निर्मित प्रामाणिक हस्तशिल्प खजानों की खोज करें",
            viewMore: "और देखें"
        }
    };

    const currentContent = content[language] || content.en;

    const handleViewMore = () => {
        if (navigateToPage) {
            navigateToPage('products');
        }
    };

    return (
        <div className="pt-28 pb-0">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-amber-900 mb-4 font-serif">
                {currentContent.title}
              </h2>
              <p className="text-xl text-amber-700 max-w-2xl mx-auto">
                {currentContent.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} language={language} />
              ))}
            </div>
          </div>
          <div className="flex h-25 justify-center items-center">
              <button
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 active:scale-95" 
                onClick={handleViewMore}
              >
                {currentContent.viewMore}
              </button>
          </div>
        </div>
    );
};

export default Products;
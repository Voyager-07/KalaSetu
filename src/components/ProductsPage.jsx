import React, { useState, useRef, useEffect } from 'react';
import { Star, Heart, ShoppingCart, Filter, Search, Grid, List, ChevronDown, MapPin, Tag, Plus, X, Upload, ImagePlus, CheckCircle, ArrowLeft } from 'lucide-react';

import banarasiSaree from "../assets/Banarasi-Saree.png";
import Bangles from "../assets/Bangles.png";
import BrassDecor from "../assets/Brass Decor.png";
import Madhubani from "../assets/Painting.png";
import Pashmina from "../assets/Pashmina.png";
import WoodenCraft from "../assets/Wooden Crafts.png";
import ClayArt from "../assets/Clay art.png";
import WoodBox from "../assets/WoodBox.jpg";

import BeadedRakhi from "../assets/BeadedRakhi.png";
import ZariRakhi from "../assets/ZariRakhi.png";
import SeedRakhi from "../assets/SeedRakhi.png";

const PaymentModal = ({ product, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div className="bg-white w-full h-full overflow-y-auto">
      <div className="min-h-full flex flex-col">
        {/* Header - Fixed at top */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white sticky top-0 z-10">
          <h2 className="text-3xl font-bold text-amber-900">Complete Purchase</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 p-6 max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column - Product Details */}
            <div className="space-y-6">
              {/* Product Summary */}
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Product Details</h3>
                <div className="flex gap-6">
                  <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-xl" />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-amber-900">{product.name}</h4>
                    <p className="text-amber-700 mt-1">by {product.artisan}</p>
                    <p className="text-gray-600 mt-1">{product.state}</p>
                    <p className="text-2xl font-bold text-amber-900 mt-3">₹{product.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-lg">
                    <span>Product Price:</span>
                    <span>₹{product.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Shipping:</span>
                    <span className="text-green-600 font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Tax (18% GST):</span>
                    <span>₹{Math.round(product.price * 0.18).toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-2xl text-amber-900">
                    <span>Total Amount:</span>
                    <span>₹{Math.round(product.price * 1.18).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Options */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Choose Payment Method</h3>
                
                <div className="space-y-4">
                  {/* UPI */}
                  <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-amber-300 cursor-pointer transition-all hover:shadow-md">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold">UPI</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-lg font-medium">UPI Payment</span>
                        <p className="text-sm text-gray-500">Pay using Google Pay, PhonePe, Paytm</p>
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-amber-300 cursor-pointer transition-all hover:shadow-md">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xl">💳</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-lg font-medium">Credit/Debit Card</span>
                        <p className="text-sm text-gray-500">Visa, Mastercard, RuPay accepted</p>
                      </div>
                    </div>
                  </div>

                  {/* Net Banking */}
                  <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-amber-300 cursor-pointer transition-all hover:shadow-md">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-xl">🏦</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-lg font-medium">Net Banking</span>
                        <p className="text-sm text-gray-500">All major banks supported</p>
                      </div>
                    </div>
                  </div>

                  {/* Cash on Delivery */}
                  <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-amber-300 cursor-pointer transition-all hover:shadow-md">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-xl">💰</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-lg font-medium">Cash on Delivery</span>
                        <p className="text-sm text-gray-500">Pay when you receive the product</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="border-t border-gray-200 p-6 bg-white sticky bottom-0">
          <div className="max-w-4xl mx-auto flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 py-4 px-6 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors text-lg font-semibold"
            >
              Cancel Order
            </button>
            <button
              onClick={() => alert('Payment processing... (Mock)')}
              className="flex-1 py-4 px-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all font-semibold text-lg"
            >
              Proceed to Pay ₹{Math.round(product.price * 1.18).toLocaleString()}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProductsPage = () => {
  const [currentSection, setCurrentSection] = useState('products');
  const [language, setLanguage] = useState('en');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedState, setSelectedState] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [favorites, setFavorites] = useState(new Set());
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [userProducts, setUserProducts] = useState([]);
  const [formStep, setFormStep] = useState(1); // 1: Enter Details, 2: Review Confirmation

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    category: 'textiles',
    state: 'Uttar Pradesh',
    price: '',
    originalPrice: '',
    artisan: '',
    description: '',
    image: ''
  });
  
  // Create refs for sections
  const productsRef = useRef(null);
  const categoriesRef = useRef(null);
  const featuredRef = useRef(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    try {
      // Load user products from localStorage
      const savedProducts = localStorage.getItem('userProducts');
      if (savedProducts) {
        setUserProducts(JSON.parse(savedProducts));
      }

      // Load favorites from localStorage
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        setFavorites(new Set(JSON.parse(savedFavorites)));
      }

      // Load other preferences
      const savedViewMode = localStorage.getItem('viewMode');
      if (savedViewMode) {
        setViewMode(savedViewMode);
      }

      const savedCategory = localStorage.getItem('selectedCategory');
      if (savedCategory) {
        setSelectedCategory(savedCategory);
      }

      const savedState = localStorage.getItem('selectedState');
      if (savedState) {
        setSelectedState(savedState);
      }

      const savedSortBy = localStorage.getItem('sortBy');
      if (savedSortBy) {
        setSortBy(savedSortBy);
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
  }, []);

  // Save user products to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('userProducts', JSON.stringify(userProducts));
    } catch (error) {
      console.error('Error saving products to localStorage:', error);
    }
  }, [userProducts]);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }, [favorites]);

  // Save preferences to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('viewMode', viewMode);
    } catch (error) {
      console.error('Error saving viewMode to localStorage:', error);
    }
  }, [viewMode]);

  useEffect(() => {
    try {
      localStorage.setItem('selectedCategory', selectedCategory);
    } catch (error) {
      console.error('Error saving selectedCategory to localStorage:', error);
    }
  }, [selectedCategory]);

  useEffect(() => {
    try {
      localStorage.setItem('selectedState', selectedState);
    } catch (error) {
      console.error('Error saving selectedState to localStorage:', error);
    }
  }, [selectedState]);

  useEffect(() => {
    try {
      localStorage.setItem('sortBy', sortBy);
    } catch (error) {
      console.error('Error saving sortBy to localStorage:', error);
    }
  }, [sortBy]);
  
  const scrollToSection = (sectionName) => {
    const refs = {
      products: productsRef,
      categories: categoriesRef,
      featured: featuredRef
    };
    
    const targetRef = refs[sectionName];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setCurrentSection(sectionName);
  };

const defaultProducts = [
  {
    id: 1,
    name: "Handwoven Banarasi Silk Saree",
    category: "textiles",
    state: "Uttar Pradesh",
    price: 12000,
    originalPrice: 15000,
    rating: 4.8,
    reviews: 132,
    artisan: "Ramesh Weaver",
    image: banarasiSaree,
    description: "Exquisite handwoven Banarasi silk saree with traditional gold zari work",
    inStock: true,
    trending: true,
    isUserProduct: false
  },
  {
    id: 2,
    name: "Brass Decorative Diya Set",
    category: "home-decor",
    state: "Uttar Pradesh",
    price: 3500,
    originalPrice: 4200,
    rating: 4.9,
    reviews: 108,
    artisan: "Meera Craftsperson",
    image: BrassDecor,
    description: "Handcrafted brass diyas with intricate mandala patterns",
    inStock: true,
    trending: false,
    isUserProduct: false
  },
  {
    id: 3,
    name: "Madhubani Painting",
    category: "paintings",
    state: "Bihar",
    price: 2500,
    originalPrice: 3000,
    rating: 4.7,
    reviews: 95,
    artisan: "Sita Devi",
    image: Madhubani,
    description: "Traditional Madhubani art depicting ancient folklore",
    inStock: true,
    trending: true,
    isUserProduct: false
  },
  {
    id: 4,
    name: "Kashmiri Pashmina Shawl",
    category: "textiles",
    state: "Jammu & Kashmir",
    price: 15000,
    originalPrice: 20000,
    rating: 5.0,
    reviews: 212,
    artisan: "Ahmed Weaver",
    image: Pashmina,
    description: "Pure pashmina shawl with delicate hand embroidery",
    inStock: true,
    trending: true,
    isUserProduct: false
  },
  {
    id: 5,
    name: "Wooden Carved Elephant",
    category: "woodcraft",
    state: "Karnataka",
    price: 3200,
    originalPrice: 4000,
    rating: 4.6,
    reviews: 88,
    artisan: "Karthik Sculptor",
    image: WoodenCraft,
    description: "Intricately carved rosewood elephant with traditional motifs",
    inStock: true,
    trending: false,
    isUserProduct: false
  },
  {
    id: 6,
    name: "Rajasthani Clay Toy Set",
    category: "pottery",
    state: "Rajasthan",
    price: 1500,
    originalPrice: 1800,
    rating: 4.8,
    reviews: 101,
    artisan: "Pooja Kalyani",
    image: ClayArt,
    description: "Hand-painted ceramic pottery with traditional Rajasthani designs",
    inStock: true,
    trending: true,
    isUserProduct: false
  },
  {
    id: 7,
    name: "Handcrafted Wooden Keepsake Box",
    category: "woodcraft",
    state: "Uttar Pradesh",
    price: 2500,
    originalPrice: 2800,
    rating: 4.8,
    reviews: 101,
    artisan: "Lakshmi Srivastava",
    image: WoodBox,
    description: "Hand-crafted Wooden Box",
    inStock: true,
    trending: true,
    isUserProduct: false
  },
  {
    id: 8,
    name: "Traditional Zari Rakhi",
    category: "rakhi",
    state: "Rajasthan",
    price: 199,
    originalPrice: 299,
    rating: 4.9,
    reviews: 187,
    artisan: "Anaya Threads",
    image: ZariRakhi,
    description: "Handcrafted Rakhi with intricate zari work and vibrant colors",
    inStock: true,
    trending: true,
    isUserProduct: false
  },
  {
    id: 9,
    name: "Eco-Friendly Seed Rakhi",
    category: "rakhi",
    state: "Maharashtra",
    price: 249,
    originalPrice: 349,
    rating: 4.7,
    reviews: 204,
    artisan: "Green Ties Studio",
    image: SeedRakhi,
    description: "A sustainable Rakhi made with plantable seed paper and natural colors",
    inStock: true,
    trending: false,
    isUserProduct: false
  },
  {
    id: 10,
    name: "Beaded Rakhi with Lumba Set",
    category: "rakhi",
    state: "Gujarat",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 273,
    artisan: "Roshni Beadworks",
    image: BeadedRakhi, 
    description: "Elegant Rakhi and Lumba set with glass beads and pearls",
    inStock: true,
    trending: true,
    isUserProduct: false
  }
];


  // Combine default products with user products
  const allProducts = [...defaultProducts, ...userProducts];

  const categories = [
    { id: 'all', name: 'All Products', count: allProducts.length },
    { id: 'textiles', name: 'Textiles', count: allProducts.filter(p => p.category === 'textiles').length },
    { id: 'rakhi', name: 'Rakhi', count: allProducts.filter(p => p.category === 'rakhi').length },
    { id: 'pottery', name: 'Pottery', count: allProducts.filter(p => p.category === 'pottery').length },
    { id: 'home-decor', name: 'Home Decor', count: allProducts.filter(p => p.category === 'home-decor').length },
    { id: 'accessories', name: 'Accessories', count: allProducts.filter(p => p.category === 'accessories').length }
  ];

  const states = [
    'Uttar Pradesh', 'Rajasthan', 'Tamil Nadu', 'Kerala', 'Gujarat', 'West Bengal', 'Karnataka', 'Maharashtra', 'Punjab'
  ];

  // Filter products based on selected filters
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesState = selectedState === 'all' || product.state === selectedState;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.artisan.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesState && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return (b.rating || 0) - (a.rating || 0);
      case 'newest': return b.id - a.id;
      default: return (b.reviews || 0) - (a.reviews || 0); // popularity
    }
  });

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    // Validate required fields before moving to step 2
    if (!formData.name || !formData.price || !formData.artisan || !formData.description) {
      alert('Please fill in all required fields');
      return;
    }
    setFormStep(2);
  };

  const handleSubmitProduct = () => {
    const newProduct = {
      id: Date.now(), // Simple ID generation
      name: formData.name,
      category: formData.category,
      state: formData.state,
      price: parseInt(formData.price),
      originalPrice: formData.originalPrice ? parseInt(formData.originalPrice) : parseInt(formData.price) * 1.2,
      rating: 4.0, // Default rating for new products
      reviews: 0,
      artisan: formData.artisan,
      image: formData.image || "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
      description: formData.description,
      inStock: true,
      trending: false,
      isUserProduct: true,
      createdAt: new Date().toISOString() // Add creation timestamp
    };

    // Add to user products
    setUserProducts(prev => [newProduct, ...prev]);
    
    // Reset form and close modal after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        category: 'textiles',
        state: 'Uttar Pradesh',
        price: '',
        originalPrice: '',
        artisan: '',
        description: '',
        image: ''
      });
      setFormStep(1);
      setShowUploadForm(false);
    }, 2000);
  };

  const handleCloseForm = () => {
    setShowUploadForm(false);
    setFormStep(1);
    // Reset form data when closing
    setFormData({
      name: '',
      category: 'textiles',
      state: 'Uttar Pradesh',
      price: '',
      originalPrice: '',
      artisan: '',
      description: '',
      image: ''
    });
  };

  // Function to clear all user data (optional utility)
  const clearAllUserData = () => {
    if (window.confirm('Are you sure you want to clear all your uploaded products and preferences?')) {
      try {
        localStorage.removeItem('userProducts');
        localStorage.removeItem('favorites');
        localStorage.removeItem('viewMode');
        localStorage.removeItem('selectedCategory');
        localStorage.removeItem('selectedState');
        localStorage.removeItem('sortBy');
        
        // Reset state
        setUserProducts([]);
        setFavorites(new Set());
        setViewMode('grid');
        setSelectedCategory('all');
        setSelectedState('all');
        setSortBy('popularity');
        
        alert('All user data cleared successfully!');
      } catch (error) {
        console.error('Error clearing localStorage:', error);
        alert('Error clearing data. Please try again.');
      }
    }
  };

  const MandalaPattern = () => (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <pattern id="mandala" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            {Array.from({length: 8}).map((_, i) => (
              <line key={i} x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.3" 
                    transform={`rotate(${i * 45} 100 100)`}/>
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mandala)"/>
      </svg>
    </div>
  );

  const ProductCard = ({ product, isListView = false }) => (
    <div className={`bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-amber-200 ${isListView ? 'flex' : ''} relative`}>
      {product.isUserProduct && (
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            Your Product
          </span>
        </div>
      )}
      
      <div className={`${isListView ? 'w-64 flex-shrink-0' : ''} relative overflow-hidden rounded-t-xl`}>
        <img
          src={product.image}
          alt={product.name}
          className={`${isListView ? 'h-48' : 'h-48'} w-full object-cover`}
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop";
          }}
        />
        {product.trending && (
          <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            Trending
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
          <Heart 
            className={`w-5 h-5 cursor-pointer transition-colors ${favorites.has(product.id) ? 'fill-red-500 text-red-500' : 'text-red-500'}`}
            onClick={() => toggleFavorite(product.id)}
          />
        </div>
      </div>
      
      <div className="p-6 flex-1">
        <h3 className="text-xl font-bold text-amber-900 mb-2 font-serif">
          {product.name}
        </h3>
        
        <p className="text-amber-700 text-sm mb-2 flex items-center">
          <Tag className="w-4 h-4 mr-1" />
          by {product.artisan}
        </p>
        
        <p className="text-amber-600 text-sm mb-3 flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {product.state}
        </p>
        
        <p className="text-gray-600 text-sm mb-4">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
            <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
          </div>
          <span className="text-2xl font-bold text-amber-900 font-serif">₹{product.price.toLocaleString()}</span>
        </div>
        
        <button
          disabled={!product.inStock}
          onClick={() => {
            setSelectedProduct(product);
            setShowPaymentModal(true);
          }}
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
            product.inStock
              ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          {product.inStock ? 'Buy Now' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );

  // Upload Form Modal - Step 1: Enter Details
  const renderStep1 = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Product Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category *
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
          >
            <option value="textiles">Textiles</option>
            <option value="pottery">Pottery</option>
            <option value="home-decor">Home Decor</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State *
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
          >
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Artisan Name *
        </label>
        <input
          type="text"
          name="artisan"
          value={formData.artisan}
          onChange={handleFormChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price (₹) *
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Original Price (₹)
          </label>
          <input
            type="number"
            name="originalPrice"
            value={formData.originalPrice}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Image URL
        </label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleFormChange}
          placeholder="https://example.com/image.jpg"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        />
        <p className="text-xs text-gray-500 mt-1">Leave empty for default image</p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description *
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleFormChange}
          rows="3"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          required
        />
      </div>
      
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={handleCloseForm}
          className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleNextStep}
          className="flex-1 py-2 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all"
        >
          Next Step
        </button>
      </div>
    </div>
  );

  // Upload Form Modal - Step 2: Review Confirmation
  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Product Submitted for Review
        </h3>
        <p className="text-gray-600">
          Thank you for uploading your product! It has been submitted for review and will be published shortly.
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Product Summary:</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Product Name:</span>
            <span className="font-medium">{formData.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Category:</span>
            <span className="font-medium capitalize">{formData.category.replace('-', ' ')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Artisan:</span>
            <span className="font-medium">{formData.artisan}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">State:</span>
            <span className="font-medium">{formData.state}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Price:</span>
            <span className="font-medium">₹{formData.price}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Your product will be reviewed by our quality team</li>
          <li>• We'll verify the authenticity and craftsmanship details</li>
          <li>• Once approved, it will be visible to all customers</li>
          <li>• You'll receive an email confirmation within 24-48 hours</li>
        </ul>
      </div>
      
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={() => setFormStep(1)}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Edit
        </button>
        <button
          type="button"
          onClick={handleSubmitProduct}
          className="flex-1 py-2 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all"
        >
          Confirm Submission
        </button>
      </div>
    </div>
  );

  // Upload Form Modal
  const renderUploadForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-amber-900">
                {formStep === 1 ? 'Upload Your Design' : 'Review Submission'}
              </h2>
              <div className="flex items-center mt-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  formStep >= 1 ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  1
                </div>
                <div className={`w-12 h-1 mx-2 ${formStep >= 2 ? 'bg-amber-600' : 'bg-gray-200'}`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  formStep >= 2 ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  2
                </div>
              </div>
            </div>
            <button
              onClick={handleCloseForm}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {formStep === 1 ? renderStep1() : renderStep2()}
        </div>
      </div>
    </div>
  );

  return (
 <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative">
   <MandalaPattern />
   
   {/* Hero Section */}
   <div className="relative z-10 pt-38 bg-gradient-to-r from-amber-800 via-orange-700 to-red-700 text-white py-16">
     <div className="container mx-auto px-4">
       <div className="text-center">
         <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
           Handcrafted Heritage
         </h1>
         <p className="text-xl md:text-2xl mb-8 text-amber-100">
           Discover authentic Indian crafts and support local artisans
         </p>
       </div>
     </div>
   </div>

   {/* Filter and Search Section - Single Line */}
   <div ref={productsRef} className="relative z-10 container mx-auto px-4 py-8">
     <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 border-2 border-amber-200">
       <div className="flex flex-wrap gap-4 items-center justify-between">
         {/* Left side - Search and Filters */}
         <div className="flex items-center gap-3 flex-wrap">
           <button
             onClick={() => setShowUploadForm(true)}
             className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all flex items-center gap-2 font-semibold"
           >
             <Plus className="w-4 h-4" />
             Upload
           </button>
           
           <div className="relative">
             <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
             <input
               type="text"
               placeholder="Search..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent w-48"
             />
           </div>
           
           <select
             value={selectedCategory}
             onChange={(e) => setSelectedCategory(e.target.value)}
             className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm"
           >
             {categories.map(category => (
               <option key={category.id} value={category.id}>
                 {category.name} ({category.count})
               </option>
             ))}
           </select>
           
           <select
             value={selectedState}
             onChange={(e) => setSelectedState(e.target.value)}
             className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm"
           >
             <option value="all">All States</option>
             {states.map(state => (
               <option key={state} value={state}>{state}</option>
             ))}
           </select>
           
           <select
             value={sortBy}
             onChange={(e) => setSortBy(e.target.value)}
             className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm"
           >
             <option value="popularity">Popular</option>
             <option value="price-low">Price ↑</option>
             <option value="price-high">Price ↓</option>
             <option value="rating">Rating</option>
             <option value="newest">Newest</option>
           </select>
         </div>
         
         {/* Right side - View mode, results count, clear button */}
         <div className="flex items-center gap-3">
           <span className="text-sm text-gray-600">
             {sortedProducts.length} products
             {userProducts.length > 0 && (
               <span className="ml-1 text-green-600 font-semibold">
                 ({userProducts.length} yours)
               </span>
             )}
           </span>
           
           <div className="flex items-center gap-1">
             <button
               onClick={() => setViewMode('grid')}
               className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600'}`}
             >
               <Grid className="w-4 h-4" />
             </button>
             <button
               onClick={() => setViewMode('list')}
               className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600'}`}
             >
               <List className="w-4 h-4" />
             </button>
           </div>
           
           {userProducts.length > 0 && (
             <button
               onClick={clearAllUserData}
               className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-all text-sm"
             >
               Clear Data
             </button>
           )}
         </div>
       </div>
     </div>
   </div>

   {/* Products Grid/List */}
   <div className="relative z-10 container mx-auto px-4 pb-12">
     {sortedProducts.length === 0 ? (
       <div className="text-center py-12">
         <p className="text-xl text-gray-600">No products found matching your criteria.</p>
       </div>
     ) : (
       <div className={viewMode === 'grid' 
         ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
         : "space-y-6"
       }>
         {sortedProducts.map(product => (
           <ProductCard key={product.id} product={product} isListView={viewMode === 'list'} />
         ))}
       </div>
     )}
   </div>

   {/* Upload Form Modal */}
   {showUploadForm && renderUploadForm()}
   
   {/* Payment Modal */}
    {showPaymentModal && selectedProduct && (
      <PaymentModal 
        product={selectedProduct} 
        onClose={() => {
          setShowPaymentModal(false);
          setSelectedProduct(null);
        }} 
      />
    )}
 </div>
  );
};
export default ProductsPage;
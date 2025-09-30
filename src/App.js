import React, { useState, useEffect } from 'react';
import { Phone, ChefHat, Truck, Calendar, UtensilsCrossed, Star, Menu, X, Facebook, Instagram } from 'lucide-react';

export default function IndianSoulFood() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <ChefHat className="w-12 h-12" />,
      title: "Catering Chef",
      description: "Professional chefs bringing authentic Indian cuisine to your special events"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Delivery Service",
      description: "Fresh, hot Indian meals delivered right to your doorstep"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Events",
      description: "Complete catering solutions for weddings, parties, and corporate events"
    },
    {
      icon: <UtensilsCrossed className="w-12 h-12" />,
      title: "Meal Prep Service",
      description: "Weekly meal prep packages for healthy, convenient Indian dining"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The catering service for my wedding was exceptional! Every dish was authentic and delicious. Our guests couldn't stop raving about the food.",
      rating: 5
    },
    {
      name: "Rajesh Patel",
      text: "I order from Indian Soul Food weekly. The meal prep service has been a game-changer for my busy lifestyle. Authentic taste, every time!",
      rating: 5
    },
    {
      name: "Maya Johnson",
      text: "Hired them for a corporate event. Professional, punctual, and the food was absolutely amazing. Highly recommend their catering services!",
      rating: 5
    }
  ];

  const phoneNumber = "1-555-INDIAN"; // Replace with actual number

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-amber-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Indian Soul Food
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
              <a href="#testimonials" className="hover:text-amber-400 transition-colors">Testimonials</a>
              <a href="#contact" className="bg-gradient-to-r from-amber-400 to-amber-600 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all">
                Order Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-amber-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-amber-500/20 animate-slide-down">
              <div className="px-4 py-6 space-y-4">
                <a href="#home" className="block hover:text-amber-400 transition-colors">Home</a>
                <a href="#services" className="block hover:text-amber-400 transition-colors">Services</a>
                <a href="#testimonials" className="block hover:text-amber-400 transition-colors">Testimonials</a>
                <a href="#contact" className="block bg-gradient-to-r from-amber-400 to-amber-600 text-black px-6 py-2 rounded-full font-semibold text-center">
                  Order Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-black to-black" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Authentic Indian Cuisine
            <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent mt-2">
              Delivered to Your Soul
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Experience the rich flavors of India with our catering, delivery, and meal prep services since 2023
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <a 
              href={`tel:${phoneNumber}`}
              className="group bg-gradient-to-r from-amber-400 to-amber-600 text-black px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 hover:shadow-2xl hover:shadow-amber-500/50 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Call to Order</span>
            </a>
            <a 
              href="#services"
              className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 hover:text-black transition-all hover:scale-105"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/5 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-400 text-lg">Bringing authentic Indian flavors to every occasion</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveService(index)}
                className={`group relative bg-gradient-to-b from-gray-900 to-black border border-amber-500/20 rounded-2xl p-8 hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 ${activeService === index ? 'scale-105' : ''}`}
              >
                <div className="text-amber-400 mb-4 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/10 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What Our <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Customers Say</span>
            </h2>
            <p className="text-gray-400 text-lg">Real experiences from our valued customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-gray-900 to-black border border-amber-500/20 rounded-2xl p-8 hover:border-amber-400/50 transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <p className="text-amber-400 font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-black" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Experience
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mt-2">
              Authentic Indian Flavors?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Call us today to place your order or discuss catering for your next event
          </p>
          <a 
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-400 to-amber-600 text-black px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-amber-500/50 transition-all hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            <span>{phoneNumber}</span>
          </a>

          {/* Social Media Links */}
          <div className="mt-12 flex justify-center space-x-6">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-amber-500/20 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/30 transition-all hover:scale-110"
            >
              <Facebook className="w-6 h-6 text-amber-400" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-amber-500/20 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/30 transition-all hover:scale-110"
            >
              <Instagram className="w-6 h-6 text-amber-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2023-{new Date().getFullYear()} Indian Soul Food. Serving authentic Indian cuisine with love.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.4s both;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
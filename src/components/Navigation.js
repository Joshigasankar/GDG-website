import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ currentRoute, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route) => {
    navigate(route);
    setMobileMenuOpen(false);
  };

  const routes = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About Us' },
    { path: 'members', label: 'Members' },
    { path: 'contact', label: 'Contact Us' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-xl shadow-purple-500/5' 
          : 'bg-black/20 backdrop-blur-xl border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo/Brand - GDG & CIT Logos */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2 sm:space-x-3 group"
            >
              <img 
                src="/assets/gdg-logo.png" 
                alt="GDG Logo" 
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain transform group-hover:scale-110 transition-all duration-300"
              />
              <img 
                src="/assets/cit-logo.png" 
                alt="CIT Logo" 
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain transform group-hover:scale-110 transition-all duration-300"
              />
              <div className="hidden lg:block ml-1">
                <div className="text-xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">
                  GDG College
                </div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  Developer Community
                </div>
              </div>
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {routes.map((route) => (
                <button
                  key={route.path}
                  onClick={() => handleNavClick(route.path)}
                  className={`relative py-2 px-5 rounded-lg font-medium transition-all duration-300 ${
                    currentRoute === route.path 
                      ? 'text-white bg-gradient-to-r from-purple-500/20 to-cyan-500/20 shadow-lg shadow-purple-500/20' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{route.label}</span>
                  {currentRoute === route.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                className="relative text-white p-2.5 hover:bg-purple-500/20 rounded-xl transition-all duration-300 group"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    size={24} 
                    className={`absolute inset-0 transition-all duration-300 ${
                      mobileMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                    }`}
                  />
                  <X 
                    size={24} 
                    className={`absolute inset-0 transition-all duration-300 ${
                      mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
        mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity duration-500 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col items-center justify-center space-y-3 sm:space-y-2 p-4 sm:p-8 transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          {routes.map((route, index) => (
            <button
              key={route.path}
              onClick={() => handleNavClick(route.path)}
              className={`w-full max-w-sm py-4 sm:py-5 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all duration-500 transform ${
                mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              } ${
                currentRoute === route.path
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-2xl shadow-purple-500/40 scale-105'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white active:scale-95 hover:shadow-xl hover:shadow-purple-500/20'
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {route.label}
            </button>
          ))}
          
          {/* Decorative Elements */}
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
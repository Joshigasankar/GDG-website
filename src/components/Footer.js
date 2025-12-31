import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-purple-500/20 bg-black/50 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              &copy; 2026 GDG on Campus - Sri Sairam Engineering College. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Built with</span>
            <span className="text-red-500">❤️</span>
            <span className="text-sm text-gray-500">by GDG Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
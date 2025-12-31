import React, { useState } from 'react';
import { Linkedin, Mail, Globe, Instagram, MessageCircle } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <RevealOnScroll className="relative min-h-screen flex items-center justify-center px-4 py-32">
      <div className="max-w-2xl mx-auto z-10 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Have questions? We'd love to hear from you. Send us a message!
        </p>

        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-purple-400/40 transition-all">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white transition-all placeholder-gray-500"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white transition-all placeholder-gray-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white transition-all resize-none placeholder-gray-500"
                placeholder="Tell us what's on your mind..."
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-purple-500/30">
            <div className="flex items-center justify-center space-x-2 text-gray-300 mb-6">
              <Mail size={20} className="text-cyan-400" />
              <span>gdg@college.edu</span>
            </div>
            {/* Community Links */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

              {/* Website */}
              <a
                href="https://gdg.community.dev/gdg-on-campus-coimbatore-institute-of-technology-coimbatore-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl 
               bg-gradient-to-r from-purple-500/10 to-cyan-500/10 
               border border-purple-500/30 
               hover:border-cyan-400/50 
               hover:shadow-lg hover:shadow-cyan-500/20 
               transition-all"
              >
                <Globe className="text-cyan-400" />
                <span className="text-gray-300">Website to Join GDG on Campus</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/gdgoncampus_cit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl 
               bg-gradient-to-r from-pink-500/10 to-purple-500/10 
               border border-purple-500/30 
               hover:border-pink-400/50 
               hover:shadow-lg hover:shadow-pink-500/20 
               transition-all"
              >
                <Instagram className="text-pink-400" />
                <span className="text-gray-300">@gdgoncampus_cit</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://chat.whatsapp.com/IQ6BptPIFg85ZB7RdUq0No"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl 
               bg-gradient-to-r from-green-500/10 to-emerald-500/10 
               border border-green-500/30 
               hover:border-green-400/50 
               hover:shadow-lg hover:shadow-green-500/20 
               transition-all"
              >
                <MessageCircle className="text-green-400" />
                <span className="text-gray-300">Join WhatsApp Community</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/gdg-on-campus-coimbatore-institute-of-technology/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl 
               bg-gradient-to-r from-blue-500/10 to-cyan-500/10 
               border border-blue-500/30 
               hover:border-blue-400/50 
               hover:shadow-lg hover:shadow-blue-500/20 
               transition-all"
              >
                <Linkedin className="text-blue-400" />
                <span className="text-gray-300">GDG on Campus – CIT</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default ContactUs;
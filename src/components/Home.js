import React from 'react';
import CountUp from './CountUp';
import RevealOnScroll from './RevealOnScroll';
import RippleButton from './RippleButton';
import Magnet from './Magnet';
import Spline from '@splinetool/react-spline';


const Home = ({ navigate }) => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 px-8 md:px-16 pt-20 pb-20">
      {/* Left Side - Content */}
      <RevealOnScroll className="text-left z-10 w-full md:w-1/2 flex flex-col justify-center space-y-8">
        <div>
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-xs md:text-sm text-cyan-300 font-semibold tracking-wide mb-6">
            Welcome to GDG College Chapter
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent leading-tight">
            Google Developers
          </h1>
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent leading-tight">
            Group
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-xl">
          Build. Learn. Innovate with Google Technologies
        </p>
        
        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
          Join our premier developer community at Coimbatore Institute of Technology. Transform into industry-ready innovators through hands-on technical exploration.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Magnet padding={80} magnetStrength={25}>
            <RippleButton
              onClick={() => navigate('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-xl font-bold text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden text-center"
            >
              <span className="relative z-10">Join the Community</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </RippleButton>
          </Magnet>

          <Magnet padding={60} magnetStrength={30}>
            <RippleButton
              onClick={() => navigate('members')}
              className="px-8 py-4 border-2 border-purple-500 rounded-xl font-bold text-purple-300 hover:bg-purple-500/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 text-center"
            >
              View Team
            </RippleButton>
          </Magnet>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-purple-500/20">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              <CountUp end={500} suffix="+" />
            </div>
            <p className="text-sm text-gray-400 font-medium">Members</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              <CountUp end={50} suffix="+" />
            </div>
            <p className="text-sm text-gray-400 font-medium">Events</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              <CountUp end={20} suffix="+" />
            </div>
            <p className="text-sm text-gray-400 font-medium">Projects</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Right Side - Spline */}
      <div className="w-full md:w-1/2 h-64 md:h-[620px] flex items-center justify-center">
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 p-2 md:p-4 bg-black/10 transform md:scale-95">
          <Spline className="w-full h-full" scene="https://prod.spline.design/oSJ74c7uJAB74swv/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Home;
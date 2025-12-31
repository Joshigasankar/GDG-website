import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import MagicBento from './MagicBento';

const AboutUs = () => {
  return (
    <RevealOnScroll className="relative min-h-screen flex items-center justify-center px-4 py-32">
      <div className="max-w-6xl mx-auto z-10 w-full">

        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Where Campus Curiosity <br />
            Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Global Innovation</span>
          </h1>

          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            GDG On Campus – CIT is a premier developer community at Coimbatore Institute
            of Technology. As part of a global network powered by Google, we are dedicated
            to transforming students into industry-ready innovators through hands-on
            technical exploration.
          </p>

          <p className="text-xl font-semibold text-gray-200">
            Your Launchpad to{" "}
            <span className="text-purple-400">Learn</span>,{" "}
            <span className="text-blue-400">Build</span>, and{" "}
            <span className="text-cyan-400">Grow</span>
          </p>
        </section>

        {/* Identity Section */}
        <section className="py-12 mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-white/90">
            Our Identity: The Core Pillars
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Global Ecosystem</h3>
              <p className="text-gray-300 leading-relaxed">
                Direct access to Google Developer Experts, global campaigns like Cloud
                Study Jams, and a worldwide network.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Branch-Agnostic Growth</h3>
              <p className="text-gray-300 leading-relaxed">
                A cross-disciplinary environment welcoming students from all departments.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-cyan-900/20 to-green-900/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">Open Access Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                Strict no-fee policy for all workshops, hackathons, and certifications.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-12 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="group bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1">
              <h2 className="text-2xl font-bold mb-6 text-blue-300">The Leadership Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                At the heart of our chapter is a structured leadership model designed
                for maximum impact. We act as the professional bridge between the Google
                Developer Groups global program and the Coimbatore Institute of Technology
                student body.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">The Campus Lead</h3>
              <div className="mb-4">
                <strong className="text-white block text-lg">Campus Lead:</strong>
                <span className="text-purple-200">Raj Kishore S (M.Sc Software Systems)</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Responsible for strategic direction, ensuring alignment with global
                standards, and overseeing the performance of our 33-member Board.
              </p>
            </div>
          </div>
        </section>

        {/* Boards Section */}
        <section className="py-12 mb-24 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white/90">
            The Engine Room: Our Specialized Boards
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
            We operate through seven specialized functional units, ensuring professional
            handling of every aspect of our community.
          </p>

          {/* <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {boards.map((board) => (
              <div
                key={board}
                className="w-40 h-40 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center text-center text-sm font-semibold text-gray-200 hover:scale-105 hover:border-purple-400/50 hover:text-purple-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-default p-4 group"
              >
                <span className="group-hover:scale-110 transition-transform">{board}</span>
              </div>
            ))}
          </div> */}
          <div className="mt-16 flex justify-center">
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </div>

        </section>

        {/* Join Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-6 text-white/90">Ready to build the future?</h2>
          <p className="text-gray-300 mb-10 text-lg">
            Join a community of builders, thinkers, and innovators.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 text-green-300 font-semibold hover:border-green-400 hover:text-green-200 hover:bg-green-500/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-300">
              WhatsApp
            </button>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 text-blue-300 font-semibold hover:border-blue-400 hover:text-blue-200 hover:bg-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300">
              LinkedIn
            </button>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 text-purple-300 font-semibold hover:border-purple-400 hover:text-purple-200 hover:bg-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1 transition-all duration-300">
              Instagram
            </button>
          </div>
        </section>

      </div>
    </RevealOnScroll>
  );
};

export default AboutUs;
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Members from './components/Members';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = (route) => {
    if (route !== currentRoute) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentRoute(route);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const renderPage = () => {
    switch(currentRoute) {
      case 'home':
        return <Home navigate={navigate} />;
      case 'about':
        return <AboutUs />;
      case 'members':
        return <Members />;
      case 'contact':
        return <ContactUs />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      <Header />
      <Navigation currentRoute={currentRoute} navigate={navigate} />
      <main className={`relative z-10 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
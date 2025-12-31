import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTrail(prev => [...prev.slice(-5), { x: e.clientX, y: e.clientY, id: Date.now() }]);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .group');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed top-0 left-0 w-6 h-6 border-2 border-cyan-400 rounded-full pointer-events-none z-50 transition-all duration-200 ${
          isHovering ? 'scale-150 border-purple-400' : ''
        }`}
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
          boxShadow: isHovering ? '0 0 20px rgba(34, 211, 238, 0.5)' : '0 0 10px rgba(34, 211, 238, 0.3)',
        }}
      />
      {/* Trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-40 opacity-50"
          style={{
            transform: `translate(${point.x - 4}px, ${point.y - 4}px)`,
            animationDelay: `${index * 0.05}s`,
            opacity: (5 - index) * 0.2,
          }}
        />
      ))}
    </>
  );
};

export default Cursor;
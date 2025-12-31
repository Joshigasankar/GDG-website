import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { User, Linkedin, Instagram } from 'lucide-react';
import './ChromaGrid.css';

// Image component with fallback
const ImageWithFallback = ({ src, alt }) => {
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    setCurrentSrc(src);
    setError(false);
    setAttempt(0);
  }, [src]);

  const getAlternativeUrls = (url) => {
    if (!url || !url.includes("drive.google.com")) return [];
    
    let fileId = null;
    if (url.includes("uc?export=view&id=")) {
      fileId = url.split("uc?export=view&id=")[1]?.split("&")[0];
    } else if (url.includes("drive.google.com/open?id=")) {
      fileId = url.split("drive.google.com/open?id=")[1]?.split("&")[0];
    } else if (url.includes("drive.google.com/file/d/")) {
      fileId = url.split("drive.google.com/file/d/")[1]?.split("/")[0];
    } else if (url.includes("drive.google.com/uc?id=")) {
      fileId = url.split("drive.google.com/uc?id=")[1]?.split("&")[0];
    }
    
    if (!fileId) return [];
    
    return [
      `https://drive.google.com/uc?export=view&id=${fileId}`,
      `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`,
      `https://lh3.googleusercontent.com/d/${fileId}=w1000`,
    ];
  };

  const handleError = () => {
    const alternatives = getAlternativeUrls(src);
    if (alternatives.length > 0 && attempt < alternatives.length - 1) {
      const nextAttempt = attempt + 1;
      setAttempt(nextAttempt);
      setCurrentSrc(alternatives[nextAttempt]);
    } else {
      setError(true);
    }
  };

  if (error || !currentSrc) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1f2937' }}>
        <User size={64} style={{ color: '#4b5563' }} />
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      style={{ 
        width: '80%', 
        height: '120%', 
        objectFit: 'cover',
        objectPosition: 'center 20%',
        display: 'block'
      }}
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      onError={handleError}
    />
  );
};

export const ChromaGrid = ({
  items,
  className = '',
  radius = 300,
  columns = 3,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const data = items || [];

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    
    if (setX.current && setY.current) {
      setX.current(pos.current.x);
      setY.current(pos.current.y);
    }
  }, []);

  const moveTo = (x, y) => {
    if (!pos.current || !setX.current || !setY.current) return;
    
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        if (setX.current && setY.current) {
          setX.current(pos.current.x);
          setY.current(pos.current.y);
        }
      },
      overwrite: true
    });
  };

  const handleMove = (e) => {
    if (!rootRef.current) return;
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    if (fadeRef.current) {
      gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    }
  };

  const handleLeave = () => {
    if (fadeRef.current) {
      gsap.to(fadeRef.current, {
        opacity: 1,
        duration: fadeOut,
        overwrite: true
      });
    }
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleSocialClick = (e, url) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (!data || data.length === 0) {
    return <div>No team members to display</div>;
  }

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        '--r': `${radius}px`,
        '--cols': columns
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          style={{
            '--card-border': c.borderColor || 'transparent',
            '--card-gradient': c.gradient || 'linear-gradient(145deg, #4F46E5, #000)'
          }}
        >
          <div className="chroma-img-wrapper">
            <ImageWithFallback src={c.image} alt={c.title} />
          </div>
          <footer className="chroma-info">
            <div className="chroma-text-content">
              <h3 className="name">{c.title}</h3>
              <p className="role">{c.subtitle}</p>
            </div>
            <div className="chroma-social-icons">
              {c.linkedin && (
                <button
                  onClick={(e) => handleSocialClick(e, c.linkedin)}
                  className="chroma-social-btn"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </button>
              )}
              {c.instagram && (
                <button
                  onClick={(e) => handleSocialClick(e, c.instagram)}
                  className="chroma-social-btn"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </button>
              )}
            </div>
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
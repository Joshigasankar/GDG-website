import React from "react";

const FlowingMenu = ({ items = [], onItemClick }) => {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} onClick={() => onItemClick && onItemClick(item)} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem = ({ link, text, image, onClick }) => {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = y < rect.height / 2 ? "top" : "bottom";

    marqueeRef.current.style.transform = "translate3d(0, 0%, 0)";
    marqueeInnerRef.current.style.transform = "translateX(0)";
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = y < rect.height / 2 ? "top" : "bottom";

    marqueeRef.current.style.transform = `translate3d(0, ${edge === "top" ? "-101%" : "101%"}, 0)`;
    marqueeInnerRef.current.style.transform = `translateX(0)`;
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span>{text}</span>
        <div
          className="marquee__img"
          style={{ backgroundImage: `url(${image})` }}
        />
      </React.Fragment>
    ));
  }, [text, image]);

  return (
    <>
      <style>{`
        .menu-wrap {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .menu {
          display: flex;
          flex-direction: column;
          height: 100%;
          margin: 0;
          padding: 0;
        }

        .menu__item {
          flex: 1;
          position: relative;
          overflow: hidden;
          text-align: center;
          box-shadow: 0 -1px #fff;
        }

        .menu__item-link {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          position: relative;
          cursor: pointer;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;
          font-weight: 600;
          color: #fff;
          font-size: 4vh;
          transition: color 0.6s ease;
        }

        .menu__item-link:hover {
          color: #060010;
        }

        .menu__item-link:focus:not(:focus-visible) {
          color: #fff;
        }

        .marquee {
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background: #fff;
          transform: translate3d(0, 101%, 0);
          transition: transform 0.6s ease;
        }

        .marquee__inner-wrap {
          height: 100%;
          width: 200%;
          will-change: transform;
          animation: marquee 15s linear infinite;
        }

        .marquee span {
          color: #060010;
          white-space: nowrap;
          text-transform: uppercase;
          font-weight: 400;
          font-size: 4vh;
          line-height: 1.2;
          padding: 1vh 1vw 0;
        }

        .marquee__img {
          width: 200px;
          height: 7vh;
          margin: 2em 2vw;
          padding: 1em 0;
          border-radius: 50px;
          background-size: cover;
          background-position: 50% 50%;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
      <div className="menu__item" ref={itemRef}>
        <button
          className="menu__item-link"
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </button>
        <div className="marquee" ref={marqueeRef}>
          <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
            <div className="marquee__inner" aria-hidden="true">
              {repeatedMarqueeContent}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowingMenu;
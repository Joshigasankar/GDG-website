import React from "react";

const ElectricBorder = ({
  color = "#5227FF",
  speed = 1,
  chaos = 0.5,
  thickness = 2,
  className = "",
  style = {},
  noPadding = false,
  children,
}) => {
  const borderStyle = {
    position: "relative",
    padding: noPadding ? "0px" : `${thickness}px`,
    background: "transparent",
    borderRadius: "10px",
    overflow: "hidden",
    ...style,
  };

  const innerStyle = {
    background: "inherit",
    borderRadius: "8px",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <style>{`
        .electric-border {
          position: relative;
        }

        .electric-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, ${color}, transparent, ${color}, transparent);
          background-size: 400% 400%;
          animation: electric-flow ${2 / speed}s linear infinite;
          border-radius: inherit;
          padding: ${thickness}px;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
        }

        @keyframes electric-flow {
          0% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
      <div className={`electric-border ${className}`} style={borderStyle}>
        <div style={innerStyle}>
          {children}
        </div>
      </div>
    </>
  );
};

export default ElectricBorder;
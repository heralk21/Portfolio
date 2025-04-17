import React from 'react';

const HighlightedText = ({ children, color = "#53b948" }: {
  children: React.ReactNode,
  color?: string
}) => {
  return (
    <span 
      className="relative inline-block font-semibold highlight-animation"
      style={{ color }}
    >
      <style jsx>{`
        .highlight-animation {
          position: relative;
        }
        .highlight-animation::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30%;
          background-color: ${color};
          opacity: 0.15;
          z-index: -1;
          transform-origin: bottom;
          animation: pulse 3s infinite alternate;
        }
        @keyframes pulse {
          0% {
            opacity: 0.1;
            transform: scaleY(0.8);
          }
          100% {
            opacity: 0.2;
            transform: scaleY(1);
          }
        }
      `}</style>
      {children}
    </span>
  );
};

export default HighlightedText; 
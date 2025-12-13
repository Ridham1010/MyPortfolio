import React, { useEffect, useState } from 'react';
import './Customcursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailing, setTrailing] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Add a slight delay/smooth effect to the trailing circle
  useEffect(() => {
    const interval = setInterval(() => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2, // 0.2 = speed (lower is smoother/slower)
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
    }, 10);
    return () => clearInterval(interval);
  }, [position]);

  return (
    <>
      {/* The main pointer (small dot) */}
      <div 
        className="cursor-dot" 
        style={{ left: `${position.x}px`, top: `${position.y}px` }} 
      />
      {/* The fluid follower (large circle) */}
      <div 
        className="cursor-outline" 
        style={{ left: `${trailing.x}px`, top: `${trailing.y}px` }} 
      />
    </>
  );
};

export default CustomCursor;
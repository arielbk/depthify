import React, { useState, useEffect } from 'react';

const ParallaxItem = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState();

  const saveScrollPosition = () => {
    setScrollPosition({ x: window.scrollX, y: window.scrollY });
  }

  useEffect(() => {
    window.addEventListener('scroll', saveScrollPosition);
    return () => window.removeEventListener('scroll', saveScrollPosition);
  }, []);

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  const translateY = scrollPosition && scrollPosition.y ? `-${scrollPosition.y * 0.5}px` : 0;

  return (
    <div style={{ transform: `translateY(${translateY})` }}>
      {children}
    </div>
  );
}

export default ParallaxItem;

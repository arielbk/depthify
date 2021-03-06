import React, { useState, useEffect } from 'react';

const ParallaxItem = ({ children, depth, contain, shadowEffect }) => {
  const [scrollPosition, setScrollPosition] = useState();

  const saveScrollPosition = () => {
    setScrollPosition({ x: window.pageXOffset, y: window.pageYOffset });
  }

  useEffect(() => {
    window.addEventListener('scroll', saveScrollPosition);
    return () => window.removeEventListener('scroll', saveScrollPosition);
  }, []);

  useEffect(() => {
    console.count(scrollPosition);
  }, [scrollPosition]);

  const translateY = scrollPosition && scrollPosition.y ? `-${scrollPosition.y * 0.25 * depth}px` : 0;

  const containerStyle = {
    transform: `translateY(${translateY})`,
  }

  if (contain) {
    containerStyle.width = '65%';
    containerStyle.background = '#fff';
    containerStyle.margin = '0 auto';
    containerStyle.padding = '3rem 4rem';
    containerStyle.borderRadius = 12;
    containerStyle.color = '#555';
    containerStyle.lineHeight = 1.5;
    containerStyle.minWidth = 400;
    containerStyle.transform = `scale(${1 + depth * 0.01}) translateY(${translateY})`;
    // containerStyle.position = 'absolute';
  }
  if (shadowEffect) {
    const shadowAmount = scrollPosition ? 15 - scrollPosition.y * 0.06 : 15;
    containerStyle.boxShadow = `0 ${shadowAmount}px 25px rgba(0,0,0,0.1)`
  }

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
}

export default ParallaxItem;

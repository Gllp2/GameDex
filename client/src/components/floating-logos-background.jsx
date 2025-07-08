
import React from "react";
import "../styles/floating-logos-background.css";

const logoSources = [
  "/logos/eg.png",
  "/logos/steam.png",
  "/logos/ea.png",
  "/logos/ps.png",
  "/logos/xbox.svg",
  "/logos/hb.png"
];

const getRandom = (min, max) => Math.random() * (max - min) + min;

const FloatingLogosBackground = ({ count = 100 }) => {
  const positions = [];

  const floatingLogos = Array.from({ length: count }).map((_, index) => {
    const src = logoSources[Math.floor(Math.random() * logoSources.length)];

    let top, left;
    let tries = 0;

    
    do {
      top = getRandom(5, 90);
      left = getRandom(5, 90);
      tries++;
    } while (
      positions.some(
        (pos) =>
          Math.abs(pos.top - top) < 10 && Math.abs(pos.left - left) < 10
      ) &&
      tries < 20
    );

    positions.push({ top, left });

    const size = getRandom(40, 80); // px
    const rotation = getRandom(0, 360);
    let opacity = getRandom(0.1, 0.5);
    if (src.endsWith("ps.png")) {
  opacity = 0.6; 
}
    const duration = getRandom(8, 16);
    const delay = getRandom(0, 6);

    const style = {
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      transform: `rotate(${rotation}deg)`,
      opacity,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    };

    return (
      <img
        key={index}
        src={src}
        alt="floating-logo"
        className="floating-logo"
        style={style}
      />
    );
  });

  return <div className="floating-logos-bg">{floatingLogos}</div>;
};

export default FloatingLogosBackground;
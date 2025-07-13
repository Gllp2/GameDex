import React, { useState } from "react";
import "../styles/banner-changer.css";

const bannerImages = [
  "marvel.webp",
  "mc.avif",
  "op.jpg",
  "sw.jpg",
  "terraria.png",
];

export default function BannerChanger({ children }) {
  const [current, setCurrent] = useState(0);

  function changeBanner() {
    let next;
    do {
      next = Math.floor(Math.random() * bannerImages.length);
    } while (next === current && bannerImages.length > 1);
    setCurrent(next);
  }

  return (
    <div
      className="banner-background"
      style={{
        backgroundImage: `url(/banner/${bannerImages[current]})`,
      }}
    >
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <button
          onClick={changeBanner}
          className="banner-changer-button-topright"
          aria-label="Trocar banner"
          style={{ backgroundColor: "transparent", marginTop: "16px" }}
        >
          🔄
        </button>
        {children}
      </div>
    </div>
  );
}

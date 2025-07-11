import React, { useState } from "react";
import "../styles/LibraryFilters.css";

const LibraryFilters = () => {
  const { order, platforms, price } = filters;

  const handleOrderChange = (e) => {
    onChange({ ...filters, order: e.target.value });
  };

  const handlePlatformChange = (e) => {
    onChange({
      ...filters,
      platforms: {
        ...platforms,
        [e.target.name]: e.target.checked,
      },
    });
  };

   const handlePriceChange = (e) => {
    onChange({ ...filters, price: e.target.value });
  };

  return (
    <div className="library-filters">
      {/* Ordem Dropdown */}
      <div className="dropdown">
        <label>Ordem</label>
        <select value={order} onChange={handleOrderChange}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="€⬆">€⬆</option>
          <option value="€⬇">€⬇</option>
          <option value="🕑⬆">🕑⬆</option>
          <option value="🕑⬇">🕑⬇</option>
        </select>
      </div>

      {/* Plataforma Dropdown */}
      <div className="dropdown">
        <label>Plataforma</label>
        <div className="dropdown-checkboxes">
          {Object.keys(platforms).map((platform) => (
            <label key={platform}>
              <input
                type="checkbox"
                name={platform}
                checked={platforms[platform]}
                onChange={handlePlatformChange}
              />
              {platform}
            </label>
          ))}
        </div>
      </div>

      {/* Preço Dropdown */}
      <div className="dropdown">
        <label>Preço</label>
        <select value={price} onChange={handlePriceChange}>
          <option value="<10€">&lt;10€</option>
          <option value="10-30€">10-30€</option>
          <option value="30-50€">30-50€</option>
          <option value=">50€">&gt;50€</option>
        </select>
      </div>
    </div>
  );
};

export default LibraryFilters;
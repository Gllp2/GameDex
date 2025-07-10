import React, { useState } from "react";
import "../styles/LibraryFilters.css";

const LibraryFilters = () => {
  const [order, setOrder] = useState("A-Z");
  const [platforms, setPlatforms] = useState({
    PS: false,
    Steam: false,
    Epic: false,
    EA: false,
    Xbox: false,
  });
  const [price, setPrice] = useState("<10€");

  const handlePlatformChange = (e) => {
    setPlatforms({
      ...platforms,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className="library-filters">
      {/* Ordem Dropdown */}
      <div className="dropdown">
        <label>Ordem</label>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
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
          <label>
            <input
              type="checkbox"
              name="PS"
              checked={platforms.PS}
              onChange={handlePlatformChange}
            />
            PS
          </label>
          <label>
            <input
              type="checkbox"
              name="Steam"
              checked={platforms.Steam}
              onChange={handlePlatformChange}
            />
            Steam
          </label>
          <label>
            <input
              type="checkbox"
              name="Epic"
              checked={platforms.Epic}
              onChange={handlePlatformChange}
            />
            Epic
          </label>
          <label>
            <input
              type="checkbox"
              name="EA"
              checked={platforms.EA}
              onChange={handlePlatformChange}
            />
            EA
          </label>
          <label>
            <input
              type="checkbox"
              name="Xbox"
              checked={platforms.Xbox}
              onChange={handlePlatformChange}
            />
            Xbox
          </label>
        </div>
      </div>

      {/* Preço Dropdown */}
      <div className="dropdown">
        <label>Preço</label>
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
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
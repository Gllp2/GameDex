import React, { useState, useRef, useEffect } from 'react';
import "../styles/LibraryFilters.css";

const LibraryFilters = ({ filters, onChange }) => {
  const { order, platforms, price } = filters;
  const [platformOpen, setPlatformOpen] = useState(false);
  const dropdownRef = useRef();

  // Helper to determine if all platforms are selected
  const allSelected = Object.values(platforms).every(Boolean);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPlatformOpen(false);
      }
    }
    if (platformOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [platformOpen]);

  const handleOrderChange = (e) => {
    onChange({ ...filters, order: e.target.value });
  };

  const handlePlatformChange = (e) => {
    const { name, checked } = e.target;
    if (name === "all") {
      // Set all platforms to checked/unchecked
      const updated = {};
      Object.keys(platforms).forEach(p => updated[p] = checked);
      onChange({ ...filters, platforms: updated });
    } else {
      onChange({
        ...filters,
        platforms: {
          ...platforms,
          [name]: checked,
        },
      });
    }
  };

  const handlePriceChange = (e) => {
    onChange({ ...filters, price: e.target.value });
  };

  return (
    <div className="library-filters">
      {/* Ordem Dropdown */}
      <div className="dropdown">
        <label>Order</label>
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
      <div className="dropdown" ref={dropdownRef}>
        <label>Plataforma</label>
        <button
          type="button"
          className="platform-dropdown-toggle"
          onClick={() => setPlatformOpen((v) => !v)}
          aria-expanded={platformOpen}
        >
          {allSelected
            ? "Todas"
            : Object.keys(platforms).filter(p => platforms[p]).join(', ') || "Selecionar..."}
          <span style={{marginLeft: 8}}>{platformOpen ? "▲" : "▼"}</span>
        </button>
        {platformOpen && (
          <div className="platform-dropdown-menu">
            <label className="platform-checkbox-label">
              <input
                type="checkbox"
                name="all"
                checked={allSelected}
                onChange={handlePlatformChange}
              />
              All
            </label>
            {Object.keys(platforms).map((platform) => (
              <label key={platform} className="platform-checkbox-label">
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
        )}
      </div>

      {/* Preço Dropdown */}
      <div className="dropdown">
        <label>Price</label>
        <select value={price
        
        } onChange={handlePriceChange}>
          <option value="<10€">&lt;10€</option>
          <option value="all">All prices</option>
          <option value="10-30€">10-30€</option>
          <option value="30-50€">30-50€</option>
          <option value=">50€">&gt;50€</option>
        </select>
      </div>
    </div>
  );
};

export default LibraryFilters;
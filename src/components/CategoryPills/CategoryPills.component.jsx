import React from 'react';

export default function CategoryPills({ categories, activeCategory, onSelectCategory }) {
  if (!categories || !categories.length) return null;

  return (
    <div className="rh-filter-pills-wrap no-scrollbar">
      {categories.map((cat) => {
        const IconComponent = cat.icon;
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            type="button"
            className={`rh-filter-pill ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            <span className="rh-pill-icon-circle">
              {IconComponent && <IconComponent size={14} />}
            </span>
            <span className="rh-pill-label">{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}

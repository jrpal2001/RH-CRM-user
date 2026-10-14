import React from 'react';
import { LayoutGrid, ShieldCheck, Palmtree, Trees, Landmark } from 'lucide-react';

const iconMap = {
  Grid: LayoutGrid,
  ShieldCheck: ShieldCheck,
  Palmtree: Palmtree,
  Trees: Trees,
  Landmark: Landmark
};

export default function FilterPills({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="rh-filter-pills-wrap no-scrollbar">
      {categories.map((cat) => {
        const IconComponent = iconMap[cat.icon] || LayoutGrid;
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            type="button"
            className={`rh-filter-pill ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            <span className="rh-pill-icon-circle">
              <IconComponent size={14} />
            </span>
            <span className="rh-pill-label">{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PackageCard({
  pkg,
  onSelect,
  isFavorite,
  onToggleFavorite,
  featured = false
}) {
  const navigate = useNavigate();

  const handleSelect = () => {
    if (onSelect) onSelect(pkg);
    navigate(`/packages/${pkg.id}`);
  };

  return (
    <div
      className={`rh-package-card ${featured ? 'featured' : ''}`}
      onClick={handleSelect}
    >
      {/* Corner-bleeding background image */}
      <img
        src={pkg.heroImage}
        alt={pkg.title}
        className="rh-card-corner-img"
        loading="lazy"
      />

      {/* Gradient wash from top to content area */}
      <div className="rh-card-corner-scrim"></div>

      {/* Card Content - sits at bottom over gradient */}
      <div className="rh-card-body">
        <h3 className="rh-card-title">{pkg.title}</h3>
        <p className="rh-card-desc">
          {pkg.subtitle || pkg.description}
        </p>

        <div className="rh-card-action">
          <span>Explore</span>
          <ArrowRight size={16} className="rh-action-arrow" />
        </div>
      </div>
    </div>
  );
}


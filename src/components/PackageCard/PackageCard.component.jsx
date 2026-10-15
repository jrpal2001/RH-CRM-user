import React from 'react';
import { Star, Clock, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PackageCard({
  pkg,
  onSelect,
  isFavorite,
  onToggleFavorite,
  featured = false
}) {
  return (
    <div
      className={`rh-package-card ${featured ? 'featured' : ''}`}
      onClick={() => onSelect(pkg)}
    >
      {/* Image Banner */}
      <div className="rh-card-img-wrap">
        <img
          src={pkg.heroImage}
          alt={pkg.title}
          className="rh-card-img"
          loading="lazy"
        />

        {/* Gradient Scrim */}
        <div className="rh-card-scrim"></div>

        {/* Top Badges */}
        <div className="rh-card-top-badges">
          <div className="rh-country-chip">
            <span className="rh-flag">{pkg.flag}</span>
            <span className="rh-country-name">{pkg.country}</span>
          </div>

          <button
            type="button"
            className={`rh-favorite-btn ${isFavorite ? 'favorited' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(pkg.id);
            }}
            title="Save to favorites"
          >
            <Heart size={16} fill={isFavorite ? '#ef4444' : 'none'} color={isFavorite ? '#ef4444' : '#ffffff'} />
          </button>
        </div>

        {/* Rating Floating Badge */}
        <div className="rh-rating-badge">
          <Star size={13} fill="#fbbf24" color="#fbbf24" />
          <span className="rh-rating-score">{pkg.rating}</span>
          <span className="rh-reviews-count">({pkg.reviewsCount})</span>
        </div>

        {/* Bottom Image Info for featured look */}
        {featured && (
          <div className="rh-featured-overlay-content">
            <span className="rh-featured-badge">{pkg.badge}</span>
            <h3 className="rh-featured-title">{pkg.title}</h3>
            <div className="rh-featured-meta">
              <span><Clock size={13} /> {pkg.duration}</span>
              <span>•</span>
              <span>{pkg.weather}</span>
            </div>
          </div>
        )}
      </div>

      {/* Card Body */}
      {!featured && (
        <div className="rh-card-body">
          <div className="rh-card-header-row">
            <h3 className="rh-card-title">{pkg.title}</h3>
            {pkg.category === 'visa' && (
              <span className="rh-visa-badge" title="Official Visa Assistance">
                <ShieldCheck size={13} /> Visa
              </span>
            )}
          </div>

          <p className="rh-card-subtitle">{pkg.subtitle}</p>

          {/* Quick Metrics */}
          <div className="rh-card-metrics-row">
            <span className="rh-metric-chip">
              <Clock size={12} /> {pkg.duration}
            </span>
            <span className="rh-metric-chip">
              {pkg.distance}
            </span>
          </div>

          {/* Price & Action Row */}
          <div className="rh-card-footer-row">
            <div className="rh-price-block">
              <span className="rh-price-currency">$</span>
              <span className="rh-price-amount">{pkg.price.toLocaleString()}</span>
              <span className="rh-price-label">/ person</span>
            </div>

            <button
              type="button"
              className="rh-card-action-btn"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(pkg);
              }}
            >
              <span>Explore</span>
              <div className="rh-action-arrow-circle">
                <ArrowRight size={13} />
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

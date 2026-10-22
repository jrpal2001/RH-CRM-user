import React from 'react';
import { ArrowRight, Star, Clock, ShieldCheck, Palmtree, Sparkles, MapPin, Check } from 'lucide-react';
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

  const isVisa = pkg.category === 'visa';
  const highlights = pkg.tags ? pkg.tags.slice(0, 2) : [];

  return (
    <div
      className={`rh-luxe-travel-card ${featured ? 'featured' : ''}`}
      onClick={handleSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleSelect();
        }
      }}
    >
      {/* 1. Cinematic Media Container */}
      <div className="rh-luxe-media-frame">
        <img
          src={pkg.heroImage}
          alt={pkg.title}
          className="rh-luxe-hero-img"
          loading="lazy"
        />
        {/* Subtle dual gradient scrim */}
        <div className="rh-luxe-scrim" />

        {/* Top Floating Glass Badges */}
        <div className="rh-luxe-media-top">
          <div className="rh-luxe-destination-tag">
            {pkg.flag && <span className="rh-luxe-flag">{pkg.flag}</span>}
            <span className="rh-luxe-dest-text">{pkg.country || (isVisa ? 'GLOBAL JURISDICTION' : 'DESTINATION')}</span>
          </div>

          {pkg.rating && (
            <div className="rh-luxe-rating-pill">
              <Star size={11} className="rh-luxe-star-icon" />
              <span>{pkg.rating}</span>
            </div>
          )}
        </div>

        {/* Bottom Media Subtle Badge */}
        <div className="rh-luxe-media-bottom">
          <span className={`rh-luxe-category-pill ${isVisa ? 'visa' : 'holiday'}`}>
            {isVisa ? <ShieldCheck size={11} /> : <Sparkles size={11} />}
            <span>{pkg.badge || (isVisa ? 'Fast-Track Dossier' : 'Curated Luxury')}</span>
          </span>

          {pkg.duration && (
            <span className="rh-luxe-duration-pill">
              <Clock size={10} />
              <span>{pkg.duration}</span>
            </span>
          )}
        </div>
      </div>

      {/* 2. Refined Luxury Card Body */}
      <div className="rh-luxe-card-body">
        {/* Eyebrow & Title */}
        <div className="rh-luxe-title-section">
          <span className={`rh-luxe-eyebrow ${isVisa ? 'visa' : 'holiday'}`}>
            {isVisa ? 'CONSULAR VISA DESK' : 'SIGNATURE ESCAPE'}
          </span>
          <h3 className="rh-luxe-title" title={pkg.title}>
            {pkg.title}
          </h3>
          <p className="rh-luxe-subtitle">
            {pkg.subtitle || pkg.description}
          </p>
        </div>

        {/* Classy Highlights Chips */}
        {highlights.length > 0 && (
          <div className="rh-luxe-highlights-row">
            {highlights.map((tag, i) => (
              <span key={i} className="rh-luxe-chip">
                <span className="rh-luxe-chip-dot"></span>
                <span>{tag}</span>
              </span>
            ))}
          </div>
        )}

        {/* 3. Classy Footer: Price & Luxury CTA Pill */}
        <div className="rh-luxe-footer">
          <div className="rh-luxe-price-wrap">
            <span className="rh-luxe-price-label">INVESTMENT</span>
            <div className="rh-luxe-price-line">
              {pkg.price ? (
                <>
                  <span className="rh-luxe-price-amount">₹{pkg.price.toLocaleString('en-IN')}</span>
                  <span className="rh-luxe-price-unit">/{isVisa ? 'case' : 'guest'}</span>
                </>
              ) : (
                <span className="rh-luxe-price-concierge">Concierge Clearance</span>
              )}
            </div>
          </div>

          <div className="rh-luxe-action-btn">
            <span>Explore</span>
            <ArrowRight size={13} className="rh-luxe-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

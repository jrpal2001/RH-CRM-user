import React from 'react';
import { Palmtree, Compass, Sun, MapPin, Sparkles, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import PackageCard from '../../components/PackageCard/PackageCard.component';
import { useApp } from '../../context/AppContext';

export const HolidayPackagesView = () => {
  const { packages, favorites, toggleFavorite } = useApp();

  const holidayPackages = packages.filter((pkg) => pkg.category === 'holidays');

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      <div className="rh-section-header-row">
        <div>
          <div className="rh-eyebrow-capsule">
            <span className="rh-eyebrow-dot"></span>
            <span className="rh-section-eyebrow">GLOBAL DESTINATIONS</span>
          </div>
          <h1 className="rh-page-main-title">Curated Holiday Packages</h1>
          <p className="rh-section-desc">Handcrafted luxury retreats, 5-star private suites, and seamless concierge itineraries.</p>
        </div>
      </div>

      {/* Holiday Hero Banner */}
      <div className="rh-holiday-feature-banner">
        <div className="rh-holiday-banner-scrim"></div>
        <div className="rh-holiday-feat-left">
          <div className="rh-holiday-feat-badge">
            <Compass size={13} />
            <span>ALL-INCLUSIVE LUXURY & CONCIERGE</span>
          </div>
          <h2>Unveil The World's Most Pristine Destinations</h2>

          <div className="rh-banner-feature-pills">
            <span className="rh-banner-pill">
              <Sparkles size={12} />
              <span>5-Star Handpicked Lodging</span>
            </span>
            <span className="rh-banner-pill">
              <ShieldCheck size={12} />
              <span>Fast-Track Visa Filing Included</span>
            </span>
            <span className="rh-banner-pill">
              <Award size={12} />
              <span>24/7 Dedicated Travel Specialist</span>
            </span>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="rh-packages-grid full-width">
        {holidayPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            isFavorite={favorites.includes(pkg.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default HolidayPackagesView;

import React from 'react';
import { Palmtree, Compass, Sun, MapPin } from 'lucide-react';
import PackageCard from '../../components/PackageCard/PackageCard.component';
import { useApp } from '../../context/AppContext';

export const HolidayPackagesView = () => {
  const { packages, favorites, toggleFavorite, setSelectedPackage } = useApp();

  const holidayPackages = packages.filter((pkg) => pkg.category === 'holidays');

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      <div className="rh-section-header-row">
        <div>
          <h1 className="rh-page-main-title">Curated Holiday Packages</h1>
          <p className="rh-page-main-desc">
            Luxury retreats, alpine chalet experiences, and all-inclusive corporate retreats with visa support.
          </p>
        </div>

        <div className="rh-active-count-chip">
          <Palmtree size={15} />
          <span>{holidayPackages.length} Destinations</span>
        </div>
      </div>

      {/* Holiday Hero Banner */}
      <div className="rh-holiday-feature-banner">
        <div className="rh-holiday-feat-left">
          <div className="rh-holiday-feat-badge">
            <Compass size={14} />
            <span>ALL-INCLUSIVE LUXURY & ADVENTURE</span>
          </div>
          <h2>Unveil The World's Most Pristine Destinations</h2>
          <p>
            From private Fijian lagoons to Austrian glacier peaks and Norwegian fjords. Each tour includes flights, 5-star accommodations, and visa fast-tracking.
          </p>
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
            onSelect={(p) => setSelectedPackage(p)}
          />
        ))}
      </div>
    </div>
  );
};

export default HolidayPackagesView;

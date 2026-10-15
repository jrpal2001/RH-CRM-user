import React from 'react';
import { ShieldCheck, Zap, Clock, Globe } from 'lucide-react';
import PackageCard from '../../components/PackageCard/PackageCard.component';
import { useApp } from '../../context/AppContext';

export const VisaPackagesView = () => {
  const { packages, favorites, toggleFavorite, setSelectedPackage } = useApp();

  const visaPackages = packages.filter((pkg) => pkg.category === 'visa');

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      <div className="rh-section-header-row">
        <div>
          <h1 className="rh-page-main-title">Fast-Track Visa Services</h1>
          <p className="rh-page-main-desc">
            Government-approved digital visa filing, priority embassy appointments, and consular clearance.
          </p>
        </div>

        <div className="rh-active-count-chip">
          <ShieldCheck size={15} />
          <span>{visaPackages.length} Visa Services</span>
        </div>
      </div>

      {/* Featured Banner */}
      <div className="rh-visa-feature-banner">
        <div className="rh-visa-feat-left">
          <div className="rh-visa-feat-badge">
            <Zap size={14} />
            <span>99.4% EMBASSY APPROVAL RATE</span>
          </div>
          <h2>Guaranteed Priority Visa Appointments</h2>
          <p>
            Our dedicated immigration compliance officers handle complete dossier preparation, translations, flight & hotel bookings, and mock interview coaching.
          </p>
        </div>
      </div>

      {/* Visa Packages Grid */}
      <div className="rh-packages-grid full-width">
        {visaPackages.map((pkg) => (
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

export default VisaPackagesView;

import React from 'react';
import { ShieldCheck, Zap, Clock, Globe, Award, CheckCircle2, FileCheck } from 'lucide-react';
import PackageCard from '../../components/PackageCard/PackageCard.component';
import { useApp } from '../../context/AppContext';

export const VisaPackagesView = () => {
  const { packages, favorites, toggleFavorite } = useApp();

  const visaPackages = packages.filter((pkg) => pkg.category === 'visa');

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      <div className="rh-section-header-row">
        <div>
          <div className="rh-eyebrow-capsule">
            <span className="rh-eyebrow-dot"></span>
            <span className="rh-section-eyebrow">CONSULAR SERVICES</span>
          </div>
          <h1 className="rh-page-main-title">Fast-Track Visa Services</h1>
          <p className="rh-section-desc">Accredited diplomatic filings with guaranteed biometric slots and end-to-end documentation audit.</p>
        </div>
      </div>

      {/* Visa Hero Banner */}
      <div className="rh-holiday-feature-banner visa-banner">
        <div className="rh-holiday-banner-scrim visa"></div>
        <div className="rh-holiday-feat-left">
          <div className="rh-holiday-feat-badge visa">
            <ShieldCheck size={13} />
            <span>ACCREDITED EMBASSY CONCIERGE</span>
          </div>
          <h2>Global Visa Filings with 99.4% Approval Rate</h2>
          {/* <p>
            Avoid bureaucratic delays with our end-to-end consular submission desk. We verify documents, lock priority biometric slots, and fast-track approvals.
          </p> */}

          <div className="rh-banner-feature-pills">
            <span className="rh-banner-pill">
              <CheckCircle2 size={12} />
              <span>99.4% Historical Approval</span>
            </span>
            <span className="rh-banner-pill">
              <Zap size={12} />
              <span>48-Hour Rapid Audit</span>
            </span>
            <span className="rh-banner-pill">
              <FileCheck size={12} />
              <span>Official Diplomatic Formats</span>
            </span>
          </div>
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
          />
        ))}
      </div>
    </div>
  );
};

export default VisaPackagesView;

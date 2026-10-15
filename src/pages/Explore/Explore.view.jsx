import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Download } from 'lucide-react';
import CategoryPills from '../../components/CategoryPills/CategoryPills.component';
import PackageCard from '../../components/PackageCard/PackageCard.component';
import StatusStepper from '../../components/StatusStepper/StatusStepper.component';
import DocumentCard from '../../components/DocumentCard/DocumentCard.component';
import { useApp } from '../../context/AppContext';
import ROUTES from '../../config/routes';

export const ExploreView = () => {
  const navigate = useNavigate();
  const {
    user,
    applications,
    filteredPackages,
    categoryPills,
    activeCategory,
    setActiveCategory,
    favorites,
    toggleFavorite,
    setSelectedPackage,
    setIsTrackLookupOpen,
    allUserDocuments,
    showToast
  } = useApp();

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      {/* Widescreen Hero Banner (Inspiration Screen 1) */}
      <div className="rh-hero-banner-card">
        <img
          src="https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1600&q=80"
          alt="Norway travel wonders"
          className="rh-hero-banner-bg"
        />
        <div className="rh-hero-scrim-gradient"></div>

        <div className="rh-hero-content">
          <div className="rh-hero-country-pill">
            <span>🇳🇴 NORWAY</span>
          </div>
          <h1 className="rh-hero-headline">
            Unveil The<br />Travel Wonders
          </h1>
          <p className="rh-hero-tagline">
            Fast-track Schengen visa & luxury fjord holiday packages curated by RH Global CRM.
          </p>

          <div className="rh-hero-btn-row">
            <button
              type="button"
              className="rh-hero-explore-btn"
              onClick={() => {
                const norwayPkg = filteredPackages.find((p) => p.country === 'Norway') || filteredPackages[0];
                setSelectedPackage(norwayPkg);
              }}
            >
              <span>Explore Package</span>
              <div className="rh-hero-badge-circle">
                <ArrowRight size={18} />
              </div>
            </button>

            <button
              type="button"
              className="rh-hero-ghost-btn"
              onClick={() => navigate(ROUTES.PACKAGES)}
            >
              View All Destinations
            </button>
          </div>
        </div>
      </div>

      {/* Desktop 2-Column Section: Active Applications + Quick Actions */}
      <div className="rh-explore-layout-grid">
        {/* Left Column: Active Applications & Live Stepper */}
        <div className="rh-explore-main-col">
          {user && applications.length > 0 && (
            <div className="rh-section-box">
              <div className="rh-section-header-row">
                <div>
                  <h2 className="rh-section-title">Active Applications & Bookings</h2>
                  <p className="rh-section-desc">Real-time status updates from immigration and tour ops</p>
                </div>
                <button
                  type="button"
                  className="rh-section-view-all"
                  onClick={() => navigate(ROUTES.STATUS)}
                >
                  All Applications ({applications.length}) →
                </button>
              </div>

              <StatusStepper
                application={applications[0]}
                onSelectDocument={() => navigate(ROUTES.DOWNLOADS)}
              />
            </div>
          )}

          {/* Category Filter Pills (Inspiration Screen 2) */}
          <div className="rh-section-box">
            <div className="rh-section-header-row">
              <div>
                <h2 className="rh-section-title">Find your favorite place</h2>
                <p className="rh-section-desc">Select travel categories, visa services, and holiday styles</p>
              </div>
            </div>

            <CategoryPills
              categories={categoryPills}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />

            {/* Curated Packages Grid */}
            <div className="rh-packages-grid">
              {filteredPackages.map((pkg) => (
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
        </div>

        {/* Right Column (Desktop Sidebar / Mobile Stacking) */}
        <div className="rh-explore-side-col">
          {/* Quick Tracking Card */}
          <div className="rh-side-quick-box">
            <div className="rh-side-box-header">
              <ShieldCheck size={20} className="rh-side-icon" />
              <h4>Quick Visa Tracker</h4>
            </div>
            <p>Track any application reference without signing in or verify passport status.</p>
            <button
              type="button"
              className="rh-pill-btn rh-quick-track-btn"
              onClick={() => setIsTrackLookupOpen(true)}
              style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
            >
              Track Reference ID
            </button>
          </div>

          {/* Fast Downloads Widget */}
          {user && allUserDocuments.length > 0 && (
            <div className="rh-side-quick-box" style={{ marginTop: '16px' }}>
              <div className="rh-side-box-header">
                <Download size={20} className="rh-side-icon" />
                <h4>Quick Downloads</h4>
              </div>
              <p>Official grant letter & vouchers ready to save.</p>
              <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {allUserDocuments.slice(0, 2).map((doc) => (
                  <DocumentCard
                    key={doc.id}
                    doc={doc}
                    appName={doc.appName}
                    countryFlag={doc.flag}
                    onDownloadSuccess={(name) => showToast(`Downloaded: ${name}`)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreView;

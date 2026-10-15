import React from 'react';
import CategoryPills from '../../components/CategoryPills/CategoryPills.component';
import PackageCard from '../../components/PackageCard/PackageCard.component';
import { useApp } from '../../context/AppContext';

export const PackagesView = () => {
  const {
    filteredPackages,
    categoryPills,
    activeCategory,
    setActiveCategory,
    favorites,
    toggleFavorite,
    setSelectedPackage
  } = useApp();

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      <div className="rh-section-header-row">
        <div>
          <h1 className="rh-page-main-title">Visa & Holiday Packages</h1>
          <p className="rh-page-main-desc">
            Curated worldwide holidays, luxury adventures, and fast-track embassy visa services.
          </p>
        </div>
      </div>

      {/* Filter Pills from config */}
      <CategoryPills
        categories={categoryPills}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Full Responsive Packages Grid */}
      <div className="rh-packages-grid full-width">
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
  );
};

export default PackagesView;

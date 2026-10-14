import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Header from './Header';
import BottomNav from './BottomNav';
import PackageDetailModal from '../modals/PackageDetailModal';
import TrackLookupModal from '../modals/TrackLookupModal';
import LoginModal from '../modals/LoginModal';
import { useApp } from '../../context/AppContext';

export default function AppLayout() {
  const navigate = useNavigate();
  const {
    toastMessage,
    selectedPackage,
    setSelectedPackage,
    favorites,
    toggleFavorite,
    isTrackLookupOpen,
    setIsTrackLookupOpen,
    isLoginOpen,
    setIsLoginOpen,
    applications,
    login,
    showToast
  } = useApp();

  return (
    <div className="rh-app-root">
      {/* Universal Responsive Header */}
      <Header />

      {/* Global Toast Alert */}
      {toastMessage && (
        <div className="rh-toast-alert animate-fade-in">
          <CheckCircle size={16} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Page Content */}
      <main className="rh-main-container">
        <Outlet />
      </main>

      {/* Floating Bottom Navigation Bar (Visible only on mobile) */}
      <BottomNav />

      {/* Global Modal: Package Details */}
      {selectedPackage && (
        <PackageDetailModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          isFavorite={favorites.includes(selectedPackage.id)}
          onToggleFavorite={toggleFavorite}
          onBookNow={(pkg) => {
            showToast(`Inquiry submitted for ${pkg.title}! We will contact you.`);
          }}
        />
      )}

      {/* Global Modal: Quick Application Track Lookup */}
      <TrackLookupModal
        isOpen={isTrackLookupOpen}
        onClose={() => setIsTrackLookupOpen(false)}
        applications={applications}
        onSelectApplication={() => {
          navigate('/status');
        }}
      />

      {/* Global Modal: Authentication */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={(loggedInUser) => {
          login(loggedInUser);
        }}
      />
    </div>
  );
}

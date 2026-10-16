import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Header from '../components/Header/Header.component';
import BottomNav from '../components/BottomNav/BottomNav.component';
import PackageDetailModal from '../components/Modal/PackageDetailModal.component';
import TrackLookupModal from '../components/Modal/TrackLookupModal.component';
import LoginModal from '../components/Modal/LoginModal.component';
import LogoutConfirmModal from '../components/Modal/LogoutConfirmModal.component';
import { useApp } from '../context/AppContext';
import ROUTES from '../config/routes';

export const UserLayout = () => {
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
    isLogoutConfirmOpen,
    setIsLogoutConfirmOpen,
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
          navigate(ROUTES.STATUS);
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

      {/* Global Modal: Logout Warning Confirmation */}
      <LogoutConfirmModal
        isOpen={isLogoutConfirmOpen}
        onClose={() => setIsLogoutConfirmOpen(false)}
      />
    </div>
  );
};

export default UserLayout;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Sun, User as UserIcon, LogOut, CheckCircle, Globe, Bell, Building2, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { getNavItems } from '../../config/navigation';
import ROUTES from '../../config/routes';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    user,
    logout,
    unreadCount,
    searchQuery,
    setSearchQuery,
    setIsTrackLookupOpen,
    setIsLogoutConfirmOpen
  } = useApp();

  const isCompany = user?.type === 'company';
  const navLinks = getNavItems(user);

  const handleLogout = () => {
    setIsLogoutConfirmOpen(true);
  };

  return (
    <header className="rh-header">
      <div className="rh-header-inner">
        {/* Brand & Greeting */}
        <div className="rh-brand-section">
          <div className="rh-brand-logo" onClick={() => navigate(ROUTES.DASHBOARD)}>
            <div className="rh-logo-badge">
              <Globe size={20} className="rh-logo-icon" />
            </div>
            <div className="rh-brand-text">
              <div className="rh-brand-title-row">
                <span className="rh-brand-name">RH GLOBAL</span>
                <span className="rh-brand-status-dot" title="Live Concierge Online"></span>
              </div>
              <span className="rh-brand-tagline">
                {isCompany ? 'Corporate Travel Desk' : 'Visa & Holiday CRM'}
              </span>
            </div>
          </div>

          {/* User Account Role Chip */}
          {user && (
            <div className="rh-user-greeting-chip" onClick={() => navigate(ROUTES.PROFILE)}>
              {isCompany ? (
                <>
                  <Building2 size={13} className="rh-greeting-icon" />
                  <span className="rh-greeting-hi">{user.companyName || 'Corporate'}</span>
                  <span className="rh-greeting-sub">Desk</span>
                </>
              ) : (
                <>
                  <User size={13} className="rh-greeting-icon" />
                  <span className="rh-greeting-hi">{user.name?.split(' ')[0] || 'Traveler'}</span>
                  <span className="rh-greeting-sub">Member</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Desktop Navigation Menu (dynamically rendered from config/navigation.js) */}
        <nav className="rh-desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;

            return (
              <button
                key={link.path}
                type="button"
                className={`rh-desktop-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => navigate(link.path)}
              >
                <Icon size={15} />
                <span>{link.shortLabel || link.title}</span>
                {link.hasBadge && unreadCount > 0 && !isActive && (
                  <span className="rh-nav-badge-dot"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Quick Track, Notifications, Auth */}
        <div className="rh-header-actions">

          {/* User Profile / Auth */}
          {user ? (
            <div className="rh-user-profile-menu">
              <div
                className="rh-user-avatar-trigger"
                onClick={() => navigate(ROUTES.PROFILE)}
                title={`${user.name} (${isCompany ? user.companyName : 'Individual'})`}
              >
                <div className="rh-avatar-frame">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="rh-user-avatar-small"
                    />
                  ) : (
                    <div className="rh-user-avatar-dummy-small" aria-hidden="true">
                      <User size={15} />
                    </div>
                  )}
                  <span className="rh-avatar-online-dot"></span>
                </div>
              </div>
              <button
                type="button"
                className="rh-icon-btn rh-logout-mini"
                title="Log Out"
                onClick={handleLogout}
              >
                <LogOut size={15} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="rh-pill-btn rh-login-trigger-btn"
              onClick={() => navigate(ROUTES.LOGIN)}
            >
              <UserIcon size={15} />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

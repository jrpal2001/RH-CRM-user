import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Sun, User as UserIcon, LogOut, CheckCircle, Globe, Bell, Building2, User, RefreshCw } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { getNavItems } from '../../config/navigation';
import ROUTES from '../../config/routes';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    user,
    logout,
    switchUserType,
    unreadCount,
    searchQuery,
    setSearchQuery,
    setIsTrackLookupOpen
  } = useApp();

  const isCompany = user?.type === 'company';
  const navLinks = getNavItems(user);

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  return (
    <header className="rh-header">
      <div className="rh-header-inner">
        {/* Brand & Greeting */}
        <div className="rh-brand-section">
          <div className="rh-brand-logo" onClick={() => navigate(ROUTES.DASHBOARD)}>
            <div className="rh-logo-badge">
              <Globe size={22} className="rh-logo-icon" />
            </div>
            <div className="rh-brand-text">
              <span className="rh-brand-name">RH GLOBAL</span>
              <span className="rh-brand-tagline">
                {isCompany ? 'Corporate Travel Desk' : 'Visa & Holiday CRM'}
              </span>
            </div>
          </div>

          {/* User Account Role Chip */}
          {user && (
            <div className="rh-user-greeting-chip">
              {isCompany ? (
                <>
                  <Building2 size={13} color="var(--rh-primary)" />
                  <span className="rh-greeting-hi">{user.companyName.split(' ')[0]} (Company)</span>
                </>
              ) : (
                <>
                  <User size={13} color="var(--rh-primary)" />
                  <span className="rh-greeting-hi">{user.name.split(' ')[0]} (Individual)</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Desktop Navigation Menu (dynamically rendered from config/navigation.js) */}
        <nav className="rh-desktop-nav">
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
                <Icon size={16} />
                <span>{link.shortLabel || link.title}</span>
                {link.hasBadge && unreadCount > 0 && !isActive && (
                  <span className="rh-nav-badge-dot"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Role Switcher Demo, Quick Track, Notifications, Auth */}
        <div className="rh-header-actions">
          {/* Quick Demo Switcher between Company and Individual */}
          {user && (
            <button
              type="button"
              className="rh-role-toggle-chip"
              onClick={() => switchUserType(isCompany ? 'individual' : 'company')}
              title={`Currently in ${isCompany ? 'Company' : 'Individual'} mode. Click to switch.`}
            >
              <RefreshCw size={12} />
              <span>{isCompany ? 'Switch to Individual' : 'Switch to Company'}</span>
            </button>
          )}

          {/* Quick Track Application Button */}
          {/* <button
            type="button"
            className="rh-pill-btn rh-quick-track-btn"
            onClick={() => setIsTrackLookupOpen(true)}
          >
            <CheckCircle size={15} />
            <span>Track Application</span>
          </button> */}

          {/* User Profile / Auth */}
          {user ? (
            <div className="rh-user-profile-menu">
              <div
                className="rh-user-avatar-trigger"
                onClick={() => navigate(ROUTES.PROFILE)}
                title={`${user.name} (${isCompany ? user.companyName : 'Individual'})`}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="rh-user-avatar-small"
                />
                <span className="rh-user-name-desktop">{user.name.split(' ')[0]}</span>
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

      {/* Global Search Bar */}
      <div className="rh-header-search-wrap">
        <div className="rh-search-bar">
          <Search size={18} className="rh-search-icon" />
          <input
            type="text"
            className="rh-search-input"
            placeholder={
              isCompany
                ? "Search employee name, visa country, reference ID, or tour package..."
                : "Search destination, visa country, or holiday package..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="rh-search-clear"
              onClick={() => setSearchQuery('')}
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

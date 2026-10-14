import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Compass,
  Palmtree,
  CalendarCheck,
  FolderDown,
  Search,
  Sun,
  User as UserIcon,
  LogOut,
  CheckCircle,
  Globe,
  Bell
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

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
    setIsLoginOpen
  } = useApp();

  const navLinks = [
    { path: '/', label: 'Explore', icon: Compass },
    { path: '/packages', label: 'Visa & Holiday Packages', icon: Palmtree },
    { path: '/status', label: 'My Status', icon: CalendarCheck, badge: unreadCount },
    { path: '/downloads', label: 'Download Center', icon: FolderDown }
  ];

  return (
    <header className="rh-header">
      <div className="rh-header-inner">
        {/* Brand & Greeting */}
        <div className="rh-brand-section">
          <div className="rh-brand-logo" onClick={() => navigate('/')}>
            <div className="rh-logo-badge">
              <Globe size={22} className="rh-logo-icon" />
            </div>
            <div className="rh-brand-text">
              <span className="rh-brand-name">RH GLOBAL</span>
              <span className="rh-brand-tagline">Visa & Holiday CRM</span>
            </div>
          </div>

          {/* User greeting chip */}
          {user && (
            <div className="rh-user-greeting-chip">
              <span className="rh-greeting-hi">Hi, {user.name.split(' ')[0]}</span>
              <span className="rh-wave">👋</span>
            </div>
          )}
        </div>

        {/* Desktop Navigation Menu */}
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
                <span>{link.label}</span>
                {link.badge > 0 && !isActive && (
                  <span className="rh-nav-badge-dot"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Weather, Track Button, Notifications, Auth */}
        <div className="rh-header-actions">
          {/* Weather Badge */}
          <div className="rh-weather-badge">
            <div className="rh-weather-icon-wrap">
              <Sun size={14} className="rh-sun-icon" />
            </div>
            <div className="rh-weather-info">
              <span className="rh-weather-label">Destination</span>
              <span className="rh-weather-temp">Dubai 29°C</span>
            </div>
          </div>

          {/* Quick Track Application Button */}
          <button
            type="button"
            className="rh-pill-btn rh-quick-track-btn"
            onClick={() => setIsTrackLookupOpen(true)}
          >
            <CheckCircle size={15} />
            <span>Track Application</span>
          </button>

          {/* Notification Bell */}
          <button
            type="button"
            className="rh-icon-btn rh-bell-btn"
            onClick={() => navigate('/status')}
            title="Application Notifications"
          >
            <Bell size={18} />
            {unreadCount > 0 && <span className="rh-notification-dot"></span>}
          </button>

          {/* User Profile / Auth */}
          {user ? (
            <div className="rh-user-profile-menu">
              <div
                className="rh-user-avatar-trigger"
                onClick={() => navigate('/profile')}
                title={`${user.name} (${user.membership})`}
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
                onClick={logout}
              >
                <LogOut size={15} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="rh-pill-btn rh-login-trigger-btn"
              onClick={() => setIsLoginOpen(true)}
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
            placeholder="Search destination, visa country, or holiday package..."
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

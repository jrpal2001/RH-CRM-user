import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, applications, favorites, logout, setIsLoginOpen } = useApp();

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      {user ? (
        <div className="rh-profile-layout">
          <div className="rh-profile-main-box">
            {/* User Hero Card */}
            <div className="rh-profile-hero-card">
              <img src={user.avatar} alt={user.name} className="rh-profile-avatar-large" />
              <div className="rh-profile-details">
                <h3>{user.name}</h3>
                <span className="rh-profile-tier">{user.membership}</span>
                <p className="rh-profile-contact-text">{user.email}</p>
                <p className="rh-profile-contact-text">{user.phone}</p>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="rh-profile-grid">
              <div
                className="rh-profile-stat-box"
                onClick={() => navigate('/status')}
                style={{ cursor: 'pointer' }}
              >
                <span className="rh-stat-lbl">Active Applications</span>
                <span className="rh-stat-val">{applications.length}</span>
              </div>
              <div
                className="rh-profile-stat-box"
                onClick={() => navigate('/packages')}
                style={{ cursor: 'pointer' }}
              >
                <span className="rh-stat-lbl">Saved Packages</span>
                <span className="rh-stat-val">{favorites.length}</span>
              </div>
              <div className="rh-profile-stat-box">
                <span className="rh-stat-lbl">Passport Number</span>
                <span className="rh-stat-val" style={{ fontSize: '15px', fontFamily: 'monospace' }}>
                  {user.passportNo}
                </span>
              </div>
              <div className="rh-profile-stat-box">
                <span className="rh-stat-lbl">CRM Loyalty Tier</span>
                <span className="rh-stat-val" style={{ fontSize: '15px', color: 'var(--rh-primary)' }}>
                  VIP Concierge
                </span>
              </div>
            </div>

            <button
              type="button"
              className="rh-logout-full-btn"
              onClick={() => {
                logout();
                navigate('/');
              }}
            >
              Sign Out from RH Global CRM
            </button>
          </div>
        </div>
      ) : (
        <div className="rh-empty-auth-card">
          <h3>Not Signed In</h3>
          <p>Sign in to view and manage your travel applications and passport details.</p>
          <button
            type="button"
            className="rh-pill-btn rh-login-trigger-btn"
            onClick={() => setIsLoginOpen(true)}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}

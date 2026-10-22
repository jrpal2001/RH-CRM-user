import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Clock,
  Hourglass,
  CheckCircle2,
  Users,
  ArrowRight,
  ShieldCheck,
  Palmtree,
  Eye,
  Building2,
  User,
  Sparkles,
  Star
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import ROUTES from '../../config/routes';
import PackageCard from '../../components/PackageCard/PackageCard.component';

export const DashboardView = () => {
  const navigate = useNavigate();
  const { user, stats, applications, packages, setSelectedPackage, switchUserType, favorites, toggleFavorite } = useApp();

  const isCompany = user?.type === 'company';
  const recentApplications = applications.slice(0, 4);

  // Top 3 Curated Featured Packages (1 Visa + 2 Luxury Holidays)
  const featuredPackages = [
    packages.find((p) => p.category === 'visa') || packages[4],
    packages.find((p) => p.id === 'PKG-01') || packages[0],
    packages.find((p) => p.id === 'PKG-02') || packages[1],
  ].filter(Boolean);

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      {/* KPI Stats Grid */}
      <div className={`rh-kpi-stats-grid ${isCompany ? 'grid-4-cols' : 'grid-3-cols'}`}>
        {/* KPI 1: Current Applications */}
        <div
          className="rh-kpi-card"
          onClick={() => navigate(ROUTES.ACTIVE_APPLICATIONS)}
          style={{ cursor: 'pointer' }}
        >
          <div className="rh-kpi-card-header">
            <div className="rh-kpi-icon-wrap current">
              <Clock size={16} />
            </div>
            <span className="rh-kpi-chip active">
              <span className="rh-chip-dot"></span> In Progress
            </span>
          </div>
          <div className="rh-kpi-info">
            <span className="rh-kpi-number">{stats.current}</span>
            <span className="rh-kpi-label">Current Active Files</span>
          </div>
        </div>

        {/* KPI 2: Pending Applications */}
        <div
          className="rh-kpi-card"
          onClick={() => navigate(ROUTES.ALL_APPLICATIONS)}
          style={{ cursor: 'pointer' }}
        >
          <div className="rh-kpi-card-header">
            <div className="rh-kpi-icon-wrap pending">
              <Hourglass size={16} />
            </div>
            <span className="rh-kpi-chip review">Embassy Slot</span>
          </div>
          <div className="rh-kpi-info">
            <span className="rh-kpi-number">{stats.pending}</span>
            <span className="rh-kpi-label">Pending Review</span>
          </div>
        </div>

        {/* KPI 3: Completed Applications */}
        <div
          className="rh-kpi-card"
          onClick={() => navigate(ROUTES.ALL_APPLICATIONS)}
          style={{ cursor: 'pointer' }}
        >
          <div className="rh-kpi-card-header">
            <div className="rh-kpi-icon-wrap completed">
              <CheckCircle2 size={16} />
            </div>
            <span className="rh-kpi-chip approved">Granted</span>
          </div>
          <div className="rh-kpi-info">
            <span className="rh-kpi-number">{stats.completed}</span>
            <span className="rh-kpi-label">Granted & Ready</span>
          </div>
        </div>

        {/* KPI 4: Total Employees (ONLY if Company user!) */}
        {isCompany && (
          <div
            className="rh-kpi-card"
            onClick={() => navigate(ROUTES.EMPLOYEES)}
            style={{ cursor: 'pointer' }}
          >
            <div className="rh-kpi-card-header">
              <div className="rh-kpi-icon-wrap employees">
                <Users size={16} />
              </div>
              <span className="rh-kpi-chip corporate">Roster</span>
            </div>
            <div className="rh-kpi-info">
              <span className="rh-kpi-number">{stats.totalEmployees}</span>
              <span className="rh-kpi-label">Employees</span>
            </div>
          </div>
        )}
      </div>

      {/* Promotional Package Advertisements Row (3 Cards on Desktop) */}
      <div className="rh-section-box">
        <div className="rh-section-header-row">
          <div>
            <span className="rh-section-eyebrow">CURATED CONCIERGE</span>
            <h2 className="rh-section-title">Special Travel & Visa Packages</h2>
            <p className="rh-section-desc">Exclusive corporate & member packages curated by RH Global</p>
          </div>
          <div className="rh-promo-header-links">
            <button
              type="button"
              className="rh-promo-link-btn"
              onClick={() => navigate(ROUTES.VISA_PACKAGES)}
            >
              All Visas →
            </button>
            <button
              type="button"
              className="rh-promo-link-btn"
              onClick={() => navigate(ROUTES.HOLIDAY_PACKAGES)}
            >
              All Holidays →
            </button>
          </div>
        </div>

        {/* 3 Balanced Classy Cards Grid */}
        <div className="rh-promo-cards-grid grid-3">
          {featuredPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              isFavorite={favorites?.includes(pkg.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>

      {/* Recent Applications List */}
      <div className="rh-section-box">
        <div className="rh-section-header-row">
          <div>
            <span className="rh-section-eyebrow">ACTIVITY OVERVIEW</span>
            <h2 className="rh-section-title">Recent Applications</h2>
            <p className="rh-section-desc">Latest filed visa and tour cases</p>
          </div>
          <button
            type="button"
            className="rh-section-view-all"
            onClick={() => navigate(ROUTES.ALL_APPLICATIONS)}
          >
            View All ({applications.length}) →
          </button>
        </div>

        {/* Desktop View: Polished Table */}
        <div className="rh-recent-table-wrap rh-desktop-only-table">
          <table className="rh-recent-table">
            <thead>
              <tr>
                <th>Reference ID</th>
                <th>Applicant / Destination</th>
                <th>Type</th>
                <th>Submitted</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentApplications.map((app) => (
                <tr key={app.id}>
                  <td>
                    <code className="rh-table-code">{app.id}</code>
                  </td>
                  <td>
                    <div className="rh-table-applicant-cell">
                      <span className="rh-table-flag">{app.flag}</span>
                      <div>
                        <strong>{app.applicantName}</strong>
                        <span className="rh-table-country">{app.country}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`rh-type-tag ${app.type}`}>
                      {app.type === 'visa' ? <ShieldCheck size={12} /> : <Palmtree size={12} />}
                      {app.type === 'visa' ? 'Visa Service' : 'Holiday Tour'}
                    </span>
                  </td>
                  <td className="rh-table-date">{app.submissionDate}</td>
                  <td>
                    <span className={`rh-status-badge ${app.status}`}>
                      <span className="rh-status-dot"></span>
                      {app.statusLabel}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button
                      type="button"
                      className="rh-view-action-btn"
                      onClick={() => navigate(`/applications/${app.id}`)}
                    >
                      <Eye size={14} />
                      <span>View Details</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: High-End Cards List */}
        <div className="rh-recent-mobile-cards rh-mobile-only-list">
          {recentApplications.map((app) => (
            <div
              key={app.id}
              className="rh-recent-mobile-card"
              onClick={() => navigate(`/applications/${app.id}`)}
            >
              <div className="rh-rmc-top">
                <code className="rh-table-code">{app.id}</code>
                <span className={`rh-status-badge ${app.status}`}>
                  <span className="rh-status-dot"></span>
                  {app.statusLabel}
                </span>
              </div>
              <div className="rh-rmc-main">
                <span className="rh-table-flag">{app.flag}</span>
                <div className="rh-rmc-title-box">
                  <h4 className="rh-rmc-name">{app.applicantName}</h4>
                  <span className="rh-rmc-country">{app.country} • {app.type === 'visa' ? 'Visa Service' : 'Holiday Tour'}</span>
                </div>
              </div>
              <div className="rh-rmc-footer">
                <span className="rh-rmc-date">Submitted: {app.submissionDate}</span>
                <span className="rh-rmc-action">
                  <span>View Details</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;

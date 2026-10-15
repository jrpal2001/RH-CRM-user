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

  // Visa ad and Holiday ad
  const visaAdPackage = packages.find((p) => p.category === 'visa') || packages[4];
  const holidayAdPackage = packages.find((p) => p.category === 'holidays') || packages[0];

  // Additional trending packages for visual showcase
  const trendingPackages = packages.filter(
    (p) => p.id !== visaAdPackage?.id && p.id !== holidayAdPackage?.id
  ).slice(0, 3);

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      {/* Top Welcome Section & Role Switcher */}
      <div className="rh-dashboard-hero-header">
        <div className="rh-dash-title-group">
          <div className="rh-user-role-badge">
            {isCompany ? (
              <>
                <Building2 size={13} />
                <span>COMPANY / CORPORATE PORTAL</span>
              </>
            ) : (
              <>
                <User size={13} />
                <span>INDIVIDUAL TRAVELER PORTAL</span>
              </>
            )}
          </div>

          <h1 className="rh-dash-heading">
            {isCompany ? user.companyName : user?.name}
          </h1>
          <p className="rh-dash-subheading">
            {isCompany
              ? `Managed by ${user.name} (${user.role}) • Corporate ID: ${user.id}`
              : `Welcome to your personal Visa & Holiday booking desk • Passport: ${user?.passportNo}`}
          </p>
        </div>

        {/* Demo Role Switcher Button */}
        <div className="rh-role-switcher-banner">
          <span className="rh-role-switch-lbl">Switch Account Mode:</span>
          <button
            type="button"
            className={`rh-role-switch-btn ${isCompany ? 'active' : ''}`}
            onClick={() => switchUserType('company')}
          >
            <Building2 size={13} /> Company
          </button>
          <button
            type="button"
            className={`rh-role-switch-btn ${!isCompany ? 'active' : ''}`}
            onClick={() => switchUserType('individual')}
          >
            <User size={13} /> Individual
          </button>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className={`rh-kpi-stats-grid ${isCompany ? 'grid-4-cols' : 'grid-3-cols'}`}>
        {/* KPI 1: Current Applications */}
        <div
          className="rh-kpi-card"
          onClick={() => navigate(ROUTES.ACTIVE_APPLICATIONS)}
          style={{ cursor: 'pointer' }}
        >
          <div className="rh-kpi-icon-wrap current">
            <Clock size={20} />
          </div>
          <div className="rh-kpi-info">
            <span className="rh-kpi-label">Current Applications</span>
            <div className="rh-kpi-number-row">
              <span className="rh-kpi-number">{stats.current}</span>
              <span className="rh-kpi-chip active">In Progress</span>
            </div>
          </div>
        </div>

        {/* KPI 2: Pending Applications */}
        <div
          className="rh-kpi-card"
          onClick={() => navigate(ROUTES.ALL_APPLICATIONS)}
          style={{ cursor: 'pointer' }}
        >
          <div className="rh-kpi-icon-wrap pending">
            <Hourglass size={20} />
          </div>
          <div className="rh-kpi-info">
            <span className="rh-kpi-label">Pending Applications</span>
            <div className="rh-kpi-number-row">
              <span className="rh-kpi-number">{stats.pending}</span>
              <span className="rh-kpi-chip review">Embassy Slot</span>
            </div>
          </div>
        </div>

        {/* KPI 3: Completed Applications */}
        <div
          className="rh-kpi-card"
          onClick={() => navigate(ROUTES.ALL_APPLICATIONS)}
          style={{ cursor: 'pointer' }}
        >
          <div className="rh-kpi-icon-wrap completed">
            <CheckCircle2 size={20} />
          </div>
          <div className="rh-kpi-info">
            <span className="rh-kpi-label">Completed Applications</span>
            <div className="rh-kpi-number-row">
              <span className="rh-kpi-number">{stats.completed}</span>
              <span className="rh-kpi-chip approved">Granted</span>
            </div>
          </div>
        </div>

        {/* KPI 4: Total Employees (ONLY if Company user!) */}
        {isCompany && (
          <div
            className="rh-kpi-card"
            onClick={() => navigate(ROUTES.EMPLOYEES)}
            style={{ cursor: 'pointer' }}
          >
            <div className="rh-kpi-icon-wrap employees">
              <Users size={20} />
            </div>
            <div className="rh-kpi-info">
              <span className="rh-kpi-label">Total Employees</span>
              <div className="rh-kpi-number-row">
                <span className="rh-kpi-number">{stats.totalEmployees}</span>
                <span className="rh-kpi-chip corporate">Corporate Roster</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Promotional Package Advertisements Row (Visa & Holidays) */}
      <div className="rh-section-box">
        <div className="rh-section-header-row">
          <div>
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

        <div className="rh-promo-cards-grid">
          {/* Visa Package Ad Card */}
          {visaAdPackage && (
            <div
              className="rh-promo-card visa"
              onClick={() => setSelectedPackage(visaAdPackage)}
            >
              <div className="rh-promo-img-wrap">
                <img
                  src={visaAdPackage.heroImage}
                  alt={visaAdPackage.title}
                  className="rh-promo-img"
                  loading="lazy"
                />
                <div className="rh-promo-scrim"></div>
                <div className="rh-promo-top-badges">
                  <span className="rh-promo-badge visa">
                    <ShieldCheck size={13} />
                    <span>FAST-TRACK VISA SOLUTION</span>
                  </span>
                  <span className="rh-promo-country-chip">
                    <span className="rh-flag">{visaAdPackage.flag}</span>
                    <span>{visaAdPackage.country}</span>
                  </span>
                </div>
                <div className="rh-promo-img-bottom">
                  <span className="rh-promo-rating">
                    <Star size={12} fill="#fbbf24" color="#fbbf24" />
                    <span>{visaAdPackage.rating} ({visaAdPackage.reviewsCount})</span>
                  </span>
                  <span className="rh-promo-duration">
                    <Clock size={12} /> {visaAdPackage.duration}
                  </span>
                </div>
              </div>

              <div className="rh-promo-body">
                <h3 className="rh-promo-title">{visaAdPackage.title}</h3>
                <p className="rh-promo-desc">{visaAdPackage.subtitle}</p>

                <div className="rh-promo-footer">
                  <div className="rh-promo-price">
                    <span className="rh-price-from">From</span>
                    <strong className="rh-price-number">${visaAdPackage.price.toLocaleString()}</strong>
                    <span className="rh-price-unit">/ applicant</span>
                  </div>
                  <div className="rh-promo-btn-group">
                    <button
                      type="button"
                      className="rh-promo-btn secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPackage(visaAdPackage);
                      }}
                    >
                      <Eye size={13} />
                      <span>Details</span>
                    </button>
                    <button
                      type="button"
                      className="rh-promo-btn primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(ROUTES.VISA_PACKAGES);
                      }}
                    >
                      <span>Explore Visa</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Holiday Package Ad Card */}
          {holidayAdPackage && (
            <div
              className="rh-promo-card holiday"
              onClick={() => setSelectedPackage(holidayAdPackage)}
            >
              <div className="rh-promo-img-wrap">
                <img
                  src={holidayAdPackage.heroImage}
                  alt={holidayAdPackage.title}
                  className="rh-promo-img"
                  loading="lazy"
                />
                <div className="rh-promo-scrim holiday"></div>
                <div className="rh-promo-top-badges">
                  <span className="rh-promo-badge holiday">
                    <Palmtree size={13} />
                    <span>FEATURED HOLIDAY ESCAPE</span>
                  </span>
                  <span className="rh-promo-country-chip">
                    <span className="rh-flag">{holidayAdPackage.flag}</span>
                    <span>{holidayAdPackage.country}</span>
                  </span>
                </div>
                <div className="rh-promo-img-bottom">
                  <span className="rh-promo-rating">
                    <Star size={12} fill="#fbbf24" color="#fbbf24" />
                    <span>{holidayAdPackage.rating} ({holidayAdPackage.reviewsCount})</span>
                  </span>
                  <span className="rh-promo-duration">
                    <Clock size={12} /> {holidayAdPackage.duration}
                  </span>
                </div>
              </div>

              <div className="rh-promo-body">
                <h3 className="rh-promo-title">{holidayAdPackage.title}</h3>
                <p className="rh-promo-desc">{holidayAdPackage.subtitle}</p>

                <div className="rh-promo-footer">
                  <div className="rh-promo-price">
                    <span className="rh-price-from">From</span>
                    <strong className="rh-price-number">${holidayAdPackage.price.toLocaleString()}</strong>
                    <span className="rh-price-unit">/ package</span>
                  </div>
                  <div className="rh-promo-btn-group">
                    <button
                      type="button"
                      className="rh-promo-btn secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPackage(holidayAdPackage);
                      }}
                    >
                      <Eye size={13} />
                      <span>Details</span>
                    </button>
                    <button
                      type="button"
                      className="rh-promo-btn primary holiday"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(ROUTES.HOLIDAY_PACKAGES);
                      }}
                    >
                      <span>Explore Holidays</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Trending Packages Showcase with Images */}
        {trendingPackages.length > 0 && (
          <div className="rh-dash-packages-subgrid">
            <div className="rh-subgrid-header">
              <span className="rh-subgrid-tag">TRENDING DESTINATIONS</span>
              <span className="rh-subgrid-hint">Handcrafted itineraries with full visa assistance</span>
            </div>
            <div className="rh-packages-grid full-width">
              {trendingPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  isFavorite={favorites?.includes(pkg.id)}
                  onToggleFavorite={toggleFavorite}
                  onSelect={(p) => setSelectedPackage(p)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Recent Applications List */}
      <div className="rh-section-box">
        <div className="rh-section-header-row">
          <div>
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

        <div className="rh-recent-table-wrap">
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
                      {app.type === 'visa' ? 'Visa Service' : 'Holiday Tour'}
                    </span>
                  </td>
                  <td className="rh-table-date">{app.submissionDate}</td>
                  <td>
                    <span className={`rh-status-badge ${app.status}`}>
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
      </div>
    </div>
  );
};

export default DashboardView;

import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Eye, Filter, ShieldCheck, Palmtree, ArrowRight, User, CreditCard, Calendar, MapPin, Copy, CheckCheck, FolderSearch } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AllApplicationsView = () => {
  const navigate = useNavigate();
  const { applications, showToast } = useApp();

  const [filterType, setFilterType] = useState('all'); // 'all' | 'visa' | 'holiday'
  const [filterStatus, setFilterStatus] = useState('all'); // 'all' | 'approved' | 'in_progress'
  const [search, setSearch] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (e, id) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    showToast(`Copied Reference: ${id}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const matchType = filterType === 'all' || app.type === filterType;
      const matchStatus =
        filterStatus === 'all' ||
        (filterStatus === 'approved' && (app.status === 'approved' || app.statusGroup === 'completed')) ||
        (filterStatus === 'in_progress' && app.status !== 'approved' && app.statusGroup !== 'completed');

      const matchSearch =
        search.trim() === '' ||
        app.id.toLowerCase().includes(search.toLowerCase()) ||
        app.applicantName.toLowerCase().includes(search.toLowerCase()) ||
        app.country.toLowerCase().includes(search.toLowerCase()) ||
        (app.visaType && app.visaType.toLowerCase().includes(search.toLowerCase())) ||
        (app.packageName && app.packageName.toLowerCase().includes(search.toLowerCase()));

      return matchType && matchStatus && matchSearch;
    });
  }, [applications, filterType, filterStatus, search]);

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      <div className="rh-section-header-row">
        <div>
          <div className="rh-eyebrow-capsule">
            <span className="rh-eyebrow-dot"></span>
            <span className="rh-section-eyebrow">PORTFOLIO ARCHIVE</span>
          </div>
          <h1 className="rh-page-main-title">All Applications & Bookings</h1>
          <p className="rh-section-desc">Comprehensive history of active, under-review, and completed corporate travel dossiers.</p>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="rh-all-apps-toolbar">
        <div className="rh-apps-search-wrap">
          <Search size={16} className="rh-search-icon" />
          <input
            type="text"
            placeholder="Search by Reference ID, employee/applicant name, or country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button type="button" className="rh-search-clear" onClick={() => setSearch('')}>
              ✕
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="rh-apps-filter-chips">
          <button
            type="button"
            className={`rh-apps-filter-btn ${filterType === 'all' ? 'active' : ''}`}
            onClick={() => setFilterType('all')}
          >
            All Types ({applications.length})
          </button>
          <button
            type="button"
            className={`rh-apps-filter-btn ${filterType === 'visa' ? 'active' : ''}`}
            onClick={() => setFilterType('visa')}
          >
            <ShieldCheck size={14} /> <span>Visa Only</span>
          </button>
          <button
            type="button"
            className={`rh-apps-filter-btn ${filterType === 'holiday' ? 'active' : ''}`}
            onClick={() => setFilterType('holiday')}
          >
            <Palmtree size={14} /> <span>Holidays Only</span>
          </button>

          <span className="rh-filter-divider"></span>

          <button
            type="button"
            className={`rh-apps-filter-btn status-btn ${filterStatus === 'approved' ? 'active' : ''}`}
            onClick={() => setFilterStatus(filterStatus === 'approved' ? 'all' : 'approved')}
          >
            <span className="rh-chip-dot"></span>
            <span>Granted / Confirmed</span>
          </button>
        </div>
      </div>

      {/* Applications List */}
      {filteredApplications.length > 0 ? (
        <div className="rh-all-apps-list">
          {filteredApplications.map((app) => (
            <div
              key={app.id}
              className={`rh-all-app-item status-${app.status} animate-fade-in`}
              onClick={() => navigate(`/applications/${app.id}`)}
            >
              <div className="rh-app-item-main">
                <div className="rh-app-item-top">
                  <div className="rh-app-top-left">
                    <button
                      type="button"
                      className="rh-ref-pill-btn"
                      onClick={(e) => handleCopy(e, app.id)}
                      title="Click to copy Reference ID"
                    >
                      <code className="rh-table-code">{app.id}</code>
                      {copiedId === app.id ? <CheckCheck size={11} color="#059669" /> : <Copy size={11} />}
                    </button>

                    <span className={`rh-type-tag ${app.type}`}>
                      {app.type === 'visa' ? <ShieldCheck size={11} /> : <Palmtree size={11} />}
                      <span>{app.type === 'visa' ? 'Visa' : 'Tour'}</span>
                    </span>
                  </div>

                  <span className={`rh-status-badge ${app.status}`}>
                    <span className="rh-status-dot"></span>
                    {app.statusLabel}
                  </span>
                </div>

                <h3 className="rh-app-item-title">
                  <span className="rh-file-flag">{app.flag}</span>
                  <span>{app.type === 'visa' ? app.visaType : app.packageName}</span>
                </h3>

                <div className="rh-app-item-bottom">
                  <div className="rh-app-compact-meta">
                    <strong>{app.applicantName}</strong>
                    <span className="rh-meta-bullet">•</span>
                    <span>{app.country}</span>
                    {app.submissionDate && (
                      <>
                        <span className="rh-meta-bullet">•</span>
                        <span>{app.submissionDate}</span>
                      </>
                    )}
                  </div>
                  <span className="rh-app-card-cta">
                    <span>View</span>
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rh-empty-auth-card">
          <FolderSearch size={44} className="rh-empty-icon" />
          <h3>No Matching Applications Found</h3>
          <p>No applications match your active search and filter criteria. Try adjusting your search query.</p>
          <button
            type="button"
            className="rh-pill-btn rh-clear-search-btn"
            onClick={() => {
              setSearch('');
              setFilterType('all');
              setFilterStatus('all');
            }}
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AllApplicationsView;

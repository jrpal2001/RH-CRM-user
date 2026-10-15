import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Eye, Filter, ShieldCheck, Palmtree, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AllApplicationsView = () => {
  const navigate = useNavigate();
  const { applications } = useApp();

  const [filterType, setFilterType] = useState('all'); // 'all' | 'visa' | 'holiday'
  const [filterStatus, setFilterStatus] = useState('all'); // 'all' | 'approved' | 'in_progress'
  const [search, setSearch] = useState('');

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
          <h1 className="rh-page-main-title">All Applications & Bookings</h1>
          <p className="rh-page-main-desc">
            Complete archive of historical, current, and granted visa files & travel tours.
          </p>
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
            <ShieldCheck size={14} /> Visa Only
          </button>
          <button
            type="button"
            className={`rh-apps-filter-btn ${filterType === 'holiday' ? 'active' : ''}`}
            onClick={() => setFilterType('holiday')}
          >
            <Palmtree size={14} /> Holidays Only
          </button>

          <span className="rh-filter-divider"></span>

          <button
            type="button"
            className={`rh-apps-filter-btn status-btn ${filterStatus === 'approved' ? 'active' : ''}`}
            onClick={() => setFilterStatus(filterStatus === 'approved' ? 'all' : 'approved')}
          >
            Granted / Confirmed
          </button>
        </div>
      </div>

      {/* Applications List */}
      <div className="rh-all-apps-list">
        {filteredApplications.map((app) => (
          <div key={app.id} className="rh-all-app-item animate-fade-in">
            <div className="rh-app-item-main">
              <div className="rh-app-item-top">
                <code className="rh-table-code">{app.id}</code>
                <span className={`rh-type-tag ${app.type}`}>
                  {app.type === 'visa' ? 'Visa Service' : 'Holiday Tour'}
                </span>
                <span className={`rh-status-badge ${app.status}`}>
                  {app.statusLabel}
                </span>
              </div>

              <h3 className="rh-app-item-title">
                <span className="rh-file-flag">{app.flag}</span>
                {app.type === 'visa' ? app.visaType : app.packageName}
              </h3>

              <div className="rh-app-item-meta">
                <span><strong>Applicant:</strong> {app.applicantName}</span>
                <span>•</span>
                <span><strong>Passport:</strong> {app.passportNumber}</span>
                <span>•</span>
                <span><strong>Country:</strong> {app.country}</span>
                <span>•</span>
                <span><strong>Submitted:</strong> {app.submissionDate}</span>
              </div>
            </div>

            <div className="rh-app-item-action">
              <button
                type="button"
                className="rh-pill-btn rh-view-details-btn"
                onClick={() => navigate(`/applications/${app.id}`)}
              >
                <Eye size={15} />
                <span>View Details</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllApplicationsView;

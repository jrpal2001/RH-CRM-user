import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Search, Eye, Building2, ArrowRight, ShieldCheck, Palmtree, Mail, CreditCard, Copy, CheckCheck, Briefcase } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import ROUTES from '../../config/routes';

export const EmployeesView = () => {
  const navigate = useNavigate();
  const { user, employees, applications, showToast } = useApp();
  const [search, setSearch] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const isCompany = user?.type === 'company';

  const handleCopy = (e, text, label) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    showToast(`Copied ${label}: ${text}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const matchSearch =
        search.trim() === '' ||
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.department.toLowerCase().includes(search.toLowerCase()) ||
        emp.designation.toLowerCase().includes(search.toLowerCase()) ||
        emp.passportNo.toLowerCase().includes(search.toLowerCase()) ||
        emp.email.toLowerCase().includes(search.toLowerCase());

      return matchSearch;
    });
  }, [employees, search]);

  if (!isCompany) {
    return (
      <div className="rh-tab-content-wrap animate-fade-in">
        <div className="rh-empty-auth-card">
          <Building2 size={44} className="rh-empty-icon" />
          <h3>Corporate Account Required</h3>
          <p>The Company Employees roster is only available for corporate company accounts.</p>
          <button
            type="button"
            className="rh-pill-btn rh-login-trigger-btn"
            onClick={() => navigate(ROUTES.DASHBOARD)}
          >
            Go to Personal Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      <div className="rh-section-header-row">
        <div>
          <div className="rh-eyebrow-capsule">
            <span className="rh-eyebrow-dot"></span>
            <span className="rh-section-eyebrow">CORPORATE ROSTER</span>
          </div>
          <h1 className="rh-page-main-title">Company Employees</h1>
          <p className="rh-section-desc">Manage verified corporate travelers, passport validity, and assigned visa filings.</p>
        </div>
        <div className="rh-active-count-chip corporate">
          <Users size={13} />
          <span>{filteredEmployees.length} Enrolled Travelers</span>
        </div>
      </div>

      {/* Compact Search Toolbar */}
      <div className="rh-all-apps-toolbar">
        <div className="rh-apps-search-wrap" style={{ maxWidth: '440px' }}>
          <Search size={15} className="rh-search-icon" />
          <input
            type="text"
            placeholder="Search employee by name, department, passport..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button type="button" className="rh-search-clear" onClick={() => setSearch('')}>
              ✕
            </button>
          )}
        </div>
      </div>

      {/* 3-Column Compact Executive Roster Grid */}
      <div className="rh-compact-employees-grid">
        {filteredEmployees.map((emp) => {
          const empApps = applications.filter(
            (app) => app.employeeId === emp.id || emp.applicationIds?.includes(app.id)
          );
          const activeCount = empApps.filter((a) => a.statusGroup === 'current' || a.status === 'under_review').length;

          return (
            <div
              key={emp.id}
              className="rh-compact-employee-card animate-fade-in"
              onClick={() => navigate(`/employees/${emp.id}`)}
            >
              {/* Card top banner accent */}
              <div className="rh-cec-top-accent"></div>

              <div className="rh-cec-header">
                <div className="rh-cec-avatar-wrap">
                  <img src={emp.avatar} alt={emp.name} className="rh-cec-avatar" />
                  <span className="rh-cec-dot" title="Active Corporate Traveler"></span>
                </div>
                <div className="rh-cec-info">
                  <h3 className="rh-cec-name">{emp.name}</h3>
                  <span className="rh-cec-designation">{emp.designation}</span>
                  <div className="rh-cec-badges">
                    <span className="rh-cec-dept-pill">{emp.department}</span>
                    <span className="rh-cec-country-pill">{emp.nationality}</span>
                  </div>
                </div>
              </div>

              {/* High-Density Inline Key-Values */}
              <div className="rh-cec-details-box">
                <div className="rh-cec-row">
                  <div
                    className="rh-cec-col-half"
                    onClick={(e) => handleCopy(e, emp.id, 'Employee ID')}
                    title="Click to copy ID"
                  >
                    <span className="rh-cec-label">ID</span>
                    <div className="rh-cec-val-interactive">
                      <code className="rh-cec-code">{emp.id}</code>
                      {copiedId === emp.id ? <CheckCheck size={11} color="#059669" /> : <Copy size={11} className="rh-cec-copy" />}
                    </div>
                  </div>

                  <div
                    className="rh-cec-col-half"
                    onClick={(e) => handleCopy(e, emp.passportNo, 'Passport')}
                    title="Click to copy Passport"
                  >
                    <span className="rh-cec-label">Passport</span>
                    <div className="rh-cec-val-interactive">
                      <span className="rh-cec-val font-mono">{emp.passportNo}</span>
                      {copiedId === emp.passportNo ? <CheckCheck size={11} color="#059669" /> : <Copy size={11} className="rh-cec-copy" />}
                    </div>
                  </div>
                </div>

                <div className="rh-cec-row single-line">
                  <span className="rh-cec-label">Email</span>
                  <span className="rh-cec-email truncate">{emp.email}</span>
                </div>

                <div className="rh-cec-row single-line flex-between">
                  <span className="rh-cec-label">Cases</span>
                  <div className="rh-cec-cases-tags">
                    <span className="rh-cec-files-tag">{empApps.length} Files</span>
                    {activeCount > 0 && (
                      <span className="rh-cec-active-tag">
                        <span className="rh-chip-dot"></span> {activeCount} Active
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Compact Footer Action */}
              <div className="rh-cec-footer">
                <button
                  type="button"
                  className="rh-cec-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/employees/${emp.id}`);
                  }}
                >
                  <Eye size={13} />
                  <span>View Details & History</span>
                  <ArrowRight size={12} className="rh-cec-arrow" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeesView;

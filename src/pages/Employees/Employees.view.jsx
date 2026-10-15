import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Search, Eye, Building2, ArrowRight, ShieldCheck, Palmtree } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import ROUTES from '../../config/routes';

export const EmployeesView = () => {
  const navigate = useNavigate();
  const { user, employees, applications } = useApp();
  const [search, setSearch] = useState('');

  const isCompany = user?.type === 'company';

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
          <h1 className="rh-page-main-title">Company Employees</h1>
          <p className="rh-page-main-desc">
            Manage your corporate roster and view visa & holiday application histories for each employee.
          </p>
        </div>
        <div className="rh-active-count-chip">
          <Users size={15} />
          <span>{employees.length} Enrolled Employees</span>
        </div>
      </div>

      {/* Search Input */}
      <div className="rh-all-apps-toolbar">
        <div className="rh-apps-search-wrap" style={{ maxWidth: '480px' }}>
          <Search size={16} className="rh-search-icon" />
          <input
            type="text"
            placeholder="Search employee by name, department, or passport..."
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

      {/* Employees Grid */}
      <div className="rh-employees-grid">
        {filteredEmployees.map((emp) => {
          const empApps = applications.filter(
            (app) => app.employeeId === emp.id || emp.applicationIds?.includes(app.id)
          );
          const activeCount = empApps.filter((a) => a.statusGroup === 'current' || a.status === 'under_review').length;

          return (
            <div key={emp.id} className="rh-employee-card animate-fade-in">
              <div className="rh-emp-header">
                <img src={emp.avatar} alt={emp.name} className="rh-emp-avatar" />
                <div className="rh-emp-title-info">
                  <h3 className="rh-emp-name">{emp.name}</h3>
                  <span className="rh-emp-designation">{emp.designation}</span>
                  <span className="rh-emp-dept-chip">{emp.department}</span>
                </div>
              </div>

              <div className="rh-emp-info-rows">
                <div className="rh-emp-info-row">
                  <span className="rh-emp-info-lbl">Employee ID</span>
                  <code className="rh-emp-code">{emp.id}</code>
                </div>
                <div className="rh-emp-info-row">
                  <span className="rh-emp-info-lbl">Passport</span>
                  <span className="rh-emp-info-val font-mono">{emp.passportNo}</span>
                </div>
                <div className="rh-emp-info-row">
                  <span className="rh-emp-info-lbl">Email</span>
                  <span className="rh-emp-info-val truncate">{emp.email}</span>
                </div>
                <div className="rh-emp-info-row">
                  <span className="rh-emp-info-lbl">Total Travel Files</span>
                  <span className="rh-emp-files-badge">{empApps.length} Applications</span>
                </div>
              </div>

              <div className="rh-emp-card-footer">
                <button
                  type="button"
                  className="rh-pill-btn rh-view-details-btn full-width"
                  onClick={() => navigate(`/employees/${emp.id}`)}
                >
                  <Eye size={15} />
                  <span>View Details & Travel History</span>
                  <ArrowRight size={14} />
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

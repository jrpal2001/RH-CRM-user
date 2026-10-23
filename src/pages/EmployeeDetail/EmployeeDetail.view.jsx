import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  Eye,
  ShieldCheck,
  Palmtree,
  ArrowRight,
  AlertCircle,
  Mail,
  Phone,
  CreditCard,
  Briefcase,
  Globe
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const EmployeeDetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getEmployeeById } = useApp();

  const employee = getEmployeeById(id);

  if (!employee) {
    return (
      <div className="rh-tab-content-wrap animate-fade-in">
        <button
          type="button"
          className="rh-back-link-btn"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={18} />
          <span>Back to Employees</span>
        </button>

        <div className="rh-empty-auth-card">
          <AlertCircle size={44} color="#dc2626" />
          <h3>Employee Not Found</h3>
          <p>No employee found matching ID "{id}".</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      {/* Back button */}
      <div className="rh-detail-page-nav">
        <button
          type="button"
          className="rh-back-link-btn"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={18} />
          <span>Back to Employees</span>
        </button>
      </div>

      {/* Employee Profile Header Card */}
      <div className="rh-emp-detail-profile-card">
        <div className="rh-emp-profile-main">
          <img
            src={employee.avatar}
            alt={employee.name}
            className="rh-emp-detail-avatar"
          />
          <div className="rh-emp-profile-titles">
            <div className="rh-emp-badge-row">
              <span className="rh-emp-id-badge">ID: {employee.id}</span>
              <span className="rh-emp-dept-badge">{employee.department}</span>
            </div>
            <h1 className="rh-emp-profile-name">{employee.name}</h1>
            <span className="rh-emp-profile-role">{employee.designation}</span>
          </div>
        </div>

        <div className="rh-emp-profile-details-grid">
          {/* <div className="rh-emp-detail-col">
            <span className="rh-emp-label"><CreditCard size={14} /> Passport Number</span>
            <span className="rh-emp-val font-mono">{employee.passportNo}</span>
          </div> */}
          <div className="rh-emp-detail-col">
            <span className="rh-emp-label"><Mail size={14} /> Work Email</span>
            <span className="rh-emp-val">{employee.email}</span>
          </div>
          <div className="rh-emp-detail-col">
            <span className="rh-emp-label"><Phone size={14} /> Contact Phone</span>
            <span className="rh-emp-val">{employee.phone}</span>
          </div>
          <div className="rh-emp-detail-col">
            <span className="rh-emp-label"><Globe size={14} /> Nationality</span>
            <span className="rh-emp-val">{employee.nationality || 'International'}</span>
          </div>
        </div>
      </div>

      {/* Section 1: Visa Applications History */}
      <div className="rh-section-box">
        <div className="rh-section-header-row">
          <div>
            <h2 className="rh-section-title">
              <ShieldCheck size={20} className="rh-sec-icon visa" />
              Visa Applications History ({employee.visaHistory?.length || 0})
            </h2>
            <p className="rh-section-desc">
              All official consulate & embassy visa files submitted for {employee.name.split(' ')[0]}.
            </p>
          </div>
        </div>

        {employee.visaHistory && employee.visaHistory.length > 0 ? (
          <div className="rh-employee-apps-list">
            {employee.visaHistory.map((app) => (
              <div key={app.id} className="rh-emp-app-row-card animate-fade-in">
                <div className="rh-emp-app-left">
                  <div className="rh-app-header-tags">
                    <code className="rh-table-code">{app.id}</code>
                    <span className={`rh-status-badge ${app.status}`}>{app.statusLabel}</span>
                  </div>
                  <h4 className="rh-emp-app-title">
                    <span className="rh-table-flag">{app.flag}</span> {app.visaType}
                  </h4>
                  <div className="rh-emp-app-sub">
                    <span>Submitted: {app.submissionDate}</span>
                    <span>•</span>
                    <span>Country: {app.country}</span>
                  </div>
                </div>

                <div className="rh-emp-app-right">
                  <button
                    type="button"
                    className="rh-pill-btn rh-view-details-btn"
                    onClick={() => navigate(`/applications/${app.id}`)}
                  >
                    <Eye size={14} />
                    <span>View Details & Downloads</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rh-empty-sub-card">
            <p>No visa applications found for this employee.</p>
          </div>
        )}
      </div>

      {/* Section 2: Holiday / Tour Booking History */}
      <div className="rh-section-box">
        <div className="rh-section-header-row">
          <div>
            <h2 className="rh-section-title">
              <Palmtree size={20} className="rh-sec-icon holiday" />
              Holiday / Tour Booking History ({employee.holidayHistory?.length || 0})
            </h2>
            <p className="rh-section-desc">
              Corporate retreats, packages, and holiday flights booked for {employee.name.split(' ')[0]}.
            </p>
          </div>
        </div>

        {employee.holidayHistory && employee.holidayHistory.length > 0 ? (
          <div className="rh-employee-apps-list">
            {employee.holidayHistory.map((app) => (
              <div key={app.id} className="rh-emp-app-row-card animate-fade-in">
                <div className="rh-emp-app-left">
                  <div className="rh-app-header-tags">
                    <code className="rh-table-code">{app.id}</code>
                    <span className={`rh-status-badge ${app.status}`}>{app.statusLabel}</span>
                  </div>
                  <h4 className="rh-emp-app-title">
                    <span className="rh-table-flag">{app.flag}</span> {app.packageName}
                  </h4>
                  <div className="rh-emp-app-sub">
                    <span>Dates: {app.travelDates || app.duration}</span>
                    <span>•</span>
                    <span>Hotel: {app.hotel || 'Luxury Chalet'}</span>
                  </div>
                </div>

                <div className="rh-emp-app-right">
                  <button
                    type="button"
                    className="rh-pill-btn rh-view-details-btn"
                    onClick={() => navigate(`/applications/${app.id}`)}
                  >
                    <Eye size={14} />
                    <span>View Details & Downloads</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rh-empty-sub-card">
            <p>No holiday bookings found for this employee.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDetailView;

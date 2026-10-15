import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Eye, ShieldCheck, Palmtree, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ActiveApplicationsView = () => {
  const navigate = useNavigate();
  const { applications } = useApp();

  // Active files: currently in progress (e.g. status !== 'completed' || status === 'under_review' || status === 'pending')
  const activeApplications = applications.filter(
    (app) => app.statusGroup === 'current' || app.status === 'under_review' || app.status === 'pending' || app.status === 'active'
  );

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      <div className="rh-section-header-row">
        <div>
          <h1 className="rh-page-main-title">Current Active Applications</h1>
          <p className="rh-page-main-desc">
            All visa applications and holiday bookings currently in progress or awaiting embassy processing.
          </p>
        </div>
        <div className="rh-active-count-chip">
          <Clock size={15} />
          <span>{activeApplications.length} Active Files</span>
        </div>
      </div>

      {activeApplications.length > 0 ? (
        <div className="rh-active-cards-grid">
          {activeApplications.map((app) => (
            <div key={app.id} className="rh-active-file-card">
              <div className="rh-active-file-top">
                <div className="rh-file-badge-row">
                  <span className={`rh-type-tag ${app.type}`}>
                    {app.type === 'visa' ? <ShieldCheck size={13} /> : <Palmtree size={13} />}
                    {app.type === 'visa' ? 'Visa Application' : 'Holiday Tour'}
                  </span>
                  <span className={`rh-status-badge ${app.status}`}>
                    {app.statusLabel}
                  </span>
                </div>

                <h3 className="rh-active-file-title">
                  <span className="rh-file-flag">{app.flag}</span>
                  {app.type === 'visa' ? app.visaType : app.packageName}
                </h3>

                <div className="rh-file-meta-row">
                  <span><strong>Applicant:</strong> {app.applicantName}</span>
                  <span>•</span>
                  <span><strong>Passport:</strong> <code>{app.passportNumber}</code></span>
                  <span>•</span>
                  <span><strong>Submitted:</strong> {app.submissionDate}</span>
                </div>
              </div>

              {/* Progress Summary Pill */}
              <div className="rh-active-progress-summary">
                <div className="rh-progress-step-info">
                  <span className="rh-step-indicator">
                    Step {app.currentStep} of {app.steps.length}
                  </span>
                  <span className="rh-step-curr-title">
                    {app.steps[app.currentStep - 1]?.title || 'Processing'}
                  </span>
                </div>
                <div className="rh-step-progress-bar">
                  <div
                    className="rh-progress-fill"
                    style={{ width: `${(app.currentStep / app.steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Action row with View Button */}
              <div className="rh-active-card-footer">
                <span className="rh-ref-code">Ref: {app.id}</span>
                <button
                  type="button"
                  className="rh-pill-btn rh-view-details-btn"
                  onClick={() => navigate(`/applications/${app.id}`)}
                >
                  <Eye size={15} />
                  <span>View Details & Downloads</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rh-empty-auth-card">
          <Clock size={44} className="rh-empty-icon" />
          <h3>No Active In-Flight Applications</h3>
          <p>All of your past visa and holiday applications have been completed and granted.</p>
        </div>
      )}
    </div>
  );
};

export default ActiveApplicationsView;

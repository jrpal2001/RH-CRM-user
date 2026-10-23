import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Eye, ShieldCheck, Palmtree, ArrowRight, Check, User, CreditCard, Calendar, Copy, CheckCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ActiveApplicationsView = () => {
  const navigate = useNavigate();
  const { applications, showToast } = useApp();
  const [copiedId, setCopiedId] = useState(null);

  // Active files: currently in progress
  const activeApplications = applications.filter(
    (app) => app.statusGroup === 'current' || app.status === 'under_review' || app.status === 'pending' || app.status === 'active'
  );

  const handleCopy = (e, id) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    showToast(`Copied Reference: ${id}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      <div className="rh-section-header-row">
        <div>
          <div className="rh-eyebrow-capsule">
            <span className="rh-eyebrow-dot"></span>
            <span className="rh-section-eyebrow">IN-FLIGHT CONCIERGE</span>
          </div>
          <h1 className="rh-page-main-title">Current Active Applications</h1>
          <p className="rh-section-desc">Live diplomatic filing timeline, biometric appointments, and consular clearance tracking.</p>
        </div>
        <div className="rh-active-count-chip pulse">
          <span className="rh-active-pulse-dot"></span>
          <span>{activeApplications.length} In-Flight Dossiers</span>
        </div>
      </div>

      {activeApplications.length > 0 ? (
        <div className="rh-active-cards-grid">
          {activeApplications.map((app) => (
            <div
              key={app.id}
              className="rh-active-file-card"
              onClick={() => navigate(`/applications/${app.id}`)}
            >
              <div className="rh-active-file-top">
                <div className="rh-file-badge-row">
                  <div className="rh-badge-group-left">
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
                      <span>{app.type === 'visa' ? 'Visa Application' : 'Holiday Tour'}</span>
                    </span>
                  </div>

                  <span className={`rh-status-badge ${app.status}`}>
                    <span className="rh-status-dot"></span>
                    {app.statusLabel}
                  </span>
                </div>

                <h3 className="rh-active-file-title">
                  <span className="rh-file-flag">{app.flag}</span>
                  <span>{app.type === 'visa' ? app.visaType : app.packageName}</span>
                </h3>

                {/* Compact Single-Line Meta Data */}
                <div className="rh-file-compact-meta">
                  <span className="rh-meta-applicant">
                    <User size={12} className="rh-meta-icon" />
                    <strong>{app.applicantName}</strong>
                  </span>
                  <span className="rh-meta-bullet">•</span>
                  <span className="rh-meta-passport">
                    <span>Passport:</span> <code>{app.passportNumber}</code>
                  </span>
                  <span className="rh-meta-bullet">•</span>
                  <span className="rh-meta-date">
                    <span>Submitted:</span> {app.submissionDate}
                  </span>
                  {app.estimatedCompletion && (
                    <>
                      <span className="rh-meta-bullet">•</span>
                      <span className="rh-meta-eta">
                        <Clock size={11} />
                        <span>ETA: {app.estimatedCompletion}</span>
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Compact Sleek Milestone Stepper Bar */}
              <div className="rh-active-stepper-container">
                <div className="rh-stepper-header">
                  <span className="rh-stepper-title">Milestone Roadmap</span>
                  <span className="rh-stepper-status-badge">
                    Step {app.currentStep} of {app.steps.length}: <strong>{app.steps[app.currentStep - 1]?.title || 'Processing'}</strong>
                  </span>
                </div>

                <div className="rh-compact-stepper-bar">
                  {app.steps.map((step, idx) => {
                    const stepNum = idx + 1;
                    const isPassed = stepNum < app.currentStep;
                    const isCurrent = stepNum === app.currentStep;

                    return (
                      <div
                        key={step.id || idx}
                        className={`rh-step-node ${isPassed ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
                      >
                        <div className="rh-step-node-top">
                          <span className="rh-step-node-bubble">
                            {isPassed ? <Check size={10} /> : stepNum}
                          </span>
                          {idx < app.steps.length - 1 && (
                            <span className={`rh-step-node-line ${isPassed ? 'active' : ''}`}></span>
                          )}
                        </div>
                        <span className="rh-step-node-title">{step.title}</span>
                        <span className="rh-step-node-date">{step.date || 'Pending'}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action row with View Button on the SAME line */}
              <div className="rh-active-card-footer">
                <span className="rh-footer-destination">
                  {app.country} • {app.type === 'visa' ? 'Consular Filing' : 'Luxury Itinerary'}
                </span>
                <span className="rh-active-card-action">
                  <span>View Dossier</span>
                  <ArrowRight size={12} />
                </span>
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

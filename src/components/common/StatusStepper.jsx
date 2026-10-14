import React, { useState } from 'react';
import { Check, Clock, AlertCircle, Copy, CheckCheck } from 'lucide-react';

export default function StatusStepper({ application, onSelectDocument }) {
  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(application.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
      case 'confirmed':
        return {
          bg: 'var(--rh-status-approved-bg)',
          color: 'var(--rh-status-approved)',
          border: 'var(--rh-status-approved-border)',
          label: 'Completed & Issued'
        };
      case 'under_review':
        return {
          bg: 'var(--rh-status-review-bg)',
          color: 'var(--rh-status-review)',
          border: 'var(--rh-status-review-border)',
          label: 'Consulate In Progress'
        };
      case 'submitted':
        return {
          bg: 'var(--rh-status-pending-bg)',
          color: 'var(--rh-status-pending)',
          border: 'var(--rh-status-pending-border)',
          label: 'Submitted'
        };
      default:
        return {
          bg: 'var(--rh-bg-subtle)',
          color: 'var(--rh-text-secondary)',
          border: 'var(--rh-border)',
          label: 'Active'
        };
    }
  };

  const statusStyle = getStatusColor(application.status);

  return (
    <div className="rh-tracker-card animate-fade-in">
      {/* Top Header Card Info */}
      <div className="rh-tracker-header">
        <div className="rh-tracker-main-info">
          <div className="rh-tracker-badge-row">
            <span
              className="rh-tracker-status-tag"
              style={{
                backgroundColor: statusStyle.bg,
                color: statusStyle.color,
                borderColor: statusStyle.border
              }}
            >
              <span className="rh-status-pulse-dot" style={{ backgroundColor: statusStyle.color }}></span>
              {application.statusLabel}
            </span>

            <span className="rh-app-type-tag">
              {application.type === 'visa' ? '🛂 Visa Service' : '🌴 Holiday Tour'}
            </span>
          </div>

          <h3 className="rh-tracker-title">
            <span className="rh-tracker-flag">{application.flag}</span>
            {application.type === 'visa' ? application.visaType : application.packageName}
          </h3>

          <div className="rh-tracker-id-row">
            <span className="rh-id-label">Ref ID:</span>
            <code className="rh-id-code">{application.id}</code>
            <button
              type="button"
              className="rh-copy-btn"
              onClick={handleCopyId}
              title="Copy Reference ID"
            >
              {copied ? <CheckCheck size={13} color="#059669" /> : <Copy size={13} />}
            </button>
            <span className="rh-tracker-date">• Submitted on {application.submissionDate}</span>
          </div>
        </div>
      </div>

      {/* Stepper Timeline Progression */}
      <div className="rh-stepper-container">
        <h4 className="rh-stepper-title">Application Lifecycle</h4>
        <div className="rh-stepper-track">
          {application.steps.map((step, idx) => {
            const isCompleted = step.done;
            const isCurrent = !isCompleted && (idx === 0 || application.steps[idx - 1].done);

            return (
              <div
                key={step.id}
                className={`rh-step-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
              >
                {/* Step Connector Line */}
                {idx < application.steps.length - 1 && (
                  <div
                    className={`rh-step-line ${isCompleted ? 'line-completed' : ''}`}
                  ></div>
                )}

                {/* Step Marker Bubble */}
                <div className="rh-step-bubble">
                  {isCompleted ? (
                    <Check size={14} className="rh-step-check" />
                  ) : isCurrent ? (
                    <Clock size={13} className="rh-step-clock" />
                  ) : (
                    <span className="rh-step-num">{idx + 1}</span>
                  )}
                </div>

                {/* Step Content */}
                <div className="rh-step-details">
                  <div className="rh-step-header">
                    <span className="rh-step-name">{step.title}</span>
                    <span className="rh-step-timestamp">{step.date}</span>
                  </div>
                  <p className="rh-step-desc">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Important Notes Callout */}
      {application.notes && (
        <div className="rh-tracker-notes-box">
          <div className="rh-notes-icon">
            <AlertCircle size={16} />
          </div>
          <div className="rh-notes-text">
            <strong>Case Officer Note:</strong> {application.notes}
          </div>
        </div>
      )}
    </div>
  );
}

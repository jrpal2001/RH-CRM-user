import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  Download,
  FileText,
  Receipt,
  FileCheck2,
  CheckCircle,
  AlertCircle,
  Clock,
  Check,
  ShieldCheck,
  Palmtree,
  Printer,
  Copy,
  CheckCheck,
  Loader2,
  Eye,
  ArrowRight,
  AlertTriangle,
  CreditCard,
  X,
  Lock,
  Building2,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Truck,
  UserCheck,
  FileCheck,
  HelpCircle,
  BadgeCheck,
  Inbox
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ApplicationDetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getApplicationById, showToast } = useApp();

  const app = getApplicationById(id);
  const [copied, setCopied] = useState(false);
  const [copiedRef, setCopiedRef] = useState(null);
  const [downloadingKey, setDownloadingKey] = useState(null);
  const [downloadedKeys, setDownloadedKeys] = useState({});
  const [showDocPreview, setShowDocPreview] = useState(false);
  const [payingPending, setPayingPending] = useState(false);

  // Expanded stages accordion state (default all active/completed open)
  const [expandedStages, setExpandedStages] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true
  });

  const toggleStage = (stepId) => {
    setExpandedStages((prev) => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };

  if (!app) {
    return (
      <div className="rh-tab-content-wrap animate-fade-in">
        <button
          type="button"
          className="rh-back-link-btn"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={18} />
          <span>Back to Applications</span>
        </button>

        <div className="rh-empty-auth-card">
          <AlertCircle size={44} color="#dc2626" />
          <h3>Application Not Found</h3>
          <p>No application matches reference ID "{id}".</p>
        </div>
      </div>
    );
  }

  const handleCopyId = () => {
    navigator.clipboard.writeText(app.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyText = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedRef(key);
    showToast(`Copied: ${text}`);
    setTimeout(() => setCopiedRef(null), 2000);
  };

  const triggerDownload = (docKey, docName, docType) => {
    if (downloadingKey) return;
    setDownloadingKey(docKey);

    setTimeout(() => {
      setDownloadingKey(null);
      setDownloadedKeys((prev) => ({ ...prev, [docKey]: true }));

      // Simulate file download
      const element = document.createElement('a');
      const mockContent = `RH GLOBAL CRM OFFICIAL RECORD
=====================================================
Document: ${docName}
Document Type: ${docType}
Reference File ID: ${app.id}
Applicant: ${app.applicantName}
Passport: ${app.passportNumber}
Country / Destination: ${app.country}
Status: ${app.statusLabel.toUpperCase()}
Generated on: ${new Date().toLocaleDateString()}
=====================================================
This document has been issued by RH Global CRM Compliance Desk.
Official Portal: https://rhglobalcrm.com | support@rhglobalcrm.com`;

      const file = new Blob([mockContent], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `${docName.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      showToast(`Downloaded: ${docName}`);

      setTimeout(() => {
        setDownloadedKeys((prev) => ({ ...prev, [docKey]: false }));
      }, 4000);
    }, 700);
  };

  // Payment details extraction with fallback
  const payment = app.paymentDetails || {
    feeLabel: app.type === 'visa' ? 'TOTAL VISA FEE' : 'TOTAL PACKAGE FEE',
    totalFee: 21000,
    totalPaid: 21000,
    pendingBalance: 0,
    paymentStatus: 'PAID IN FULL',
    transactions: [
      {
        id: 'PAY-1001',
        type: 'ADVANCE DEPOSIT',
        mode: 'Online UPI / Netbanking',
        amount: 10000,
        date: '2026-10-02',
        reference: 'TXN-998120'
      },
      {
        id: 'PAY-1002',
        type: 'FINAL BALANCE',
        mode: 'Credit Card / Gateway',
        amount: 11000,
        date: '2026-10-05',
        reference: 'TXN-998144'
      }
    ]
  };

  const formatInr = (val) => `₹${Number(val || 0).toLocaleString('en-IN')}`;
  const isPending = payment.pendingBalance > 0;

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      {/* Top Back Navigation Bar */}
      <div className="rh-detail-page-nav">
        <button
          type="button"
          className="rh-back-link-btn"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={18} />
          <span>Back</span>
        </button>

        {/* <div className="rh-detail-nav-actions">
          <button
            type="button"
            className="rh-icon-btn"
            title="Print Application Summary"
            onClick={() => window.print()}
          >
            <Printer size={16} />
          </button>
        </div> */}
      </div>

      {/* Hero Overview Header */}
      <div className="rh-app-detail-hero-card">
        <div className="rh-detail-hero-header">
          <div className="rh-detail-hero-main">
            <div className="rh-detail-title-line">
              <span className="rh-detail-country-flag">{app.flag}</span>
              <h1 className="rh-detail-main-title">
                {app.type === 'visa' ? app.visaType : app.packageName}
              </h1>
            </div>

            <div className="rh-detail-tag-row">
              <span className={`rh-type-tag ${app.type}`}>
                {app.type === 'visa' ? <ShieldCheck size={13} /> : <Palmtree size={13} />}
                {app.type === 'visa' ? 'Visa Service' : 'Holiday Tour Booking'}
              </span>

              <span className={`rh-status-badge ${app.status}`}>
                {app.statusLabel}
              </span>
            </div>
          </div>

          <div className="rh-detail-ref-copy-row">
            <span className="rh-ref-label">Reference ID:</span>
            <code className="rh-detail-ref-code">{app.id}</code>
            <button
              type="button"
              className="rh-copy-btn"
              onClick={handleCopyId}
              title="Copy Reference ID"
            >
              {copied ? <CheckCheck size={13} color="#059669" /> : <Copy size={13} />}
            </button>
          </div>
        </div>

        <div className="rh-detail-attributes-grid">
          <div className="rh-attr-item">
            <span className="rh-attr-lbl">Primary Applicant</span>
            <span className="rh-attr-val">{app.applicantName}</span>
          </div>

          <div className="rh-attr-item">
            <span className="rh-attr-lbl">Destination Country</span>
            <span className="rh-attr-val">{app.country}</span>
          </div>

          <div className="rh-attr-item">
            <span className="rh-attr-lbl">Submission Date</span>
            <span className="rh-attr-val">{app.submissionDate}</span>
          </div>

          <div className="rh-attr-item">
            <span className="rh-attr-lbl">Current Stage</span>
            <span className="rh-attr-val stage">
              {app.currentStageTitle || `Stage ${app.currentStep} of ${app.steps.length}`}
            </span>
          </div>

          {app.travelDates && (
            <div className="rh-attr-item">
              <span className="rh-attr-lbl">Travel Schedule</span>
              <span className="rh-attr-val">{app.travelDates}</span>
            </div>
          )}

          {app.hotel && (
            <div className="rh-attr-item">
              <span className="rh-attr-lbl">Confirmed Hotel</span>
              <span className="rh-attr-val">{app.hotel}</span>
            </div>
          )}
        </div>

        {/* Embedded Downloads Section Inside the Card */}
        <div className="rh-card-downloads-section">
          <div className="rh-card-downloads-header">
            <div className="rh-card-downloads-title-wrap">
              <Download size={13} className="rh-card-downloads-icon" />
              <span className="rh-card-downloads-title">Official Document Downloads</span>
            </div>
            <span className="rh-card-downloads-subtitle">Direct PDF access to filed records</span>
          </div>

          {/* 3 Compact Download Action Buttons */}
          <div className="rh-compact-downloads-bar inside-card">
            {/* 1. Download Application */}
            <button
              type="button"
              className={`rh-compact-dl-btn ${downloadedKeys.app ? 'downloaded' : ''}`}
              onClick={() =>
                triggerDownload(
                  'app',
                  app.downloads?.application?.name || `${app.id}_Application_Form.pdf`,
                  'Application Form'
                )
              }
              disabled={downloadingKey === 'app'}
              title={app.downloads?.application?.name || 'Application Form'}
            >
              {downloadingKey === 'app' ? (
                <Loader2 size={13} className="rh-spinner" />
              ) : downloadedKeys.app ? (
                <CheckCircle size={13} color="#059669" />
              ) : (
                <FileText size={13} />
              )}
              <span className="rh-dl-btn-short">
                {downloadedKeys.app ? 'Saved' : 'Application'}
              </span>
              <span className="rh-dl-btn-full">
                {downloadedKeys.app ? 'Downloaded Application' : 'Download Application'}
              </span>
            </button>

            {/* 2. Download Invoice */}
            <button
              type="button"
              className={`rh-compact-dl-btn ${downloadedKeys.invoice ? 'downloaded' : ''}`}
              onClick={() =>
                triggerDownload(
                  'invoice',
                  app.downloads?.invoice?.name || `${app.id}_Invoice.pdf`,
                  'Tax Invoice'
                )
              }
              disabled={downloadingKey === 'invoice'}
              title={app.downloads?.invoice?.name || 'Payment Invoice'}
            >
              {downloadingKey === 'invoice' ? (
                <Loader2 size={13} className="rh-spinner" />
              ) : downloadedKeys.invoice ? (
                <CheckCircle size={13} color="#059669" />
              ) : (
                <Receipt size={13} />
              )}
              <span className="rh-dl-btn-short">
                {downloadedKeys.invoice ? 'Saved' : 'Invoice'}
              </span>
              <span className="rh-dl-btn-full">
                {downloadedKeys.invoice ? 'Downloaded Invoice' : 'Download Invoice'}
              </span>
            </button>

            {/* 3. Download Visa or Holiday Document */}
            <button
              type="button"
              className={`rh-compact-dl-btn highlight ${downloadedKeys.doc ? 'downloaded' : ''}`}
              onClick={() =>
                triggerDownload(
                  'doc',
                  app.downloads?.document?.name || `${app.id}_Visa_Document.pdf`,
                  app.type === 'visa' ? 'eVisa Grant' : 'Boarding Pass & Voucher'
                )
              }
              disabled={downloadingKey === 'doc'}
              title={app.downloads?.document?.name || (app.type === 'visa' ? 'Visa Document' : 'Travel Tickets')}
            >
              {downloadingKey === 'doc' ? (
                <Loader2 size={13} className="rh-spinner" />
              ) : downloadedKeys.doc ? (
                <CheckCircle size={13} color="#059669" />
              ) : (
                <FileCheck2 size={13} />
              )}
              <span className="rh-dl-btn-short">
                {downloadedKeys.doc
                  ? 'Saved'
                  : app.type === 'visa'
                  ? 'Visa Grant'
                  : 'Tickets'}
              </span>
              <span className="rh-dl-btn-full">
                {downloadedKeys.doc
                  ? 'Downloaded Document'
                  : app.type === 'visa'
                  ? 'Download Visa Document'
                  : 'Download Tickets'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* APPLICATION LIFECYCLE STEPPER & STAGE-INSIDE DETAILS SECTION              */}
      {/* ========================================================================= */}
      <div className="rh-section-box">
        <div className="rh-section-header-row">
          <div>
            <h2 className="rh-section-title">
              {app.type === 'visa' ? 'Visa Processing Stages & Details' : 'Tour Application Lifecycle'}
            </h2>
            <p className="rh-section-desc">
              Track real-time stage progression and inspect inside checklists, coordination, and consular logs.
            </p>
          </div>
          <span className="rh-stage-count-capsule">
            {app.type === 'visa' ? '7 Comprehensive Stages' : `${app.steps.length} Milestones`}
          </span>
        </div>

        <div className="rh-stepper-track-large">
          {app.steps.map((step, idx) => {
            const isCompleted = step.done;
            const isCurrent = !isCompleted && (idx === 0 || app.steps[idx - 1]?.done);
            const isExpanded = expandedStages[step.id];
            const details = step.details || {};

            return (
              <div
                key={step.id}
                className={`rh-large-step-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
              >
                {/* Connector Line */}
                {idx < app.steps.length - 1 && (
                  <div className={`rh-large-step-line ${isCompleted ? 'active' : ''}`}></div>
                )}

                <div className="rh-large-step-bubble">
                  {isCompleted ? <Check size={16} /> : isCurrent ? <Clock size={15} /> : idx + 1}
                </div>

                <div className="rh-large-step-content">
                  <div className="rh-large-step-header">
                    <div className="rh-large-step-title-group">
                      <h4>{step.title}</h4>
                      {isCompleted ? (
                        <span className="rh-stage-status-pill completed">Completed</span>
                      ) : isCurrent ? (
                        <span className="rh-stage-status-pill in-progress">In Progress</span>
                      ) : (
                        <span className="rh-stage-status-pill pending">Upcoming</span>
                      )}
                    </div>
                    <span className="rh-large-step-date">{step.date}</span>
                  </div>

                  <p className="rh-large-step-desc">{step.desc}</p>

                  {/* Stage-Inside Details Toggle (For Visa Applications) */}
                  {app.type === 'visa' && (
                    <div className="rh-stage-details-container">
                      <button
                        type="button"
                        className="rh-stage-details-toggle-btn"
                        onClick={() => toggleStage(step.id)}
                      >
                        <span>Stage Inside Details & Audit</span>
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>

                      {isExpanded && (
                        <div className="rh-stage-details-panel animate-fade-in">
                          {/* ----------------------------------------------------------- */}
                          {/* STAGE 1: DOCS RECEIVED DETAILS                              */}
                          {/* ----------------------------------------------------------- */}
                          {step.stageKey === 'DOCS_RECEIVED' && (
                            <div className="rh-stage-inner-block">
                              <div className="rh-stage-meta-row">
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Docs Received Mode</span>
                                  <span className="rh-mode-badge">{details.mode || 'Courier'}</span>
                                </div>
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Intake Date</span>
                                  <span className="rh-meta-val">{details.receivedDate || step.date}</span>
                                </div>
                                {details.courierTracking && (
                                  <div className="rh-stage-meta-item">
                                    <span className="rh-meta-label">Courier Tracking</span>
                                    <code className="rh-code-badge">{details.courierTracking}</code>
                                  </div>
                                )}
                              </div>

                              {/* Reusable General Checklist (From Spec) */}
                              <div className="rh-stage-checklist-section">
                                <div className="rh-checklist-header">
                                  <FileCheck size={14} />
                                  <span>Document Intake Checklist (13 Mandatory & Supporting Items)</span>
                                </div>
                                <div className="rh-stage-checklist-grid">
                                  {(details.checklist || []).map((chk) => (
                                    <div key={chk.id} className={`rh-stage-chk-row ${chk.status}`}>
                                      <div className="rh-chk-left">
                                        <span className={`rh-chk-status-icon ${chk.status}`}>
                                          {chk.status === 'received' ? (
                                            <Check size={12} />
                                          ) : chk.status === 'na' ? (
                                            '—'
                                          ) : (
                                            <Clock size={12} />
                                          )}
                                        </span>
                                        <span className="rh-chk-label">{chk.label}</span>
                                      </div>
                                      <span className={`rh-chk-pill ${chk.status}`}>
                                        {chk.status === 'received'
                                          ? 'Received'
                                          : chk.status === 'na'
                                          ? 'Not Applicable'
                                          : 'Pending'}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {details.remarks && (
                                <div className="rh-stage-remarks-box">
                                  <strong>Intake Remarks:</strong> {details.remarks}
                                </div>
                              )}
                            </div>
                          )}

                          {/* ----------------------------------------------------------- */}
                          {/* STAGE 2: APPOINTMENT BOOKING DETAILS                        */}
                          {/* ----------------------------------------------------------- */}
                          {step.stageKey === 'APPOINTMENT_BOOKING' && (
                            <div className="rh-stage-inner-block">
                              <div className="rh-stage-meta-row">
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Appointment Location</span>
                                  <span className="rh-location-badge">
                                    <MapPin size={12} />
                                    <span>{details.location || 'Bangalore'}</span>
                                  </span>
                                </div>
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Handled By</span>
                                  <span className="rh-handled-badge">{details.handledBy || 'RHG Staff'}</span>
                                </div>
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Appointment Date & Time</span>
                                  <span className="rh-meta-val font-semibold">
                                    <Calendar size={12} className="inline mr-1" />
                                    {details.appointmentDate} • {details.appointmentTime || '10:00 AM'}
                                  </span>
                                </div>
                              </div>

                              {details.center && (
                                <div className="rh-stage-sub-info">
                                  <Building2 size={13} />
                                  <span>
                                    <strong>Submission Center:</strong> {details.center}
                                  </span>
                                </div>
                              )}

                              <div className="rh-reminder-pill-box">
                                <Clock size={13} color="#0284c7" />
                                <span>
                                  <strong>Staff To-Do Rule:</strong> Automated reminder alerts 2 calendar days before appointment date.
                                </span>
                              </div>

                              {details.remarks && (
                                <div className="rh-stage-remarks-box">
                                  <strong>Appointment Notes:</strong> {details.remarks}
                                </div>
                              )}
                            </div>
                          )}

                          {/* ----------------------------------------------------------- */}
                          {/* STAGE 3: DOCUMENT VERIFICATION DETAILS                      */}
                          {/* ----------------------------------------------------------- */}
                          {step.stageKey === 'DOCUMENT_VERIFICATION' && (
                            <div className="rh-stage-inner-block">
                              <div className="rh-stage-meta-row">
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Verification Status</span>
                                  <span
                                    className={`rh-verification-pill ${
                                      details.verificationStatus === 'Ready for Submission' ? 'ready' : 'pending'
                                    }`}
                                  >
                                    <BadgeCheck size={12} />
                                    <span>{details.verificationStatus || 'Ready for Submission'}</span>
                                  </span>
                                </div>
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Compliance Lead</span>
                                  <span className="rh-meta-val">{details.verifier || 'RH Global Compliance'}</span>
                                </div>
                                {details.verifiedDate && (
                                  <div className="rh-stage-meta-item">
                                    <span className="rh-meta-label">Verification Cleared</span>
                                    <span className="rh-meta-val">{details.verifiedDate}</span>
                                  </div>
                                )}
                              </div>

                              {details.remarks && (
                                <div className="rh-stage-remarks-box">
                                  <strong>Verification Notes:</strong> {details.remarks}
                                </div>
                              )}
                            </div>
                          )}

                          {/* ----------------------------------------------------------- */}
                          {/* STAGE 4: SUBMISSION DETAILS                                 */}
                          {/* ----------------------------------------------------------- */}
                          {step.stageKey === 'SUBMISSION' && (
                            <div className="rh-stage-inner-block">
                              <div className="rh-stage-meta-row">
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Submission Status</span>
                                  <span className="rh-submission-pill">
                                    {details.submissionStatus || 'Submitted to VFS / Embassy'}
                                  </span>
                                </div>
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">VFS / Embassy Reference No.</span>
                                  <div className="flex items-center gap-1.5 mt-0.5">
                                    <code className="rh-code-badge bold">{details.vfsReferenceNo || 'VFS-AU-992140'}</code>
                                    <button
                                      type="button"
                                      className="rh-mini-copy-btn"
                                      onClick={() => handleCopyText(details.vfsReferenceNo || 'VFS-AU-992140', 'vfs')}
                                      title="Copy VFS Ref"
                                    >
                                      {copiedRef === 'vfs' ? <CheckCheck size={12} color="#059669" /> : <Copy size={12} />}
                                    </button>
                                  </div>
                                </div>
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Collection Mode</span>
                                  <span className="rh-collection-mode-badge">{details.collectionMode || 'Direct Applicant'}</span>
                                </div>
                              </div>

                              {details.remarks && (
                                <div className="rh-stage-remarks-box">
                                  <strong>Submission Remarks:</strong> {details.remarks}
                                </div>
                              )}
                            </div>
                          )}

                          {/* ----------------------------------------------------------- */}
                          {/* STAGE 5: IN PROGRESS DETAILS                                */}
                          {/* ----------------------------------------------------------- */}
                          {step.stageKey === 'IN_PROGRESS' && (
                            <div className="rh-stage-inner-block">
                              <div className="rh-stage-meta-row">
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Consulate Status</span>
                                  <span className="rh-in-progress-pill">{details.inProgressStatus || 'In Progress'}</span>
                                </div>
                              </div>

                              {/* Pending Requests / Clarifications Log from VFS / Embassy */}
                              <div className="rh-pending-requests-section">
                                <h5 className="rh-inner-subheading">
                                  <span>Embassy Queries & Additional-Document Requests Log</span>
                                </h5>
                                {details.pendingRequests && details.pendingRequests.length > 0 ? (
                                  <div className="rh-req-log-list">
                                    {details.pendingRequests.map((req, rIdx) => (
                                      <div key={rIdx} className="rh-req-log-card">
                                        <div className="rh-req-log-top">
                                          <span className="rh-req-date">{req.date}</span>
                                          <span className={`rh-req-status ${req.status?.toLowerCase()}`}>
                                            {req.status}
                                          </span>
                                        </div>
                                        <p className="rh-req-query">{req.query}</p>
                                        {req.actionRequired && (
                                          <p className="rh-req-action">
                                            <strong>Action:</strong> {req.actionRequired}
                                          </p>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="rh-empty-log-box">
                                    <CheckCircle size={15} color="#059669" />
                                    <span>No pending clarification requests from the embassy. File is progressing smoothly.</span>
                                  </div>
                                )}
                              </div>

                              {details.remarks && (
                                <div className="rh-stage-remarks-box">
                                  <strong>Follow-up Remarks:</strong> {details.remarks}
                                </div>
                              )}
                            </div>
                          )}

                          {/* ----------------------------------------------------------- */}
                          {/* STAGE 6: COMPLETION DETAILS                                 */}
                          {/* ----------------------------------------------------------- */}
                          {step.stageKey === 'COMPLETION' && (
                            <div className="rh-stage-inner-block">
                              <div className="rh-stage-meta-row">
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Decision Outcome</span>
                                  <span
                                    className={`rh-final-outcome-badge ${
                                      details.finalStatus === 'Approved' ? 'approved' : 'pending'
                                    }`}
                                  >
                                    <ShieldCheck size={13} />
                                    <span>{details.finalStatus || 'Approved'}</span>
                                  </span>
                                </div>
                                {details.visaGrantNumber && (
                                  <div className="rh-stage-meta-item">
                                    <span className="rh-meta-label">Visa Grant Number</span>
                                    <code className="rh-code-badge bold">{details.visaGrantNumber}</code>
                                  </div>
                                )}
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Passport Dispatch</span>
                                  <span className="rh-dispatch-status-badge">
                                    <Truck size={13} />
                                    <span>{details.dispatch?.dispatched ? 'Dispatched / Handed Over' : 'Pending Dispatch'}</span>
                                  </span>
                                </div>
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Mode of Dispatch</span>
                                  <span className="rh-mode-badge">{details.dispatch?.modeOfDispatch || 'Courier'}</span>
                                </div>
                              </div>

                              {details.dispatch?.trackingNumber && (
                                <div className="rh-dispatch-tracking-card">
                                  <div className="rh-tracking-info">
                                    <span className="rh-meta-label">Courier Consignment AWB</span>
                                    <div className="flex items-center gap-2 mt-0.5">
                                      <code className="rh-code-badge bold">{details.dispatch.trackingNumber}</code>
                                      <button
                                        type="button"
                                        className="rh-mini-copy-btn"
                                        onClick={() => handleCopyText(details.dispatch.trackingNumber, 'track')}
                                        title="Copy AWB"
                                      >
                                        {copiedRef === 'track' ? <CheckCheck size={12} color="#059669" /> : <Copy size={12} />}
                                      </button>
                                      {details.dispatch.courierPartner && (
                                        <span className="rh-courier-partner-tag">({details.dispatch.courierPartner})</span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}

                              {details.remarks && (
                                <div className="rh-stage-remarks-box">
                                  <strong>Closure & Delivery Notes:</strong> {details.remarks}
                                </div>
                              )}
                            </div>
                          )}

                          {/* ----------------------------------------------------------- */}
                          {/* STAGE 7: PAYMENT DETAILS (Moved right after Completion!)    */}
                          {/* ----------------------------------------------------------- */}
                          {step.stageKey === 'PAYMENT' && (
                            <div className="rh-stage-inner-block rh-stage-payment-block">
                              <div className="rh-stage-meta-row">
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Settlement Status</span>
                                  <span className={`rh-pay-pill ${isPending ? 'pending' : 'settled'}`}>
                                    {payment.paymentStatus}
                                  </span>
                                </div>
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Total Fee</span>
                                  <span className="rh-meta-val font-bold">{formatInr(payment.totalFee)}</span>
                                </div>
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Paid Amount</span>
                                  <span className="rh-meta-val font-bold text-emerald-700">{formatInr(payment.totalPaid)}</span>
                                </div>
                                <div className="rh-stage-meta-item">
                                  <span className="rh-meta-label">Balance Due</span>
                                  <span className={`rh-meta-val font-bold ${isPending ? 'text-rose-700' : 'text-slate-500'}`}>
                                    {formatInr(payment.pendingBalance)}
                                  </span>
                                </div>
                              </div>

                              {/* Embedded Complete Payment Metrics & Transaction Table */}
                              <div className="rh-embedded-payment-wrap">
                                <div className="rh-payment-table-wrap">
                                  <table className="rh-payment-table">
                                    <thead>
                                      <tr>
                                        <th>PAYMENT ID</th>
                                        <th>PAYMENT TYPE</th>
                                        <th>PAYMENT MODE</th>
                                        <th>AMOUNT</th>
                                        <th>DATE</th>
                                        <th>TXN REFERENCE</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {payment.transactions && payment.transactions.length > 0 ? (
                                        payment.transactions.map((txn) => (
                                          <tr key={txn.id}>
                                            <td className="rh-td-mono font-bold">{txn.id}</td>
                                            <td>
                                              <span className="rh-pay-type-box">{txn.type}</span>
                                            </td>
                                            <td>{txn.mode}</td>
                                            <td className="font-bold">{formatInr(txn.amount)}</td>
                                            <td>{txn.date}</td>
                                            <td className="rh-td-mono">{txn.reference}</td>
                                          </tr>
                                        ))
                                      ) : (
                                        <tr>
                                          <td colSpan="6" className="rh-payment-empty-row">
                                            No payment records logged.
                                          </td>
                                        </tr>
                                      )}
                                    </tbody>
                                  </table>
                                </div>

                                <div className="rh-stage-payment-actions">
                                  <button
                                    type="button"
                                    className="rh-btn-invoice-pdf"
                                    onClick={() =>
                                      triggerDownload(
                                        'invoice',
                                        app.downloads?.invoice?.name || `${app.id}_Complete_Tax_Invoice.pdf`,
                                        'Tax Invoice PDF'
                                      )
                                    }
                                  >
                                    <Receipt size={14} />
                                    <span>Download Complete Tax Invoice</span>
                                    <span className="rh-btn-arrow">→</span>
                                  </button>

                                  {/* {isPending && (
                                    <button
                                      type="button"
                                      className="rh-btn-pay-now"
                                      onClick={() => {
                                        setPayingPending(true);
                                        setTimeout(() => {
                                          setPayingPending(false);
                                          showToast(`Redirecting to secure gateway for ${formatInr(payment.pendingBalance)}...`);
                                        }, 700);
                                      }}
                                    >
                                      {payingPending ? (
                                        <>
                                          <Loader2 size={15} className="rh-spinner" />
                                          <span>Connecting Gateway...</span>
                                        </>
                                      ) : (
                                        <>
                                          <CreditCard size={15} />
                                          <span>Pay Balance ({formatInr(payment.pendingBalance)})</span>
                                        </>
                                      )}
                                    </button>
                                  )} */}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Approved Visa Document Card */}
      <div className="rh-section-box rh-approved-visa-card">
        <h3 className="rh-approved-visa-heading">
          {app.type === 'visa' ? 'Approved Visa Document' : 'Approved Tour Document & Vouchers'}
        </h3>
        <p className="rh-approved-visa-desc">
          {app.status === 'approved'
            ? 'Official visa document is verified and issued. Ready to view online or download as PDF.'
            : 'Visa document will be available here once approved by embassy and uploaded by your Case Officer.'}
        </p>

        <div className="rh-approved-visa-btn-row">
          <button
            type="button"
            className="rh-btn-approved-view"
            onClick={() => {
              if (app.status === 'approved') {
                setShowDocPreview(true);
              } else {
                showToast('Document will be viewable once issued by the embassy.');
              }
            }}
          >
            <Eye size={14} />
            <span>{app.type === 'visa' ? 'View Visa Document' : 'View Tour Document'}</span>
          </button>

          <button
            type="button"
            className="rh-btn-approved-download"
            onClick={() =>
              triggerDownload(
                'doc',
                app.downloads?.document?.name || `${app.id}_Visa_Document.pdf`,
                app.type === 'visa' ? 'Visa Grant' : 'Travel Vouchers'
              )
            }
          >
            <Download size={14} />
            <span>{app.type === 'visa' ? 'Download Visa Document' : 'Download Tour Document'}</span>
          </button>
        </div>
      </div>

      {/* Document View Modal */}
      {showDocPreview && (
        <div className="rh-modal-overlay animate-fade-in" onClick={() => setShowDocPreview(false)}>
          <div className="rh-doc-preview-modal" onClick={(e) => e.stopPropagation()}>
            <div className="rh-doc-preview-header">
              <div className="rh-doc-preview-title-area">
                <ShieldCheck size={22} color="#059669" />
                <div>
                  <h4>Official Grant Verification</h4>
                  <span>Reference: {app.id}</span>
                </div>
              </div>
              <button
                type="button"
                className="rh-modal-close-btn"
                onClick={() => setShowDocPreview(false)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="rh-doc-preview-body">
              <div className="rh-doc-grant-banner">
                <div className="rh-doc-grant-badge">EMBASSY VERIFIED & ISSUED</div>
                <h3>{app.visaType || app.packageName}</h3>
                <p>Government Authority / Immigration Services • {app.country}</p>
              </div>

              <div className="rh-doc-preview-grid">
                <div>
                  <label>Applicant Name</label>
                  <span>{app.applicantName}</span>
                </div>
                <div>
                  <label>Grant / VFS Number</label>
                  <span className="font-mono">GRT-610992-AU</span>
                </div>
                <div>
                  <label>Grant Status</label>
                  <span className="rh-preview-status-approved">APPROVED / ACTIVE</span>
                </div>
                <div>
                  <label>Validity</label>
                  <span>12 Months Multiple Entry</span>
                </div>
                <div>
                  <label>Issued Date</label>
                  <span>{app.submissionDate}</span>
                </div>
              </div>
            </div>

            <div className="rh-doc-preview-footer">
              <button
                type="button"
                className="rh-btn-modal-close"
                onClick={() => setShowDocPreview(false)}
              >
                Close Preview
              </button>
              <button
                type="button"
                className="rh-btn-modal-download"
                onClick={() => {
                  triggerDownload(
                    'doc',
                    app.downloads?.document?.name || `${app.id}_Visa_Document.pdf`,
                    'Visa Grant'
                  );
                  setShowDocPreview(false);
                }}
              >
                <Download size={14} />
                <span>Download Official PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationDetailView;

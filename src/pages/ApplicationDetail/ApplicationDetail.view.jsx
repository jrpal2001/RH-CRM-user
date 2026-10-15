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
  Loader2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ApplicationDetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getApplicationById, showToast } = useApp();

  const app = getApplicationById(id);
  const [copied, setCopied] = useState(false);
  const [downloadingKey, setDownloadingKey] = useState(null);
  const [downloadedKeys, setDownloadedKeys] = useState({});

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

        <div className="rh-detail-nav-actions">
          <button
            type="button"
            className="rh-icon-btn"
            title="Print Application Summary"
            onClick={() => window.print()}
          >
            <Printer size={16} />
          </button>
        </div>
      </div>

      {/* Hero Overview Header */}
      <div className="rh-app-detail-hero-card">
        <div className="rh-detail-hero-top">
          <div className="rh-detail-tag-row">
            <span className={`rh-type-tag ${app.type}`}>
              {app.type === 'visa' ? <ShieldCheck size={14} /> : <Palmtree size={14} />}
              {app.type === 'visa' ? 'Visa Service' : 'Holiday Tour Booking'}
            </span>

            <span className={`rh-status-badge ${app.status}`}>
              {app.statusLabel}
            </span>
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
              {copied ? <CheckCheck size={14} color="#059669" /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        <h1 className="rh-detail-main-title">
          <span className="rh-detail-country-flag">{app.flag}</span>
          {app.type === 'visa' ? app.visaType : app.packageName}
        </h1>

        <div className="rh-detail-attributes-grid">
          <div className="rh-attr-item">
            <span className="rh-attr-lbl">Primary Applicant</span>
            <span className="rh-attr-val">{app.applicantName}</span>
          </div>

          <div className="rh-attr-item">
            <span className="rh-attr-lbl">Passport Number</span>
            <span className="rh-attr-val font-mono">{app.passportNumber}</span>
          </div>

          <div className="rh-attr-item">
            <span className="rh-attr-lbl">Destination Country</span>
            <span className="rh-attr-val">{app.country}</span>
          </div>

          <div className="rh-attr-item">
            <span className="rh-attr-lbl">Submission Date</span>
            <span className="rh-attr-val">{app.submissionDate}</span>
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
      </div>

      {/* Prominent Official Documents Download Section (User Requirement!) */}
      <div className="rh-section-box">
        <div className="rh-section-header-row">
          <div>
            <h2 className="rh-section-title">Official Document Downloads</h2>
            <p className="rh-section-desc">
              Download the filed application, official invoice, and granted visa or travel ticket vouchers.
            </p>
          </div>
        </div>

        <div className="rh-download-cards-3grid">
          {/* 1. Download Application */}
          <div className="rh-primary-download-card">
            <div className="rh-download-icon-box app">
              <FileText size={24} />
            </div>
            <div className="rh-download-text-content">
              <span className="rh-doc-category-badge">Filing Copy</span>
              <h4>Application Form</h4>
              <p>{app.downloads?.application?.name || 'Application_Summary.pdf'}</p>
              <span className="rh-download-file-size">
                {app.downloads?.application?.size || '1.2 MB'} • Verified PDF
              </span>
            </div>
            <button
              type="button"
              className={`rh-doc-download-action-btn ${downloadedKeys.app ? 'downloaded' : ''}`}
              onClick={() =>
                triggerDownload(
                  'app',
                  app.downloads?.application?.name || `${app.id}_Application_Form.pdf`,
                  'Application Form'
                )
              }
              disabled={downloadingKey === 'app'}
            >
              {downloadingKey === 'app' ? (
                <>
                  <Loader2 size={15} className="rh-spinner" />
                  <span>Saving...</span>
                </>
              ) : downloadedKeys.app ? (
                <>
                  <CheckCircle size={15} color="#059669" />
                  <span>Downloaded</span>
                </>
              ) : (
                <>
                  <Download size={15} />
                  <span>Download Application</span>
                </>
              )}
            </button>
          </div>

          {/* 2. Download Invoice */}
          <div className="rh-primary-download-card">
            <div className="rh-download-icon-box invoice">
              <Receipt size={24} />
            </div>
            <div className="rh-download-text-content">
              <span className="rh-doc-category-badge">Billing & Tax</span>
              <h4>Payment Invoice</h4>
              <p>{app.downloads?.invoice?.name || 'Tax_Invoice.pdf'}</p>
              <span className="rh-download-file-size">
                {app.downloads?.invoice?.size || '450 KB'} • Official Tax Receipt
              </span>
            </div>
            <button
              type="button"
              className={`rh-doc-download-action-btn ${downloadedKeys.invoice ? 'downloaded' : ''}`}
              onClick={() =>
                triggerDownload(
                  'invoice',
                  app.downloads?.invoice?.name || `${app.id}_Invoice.pdf`,
                  'Tax Invoice'
                )
              }
              disabled={downloadingKey === 'invoice'}
            >
              {downloadingKey === 'invoice' ? (
                <>
                  <Loader2 size={15} className="rh-spinner" />
                  <span>Saving...</span>
                </>
              ) : downloadedKeys.invoice ? (
                <>
                  <CheckCircle size={15} color="#059669" />
                  <span>Downloaded</span>
                </>
              ) : (
                <>
                  <Download size={15} />
                  <span>Download Invoice</span>
                </>
              )}
            </button>
          </div>

          {/* 3. Download Visa or Holiday Document (Ticket/Voucher) */}
          <div className="rh-primary-download-card highlight">
            <div className="rh-download-icon-box doc">
              <FileCheck2 size={24} />
            </div>
            <div className="rh-download-text-content">
              <span className="rh-doc-category-badge highlight">
                {app.type === 'visa' ? 'Visa Grant' : 'E-Ticket / Vouchers'}
              </span>
              <h4>{app.type === 'visa' ? 'Official e-Visa Grant' : 'Travel Tickets & Vouchers'}</h4>
              <p>{app.downloads?.document?.name || 'Travel_Voucher.pdf'}</p>
              <span className="rh-download-file-size">
                {app.downloads?.document?.size || '2.1 MB'} • Ready to Print
              </span>
            </div>
            <button
              type="button"
              className={`rh-doc-download-action-btn highlight ${downloadedKeys.doc ? 'downloaded' : ''}`}
              onClick={() =>
                triggerDownload(
                  'doc',
                  app.downloads?.document?.name || `${app.id}_Visa_Document.pdf`,
                  app.type === 'visa' ? 'eVisa Grant' : 'Boarding Pass & Voucher'
                )
              }
              disabled={downloadingKey === 'doc'}
            >
              {downloadingKey === 'doc' ? (
                <>
                  <Loader2 size={15} className="rh-spinner" />
                  <span>Saving...</span>
                </>
              ) : downloadedKeys.doc ? (
                <>
                  <CheckCircle size={15} color="#059669" />
                  <span>Downloaded</span>
                </>
              ) : (
                <>
                  <Download size={15} />
                  <span>{app.type === 'visa' ? 'Download Visa Document' : 'Download Tickets & Voucher'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Application Lifecycle Stepper */}
      <div className="rh-section-box">
        <div className="rh-section-header-row">
          <div>
            <h2 className="rh-section-title">Application Lifecycle & Embassy Milestones</h2>
            <p className="rh-section-desc">Track real-time stage progression</p>
          </div>
        </div>

        <div className="rh-stepper-track-large">
          {app.steps.map((step, idx) => {
            const isCompleted = step.done;
            const isCurrent = !isCompleted && (idx === 0 || app.steps[idx - 1]?.done);

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
                    <h4>{step.title}</h4>
                    <span className="rh-large-step-date">{step.date}</span>
                  </div>
                  <p>{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Notes */}
      {app.notes && (
        <div className="rh-tracker-notes-box large">
          <AlertCircle size={18} className="rh-notes-icon" />
          <div className="rh-notes-text">
            <strong>Official Case Officer Instructions:</strong>
            <p>{app.notes}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationDetailView;

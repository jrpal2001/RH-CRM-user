import React, { useState } from 'react';
import { FileText, Download, CheckCircle, Loader2 } from 'lucide-react';

export default function DocumentCard({ doc, appName, countryFlag, onDownloadSuccess }) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e) => {
    e.stopPropagation();
    if (downloading) return;

    setDownloading(true);

    // Simulate instant download with real downloadable file blob
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);

      const element = document.createElement('a');
      const mockDocContent = `RH GLOBAL CRM OFFICIAL DOCUMENT
=====================================================
Document: ${doc.name}
Category: ${doc.badge}
Associated File: ${appName}
Date Issued: ${doc.date}
Verification Hash: RHG-${Math.random().toString(36).substring(2, 9).toUpperCase()}
Status: VERIFIED & AUTHENTICATED BY RH GLOBAL CRM
=====================================================
Thank you for traveling with RH Global.
Official Support: support@rhglobalcrm.com | +971 4 800 7445`;

      const file = new Blob([mockDocContent], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `${doc.name.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      if (onDownloadSuccess) {
        onDownloadSuccess(doc.name);
      }

      setTimeout(() => {
        setDownloaded(false);
      }, 3500);
    }, 700);
  };

  return (
    <div className="rh-document-card animate-fade-in">
      <div className="rh-doc-left">
        <div className="rh-doc-icon-badge">
          <FileText size={22} className="rh-doc-icon" />
          <span className="rh-doc-ext-tag">{doc.type}</span>
        </div>

        <div className="rh-doc-info">
          <div className="rh-doc-header">
            <span className="rh-doc-badge-pill">{doc.badge}</span>
            <span className="rh-doc-date">{doc.date}</span>
          </div>
          <h4 className="rh-doc-title">{doc.name}</h4>
          <span className="rh-doc-meta">{doc.size} • Verified PDF</span>
        </div>
      </div>

      <div className="rh-doc-actions">
        <button
          type="button"
          className={`rh-download-btn ${downloaded ? 'downloaded' : ''}`}
          onClick={handleDownload}
          disabled={downloading}
          title={`Download ${doc.name}`}
        >
          {downloading ? (
            <>
              <Loader2 size={16} className="rh-spinner" />
              <span>Saving...</span>
            </>
          ) : downloaded ? (
            <>
              <CheckCircle size={16} color="#059669" />
              <span>Downloaded</span>
            </>
          ) : (
            <>
              <Download size={16} />
              <span>Download</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

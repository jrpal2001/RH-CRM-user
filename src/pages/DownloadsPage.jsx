import React from 'react';
import { Download } from 'lucide-react';
import DocumentCard from '../components/common/DocumentCard';
import { useApp } from '../context/AppContext';

export default function DownloadsPage() {
  const { user, allUserDocuments, setIsLoginOpen, showToast } = useApp();

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      <div className="rh-section-header-row">
        <div>
          <h1 className="rh-page-main-title">Download Center</h1>
          <p className="rh-page-main-desc">
            Access and download all approved official e-Visas, confirmed booking vouchers, and payment receipts.
          </p>
        </div>
      </div>

      {user ? (
        <div className="rh-docs-grid full-width">
          {allUserDocuments.map((doc) => (
            <DocumentCard
              key={doc.id}
              doc={doc}
              appName={doc.appName}
              countryFlag={doc.flag}
              onDownloadSuccess={(name) => showToast(`Downloaded: ${name}`)}
            />
          ))}
        </div>
      ) : (
        <div className="rh-empty-auth-card">
          <Download size={48} className="rh-empty-icon" />
          <h3>Sign In to Download Your Travel Documents</h3>
          <p>Approved e-Visa PDFs, confirmed airline tickets, and hotel vouchers are available for download.</p>
          <button
            type="button"
            className="rh-pill-btn rh-login-trigger-btn"
            onClick={() => setIsLoginOpen(true)}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}

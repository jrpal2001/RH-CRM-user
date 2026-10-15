import React from 'react';
import { ShieldCheck } from 'lucide-react';
import StatusStepper from '../../components/StatusStepper/StatusStepper.component';
import DocumentCard from '../../components/DocumentCard/DocumentCard.component';
import { useApp } from '../../context/AppContext';

export const StatusView = () => {
  const { user, applications, setIsTrackLookupOpen, setIsLoginOpen, showToast } = useApp();

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      <div className="rh-section-header-row">
        <div>
          <h1 className="rh-page-main-title">Application Status Tracker</h1>
          <p className="rh-page-main-desc">
            Check your visa application lifecycle, biometric stages, and holiday booking confirmations.
          </p>
        </div>

        <button
          type="button"
          className="rh-pill-btn rh-quick-track-btn"
          onClick={() => setIsTrackLookupOpen(true)}
        >
          + Track Other File
        </button>
      </div>

      {user ? (
        <div className="rh-status-dashboard-layout">
          <div className="rh-status-cards-col">
            {applications.map((app) => (
              <div key={app.id} className="rh-application-block">
                <StatusStepper application={app} />

                {/* Documents directly attached to this application */}
                <div className="rh-app-attached-docs">
                  <h4 className="rh-attached-docs-title">
                    Official Documents & Vouchers ({app.documents.length})
                  </h4>
                  <div className="rh-docs-grid">
                    {app.documents.map((doc) => (
                      <DocumentCard
                        key={doc.id}
                        doc={doc}
                        appName={app.visaType || app.packageName}
                        countryFlag={app.flag}
                        onDownloadSuccess={(name) => showToast(`Downloaded: ${name}`)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="rh-empty-auth-card">
          <ShieldCheck size={48} className="rh-empty-icon" />
          <h3>Sign In to Check Application Status</h3>
          <p>Log in with your phone or email to view real-time embassy milestones, notes, and grants.</p>
          <button
            type="button"
            className="rh-pill-btn rh-login-trigger-btn"
            onClick={() => setIsLoginOpen(true)}
          >
            Sign In to Portal
          </button>
        </div>
      )}
    </div>
  );
};

export default StatusView;

import React, { useState } from 'react';
import { Search, X, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';
import StatusStepper from '../StatusStepper/StatusStepper.component';
import DocumentCard from '../DocumentCard/DocumentCard.component';

export default function TrackLookupModal({ isOpen, onClose, applications, onSelectApplication }) {
  const [refQuery, setRefQuery] = useState('');
  const [passportQuery, setPassportQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [foundApp, setFoundApp] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    setSearched(true);
    setErrorMessage('');

    const cleanRef = refQuery.trim().toLowerCase();
    const cleanPassport = passportQuery.trim().toLowerCase();

    if (!cleanRef && !cleanPassport) {
      setErrorMessage('Please enter an Application Reference ID or Passport Number.');
      setFoundApp(null);
      return;
    }

    const matched = applications.find((app) => {
      const matchId = app.id.toLowerCase().includes(cleanRef);
      const matchPass = cleanPassport && app.passportNumber.toLowerCase().includes(cleanPassport);
      return matchId || matchPass;
    });

    if (matched) {
      setFoundApp(matched);
    } else {
      setFoundApp(null);
      setErrorMessage('No application found with these details. Please verify your reference number or contact support.');
    }
  };

  const fillQuickDemo = (app) => {
    setRefQuery(app.id);
    setPassportQuery(app.passportNumber);
    setFoundApp(app);
    setSearched(true);
    setErrorMessage('');
  };

  return (
    <div className="rh-modal-backdrop" onClick={onClose}>
      <div className="rh-lookup-modal animate-scale-in" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="rh-lookup-header">
          <div className="rh-lookup-icon-wrap">
            <ShieldCheck size={22} className="rh-lookup-icon" />
          </div>
          <div className="rh-lookup-title-area">
            <h3>Quick Application Lookup</h3>
            <p>Track your visa or holiday file without logging in</p>
          </div>
          <button type="button" className="rh-modal-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Input Form */}
        <form onSubmit={handleTrackSubmit} className="rh-lookup-form">
          <div className="rh-form-group">
            <label>Application Reference Number</label>
            <div className="rh-form-input-wrap">
              <input
                type="text"
                placeholder="e.g. RH-VSA-2026-8819"
                value={refQuery}
                onChange={(e) => setRefQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="rh-form-group">
            <label>Passport Number or Phone (Optional)</label>
            <div className="rh-form-input-wrap">
              <input
                type="text"
                placeholder="e.g. A98234120"
                value={passportQuery}
                onChange={(e) => setPassportQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Quick Demo Pre-fills */}
          <div className="rh-quick-demo-chips">
            <span className="rh-quick-demo-lbl">Try Demo:</span>
            {applications.slice(0, 2).map((app) => (
              <button
                key={app.id}
                type="button"
                className="rh-demo-chip"
                onClick={() => fillQuickDemo(app)}
              >
                {app.flag} {app.country} ({app.id.slice(-4)})
              </button>
            ))}
          </div>

          <button type="submit" className="rh-lookup-submit-btn">
            <Search size={16} />
            <span>Track Application Status</span>
          </button>
        </form>

        {/* Error Feedback */}
        {searched && errorMessage && (
          <div className="rh-lookup-error-box animate-fade-in">
            <AlertCircle size={16} />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Found Application Details */}
        {searched && foundApp && (
          <div className="rh-lookup-result animate-fade-in">
            <div className="rh-lookup-result-divider">
              <span>Application Details</span>
            </div>

            <StatusStepper application={foundApp} />

            <div className="rh-lookup-docs-section">
              <h4 className="rh-docs-heading">Available Downloads</h4>
              {foundApp.documents.map((doc) => (
                <DocumentCard
                  key={doc.id}
                  doc={doc}
                  appName={foundApp.visaType || foundApp.packageName}
                  countryFlag={foundApp.flag}
                />
              ))}
            </div>

            <button
              type="button"
              className="rh-pill-btn rh-view-in-portal-btn"
              onClick={() => {
                onSelectApplication(foundApp);
                onClose();
              }}
            >
              <span>View Full Portal Record</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

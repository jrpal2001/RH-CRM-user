import React, { useState } from 'react';
import { X, Phone, Mail, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { currentUser } from '../../data/mockData';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [authMethod, setAuthMethod] = useState('phone'); // 'phone' | 'email'
  const [phone, setPhone] = useState('+1 (555) 234-8910');
  const [email, setEmail] = useState('morgan.vance@example.com');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
      setOtp('8942');
    }, 600);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess(currentUser);
      onClose();
    }, 600);
  };

  const handleInstantDemoLogin = () => {
    onLoginSuccess(currentUser);
    onClose();
  };

  return (
    <div className="rh-modal-backdrop" onClick={onClose}>
      <div className="rh-auth-modal animate-scale-in" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="rh-auth-header">
          <div className="rh-auth-brand-badge">
            <ShieldCheck size={20} className="rh-brand-icon" />
            <span>RH Global Secure Portal</span>
          </div>
          <button type="button" className="rh-modal-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="rh-auth-body">
          <h3 className="rh-auth-title">Welcome to Your Travel Desk</h3>
          <p className="rh-auth-subtitle">
            Sign in to check real-time visa status, download travel vouchers, and explore exclusive holiday packages.
          </p>

          {/* Quick 1-Click Demo Login Banner */}
          <div className="rh-demo-quick-banner" onClick={handleInstantDemoLogin}>
            <div className="rh-demo-banner-left">
              <Sparkles size={18} className="rh-sparkle-icon" />
              <div>
                <strong>Instant Demo Access</strong>
                <span>Log in as Morgan Vance (Active Visa & Booking)</span>
              </div>
            </div>
            <ArrowRight size={16} />
          </div>

          <div className="rh-auth-tabs">
            <button
              type="button"
              className={`rh-auth-tab ${authMethod === 'phone' ? 'active' : ''}`}
              onClick={() => {
                setAuthMethod('phone');
                setOtpSent(false);
              }}
            >
              <Phone size={14} /> Phone OTP
            </button>
            <button
              type="button"
              className={`rh-auth-tab ${authMethod === 'email' ? 'active' : ''}`}
              onClick={() => {
                setAuthMethod('email');
                setOtpSent(false);
              }}
            >
              <Mail size={14} /> Email
            </button>
          </div>

          {!otpSent ? (
            <form onSubmit={handleSendOtp} className="rh-auth-form">
              {authMethod === 'phone' ? (
                <div className="rh-form-group">
                  <label>Mobile Number</label>
                  <div className="rh-form-input-wrap">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                </div>
              ) : (
                <div className="rh-form-group">
                  <label>Registered Email</label>
                  <div className="rh-form-input-wrap">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@rhglobalcrm.com"
                      required
                    />
                  </div>
                </div>
              )}

              <button type="submit" className="rh-auth-submit-btn" disabled={loading}>
                {loading ? 'Sending code...' : 'Send Verification Code'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="rh-auth-form animate-fade-in">
              <div className="rh-form-group">
                <div className="rh-otp-label-row">
                  <label>Enter 4-Digit Code</label>
                  <span className="rh-otp-hint">Code auto-filled for demo</span>
                </div>
                <div className="rh-form-input-wrap">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="••••"
                    maxLength={4}
                    className="rh-otp-input"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="rh-auth-submit-btn" disabled={loading}>
                {loading ? 'Verifying...' : 'Verify & Enter Portal'}
              </button>

              <button
                type="button"
                className="rh-auth-back-link"
                onClick={() => setOtpSent(false)}
              >
                Change {authMethod === 'phone' ? 'phone number' : 'email'}
              </button>
            </form>
          )}

          <p className="rh-auth-disclaimer">
            Protected by 256-bit SSL encryption. All visa data is authenticated by RH Global CRM Compliance.
          </p>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  User,
  Mail,
  KeyRound,
  ArrowRight,
  RotateCw,
  Send,
  Edit2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import ROUTES from '../../config/routes';

export default function LoginCard({ isMobile = false, onClose = null }) {
  const navigate = useNavigate();
  const { loginWithEmailAndOtp, showToast } = useApp();

  const [role, setRole] = useState('company'); // 'company' | 'individual'
  const [email, setEmail] = useState('corporate@acmeglobal.com');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  // Timer countdown for resending OTP
  useEffect(() => {
    let interval = null;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setOtpSent(false);
    setOtp('');
    if (newRole === 'company') {
      setEmail('corporate@acmeglobal.com');
    } else {
      setEmail('morgan.vance@example.com');
    }
  };

  // Step 1: Send OTP to email
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
      setOtp('7829'); // Demo OTP auto-filled for instant testing convenience
      setResendTimer(30);
      showToast(`Verification OTP sent to ${email} (Demo: 7829)`);
    }, 450);
  };

  // Step 2: Resend OTP
  const handleResendOtp = () => {
    if (resendTimer > 0) return;
    setResendTimer(30);
    setOtp('7829');
    showToast('New verification OTP sent: 7829');
  };

  // Step 3: Verify OTP & Sign In
  const handleVerifySignIn = (e) => {
    e.preventDefault();
    if (!otp.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      loginWithEmailAndOtp(email, otp, role);
      navigate(ROUTES.DASHBOARD);
    }, 400);
  };

  // 1-Click Instant Demo Login
  const handleQuickDemo = (selectedRole) => {
    const demoEmail =
      selectedRole === 'company'
        ? 'corporate@acmeglobal.com'
        : 'morgan.vance@example.com';
    loginWithEmailAndOtp(demoEmail, '7829', selectedRole);
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <div className={`rh-login-card-component ${isMobile ? 'mobile-glass' : 'desktop-clean'}`}>
      {/* Account Type Selector Tabs */}
      <div className="rh-logincard-role-tabs">
        <button
          type="button"
          className={`rh-logincard-role-btn ${role === 'company' ? 'active' : ''}`}
          onClick={() => handleRoleChange('company')}
        >
          <Building2 size={13} />
          <span>Company Account</span>
        </button>
        <button
          type="button"
          className={`rh-logincard-role-btn ${role === 'individual' ? 'active' : ''}`}
          onClick={() => handleRoleChange('individual')}
        >
          <User size={13} />
          <span>Individual User</span>
        </button>
      </div>

      {/* STEP 1: Enter Email & Click "Send OTP" */}
      {!otpSent ? (
        <form onSubmit={handleSendOtp} className="rh-logincard-form">
          <div className="rh-logincard-field">
            <label className="rh-logincard-label">
              {role === 'company' ? 'Corporate Work Email' : 'Registered Email Address'}
            </label>
            <div className="rh-logincard-input-wrap">
              <Mail size={15} className="rh-logincard-icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === 'company' ? 'corporate@company.com' : 'traveler@gmail.com'}
                className="rh-logincard-input"
                required
                autoFocus
              />
            </div>
          </div>

          <button
            type="submit"
            className="rh-logincard-submit-btn"
            disabled={loading}
          >
            {loading ? (
              <span>Sending OTP...</span>
            ) : (
              <>
                <span>Send OTP</span>
                <Send size={13} />
              </>
            )}
          </button>

          {isMobile && onClose && (
            <button
              type="button"
              className="rh-logincard-cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>
          )}
        </form>
      ) : (
        /* STEP 2: OTP Sent -> Enter OTP Code & Click "Sign In" */
        <form onSubmit={handleVerifySignIn} className="rh-logincard-form animate-fade-in">
          {/* Confirmed Email Indicator with option to edit */}
          <div className="rh-logincard-confirmed-email">
            <div className="rh-confirmed-left">
              <span className="rh-confirmed-lbl">OTP sent to:</span>
              <strong className="rh-confirmed-val">{email}</strong>
            </div>
            <button
              type="button"
              className="rh-change-email-btn"
              onClick={() => setOtpSent(false)}
              title="Change email"
            >
              <Edit2 size={11} />
              <span>Change</span>
            </button>
          </div>

          {/* OTP Input Field */}
          <div className="rh-logincard-field">
            <div className="rh-logincard-otp-header">
              <label className="rh-logincard-label">Enter 4-Digit OTP</label>
            </div>

            <div className="rh-logincard-input-wrap">
              <KeyRound size={15} className="rh-logincard-icon" />
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="••••"
                maxLength={6}
                className="rh-logincard-input rh-otp-text"
                required
                autoFocus
              />
            </div>

            {/* Resend OTP Row */}
            <div className="rh-logincard-resend-row">
              <span className="rh-logincard-resend-hint">Didn't receive code?</span>
              <button
                type="button"
                className="rh-logincard-resend-btn"
                onClick={handleResendOtp}
                disabled={resendTimer > 0}
              >
                <RotateCw size={11} className={resendTimer > 0 ? 'rh-spinning' : ''} />
                <span>{resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : 'Resend OTP'}</span>
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="rh-logincard-submit-btn"
            disabled={loading}
          >
            {loading ? (
              <span>Verifying & Signing in...</span>
            ) : (
              <>
                <span>Sign in with OTP</span>
                <ArrowRight size={14} />
              </>
            )}
          </button>
        </form>
      )}

      {/* 1-Click Demo Accounts Row */}
      {/* <div className="rh-logincard-demos-wrap">
        <span className="rh-logincard-demos-title">1-Click Quick Demo Sign In:</span>
        <div className="rh-logincard-demos-grid">
          <button
            type="button"
            className="rh-logincard-demo-chip"
            onClick={() => handleQuickDemo('company')}
            title="Sign in as Acme Global Corporate Account"
          >
            <Building2 size={12} />
            <span>Acme Global (Company)</span>
          </button>
          <button
            type="button"
            className="rh-logincard-demo-chip"
            onClick={() => handleQuickDemo('individual')}
            title="Sign in as Morgan Vance Personal Traveler"
          >
            <User size={12} />
            <span>Morgan Vance (Individual)</span>
          </button>
        </div>
      </div> */}
    </div>
  );
}

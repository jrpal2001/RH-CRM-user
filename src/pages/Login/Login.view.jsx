import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, User, Mail, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import ROUTES from '../../config/routes';

export const LoginView = () => {
  const navigate = useNavigate();
  const { loginWithEmailAndOtp } = useApp();

  const [role, setRole] = useState('company'); // 'company' | 'individual'
  const [email, setEmail] = useState('corporate@acmeglobal.com');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSendOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
      setOtp('7829'); // Demo OTP
    }, 500);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      loginWithEmailAndOtp(email, otp, role);
      navigate(ROUTES.DASHBOARD);
    }, 500);
  };

  const handleQuickDemoLogin = (selectedRole) => {
    const demoEmail = selectedRole === 'company' ? 'corporate@acmeglobal.com' : 'morgan.vance@example.com';
    loginWithEmailAndOtp(demoEmail, '7829', selectedRole);
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <div className="rh-login-page-wrap animate-fade-in">
      <div className="rh-login-card">
        {/* Brand Header */}
        <div className="rh-login-brand">
          <div className="rh-logo-badge large">
            <ShieldCheck size={28} className="rh-logo-icon" />
          </div>
          <h1 className="rh-login-title">RH Global User Portal</h1>
          <p className="rh-login-subtitle">
            Sign in with your email & OTP to access your Visa & Holiday travel desk
          </p>
        </div>

        {/* 1-Click Quick Demo Sign In Options */}
        <div className="rh-quick-demo-accounts">
          <span className="rh-demo-accounts-title">Quick Demo Logins:</span>
          <div className="rh-demo-buttons-grid">
            <button
              type="button"
              className={`rh-demo-login-btn ${role === 'company' ? 'active' : ''}`}
              onClick={() => handleQuickDemoLogin('company')}
            >
              <Building2 size={16} />
              <div className="rh-demo-btn-text">
                <strong>Sign in as Company</strong>
                <span>Acme Global Innovations (48 Employees)</span>
              </div>
              <ArrowRight size={14} className="rh-demo-arrow" />
            </button>

            <button
              type="button"
              className={`rh-demo-login-btn ${role === 'individual' ? 'active' : ''}`}
              onClick={() => handleQuickDemoLogin('individual')}
            >
              <User size={16} />
              <div className="rh-demo-btn-text">
                <strong>Sign in as Individual</strong>
                <span>Morgan Vance (Personal Traveler)</span>
              </div>
              <ArrowRight size={14} className="rh-demo-arrow" />
            </button>
          </div>
        </div>

        <div className="rh-auth-divider">
          <span>Or sign in with email & OTP</span>
        </div>

        {/* Role Toggle Selector */}
        <div className="rh-role-tab-selector">
          <button
            type="button"
            className={`rh-role-tab ${role === 'company' ? 'active' : ''}`}
            onClick={() => handleRoleChange('company')}
          >
            <Building2 size={15} />
            <span>Company Account</span>
          </button>
          <button
            type="button"
            className={`rh-role-tab ${role === 'individual' ? 'active' : ''}`}
            onClick={() => handleRoleChange('individual')}
          >
            <User size={15} />
            <span>Individual User</span>
          </button>
        </div>

        {/* Email & OTP Form */}
        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="rh-auth-form">
            <div className="rh-form-group">
              <label>
                {role === 'company' ? 'Company Work Email' : 'Registered Email Address'}
              </label>
              <div className="rh-form-input-wrap">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={role === 'company' ? 'corporate@company.com' : 'traveler@gmail.com'}
                  required
                />
              </div>
            </div>

            <button type="submit" className="rh-auth-submit-btn" disabled={loading}>
              {loading ? 'Sending One-Time Password...' : 'Send Verification OTP'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="rh-auth-form animate-fade-in">
            <div className="rh-form-group">
              <div className="rh-otp-label-row">
                <label>Enter 4-Digit OTP</label>
                <span className="rh-otp-hint">Auto-filled: 7829</span>
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
              {loading ? 'Verifying...' : `Enter ${role === 'company' ? 'Company' : 'Personal'} Portal`}
            </button>

            <button
              type="button"
              className="rh-auth-back-link"
              onClick={() => setOtpSent(false)}
            >
              Change email address
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginView;

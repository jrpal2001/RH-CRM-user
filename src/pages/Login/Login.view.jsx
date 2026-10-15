import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, X, Compass, MapPin, Star, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import ROUTES from '../../config/routes';
import loginBg from '../../assets/login.jpg';
import LoginCard from '../../components/LoginCard/LoginCard.component';
import SlideToLogin from '../../components/SlideToLogin/SlideToLogin.component';

export const LoginView = () => {
  const navigate = useNavigate();
  const { loginWithEmailAndOtp } = useApp();

  // Mobile sheet toggle: true = login sheet visible, false = welcome screen visible
  const [mobileSheetOpen, setMobileSheetOpen] = useState(true);

  const handleQuickDemoLogin = (selectedRole) => {
    const demoEmail =
      selectedRole === 'company'
        ? 'corporate@acmeglobal.com'
        : 'morgan.vance@example.com';
    loginWithEmailAndOtp(demoEmail, '7829', selectedRole);
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <div className="rh-login-unified-container">
      {/* ========================================================================= */}
      {/* 1. DESKTOP VIEW (Visible on >= 900px, matches reference 2nd image)        */}
      {/* ========================================================================= */}
      <div className="rh-login-desktop-layout">
        {/* Left Side: Clean Form Section */}
        <div className="rh-login-desktop-form-pane">
          {/* Subtle Decorative Watercolor Flower Accents */}
          <div className="rh-deco-flower top-flower" aria-hidden="true">
            <svg width="56" height="56" viewBox="0 0 100 100" fill="none">
              <ellipse cx="50" cy="22" rx="14" ry="20" fill="#fbcfe8" opacity="0.65" />
              <ellipse cx="50" cy="78" rx="14" ry="20" fill="#fbcfe8" opacity="0.65" />
              <ellipse cx="22" cy="50" rx="20" ry="14" fill="#fce7f3" opacity="0.75" />
              <ellipse cx="78" cy="50" rx="20" ry="14" fill="#fce7f3" opacity="0.75" />
              <circle cx="50" cy="50" r="14" fill="#f472b6" opacity="0.75" />
            </svg>
          </div>

          <div className="rh-deco-flower bottom-flower" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
              <ellipse cx="50" cy="24" rx="12" ry="18" fill="#dcfce7" opacity="0.65" />
              <ellipse cx="50" cy="76" rx="12" ry="18" fill="#dcfce7" opacity="0.65" />
              <ellipse cx="24" cy="50" rx="18" ry="12" fill="#d1fae5" opacity="0.75" />
              <ellipse cx="76" cy="50" rx="18" ry="12" fill="#d1fae5" opacity="0.75" />
              <circle cx="50" cy="50" r="12" fill="#a7f3d0" opacity="0.8" />
            </svg>
          </div>

          <div className="rh-desktop-form-inner">
            {/* Top Brand Logo */}
            <div className="rh-desktop-brand-header">
              <div className="rh-logo-badge small">
                <ShieldCheck size={18} className="rh-logo-icon" />
              </div>
              <span className="rh-desktop-brand-title">RH GLOBAL</span>
            </div>

            {/* Title & Subtitle (slightly smaller and sleeker as requested) */}
            <div className="rh-desktop-header-text">
              <h1 className="rh-desktop-welcome-heading">Welcome back</h1>
              <p className="rh-desktop-welcome-sub">
                Sign in with your email & OTP code to access your travel desk.
              </p>
            </div>

            {/* Modular Login Card Component */}
            <LoginCard isMobile={false} />
          </div>
        </div>

        {/* Right Side: Hero Image Section with login.jpg (matching Image 2) */}
        <div className="rh-login-desktop-hero-pane">
          <img
            src={loginBg}
            alt="Scenic global travel landscape"
            className="rh-login-hero-img"
          />
          <div className="rh-login-hero-scrim"></div>

          {/* Hero Content Overlay */}
          <div className="rh-login-hero-overlay">
            {/* Social Proof Pill */}
            <div className="rh-hero-social-pill">
              <div className="rh-hero-avatar-stack">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Traveler"
                  className="rh-avatar-stack-item"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Traveler"
                  className="rh-avatar-stack-item"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Traveler"
                  className="rh-avatar-stack-item"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  alt="Traveler"
                  className="rh-avatar-stack-item"
                />
              </div>
              <span className="rh-hero-social-text">Trusted by over 10,000 travelers</span>
            </div>

            {/* Main Headline (refined typography) */}
            <h2 className="rh-hero-headline">
              Find Your Next Stay<br />In Nature
            </h2>

            {/* Subtext */}
            <p className="rh-hero-subtext">
              Fast-track corporate visa compliance, embassy appointments, and handcrafted luxury holiday tours hosted by local experts. Where comfort meets adventure.
            </p>

            {/* Feature Badges */}
            <div className="rh-hero-badges-row">
              <span className="rh-hero-badge-item">
                <CheckCircle2 size={13} color="#a7f3d0" /> 99.4% Visa Approval Rate
              </span>
              <span className="rh-hero-badge-item">
                <CheckCircle2 size={13} color="#a7f3d0" /> Verified Consular Desk
              </span>
              <span className="rh-hero-badge-item">
                <CheckCircle2 size={13} color="#a7f3d0" /> 24/7 Corporate Concierge
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE VIEW (Visible on < 900px, matches reference 1st image)          */}
      {/* ========================================================================= */}
      <div className="rh-login-mobile-layout">
        {/* Full-bleed background with login.jpg */}
        <div className="rh-mobile-bg-wrap">
          <img
            src={loginBg}
            alt="Travel background"
            className="rh-mobile-bg-img"
          />
          <div className="rh-mobile-bg-scrim"></div>
        </div>

        {/* Phase A: Welcome Screen (Image 1, Left Screen) with Interactive Slide to Log in */}
        {!mobileSheetOpen ? (
          <div className="rh-mobile-welcome-screen animate-fade-in">
            {/* Top Brand & Stylized Title */}
            <div className="rh-mobile-top-brand">
              <div className="rh-mobile-hero-badge">
                <Compass size={13} />
                <span>RH GLOBAL TRAVEL DESK</span>
              </div>
              <h1 className="rh-mobile-brush-title">FIND</h1>
              <p className="rh-mobile-sheet-tagline">Create your own itinerary!</p>
            </div>

            {/* Middle Floating Scenery & Rating Highlights */}
            <div className="rh-mobile-scenery-chips-row">
              <div className="rh-mobile-scenery-tag">
                <MapPin size={12} />
                <span>Nusa Penida • Coastal Sanctuary</span>
              </div>
              <div className="rh-mobile-stats-glass-pill">
                <Star size={12} fill="#ffffff" />
                <span>4.98 • 10,000+ Travelers</span>
              </div>
            </div>

            {/* Bottom Call to Action Section with Slide to Log In */}
            <div className="rh-mobile-welcome-footer">
              <h2 className="rh-mobile-dont-wait">Don't wait.</h2>
              <p className="rh-mobile-sub-catch">Experience nature's finest destinations.</p>

              {/* Interactive Slide to Log in Component */}
              <SlideToLogin
                onComplete={() => setMobileSheetOpen(true)}
                text="Slide to Log in"
              />

              {/* Subtle direct tap option */}
              <button
                type="button"
                className="rh-mobile-direct-tap-link"
                onClick={() => setMobileSheetOpen(true)}
              >
                Or tap to sign in directly
              </button>
            </div>
          </div>
        ) : (
          /* Phase B: Login Bottom Sheet (Image 1, Right Screen) with Transparent Global Theme */
          <div className="rh-mobile-sheet-screen animate-fade-in">
            {/* Top Bar with 'X' and 'LOG IN' */}
            <div className="rh-mobile-sheet-topbar">
              <button
                type="button"
                className="rh-mobile-close-btn"
                onClick={() => setMobileSheetOpen(false)}
                title="Go back"
              >
                <X size={18} />
              </button>
              {/* <span className="rh-mobile-topbar-title">LOG IN</span> */}
              <div style={{ width: 32 }}></div>
            </div>

            {/* Stylized Heading on the image */}
            <div className="rh-mobile-sheet-image-hero">
              <h1 className="rh-mobile-brush-title small">RH Global</h1>
              <p className="rh-mobile-sheet-tagline">Create your own itinerary!</p>
            </div>

            {/* Bottom Transparent / Frosted Glass Sheet Card with Global Colors */}
            <div className="rh-mobile-curved-sheet glass-global animate-slide-up">
              <LoginCard isMobile={true} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginView;

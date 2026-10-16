import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Building2,
  Mail,
  Phone,
  MapPin,
  Globe,
  Calendar,
  CheckCircle2,
  Users,
  FileText,
  LogOut,
  RefreshCw,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import ROUTES from '../../config/routes';

export const ProfileView = () => {
  const navigate = useNavigate();
  const { user, switchUserType, setIsLogoutConfirmOpen, setIsLoginOpen } = useApp();

  if (!user) {
    return (
      <div className="rh-tab-content-wrap animate-fade-in">
        <div className="rh-empty-auth-card">
          <div className="rh-empty-icon-circle">
            <User size={32} />
          </div>
          <h3>Not Signed In</h3>
          <p>Sign in to view your profile and manage travel applications.</p>
          <button
            type="button"
            className="rh-pill-btn rh-login-trigger-btn"
            onClick={() => setIsLoginOpen(true)}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  const isCompany = user.type === 'company';

  // Company Details (user-specified values with fallback)
  const companyData = {
    companyName: user.companyName || 'Apex Tours & Tech',
    contactPerson: user.contactPerson || user.name || 'Sunil Mehta',
    email: user.email || 'info@apextours.com',
    phone: user.phone || '+91 22 2800 1122',
    address: user.address || '45 BKC Complex, Mumbai',
    country: user.country || 'India',
    totalEmployees: user.totalEmployees ?? 18,
    totalApplications: user.totalApplications ?? 29,
    accountStatus: user.accountStatus || 'Active',
  };

  // Individual Traveler Details (user-specified values with fallback)
  const individualData = {
    applicantName: user.applicantName || user.name || 'Vikramaditya Roy',
    mobileNumber: user.mobileNumber || user.phone || '+91 99112 23344',
    email: user.email || 'vikram.roy@gmail.com',
    country: user.country || 'India',
    registrationDate: user.registrationDate || '2026-08-14',
    accountStatus: user.accountStatus || 'Active',
  };

  return (
    <div className="rh-tab-content-wrap animate-fade-in">
      <div className="rh-profile-container">
        {/* Main Profile Header Card with Dummy Person Logo */}
        <div className="rh-profile-hero-card">
          <div className="rh-profile-hero-top">
            {/* Dummy Logo like Person (no user image) */}
            <div className="rh-profile-dummy-avatar" aria-label="Profile Avatar">
              <User size={28} className="rh-dummy-avatar-icon" />
            </div>

            <div className="rh-profile-info">
              <div className="rh-profile-title-row">
                <h2 className="rh-profile-name">
                  {isCompany ? companyData.companyName : individualData.applicantName}
                </h2>
                <span className="rh-profile-status-badge">
                  <span className="rh-status-dot-pulse" />
                  {isCompany ? companyData.accountStatus : individualData.accountStatus}
                </span>
              </div>

              <p className="rh-profile-sub">
                {isCompany ? (
                  <>
                    <span>Contact Person: <strong>{companyData.contactPerson}</strong></span>
                  </>
                ) : (
                  <span>Individual Traveler Account</span>
                )}
              </p>

              {/* Badges Row */}
              <div className="rh-profile-pill-row">
                <span className="rh-profile-tag">
                  {isCompany ? <Building2 size={12} /> : <User size={12} />}
                  {isCompany ? 'Company Account' : 'Individual Traveler'}
                </span>
                <span className="rh-profile-tag">
                  <Globe size={12} />
                  {isCompany ? companyData.country : individualData.country}
                </span>
              </div>
            </div>

            {/* Quick Mode Switcher */}
            {/* <button
              type="button"
              className="rh-profile-switch-btn"
              onClick={() => switchUserType(isCompany ? 'individual' : 'company')}
              title={`Switch to ${isCompany ? 'Individual Traveler' : 'Company'} mode`}
            >
              <RefreshCw size={13} />
              <span>{isCompany ? 'Switch to Individual' : 'Switch to Company'}</span>
            </button> */}
          </div>
        </div>

        {/* Highlight Metrics Cards */}
        {isCompany ? (
          <div className="rh-profile-metrics-strip">
            <div className="rh-metric-chip">
              <div className="rh-metric-icon-wrap">
                <Users size={16} />
              </div>
              <div className="rh-metric-content">
                <span className="rh-metric-lbl">Total Registered Travelers / Employees</span>
                <span className="rh-metric-val">{companyData.totalEmployees}</span>
              </div>
            </div>

            <div className="rh-metric-chip">
              <div className="rh-metric-icon-wrap">
                <FileText size={16} />
              </div>
              <div className="rh-metric-content">
                <span className="rh-metric-lbl">Total Applications Submitted</span>
                <span className="rh-metric-val">{companyData.totalApplications}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="rh-profile-metrics-strip">
            <div className="rh-metric-chip">
              <div className="rh-metric-icon-wrap">
                <Calendar size={16} />
              </div>
              <div className="rh-metric-content">
                <span className="rh-metric-lbl">Registration Date</span>
                <span className="rh-metric-val">{individualData.registrationDate}</span>
              </div>
            </div>

            <div className="rh-metric-chip">
              <div className="rh-metric-icon-wrap">
                <CheckCircle2 size={16} />
              </div>
              <div className="rh-metric-content">
                <span className="rh-metric-lbl">Account Status</span>
                <span className="rh-metric-val text-success">{individualData.accountStatus}</span>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Information Card */}
        <div className="rh-profile-details-card">
          <div className="rh-details-card-header">
            <ShieldCheck size={16} className="rh-details-header-icon" />
            <h3>{isCompany ? 'Company Information' : 'Traveler Information'}</h3>
          </div>

          <div className="rh-details-list">
            {isCompany ? (
              <>
                <div className="rh-detail-item">
                  <div className="rh-detail-icon">
                    <Building2 size={15} />
                  </div>
                  <div className="rh-detail-body">
                    <span className="rh-detail-label">Company Details</span>
                    <span className="rh-detail-value">{companyData.companyName}</span>
                  </div>
                </div>

                <div className="rh-detail-item">
                  <div className="rh-detail-icon">
                    <User size={15} />
                  </div>
                  <div className="rh-detail-body">
                    <span className="rh-detail-label">Contact Person</span>
                    <span className="rh-detail-value">{companyData.contactPerson}</span>
                  </div>
                </div>

                <div className="rh-detail-item">
                  <div className="rh-detail-icon">
                    <Mail size={15} />
                  </div>
                  <div className="rh-detail-body">
                    <span className="rh-detail-label">Email ID</span>
                    <span className="rh-detail-value font-mono">{companyData.email}</span>
                  </div>
                </div>

                <div className="rh-detail-item">
                  <div className="rh-detail-icon">
                    <Phone size={15} />
                  </div>
                  <div className="rh-detail-body">
                    <span className="rh-detail-label">Phone Number</span>
                    <span className="rh-detail-value font-mono">{companyData.phone}</span>
                  </div>
                </div>

                <div className="rh-detail-item">
                  <div className="rh-detail-icon">
                    <MapPin size={15} />
                  </div>
                  <div className="rh-detail-body">
                    <span className="rh-detail-label">Address</span>
                    <span className="rh-detail-value">{companyData.address}</span>
                  </div>
                </div>

                <div className="rh-detail-item">
                  <div className="rh-detail-icon">
                    <Globe size={15} />
                  </div>
                  <div className="rh-detail-body">
                    <span className="rh-detail-label">Country</span>
                    <span className="rh-detail-value">{companyData.country}</span>
                  </div>
                </div>

                <div className="rh-detail-item">
                  <div className="rh-detail-icon">
                    <Users size={15} />
                  </div>
                  <div className="rh-detail-body">
                    <span className="rh-detail-label">Total Registered Travelers / Employs</span>
                    <span className="rh-detail-value">{companyData.totalEmployees}</span>
                  </div>
                </div>

                <div className="rh-detail-item">
                  <div className="rh-detail-icon">
                    <FileText size={15} />
                  </div>
                  <div className="rh-detail-body">
                    <span className="rh-detail-label">Total Applications Submitted</span>
                    <span className="rh-detail-value">{companyData.totalApplications}</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="rh-detail-item">
                  <div className="rh-detail-icon">
                    <User size={15} />
                  </div>
                  <div className="rh-detail-body">
                    <span className="rh-detail-label">Applicant Name</span>
                    <span className="rh-detail-value">{individualData.applicantName}</span>
                  </div>
                </div>

                <div className="rh-detail-item">
                  <div className="rh-detail-icon">
                    <Phone size={15} />
                  </div>
                  <div className="rh-detail-body">
                    <span className="rh-detail-label">Mobile Number</span>
                    <span className="rh-detail-value font-mono">{individualData.mobileNumber}</span>
                  </div>
                </div>

                <div className="rh-detail-item">
                  <div className="rh-detail-icon">
                    <Mail size={15} />
                  </div>
                  <div className="rh-detail-body">
                    <span className="rh-detail-label">Email ID</span>
                    <span className="rh-detail-value font-mono">{individualData.email}</span>
                  </div>
                </div>

                <div className="rh-detail-item">
                  <div className="rh-detail-icon">
                    <Globe size={15} />
                  </div>
                  <div className="rh-detail-body">
                    <span className="rh-detail-label">Country</span>
                    <span className="rh-detail-value">{individualData.country}</span>
                  </div>
                </div>

                <div className="rh-detail-item">
                  <div className="rh-detail-icon">
                    <Calendar size={15} />
                  </div>
                  <div className="rh-detail-body">
                    <span className="rh-detail-label">Registration Date</span>
                    <span className="rh-detail-value font-mono">{individualData.registrationDate}</span>
                  </div>
                </div>

                <div className="rh-detail-item">
                  <div className="rh-detail-icon">
                    <ShieldCheck size={15} />
                  </div>
                  <div className="rh-detail-body">
                    <span className="rh-detail-label">Account Status</span>
                    <span className="rh-detail-value text-success">{individualData.accountStatus}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        {/* <div className="rh-profile-actions-bar">
          <button
            type="button"
            className="rh-profile-action-btn secondary"
            onClick={() => navigate(ROUTES.ALL_APPLICATIONS)}
          >
            <span>View All Applications</span>
            <ArrowRight size={14} />
          </button>

          <button
            type="button"
            className="rh-profile-action-btn danger"
            onClick={() => setIsLogoutConfirmOpen(true)}
          >
            <LogOut size={14} />
            <span>Sign Out</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileView;

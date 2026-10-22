import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, X, AlertTriangle, Building2, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import ROUTES from '../../config/routes';

export default function LogoutConfirmModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { user, logout } = useApp();

  if (!isOpen) return null;

  const handleConfirmLogout = () => {
    onClose();
    logout();
    navigate(ROUTES.LOGIN);
  };

  const isCompany = user?.type === 'company';

  return (
    <div className="rh-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="rh-logout-modal-card animate-scale-in" onClick={(e) => e.stopPropagation()}>
        {/* Close Icon */}
        <button
          type="button"
          className="rh-logout-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={14} />
        </button>

        {/* Warning Icon Badge */}
        <div className="rh-logout-icon-badge">
          <div className="rh-logout-icon-glow" />
          <LogOut size={18} className="rh-logout-badge-icon" />
        </div>

        {/* Content */}
        <div className="rh-logout-modal-body">
          <h3 className="rh-logout-modal-title">Are you sure you want to log out?</h3>
        </div>

        {/* Modal Action Buttons */}
        <div className="rh-logout-modal-actions">
          <button
            type="button"
            className="rh-logout-btn-cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="rh-logout-btn-confirm"
            onClick={handleConfirmLogout}
          >
            <LogOut size={13} />
            <span>Yes, Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

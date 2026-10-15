import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { getNavItems } from '../../config/navigation';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, unreadCount } = useApp();

  const navItems = getNavItems(user);

  return (
    <nav className="rh-bottom-dock-wrap">
      <div className="rh-bottom-dock">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              type="button"
              className={`rh-dock-btn ${isActive ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <div className="rh-dock-icon-wrap">
                <Icon size={20} className="rh-dock-icon" />

                {item.hasBadge && unreadCount > 0 && !isActive && (
                  <span className="rh-dock-badge-pulse"></span>
                )}
              </div>
              <span className="rh-dock-label">{item.shortLabel || item.title}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Compass, Palmtree, CalendarCheck, FolderDown, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, unreadCount } = useApp();

  const navItems = [
    { path: '/', label: 'Explore', icon: Compass },
    { path: '/packages', label: 'Packages', icon: Palmtree },
    { path: '/status', label: 'My Status', icon: CalendarCheck, badge: unreadCount },
    { path: '/downloads', label: 'Downloads', icon: FolderDown },
    { path: '/profile', label: 'Profile', icon: User }
  ];

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
                {item.label === 'Profile' && user ? (
                  <img
                    src={user.avatar}
                    alt="User"
                    className="rh-dock-user-avatar"
                  />
                ) : (
                  <Icon size={20} className="rh-dock-icon" />
                )}

                {item.badge > 0 && !isActive && (
                  <span className="rh-dock-badge-pulse"></span>
                )}
              </div>
              <span className="rh-dock-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

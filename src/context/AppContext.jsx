import React, { createContext, useContext, useState, useMemo } from 'react';
import {
  currentUser as initialUser,
  userApplications as initialApplications,
  packagesCatalog as initialPackages,
  categoryPills
} from '../data/mockData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // User Authentication
  const [user, setUser] = useState(initialUser);

  // Applications & Packages
  const [applications, setApplications] = useState(initialApplications);
  const [packages] = useState(initialPackages);

  // Filtering & Search
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Favorites
  const [favorites, setFavorites] = useState(['PKG-01', 'PKG-02']);

  // Modals State
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isTrackLookupOpen, setIsTrackLookupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const toggleFavorite = (pkgId) => {
    setFavorites((prev) =>
      prev.includes(pkgId) ? prev.filter((id) => id !== pkgId) : [...prev, pkgId]
    );
    showToast(favorites.includes(pkgId) ? 'Removed from favorites' : 'Saved to favorites');
  };

  const login = (userData) => {
    setUser(userData);
    showToast(`Welcome back, ${userData.name}!`);
  };

  const logout = () => {
    setUser(null);
    showToast('Signed out of CRM portal');
  };

  // Filtered packages
  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const matchesCategory =
        activeCategory === 'all' ||
        (activeCategory === 'visa' && pkg.category === 'visa') ||
        (activeCategory === 'holidays' && pkg.category === 'holidays') ||
        (activeCategory === 'nature' &&
          (pkg.category === 'nature' || pkg.tags.includes('Hiking') || pkg.tags.includes('Fjords'))) ||
        (activeCategory === 'culture' && pkg.category === 'culture');

      const matchesSearch =
        searchQuery.trim() === '' ||
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [packages, activeCategory, searchQuery]);

  // All user documents aggregated
  const allUserDocuments = useMemo(() => {
    return applications.flatMap((app) =>
      app.documents.map((doc) => ({
        ...doc,
        appName: app.visaType || app.packageName,
        flag: app.flag,
        appId: app.id,
        appType: app.type
      }))
    );
  }, [applications]);

  const unreadCount = useMemo(() => {
    return applications.filter((a) => a.status === 'approved').length;
  }, [applications]);

  const value = {
    user,
    login,
    logout,
    applications,
    packages,
    filteredPackages,
    allUserDocuments,
    unreadCount,
    categoryPills,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    favorites,
    toggleFavorite,
    selectedPackage,
    setSelectedPackage,
    isTrackLookupOpen,
    setIsTrackLookupOpen,
    isLoginOpen,
    setIsLoginOpen,
    toastMessage,
    showToast
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

import React, { createContext, useContext, useState, useMemo } from 'react';
import {
  companyUser,
  individualUser,
  companyEmployees as initialEmployees,
  allApplicationsData as initialApplications,
  packagesCatalog as initialPackages
} from '../data/mockData';
import CATEGORY_PILLS from '../config/categories';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // User Authentication: starts with companyUser as default for corporate CRM view
  const [user, setUser] = useState(companyUser);

  // Applications & Employees Data
  const [applications, setApplications] = useState(initialApplications);
  const [employees, setEmployees] = useState(initialEmployees);
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

  // Login handler with Email & OTP + Role selection
  const loginWithEmailAndOtp = (email, otp, selectedRole = 'company') => {
    if (selectedRole === 'company') {
      setUser({ ...companyUser, email: email || companyUser.email });
      showToast(`Signed in as Company: ${companyUser.companyName}`);
    } else {
      setUser({ ...individualUser, email: email || individualUser.email });
      showToast(`Signed in as Individual: ${individualUser.name}`);
    }
  };

  const logout = () => {
    setUser(null);
    showToast('Signed out from RH Global User Portal');
  };

  // Helper to switch user type anytime (e.g. from Header or demo pills)
  const switchUserType = (type) => {
    if (type === 'company') {
      setUser(companyUser);
      showToast('Switched to Company User Mode');
    } else {
      setUser(individualUser);
      showToast('Switched to Individual User Mode');
    }
  };

  // Get single application by ID
  const getApplicationById = (id) => {
    return applications.find((app) => app.id === id) || null;
  };

  // Get single employee by ID and their linked applications
  const getEmployeeById = (empId) => {
    const employee = employees.find((e) => e.id === empId);
    if (!employee) return null;

    const employeeApps = applications.filter(
      (app) => app.employeeId === empId || employee.applicationIds?.includes(app.id)
    );

    const visaHistory = employeeApps.filter((a) => a.type === 'visa');
    const holidayHistory = employeeApps.filter((a) => a.type === 'holiday');

    return {
      ...employee,
      applications: employeeApps,
      visaHistory,
      holidayHistory
    };
  };

  // Applications filtered by user type
  // If company: see all corporate employee applications
  // If individual: see personal applications
  const userApplications = useMemo(() => {
    if (!user) return [];
    if (user.type === 'company') {
      return applications;
    }
    // Individual traveler files (Elena or Marcus personal files)
    return applications.slice(0, 3);
  }, [user, applications]);

  // Dashboard Stats Calculations
  const stats = useMemo(() => {
    const apps = userApplications;
    const current = apps.filter(
      (a) => a.statusGroup === 'current' || a.status === 'active' || a.status === 'under_review'
    ).length;

    const pending = apps.filter(
      (a) => a.statusGroup === 'pending' || a.status === 'pending'
    ).length;

    const completed = apps.filter(
      (a) => a.statusGroup === 'completed' || a.status === 'approved'
    ).length;

    const totalEmployees = user?.type === 'company' ? (user.totalEmployees || employees.length) : null;

    return {
      current,
      pending,
      completed,
      totalEmployees,
    };
  }, [userApplications, user, employees]);

  // Filtered packages
  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const matchesCategory =
        activeCategory === 'all' ||
        (activeCategory === 'visa' && pkg.category === 'visa') ||
        (activeCategory === 'holidays' && pkg.category === 'holidays');

      const matchesSearch =
        searchQuery.trim() === '' ||
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [packages, activeCategory, searchQuery]);

  const value = {
    user,
    setUser,
    loginWithEmailAndOtp,
    logout,
    switchUserType,
    applications: userApplications,
    allApplications: applications,
    employees,
    packages,
    filteredPackages,
    stats,
    getApplicationById,
    getEmployeeById,
    categoryPills: CATEGORY_PILLS,
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

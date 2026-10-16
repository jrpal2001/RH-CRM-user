import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ROUTES from '../config/routes';
import UserLayout from '../layouts/UserLayout';

// Pages - Views
import LoginView from '../pages/Login/Login.view';
import DashboardView from '../pages/Dashboard/Dashboard.view';
import ActiveApplicationsView from '../pages/ActiveApplications/ActiveApplications.view';
import AllApplicationsView from '../pages/AllApplications/AllApplications.view';
import ApplicationDetailView from '../pages/ApplicationDetail/ApplicationDetail.view';
import EmployeesView from '../pages/Employees/Employees.view';
import EmployeeDetailView from '../pages/EmployeeDetail/EmployeeDetail.view';
import VisaPackagesView from '../pages/VisaPackages/VisaPackages.view';
import HolidayPackagesView from '../pages/HolidayPackages/HolidayPackages.view';
import ProfileView from '../pages/Profile/Profile.view';
import PackageBlogDetailView from '../pages/PackageBlogDetail/PackageBlogDetail.view';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Login Route */}
      <Route path={ROUTES.LOGIN} element={<LoginView />} />

      {/* Main Authenticated Layout */}
      <Route element={<UserLayout />}>
        {/* Tab 1: Dashboard */}
        <Route path={ROUTES.DASHBOARD} element={<DashboardView />} />

        {/* Tab 2: Current Active Applications */}
        <Route path={ROUTES.ACTIVE_APPLICATIONS} element={<ActiveApplicationsView />} />

        {/* Tab 3: All Applications */}
        <Route path={ROUTES.ALL_APPLICATIONS} element={<AllApplicationsView />} />

        {/* Application Details with 3 Download buttons */}
        <Route path={ROUTES.APPLICATION_DETAIL} element={<ApplicationDetailView />} />

        {/* Tab 4: Company Employees & Details (Company Only) */}
        <Route path={ROUTES.EMPLOYEES} element={<EmployeesView />} />
        <Route path={ROUTES.EMPLOYEE_DETAIL} element={<EmployeeDetailView />} />

        {/* Tab 5: Visa Packages */}
        <Route path={ROUTES.VISA_PACKAGES} element={<VisaPackagesView />} />

        {/* Tab 6: Holiday Packages */}
        <Route path={ROUTES.HOLIDAY_PACKAGES} element={<HolidayPackagesView />} />

        {/* Package Detail (Visa & Holiday) */}
        <Route path={ROUTES.PACKAGE_DETAIL} element={<PackageBlogDetailView />} />

        {/* Profile */}
        <Route path={ROUTES.PROFILE} element={<ProfileView />} />

        {/* Default redirect to Dashboard */}
        <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
        <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

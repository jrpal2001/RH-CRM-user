import {
  LayoutDashboard,
  Clock,
  Files,
  Users,
  ShieldCheck,
  Palmtree,
  User
} from 'lucide-react';
import ROUTES from './routes';

export const getNavItems = (user) => {
  const isCompany = user?.type === 'company';

  const items = [
    {
      title: 'Dashboard',
      path: ROUTES.DASHBOARD,
      icon: LayoutDashboard,
      shortLabel: 'Dashboard',
    },
    {
      title: 'Active Applications',
      path: ROUTES.ACTIVE_APPLICATIONS,
      icon: Clock,
      shortLabel: 'Active',
      hasBadge: true,
    },
    {
      title: 'All Applications',
      path: ROUTES.ALL_APPLICATIONS,
      icon: Files,
      shortLabel: 'All Files',
    },
  ];

  // Tab 4: Only for Company User
  if (isCompany) {
    items.push({
      title: 'Company Employees',
      path: ROUTES.EMPLOYEES,
      icon: Users,
      shortLabel: 'Employees',
    });
  }

  // Tab 5: Visa Packages
  items.push({
    title: 'Visa Packages',
    path: ROUTES.VISA_PACKAGES,
    icon: ShieldCheck,
    shortLabel: 'Visas',
  });

  // Tab 6: Holiday Packages
  items.push({
    title: 'Holiday Packages',
    path: ROUTES.HOLIDAY_PACKAGES,
    icon: Palmtree,
    shortLabel: 'Holidays',
  });

  return items;
};

export default getNavItems;

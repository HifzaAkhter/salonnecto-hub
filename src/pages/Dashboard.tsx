
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import SidebarNavigation from '@/components/layout/SidebarNavigation';
import DashboardHeader from '@/components/layout/DashboardHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import DashboardOverview from '@/components/dashboard/DashboardOverview';

const Dashboard: React.FC = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  
  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <SidebarNavigation isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      
      {/* Mobile menu */}
      <MobileMenu isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'md:ml-16'}`}>
        <DashboardHeader title="Dashboard" toggleSidebar={toggleSidebar} isMobile={isMobile} />
        <main className="dashboard-content animate-fade-in">
          <DashboardOverview />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

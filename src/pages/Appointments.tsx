
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import SidebarNavigation from '@/components/layout/SidebarNavigation';
import DashboardHeader from '@/components/layout/DashboardHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import { generateMockAppointments } from '@/models/types';
import { format } from 'date-fns';
import { Calendar, Clock, User, Plus, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const Appointments: React.FC = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const appointments = generateMockAppointments();
  const [filter, setFilter] = useState<string>('all');
  
  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    if (filter === 'all') return true;
    return appointment.status === filter;
  });

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
        <DashboardHeader title="Appointments" toggleSidebar={toggleSidebar} isMobile={isMobile} />
        <main className="dashboard-content animate-fade-in">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center space-x-2">
                <button 
                  className={cn(
                    "px-3 py-1 text-sm rounded-full transition-colors",
                    filter === 'all' ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  )}
                  onClick={() => setFilter('all')}
                >
                  All
                </button>
                <button 
                  className={cn(
                    "px-3 py-1 text-sm rounded-full transition-colors",
                    filter === 'pending' ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  )}
                  onClick={() => setFilter('pending')}
                >
                  Pending
                </button>
                <button 
                  className={cn(
                    "px-3 py-1 text-sm rounded-full transition-colors",
                    filter === 'confirmed' ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  )}
                  onClick={() => setFilter('confirmed')}
                >
                  Confirmed
                </button>
                <button 
                  className={cn(
                    "px-3 py-1 text-sm rounded-full transition-colors",
                    filter === 'completed' ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  )}
                  onClick={() => setFilter('completed')}
                >
                  Completed
                </button>
              </div>
              
              <div className="flex space-x-2">
                <button className="inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter size={16} className="mr-2" />
                  Filter
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus size={16} className="mr-2" />
                  New Appointment
                </button>
              </div>
            </div>
            
            <div className="glass rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Customer</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Service</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Time</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredAppointments.map(appointment => (
                      <tr key={appointment._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                              <User size={14} className="text-gray-600" />
                            </div>
                            <div>
                              <p className="font-medium">{appointment.customer.name}</p>
                              <p className="text-xs text-gray-500">{appointment.customer.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-medium">{appointment.service.name}</p>
                          <p className="text-xs text-gray-500">{appointment.service.duration} min | ${appointment.service.price}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center text-sm">
                            <Calendar size={14} className="mr-1 text-gray-500" />
                            <span>{format(appointment.startTime, 'dd MMM yyyy')}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center text-sm">
                            <Clock size={14} className="mr-1 text-gray-500" />
                            <span>
                              {format(appointment.startTime, 'h:mm a')} - {format(appointment.endTime, 'h:mm a')}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={cn(
                            "px-2 py-1 text-xs rounded-full capitalize",
                            getStatusColor(appointment.status)
                          )}>
                            {appointment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-3">
                            <button className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                              Details
                            </button>
                            {appointment.status === 'pending' && (
                              <button className="text-green-600 hover:text-green-800 transition-colors text-sm font-medium">
                                Confirm
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {filteredAppointments.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <Calendar size={24} className="text-gray-400" />
                  </div>
                  <p className="text-gray-500">No appointments found</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Appointments;

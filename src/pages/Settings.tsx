
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import SidebarNavigation from '@/components/layout/SidebarNavigation';
import DashboardHeader from '@/components/layout/DashboardHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import { generateMockSalon } from '@/models/types';
import { Camera, Save, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Settings: React.FC = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const salon = generateMockSalon();
  const [activeTab, setActiveTab] = useState('profile');
  
  // Form states for salon profile
  const [name, setName] = useState(salon.name);
  const [email, setEmail] = useState(salon.email);
  const [phone, setPhone] = useState(salon.phone);
  const [address, setAddress] = useState(salon.address);
  const [city, setCity] = useState(salon.city);
  const [state, setState] = useState(salon.state);
  const [zipCode, setZipCode] = useState(salon.zipCode);
  const [description, setDescription] = useState(salon.description);
  const [profileImage, setProfileImage] = useState(salon.profileImage);
  const [coverImage, setCoverImage] = useState(salon.coverImage);
  
  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to the backend
    console.log('Saving profile...', {
      name,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      description,
      profileImage,
      coverImage
    });
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
        <DashboardHeader title="Settings" toggleSidebar={toggleSidebar} isMobile={isMobile} />
        <main className="dashboard-content animate-fade-in">
          <div className="glass rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-64 p-6 border-b md:border-b-0 md:border-r border-gray-100">
                <h2 className="text-lg font-semibold mb-4">Settings</h2>
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={cn(
                      "w-full px-4 py-2 text-left rounded-lg text-sm",
                      activeTab === 'profile'
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    Salon Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('hours')}
                    className={cn(
                      "w-full px-4 py-2 text-left rounded-lg text-sm",
                      activeTab === 'hours'
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    Business Hours
                  </button>
                  <button
                    onClick={() => setActiveTab('payment')}
                    className={cn(
                      "w-full px-4 py-2 text-left rounded-lg text-sm",
                      activeTab === 'payment'
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    Payment Methods
                  </button>
                  <button
                    onClick={() => setActiveTab('notifications')}
                    className={cn(
                      "w-full px-4 py-2 text-left rounded-lg text-sm",
                      activeTab === 'notifications'
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    Notifications
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={cn(
                      "w-full px-4 py-2 text-left rounded-lg text-sm",
                      activeTab === 'security'
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    Security
                  </button>
                </nav>
              </div>
              
              <div className="flex-1 p-6">
                {activeTab === 'profile' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Salon Profile</h3>
                    
                    <form onSubmit={handleSaveProfile} className="space-y-6">
                      <div className="space-y-4">
                        <div className="relative">
                          <div className="h-48 rounded-lg bg-gray-100 overflow-hidden">
                            {coverImage ? (
                              <img 
                                src={coverImage} 
                                alt="Cover" 
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="flex items-center justify-center h-full">
                                <span className="text-gray-400">No cover image</span>
                              </div>
                            )}
                          </div>
                          <label className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors cursor-pointer">
                            <Camera size={18} className="text-gray-700" />
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="hidden" 
                              onChange={(e) => {
                                // Handle image upload in a real app
                              }}
                            />
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div className="w-24 h-24 rounded-lg bg-gray-100 overflow-hidden">
                              {profileImage ? (
                                <img 
                                  src={profileImage} 
                                  alt="Profile" 
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="flex items-center justify-center h-full">
                                  <span className="text-gray-400">No image</span>
                                </div>
                              )}
                            </div>
                            <label className="absolute bottom-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                              <Camera size={14} className="text-gray-700" />
                              <input 
                                type="file" 
                                accept="image/*" 
                                className="hidden" 
                                onChange={(e) => {
                                  // Handle image upload in a real app
                                }}
                              />
                            </label>
                          </div>
                          
                          <div className="flex-1">
                            <p className="text-sm text-gray-500">
                              Upload your salon logo and cover image.
                              The recommended size for the logo is 200x200px.
                              The recommended size for the cover image is 1200x400px.
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Salon Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Address
                          </label>
                          <input
                            id="address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                              City
                            </label>
                            <input
                              id="city"
                              type="text"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                              State
                            </label>
                            <input
                              id="state"
                              type="text"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                              ZIP Code
                            </label>
                            <input
                              id="zipCode"
                              type="text"
                              value={zipCode}
                              onChange={(e) => setZipCode(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                          </label>
                          <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-4 pt-4 border-t">
                        <button
                          type="button"
                          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center"
                        >
                          <X size={16} className="mr-2" />
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
                        >
                          <Save size={16} className="mr-2" />
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                
                {activeTab === 'hours' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Business Hours</h3>
                    <p className="text-gray-500">Configure your salon's operating hours</p>
                  </div>
                )}
                
                {activeTab === 'payment' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Payment Methods</h3>
                    <p className="text-gray-500">Configure payment options for your salon</p>
                  </div>
                )}
                
                {activeTab === 'notifications' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Notification Settings</h3>
                    <p className="text-gray-500">Configure how you receive notifications</p>
                  </div>
                )}
                
                {activeTab === 'security' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Security Settings</h3>
                    <p className="text-gray-500">Manage your account security</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;

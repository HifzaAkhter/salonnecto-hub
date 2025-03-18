
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lock, User, Bell, Globe, CreditCard, Shield } from 'lucide-react';

const Settings: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset messages
    setPasswordError('');
    setPasswordSuccess('');
    
    // Basic validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError('All fields are required');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }
    
    if (newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setPasswordSuccess('Password changed successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }, 1000);
  };

  return (
    <DashboardLayout title="Settings">
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 bg-gray-100 p-1">
            <TabsTrigger value="account" className="flex items-center gap-2">
              <User size={16} /> Account
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Lock size={16} /> Security
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell size={16} /> Notifications
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard size={16} /> Billing
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield size={16} /> Privacy
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center gap-2">
              <Globe size={16} /> Preferences
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Input id="firstName" defaultValue="Salon" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Input id="lastName" defaultValue="Admin" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" defaultValue="admin@salon.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <Button className="bg-pink-600 hover:bg-pink-700">Save Changes</Button>
              </div>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Salon Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="salonName" className="block text-sm font-medium text-gray-700 mb-1">
                    Salon Name
                  </label>
                  <Input id="salonName" defaultValue="Elegance Beauty Salon" />
                </div>
                <div>
                  <label htmlFor="salonAddress" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <Input id="salonAddress" defaultValue="123 Main Street" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="salonCity" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <Input id="salonCity" defaultValue="San Francisco" />
                  </div>
                  <div>
                    <label htmlFor="salonState" className="block text-sm font-medium text-gray-700 mb-1">
                      State/Province
                    </label>
                    <Input id="salonState" defaultValue="CA" />
                  </div>
                  <div>
                    <label htmlFor="salonZip" className="block text-sm font-medium text-gray-700 mb-1">
                      Zip/Postal Code
                    </label>
                    <Input id="salonZip" defaultValue="94105" />
                  </div>
                </div>
                <Button className="bg-pink-600 hover:bg-pink-700">Update Salon Info</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Change Password</h2>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password
                  </label>
                  <Input 
                    id="currentPassword" 
                    type="password" 
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <Input 
                    id="newPassword" 
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <Input 
                    id="confirmPassword" 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                
                {passwordError && (
                  <div className="p-2 bg-red-50 text-red-700 rounded-md text-sm">
                    {passwordError}
                  </div>
                )}
                
                {passwordSuccess && (
                  <div className="p-2 bg-green-50 text-green-700 rounded-md text-sm">
                    {passwordSuccess}
                  </div>
                )}
                
                <Button type="submit" className="bg-pink-600 hover:bg-pink-700">Change Password</Button>
              </form>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Two-Factor Authentication</h2>
              <p className="text-gray-600 mb-4">
                Add an extra layer of security to your account by enabling two-factor authentication.
              </p>
              <Button variant="outline">Enable 2FA</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="notifications">
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
              <p className="text-gray-600 mb-4">
                Configure your notification settings.
              </p>
              <div className="space-y-4">
                {/* Notification settings would go here */}
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="billing">
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
              <p className="text-gray-600 mb-4">
                Manage your payment methods and withdrawal preferences.
              </p>
              <div className="space-y-4">
                {/* Payment settings would go here */}
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="privacy">
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Privacy Settings</h2>
              <p className="text-gray-600 mb-4">
                Manage your privacy and data sharing preferences.
              </p>
              <div className="space-y-4">
                {/* Privacy settings would go here */}
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="preferences">
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">App Preferences</h2>
              <p className="text-gray-600 mb-4">
                Customize your experience with SalonSphere.
              </p>
              <div className="space-y-4">
                {/* App preferences would go here */}
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;

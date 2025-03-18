
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Lock, 
  User, 
  Bell, 
  Globe, 
  CreditCard, 
  Shield, 
  Check,
  X, 
  Mail, 
  MessageSquare, 
  Calendar,
  CreditCard as CardIcon,
  BankNote,
  BarChart
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Settings: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  // Notifications state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [appointmentReminders, setAppointmentReminders] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(true);
  
  // Billing state
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  // Preferences state
  const [language, setLanguage] = useState('english');
  const [timezone, setTimezone] = useState('GMT-5');
  const [theme, setTheme] = useState('light');

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
          
          <TabsContent value="notifications" className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
              <p className="text-gray-600 mb-4">
                Configure how and when you receive notifications from SalonSphere.
              </p>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-sm text-gray-700 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Notifications
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">New appointment notifications</div>
                      <div className="text-sm text-gray-500">Receive an email when a new appointment is booked</div>
                    </div>
                    <Switch 
                      checked={emailNotifications} 
                      onCheckedChange={setEmailNotifications} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Appointment reminders</div>
                      <div className="text-sm text-gray-500">Receive an email reminder before appointments</div>
                    </div>
                    <Switch 
                      checked={appointmentReminders} 
                      onCheckedChange={setAppointmentReminders} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Marketing emails</div>
                      <div className="text-sm text-gray-500">Receive emails about new features and promotions</div>
                    </div>
                    <Switch 
                      checked={marketingEmails} 
                      onCheckedChange={setMarketingEmails} 
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium text-sm text-gray-700 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    SMS Notifications
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">SMS notifications</div>
                      <div className="text-sm text-gray-500">Receive SMS alerts for important updates</div>
                    </div>
                    <Switch 
                      checked={smsNotifications} 
                      onCheckedChange={setSmsNotifications} 
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium text-sm text-gray-700 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Frequency
                  </h3>
                  
                  <RadioGroup defaultValue="daily">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="realtime" id="realtime" />
                      <Label htmlFor="realtime">Real-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="daily" />
                      <Label htmlFor="daily">Daily digest</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="weekly" />
                      <Label htmlFor="weekly">Weekly digest</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="bg-pink-600 hover:bg-pink-700">Save Notification Settings</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="billing" className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-sm text-gray-700 mb-2">Payment Method</h3>
                  
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="glass rounded-lg p-4 mb-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <Label htmlFor="card" className="font-medium flex items-center">
                              <CardIcon className="w-4 h-4 mr-2 text-gray-600" /> Credit/Debit Card
                            </Label>
                            <div className="flex items-center space-x-1">
                              <div className="w-8 h-5 bg-blue-600 rounded"></div>
                              <div className="w-8 h-5 bg-red-500 rounded"></div>
                              <div className="w-8 h-5 bg-yellow-400 rounded"></div>
                            </div>
                          </div>
                          {paymentMethod === 'card' && (
                            <div className="mt-4 space-y-4">
                              <div>
                                <Label htmlFor="cardNumber">Card Number</Label>
                                <Input 
                                  id="cardNumber" 
                                  placeholder="•••• •••• •••• ••••" 
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="expiryDate">Expiry Date</Label>
                                  <Input 
                                    id="expiryDate" 
                                    placeholder="MM/YY" 
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="cvc">CVC</Label>
                                  <Input 
                                    id="cvc" 
                                    placeholder="123" 
                                  />
                                </div>
                              </div>
                              <div>
                                <Label htmlFor="nameOnCard">Name on Card</Label>
                                <Input 
                                  id="nameOnCard" 
                                  placeholder="John Doe" 
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bank" id="bank" />
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <Label htmlFor="bank" className="font-medium flex items-center">
                              <BankNote className="w-4 h-4 mr-2 text-gray-600" /> Bank Transfer
                            </Label>
                          </div>
                          {paymentMethod === 'bank' && (
                            <div className="mt-4 space-y-4">
                              <div>
                                <Label htmlFor="accountName">Account Name</Label>
                                <Input 
                                  id="accountName" 
                                  placeholder="John Doe" 
                                />
                              </div>
                              <div>
                                <Label htmlFor="accountNumber">Account Number</Label>
                                <Input 
                                  id="accountNumber" 
                                  placeholder="123456789" 
                                />
                              </div>
                              <div>
                                <Label htmlFor="routingNumber">Routing Number</Label>
                                <Input 
                                  id="routingNumber" 
                                  placeholder="123456789" 
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium text-sm text-gray-700 mb-2">Billing Cycle</h3>
                  
                  <RadioGroup value={billingCycle} onValueChange={setBillingCycle}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Monthly (₹300/month)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="annually" id="annually" />
                      <Label htmlFor="annually">Annually (₹3000/year - Save 17%)</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="bg-pink-600 hover:bg-pink-700">Update Payment Details</Button>
              </div>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Billing History</h2>
              <div className="rounded-lg border overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">May 01, 2023</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">SalonSphere Premium Subscription</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">₹300</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Paid
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Apr 01, 2023</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">SalonSphere Premium Subscription</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">₹300</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Paid
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="privacy" className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Privacy Settings</h2>
              <p className="text-gray-600 mb-4">
                Manage your privacy and data sharing preferences.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Share analytics data</div>
                    <div className="text-sm text-gray-500">Help improve SalonSphere by sharing usage data</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Allow profile discovery</div>
                    <div className="text-sm text-gray-500">Allow customers to discover your salon in search</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Third-party integrations</div>
                    <div className="text-sm text-gray-500">Allow third-party services to access your data</div>
                  </div>
                  <Switch />
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="bg-pink-600 hover:bg-pink-700">Save Privacy Settings</Button>
              </div>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Data Management</h2>
              <p className="text-gray-600 mb-4">
                Manage your account data and export or delete your information.
              </p>
              <div className="space-x-4">
                <Button variant="outline">Export Data</Button>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="preferences" className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">App Preferences</h2>
              <p className="text-gray-600 mb-4">
                Customize your experience with SalonSphere.
              </p>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-sm text-gray-700 flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Language and Region
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="language">Language</Label>
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                          <SelectItem value="hindi">Hindi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select value={timezone} onValueChange={setTimezone}>
                        <SelectTrigger id="timezone">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="GMT-8">Pacific Time (GMT-8)</SelectItem>
                          <SelectItem value="GMT-7">Mountain Time (GMT-7)</SelectItem>
                          <SelectItem value="GMT-6">Central Time (GMT-6)</SelectItem>
                          <SelectItem value="GMT-5">Eastern Time (GMT-5)</SelectItem>
                          <SelectItem value="GMT">Greenwich Mean Time (GMT)</SelectItem>
                          <SelectItem value="GMT+5.5">India Standard Time (GMT+5:30)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium text-sm text-gray-700 flex items-center">
                    <BarChart className="w-4 h-4 mr-2" />
                    Dashboard Preferences
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="theme">Theme</Label>
                      <Select value={theme} onValueChange={setTheme}>
                        <SelectTrigger id="theme">
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System Default</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="font-medium">Dashboard auto-refresh</div>
                        <div className="text-sm text-gray-500">Automatically refresh dashboard data</div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="font-medium">Compact view</div>
                        <div className="text-sm text-gray-500">Show more content in a compact layout</div>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="bg-pink-600 hover:bg-pink-700">Save Preferences</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;

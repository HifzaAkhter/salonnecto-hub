
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ChevronLeft } from 'lucide-react';

const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [salonName, setSalonName] = useState('');
  const [salonAddress, setSalonAddress] = useState('');
  const [salonCity, setSalonCity] = useState('');
  const [salonState, setSalonState] = useState('');
  const [salonZip, setSalonZip] = useState('');
  const [salonPhone, setSalonPhone] = useState('');
  
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };
  
  const handlePrevStep = () => {
    setStep(1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle registration here
    console.log('Registration data:', { 
      name, 
      email, 
      password, 
      salonName, 
      salonAddress, 
      salonCity, 
      salonState, 
      salonZip, 
      salonPhone 
    });
    
    // For demo purposes, navigate to dashboard
    window.location.href = '/dashboard';
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="max-w-md w-full space-y-8 glass p-10 rounded-xl animate-fade-in">
        <div className="text-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
            SalonSphere
          </h1>
          <h2 className="mt-2 text-2xl font-semibold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            {step === 1 ? "Tell us about yourself" : "Tell us about your salon"}
          </p>
        </div>
        
        {/* Progress indicator */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xs">
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    1
                  </div>
                  <span className="text-xs mt-1 text-gray-500">Account</span>
                </div>
                <div className="flex-1 h-1 mx-2 bg-gray-200">
                  <div className={`h-full ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'} transition-all duration-300`} style={{width: step > 1 ? '100%' : '0%'}}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    2
                  </div>
                  <span className="text-xs mt-1 text-gray-500">Salon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {step === 1 ? (
          <form className="mt-6 space-y-4" onSubmit={handleNextStep}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">Password must be at least 8 characters</p>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Confirm your password"
              />
            </div>
            
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Continue
              </button>
            </div>
          </form>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="salonName" className="block text-sm font-medium text-gray-700 mb-1">
                Salon Name
              </label>
              <input
                id="salonName"
                name="salonName"
                type="text"
                required
                value={salonName}
                onChange={(e) => setSalonName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your salon name"
              />
            </div>
            
            <div>
              <label htmlFor="salonAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                id="salonAddress"
                name="salonAddress"
                type="text"
                required
                value={salonAddress}
                onChange={(e) => setSalonAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter street address"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="salonCity" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  id="salonCity"
                  name="salonCity"
                  type="text"
                  required
                  value={salonCity}
                  onChange={(e) => setSalonCity(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="City"
                />
              </div>
              <div>
                <label htmlFor="salonState" className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <input
                  id="salonState"
                  name="salonState"
                  type="text"
                  required
                  value={salonState}
                  onChange={(e) => setSalonState(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="State"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="salonZip" className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP Code
                </label>
                <input
                  id="salonZip"
                  name="salonZip"
                  type="text"
                  required
                  value={salonZip}
                  onChange={(e) => setSalonZip(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ZIP Code"
                />
              </div>
              <div>
                <label htmlFor="salonPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="salonPhone"
                  name="salonPhone"
                  type="tel"
                  required
                  value={salonPhone}
                  onChange={(e) => setSalonPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Phone number"
                />
              </div>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors flex items-center justify-center"
              >
                <ChevronLeft size={16} className="mr-1" />
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-2 px-4 border border-transparent rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Register
              </button>
            </div>
          </form>
        )}
        
        <div className="text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

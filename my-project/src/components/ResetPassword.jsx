import React, { useState } from 'react';
import logo from "../assets/logo.png"
const NewPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Form submitted:', formData);
    alert("Password successfully reset!");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="p-8">
        <img 
                 src={logo}
                 className="w-32 h-10"
                 alt="SocialRepeat Logo"
               />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md space-y-6">
          {/* Title and Description */}
          <div className="text-center space-y-2 flex items-start justify-center flex-col">
            <h1 className="text-2xl font-semibold text-gray-900">
              Reset your password
            </h1>
            <p className="text-gray-600">
              Type in your new password
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 w-11/12">
            <div>
              <input
                type="password"
                name="password"
                placeholder='New password*'
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder='Retry new password *'
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
<div className='flex flex-col gap-10'>
<button
              type="submit"
              className="w-1/4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>RESET</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Back to Login */}
            <button
              type="button"
              onClick={() => window.location.href = '/'}
              className="w-full mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              BACK TO LOGIN
            </button>
</div>
            {/* Reset Button */}
        
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 text-center">
        <div className="text-sm text-gray-600 space-x-4">
          <a href="#" className="hover:underline">Terms and conditions</a>
          <span>•</span>
          <a href="#" className="hover:underline">Privacy policy</a>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
import React, { useState } from 'react';
import logo from "../assets/logo.png";
import land from "../assets/land.png"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-4 md:p-8">
        {/* Top Section with Logo */}
        <div>
          <img 
            src={logo}
            className="w-24 md:w-32 h-8 md:h-10 mb-4 md:mb-8"
            alt="SocialRepeat Logo"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-full max-w-md mx-auto px-4 md:px-0">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              {/* Title */}
              <div className="mb-4 md:mb-6 text-start">
                <h2 className="text-lg md:text-xl font-medium">Sign in</h2>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Login Button and Forgot Password */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                >
                  <span>LOGIN</span>
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

                <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Forgot your password?
                </a>
              </div>

              {/* Create Account Button */}
              <div className="relative mt-4">
                <button
                  type="button"
                  onClick={() => window.location.href = '/signup'}
                  className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  CREATE NEW ACCOUNT
                </button>
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                  Beta
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-600 space-x-4 pt-4 md:pt-8 text-center md:text-left">
          <a href="#" className="hover:underline">Terms and conditions</a>
          <span>•</span>
          <a href="#" className="hover:underline">Privacy policy</a>
        </div>
      </div>

      {/* Right Side - Promo Image */}
      <div className=" md:flex w-full md:w-1/2 bg-gray-50 p-4 md:p-8 items-center justify-center">
        <img 
          src={land}
          className="w-full max-w-lg h-auto object-contain"
          alt="Schedule and Monitor Promo"
        />
      </div>
    </div>
  );
};

export default LoginPage;

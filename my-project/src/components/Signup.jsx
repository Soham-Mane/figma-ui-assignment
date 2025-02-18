import React, { useState } from 'react';
import logo from "../assets/logo.png"

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    country: 'United states',
    phone: '',
    timezone: 'GMT+2'
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
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-8">
        {/* Top Section with Logo */}
        <div>
          <img 
            src={logo}
            className="w-32 h-10 mb-8"
            alt="SocialRepeat Logo"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            {/* Sign up header */}
            <div className="mb-6 text-start">
              <span className="inline-block px-4 py-1 font-bold text-sm">
                Sign up to socialRepeat
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="devi@domain.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="socialhub"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Country and Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="United states">United states</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Phone #
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+20"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Timezone */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Default timezone
                </label>
                <select
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="GMT+2">GMT+2</option>
                  <option value="GMT+1">GMT+1</option>
                  <option value="GMT">GMT</option>
                  <option value="GMT-1">GMT-1</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={() => window.location.href = '/confirmation-status'}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                SIGN UP
              </button>

              {/* Back to Login */}
              <button
                type="button"
                onClick={() => window.location.href = '/'}
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                BACK TO LOGIN
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-600 space-x-4 pt-8">
          <a href="#" className="hover:underline">Terms and conditions</a>
          <span>•</span>
          <a href="#" className="hover:underline">Privacy policy</a>
        </div>
      </div>

      {/* Right Side - Blue Background */}
      <div className="hidden md:block w-1/2 bg-blue-600">
        <div className="p-8 flex justify-end items-end h-full">
          <div className="text-white">
            <h1 className="text-4xl tracking-wider">
              <span className="font-extrabold">Social</span>
              <span className="font-semibold">Repeat</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
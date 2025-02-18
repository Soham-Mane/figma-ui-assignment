import React, { useState } from 'react';
import logo from "../assets/logo.png"
const SetPassword = () => {
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
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Content */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
        {/* Top section with logo */}
        <div>
          <img 
            src={logo}
            className="w-32 h-10"
            alt="SocialRepeat Logo"
          />
        </div>

        {/* Middle section with form */}
        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full py-8">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-semibold text-gray-900 mb-8">
              Set your password
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
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
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              SIGN UP
            </button>

            <button
              type="button"
              onClick={() => window.location.href = '/'}
              className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              BACK TO LOGIN
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-600 space-x-4">
          <a href="#" className="hover:underline">Terms and conditions</a>
          <span>•</span>
          <a href="#" className="hover:underline">Privacy policy</a>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:block w-1/2 bg-blue-50">
        <div className="p-8 flex justify-end items-end h-full flex-col">
          <div className="text-black">
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

export default SetPassword;
import React, { useState } from 'react';
import logo from "../assets/logo.png"
const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset password for:', email);
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
          <div className="text-start space-y-2">
            <h1 className="text-2xl font-semibold text-gray-900">
              Reset your password
            </h1>
            <p className="text-gray-600">
              Type in your registered email address to reset password
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className='flex flex-col items-start'>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email Address *'
                className="w-10/12 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
<div className='space-y-20 flex flex-col items-start'>
<button
              type="submit"
              onClick={() => window.location.href = '/recovery-email-sent'}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>NEXT</span>
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
            {/* Next Button */}
      
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

export default PasswordReset;
import React from 'react';
import logo from "../assets/logo.png"
const RecoveryEmailSent = () => {
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
              Recovery Email Sent!
            </h1>
            <p className="text-gray-600">
              Please check your email for next steps to reset your password.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-20 flex flex-col items-start">
            <button
              onClick={() => window.location.href = '/reset-password'}
              className=" bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              CONTACT SUPPORT
            </button>

            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              BACK TO LOGIN
            </button>
          </div>
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

export default RecoveryEmailSent;
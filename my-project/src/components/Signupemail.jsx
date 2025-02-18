import React from 'react';
import logo from "../assets/logo.png"
const EmailConfirmation = () => {
  const confirmationUrl = 'https://app.domain.com/auth/confirm-email/7ddcdc63-0cd1-45d5-8e62-39b5bac44841';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4">
      {/* Header Logo */}
      <div className="w-full max-w-xl mb-8">
        <div className="bg-blue-600 p-10  h-40">
         <img 
                      src={logo}
                      className="w-32 h-10"
                      alt="SocialRepeat Logo"
                    />
        </div>
      </div>

      {/* Main Content Card */}
      <div className="w-full max-w-xl bg-white rounded-lg shadow-sm p-8 space-y-6 flex flex-col items-start">
        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-900">
          Email Confirmation, before{' '}
          <span className="text-blue-600">we get started...</span>
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-start">
          Thank you for registering on socialRepeat, to finish your registration please confirm
          your email by clicking on the button below:
        </p>

        {/* Confirm Button */}
        <button 
          className=" bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          onClick={() => window.location.href = '/set-password'}
        >
          CONFIRM YOUR EMAIL
        </button>

        {/* Didn't sign up section */}
        <div className="text-gray-600">
          Didn't sign up for socialRepeat?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Let us know.
          </a>
        </div>

        {/* Troubleshooting section */}
        <div className="pt-6 border-t border-gray-200 space-y-4">
          <p className="text-gray-600 text-start">
            If you're having trouble with the button above, copy and paste the URL below into your
            web browser:
          </p>
          <a 
            href={confirmationUrl}
            className="text-blue-600 hover:underline break-all text-sm text-start"
          >
            {confirmationUrl}
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-xl mt-8 flex items-center justify-between text-sm text-gray-600">
        <div>
          Email sent by socialRepeat
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Terms and conditions</a>
          <span>•</span>
          <a href="#" className="hover:underline">Privacy policy</a>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
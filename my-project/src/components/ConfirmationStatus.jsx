import React from 'react';
import logo from "../assets/logo.png"

const ConfirmationStatus = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="w-full md:w-2/3 flex flex-col">
        {/* Header */}
        <div className="p-8">
          <img 
            src={logo}
            className="w-32 h-10"
            alt="SocialRepeat Logo"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-center ">
          <div className="max-w-md w-full">
            {/* Title and Subtitle */}
            <div className="mb-8 text-start">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Confirm your email address
              </h1>
              <p className="text-gray-600 text-sm">
                Please check your email for the next step to signup
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-10">
                <div className='flex flex-col gap-4 mb-10'>
                <button 
                className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                onClick={() => window.location.href = '/support'}
              >
                CONTACT SUPPORT
              </button>
              
              <button 
                className="w-1/3 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                onClick={() => window.location.href = '/email-confirmation'}
              >
                CONITUNE 
              </button>
                </div>
          

              <button 
                className="w-full mt-8 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                onClick={() => window.location.href = '/'}
              >
                BACK TO LOGIN
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 flex flex-col items-end">
          <div className="text-sm text-gray-600 space-x-4">
            <a href="#" className="hover:underline">Terms and conditions</a>
            <span>•</span>
            <a href="#" className="hover:underline">Privacy policy</a>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:block w-1/3 bg-blue-50">
        <div className="p-8 flex justify-end items-end h-full">
          <h1 className="text-4xl tracking-wider">
            <span className="font-extrabold">Social</span>
            <span className="font-semibold">Repeat</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStatus;
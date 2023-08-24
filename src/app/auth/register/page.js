'use client'
import React, { useState } from 'react';
import { IconUser, IconLock, IconMailbox, IconGlobe, IconUserCheck } from '@tabler/icons-react';
import Link from 'next/link';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    let isValid = true;
    const errors = { ...formErrors };

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    // Validate password strength
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
      errors.password = 'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
      isValid = false;
    }

    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    console.log(errors);
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Submit the form or perform any necessary actions
      console.log('Form submitted:', formData);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-[#D8FCDF] ">
      <div className="rounded-xl shadow-xl w-[30%]">
        <div className="bg-[#376B52] w-full p-8 rounded-t-xl flex justify-center items-center">
          <h2 className="text-3xl font-semibold text-white">Join TechHack</h2>
        </div>
          <div className="bg-white rounded-b-xl p-12 pt-5 ">
            <div className='flex items-center justify-center'>
              <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                </svg>
                Sign up with Github
              </button>
              <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                  <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                </svg>
                Sign up with Google
              </button>
            </div>


            <div className='h-[1px] w-full bg-gray-300 mt-6 mb-6'></div>
          
            <form onSubmit={handleSubmit}>
              <div className={`flex items-center p-2 border ${formErrors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-xl ${formErrors.fullName ? 'bg-red-100' : ''}`}>
                <IconUser size={20} className="mr-2" color="#376B52" />
                <input type="text" placeholder="Full Name" className="w-full focus:outline-none" />
              </div>
              <div className='text-red-500 text-xs mt-1 mb-8'>
                {formErrors.fullName}
              </div>
              <div className={`flex items-center p-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-xl ${formErrors.email ? 'bg-red-100' : ''}`}>
                <IconMailbox size={20} className="mr-2" color="#376B52" />
                <input type="email" placeholder="Email" className="w-full focus:outline-none" />
              </div>
              <div className='text-red-500 text-xs mt-1 mb-8'>
                {formErrors.email}
              </div>
              <div className={`flex items-center p-2 border ${formErrors.password ? 'border-red-500' : 'border-gray-300'} rounded-xl ${formErrors.password ? 'bg-red-100' : ''}`}>
                <IconLock size={20} className="mr-2" color="#376B52" />
                <input type="password" placeholder="Password" className="w-full focus:outline-none" />
              </div>
              <div className='text-red-500 text-xs mt-1 mb-8'>
                {formErrors.password}
              </div>
              <div className={`flex items-center p-2 border ${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-xl ${formErrors.confirmPassword ? 'bg-red-100' : ''}`}>
                <IconLock size={20} className="mr-2" color="#376B52" />
                <input type="password" placeholder="Confirm Password" className="w-full focus:outline-none" />
              </div>
              <div className='text-red-500 text-xs mt-1 mb-8'>
                {formErrors.confirmPassword}
              </div>
              <button
                type="submit"
                className="w-full block bg-[#16A34A] text-white p-3 rounded-lg font-semibold hover:bg-[#16A34A]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50"
              >
                Sign Up
              </button>

              
            </form>
            <p className="text-gray-600 mt-8">
              Already have an account? <a className="underline text-[#16A34A]">Log In</a>
            </p>
        </div>
      </div>
    </div>
  );
}

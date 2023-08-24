'use client'
import React, { useState } from 'react';
import { IconUser, IconLock, IconMailbox, IconGlobe, IconUserCheck } from '@tabler/icons-react';
import Link from 'next/link';

export default function SignUpPage() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedEducationLevel, setSelectedEducationLevel] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    country: '',
    educationLevel: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    country: '',
    educationLevel: '',
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

    // Validate age (minimum 18)
    console.log(formData.age)
    if (isNaN(formData.age) || parseInt(formData.age) < 18 || !formData.age) {
      errors.age = 'Age must be at least 18';
      isValid = false;
    }

    // Validate selectors
    if (formData.country === '') {
      errors.country = 'Please select a country';
      isValid = false;
    }

    if (formData.educationLevel === '') {
      errors.educationLevel = 'Please select an education level';
      isValid = false;
    }

    console.log(errors);
    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Submit the form or perform any necessary actions
      console.log('Form submitted:', formData);
    }
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleEducationLevelChange = (event) => {
    setSelectedEducationLevel(event.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#D8FCDF] ">
      <div className="rounded-xl shadow-xl w-[30%]">
        <div className="bg-[#376B52] w-full p-8 rounded-t-xl flex justify-center items-center">
          <h2 className="text-3xl font-semibold text-white">Join TechHack</h2>
        </div>
        <div className="bg-white rounded-b-xl p-12 ">
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
            <div className={`flex items-center p-2 border ${formErrors.age ? 'border-red-500' : 'border-gray-300'} rounded-xl ${formErrors.age ? 'bg-red-100' : ''}`}>
              <IconUserCheck size={20} className="mr-2" color="#376B52" />
              <input type="number" placeholder="Age" className="w-full focus:outline-none" />
            </div>
            <div className='text-red-500 text-xs mt-1 mb-8'>
              {formErrors.age}
            </div>
            <div className={`flex items-center p-2 border ${formErrors.country ? 'border-red-500' : 'border-gray-300'} rounded-xl ${formErrors.country ? 'bg-red-100' : ''}`}>
              <IconGlobe size={20} className="mr-2" color="#376B52" />
              <select
                value={selectedCountry}
                onChange={handleCountryChange}
                className="w-full focus:outline-none"
              >
                <option value="">Select Country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                {/* Add more countries */}
              </select>
            </div>
            <div className='text-red-500 text-sm mt-1 mb-8'>
              {formErrors.country}
            </div>
            <div className={`flex items-center p-2 border ${formErrors.educationLevel ? 'border-red-500' : 'border-gray-300'} rounded-xl ${formErrors.educationLevel ? 'bg-red-100' : ''}`}>
              <IconUserCheck size={20} className="mr-2" color="#376B52" />
              <select
                value={selectedEducationLevel}
                onChange={handleEducationLevelChange}
                className="w-full focus:outline-none rounded-lg"
              >
                <option value="">Select Education Level</option>
                <option value="Cycle">Cycle Student</option>
                <option value="College">College Student</option>
                <option value="master">Master's Degree</option>
                <option value="professional">Professional</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className='text-red-500 text-sm mt-1 mb-8 flex-wrap'>
              {formErrors.educationLevel}
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

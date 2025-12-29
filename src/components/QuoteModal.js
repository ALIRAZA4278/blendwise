'use client';
import React, { useState, useEffect } from 'react';

const QuoteModal = ({ isOpen, onClose, packageInfo = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: packageInfo ? `I'm interested in ${packageInfo.name} - $${packageInfo.price}` : '',
    agreed: false
  });

  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (mainContent) {
        mainContent.style.filter = 'blur(8px)';
        mainContent.style.transition = 'filter 0.3s ease';
      }
    } else {
      document.body.style.overflow = 'unset';
      if (mainContent) {
        mainContent.style.filter = 'none';
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (mainContent) {
        mainContent.style.filter = 'none';
      }
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      packageDetails: packageInfo ? {
        name: packageInfo.name,
        price: packageInfo.price,
        subtitle: packageInfo.subtitle
      } : null
    };
    console.log('Quote form submitted:', submissionData);
    // Add your form submission logic here (email will include package details)
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[10000]"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[10001] flex items-center justify-center p-4 pointer-events-none min-h-screen">
        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto pointer-events-auto m-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 bg-[#8a21f0] hover:bg-[#7a1dd8] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 text-sm"
        >
          ✕
        </button>

        {/* Modal Content */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <div className="w-1 h-12 bg-[#8a21f0] mb-4"></div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
              {packageInfo ? `Get ${packageInfo.name}` : "Let's get started"}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {packageInfo ? (
                <>
                  <span className="font-bold text-[#8a21f0]">${packageInfo.price}</span> - {packageInfo.subtitle}
                </>
              ) : (
                "Providing you the perfect solution for your business needs. Let's work together and unlock doors to success."
              )}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a21f0] text-sm">👤</span>
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#8a21f0] text-gray-700 placeholder-gray-400 transition-colors"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a21f0] text-sm">✉️</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#8a21f0] text-gray-700 placeholder-gray-400 transition-colors"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a21f0] text-sm">📞</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No. *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#8a21f0] text-gray-700 placeholder-gray-400 transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <span className="absolute left-3 top-4 text-[#8a21f0] text-sm">✏️</span>
              <textarea
                name="message"
                placeholder="To help us understand better, enter a brief description about your project."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full pl-10 pr-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#8a21f0] text-gray-700 placeholder-gray-400 resize-none transition-colors"
              ></textarea>
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                required
                className="mt-0.5 w-4 h-4 text-[#8a21f0] border-gray-300 rounded focus:ring-[#8a21f0] cursor-pointer"
              />
              <span className="text-xs text-gray-700 leading-relaxed">
                I have read & fully understood and agreed to the{' '}
                <a href="/terms-conditions" className="text-[#8a21f0] font-bold hover:underline italic">
                  Terms of Use
                </a>{' '}
                and the{' '}
                <a href="/privacy-policy" className="text-[#8a21f0] font-bold hover:underline italic">
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#8a21f0] hover:bg-[#7a1dd8] text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-xs"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default QuoteModal;

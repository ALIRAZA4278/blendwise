'use client';
import React, { useState } from 'react';

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    // Add your form submission logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
        >
          ✕
        </button>

        {/* Modal Content */}
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-purple-600 to-cyan-400 mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Let's get started
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Providing you the perfect solution for your business needs. Let's work together and unlock doors to success.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-600">👤</span>
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 text-gray-700 placeholder-gray-400 transition-colors"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-600">✉️</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 text-gray-700 placeholder-gray-400 transition-colors"
                />
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-600">📞</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No. *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 text-gray-700 placeholder-gray-400 transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <span className="absolute left-4 top-6 text-purple-600">✏️</span>
              <textarea
                name="message"
                placeholder="To help us understand better, enter a brief description about your project."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 text-gray-700 placeholder-gray-400 resize-none transition-colors"
              ></textarea>
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                required
                className="mt-1 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
              />
              <span className="text-sm text-gray-700 leading-relaxed">
                I have read & fully understood and agreed to the{' '}
                <a href="/terms" className="text-purple-600 font-bold hover:underline italic">
                  Terms of Use
                </a>{' '}
                and the{' '}
                <a href="/privacy" className="text-purple-600 font-bold hover:underline italic">
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-bold py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-sm"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;

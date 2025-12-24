'use client';
import React, { useState } from 'react';

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What services does Blendwise INC offer?',
      answer: 'Blendwise INC offers a comprehensive range of design and development services including logo design, web design, website development, mobile app development, branding, digital marketing, and custom software solutions tailored to your business needs.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary depending on the scope and complexity. A simple logo design typically takes 3-5 business days, while a complete website can take 2-4 weeks. We provide detailed timelines during the initial consultation and keep you updated throughout the process.'
    },
    {
      question: 'Do you offer revisions?',
      answer: 'Yes! We offer unlimited revisions on all our packages to ensure you\'re completely satisfied with the final product. Your satisfaction is our top priority, and we work closely with you until we achieve the perfect result.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing packages to suit businesses of all sizes. Our packages start from $99 for basic logo design and go up to custom enterprise solutions. Contact us for a detailed quote tailored to your specific requirements.'
    },
    {
      question: 'Do I own the rights to the final design?',
      answer: 'Absolutely! Upon project completion and final payment, you receive 100% ownership rights to all deliverables. We provide all source files and you have complete freedom to use, modify, or redistribute your designs as needed.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, bank transfers, and cryptocurrency. For larger projects, we offer flexible payment plans with milestone-based billing to make our services more accessible.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer post-launch support and maintenance packages. Our team is always available to help with updates, troubleshooting, and any questions you may have. We believe in building long-term partnerships with our clients.'
    },
    {
      question: 'Can you work with my existing brand guidelines?',
      answer: 'Certainly! We can work within your existing brand guidelines or help you create new ones. Our team is experienced in maintaining brand consistency while bringing fresh, innovative ideas to your projects.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative w-full py-8 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block mb-2">
            <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              FAQs
            </span>
          </div>
          <h2 className="font-black text-[#0a4d7c] mb-2 leading-tight" style={{ fontSize: '36px' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: '16px' }}>
            Have questions? We've got answers. If you don't find what you're looking for, feel free to contact us directly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl border-2 border-gray-100 overflow-hidden hover:border-[#0a4d7c] transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-3 text-left"
              >
                <h3 className="font-black text-[#0a4d7c] pr-4 group-hover:text-orange-500 transition-colors duration-300" style={{ fontSize: '16px' }}>
                  {faq.question}
                </h3>
                <div
                  className={`shrink-0 w-5 h-5 rounded-full bg-[#0a4d7c] flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-3 pb-3">
                  <p className="text-gray-600 leading-relaxed" style={{ fontSize: '16px' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-6">
          <p className="text-gray-700 text-[10px] mb-3">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <a
              href="tel:6469939010"
              className="group flex items-center gap-1.5 bg-[#0a4d7c] hover:bg-[#083d63] text-white font-bold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="text-sm">📞</span>
              <span className="text-[10px]">(646) 993-9010</span>
            </a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-[10px] uppercase">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;

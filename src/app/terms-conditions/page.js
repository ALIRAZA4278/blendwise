'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const TermsConditionsPage = () => {
  return (
    <>
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0a2e] to-black"></div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(#8a21f0 1px, transparent 1px), linear-gradient(90deg, #8a21f0 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>

          {/* Floating Orbs */}
          <div className="absolute top-10 left-5 w-48 h-48 bg-[#35a5e8]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-5 w-64 h-64 bg-[#8a21f0]/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#35a5e8]/5 rounded-full blur-2xl animate-float"></div>

          {/* Diagonal Lines */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-1/4 -left-1/4 w-[150%] h-px bg-gradient-to-r from-transparent via-[#35a5e8] to-transparent rotate-12"></div>
            <div className="absolute top-2/3 -right-1/4 w-[150%] h-px bg-gradient-to-r from-transparent via-[#8a21f0] to-transparent -rotate-12"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-center" style={{ minHeight: '60vh', paddingTop: '100px' }}>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-lg mb-6">
                Terms & Conditions
              </h1>
              <p className="text-white text-sm max-w-3xl mx-auto leading-relaxed">
                Our Terms and Conditions outline the rules, rights, and responsibilities for using our services, ensuring a fair and transparent experience for all users.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <button className="bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] hover:from-[#7a1dd8] hover:to-[#2a94d8] text-white font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs">
                  Get Started
                </button>
                <button className="bg-white hover:bg-gray-100 text-[#8a21f0] font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs">
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revision Policy */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
              Revision Policy
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We provide revision depending upon the package you selected. Customers can ask us for unlimited free revisions and we will revise their design without any additional charges provided that the design and concept remains the same. Revision Turnaround Time would be 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="relative w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
              Refund Policy / Money Back Guarantee
            </h3>
            <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
              <p>
                In any event, any deposited funds for a project shall not be subject to refund after delivery if the initial design concepts are approved, or a change is requested unless Blendwise cancels or terminates your Contract for a reason other than your breach or non-performance.
              </p>

              <p className="font-semibold text-gray-900">
                All refund requests will be fulfilled as per the following arrangement:
              </p>

              <ul className="space-y-4 list-disc pl-6">
                <li>You make a request when the initial concepts for a logo are offered. However once you approve or request changes in the initial designs, the refund offer becomes void and refund request will not be entertained.</li>

                <li>If request for refund is made before the delivery of initial design concepts, then you would be eligible for Full Refund (less 10% service & processing fee).</li>

                <li>If request for refund is made within 48 hours, you would be eligible for 66% refund (less 10% service & processing fee).</li>

                <li>If request for refund is made between 48-120 hours of the initial design delivery, you would be eligible 33% refund (less 10% service & processing fee).</li>

                <li>No refund request will be entertained after 120 hours of your initial design delivery, however since we believe in 100% customer satisfaction you're encouraged to contact us in case of any concern.</li>

                <li>No refund request will be entertained if you have not taken any action on your order for 60 days after placing your order. However, if you want to reactivate your design order, you will be charged a certain fee depending on your project.</li>

                <li>All refund requests should be communicated to the support department. Blendwise, based on the violation of your user agreement reserves the right to approve/disapprove your request on an individual case to case basis.</li>

                <li>No refund requests will be entertained after the final files have been delivered.</li>

                <li>For Website packages no refund will be entertained once the website is deployed and live.</li>

                <li>For Blendwise / Custom packages, refund will be applicable the same as it is on the single packages. For example, if you order logo and web design service and approve the logo, you can claim refund for the website service at the time of initial design only.</li>

                <li>A refund request will need to have a valid reason which must be qualified against the design brief and customer feedback for revisions. Unless a concept has not been designed according to the brief, a refund will not be given however further revisions will be provided until complete satisfaction.</li>

                <li>Money back guarantee is based on that the order is placed in good faith. Where a customer has placed design orders with more than one design agency for the same job with the intention to claim refund, we do not consider it a good faith. In such a case we reserve the right to decline a refund request.</li>

                <li>All design jobs require customer feedback before finalizing the design therefore it is only fair that the customer gets involved and provides feedback in order to get the desired results.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Claim Refund */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
              How to Claim Your Refund
            </h3>
            <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900">
                To assure your refund request is approved, please make sure you meet the following requirements:
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <p className="font-semibold mb-4">1. Claim your refund specifying your concern by contacting us via any of the following three modes:</p>
                <ul className="space-y-2 pl-6">
                  <li>i. Toll free # <a href="tel:6469939010" className="text-[#8a21f0] hover:text-[#35a5e8] font-semibold">(646) 993-9010</a></li>
                  <li>ii. Live Chat</li>
                  <li>iii. Email: <a href="mailto:info@blendwise.com" className="text-[#8a21f0] hover:text-[#35a5e8] font-semibold">info@blendwise.com</a></li>
                </ul>
              </div>

              <p>
                2. We will try to resolve your concern by virtue of our revision policy immediately or else will email you a refund request approval from our refund department. After the refund, your design rights would be obtained by Blendwise and you would not be able to display any version of the design sent by company.
              </p>

              <p className="font-semibold">Let us also specify that:</p>
              <p>
                Since the design rights would now be transferred to the company, you agree that you will have no right (direct or indirect) to use any response or other content, work product or media, nor will you have any ownership interest in or to the same.
              </p>

              <p>
                If you have any questions or concerns about our Refund Policy, please contact us at <a href="mailto:info@blendwise.com" className="text-[#8a21f0] hover:text-[#35a5e8] font-semibold">info@blendwise.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Account */}
      <section className="relative w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
              My Account
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              The My Account area is a convenient way to communicate. It is your sole responsibility to check the account area to address any queries, concerns, or additional instructions required by the designer. Not checking or using the Account Area frequently shall not provide you adequate grounds for a refund. However, if you are uncertain how to use the area, you may contact the customer support team at any time for assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Assurance Policy */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
              Quality Assurance Policy
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              In order to provide you the desired satisfaction, our designers don't deviate from the specifications provided by you in the order form. The designs are created after a thorough research which ensures the design quality and uniqueness.
            </p>
          </div>
        </div>
      </section>

      {/* 100% Satisfaction Guarantee */}
      <section className="relative w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
              100% Satisfaction Guarantee
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We rework the ordered design and keep on revising it until you are 100% satisfied (depending upon your package).
            </p>
          </div>
        </div>
      </section>

      {/* Domain and Hosting */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
              Domain and Hosting
            </h3>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>Domain and hosting will be provided for free with website packages, where applicable.</p>

              <p>All the email accounts provided with website packages can be configured on third party email soft-wares such as outlook. Each email account will have 10MB of space.</p>

              <p>If you are not hosting your website with us, we will not provide email accounts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Policy */}
      <section className="relative w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
              Delivery Policy
            </h3>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                All design order files are delivered to My Account as per the date specified on the "Order Confirmation". An e-mail is also sent to inform the client about their design order delivery made to their specific account area. All policies pertaining to revision & refund are subject to date and time of design order delivered to client's account area.
              </p>

              <p>
                We deliver all our customized design orders via e-mail within 5 to 7 days of receiving your order. We offer a RUSH DELIVERY service through which you can have your first logo samples within 48 hours by paying just $100 extra! For further assistance, contact us at 24-Hour Customer Support Center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Record Maintenance */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
              Record Maintenance
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We keep a record of your finalized design once we provide you the final files. If you require the final files again in the future we can send them to you at your request.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Support */}
      <section className="relative w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
              Customer Support
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We offer 24-Hour Customer Support to address your queries and questions. You can contact us any time and we guarantee to respond immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Communication Policy */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
              Communication Policy
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              YOU agree that Blendwise is not liable for any correspondence from email address(es) other than the ones followed by our own domain i.e. "info@blendwise.com" or/and any toll free number that is not mentioned on our website. Blendwise should not be held responsible for any damage(s) caused by such correspondence. We only take responsibility of any communication through email address(es) under our own domain name or/and via toll free number i.e. already mentioned on Blendwise Website.
            </p>
          </div>
        </div>
      </section>

      {/* 100% Unique Design Guarantee */}
      <section className="relative w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
              100% Unique Design Guarantee
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              At Blendwise we guarantee that all of our customers' logos are made from scratch. This way you will have a logo that is tailor made for your requirements. We guarantee that your logo will be unique and impress your clientele.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-16 bg-gradient-to-r from-[#8a21f0] to-[#35a5e8]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
            Have Questions About Our Terms & Conditions?
          </h2>
          <p className="text-white text-sm mb-8 max-w-2xl mx-auto">
            Our team is here to help clarify any questions you may have about our policies and services
          </p>
          <button className="bg-white text-[#8a21f0] hover:bg-gray-100 font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs">
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </div>

    <style jsx>{`
      @keyframes grid-move {
        0% { transform: translateY(0); }
        100% { transform: translateY(50px); }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-20px) scale(1.1); }
      }

      @keyframes float-delayed {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(20px) scale(1.1); }
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }

      .animate-float-delayed {
        animation: float-delayed 8s ease-in-out infinite;
      }
    `}</style>
    </>
  );
};

export default TermsConditionsPage;

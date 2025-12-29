'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import QuoteModal from './QuoteModal';

const PackagesHero = () => {
  const [selectedCategory, setSelectedCategory] = useState('LOGO');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const allPackages = {
    LOGO: [
    {
      id: 1,
      name: 'Startup Logo Package',
      subtitle: 'Give your startup a kick-start with Visual Logos Startup',
      price: 99,
      originalPrice: 330,
      badge: 'BEST SELLER',
      badgeColor: 'bg-red-600',
      features: [
        '8 Custom Logo Design Concepts',
        'Unlimited Revisions',
        '5 Dedicated Creative Designers',
        'Files Format (PSD, PNG, GIF, JPG, PDF)',
        'Color & Font Options',
        'Icon Design',
        'Grayscale Format',
        '24 to 48 hours TAT',
        '– Value Added Services',
        'Dedicated Account Manager',
        '100% Ownership',
        '100% Unique Design Guarantee',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee*'
      ]
    },
    {
      id: 2,
      name: 'Professional Logo Package',
      subtitle: 'Get set for brand success with Visual Logo Professional',
      price: 149,
      originalPrice: 499,
      features: [
        '12 Logo Design Concepts',
        'Unlimited Revisions',
        'By 6 Top-Notch Designers',
        'All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
        'Complete Stationery Design (Business Card, Letterhead, Envelope)',
        'MS Word Letterhead Design',
        'Color & Font Options',
        'Icon Design',
        'Grayscale Format',
        '24 to 48 hours TAT',
        '– Value Added Services',
        'Dedicated Account Manager',
        '100% Ownership',
        '100% Unique Design Guarantee',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee*'
      ]
    },
    {
      id: 3,
      name: 'Infinity Logo Package',
      subtitle: 'Upscale your brand persona with the Visual Logo Infinity',
      price: 199,
      originalPrice: 669,
      badge: 'GREAT DEAL',
      badgeColor: 'bg-purple-700',
      features: [
        'Unlimited Logo Design Concepts',
        'Unlimited Revisions',
        'By 8 Award Winning Designers',
        'Complete Stationery Design',
        'Flyer/Brochure Design',
        'MS Word Letterhead Design',
        'Branded Email Signature Design',
        'All File Formats including (AI & EPS)',
        'Color & Font Options',
        'Icon Design',
        'Grayscale Format',
        '– Value Added Services',
        'Dedicated Account Manager',
        'Fastest Turnaround Time',
        '100% Ownership',
        '100% Unique Design Guarantee',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee*'
      ]
    },
    {
      id: 4,
      name: 'Social Logo Package',
      subtitle: 'Best for startup companies, crafted for great Social Media Presence',
      price: 299,
      originalPrice: 830,
      features: [
        'Unlimited Logo Design Concepts',
        'Unlimited Revisions',
        'By 8 Award Winning Designers',
        'Social Media Welcome Banner Design',
        'Social Media Cover Design',
        'Social Media Logo Sizes',
        'Complete Stationery Design',
        'MS Word Letterhead Design',
        'Branded Email Signature Design',
        'All File Formats including (AI & EPS)',
        'Color & Font Options',
        'Icon Design',
        'Grayscale Format',
        '– Value Added Services',
        'Dedicated Account Manager',
        'Fastest Turnaround Time',
        '100% Ownership',
        '100% Unique Design Guarantee',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee*'
      ]
    },
    {
      id: 5,
      name: 'Logo + Website Package',
      subtitle: 'Buckle up for your new business success with Visual Digital Startup',
      price: 799,
      originalPrice: 1330,
      features: [
        'Upto 5 Page Customized Website',
        'Complete Designing & Deployment',
        'Unlimited Logo Design Concepts',
        'Unlimited Revisions',
        'Complete Stationery Design',
        'Social Media Banner Design',
        'All File Formats including (AI & EPS)',
        'Free Favicon Design',
        '– Value Added Services',
        'Dedicated Account Manager',
        'Fastest Turnaround Time',
        '100% Ownership',
        '100% Unique Design Guarantee',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee*'
      ]
    },
    {
      id: 6,
      name: 'Logo + Ecommerce Web Package',
      subtitle: 'Suitable for potential ecommerce startups and brands, crafted for great Online Presence',
      price: 1499,
      originalPrice: 3330,
      features: [
        'E-Commerce Website Design',
        'CMS (Wordpress/Woocommerce)',
        'Product Detail Page Design',
        'Unlimited Products & Categories',
        'Full Shopping Cart Integration',
        'Payment Gateway Integration',
        'Product Rating & Reviews',
        'Unlimited Logo Design Concepts',
        'Unlimited Revisions',
        'Complete Stationery Design',
        'Social Media Banner Design',
        'All File Formats including (AI & EPS)',
        'Free Favicon Design',
        '– Value Added Services',
        'Dedicated Account Manager',
        'Fastest Turnaround Time',
        '100% Ownership',
        '100% Unique Design Guarantee',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee*'
      ]
    }
  ],
  WEBSITE: [
    {
      id: 7,
      name: 'Basic Website Package',
      subtitle: 'Perfect starter website for small businesses and startups',
      price: 250,
      originalPrice: 500,
      features: [
        'Complete Website Design',
        '48 Hours Changes Time',
        '4–5 Web Pages',
        'End-to-End Website Development',
        '3–4 Weeks TAT',
        'Unlimited Revisions',
        'Complete Website Deployment',
        'Content Writing',
        '1 Month Basic SEO',
        '– Value Added Services',
        'Dedicated Account Manager'
      ]
    },
    {
      id: 8,
      name: 'Standard Website Package',
      subtitle: 'Custom website with UI/UX design and SEO optimization',
      price: 799,
      originalPrice: 1599,
      features: [
        'Custom Website Design (UI/UX Included)',
        '7–10 Web Pages',
        'Mobile Responsive + Speed Optimization',
        'Basic On-Page SEO',
        'Contact Forms + Lead Capture Setup',
        '2 Rounds of Revisions',
        'Blog Setup',
        'Social Media Integration',
        '2–3 Weeks TAT',
        '– Value Added Services',
        'Dedicated Account Manager'
      ]
    },
    {
      id: 9,
      name: 'Business Website Package',
      subtitle: 'Premium website with advanced features and integrations',
      price: 1499,
      originalPrice: 2999,
      badge: 'GREAT DEAL',
      badgeColor: 'bg-purple-700',
      features: [
        'Premium Custom Website Design',
        '10–15 Web Pages',
        'Advanced On-Page SEO',
        'Interactive Elements (Sliders, Animations)',
        'CRM / Email Integration',
        'Blog + Resource Center Setup',
        'Basic Security Setup (SSL Guidance + Firewall)',
        'Monthly Backup Setup',
        '1 Month Technical Support',
        'Priority Revisions',
        '2–3 Weeks TAT',
        '– Value Added Services',
        'Dedicated Account Manager'
      ]
    },
    {
      id: 10,
      name: 'E-Commerce Website Package',
      subtitle: 'Complete online store with payment gateway and inventory management',
      price: 2499,
      originalPrice: 4999,
      features: [
        'Complete E-Commerce Store Setup',
        '20–40 Product Listings',
        'Product Categories + Filters',
        'Payment Gateway Integration',
        'Cart + Checkout Optimization',
        'Inventory & Order Management Setup',
        'Advanced Speed Optimization',
        'Advanced On-Page SEO',
        '1 Month Store Management Support',
        'Custom Landing Page Included',
        '3–4 Weeks TAT',
        '– Value Added Services',
        'Dedicated Account Manager'
      ]
    },
    {
      id: 11,
      name: 'Advanced Corporate Package',
      subtitle: 'High-end corporate website with AI chatbot and premium support',
      price: 3499,
      originalPrice: 6999,
      features: [
        'High-End Corporate Website (15–25 Pages)',
        'Custom Brand-Aligned UI/UX',
        'SEO-Optimized Content (Up to 10 Pages)',
        'Multi-Form Integration (Leads, Career, Support)',
        'Team + Portfolio Modules',
        'Security + Speed Optimization',
        'API Integrations (If Required)',
        'AI Chatbot Setup (Basic)',
        '1 Month SEO + Tech Support',
        'Priority Project Handling',
        '– Value Added Services',
        'Dedicated Account Manager'
      ]
    },
    {
      id: 12,
      name: 'Elite Enterprise Website Package',
      subtitle: 'Full premium enterprise website with custom integrations and automation',
      price: 4999,
      originalPrice: 9999,
      features: [
        'Full Premium Enterprise-Level Website',
        'Unlimited Pages',
        'Complete Brand Style + UI/UX System',
        'Custom Animations + Motion Graphics',
        'Advanced SEO (Technical + On-Page)',
        'CRM, ERP, or Custom Integration Support',
        'Membership / Portal / Dashboard (Basic)',
        'Custom Landing Pages for Campaigns',
        'AI Chatbot + Automation Setup',
        'Monthly Performance Reports (1 Month)',
        'Fast-Track Delivery Option',
        '– Value Added Services',
        'Dedicated Project Manager'
      ]
    }
  ],
  'SOCIAL MEDIA': [
    {
      id: 13,
      name: 'Starter SMM Package',
      subtitle: 'Perfect starter package for businesses new to social media marketing',
      price: 249,
      originalPrice: 499,
      badge: 'BEST SELLER',
      badgeColor: 'bg-red-600',
      features: [
        'Facebook Page Management',
        'Instagram Profile Management',
        'Reply to General Queries',
        '08 Static Posts (2 Per Week)',
        'Captions & Copy for All Posts',
        'Basic Community Engagement',
        'Monthly Posting Calendar',
        '– Value Added Services',
        'Dedicated SMM Account Manager'
      ]
    },
    {
      id: 14,
      name: 'Standard SMM Package',
      subtitle: 'Enhanced social media presence with Meta Ads management',
      price: 499,
      originalPrice: 999,
      features: [
        'Facebook Page Management',
        'Instagram Profile Management',
        'Reply to General Queries & Basic Community Engagement',
        '12 Static Posts / Ad Creatives (3 Per Week)',
        'Captions & Copy for All Posts',
        'Story Creatives (4 Per Month)',
        'Monthly Performance Report',
        'Competitor Insights',
        'Sales/Leads Campaign Ads Strategy & Creation',
        'Meta Ads Management',
        'Execution by Certified Meta Ads Experts',
        '– Value Added Services',
        'Dedicated SMM Account Manager'
      ]
    },
    {
      id: 15,
      name: 'Business SMM Package',
      subtitle: 'Comprehensive social media strategy with advanced ad campaigns',
      price: 999,
      originalPrice: 1999,
      badge: 'GREAT DEAL',
      badgeColor: 'bg-purple-700',
      features: [
        'Facebook Page Management',
        'Instagram Profile Management',
        'Community Engagement (Comments + DMs)',
        '16 Static Posts (4 Per Week)',
        '8 Story Posts (Per Month)',
        'Captions & Copy for All Posts',
        'Branding-Based Content Themes',
        'Monthly Content Calendar',
        'Monthly Performance Report',
        'Competitor Insights',
        'Sales/Leads + Engagement Campaign Strategy',
        'Meta Ads Management',
        'A/B Testing for Ad Creatives',
        'Execution by Certified Meta Ads Experts',
        '– Value Added Services',
        'Dedicated SMM Account Manager'
      ]
    },
    {
      id: 16,
      name: 'Growth SMM Package',
      subtitle: 'Accelerate your social media growth with reels and motion graphics',
      price: 1999,
      originalPrice: 3999,
      features: [
        'Facebook Page Management',
        'Instagram Profile Management',
        'Full Community Management (DMs + Comments + Responses)',
        '20 Static Posts (5 Per Week)',
        '12 Stories Per Month',
        '4 Reels (Basic Editing) (Content Provided by the client)',
        '8 Motion Graphics Posts',
        'Captions & Copywriting for All Posts',
        'Sales/Leads, Engagement & Awarness Campaign Strategy',
        'Meta Ads Management',
        'A/B Testing for Ads & Audiences',
        'Monthly Performance Report + Insights',
        'Competitor Strategy Breakdown',
        '– Value Added Services',
        'Dedicated Senior SMM Manager'
      ]
    },
    {
      id: 17,
      name: 'Premium SMM Package',
      subtitle: 'Premium social media management with advanced advertising funnels',
      price: 3499,
      originalPrice: 6999,
      features: [
        'Facebook Page Management',
        'Instagram Profile Management',
        'Full Community Management + DMs Handling',
        '24 Static Posts (6 Per Week)',
        '16 Stories Creatives Per Month',
        '8 Reels (Advanced Editing), (Content Provided by the client)',
        '12 Motion Graphics Posts',
        'Persuasive Copywriting for Social Content',
        'Monthly Performance Report + Growth Strategy Plan',
        'Sales/Lead Gen + Retargeting + Awareness Funnels',
        'Meta Ads Management (Multi-Layer Strategy)',
        'Advanced A/B Testing for Creatives & Audiences',
        'Execution by Certified Meta Ads Experts',
        'Competitor Benchmarking',
        '– Value Added Services',
        'Dedicated Senior SMM Manager'
      ]
    },
    {
      id: 18,
      name: 'Elite Enterprise SMM Package',
      subtitle: 'Ultimate enterprise-level social media dominance with priority support',
      price: 4999,
      originalPrice: 9999,
      features: [
        'Facebook Page Management',
        'Instagram Profile Management',
        'Complete Community Management (DMs + Comments + Queries)',
        '30 Static Posts (Daily Posting)',
        '30 Stories Per Month',
        '10 Reels Per Month (Pro Editing + Motion Graphics)',
        '24 Motion Graphics Posts',
        'High-Impact Copywriting for Campaign Messaging',
        'Full Funnel Ads Strategy (Awareness → Retargeting → Sales)',
        'Meta Ads Management (High-Budget Scaling)',
        'Aggressive A/B and Split Testing (Creatives + Placements)',
        'Monthly Performance Report + Deep Insights',
        'Brand Positioning Strategy + Competitor Forecasting',
        'Execution by Certified Meta Ads Experts',
        '– Value Added Services',
        'Dedicated Senior SMM Manager + Priority Support'
      ]
    }
  ],
  SEO: [
    {
      id: 19,
      name: 'Basic SEO Package',
      subtitle: 'Perfect starter package for improving your search engine visibility',
      price: 250,
      originalPrice: 499,
      badge: 'BEST SELLER',
      badgeColor: 'bg-red-600',
      features: [
        '15-20 Keywords',
        '2 Articles (200 words each)',
        '2 Blogs (250 words each)',
        '10 Submissions',
        '10 Business Profiles',
        '05 Social Posting',
        'Citation Building',
        'Meta Tags Creation',
        'Meta Title Optimization',
        'Web Content Optimization',
        'Robots.txt Creation/Analysis',
        'On Page Optimization',
        'HTML Code Cleanup & Optimization',
        'Keywords Optimization',
        'Anchor Text Optimization',
        'Google Analytics Optimization',
        'Next Month\'s Action Plan',
        'Monthly Analytical Report',
        '– Value Added Services',
        'Dedicated Project Manager',
        '100% Satisfaction Guaranteed'
      ]
    },
    {
      id: 20,
      name: 'Standard SEO Package',
      subtitle: 'Enhanced SEO strategy for growing businesses',
      price: 399,
      originalPrice: 799,
      features: [
        '25-30 Keywords',
        '3 Articles (200 words each) | Guest Blogs',
        '3 Blogs (250 words each)',
        '20 Submissions',
        '15 Classifieds',
        '10 Business Profiles',
        '05 Social Posting',
        'Meta Tags Creation',
        'Web Content Optimization',
        'Meta Title Optimization',
        'Robots.txt Creation/Analysis',
        'On Page Optimization',
        'HTML Code Cleanup & Optimization',
        'Google & Bing Webmaster Tools Setup',
        'Keywords Optimization',
        'Anchor Text Optimization',
        'Google Analytics Optimization',
        'Monthly Analytical Report',
        'Next Month\'s Action Plan',
        '– Value Added Services',
        'Dedicated Project Manager',
        '100% Satisfaction Guaranteed'
      ]
    },
    {
      id: 21,
      name: 'Business SEO Package',
      subtitle: 'Comprehensive SEO solution for established businesses',
      price: 599,
      originalPrice: 1199,
      badge: 'GREAT DEAL',
      badgeColor: 'bg-purple-700',
      features: [
        '45-50 Keywords',
        '4 Articles (200 words each) | Guest Blogs',
        '4 Blogs (250 words each)',
        '25 Submissions',
        '20 Classifieds',
        '15 Business Profiles',
        '10 Social Posting',
        'Meta Tags Creation',
        'Web Content Optimization',
        'Meta Title Optimization',
        'Robots.txt Creation/Analysis',
        'On Page Optimization',
        'HTML Code Cleanup & Optimization',
        'Google & Bing Webmaster Tools Setup',
        'Keywords Optimization',
        'Anchor Text Optimization',
        'Google Analytics Optimization',
        'Monthly Analytical Report',
        'Next Month\'s Action Plan',
        '– Value Added Services',
        'Dedicated Project Manager',
        '100% Satisfaction Guaranteed'
      ]
    },
    {
      id: 22,
      name: 'Advanced SEO Package',
      subtitle: 'Advanced optimization with competitive edge strategies',
      price: 1299,
      originalPrice: 2499,
      features: [
        '70-80 Keywords',
        '6 Articles (300 words each) | Guest Blogs',
        '6 Blogs (350 words each)',
        '40 Submissions',
        '30 Classifieds',
        '20 Business Profiles',
        '15 Social Posting',
        'Meta Tags Creation',
        'Web Content Optimization',
        'Meta Title Optimization',
        'Robots.txt Creation/Analysis',
        'Complete On Page Optimization (All Pages)',
        'HTML Code Cleanup & Technical Fixes',
        'Google & Bing Webmaster Tools Setup',
        'Schema Markup Setup',
        'Keywords Optimization',
        'Anchor Text Optimization',
        'Google Analytics Optimization',
        'Monthly Analytical Report',
        'Competitor Performance Insights',
        'Next Month\'s Action Plan',
        '– Value Added Services',
        'Dedicated Project Manager',
        '100% Satisfaction Guaranteed'
      ]
    },
    {
      id: 23,
      name: 'Premium SEO Package',
      subtitle: 'Premium SEO package with full technical optimization',
      price: 2499,
      originalPrice: 4999,
      features: [
        '120-150 Keywords',
        '10 Articles (400 words each) | Guest Blogs',
        '8 Blogs (400 words each)',
        '60 Submissions',
        '40 Classifieds',
        '30 Business Profiles',
        '20 Social Posting',
        'Complete Meta Tags Setup (New + Optimization)',
        'Web Content Optimization (Full Site)',
        'Meta Title Optimization',
        'Robots.txt Creation/Analysis',
        'Complete On Page Optimization',
        'Technical SEO Fixes + Speed Optimization',
        'Schema Markup (Advanced)',
        'Google & Bing Webmaster Tools Setup',
        'Keywords Optimization',
        'Anchor Text Optimization',
        'Google Analytics Setup + Goals Tracking',
        'Monthly Analytical Report',
        'Competitor Analysis + Strategy',
        'Next Month\'s Action Plan',
        '– Value Added Services',
        'Dedicated Project Manager',
        '100% Satisfaction Guaranteed'
      ]
    },
    {
      id: 24,
      name: 'Elite Enterprise SEO Package',
      subtitle: 'Ultimate enterprise-level SEO with priority support',
      price: 4999,
      originalPrice: 9999,
      features: [
        '200+ Keywords',
        '15 Articles (500 words each) | Premium Guest Posts',
        '12 Blogs (500 words each)',
        '100 Submissions',
        '60 Classifieds',
        '50 Business Profiles',
        '30 Social Posting',
        'Advanced Meta Tags Creation & Optimization',
        'Full Website Content Optimization',
        'Meta Title Rewriting for All Pages',
        'Robots.txt Creation/Analysis + Sitemap Optimization',
        'Full On Page Optimization (Enterprise Level)',
        'Technical SEO (Core Web Vitals + Errors Fixing)',
        'Advanced Schema Markup + Structured Data',
        'Google & Bing Webmaster Tools Setup',
        'Keywords Optimization',
        'Anchor Text Optimization',
        'Google Analytics 4 Setup + Custom Dashboard',
        'Monthly Analytical Report',
        'Competitor Deep Analysis + Growth Plan',
        'Next Month\'s Action Plan (Enterprise Strategy)',
        '– Value Added Services',
        'Dedicated Senior Project Manager',
        'Priority Support',
        '100% Satisfaction Guaranteed'
      ]
    }
  ],
  SEM: [
    {
      id: 25,
      name: 'Starter SEM Package',
      subtitle: 'Perfect entry-level package for Google Search advertising',
      price: 499,
      originalPrice: 999,
      badge: 'BEST SELLER',
      badgeColor: 'bg-red-600',
      features: [
        'Google Search Campaign Setup',
        'Basic Keyword Research (Up to 30 Keywords)',
        '1 Search Campaign',
        '2 Ad Groups',
        '4 Text Ads',
        'Basic Conversion Tracking Setup',
        'Negative Keyword Setup',
        'Monthly Optimization',
        'Monthly Performance Report',
        '– Value Added Services',
        'Dedicated SEM Account Manager'
      ]
    },
    {
      id: 26,
      name: 'Standard SEM Package',
      subtitle: 'Enhanced Google Ads strategy with A/B testing',
      price: 999,
      originalPrice: 1999,
      features: [
        'Google Search Campaign Setup',
        'Keyword Research (Up to 60 Keywords)',
        '2 Search Campaigns',
        '4 Ad Groups',
        '8 Text Ads',
        'Conversion Tracking & Event Setup',
        'Ad Extensions Setup (Callouts, Sitelinks, Snippets)',
        'A/B Testing of Ad Copies',
        'Weekly Optimization',
        'Monthly Performance Report',
        '– Value Added Services',
        'Dedicated SEM Account Manager'
      ]
    },
    {
      id: 27,
      name: 'Business SEM Package',
      subtitle: 'Comprehensive Search + Display campaigns with optimization',
      price: 1999,
      originalPrice: 3999,
      badge: 'GREAT DEAL',
      badgeColor: 'bg-purple-700',
      features: [
        'Google Search + Display Campaigns',
        'Keyword Research (Up to 120 Keywords)',
        '3 Campaigns (Search + Display)',
        '6 Ad Groups',
        '12 Text Ads',
        'Display Banner Ads (Basic)',
        'Conversion Tracking + Tag Manager Setup',
        'A/B Testing for Ads & Landing Pages',
        'Weekly Optimization',
        'Competitor Keyword Insights',
        'Monthly Report & Strategy Discussion',
        '– Value Added Services',
        'Dedicated SEM Account Manager'
      ]
    },
    {
      id: 28,
      name: 'Growth SEM Package',
      subtitle: 'Advanced multi-platform advertising with YouTube and retargeting',
      price: 3499,
      originalPrice: 6999,
      features: [
        'Google Search + Display + YouTube Ads',
        'Keyword Research (Up to 250 Keywords)',
        '5 Campaigns',
        '10 Ad Groups',
        '16 Text Ads',
        'Display Banners (Advanced)',
        'YouTube Video Ads Setup (Client Provided Video)',
        'Retargeting Campaigns',
        'Multi-Level Conversion Tracking Setup',
        'Advanced A/B Testing',
        'Weekly Optimization + Bid Strategy Management',
        'Competitor Benchmarking',
        'Monthly Deep Performance Insights',
        '– Value Added Services',
        'Dedicated Senior SEM Manager'
      ]
    },
    {
      id: 29,
      name: 'Premium SEM Package',
      subtitle: 'Full-spectrum Google Ads with Shopping and Performance Max',
      price: 5999,
      originalPrice: 11999,
      features: [
        'Google Search + Display + YouTube + Shopping Ads',
        'Keyword Research (Unlimited Keywords)',
        '8+ Campaigns',
        '16 Ad Groups',
        '20+ Text Ads',
        'Advanced Display Banners',
        'YouTube Video Ads (Client-Provided Videos)',
        'Retargeting + Lookalike Audiences',
        'Smart Campaigns + Performance Max Integration',
        'Landing Page Optimization Recommendations',
        'Multi-Layer A/B Testing',
        'Weekly Optimization + Daily Monitoring',
        'Competitor Strategy Breakdown',
        'Monthly Strategy Call',
        '– Value Added Services',
        'Dedicated Senior SEM Manager'
      ]
    },
    {
      id: 30,
      name: 'Elite Enterprise SEM Package',
      subtitle: 'Full-scale Google Ads management for growing brands',
      price: 9999,
      originalPrice: 19999,
      features: [
        'Google Search + Display + YouTube + Shopping + Performance Max',
        'Unlimited Keywords + Unlimited Campaigns',
        'Full Funnel Campaign Structuring',
        'Advanced Retargeting + Dynamic Remarketing',
        'YouTube Ads Creation Support (Script + Strategy)',
        'Shopping Feed Optimization',
        'Custom Landing Page Conversion Optimization Guide',
        'AI-Based Bidding Strategy + Scaling',
        'Advanced A/B Testing (Creatives + Landing Pages + Bids)',
        'Daily Monitoring & Optimization',
        'Competitor Intelligence & Market Positioning',
        'Monthly Deep-Dive Insights Report',
        '– Value Added Services',
        'Dedicated Senior SEM Strategist + Priority Support'
      ]
    }
  ],
  'PRINT DESIGN': [
    {
      id: 31,
      name: 'Basic Print Package',
      subtitle: 'Perfect for single print design needs with quick turnaround',
      price: 99,
      originalPrice: 199,
      badge: 'BEST SELLER',
      badgeColor: 'bg-red-600',
      features: [
        '1 Print Design Item (Flyer / Business Card / Postcard / Poster)',
        '2 Initial Design Concepts',
        '1 Revision',
        'Print-Ready Files (PDF, JPG, PNG)',
        'Standard Layout & Typography',
        '48–72 Hours Delivery',
        '100% Ownership Rights',
        '– Value Added Services',
        'Dedicated Designer'
      ]
    },
    {
      id: 32,
      name: 'Starter Print Package',
      subtitle: 'Great for small businesses needing multiple print materials',
      price: 199,
      originalPrice: 399,
      features: [
        '2 Print Design Items (Flyer + Business Card OR any combo)',
        '3 Initial Design Concepts',
        '2 Revisions',
        'Professional Layout & Color Setup',
        'Print-Ready Files with Bleed',
        'Basic Photo Retouching (if needed)',
        'Brand Color Integration',
        '3–4 Days Delivery',
        '– Value Added Services',
        'Dedicated Account Manager'
      ]
    },
    {
      id: 33,
      name: 'Professional Print Package',
      subtitle: 'Comprehensive print design for professional marketing materials',
      price: 349,
      originalPrice: 699,
      badge: 'GREAT DEAL',
      badgeColor: 'bg-purple-700',
      features: [
        '4 Print Design Items (Flyers, Posters, Rack Cards, Menu, etc.)',
        '3–4 Design Concepts per item',
        '3 Revisions',
        'High-Quality CMYK Print-Ready Files',
        'Custom Typography Selection',
        'Basic Packaging/Label Design (1 item optional)',
        '4–6 Days Delivery',
        '– Value Added Services',
        'Priority Support'
      ]
    },
    {
      id: 34,
      name: 'Business Print Package',
      subtitle: 'Complete business print solution with brochures and packaging',
      price: 499,
      originalPrice: 999,
      features: [
        '6 Print Design Items',
        '4 Initial Concepts per item',
        '4 Revisions',
        'Brochure/Trifold Included (1)',
        'Packaging/Label Design (2 items)',
        'Consistent Brand-Aligned Design',
        'CMYK + RGB Final Files',
        'Source Files Included (AI/EPS)',
        '5–7 Days Delivery',
        '– Value Added Services',
        'Dedicated Project Manager'
      ]
    },
    {
      id: 35,
      name: 'Corporate Print Package',
      subtitle: 'Extensive print collateral with catalogs and custom design elements',
      price: 699,
      originalPrice: 1399,
      features: [
        '10 Print Design Items',
        '5 Concepts per item',
        '5 Revisions',
        'Product Catalog / Company Profile (Up to 10 Pages)',
        'Advanced Packaging or Label Design (up to 4 items)',
        'Custom Icons/Illustrations (Basic)',
        'Full Print-Ready File Pack',
        'Branding Consistency Across All Items',
        'Priority Turnaround',
        '– Value Added Services',
        'Dedicated Account Manager'
      ]
    },
    {
      id: 36,
      name: 'Premium Print Package',
      subtitle: 'Ultimate print design package with unlimited revisions and concepts',
      price: 999,
      originalPrice: 1999,
      features: [
        '15 Print Design Items',
        'Unlimited Concepts',
        'Unlimited Revisions',
        'Product Catalog (Up to 20 Pages)',
        'Advanced Packaging / Label Design (Unlimited Items)',
        'Custom Illustrations + Iconography',
        'Full Brand Alignment (Fonts, Colors, Style)',
        'Print-Ready CMYK Files + Editable Source Pack',
        'Fast-Track Priority Delivery',
        '– Value Added Services',
        'Dedicated Senior Designer + Project Manager'
      ]
    }
  ],
  'E-COMMERCE': [],
  STATIONARY: []
};

  const packages = allPackages[selectedCategory] || allPackages.LOGO;

  return (
    <>
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] overflow-hidden">
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

        {/* Content Container */}
        <div className="relative z-10 w-full h-full">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center" style={{ minHeight: '80vh', paddingTop: '100px' }}>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left Side - Content */}
              <div className="space-y-6 max-w-xl animate-fadeInLeft">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-lg animate-fadeInUp animation-delay-200">
                  Our Affordable
                  <br />
                  <span className="text-[#35a5e8]">Packages</span>
                </h1>
                <p className="text-white text-sm leading-relaxed">
                  Choose from our carefully crafted packages designed to meet your business needs. From startups to enterprises, we have the perfect solution for everyone at competitive prices.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                  <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] hover:from-[#7a1dd8] hover:to-[#2a94d8] text-white font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs">
                    Get Started
                  </button>
                  <a href="tel:6469939010" className="flex items-center gap-2 text-white font-bold text-sm hover:text-[#35a5e8] transition-colors">
                    <span>📞</span>
                    <span>(646) 993-9010</span>
                  </a>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative flex items-center justify-end animate-fadeInRight animation-delay-400">
                <div className="relative w-full max-w-[700px] h-[400px] md:h-[500px] lg:h-[600px] animate-float">
                  <Image
                    src="/packages-main.png"
                    alt="Digital Experiences"
                    fill
                    priority
                    style={{ objectFit: 'contain' }}
                    quality={100}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="relative w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[10px] font-black text-[#8a21f0] tracking-widest uppercase mb-4">OUR PRICING</p>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Optimize Your Business With Our
              <br />
              <span className="bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] bg-clip-text text-transparent">Tailored Packages</span>
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6 text-sm">
              <span className="font-bold">At Blendwise INC.,</span> We serve the industry with persuasive and conceptual designs
              <br />
              that rock the market.
              <br />
              Creating an impact is what we do best and what we like to provide to every client with
              <br />
              our pocket-friendly packages.
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <button
              onClick={() => setSelectedCategory('LOGO')}
              className={`${selectedCategory === 'LOGO' ? 'bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] text-white' : 'bg-white text-[#8a21f0] border-2 border-[#8a21f0]'} hover:from-[#7a1dd8] hover:to-[#2a94d8] hover:bg-[#8a21f0]/5 font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-xs uppercase`}>
              LOGO ↗
            </button>
            <button
              onClick={() => setSelectedCategory('WEBSITE')}
              className={`${selectedCategory === 'WEBSITE' ? 'bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] text-white' : 'bg-white text-[#8a21f0] border-2 border-[#8a21f0]'} hover:bg-[#8a21f0]/5 font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-xs uppercase`}>
              WEBSITE ↗
            </button>
            <button
              onClick={() => setSelectedCategory('SOCIAL MEDIA')}
              className={`${selectedCategory === 'SOCIAL MEDIA' ? 'bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] text-white' : 'bg-white text-[#8a21f0] border-2 border-[#8a21f0]'} hover:bg-[#8a21f0]/5 font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-xs uppercase`}>
              SOCIAL MEDIA ↗
            </button>
            <button
              onClick={() => setSelectedCategory('SEO')}
              className={`${selectedCategory === 'SEO' ? 'bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] text-white' : 'bg-white text-[#8a21f0] border-2 border-[#8a21f0]'} hover:bg-[#8a21f0]/5 font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-xs uppercase`}>
              SEO (SEARCH ENGINE OPTIMIZATION) ↗
            </button>
            <button
              onClick={() => setSelectedCategory('SEM')}
              className={`${selectedCategory === 'SEM' ? 'bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] text-white' : 'bg-white text-[#8a21f0] border-2 border-[#8a21f0]'} hover:bg-[#8a21f0]/5 font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-xs uppercase`}>
              SEM (SEARCH ENGINE MARKETING) ↗
            </button>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <button
              onClick={() => setSelectedCategory('PRINT DESIGN')}
              className={`${selectedCategory === 'PRINT DESIGN' ? 'bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] text-white' : 'bg-white text-[#8a21f0] border-2 border-[#8a21f0]'} hover:bg-[#8a21f0]/5 font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-xs uppercase`}>
              PRINT DESIGN ↗
            </button>
            <button
              onClick={() => setSelectedCategory('E-COMMERCE')}
              className={`${selectedCategory === 'E-COMMERCE' ? 'bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] text-white' : 'bg-white text-[#8a21f0] border-2 border-[#8a21f0]'} hover:bg-[#8a21f0]/5 font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-xs uppercase`}>
              E-COMMERCE ↗
            </button>
            <button
              onClick={() => setSelectedCategory('STATIONARY')}
              className={`${selectedCategory === 'STATIONARY' ? 'bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] text-white' : 'bg-white text-[#8a21f0] border-2 border-[#8a21f0]'} hover:bg-[#8a21f0]/5 font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-xs uppercase`}>
              STATIONARY ↗
            </button>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 overflow-hidden flex flex-col h-full animate-fadeInUp hover-lift animation-delay-${(index % 3 + 1) * 100}`}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className={`absolute top-0 right-0 ${pkg.badgeColor} text-white px-6 py-2 font-bold text-xs uppercase transform rotate-45 translate-x-8 translate-y-4 w-40 text-center`}>
                    {pkg.badge}
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Package Name */}
                  <h3 className="text-lg font-black text-[#8a21f0] mb-2">
                    {pkg.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-gray-600 text-[10px] mb-6">
                    {pkg.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-black bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] bg-clip-text text-transparent">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-500 line-through ml-3 text-sm">
                      ${pkg.originalPrice}
                    </span>
                    <span className="block text-gray-500 text-[10px] mt-1">Only</span>
                  </div>

                  {/* Features List */}
                  <div className="mb-6 flex-1 max-h-64 overflow-y-auto border-t border-b border-gray-200 py-4">
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-[10px] text-gray-700">
                          <span className="text-[#35a5e8] mt-1">●</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div className="flex justify-between items-center mb-6 text-[10px] mt-auto">
                    <div>
                      <p className="text-gray-600 font-semibold">Speak with us</p>
                      <a href="tel:6469939010" className="text-gray-900 font-bold hover:text-[#8a21f0] transition-colors">(646) 993-9010</a>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold">Want to discuss?</p>
                      <button onClick={() => handlePackageSelect(pkg)} className="text-[#8a21f0] font-bold hover:underline">
                        Live Chat Now
                      </button>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button onClick={() => handlePackageSelect(pkg)} className="w-full bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] hover:from-[#7a1dd8] hover:to-[#2a94d8] text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-xs">
                    START PROJECT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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

    {/* Quote Modal */}
    <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} packageInfo={selectedPackage} />
    </>
  );
};

export default PackagesHero;

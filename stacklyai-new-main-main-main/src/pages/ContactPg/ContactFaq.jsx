import React, { useState } from "react";
import Bg from "../../assets/contact/sec2bg.png";

export default function PricingFaq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqCategory, setFaqCategory] = useState(0); // 0 = Get to Know, 1 = Pricing, 2 = API
  const [visibleCount, setVisibleCount] = useState(4); // Number of FAQs to show initially

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    // Group 1: Get to Know Stackly (6 items)
    {
      question: "What is Stackly AI?",
      answer: "Stackly AI is an intelligent platform designed to streamline your tasks using automation and smart tools. It helps enhance productivity by offering tailored solutions based on your needs.",
    },
    {
      question: "How does Stackly AI work?",
      answer: "Stackly AI works by analyzing your input and tasks, then offering automated suggestions, integrations, and tools to make your workflow more efficient and seamless.",
    },
    {
      question: "Is Stackly AI free to use?",
      answer: "Stackly AI offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced capabilities and integrations.",
    },
    {
      question: "How do I contact Stackly AI?",
      answer: "You can reach out to Stackly AI by sending an email to support@stackly.ai or by filling out the contact form on our website's Contact Us page. We're here to help with any questions, feedback, or support you may need.",
    },
    {
      question: "What makes Stackly AI different?",
      answer: "Stackly AI stands out with its intuitive interface, powerful automation capabilities, and customizable workflows that adapt to your specific needs.",
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, Stackly AI is available on both iOS and Android platforms, allowing you to manage your tasks on the go.",
    },

    // Group 2: Plans & Pricing (6 items)
    {
      question: "How do I get started with StacklyAI APIs?",
      answer: "Getting started is easy! Simply sign up for an account, choose your plan, and you'll gain immediate access to our API documentation and endpoints.",
    },
    {
      question: "What authentication method does StacklyAI use?",
      answer: "We use OAuth 2.0 for secure authentication, along with API keys for simpler integrations.",
    },
    {
      question: "Are there any rate limits on API requests?",
      answer: "Yes, rate limits apply based on your subscription plan. Free tier has lower limits while premium plans offer higher thresholds.",
    },
    {
      question: "What image formats do StacklyAI APIs support?",
      answer: "Our APIs support common formats like JPG, PNG, and GIF, with additional formats available in enterprise plans.",
    },
    {
      question: "Can I upgrade my plan at any time?",
      answer: "Absolutely! You can upgrade your plan anytime from your account dashboard, with prorated charges for the remaining billing period.",
    },
    {
      question: "Is there a free trial for premium features?",
      answer: "Yes, we offer a 14-day free trial for all premium features so you can test them before committing.",
    },

    // Group 3: API Integration (6 items)
    {
      question: "What do I get with a STACKLY AI membership?",
      answer: "Membership includes access to all core features, priority support, and regular updates with new capabilities.",
    },
    {
      question: "Is the API available for all users?",
      answer: "API access is available to all users, with different access levels based on your subscription tier.",
    },
    {
      question: "What can I do with the STACKLY AI API?",
      answer: "Our API allows you to integrate AI capabilities into your own applications, automate workflows, and build custom solutions.",
    },
    {
      question: "Can I cancel or change my membership anytime?",
      answer: "Yes, you can modify or cancel your membership at any time through your account settings.",
    },
    {
      question: "How to handle other image formats e.g. HEIC, HEIF etc?",
      answer: "For unsupported image formats, you can contact support. We provide guidance or tools to convert and use those formats.",
    },
    {
      question: "What is the expiration period for my credit pack?",
      answer: "Credit packs typically have an expiration of 12 months from the purchase date. Check your account for details.",
    },
  ];

  const categoryRanges = [
    { start: 0, end: 6 },  // Get to Know Stackly (6 items)
    { start: 6, end: 12 }, // Plans & Pricing (6 items)
    { start: 12, end: 18 } // API Integration (6 items)
  ];

  const getFaqSlice = () => {
    const { start } = categoryRanges[faqCategory];
    return faqs.slice(start, start + visibleCount);
  };

  const handleViewAll = () => {
    const totalInCategory = categoryRanges[faqCategory].end - categoryRanges[faqCategory].start;
    setVisibleCount(prev => prev >= totalInCategory ? 4 : totalInCategory);
  };

  const currentCategoryCount = categoryRanges[faqCategory].end - categoryRanges[faqCategory].start;

  return (
    <section className="w-full h-auto min-h-[746px] relative overflow-x-hidden mt-[-13px]">
      {/* Full-width background image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          width: '101vw',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      {/* Content */}
      <div className="relative w-full h-full max-w-screen-xl mx-auto py-16 px-4 sm:px-6 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-10 w-full mt-2">
          <h2 className="text-[32px] font-black text-[#FFFFFF] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-[#FFFFFF] max-w-[941px] mx-auto text-[18px] font-normal leading-relaxed">
            Have questions? We've got answers! Explore our FAQs to learn more
            about how Stackly AI works, its features, and how it can help you
            streamline your tasks effortlessly.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="w-full flex justify-center mt-1">
          <div className="flex gap-4 flex-wrap max-w-[537px]">
            {/* Button 1 */}
            <div
              className="relative w-[179px] h-[46px] rounded-[12px] p-[1px]"
              style={{
                background:
                  "linear-gradient(95.11deg, rgba(0, 176, 186, 0.5) 3.73%, rgba(0, 80, 84, 0.5) 99.47%)",
              }}
            >
              <button
                className={`w-full h-full px-2 text-[16px] font-medium rounded-[11px] flex items-center justify-center whitespace-nowrap ${faqCategory === 0
                    ? "text-white bg-gradient-to-r from-[#007B82] to-[#001A1C]"
                    : "text-[#007B82] bg-white hover:bg-[#F0F0F0]"
                  }`}
                onClick={() => {
                  setFaqCategory(0);
                  setVisibleCount(4);
                }}
              >
                Get to Know Stackly
              </button>
            </div>

            {/* Button 2 */}
            <div
              className="relative w-[137px] h-[46px] rounded-[12px] p-[1px]"
              style={{
                background:
                  "linear-gradient(95.11deg, rgba(0, 176, 186, 0.5) 3.73%, rgba(0, 80, 84, 0.5) 99.47%)",
              }}
            >
              <button
                className={`w-full h-full px-2 text-[16px] font-medium rounded-[11px] flex items-center justify-center whitespace-nowrap ${faqCategory === 1
                    ? "text-white bg-gradient-to-r from-[#007B82] to-[#001A1C]"
                    : "text-[#007B82] bg-white hover:bg-[#F0F0F0]"
                  }`}
                onClick={() => {
                  setFaqCategory(1);
                  setVisibleCount(4);
                }}
              >
                Plans & Pricing
              </button>
            </div>

            {/* Button 3 */}
            <div
              className="relative w-[137px] h-[46px] rounded-[12px] p-[1px]"
              style={{
                background:
                  "linear-gradient(95.11deg, rgba(0, 176, 186, 0.5) 3.73%, rgba(0, 80, 84, 0.5) 99.47%)",
              }}
            >
              <button
                className={`w-full h-full px-2 text-[16px] font-medium rounded-[11px] flex items-center justify-center whitespace-nowrap ${faqCategory === 2
                    ? "text-white bg-gradient-to-r from-[#007B82] to-[#001A1C]"
                    : "text-[#007B82] bg-white hover:bg-[#F0F0F0]"
                  }`}
                onClick={() => {
                  setFaqCategory(2);
                  setVisibleCount(4);
                }}
              >
                API Integration
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="w-full max-w-[1288px] rounded-[16px] p-6 md:p-12 space-y-4 mt-8">
          {getFaqSlice().map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-md shadow-[#00000085] transition-all duration-300 ${activeIndex === index ? "bg-[#007B82]/10" : "bg-[#FFFFFF4D]"
                }`}
            >
              <button
                className={`w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none transition-colors duration-300 ${activeIndex === index
                    ? "bg-[#007B82] text-white"
                    : "text-[#FFFFFF]"
                  }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base md:text-lg font-medium">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${activeIndex === index ? "rotate-180 text-white" : ""
                    }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-5 pb-6 pt-6 text-sm md:text-base text-[#2A2A2A] bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* View All Button */}
        {currentCategoryCount > 4 && (
          <div className="mt-[-4px] mb-[-3px]">
            <button
              onClick={handleViewAll}
              className="px-6 py-2 bg-transparent border border-[#007B82] text-[#FFFFFF] text-[14px] underline rounded-lg hover:text-white transition-colors duration-300"
            >
              {visibleCount >= currentCategoryCount ? 'Show Less' : 'View All'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

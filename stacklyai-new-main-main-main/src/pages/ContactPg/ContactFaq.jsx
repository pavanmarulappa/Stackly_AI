import React, { useState } from "react";
import Bg from "../../assets/contact/sec2bg.png";

export default function PricingFaq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqCategory, setFaqCategory] = useState(0); // 0 = Get to Know, 1 = Pricing, 2 = API

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    // Group 1: Get to Know Stackly
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

    // Group 2: Plans & Pricing
    {
      question: "How do I get started with StacklyAI APIs?",
      answer: "Stackly AI is an intelligent platform designed to streamline your tasks using automation and smart tools. It helps enhance productivity by offering tailored solutions based on your needs.",
    },
    {
      question: "What authentication method does StacklyAI use?",
      answer: "Stackly AI works by analyzing your input and tasks, then offering automated suggestions, integrations, and tools to make your workflow more efficient and seamless.",
    },
    {
      question: "Are there any rate limits on API requests?",
      answer: "Stackly AI offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced capabilities and integrations.",
    },
    {
      question: "What image formats do StacklyAI APIs support?",
      answer: "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },

    // Group 3: API Integration
    {
      question: "What do I get with a STACKLY AI membership?",
      answer: "Stackly AI is an intelligent platform designed to streamline your tasks using automation and smart tools. It helps enhance productivity by offering tailored solutions based on your needs.",
    },
    {
      question: "Is the API available for all users?",
      answer: "Stackly AI works by analyzing your input and tasks, then offering automated suggestions, integrations, and tools to make your workflow more efficient and seamless.",
    },
    {
      question: "What can I do with the STACKLY AI API?",
      answer: "Stackly AI offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced capabilities and integrations.",
    },
    {
      question: "Can I cancel or change my membership anytime?",
      answer: "Stackly AI supports multiple image formats. You can also reach out via our support page or chat for any format-specific queries.",
    },
  ];

  const getFaqSlice = () => {
    const start = faqCategory * 4;
    const end = start + 4;
    return faqs.slice(start, end);
  };

  return (
    <section className="w-full h-[804px] relative overflow-x-hidden mt-[-13px]">
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
                className={`w-full h-full px-2 text-[16px] font-medium rounded-[11px] flex items-center justify-center whitespace-nowrap ${
                  faqCategory === 0
                    ? "text-white bg-gradient-to-r from-[#007B82] to-[#001A1C]"
                    : "text-[#007B82] bg-white hover:bg-[#F0F0F0]"
                }`}
                onClick={() => setFaqCategory(0)}
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
                className={`w-full h-full px-2 text-[16px] font-medium rounded-[11px] flex items-center justify-center whitespace-nowrap ${
                  faqCategory === 1
                    ? "text-white bg-gradient-to-r from-[#007B82] to-[#001A1C]"
                    : "text-[#007B82] bg-white hover:bg-[#F0F0F0]"
                }`}
                onClick={() => setFaqCategory(1)}
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
                className={`w-full h-full px-2 text-[16px] font-medium rounded-[11px] flex items-center justify-center whitespace-nowrap ${
                  faqCategory === 2
                    ? "text-white bg-gradient-to-r from-[#007B82] to-[#001A1C]"
                    : "text-[#007B82] bg-white hover:bg-[#F0F0F0]"
                }`}
                onClick={() => setFaqCategory(2)}
              >
                API Integration
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="w-[1288px] h-[408px] rounded-[16px] p-6 md:p-12 space-y-4 mt-8">
          {getFaqSlice().map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-md shadow-[#00000085] transition-all duration-300 ${
                activeIndex === index ? "bg-[#007B82]/10" : "bg-[#FFFFFF4D]"
              }`}
            >
              <button
                className={`w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none transition-colors duration-300 ${
                  activeIndex === index
                    ? "bg-[#007B82] text-white"
                    : "text-[#FFFFFF]"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base md:text-lg font-medium">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180 text-white" : ""
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
      </div>
    </section>
  );
}

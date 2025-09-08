import React, { useState } from "react";
import incpirationBg3 from "../../assets/afterHome/incpirationBg3.png";

import before1 from "../../assets/afterHome/study8.png";
import after1 from "../../assets/afterHome/Bath1.png";
import before2 from "../../assets/afterHome/Bath2.png";
import after2 from "../../assets/afterHome/study4.png";

export default function AfterGraph() {
  const [toggle, setToggle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image pairs
  const imagePairs = [
    { before: before1, after: after1 },
    { before: before2, after: after2 },
    // Add more pairs as needed
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagePairs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === imagePairs.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="relative w-full min-h-[555px] bg-black flex flex-col justify-center items-center gap-[50px] bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${incpirationBg3})` }}
    >
      {/* Heading */}
      <div className="w-[576px] h-[78px] flex flex-col items-center justify-center gap-4 mt-[-40px]">
        <h2 className="w-full text-center text-white capitalize text-[26px] poppins-font font-normal leading-[1] mt-[-40px]">
          Experience the magic of AI as it transforms spaces into beautiful works of art.
        </h2>
      </div>

      {/* Main Image + Toggle + Arrows */}
      <div className="w-[1064px] h-[370px] flex justify-center items-center relative mt-[-40px]">
        {/* Left Arrow */}
        <button
          className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 flex justify-center items-center shadow-md hover:bg-white/40 transition-colors"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Image Div */}
        <div className="w-[864px] h-[370px] rounded-[12px] overflow-hidden relative">
          <img
            src={toggle ? imagePairs[currentIndex].after : imagePairs[currentIndex].before}
            alt="Description"
            className="w-full h-full object-cover rounded-[12px]"
          />

          {/* Toggle Button */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[163px] h-[33px] flex justify-between items-center rounded-[20px] border border-[#E2E2E280] px-3 bg-black/25 shadow-[0_0_4px_0_#00000040] backdrop-blur-sm cursor-pointer">
            <div
              className={`w-[45px] h-[21px] flex items-center justify-center text-[14px] font-normal poppins-font text-white text-center rounded-[20px] transition-all duration-300
                ${!toggle ? 'w-[91px] h-[33px] bg-gradient-to-r from-[#48207E]/60 via-[#6D2CC2]/60 to-[#48207E]/60 pt-[6px] px-3' : ''}`}
              onClick={() => setToggle(false)}
            >
              Before
            </div>

            <div
              className={`w-[34px] h-[21px] flex items-center justify-center text-[14px] font-medium poppins-font text-white text-center rounded-[20px] transition-all duration-300
                ${toggle ? 'w-[91px] h-[33px] bg-gradient-to-r from-[#48207E]/60 via-[#6D2CC2]/60 to-[#48207E]/60 pt-[6px] px-3' : ''}`}
              onClick={() => setToggle(true)}
            >
              After
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 flex justify-center items-center shadow-md hover:bg-white/40 transition-colors"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

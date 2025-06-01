import React from "react";
import GraphImage from "../../assets/pricing-pg/Graph.png";

export default function Graph() {
  return (
    <section className="w-full bg-white px-4 py-16 text-center">
      {/* Heading */}
      <h2 className="text-[52px] leading-[100%] text-center font-semibold">
        Daily <span className="text-[#009A98]">Credits</span> Usage
      </h2>

      {/* Subheading */}
      <p className="mt-8 text-[#2A2A2A] max-w-[600px] mx-auto text-[24px] leading-[100%] text-center font-medium">
        Tracking our community's growth, one day at a time.
      </p>
      <p className="mt-4 text-[16px] text-center font-[400] leading-[100%] text-[#B0B0B0]">
        (Live graph here showing credit activity — label points like “Yesterday”, “Today”, etc.)
      </p>

      {/* Graph Container */}
      <div className="mt-10 max-w-5xl mx-auto bg-white shadow-[0_0.83px_11.64px_0] shadow-[#00000040] border-[9.14px] border-[#007B824A] border-solid rounded-[16.63px] p-4 ">
        <div className="flex justify-between items-center text-sm mb-4">
          <span className="text-[#2A2A2A] text-[13.3px] leading-[100%] text-center font-medium">Current Date: <span className="text-[#007B82]">26-03-2025</span></span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2.5 h-2.5 rounded-full bg-[#007B82]"></span> Designs Used
              <span className="w-2.5 h-2.5 rounded-full bg-[#00B0BA] ml-4"></span> credits consumed in January
            </div>
            <select className="border border-gray-300 rounded-md text-sm px-3 py-1 focus:outline-none">
              <option>January 2025</option>
              {/* Add more options if needed */}
            </select>
            <button className="text-xl font-bold text-[#2a2a2a] hover:text-gray-600">≡</button>
          </div>
        </div>

        {/* Graph Placeholder */}
        <div className="w-full mt-4">
          <img
            src={GraphImage}
            alt="Credit Usage Graph"
            className="w-full max-h-[300px] object-contain"
          />
        </div>

        {/* Footer info */}
        <p className="mt-3 text-[15px] leading-[23.27px] text-center font-medium text-[#2A2A2A]">
          Total credits consumed in January: <span className="text-[#009A98] font-medium">850</span>
        </p>
      </div>

      {/* Final note */}
      <p className="mt-8 text-xs text-[#2a2a2a] max-w-[973px] font-[400] text-[18px] mx-auto">
        These numbers reflect the real impact of Stackly.AI — developers, teams, and creators building smarter every day.
      </p>
    </section>
  );
}

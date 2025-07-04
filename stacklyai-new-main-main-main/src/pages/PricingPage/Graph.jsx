// import React from "react";
// import GraphImage from "../../assets/pricing-pg/Graph.png";

// export default function Graph() {
//   return (
//     <section className="w-full bg-white px-4 py-16 text-center">
//       {/* Heading */}
//       <h2 className="text-[52px] leading-[100%] text-center font-semibold">
//         Daily <span className="text-[#009A98]">Credits</span> Usage
//       </h2>

//       {/* Subheading */}
//       <p className="mt-8 text-[#2A2A2A] max-w-[600px] mx-auto text-[24px] leading-[100%] text-center font-medium">
//         Tracking our community's growth, one day at a time.
//       </p>
//       <p className="mt-4 text-[16px] text-center font-[400] leading-[100%] text-[#B0B0B0]">
//         (Live graph here showing credit activity — label points like “Yesterday”, “Today”, etc.)
//       </p>

//       {/* Graph Container */}
//       <div className="mt-10 max-w-5xl mx-auto bg-white shadow-[0_0.83px_11.64px_0] shadow-[#00000040] border-[9.14px] border-[#007B824A] border-solid rounded-[16.63px] p-4 ">
//         <div className="flex justify-between items-center text-sm mb-4">
//           <span className="text-[#2A2A2A] text-[13.3px] leading-[100%] text-center font-medium">Current Date: <span className="text-[#007B82]">26-03-2025</span></span>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2 text-xs text-gray-500">
//               <span className="w-2.5 h-2.5 rounded-full bg-[#007B82]"></span> Designs Used
//               <span className="w-2.5 h-2.5 rounded-full bg-[#00B0BA] ml-4"></span> credits consumed in January
//             </div>
//             <select className="border border-gray-300 rounded-md text-sm px-3 py-1 focus:outline-none">
//               <option>January 2025</option>
//               {/* Add more options if needed */}
//             </select>
//             <button className="text-xl font-bold text-[#2a2a2a] hover:text-gray-600">≡</button>
//           </div>
//         </div>

//         {/* Graph Placeholder */}
//         <div className="w-full mt-4">
//           <img
//             src={GraphImage}
//             alt="Credit Usage Graph"
//             className="w-full max-h-[300px] object-contain"
//           />
//         </div>

//         {/* Footer info */}
//         <p className="mt-3 text-[15px] leading-[23.27px] text-center font-medium text-[#2A2A2A]">
//           Total credits consumed in January: <span className="text-[#009A98] font-medium">850</span>
//         </p>
//       </div>

//       {/* Final note */}
//       <p className="mt-8 text-xs text-[#2a2a2a] max-w-[973px] font-[400] text-[18px] mx-auto">
//         These numbers reflect the real impact of Stackly.AI — developers, teams, and creators building smarter every day.
//       </p>
//     </section>
//   );
// }

import React from "react";
import GraphImage from "../../assets/pricing-pg/Graph.png";

export default function Graph() {
  return (
    <section className="w-full bg-white px-4 py-16 text-center">
      {/* Heading */}
 <div
  className="max-[440px]:flex max-[440px]:flex-col max-[440px]:items-center max-[440px]:justify-center"
>
  <h2
    className="text-[52px] leading-[100%] text-center font-semibold
               max-[440px]:w-[288px] max-[440px]:h-[24px]
               max-[440px]:text-[20px] max-[440px]:leading-[100%]
               max-[440px]:font-['Inter'] max-[440px]:font-semibold max-[440px]:text-center"
  >
    Daily <span className="text-[#009A98]">Credits</span> Usage
  </h2>

  {/* Subheading */}
  <p
    className="mt-8 text-[#2A2A2A] max-w-[600px] mx-auto text-[24px] leading-[100%] text-center font-medium
               max-[440px]:w-[288px] max-[440px]:h-[37px]
               max-[440px]:text-[16px] max-[440px]:leading-[100%]
               max-[440px]:font-['Inter'] max-[440px]:font-medium max-[440px]:text-center"
  >
    Tracking our community's growth, one day at a time.
  </p>

  <p
    className="mt-4 text-[16px] text-center font-[400] leading-[100%] text-[#B0B0B0]
               max-[440px]:w-[288px] max-[440px]:h-[33px]
               max-[440px]:text-[12px] max-[440px]:leading-[140%]
               max-[440px]:font-['Inter'] max-[440px]:font-[400] max-[440px]:text-center"
  >
    (Live graph here showing credit activity — label points like “Yesterday”, “Today”, etc.)
  </p>
</div>


      {/* Graph Container */}
     <div
  className="mt-10 max-w-5xl mx-auto bg-white shadow-[0_0.83px_11.64px_0] shadow-[#00000040] 
             border-[9.14px] border-[#007B824A] border-solid rounded-[16.63px] p-4
             max-[440px]:w-[382px] max-[440px]:h-[306px]
             max-[440px]:rounded-[5.7px] max-[440px]:border-[3.14px]"
>
      <div
  className="flex justify-between items-center text-sm mb-4
             max-[440px]:flex-col max-[440px]:items-center max-[440px]:gap-[8px]"
>
        {/* Current Date */}
 <span
  className="text-[#2A2A2A] text-[13.3px] leading-[100%] font-medium
             max-[440px]:flex max-[440px]:flex-col 
             max-[440px]:items-start max-[440px]:text-left
             max-[440px]:w-[75px] max-[440px]:h-[34px] max-[440px]:gap-[4px] 
             max-[440px]:self-start"
>
  <span className="max-[440px]:w-[75px] max-[440px]:h-[15px]
                   max-[440px]:text-[12px] max-[440px]:leading-[100%]
                   max-[440px]:font-['Inter'] max-[440px]:font-[400] max-[440px]:text-left">
    Current Date:
  </span>
  <span className="text-[#007B82] max-[440px]:w-[75px] max-[440px]:h-[15px]
                   max-[440px]:text-[12px] max-[440px]:leading-[100%]
                   max-[440px]:font-['Inter'] max-[440px]:font-[500] max-[440px]:text-left">
    26-03-2025
  </span>
</span>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-500 max-[440px]:flex-col max-[440px]:w-[178px] max-[440px]:h-[36px] max-[440px]:gap-[4px]">
{/* First Row */}
<div className="flex items-center gap-1 max-[440px]:gap-0.5 max-[440px]:w-[178px]">
  <span className="w-2.5 h-2.5 rounded-full bg-[#007B82] ml-4 max-[440px]:ml-0 max-[440px]:w-[8px] max-[440px]:h-[8px]"></span>
  <span className="max-[440px]:text-[12px] max-[440px]:leading-[7.98px]">
    Designs Used
  </span>
</div>


  {/* Second Row */}
  <div className="flex items-center gap-[4px] max-[440px]:w-[178px] max-[440px]:h-[19px]">
    <span className="w-2.5 h-2.5 rounded-full bg-[#00B0BA] ml-4 max-[440px]:ml-0 max-[440px]:w-[8px] max-[440px]:h-[8px]"></span>
    <span className="max-[440px]:w-[166px] max-[440px]:h-[19px] max-[440px]:text-[12px] max-[440px]:leading-[120%] max-[440px]:font-[400]">
      credits consumed in January
    </span>
  </div>
</div>

          <select
  className="border border-gray-300 rounded-md text-sm px-3 py-1 focus:outline-none
             max-[440px]:w-[116px] max-[440px]:h-[32px] max-[440px]:rounded-[2.85px]
             max-[440px]:border-[0.29px] max-[440px]:px-[4px] max-[440px]:gap-[4px]
             max-[440px]:text-[12px] max-[440px]:font-medium max-[440px]:leading-[7.98px]
             max-[440px]:text-center max-[440px]:-mt-[110px]"
>
  <option>January 2025</option>
</select>


         <button
  className="text-xl font-bold text-[#2a2a2a] hover:text-gray-600
             max-[440px]:w-[24px] max-[440px]:h-[24px] relative
             max-[440px]:-mt-[120px]"  
>
  <span
    className="block max-[440px]:absolute max-[440px]:w-[18px] max-[440px]:h-[12px] 
               max-[440px]:top-[6px] max-[440px]:left-[3px]"
  >
    ≡
  </span>
</button>


          </div>
        </div>

        {/* Graph Placeholder */}
       
<div className="w-full mt-4 max-[440px]:mt-[19px]">
  <img
    src={GraphImage}
    alt="Credit Usage Graph"
    className="w-full max-h-[300px] object-contain"
  />
</div>

        {/* Footer info */}
<p className="mt-3 text-[15px] leading-[23.27px] text-center font-medium text-[#2A2A2A]
             max-[440px]:relative max-[440px]:w-[228px] max-[440px]:mx-auto max-[440px]:mt-12
             max-[440px]:text-[12px] max-[440px]:leading-[7.98px] max-[440px]:text-center
             max-[440px]:font-inter max-[440px]:font-medium">
  Total credits consumed in January: <span className="text-[#009A98] font-bold">850</span>
</p>

      </div>

      {/* Final note */}
     <p className="mt-8 text-xs text-[#2a2a2a] max-w-[973px] font-[400] text-[18px] mx-auto max-[440px]:hidden">
  These numbers reflect the real impact of Stackly.AI — developers, teams, and creators building smarter every day.
</p>

    </section>
  );
}
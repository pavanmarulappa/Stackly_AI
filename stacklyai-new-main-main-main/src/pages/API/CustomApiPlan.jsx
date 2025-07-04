// import React from "react";

// const CustomAPIPlan = () => {
//   return (
//     <div className="w-full min-h-[794px] bg-gradient-to-b from-[#011B1C] to-[#057D82] flex justify-center items-center">
//       <div className="max-w-[1280px] min-h-[581px] flex flex-col items-center">
//         <h2 className="w-[709px] min-h-[64px] font-[800] text-[44px] leading-[64px] text-center text-white">
//           Why Choose a <span className="text-[#00B0BA]">Custom API Plan?</span>
//         </h2>
//         <div className="flex gap-[40px] mt-[60px] flex-wrap justify-center">
//           {/* Box 1 */}
//           <div className="w-[350px] h-[330px] px-[40px] py-[80px] gap-[10px] bg-white rounded-[24px] flex flex-col items-center text-center">
//             <h3 className="text-[#00B0BA] font-bold text-[28px] leading-[100%]">
//               Tailored Integrations
//             </h3>
//             <p className="mt-[16px] text-[#2B2B2B] text-[16px] leading-[150%]">
//               Get APIs configured to suit your specific workflows, data requirements,
//               and use cases—no unnecessary extras.
//             </p>
//           </div>

//           {/* Box 2 */}
//           <div className="w-[350px] h-[330px] px-[40px] py-[80px] gap-[10px] bg-white rounded-[24px] flex flex-col items-center text-center">
//             <h3 className="text-[#00B0BA] font-bold text-[28px] leading-[100%]">
//               Scalable to Your Needs
//             </h3>
//             <p className="mt-[16px] text-[#2B2B2B] text-[16px] leading-[150%]">
//               Whether you're a startup or an enterprise, adjust your API limits,
//               endpoints, and access as your business evolves.
//             </p>
//           </div>

//           {/* Box 3 */}
//           <div className="w-[350px] h-[330px] px-[40px] py-[80px] gap-[10px] bg-white rounded-[24px] flex flex-col items-center text-center">
//             <h3 className="text-[#00B0BA] font-bold text-[28px] leading-[100%]">
//               Priority Support
//             </h3>
//             <p className="mt-[16px] text-[#2B2B2B] text-[16px] leading-[150%]">
//               Work directly with our experts for implementation, troubleshooting, and
//               optimization to ensure your API runs smoothly.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomAPIPlan;
import React, { useState } from "react";

const CustomAPIPlan = () => {
  const [current, setCurrent] = useState(0);

  const boxes = [
    {
      title: "Tailored Integrations",
      desc: "Get APIs configured to suit your specific workflows, data requirements, and use cases—no unnecessary extras.",
    },
    {
      title: "Scalable to Your Needs",
      desc: "Whether you're a startup or an enterprise, adjust your API limits, endpoints, and access as your business evolves.",
    },
    {
      title: "Priority Support",
      desc: "Work directly with our experts for implementation, troubleshooting, and optimization to ensure your API runs smoothly.",
    },
  ];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % boxes.length);
  };

  return (
<div
  className="w-full min-h-[794px] bg-gradient-to-b from-[#011B1C] to-[#057D82] flex justify-center items-center 
             max-[440px]:min-h-[500px] max-[440px]:items-start"
>
  <div
    className="max-w-[1280px] min-h-[581px] flex flex-col items-center 
               max-[440px]:min-h-[420px] max-[440px]:mt-[8px]"
  >



        <h2
  className="w-[709px] min-h-[64px] font-[800] text-[44px] leading-[64px] text-center text-white 
             max-[440px]:w-[319px] max-[440px]:h-[42px] max-[440px]:font-[700] max-[440px]:text-[20px] 
             max-[440px]:leading-[100%] max-[440px]:mt-[40px]"
>
  Why Choose a <span className="text-[#00B0BA]">Custom API Plan?</span>
</h2>


        {/* Desktop View (≥441px) */}
        <div className="hidden min-[441px]:flex gap-[40px] mt-[60px] flex-wrap justify-center">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="w-[350px] h-[330px] px-[40px] py-[80px] gap-[10px] bg-white rounded-[24px] flex flex-col items-center text-center"
            >
              <h3 className="text-[#00B0BA] font-bold text-[28px] leading-[100%]">
                {box.title}
              </h3>
              <p className="mt-[16px] text-[#2B2B2B] text-[16px] leading-[150%]">
                {box.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View (<441px) */}
       <div className="min-[441px]:hidden mt-[60px] max-[440px]:mt-[20px] flex flex-col items-center">

          <div
  className="w-[319px] h-[330px] px-[24px] py-[60px] bg-white rounded-[24px] flex flex-col items-center text-center transition-all duration-300 ease-in-out
             max-[440px]:w-[319px] max-[440px]:h-[224px] max-[440px]:p-[24px] max-[440px]:rounded-[20px] max-[440px]:gap-[10px]"
>

            <h3
              className="text-[#00B0BA] font-bold text-[20px] leading-[100%] text-center
             max-[410px]:w-[271px] max-[410px]:h-[22px] max-[410px]:text-[18px] max-[410px]:font-[700] max-[410px]:leading-[100%]"
            >
              {boxes[current].title}
            </h3>

            <p
              className="mt-[16px] text-[#2B2B2B] text-[14px] leading-[150%] text-center
             max-[410px]:w-[271px] max-[410px]:h-[60px] max-[410px]:font-[400] max-[410px]:leading-[140%]"
            >
              {boxes[current].desc}
            </p>

          </div>

          <button
            onClick={handleNext}
            className="mt-4 px-6 py-2 bg-[#00B0BA] text-white rounded-full text-sm font-medium"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomAPIPlan;
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
// import React, { useState } from "react";

// const CustomAPIPlan = () => {
//   const [current, setCurrent] = useState(0);

//   const boxes = [
//     {
//       title: "Tailored Integrations",
//       desc: "Get APIs configured to suit your specific workflows, data requirements, and use cases—no unnecessary extras.",
//     },
//     {
//       title: "Scalable to Your Needs",
//       desc: "Whether you're a startup or an enterprise, adjust your API limits, endpoints, and access as your business evolves.",
//     },
//     {
//       title: "Priority Support",
//       desc: "Work directly with our experts for implementation, troubleshooting, and optimization to ensure your API runs smoothly.",
//     },
//   ];

//   const handleNext = () => {
//     setCurrent((prev) => (prev + 1) % boxes.length);
//   };

//   return (
// <div
//   className="w-full min-h-[794px] bg-gradient-to-b from-[#011B1C] to-[#057D82] flex justify-center items-center 
//              max-[440px]:min-h-[500px] max-[440px]:items-start"
// >
//   <div
//     className="max-w-[1280px] min-h-[581px] flex flex-col items-center 
//                max-[440px]:min-h-[420px] max-[440px]:mt-[8px]"
//   >



//         <h2
//   className="w-[709px] min-h-[64px] font-[800] text-[44px] leading-[64px] text-center text-white 
//              max-[440px]:w-[319px] max-[440px]:h-[42px] max-[440px]:font-[700] max-[440px]:text-[20px] 
//              max-[440px]:leading-[100%] max-[440px]:mt-[40px]"
// >
//   Why Choose a <span className="text-[#00B0BA]">Custom API Plan?</span>
// </h2>


//         {/* Desktop View (≥441px) */}
//         <div className="hidden min-[441px]:flex gap-[40px] mt-[60px] flex-wrap justify-center">
//           {boxes.map((box, index) => (
//             <div
//               key={index}
//               className="w-[350px] h-[330px] px-[40px] py-[80px] gap-[10px] bg-white rounded-[24px] flex flex-col items-center text-center"
//             >
//               <h3 className="text-[#00B0BA] font-bold text-[28px] leading-[100%]">
//                 {box.title}
//               </h3>
//               <p className="mt-[16px] text-[#2B2B2B] text-[16px] leading-[150%]">
//                 {box.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Mobile View (<441px) */}
//        <div className="min-[441px]:hidden mt-[60px] max-[440px]:mt-[20px] flex flex-col items-center">

//           <div
//   className="w-[319px] h-[330px] px-[24px] py-[60px] bg-white rounded-[24px] flex flex-col items-center text-center transition-all duration-300 ease-in-out
//              max-[440px]:w-[319px] max-[440px]:h-[224px] max-[440px]:p-[24px] max-[440px]:rounded-[20px] max-[440px]:gap-[10px]"
// >

//             <h3
//               className="text-[#00B0BA] font-bold text-[20px] leading-[100%] text-center
//              max-[410px]:w-[271px] max-[410px]:h-[22px] max-[410px]:text-[18px] max-[410px]:font-[700] max-[410px]:leading-[100%]"
//             >
//               {boxes[current].title}
//             </h3>

//             <p
//               className="mt-[16px] text-[#2B2B2B] text-[14px] leading-[150%] text-center
//              max-[410px]:w-[271px] max-[410px]:h-[60px] max-[410px]:font-[400] max-[410px]:leading-[140%]"
//             >
//               {boxes[current].desc}
//             </p>

//           </div>

//           <button
//             onClick={handleNext}
//             className="mt-4 px-6 py-2 bg-[#00B0BA] text-white rounded-full text-sm font-medium"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomAPIPlan;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vector from "../../assets/api/vector.png";
import user from "../../assets/api/user.png";
import trending from "../../assets/api/trending.png";
import { AnimatePresence } from "framer-motion";

const CustomAPIPlan = () => {
  const [current, setCurrent] = useState(0);
  const [hoverStates, setHoverStates] = useState([false, false, false]);

  const boxes = [
    {
      title: "Tailored Integrations",
      desc: "Get APIs configured to suit your specific workflows, data requirements, and use cases—no unnecessary extras.",
      icon: vector,
      gradient: "rgba(0, 176, 186, 0.3)",
      color: "#00B0BA"
    },
    {
      title: "Scalable to Your Needs",
      desc: "Whether you're a startup or an enterprise, adjust your API limits, endpoints, and access as your business evolves.",
      icon: user,
      gradient: "rgba(177, 121, 23, 0.3)",
      color: "#B17917"
    },
    {
      title: "Priority Support",
      desc: "Work directly with our experts for implementation, troubleshooting, and optimization to ensure your API runs smoothly.",
      icon: trending,
      gradient: "rgba(255, 255, 255, 0.3)",
      color: "#FFFFFF"
    }
  ];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % boxes.length);
  };

  const handleHover = (index, isHovering) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = isHovering;
    setHoverStates(newHoverStates);
  };

  // Floating animation for all boxes
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Hover animation
  const hoverAnimation = {
    y: -15,
    scale: 1.03,
    boxShadow: "0 25px 50px -12px rgba(0, 176, 186, 0.25)",
    transition: {
      duration: 0.3
    }
  };

  // Gradient pulse animation
  const gradientAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.4, 0.7, 0.4],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
   <div className="w-full min-h-[714px] bg-black flex flex-col justify-center items-center gap-[48px] px-[80px] py-[80px]

  /* Mobile */
  max-[440px]:bg-gradient-to-b 
  max-[440px]:from-[#011B1C] 
  max-[440px]:to-[#057D82] 
  max-[440px]:min-h-[500px] 
  max-[440px]:items-center 
  max-[440px]:px-[20px] 
  max-[440px]:py-[40px] 
  max-[440px]:gap-[32px]

  /* Tablet (441px–768px) */
  min-[441px]:max-[768px]:w-[768px]
  min-[441px]:max-[768px]:min-h-[500px]
  min-[441px]:max-[768px]:px-[40px]
  min-[441px]:max-[768px]:py-[60px]
  min-[441px]:max-[768px]:gap-[32px]"
>

    <div
  className="
    max-w-[1280px] min-h-[581px] flex flex-col items-center

    /* Mobile styles */
    max-[440px]:min-h-[420px] 
    max-[440px]:mt-[8px]

    /* Tablet styles: 441px to 768px */
    min-[441px]:max-[768px]:w-[768px]
    min-[441px]:max-[768px]:h-[500px]
    min-[441px]:max-[768px]:pt-[60px]
    min-[441px]:max-[768px]:pr-[40px]
    min-[441px]:max-[768px]:pb-[60px]
    min-[441px]:max-[768px]:pl-[40px]
    min-[441px]:max-[768px]:gap-[32px]
  "
>

       <motion.h2 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="w-[648px] min-h-[64px] text-[44px] font-normal leading-[64px] text-center text-white whitespace-nowrap

    /* Mobile */
    max-[440px]:w-[319px]
    max-[440px]:h-[42px]
    max-[440px]:font-bold
    max-[440px]:text-[20px]
    max-[440px]:leading-[100%]
    max-[440px]:mt-[40px]

    /* Tablet */
    min-[441px]:max-[768px]:w-[375px]
    min-[441px]:max-[768px]:h-[64px]
    min-[441px]:max-[768px]:text-[24px]
    min-[441px]:max-[768px]:font-[500]
    min-[441px]:max-[768px]:leading-[64px]
  " 
  style={{ fontFamily: "Inter", letterSpacing: "0%" }}
>
  Why Choose a <span className="text-[#00B0BA]">Custom API Plan?</span>
</motion.h2>


        {/* Desktop View (≥441px) */}
       <div className="
  hidden
  min-[441px]:flex 
  min-[441px]:w-[1281px] 
  min-[441px]:h-[442px] 
  min-[441px]:gap-[21px] 
  min-[441px]:opacity-100 
  min-[441px]:mt-[60px] 
  min-[441px]:flex-wrap 
  min-[441px]:justify-center

  /* Tablet overrides */
  min-[441px]:max-[768px]:w-[1161px] 
  min-[441px]:max-[768px]:h-[284px]
  min-[441px]:max-[768px]:gap-[21px]
  min-[441px]:max-[768px]:opacity-100
"
>

          {boxes.map((box, index) => (
            <motion.div
              key={index}
className="
  relative 
  w-[413px] h-[442px] 
  px-[40px] py-[80px] 
  gap-[10px] 
  rounded-[24px] 
  flex flex-col items-center text-center overflow-hidden cursor-pointer

  /* Tablet (441px - 768px) overrides */
  min-[441px]:max-[768px]:w-[200px]
  min-[441px]:max-[768px]:h-[284px]
  min-[441px]:max-[768px]:pt-[40px]
  min-[441px]:max-[768px]:pr-[20px]
  min-[441px]:max-[768px]:pb-[40px]
  min-[441px]:max-[768px]:pl-[20px]
  min-[441px]:max-[768px]:rounded-[12px]
  min-[441px]:max-[768px]:opacity-100
"

              style={{
                border: '2px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(84px)'
              }}
              animate={hoverStates[index] ? hoverAnimation : floatingAnimation}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 25px 50px -12px ${box.color}80`
              }}
              onHoverStart={() => handleHover(index, true)}
              onHoverEnd={() => handleHover(index, false)}
            >
              {/* Animated gradient */}
            <motion.div 
  className="
    absolute 
    top-0 right-0 
    w-[134px] h-[134px] 
    pointer-events-none

    /* Tablet: center and smaller */
    min-[441px]:max-[768px]:top-1/2
    min-[441px]:max-[768px]:left-1/2
    min-[441px]:max-[768px]:right-auto
    min-[441px]:max-[768px]:transform
    min-[441px]:max-[768px]:-translate-x-1/2
    min-[441px]:max-[768px]:-translate-y-1/2
    min-[441px]:max-[768px]:w-[80px]
    min-[441px]:max-[768px]:h-[80px]
  "
  style={{
    background: `linear-gradient(225deg, ${box.gradient} 0%, transparent 70%)`,
    filter: 'blur(16px)',
  }}
  animate={gradientAnimation}
/>


              {/* Floating icon */}
            <motion.div 
  className="
    w-[60px] h-[60px] flex items-center justify-center mb-10 z-10

    /* Tablet: smaller and centered */
    min-[441px]:max-[768px]:w-[40px]
    min-[441px]:max-[768px]:h-[40px]
    min-[441px]:max-[768px]:mx-auto
    min-[441px]:max-[768px]:mb-[20px]
  "
  animate={
    hoverStates[index] ? 
    { 
      y: -5,
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.5 }
    } : 
    {
      y: [0, -5, 0],
      transition: { duration: 3, repeat: Infinity }
    }
  }
>

                <img 
                  src={box.icon} 
                  alt="" 
                  className="w-full h-full object-contain" 
                />
              </motion.div>

             <div
  className="
    flex flex-col items-center text-center relative z-10

    /* Tablet styles */
    min-[441px]:max-[768px]:gap-[40px]
  "
  style={{
    width: '333px',
    height: '210px',

    // Tablet overrides
    '--tw-style-width': '160px',
    '--tw-style-height': '204px',
  }}
>

              <motion.h3
  className="
    text-[#FFFFFF] font-medium text-[24px] leading-[100%] w-full h-[34px] opacity-100 text-center
    max-[440px]:text-[20px]

    /* Tablet styles */
    min-[441px]:max-[768px]:w-[160px]
    min-[441px]:max-[768px]:h-[44px]
    min-[441px]:max-[768px]:font-bold
    min-[441px]:max-[768px]:text-[18px]
  "
  style={{ fontFamily: 'Inter' }}
  animate={
    hoverStates[index]
      ? {
          scale: 1.05,
          textShadow: `0 0 15px ${box.color}`,
        }
      : {}
  }
>
  {box.title}
</motion.h3>

               <motion.p
  className="
    text-[#FFFFFF] text-[20px] leading-[140%] w-full h-[136px] opacity-100 text-center
    max-[440px]:text-[14px]

    /* Tablet styles */
    min-[441px]:max-[768px]:w-[160px]
    min-[441px]:max-[768px]:h-[120px]
    min-[441px]:max-[768px]:text-[14px]
    min-[441px]:max-[768px]:font-[400]
    min-[441px]:max-[768px]:mt-[-36px]
  "
  style={{ fontFamily: 'Inter' }}
  animate={
    hoverStates[index]
      ? {
          y: 5,
          scale: 1.02,
        }
      : {}
  }
>
  {box.desc}
</motion.p>

              </div>

              {/* Subtle particles */}
              {hoverStates[index] && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        background: box.color,
                        width: Math.random() * 4 + 2 + 'px',
                        height: Math.random() * 4 + 2 + 'px',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                        opacity: 0.6
                      }}
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 0.6, 0],
                        x: (Math.random() - 0.5) * 20,
                        y: (Math.random() - 0.5) * 20
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </div>

     {/* Mobile View (<441px) */}
<div className="min-[441px]:hidden mt-[60px] max-[440px]:mt-[20px] flex flex-col items-center">
  <AnimatePresence mode="wait">
    <motion.div
      key={current}
      className="w-[319px] h-[224px] px-[30px] py-[70px] bg-white rounded-[20px] flex flex-col items-start text-left justify-start gap-[10px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-[#00B0BA] font-bold text-[18px] leading-[100%] w-full">
        {boxes[current].title}
      </h3>

      <p className="text-[#2B2B2B] text-[14px] font-[400] leading-[140%] w-full">
        {boxes[current].desc}
      </p>

      {/* <div className="w-[60px] h-[60px] mt-auto ml-auto">
        <img 
          src={boxes[current].icon} 
          alt="" 
          className="w-full h-full object-contain" 
        />
      </div> */}
    </motion.div>
  </AnimatePresence>

  <motion.button
    onClick={handleNext}
    className="mt-4 px-6 py-2 bg-[#00B0BA] text-white rounded-full text-sm font-medium"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Next
  </motion.button>
</div>

      </div>
    </div>
  );
};

export default CustomAPIPlan;


//animation file 
// import React, { useState } from "react";
// import vector from "../../assets/api/vector.png";
// import user from "../../assets/api/user.png";
// import trending from "../../assets/api/trending.png";

// const CustomAPIPlan = () => {
//   const [current, setCurrent] = useState(0);

//   const boxes = [
//     {
//       title: "Tailored Integrations",
//       desc: "Get APIs configured to suit your specific workflows, data requirements, and use cases—no unnecessary extras.",
//     },
//     {
//       title: "Scalable to Your Needs",
//       desc: "Whether you're a startup or an enterprise, adjust your API limits, endpoints, and access as your business evolves.",
//     },
//     {
//       title: "Priority Support",
//       desc: "Work directly with our experts for implementation, troubleshooting, and optimization to ensure your API runs smoothly.",
//     },
//   ];

//   const handleNext = () => {
//     setCurrent((prev) => (prev + 1) % boxes.length);
//   };

//   return (
//     <div
//       className="w-full min-h-[714px] bg-black flex flex-col justify-center items-center gap-[48px] px-[80px] py-[80px]
//                  max-[440px]:bg-gradient-to-b max-[440px]:from-[#011B1C] max-[440px]:to-[#057D82]
//                  max-[440px]:min-h-[500px] max-[440px]:items-center max-[440px]:px-[20px] max-[440px]:py-[40px] max-[440px]:gap-[32px]"
//     >
//       <div
//         className="max-w-[1280px] min-h-[581px] flex flex-col items-center 
//                    max-[440px]:min-h-[420px] max-[440px]:mt-[8px]"
//       >
//         <h2
//           className="w-[648px] min-h-[64px] text-[32px] font-normal leading-[64px] text-center text-white whitespace-nowrap
//                      max-[440px]:w-[319px] max-[440px]:h-[42px] max-[440px]:font-bold max-[440px]:text-[20px] 
//                      max-[440px]:leading-[100%] max-[440px]:mt-[40px]"
//           style={{
//             fontFamily: "Aptos Serif",
//             letterSpacing: "0%",
//             opacity: 1,
//           }}
//         >
//           Why Choose a <span className="text-[#00B0BA]">Custom API Plan?</span>
//         </h2>

//         {/* Desktop View (≥441px) */}
//         <div className="hidden min-[441px]:flex min-[441px]:w-[1281px] min-[441px]:h-[442px] min-[441px]:gap-[21px] 
//                        min-[441px]:opacity-100 min-[441px]:mt-[60px] min-[441px]:flex-wrap min-[441px]:justify-center">
//           {boxes.map((box, index) => (
//             <div
//               key={index}
//               className="relative w-[413px] h-[442px] px-[40px] py-[80px] gap-[10px] rounded-[24px] flex flex-col items-center text-center overflow-hidden
//                          transform transition duration-300 ease-in-out hover:scale-[1.03] hover:-translate-y-[10px] cursor-pointer"
//               style={{
//                 border: "2px solid rgba(255, 255, 255, 0.2)",
//                 background: "rgba(255, 255, 255, 0.1)",
//                 boxShadow: `
//                   4px 4px 12px 0px rgba(0, 123, 130, 0.16),
//                   inset 2px 2px 16px 0px rgba(255, 255, 255, 0.08)
//                 `,
//                 backdropFilter: "blur(84px)",
//               }}
//             >
//               {/* Top-right gradient circle */}
//               <div
//                 className="absolute top-0 right-0 w-[134px] h-[134px] pointer-events-none"
//                 style={{
//                   background:
//                     index === 0
//                       ? "linear-gradient(225deg, rgba(0, 176, 186, 0.3) 0%, transparent 70%)"
//                       : index === 1
//                       ? "linear-gradient(225deg, rgba(177, 121, 23, 0.3) 0%, transparent 70%)"
//                       : "linear-gradient(225deg, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
//                   filter: "blur(16px)",
//                 }}
//               ></div>

//               <div
//                 className="flex flex-col items-center text-center relative z-10 gap-[40px]"
//                 style={{
//                   width: "333px",
//                   height: "210px",
//                   opacity: 1,
//                 }}
//               >
//                 <div className="w-[60px] h-[60px] flex items-center justify-center">
//                   {index === 0 && (
//                     <img
//                       src={vector}
//                       alt="Vector icon"
//                       className="w-full h-full object-contain"
//                     />
//                   )}
//                   {index === 1 && (
//                     <img
//                       src={user}
//                       alt="User icon"
//                       className="w-full h-full object-contain"
//                     />
//                   )}
//                   {index === 2 && (
//                     <img
//                       src={trending}
//                       alt="Trending icon"
//                       className="w-full h-full object-contain"
//                     />
//                   )}
//                 </div>

//                 <h3
//                   className="text-[#FFFFFF] font-medium text-[28px] leading-[100%] w-full h-[34px] opacity-100 max-[440px]:text-[20px]"
//                   style={{ fontFamily: "Inter" }}
//                 >
//                   {box.title}
//                 </h3>

//                 <p
//                   className="text-[#FFFFFF] text-[20px] leading-[140%] w-full h-[136px] opacity-100"
//                   style={{ fontFamily: "Inter", fontWeight: 400 }}
//                 >
//                   {box.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Mobile View (<441px) */}
//         <div className="min-[441px]:hidden mt-[60px] max-[440px]:mt-[20px] flex flex-col items-center">
//           <div
//             className="w-[319px] h-[330px] px-[24px] py-[60px] bg-white rounded-[24px] flex flex-col items-center text-center transition-all duration-300 ease-in-out
//                        max-[440px]:w-[319px] max-[440px]:h-[224px] max-[440px]:p-[24px] max-[440px]:rounded-[20px] max-[440px]:gap-[10px]"
//           >
//             <h3
//               className="text-[#00B0BA] font-bold text-[20px] leading-[100%] text-center
//                          max-[410px]:w-[271px] max-[410px]:h-[22px] max-[410px]:text-[18px] max-[410px]:font-[700] max-[410px]:leading-[100%]"
//             >
//               {boxes[current].title}
//             </h3>

//             <p
//               className="mt-[16px] text-[#2B2B2B] text-[14px] leading-[150%] text-center
//                          max-[410px]:w-[271px] max-[410px]:h-[60px] max-[410px]:font-[400] max-[410px]:leading-[140%]"
//             >
//               {boxes[current].desc}
//             </p>
//           </div>

//           <button
//             onClick={handleNext}
//             className="mt-4 px-6 py-2 bg-[#00B0BA] text-white rounded-full text-sm font-medium"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomAPIPlan;

// import React from "react";
// import bgImage from "../../assets/api/apibg.png";

// const integrationData = [
//   {
//     title: "Interior Design Platforms",
//     description:
//       "Let your users transform their rooms instantly within your app using AI rendering.",
//   },
//   {
//     title: "Architectural SaaS Tools",
//     description:
//       "Integrate real-time visualization of floor plans, facades, and elevations.",
//   },
//   {
//     title: "Home Renovation Platforms",
//     description:
//       "Enable users to preview renovation ideas directly on your website.",
//   },
//   {
//     title: "E-Commerce & Furniture Brands",
//     description:
//       "Display furniture in realistic settings using AI-generated room mockups.",
//   },
//   {
//     title: "Real Estate Marketplaces",
//     description:
//       "Offer virtual staging with one click, enhancing property listings.",
//   },
//   {
//     title: "Home Builder Apps",
//     description:
//       "Let buyers preview customized homes with different themes and materials.",
//   },
// ];

// const StacklyAPIIntegration = () => {
//   return (
//     <div
//       className="w-full h-[959px] flex flex-col items-center justify-center gap-12 px-4 bg-black"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Heading */}
//       <div className="w-[791px] h-[58px] text-[48px] font-bold leading-[100%] text-black text-center">
//         Who Can <span className="text-[#00D9D0]">Integrate</span> StacklyAI API?
//       </div>

//       {/* Paragraph */}
//       <p className="w-[672px] h-[56px] text-[18px] font-[400] leading-[28px] text-center text-white">
//         Our API is designed for platforms and businesses that want to bring visual intelligence into their own systems.
//       </p>

//       {/* Boxes */}
//       <div className="w-[1440px] h-[484px] grid grid-cols-3 gap-10">
//         {integrationData.map((item, index) => (
//           <div
//             key={index}
//             className="w-[413px] h-[240px] p-[40px] bg-white rounded-[40px] drop-shadow-[4px_4px_12px_#007B8229] shadow-[inset_2px_2px_16px_#FFFFFF14] flex flex-col gap-[20px]"
//           >
//             <h3 className="w-[333px] h-[68px] text-[#2a2a2a] text-[28px] font-bold leading-[100%]">
//               {item.title}
//             </h3>
//             <p className="w-[333px] h-[72px] text-[#707070] text-[17px] font-[400] leading-[24px]">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// export default StacklyAPIIntegration;
import React from "react";
import bgImage from "../../assets/api/apibg.png";

const integrationData = [
  {
    title: "Interior Design Platforms",
    description:
      "Let your users transform their rooms instantly within your app using AI rendering.",
  },
  {
    title: "Architectural SaaS Tools",
    description:
      "Integrate real-time visualization of floor plans, facades, and elevations.",
  },
  {
    title: "Home Renovation Platforms",
    description:
      "Enable users to preview renovation ideas directly on your website.",
  },
  {
    title: "E-Commerce & Furniture Brands",
    description:
      "Display furniture in realistic settings using AI-generated room mockups.",
  },
  {
    title: "Real Estate Marketplaces",
    description:
      "Offer virtual staging with one click, enhancing property listings.",
  },
  {
    title: "Home Builder Apps",
    description:
      "Let buyers preview customized homes with different themes and materials.",
  },
];

const StacklyAPIIntegration = () => {
  return (
    <div
      className="w-full py-16 px-4 md:px-8 lg:px-16 bg-black flex flex-col items-center gap-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black">
        Who Can <span className="text-[#00D9D0]">Integrate</span> StacklyAI API?
      </h2>

      {/* Paragraph */}
      <p className="text-base sm:text-lg text-white text-center max-w-[700px] leading-relaxed">
        Our API is designed for platforms and businesses that want to bring visual intelligence into their own systems.
      </p>

      {/* Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {integrationData.map((item, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 bg-white rounded-[30px] shadow-md shadow-[#007B8229] flex flex-col gap-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#2a2a2a]">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-[#707070] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StacklyAPIIntegration;

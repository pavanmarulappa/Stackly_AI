// import React from "react";

// export default function HeroProducts() {
//   return (
//     <div className="px-[20px] sm:px-[50px] pb-[20px] w-full">
//       <div className="w-full  min-h-[208px]  my-[20px] sm:my-[60px] text-center flex flex-col justify-center items-center gap-[24px]">
//         <h1 className="max-w-[969px] w-full min-h-[156px] text-[#2a2a2a] text-[58px] font-[700] md:text-[58px] mb-[10px] sm:text-[50px] leading-[78px] text-center">
//           Discover the <span className="text-[#009A98]">Future of Space </span>
//           Transformation
//         </h1>
//         <p className="text-[20px] text-[#000000] leading-[28px] font-[400] text-center">
//           Smart AI Solutions for Interiors, Exteriors, and Outdoors
//         </p>
//       </div>

//       <div className="flex flex-wrap justify-center items-center gap-[20px] mt-[40px]">
//         {[
//           "Living Room",
//           "Bedroom",
//           "Kitchen",
//           "Dining Room",
//           "Bathroom",
//           "Home Office",
//           "Kids’ Room",
//           "Library",
//           "Walk-In Closet",
//           "Hallway",
//           "Foyer",
//           "Laundry Room",
//           "Guest Room",
//           "Study Room",
//           "Entertainment Room",
//           "Home Gym",
//           "Home Theater",
//         ].map((item, index) => (
//           <p
//             key={index}
//             className="rounded-full cursor-pointer border-2 border-dashed border-[#007b82] p-2 sm:px-[15px] sm:py-[10px] w-fit"
//           >
//             {item}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }
// import React from "react";

// export default function HeroProducts() {
//   return (
//     <div>
//   {/* ----- Original Div (Hidden below 441px) ----- */}
//   <div className="max-[440px]:hidden px-[20px] sm:px-[50px] pb-[20px] w-full">
//     <div className="w-full min-h-[208px] my-[20px] sm:my-[60px] text-center flex flex-col justify-center items-center gap-[24px]">
//       <h1 className="max-w-[969px] w-full min-h-[156px] text-[#2a2a2a] text-[58px] font-[700] md:text-[58px] mb-[10px] sm:text-[50px] leading-[78px] text-center">
//         Discover the <span className="text-[#009A98]">Future of Space </span>
//         Transformation
//       </h1>
//       <p className="text-[20px] text-[#000000] leading-[28px] font-[400] text-center">
//         Smart AI Solutions for Interiors, Exteriors, and Outdoors
//       </p>
//     </div>

//     <div className="flex flex-wrap justify-center items-center gap-[20px] mt-[40px]">
//       {[
//         "Living Room",
//         "Bedroom",
//         "Kitchen",
//         "Dining Room",
//         "Bathroom",
//         "Home Office",
//         "Kids’ Room",
//         "Library",
//         "Walk-In Closet",
//         "Hallway",
//         "Foyer",
//         "Laundry Room",
//         "Guest Room",
//         "Study Room",
//         "Entertainment Room",
//         "Home Gym",
//         "Home Theater",
//       ].map((item, index) => (
//         <p
//           key={index}
//           className="rounded-full cursor-pointer border-2 border-dashed border-[#007b82] p-2 sm:px-[15px] sm:py-[10px] w-fit"
//         >
//           {item}
//         </p>
//       ))}
//     </div>
//   </div>

//   {/* ----- Mobile Div (Visible only below 441px) ----- */}
//   <div className="min-[441px]:hidden flex flex-col w-[440px] h-[411px] px-[20px] pt-[40px] pb-[40px] gap-[32px]">

//    <div className="w-[400px] h-[85px] my-[15px] text-center flex flex-col justify-center items-center gap-[20px]">

//     <h1 className="w-[400px] h-[37px] text-center font-[700] text-[20px] leading-[20px] tracking-[0px] text-[#2a2a2a] flex flex-col items-center justify-between font-['Inter'] max-[440px]:gap-[4px]">
//   <span>
//     Discover the <span className="text-[#009A98]">Future of Space</span>
//   </span>
//   <span>Transformation</span>
// </h1>



//       <p className="w-[400px] h-[28px] text-[14px] leading-[28px] tracking-[0px] font-[400] text-center text-[#000000] font-['Inter']">
//   Smart AI Solutions for Interiors, Exteriors, and Outdoors
// </p>

//     </div>

// <div className="flex flex-wrap justify-center items-center w-[400px] h-[214px] px-[8px] gap-[12px]">
//   {[
//     { label: "Living Room", width: "w-[95px]", height: "h-[31px]" },
//     { label: "Home Gym", width: "w-[88px]", height: "h-[31px]" },
//     { label: "Home Theater", width: "w-[106px]", height: "h-[31px]" },
//     { label: "Kids’ Room", width: "w-[88px]", height: "h-[31px]" },
//     { label: "Guest Room", width: "w-[94px]", height: "h-[31px]" },
//     { label: "Bedroom", width: "w-[76px]", height: "h-[31px]" },
//     { label: "Library", width: "w-[65px]", height: "h-[31px]" },
//     { label: "Study Room", width: "w-[94px]", height: "h-[31px]" },
//     { label: "Kitchen", width: "w-[69px]", height: "h-[31px]" },
//     { label: "Walk-In Closet", width: "w-[108px]", height: "h-[31px]" },
//     { label: "Entertainment Room", width: "w-[142px]", height: "h-[31px]" },
//     { label: "Dining Room", width: "w-[97px]", height: "h-[31px]" },
//     { label: "Hallway", width: "w-[70px]", height: "h-[31px]" },
//     { label: "Foyer", width: "w-[56px]", height: "h-[31px]" },
//     { label: "Bathroom", width: "w-[80px]", height: "h-[31px]" },
//     { label: "Laundry Room", width: "w-[107px]", height: "h-[31px]" },
//     { label: "Home Office", width: "w-[96px]", height: "h-[31px]" },
//   ].map((item, index) => (
//     <div
//       key={index}
//       className="p-[1px] rounded-full bg-gradient-to-r from-[#007B82] to-[#00B0BA]"
//     >
//       <p
//         className={`flex items-center justify-center ${item.width} ${item.height} rounded-[100px] bg-white text-[#007B82] text-[10px] font-medium font-['Inter'] whitespace-nowrap px-[12px] py-[8px] gap-[10px]`}
//       >
//         {item.label}
//       </p>
//     </div>
//   ))}
// </div>

//   </div>
// </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import blur from "../../assets/product-pg/Blur.png"
import arrow from "../../assets/home/Arrow.png"
import group from "../../assets/product-pg/groupimg.png"

import drag1 from "../../assets/product-pg/drag1.png"
import drag2 from "../../assets/product-pg/drag2.png"
import drag3 from "../../assets/product-pg/drag3.png"
import drag4 from "../../assets/product-pg/drag4.png"
import drag5 from "../../assets/product-pg/drag5.png"
import drag6 from "../../assets/product-pg/drag6.png"
import drag7 from "../../assets/product-pg/drag7.png"
import drag8 from "../../assets/product-pg/drag8.png"
import drag9 from "../../assets/product-pg/drag9.png"
import drag10 from "../../assets/product-pg/drag10.png"

export default function HeroProducts() {
  return (

  //  NEW FIGMA DISGINE
<section
  className="relative w-full h-[1354px] bg-black opacity-100 -mt-[82px] pt-[82px] overflow-hidden"
  style={{ transform: "rotate(0deg)" }}
>
  {/* Blurred Background Circle */}
  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[715px] opacity-50 bg-cover bg-center rounded-full"
    style={{ backgroundImage: `url(${blur})` }}
  ></div>

  {/* Marquee Section */}
  <div className="h-[46px] marquee-container max-[440px]:w-[440px] max-[440px]:h-[46px]">
    <div className="marquee-content">
      <span className="marquee-text text-[16px]">
        Hey! It looks like you are from USA. We support Purchasing Power
        Parity pricing, so enjoy 50% off on your subscription. Use code:
        abc589
      </span>
      <span className="marquee-text text-[16px]">
        Hey! It looks like you are from USA. We support Purchasing Power
        Parity pricing, so enjoy 50% off on your subscription. Use code:
        abc589
      </span>
    </div>
  </div>

  {/* Main Centered Content */}
  <div className="absolute top-[203px] left-1/2 -translate-x-1/2 w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 flex flex-col gap-[64px]">

    {/* Hero Section */}
    <div className="w-full max-w-[836px] mx-auto flex flex-col items-center gap-[30px] text-white text-center">
      <div className="h-[27px]">
        <p className="text-[16px] sm:text-[18px] leading-[100%] font-poppins font-[400]">
          STACKLY AI
        </p>
      </div>

      <div>
        <h1 className="lora-text text-[32px] sm:text-[42px] md:text-[52px] leading-[110%] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#CDA8FC]">
          Smarter Design for Every Space You Live and Love
        </h1>
      </div>

      <div>
        <p className="font-[Inter] font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-[140%]">
          Experience intelligent design solutions crafted to enhance interiors, exteriors and outdoor spaces with seamless AI precision
        </p>
      </div>

      <Link to="/sign-in">
  <div className="w-[158px] h-[44px] px-[30px] py-[10px] gap-[10px] flex items-center justify-center rounded-[30px] border border-[#C22CA299] bg-[linear-gradient(95.92deg,rgba(138,56,245,0.5)_15.32%,rgba(194,44,162,0.5)_99.87%)] cursor-pointer">
    <div className="w-[64px] h-[19px] text-white text-[16px] leading-[100%] font-medium font-[Inter]">
      Try Now
    </div>
    <div className="w-[24px] h-[24px]">
      <img src={arrow} alt="icon" className="w-full h-full" />
    </div>
  </div>
</Link>

    </div>

    {/* Latest Design Trends Section */}
    <div className="w-full flex flex-col items-center gap-[44px]">
      {/* Title */}
      <div className="w-full max-w-[727px] h-[94px] flex flex-col items-center gap-[12px] text-center">
        <p className="text-white text-[52px] leading-[140%] font-[400] lancelot-text">
          Latest Design Trends
        </p>
        <p className="text-white text-[18px] leading-[100%] font-[400] poppins-text">
          Curated ideas for modern living
        </p>
      </div>

      {/* Full-Width Image Container */}
     <div className="w-screen max-w-none h-[449.14px] flex gap-[6px] px-0 mx-0">
  {/* Content here */}

<div
  className="w-[573px] h-[449.14px] opacity-100"
  style={{ transform: "rotate(0deg)" }}
>
  {/* Top image (drag1) with custom clipping */}
  <div className="relative w-[573px] h-[250.98px] border-[0.58px] border-gray-300 overflow-hidden">
    <img
      src={drag1}
      alt="Image"
      className="absolute top-[-68px] left-[-1px] w-[574px] h-[383px] object-cover opacity-100"
    />
  </div>

  {/* Bottom image (drag2) */}
  <div className="w-[287px] h-[192.16px] flex gap-[6px] opacity-100">
    <img
      src={drag2} // Replace with your image import
      alt="Image"
      className="w-[286.5px] h-[192.16px] object-cover opacity-100 border border-gray-300"
      style={{ transform: "rotate(0deg)", borderWidth: "0.58px" }}
    />
  </div>
</div>



</div>

    </div>
  </div>
</section>






  );
}
// import React from "react";
// import Tik from "../../assets/pricing-pg/tik.png";
// import Silver from "../../assets/pricing-pg/silver.png";
// import Page from "../../assets/pricing-pg/page.png";
// import Gold from "../../assets/pricing-pg/grpGold.png";
// import DarkPg from "../../assets/pricing-pg/darkPg.png";
// import Rarrow from "../../assets/pricing-pg/Rarrow.png";
// import { Link } from "react-router-dom";

// export default function AfterUiPlans() {
//   return (
//     <div>
//       <section className="w-full h-[1600px] flex justify-center items-center bg-[#021314]">
//         <div className="w-[1325px] h-[1201px] flex flex-col justify-start items-center gap-[116px]">
//           <div className="w-[1018px] h-[414px] flex flex-col justify-start items-center gap-[61px]">
//             <div className="w-[743px] h-[128px] font-medium text-[48px] leading-[64px] text-center text-white">
//               Find the right plan that suits your needs
//             </div>

//             <div className="w-[1018px] h-[90px] text-[32px] text-center leading-[140%]  font-medium text-white">
//               Start free or unlock premium features.choose what fits your
//               journey best.
//             </div>

//           </div>

//           {/* plan  */}

//           <div className="w-[1325px] h-[810px] flex justify-between items-center gap-[43px]">
//             {/* plan-1  */}

//             <div className="w-[413px] h-[810px] min-w-[340px] rounded-[12px] px-[20px] py-[40px] bg-[#FFFFFF1A] border-[1px] border-solid border-[white] shadow-[0px_2px_12px_0] shadow-[#007B8229] gap-[32px]">
//               <div className="w-[373px] min-h-[232px] flex flex-col justify-start items-start gap-[34px]">
//                 <div className="w-[360px] min-h-[32px] font-bold text-[32px] text-[#00b0ba]">
//                   Basic{" "}
//                   <span className="text-[white] text-[23px]"> (Free) </span>
//                 </div>
//                 <div className="font-[400] text-[16px] text-[white]">
//                   Perfect for personal or casual users who want a simple idea of
//                   interior design.
//                 </div>
//                 <div className="font-bold text-[32px] text-[white] leading-4x1">
//                   $0{" "}
//                   <span className="font-[400] text-lg leading-lg text-[white]">
//                     /per month
//                   </span>
//                 </div>
//                 <Link to="/AfterBilling">
//                   <div className="w-[373px] h-[46px] bg-[white] rounded-[8px] border-[1px] border-solid border-[#007B82] text-[#007B82] flex justify-center items-center hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA] hover:text-white">
//                     Get Started
//                   </div>
//                 </Link>
//               </div>

//               <div className="w-[373px] h-[1px] border-[1px] border-dashed border-[#1A1A1A2E] text-[white]"></div>

//               {/* ticks  */}
//               <div className="w-[373px] min-h-[420px] flex flex-col justify-start items-start gap-[24px] mt-[43px]">
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     10 Room Designs per month
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     Limited AI-generated layouts
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     Basic furniture suggestions
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     Download SD images,no advanced tools
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     Email support (Standard)
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     No customization options
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     No revision support
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     Watermark images
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* plan-2  */}

//             <div className="w-[413px] min-w-[340px] h-[810px] rounded-[12px] px-[20px] py-[40px] bg-gradient-to-b from-[#00B0BA] via-[#FFFFFF1A] to-[#FFFFFF1A] border-[1px] border-solid border-[white] shadow-[0px_2px_12px_0] shadow-[#007B8229] gap-[32px]">
//               <div className="w-[373px] min-h-[349px] flex flex-col justify-start items-start">
//                 <div className="w-[373px] min-h-[349px] flex flex-col justify-start items-start gap-[34px]">
//                   <div className="w-[360px] h-[32px] flex justify-between">
//                     <div className="font-bold text-[32px] leading-xl text-[#FFFFFF]">
//                       Silver
//                     </div>
//                     <img
//                       src={Silver}
//                       alt="silver"
//                       className="w-[85.24px] h-[80px]"
//                     />
//                   </div>
//                   <div className="font-[400] text-[16px] text-[white]">
//                     Ideal for homeowners or renters looking for more creative
//                     control and polished designs.
//                   </div>
//                   <div className="w-[374px] h-[52px] font-bold text-[32px] leading-4x1 text-[white]">
//                     $29 or ₹2,399{" "}
//                     <span className="font-[400] text-lg leading-lg text-[white]">
//                       {" "}
//                       /per month
//                     </span>
//                   </div>
//                   <div className="w-[374px] h-[90px] rounded-[12px] px-[78px] py-[18px] flex flex-col justify-center items-center gap-[10px] bg-[#FFFFFF1A] shadow-[0_2px_12px_0] shadow-[#007B8229] shadow-inner-[2px_2px_12px_0] shadow-inner-[#FFFFFF14]">
//                     <div className="font-medium text-[14px] leading-[100%] text-center text-[white]">
//                       Use code (Get 10%OFF)
//                     </div>
//                     <div className="w-[163px] min-h-[27px] flex gap-[12px]">
//                       <img
//                         src={DarkPg}
//                         alt="page"
//                         className="w-[24px] h-[24px] text-[#00B0BA]"
//                       />
//                       <div className="font-bold text-[22px] text-[#00b0ba]">
//                         STACKLY10
//                       </div>
//                     </div>
//                   </div>
//                   <Link to="/AfterBilling">
//                     {" "}
//                     <div className="w-[373px] h-[46px] rounded-[5px] border-[1px] border-solid border-[#007B82] hover:text-[white] text-[#007B82] bg-white flex justify-center items-center hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA]">
//                       Get Started
//                     </div>
//                   </Link>
//                 </div>

//                 <div className="w-[373px] h-[1px] border-[1px] border-dashed border-[#1A1A1A2E]"></div>

//                 {/* tick  */}

//                 <div className="w-[374px] min-h-[504px] flex flex-col justify-start items-start gap-[24px] mt-[32px]">
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       50 Room Designs per month
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       Advanced AI layout suggestions
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       Access to premium themes & colour palettes
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       Furniture & decor recommendations
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       High-resolution image download
//                     </div>
//                   </div>
//                   <Link>
//                     {" "}
//                     <div className="flex gap-2">
//                       <img
//                         src={Rarrow}
//                         alt="tik"
//                         className="w-[15px] h-[20px] flex items-center justify-center"
//                       />
//                       <div className="font-medium text-lg leading-lg text-[white]">
//                         See 4 more
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* plan-3  */}
//             <div className="w-[413px] h-[810px] min-w-[340px] rounded-[12px] px-[20px] py-[40px] bg-[#FFFFFF1A] border-[1px] border-solid border-[white] shadow-[0px_2px_12px_0] shadow-[#007B8229] gap-[32px] overflow-hidden">
//               <div className="w-[374px] min-h-[364px] flex flex-col justify-start items-start">
//                 <div className="w-[374px] min-h-[364px] flex flex-col justify-start items-start gap-[34px]">
//                   <span className="w-[122px] h-[40px] rounded-bl-[16px] px-[10px] py-[4px] flex justify-center items-center bg-gradient-to-b from-[#FFAA17] to-[#99660E] text-[white] font-medium text-[16px] text-center absolute mt-[-41px] ml-[271px] rounded-tr-[13px]">
//                     Most Popular
//                   </span>
//                   <div className="w-[360px] h-[32px] flex justify-between">
//                     <div className="font-bold text-[32px] leading-xl text-[#00b0ba]">
//                       Gold
//                     </div>
//                     <img
//                       src={Gold}
//                       alt="silver"
//                       className="w-[85.24px] h-[80px]"
//                     />
//                   </div>
//                   <div className="font-[400] text-[16px] text-[white]">
//                     Best for professionals, renovators, or anyone seeking
//                     top-tier results and personalization.
//                   </div>
//                   <div className="w-[374px] h-[52px] font-bold text-[32px] leading-4x1 text-[white]">
//                     $59 or ₹4,799{" "}
//                     <span className="font-[400] text-lg leading-lg text-[white]">
//                       {" "}
//                       /per month
//                     </span>
//                   </div>
//                   <div className="w-[374px] h-[90px] rounded-[12px] px-[78px] py-[18px] flex flex-col justify-center items-center gap-[10px] bg-[#FFFFFF1A] shadow-[0_2px_12px_0] shadow-[#007B8229] shadow-inner-[2px_2px_12px_0] shadow-inner-[#FFFFFF14]">
//                     <div className="font-medium text-[14px] leading-[100%] text-center text-[white]">
//                       Use code (Get 10%OFF)
//                     </div>
//                     <div className="w-[163px] min-h-[27px] flex gap-[12px]">
//                       <img
//                         src={DarkPg}
//                         alt="page"
//                         className="w-[24px] h-[24px] text-[#00B0BA]"
//                       />
//                       <div className="font-bold text-[22px] text-[#00b0ba]">
//                         STACKLY20
//                       </div>
//                     </div>
//                   </div>
//                   <Link to="/AfterBilling">
//                     <div className="w-[373px] h-[46px] bg-[white] rounded-[8px] border-[1px] border-solid border-[#007B82] text-[#007B82] flex justify-center items-center hover:text-[white] hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA]">
//                       Get Started
//                     </div>
//                   </Link>
//                 </div>

//                 <div className="w-[373px] h-[1px] border-[1px] border-dashed border-[#1A1A1A2E]"></div>

//                 {/* tick  */}

//                 <div className="w-[374px] min-h-[504px] flex flex-col justify-start items-start gap-[24px] mt-[32px]">
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       Unlimited Room Designs
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       Commercial use upto 3-5 members
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       Fully customized AI designs with layout and lighting
//                       suggestions{" "}
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       Unlimited design revisions
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       3D walk-through visualizations
//                     </div>
//                   </div>
//                   <Link>
//                     {" "}
//                     <div className="flex gap-2">
//                       <img
//                         src={Rarrow}
//                         alt="tik"
//                         className="w-[15px] h-[20px] flex items-center justify-center"
//                       />
//                       <div className="font-medium text-lg leading-lg text-[white]">
//                         See 4 more
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import Tik from "../../assets/pricing-pg/tik.png";
// import Silver from "../../assets/pricing-pg/silver.png";
// import Page from "../../assets/pricing-pg/page.png";
// import Gold from "../../assets/pricing-pg/grpGold.png";
// import DarkPg from "../../assets/pricing-pg/darkPg.png";
// import Rarrow from "../../assets/pricing-pg/Rarrow.png";
// import { Link } from "react-router-dom";

// export default function AfterUiPlans() {
//   const [showSilverMore, setShowSilverMore] = useState(false);
//   const [showGoldMore, setShowGoldMore] = useState(false);

//   const toggleSilverMore = () => {
//     setShowSilverMore(!showSilverMore);
//   };

//   const toggleGoldMore = () => {
//     setShowGoldMore(!showGoldMore);
//   };

//   return (
//     <div>
//       <section className="w-full h-[1600px] flex justify-center items-center bg-[#021314]">
//         <div className="w-[1325px] h-[1201px] flex flex-col justify-start items-center gap-[116px]">
//           <div className="w-[1018px] h-[414px] flex flex-col justify-start items-center gap-[61px]">
//             <div className="w-[743px] h-[128px] font-medium text-[48px] leading-[64px] text-center text-white">
//               Find the right plan that suits your needs
//             </div>

//             <div className="w-[1018px] h-[90px] text-[32px] text-center leading-[140%]  font-medium text-white">
//               Start free or unlock premium features.choose what fits your
//               journey best.
//             </div>
//           </div>

//           {/* plan  */}

//           <div className="w-[1325px] h-[810px] flex justify-between items-center gap-[43px]">
//             {/* plan-1  */}

//             <div className="w-[413px] h-[810px] min-w-[340px] rounded-[12px] px-[20px] py-[40px] bg-[#FFFFFF1A] border-[1px] border-solid border-[white] shadow-[0px_2px_12px_0] shadow-[#007B8229] gap-[32px]">
//               <div className="w-[373px] min-h-[232px] flex flex-col justify-start items-start gap-[34px]">
//                 <div className="w-[360px] min-h-[32px] font-bold text-[32px] text-[#00b0ba]">
//                   Basic{" "}
//                   <span className="text-[white] text-[23px]"> (Free) </span>
//                 </div>
//                 <div className="font-[400] text-[16px] text-[white]">
//                   Perfect for personal or casual users who want a simple idea of
//                   interior design.
//                 </div>
//                 <div className="font-bold text-[32px] text-[white] leading-4x1">
//                   $0{" "}
//                   <span className="font-[400] text-lg leading-lg text-[white]">
//                     /per month
//                   </span>
//                 </div>
//                 <Link to="/AfterBilling">
//                   <div className="w-[373px] h-[46px] bg-[white] rounded-[8px] border-[1px] border-solid border-[#007B82] text-[#007B82] flex justify-center items-center hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA] hover:text-white">
//                     Get Started
//                   </div>
//                 </Link>
//               </div>

//               <div className="w-[373px] h-[1px] border-[1px] border-dashed border-[#1A1A1A2E] text-[white]"></div>

//               {/* ticks  */}
//               <div className="w-[373px] min-h-[420px] flex flex-col justify-start items-start gap-[24px] mt-[43px]">
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     10 Room Designs per month
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     Limited AI-generated layouts
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     Basic furniture suggestions
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     Download SD images,no advanced tools
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     Email support (Standard)
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     No customization options
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     No revision support
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                   <div className="font-medium text-lg leading-lg text-[white]">
//                     Watermark images
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* plan-2  */}

//             <div className="w-[413px] min-w-[340px] h-[810px] min-h-[810px] rounded-[12px] px-[20px] py-[40px] bg-gradient-to-b from-[#00B0BA] via-[#FFFFFF1A] to-[#FFFFFF1A] border-[1px] border-solid border-[white] shadow-[0px_2px_12px_0] shadow-[#007B8229] gap-[32px]">
//               <div className="w-[373px] min-h-[349px] flex flex-col justify-start items-start">
//                 <div className="w-[373px] min-h-[349px] flex flex-col justify-start items-start gap-[34px]">
//                   <div className="w-[360px] h-[32px] flex justify-between">
//                     <div className="font-bold text-[32px] leading-xl text-[#FFFFFF]">
//                       Silver
//                     </div>
//                     <img
//                       src={Silver}
//                       alt="silver"
//                       className="w-[85.24px] h-[80px]"
//                     />
//                   </div>
//                   <div className="font-[400] text-[16px] text-[white]">
//                     Ideal for homeowners or renters looking for more creative
//                     control and polished designs.
//                   </div>
//                   <div className="w-[374px] h-[52px] font-bold text-[32px] leading-4x1 text-[white]">
//                     $29 or ₹2,399{" "}
//                     <span className="font-[400] text-lg leading-lg text-[white]">
//                       {" "}
//                       /per month
//                     </span>
//                   </div>
//                   <div className="w-[374px] h-[90px] rounded-[12px] px-[78px] py-[18px] flex flex-col justify-center items-center gap-[10px] bg-[#FFFFFF1A] shadow-[0_2px_12px_0] shadow-[#007B8229] shadow-inner-[2px_2px_12px_0] shadow-inner-[#FFFFFF14]">
//                     <div className="font-medium text-[14px] leading-[100%] text-center text-[white]">
//                       Use code (Get 10%OFF)
//                     </div>
//                     <div className="w-[163px] min-h-[27px] flex gap-[12px]">
//                       <img
//                         src={DarkPg}
//                         alt="page"
//                         className="w-[24px] h-[24px] text-[#00B0BA]"
//                       />
//                       <div className="font-bold text-[22px] text-[#00b0ba]">
//                         STACKLY10
//                       </div>
//                     </div>
//                   </div>
//                   <Link to="/AfterBilling">
//                     {" "}
//                     <div className="w-[373px] h-[46px] rounded-[5px] border-[1px] border-solid border-[#007B82] hover:text-[white] text-[#007B82] bg-white flex justify-center items-center hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA]">
//                       Get Started
//                     </div>
//                   </Link>
//                 </div>

//                 <div className="w-[373px] h-[1px] border-[1px] border-dashed border-[#1A1A1A2E]"></div>

//                 {/* tick  */}

//                 <div className="w-[374px] min-h-[504px] flex flex-col justify-start items-start gap-[24px] mt-[32px]">
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       50 Room Designs per month
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       Advanced AI layout suggestions
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       Access to premium themes & colour palettes
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       Furniture & decor recommendations
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       High-resolution image download
//                     </div>
//                   </div>

//                   {/* Additional Silver features */}
//                   {showSilverMore && (
//                     <>
//                       <div className="flex gap-2">
//                         <img
//                           src={Tik}
//                           alt="tik"
//                           className="w-[28px] h-[28px]"
//                         />
//                         <div className="font-medium text-lg leading-lg text-[white]">
//                           Priority email support
//                         </div>
//                       </div>
//                       <div className="flex gap-2">
//                         <img
//                           src={Tik}
//                           alt="tik"
//                           className="w-[28px] h-[28px]"
//                         />
//                         <div className="font-medium text-lg leading-lg text-[white]">
//                           Basic customization options
//                         </div>
//                       </div>
//                       <div className="flex gap-2">
//                         <img
//                           src={Tik}
//                           alt="tik"
//                           className="w-[28px] h-[28px]"
//                         />
//                         <div className="font-medium text-lg leading-lg text-[white]">
//                           Limited revisions (up to 3)
//                         </div>
//                       </div>
//                       <div className="flex gap-2">
//                         <img
//                           src={Tik}
//                           alt="tik"
//                           className="w-[28px] h-[28px]"
//                         />
//                         <div className="font-medium text-lg leading-lg text-[white]">
//                           No watermark on images
//                         </div>
//                       </div>
//                     </>
//                   )}

//                   <div
//                     className="flex gap-2 cursor-pointer"
//                     onClick={toggleSilverMore}
//                   >
//                     <img
//                       src={Rarrow}
//                       alt="tik"
//                       className={`w-[15px] h-[20px] flex items-center justify-center transition-transform ${
//                         showSilverMore ? "transform rotate-90" : ""
//                       }`}
//                     />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       {showSilverMore ? "Show less" : "See 4 more"}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* plan-3  */}
//             <div className="w-[413px] h-[810px] min-w-[340px] rounded-[12px] px-[20px] py-[40px] bg-[#FFFFFF1A] border-[1px] border-solid border-[white] shadow-[0px_2px_12px_0] shadow-[#007B8229] gap-[32px] overflow-hidden">
//               <div className="w-[374px] min-h-[364px] flex flex-col justify-start items-start">
//                 <div className="w-[374px] min-h-[364px] flex flex-col justify-start items-start gap-[34px]">
//                   <span className="w-[122px] h-[40px] rounded-bl-[16px] px-[10px] py-[4px] flex justify-center items-center bg-gradient-to-b from-[#FFAA17] to-[#99660E] text-[white] font-medium text-[16px] text-center absolute mt-[-41px] ml-[271px] rounded-tr-[13px]">
//                     Most Popular
//                   </span>
//                   <div className="w-[360px] h-[32px] flex justify-between">
//                     <div className="font-bold text-[32px] leading-xl text-[#00b0ba]">
//                       Gold
//                     </div>
//                     <img
//                       src={Gold}
//                       alt="silver"
//                       className="w-[85.24px] h-[80px]"
//                     />
//                   </div>
//                   <div className="font-[400] text-[16px] text-[white]">
//                     Best for professionals, renovators, or anyone seeking
//                     top-tier results and personalization.
//                   </div>
//                   <div className="w-[374px] h-[52px] font-bold text-[32px] leading-4x1 text-[white]">
//                     $59 or ₹4,799{" "}
//                     <span className="font-[400] text-lg leading-lg text-[white]">
//                       {" "}
//                       /per month
//                     </span>
//                   </div>
//                   <div className="w-[374px] h-[90px] rounded-[12px] px-[78px] py-[18px] flex flex-col justify-center items-center gap-[10px] bg-[#FFFFFF1A] shadow-[0_2px_12px_0] shadow-[#007B8229] shadow-inner-[2px_2px_12px_0] shadow-inner-[#FFFFFF14]">
//                     <div className="font-medium text-[14px] leading-[100%] text-center text-[white]">
//                       Use code (Get 10%OFF)
//                     </div>
//                     <div className="w-[163px] min-h-[27px] flex gap-[12px]">
//                       <img
//                         src={DarkPg}
//                         alt="page"
//                         className="w-[24px] h-[24px] text-[#00B0BA]"
//                       />
//                       <div className="font-bold text-[22px] text-[#00b0ba]">
//                         STACKLY20
//                       </div>
//                     </div>
//                   </div>
//                   <Link to="/AfterBilling">
//                     <div className="w-[373px] h-[46px] bg-[white] rounded-[8px] border-[1px] border-solid border-[#007B82] text-[#007B82] flex justify-center items-center hover:text-[white] hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA]">
//                       Get Started
//                     </div>
//                   </Link>
//                 </div>

//                 <div className="w-[373px] h-[1px] border-[1px] border-dashed border-[#1A1A1A2E]"></div>

//                 {/* tick  */}

//                 <div className="w-[374px] min-h-[504px] flex flex-col justify-start items-start gap-[24px] mt-[32px]">
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       Unlimited Room Designs
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       Commercial use upto 3-5 members
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       Fully customized AI designs with layout and lighting
//                       suggestions{" "}
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       Unlimited design revisions
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       3D walk-through visualizations
//                     </div>
//                   </div>

//                   {/* Additional Gold features */}
//                   {showGoldMore && (
//                     <>
//                       <div className="flex gap-2">
//                         <img
//                           src={Tik}
//                           alt="tik"
//                           className="w-[28px] h-[28px]"
//                         />
//                         <div className="font-medium text-lg leading-lg text-[white]">
//                           Dedicated support with 24-hour response time
//                         </div>
//                       </div>
//                       <div className="flex gap-2">
//                         <img
//                           src={Tik}
//                           alt="tik"
//                           className="w-[28px] h-[28px]"
//                         />
//                         <div className="font-medium text-lg leading-lg text-[white]">
//                           Advanced customization tools
//                         </div>
//                       </div>
//                       <div className="flex gap-2">
//                         <img
//                           src={Tik}
//                           alt="tik"
//                           className="w-[28px] h-[28px]"
//                         />
//                         <div className="font-medium text-lg leading-lg text-[white]">
//                           Export designs in multiple formats
//                         </div>
//                       </div>
//                       <div className="flex gap-2">
//                         <img
//                           src={Tik}
//                           alt="tik"
//                           className="w-[28px] h-[28px]"
//                         />
//                         <div className="font-medium text-lg leading-lg text-[white]">
//                           Access to exclusive design templates
//                         </div>
//                       </div>
//                     </>
//                   )}

//                   <div
//                     className="flex gap-2 cursor-pointer"
//                     onClick={toggleGoldMore}
//                   >
//                     <img
//                       src={Rarrow}
//                       alt="tik"
//                       className={`w-[15px] h-[20px] flex items-center justify-center transition-transform ${
//                         showGoldMore ? "transform rotate-90" : ""
//                       }`}
//                     />
//                     <div className="font-medium text-lg leading-lg text-[white]">
//                       {showGoldMore ? "Show less" : "See 4 more"}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState } from "react";
import Tik from "../../assets/pricing-pg/tik.png";
import Silver from "../../assets/pricing-pg/silver.png";
import Page from "../../assets/pricing-pg/page.png";
import Gold from "../../assets/pricing-pg/grpGold.png";
import DarkPg from "../../assets/pricing-pg/darkPg.png";
import Rarrow from "../../assets/pricing-pg/Rarrow.png";
import { Link } from "react-router-dom";

export default function AfterUiPlans() {
  const [showSilverMore, setShowSilverMore] = useState(false);
  const [showGoldMore, setShowGoldMore] = useState(false);

  const toggleSilverMore = () => {
    setShowSilverMore(!showSilverMore);
  };

  const toggleGoldMore = () => {
    setShowGoldMore(!showGoldMore);
  };

  return (
    <div>
      <section className="w-full h-[1600px] flex justify-center items-center bg-[#021314]">
        <div className="w-[1325px] h-[1201px] flex flex-col justify-start items-center gap-[116px]">
          <div className="w-[1018px] h-[414px] flex flex-col justify-start items-center gap-[61px]">
            <div className="w-[743px] h-[128px] font-medium text-[48px] leading-[64px] text-center text-white">
              Find the right plan that suits your needs
            </div>

            <div className="w-[1018px] h-[90px] text-[32px] text-center leading-[140%]  font-medium text-white">
              Start free or unlock premium features.choose what fits your
              journey best.
            </div>
          </div>

          {/* plan  */}

          <div className="w-[1325px] h-[810px] flex justify-between items-center gap-[43px]">
            {/* plan-1  */}

            <div className="w-[413px] h-[810px] min-w-[340px] rounded-[12px] px-[20px] py-[40px] bg-[#FFFFFF1A] border-[1px] border-solid border-[white] shadow-[0px_2px_12px_0] shadow-[#007B8229] gap-[32px]">
              <div className="w-[373px] min-h-[232px] flex flex-col justify-start items-start gap-[34px]">
                <div className="w-[360px] min-h-[32px] font-bold text-[32px] text-[#00b0ba]">
                  Basic{" "}
                  <span className="text-[white] text-[23px]"> (Free) </span>
                </div>
                <div className="font-[400] text-[16px] text-[white]">
                  Perfect for personal or casual users who want a simple idea of
                  interior design.
                </div>
                <div className="font-bold text-[32px] text-[white] leading-4x1">
                  $0{" "}
                  <span className="font-[400] text-lg leading-lg text-[white]">
                    /per month
                  </span>
                </div>
                <Link to="/AfterBilling">
                  <div className="w-[373px] h-[46px] bg-[white] rounded-[8px] border-[1px] border-solid border-[#007B82] text-[#007B82] flex justify-center items-center hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA] hover:text-white">
                    Get Started
                  </div>
                </Link>
              </div>

              <div className="w-[373px] h-[1px] border-[1px] border-dashed border-[#1A1A1A2E] text-[white]"></div>

              {/* ticks  */}
              <div className="w-[373px] min-h-[420px] flex flex-col justify-start items-start gap-[24px] mt-[43px]">
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[white]">
                    10 Room Designs per month
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[white]">
                    Limited AI-generated layouts
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[white]">
                    Basic furniture suggestions
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[white]">
                    Download SD images,no advanced tools
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[white]">
                    Email support (Standard)
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[white]">
                    No customization options
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[white]">
                    No revision support
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[white]">
                    Watermark images
                  </div>
                </div>
              </div>
            </div>

            {/* plan-2  */}

            <div
              className={`w-[413px] min-w-[340px] ${
                showSilverMore ? "h-[1010px]" : "h-[810px]"
              } rounded-[12px] px-[20px] py-[40px] bg-gradient-to-b from-[#00B0BA] via-[#FFFFFF1A] to-[#FFFFFF1A] border-[1px] border-solid border-[white] shadow-[0px_2px_12px_0] shadow-[#007B8229] gap-[32px] transition-all duration-300`}
            >
              <div className="w-[373px] min-h-[349px] flex flex-col justify-start items-start">
                <div className="w-[373px] min-h-[349px] flex flex-col justify-start items-start gap-[34px]">
                  <div className="w-[360px] h-[32px] flex justify-between">
                    <div className="font-bold text-[32px] leading-xl text-[#FFFFFF]">
                      Silver
                    </div>
                    <img
                      src={Silver}
                      alt="silver"
                      className="w-[85.24px] h-[80px]"
                    />
                  </div>
                  <div className="font-[400] text-[16px] text-[white]">
                    Ideal for homeowners or renters looking for more creative
                    control and polished designs.
                  </div>
                  <div className="w-[374px] h-[52px] font-bold text-[32px] leading-4x1 text-[white]">
                    $29 or ₹2,399{" "}
                    <span className="font-[400] text-lg leading-lg text-[white]">
                      {" "}
                      /per month
                    </span>
                  </div>
                  <div className="w-[374px] h-[90px] rounded-[12px] px-[78px] py-[18px] flex flex-col justify-center items-center gap-[10px] bg-[#FFFFFF1A] shadow-[0_2px_12px_0] shadow-[#007B8229] shadow-inner-[2px_2px_12px_0] shadow-inner-[#FFFFFF14]">
                    <div className="font-medium text-[14px] leading-[100%] text-center text-[white]">
                      Use code (Get 10%OFF)
                    </div>
                    <div className="w-[163px] min-h-[27px] flex gap-[12px]">
                      <img
                        src={DarkPg}
                        alt="page"
                        className="w-[24px] h-[24px] text-[#00B0BA]"
                      />
                      <div className="font-bold text-[22px] text-[#00b0ba]">
                        STACKLY10
                      </div>
                    </div>
                  </div>
                  <Link to="/AfterBilling">
                    {" "}
                    <div className="w-[373px] h-[46px] rounded-[5px] border-[1px] border-solid border-[#007B82] hover:text-[white] text-[#007B82] bg-white flex justify-center items-center hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA]">
                      Get Started
                    </div>
                  </Link>
                </div>

                <div className="w-[373px] h-[1px] border-[1px] border-dashed border-[#1A1A1A2E]"></div>

                {/* tick  */}

                <div className="w-[374px] min-h-[504px] flex flex-col justify-start items-start gap-[24px] mt-[32px]">
                  <div className="flex gap-2">
                    <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                    <div className="font-medium text-lg leading-lg text-[white]">
                      50 Room Designs per month
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                    <div className="font-medium text-lg leading-lg text-[white]">
                      Advanced AI layout suggestions
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                    <div className="font-medium text-lg leading-lg text-[white]">
                      Access to premium themes & colour palettes
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                    <div className="font-medium text-lg leading-lg text-[white]">
                      Furniture & decor recommendations
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                    <div className="font-medium text-lg leading-lg text-[white]">
                      High-resolution image download
                    </div>
                  </div>

                  {/* Additional Silver features */}
                  {showSilverMore && (
                    <>
                      <div className="flex gap-2">
                        <img
                          src={Tik}
                          alt="tik"
                          className="w-[28px] h-[28px]"
                        />
                        <div className="font-medium text-lg leading-lg text-[white]">
                          Priority email support
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <img
                          src={Tik}
                          alt="tik"
                          className="w-[28px] h-[28px]"
                        />
                        <div className="font-medium text-lg leading-lg text-[white]">
                          Basic customization options
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <img
                          src={Tik}
                          alt="tik"
                          className="w-[28px] h-[28px]"
                        />
                        <div className="font-medium text-lg leading-lg text-[white]">
                          Limited revisions (up to 3)
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <img
                          src={Tik}
                          alt="tik"
                          className="w-[28px] h-[28px]"
                        />
                        <div className="font-medium text-lg leading-lg text-[white]">
                          No watermark on images
                        </div>
                      </div>
                    </>
                  )}

                  <div
                    className="flex gap-2 cursor-pointer"
                    onClick={toggleSilverMore}
                  >
                    <img
                      src={Rarrow}
                      alt="tik"
                      className={`w-[15px] h-[20px] flex items-center justify-center transition-transform ${
                        showSilverMore ? "transform rotate-90" : ""
                      }`}
                    />
                    <div className="font-medium text-lg leading-lg text-[white]">
                      {showSilverMore ? "Show less" : "See 4 more"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* plan-3  */}
            <div
              className={`w-[413px] min-w-[340px] ${
                showGoldMore ? "h-[1050px]" : "h-[810px]"
              } rounded-[12px] px-[20px] py-[40px] bg-[#FFFFFF1A] border-[1px] border-solid border-[white] shadow-[0px_2px_12px_0] shadow-[#007B8229] gap-[32px] transition-all duration-300`}
            >
              <div className="w-[374px] min-h-[364px] flex flex-col justify-start items-start">
                <div className="w-[374px] min-h-[364px] flex flex-col justify-start items-start gap-[34px]">
                  <span className="w-[122px] h-[40px] rounded-bl-[16px] px-[10px] py-[4px] flex justify-center items-center bg-gradient-to-b from-[#FFAA17] to-[#99660E] text-[white] font-medium text-[16px] text-center absolute mt-[-41px] ml-[271px] rounded-tr-[13px]">
                    Most Popular
                  </span>
                  <div className="w-[360px] h-[32px] flex justify-between">
                    <div className="font-bold text-[32px] leading-xl text-[#00b0ba]">
                      Gold
                    </div>
                    <img
                      src={Gold}
                      alt="silver"
                      className="w-[85.24px] h-[80px]"
                    />
                  </div>
                  <div className="font-[400] text-[16px] text-[white]">
                    Best for professionals, renovators, or anyone seeking
                    top-tier results and personalization.
                  </div>
                  <div className="w-[374px] h-[52px] font-bold text-[32px] leading-4x1 text-[white]">
                    $59 or ₹4,799{" "}
                    <span className="font-[400] text-lg leading-lg text-[white]">
                      {" "}
                      /per month
                    </span>
                  </div>
                  <div className="w-[374px] h-[90px] rounded-[12px] px-[78px] py-[18px] flex flex-col justify-center items-center gap-[10px] bg-[#FFFFFF1A] shadow-[0_2px_12px_0] shadow-[#007B8229] shadow-inner-[2px_2px_12px_0] shadow-inner-[#FFFFFF14]">
                    <div className="font-medium text-[14px] leading-[100%] text-center text-[white]">
                      Use code (Get 10%OFF)
                    </div>
                    <div className="w-[163px] min-h-[27px] flex gap-[12px]">
                      <img
                        src={DarkPg}
                        alt="page"
                        className="w-[24px] h-[24px] text-[#00B0BA]"
                      />
                      <div className="font-bold text-[22px] text-[#00b0ba]">
                        STACKLY20
                      </div>
                    </div>
                  </div>
                  <Link to="/AfterBilling">
                    <div className="w-[373px] h-[46px] bg-[white] rounded-[8px] border-[1px] border-solid border-[#007B82] text-[#007B82] flex justify-center items-center hover:text-[white] hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA]">
                      Get Started
                    </div>
                  </Link>
                </div>

                <div className="w-[373px] h-[1px] border-[1px] border-dashed border-[#1A1A1A2E]"></div>

                {/* tick  */}

                <div className="w-[374px] min-h-[504px] flex flex-col justify-start items-start gap-[24px] mt-[32px]">
                  <div className="flex gap-2">
                    <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                    <div className="font-medium text-lg leading-lg text-[white]">
                      Unlimited Room Designs
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                    <div className="font-medium text-lg leading-lg text-[white]">
                      Commercial use upto 3-5 members
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                    <div className="font-medium text-lg leading-lg text-[white]">
                      Fully customized AI designs with layout and lighting
                      suggestions{" "}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                    <div className="font-medium text-lg leading-lg text-[white]">
                      Unlimited design revisions
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                    <div className="font-medium text-lg leading-lg text-[white]">
                      3D walk-through visualizations
                    </div>
                  </div>

                  {/* Additional Gold features */}
                  {showGoldMore && (
                    <>
                      <div className="flex gap-2">
                        <img
                          src={Tik}
                          alt="tik"
                          className="w-[28px] h-[28px]"
                        />
                        <div className="font-medium text-lg leading-lg text-[white]">
                          Dedicated support with 24-hour response time
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <img
                          src={Tik}
                          alt="tik"
                          className="w-[28px] h-[28px]"
                        />
                        <div className="font-medium text-lg leading-lg text-[white]">
                          Advanced customization tools
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <img
                          src={Tik}
                          alt="tik"
                          className="w-[28px] h-[28px]"
                        />
                        <div className="font-medium text-lg leading-lg text-[white]">
                          Export designs in multiple formats
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <img
                          src={Tik}
                          alt="tik"
                          className="w-[28px] h-[28px]"
                        />
                        <div className="font-medium text-lg leading-lg text-[white]">
                          Access to exclusive design templates
                        </div>
                      </div>
                    </>
                  )}

                  <div
                    className="flex gap-2 cursor-pointer"
                    onClick={toggleGoldMore}
                  >
                    <img
                      src={Rarrow}
                      alt="tik"
                      className={`w-[15px] h-[20px] flex items-center justify-center transition-transform ${
                        showGoldMore ? "transform rotate-90" : ""
                      }`}
                    />
                    <div className="font-medium text-lg leading-lg text-[white]">
                      {showGoldMore ? "Show less" : "See 4 more"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
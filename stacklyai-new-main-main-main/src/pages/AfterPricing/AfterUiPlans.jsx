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

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Tik from "../../assets/pricing-pg/tik.png";
// import Silver from "../../assets/pricing-pg/silver.png";
// import Gold from "../../assets/pricing-pg/grpGold.png";
// import DarkPg from "../../assets/pricing-pg/darkPg.png";
// import BgImage from "../../assets/pricing-pg/bg-plan.png";

// export default function AfterUiPlans() {
//   const [expandedPlans, setExpandedPlans] = useState({});

//   const toggleExpand = (plan) => {
//     setExpandedPlans((prev) => ({
//       ...prev,
//       [plan]: !prev[plan],
//     }));
//   };

//   const plans = [
//     {
//       name: "Basic",
//       price: "$0",
//       subtitle: "(Free)",
//       description:
//         "Perfect for personal or casual users who want a simple idea of interior design.",
//       image: null,
//       priceDetail: "/per month",
//       features: [
//         "10 Room Designs per month",
//         "Limited AI-generated layouts",
//         "Basic furniture suggestions",
//         "Download SD images, no advanced tools",
//         "Email support (Standard)",
//         "No customization options",
//         "No revision support",
//         "Watermark images",
//       ],
//       button: null,
//       highlight: "#00b0ba",
//       background: "#FFFFFF1A",
//     },
//     {
//       name: "Silver",
//       price: "$29 or ₹2,399",
//       subtitle: "",
//       description:
//         "Ideal for homeowners or renters looking for more creative control and polished designs.",
//       image: Silver,
//       priceDetail: "/per month",
//       offerCode: "STACKLY10",
//       offerText: "Use code (Get 10%OFF)",
//       features: [
//         "25 Room Designs per month",
//         "Unlimited AI-generated layouts",
//         "Premium furniture suggestions",
//         "Download HD images",
//         "Priority Email support",
//         "Basic customization options",
//         "Revision support (2 per project)",
//         "No watermark images",
//       ],
//       link: "/AfterConformationPage",
//       highlight: "#FFFFFF",
//       background:
//         "linear-gradient(to bottom, #00B0BA, #FFFFFF1A, #FFFFFF1A)",
//     },
//     {
//       name: "Gold",
//       price: "$59 or ₹4,799",
//       subtitle: "",
//       description:
//         "For design enthusiasts or professionals who need complete creative freedom and advanced features.",
//       image: Gold,
//       priceDetail: "/per month",
//       offerCode: "STACKLY20",
//       offerText: "Use code (Get 20%OFF)",
//       features: [
//         "Unlimited Room Designs",
//         "Unlimited AI-generated layouts",
//         "Premium furniture suggestions",
//         "Download 4K images",
//         "Priority Email + Chat support",
//         "Full customization options",
//         "Unlimited revision support",
//         "No watermark images",
//       ],
//       link: "/AfterConformationPage",
//       highlight: "#FFD700",
//       background:
//         "linear-gradient(to bottom, #FFD700, #FFFFFF1A, #FFFFFF1A)",
//     },
//   ];

//   return (
//     <section
//       className="w-full min-h-[1600px] flex justify-center items-center bg-fixed bg-cover bg-center"
//       style={{ backgroundImage: `url(${BgImage})` }}
//     >
//       <div className="w-[1325px] flex flex-col items-center gap-[80px]">
//         <div className="text-white text-center">
//           <h1 className="text-4xl font-medium leading-[64px]">
//             Find the right plan that suits your needs
//           </h1>
//           <p className="text-2xl font-medium mt-4">
//             Start free or unlock premium features. Choose what fits your journey best.
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-[40px]">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`w-[400px] p-[20px] rounded-[12px] border border-white shadow-[0_2px_12px_0_rgba(0,123,130,0.16)] transition-all duration-300`}
//               style={{
//                 background: plan.background,
//                 height: expandedPlans[plan.name] ? "auto" : "820px",
//               }}
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2
//                   className="text-[32px] font-bold"
//                   style={{ color: plan.highlight }}
//                 >
//                   {plan.name}
//                   {plan.subtitle && (
//                     <span className="text-white text-[20px] ml-2">{plan.subtitle}</span>
//                   )}
//                 </h2>
//                 {plan.image && (
//                   <img src={plan.image} alt="plan" className="w-[70px]" />
//                 )}
//               </div>

//               <p className="text-white mb-6 text-[16px]">{plan.description}</p>

//               <h3 className="text-white font-bold text-[28px] mb-6">
//                 {plan.price}{" "}
//                 <span className="text-[16px] font-normal">{plan.priceDetail}</span>
//               </h3>

//               {plan.offerCode && (
//                 <div className="bg-[#FFFFFF1A] p-4 rounded-[12px] text-center mb-6 text-white text-[14px]">
//                   <div>{plan.offerText}</div>
//                   <div className="mt-2 flex justify-center items-center gap-3">
//                     <img src={DarkPg} alt="page" className="w-[20px]" />
//                     <span className="text-[20px] font-bold text-[#00b0ba]">
//                       {plan.offerCode}
//                     </span>
//                   </div>
//                 </div>
//               )}

//               {plan.link && (
//                 <Link to={plan.link}>
//                   <button className="w-full py-2 border border-[#007B82] rounded-[5px] text-[#007B82] bg-white hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA] hover:text-white transition">
//                     Get Started
//                   </button>
//                 </Link>
//               )}

//               <div className="border border-dashed border-[#1A1A1A2E] my-6"></div>

//               <div className="flex flex-col gap-4">
//                 {plan.features.slice(0, expandedPlans[plan.name] ? undefined : 5).map((feature, idx) => (
//                   <div key={idx} className="flex gap-3 items-start text-white text-[16px]">
//                     <img src={Tik} alt="tik" className="w-[20px]" />
//                     {feature}
//                   </div>
//                 ))}

//                 {plan.features.length > 5 && (
//                   <button
//                     onClick={() => toggleExpand(plan.name)}
//                     className="text-[#00B0BA] text-[14px] mt-2 underline"
//                   >
//                     {expandedPlans[plan.name] ? "Show less" : "Show more"}
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Tik from "../../assets/pricing-pg/tik.png";
// import Silver from "../../assets/pricing-pg/silver.png";
// import Gold from "../../assets/pricing-pg/grpGold.png";
// import DarkPg from "../../assets/pricing-pg/darkPg.png";
// import BgImage from "../../assets/pricing-pg/bg-plan.png";
// import axios from "axios";

// // ... rest of your code

// export default function AfterUiPlans() {
//   const [plans, setPlans] = useState([]);
//   const [expandedPlans, setExpandedPlans] = useState({});

//   const toggleExpand = (plan) => {
//     setExpandedPlans((prev) => ({
//       ...prev,
//       [plan]: !prev[plan],
//     }));
//   };

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8001/api/plans/")
//       .then((response) => {
//         console.log("Plans API response:", response.data);
//         setPlans(response.data.plans); // if response.data is { plans: [...] }
//       })
//       .catch((error) => {
//         console.error("Error fetching plans:", error);
//         console.error("Error response:", error.response);
//       });
//   }, []);

//   return (
//     <section
//       className="w-full min-h-[1600px] flex justify-center items-center bg-fixed bg-cover bg-center"
//       style={{ backgroundImage: `url(${BgImage})` }}
//     >
//       <div className="w-[1325px] flex flex-col items-center gap-[80px]">
//         <div className="text-white text-center">
//           <h1 className="text-4xl font-medium leading-[64px]">
//             Find the right plan that suits your needs
//           </h1>
//           <p className="text-2xl font-medium mt-4">
//             Start free or unlock premium features. Choose what fits your journey
//             best.
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-[40px]">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`w-[400px] p-[20px] rounded-[12px] border border-white shadow-[0_2px_12px_0_rgba(0,123,130,0.16)] transition-all duration-300`}
//               style={{
//                 background: plan.background,
//                 height: expandedPlans[plan.name] ? "auto" : "820px",
//               }}
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2
//                   className="text-[32px] font-bold"
//                   style={{ color: plan.highlight }}
//                 >
//                   {plan.name}
//                   {plan.subtitle && (
//                     <span className="text-white text-[20px] ml-2">
//                       {plan.subtitle}
//                     </span>
//                   )}
//                 </h2>
//                 {plan.image && (
//                   <img src={`http://127.0.0.1:8001${plan.image}`} alt="plan" className="w-[70px]" />
//                 )}
//               </div>

//               <p className="text-white mb-6 text-[16px]">{plan.description}</p>

//               <h3 className="text-white font-bold text-[28px] mb-6">
//                 $ {plan.price}{" "}
//                 <span className="text-[18px] font-normal">
//                   {/* {plan.priceDetail} */} /per month
//                 </span>
//               </h3>

//               {plan.offerCode && (
//                 <div className="bg-[#FFFFFF1A] p-4 rounded-[12px] text-center mb-6 text-white text-[14px]">
//                   <div>{plan.offerText}</div>
//                   <div className="mt-2 flex justify-center items-center gap-3">
//                     <img src={DarkPg} alt="page" className="w-[20px]" />
//                     <span className="text-[20px] font-bold text-[#ffffff]">
//                       {plan.offerCode}
//                     </span>
//                   </div>
//                 </div>
//               )}

//               {plan.link && (
//                 <Link to={plan.link}
//                  state={{ plan: plan }}
//                  >
//                   <button className="w-full py-2 border border-[#007B82] rounded-[5px] text-[#007B82] bg-white hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA] hover:text-white transition">
//                     Get Started
//                   </button>
//                 </Link>
//               )}

//               <div className="border border-dashed border-[#1A1A1A2E] my-6"></div>

//               <div className="flex flex-col gap-4">
//                 {plan.features
//                   .slice(0, expandedPlans[plan.name] ? undefined : 5)
//                   .map((feature, idx) => (
//                     <div
//                       key={idx}
//                       className="flex gap-3 items-start text-white text-[16px]"
//                     >
//                       <img src={Tik} alt="tik" className="w-[20px]" />
//                       {feature.text}
//                     </div>
//                   ))}

//                 {plan.features.length > 5 && (
//                   <button
//                     onClick={() => toggleExpand(plan.name)}
//                     className="text-[#00B0BA] text-[14px] mt-2 underline"
//                   >
//                     {expandedPlans[plan.name] ? "Show less" : "Show more"}
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

//AfterUiPlans.jsx
// import React, { useState } from "react";
// import Tik from "../../assets/pricing-pg/tik.png";
// import Silver from "../../assets/pricing-pg/silver.png";
// import Gold from "../../assets/pricing-pg/grpGold.png";
// import DarkPg from "../../assets/pricing-pg/darkPg.png";
// import Rarrow from "../../assets/pricing-pg/Rarrow.png";
// import { Link } from "react-router-dom";

// export default function AfterUiPlans() {
//   const [showSilverMore, setShowSilverMore] = useState(false);
//   const [showGoldMore, setShowGoldMore] = useState(false);
//   const [currentPlanIndex, setCurrentPlanIndex] = useState(0);
//   const [copied, setCopied] = useState(false);

//   const toggleSilverMore = () => setShowSilverMore(!showSilverMore);
//   const toggleGoldMore = () => setShowGoldMore(!showGoldMore);

//   const BasicPlan = ({ mobile = false }) => (
//     <div className={`${mobile ? 'w-[340px]' : 'w-full'} rounded-[12px] p-5 bg-[#FFFFFF1A] border-[1px] border-solid border-white shadow-[0_2px_12px_#007B8229] flex flex-col gap-6`}>
//       <div className="flex flex-col gap-4">
//         <div className="font-bold text-2xl text-[#00b0ba]">
//           Basic <span className="text-white text-lg">(Free)</span>
//         </div>
//         <p className="text-white text-sm">
//           Perfect for personal or casual users who want a simple idea of interior design.
//         </p>
//         <div className="text-white font-bold text-2xl">
//           $0 <span className="text-base font-normal">/per month</span>
//         </div>
//         {/* <Link to="/Sign-in">
//           <div className="w-full py-3 bg-white rounded-lg border border-[#007B82] text-[#007B82] flex justify-center items-center hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA] hover:text-white">
//             Get Started
//           </div>
//         </Link> */}
//       </div>
//       <hr className="border-dashed border-[#1A1A1A2E]" />
//       <div className="flex flex-col gap-4 mt-4">
//         {["10 Room Designs per month", "Limited AI-generated layouts", "Basic furniture suggestions", "Download SD images,no advanced tools", "Email support (Standard)", "No customization options", "No revision support", "Watermark images"].map((item, idx) => (
//           <div className="flex gap-2 items-start" key={idx}>
//             <img src={Tik} alt="tik" className="w-5 h-5 mt-0.5 flex-shrink-0" />
//             <span className="text-white text-sm font-medium">{item}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
//   const handleCopyCoupon = () => {
//     navigator.clipboard.writeText("STACKLY20").then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000); // Reset copied status after 2s
//     });
//   };

//   const SilverPlan = ({ mobile = false }) => (
//     <div className={`${mobile ? 'w-[340px]' : 'w-full'} rounded-[12px] p-5 bg-gradient-to-b from-[#00B0BA] via-[#FFFFFF1A] to-[#FFFFFF1A] border-[1px] border-solid border-white shadow-[0_2px_12px_#007B8229] flex flex-col gap-6`}>
//       <div className="flex flex-col gap-4">
//         <div className="flex justify-between items-center">
//           <h3 className="text-white text-2xl font-bold">Silver</h3>
//           <img src={Silver} alt="silver" className="w-16 h-16" />
//         </div>
//         <p className="text-white text-sm">
//           Ideal for homeowners or renters looking for more creative control and polished designs.
//         </p>
//         <div className="text-white text-2xl font-bold">
//           $29 or ₹2,399 <span className="text-base font-normal">/per month</span>
//         </div>
//         <div className="bg-[#FFFFFF1A] p-4 rounded-lg text-center text-white shadow-[0_2px_12px_#007B8229]">
//           <p className="text-xs font-medium">Use code (Get 10%OFF)</p>
//           <div className="flex items-center justify-center gap-2 mt-1">
//             <img
//               src={DarkPg}
//               alt="page"
//               className="w-4 h-4 cursor-pointer"
//               onClick={handleCopyCoupon}
//               title="Click to copy coupon"
//             />
//             <span className="font-bold text-lg text-[#00b0ba]">
//               STACKLY20 {copied && <span className="text-xs text-[#00b0ba] ml-1">(Copied!)</span>}
//             </span>
//           </div>
//         </div>
//         <Link to="/AfterConformationPage">
//           <div className="w-full py-3 bg-white rounded-lg border border-[#007B82] text-[#007B82] flex justify-center items-center hover:text-white hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA]">
//             Get Started
//           </div>
//         </Link>
//       </div>
//       <hr className="border-dashed border-[#1A1A1A2E]" />
//       <div className="flex flex-col gap-4 mt-4">
//         {["50 Room Designs per month", "Advanced AI layout suggestions", "Access to premium themes & colour palettes", "Furniture & decor recommendations", "High-resolution image download"]
//           .concat(showSilverMore ? ["Priority email support", "Basic customization options", "Limited revisions (up to 3)", "No watermark on images"] : [])
//           .map((item, idx) => (
//             <div className="flex gap-2 items-start" key={idx}>
//               <img src={Tik} alt="tik" className="w-5 h-5 mt-0.5 flex-shrink-0" />
//               <span className="text-white text-sm font-medium">{item}</span>
//             </div>
//           ))}
//         <button className="flex gap-2 items-center cursor-pointer text-white" onClick={toggleSilverMore}>
//           <img src={Rarrow} alt="arrow" className={`w-3 h-4 transition-transform ${showSilverMore ? "rotate-90" : ""}`} />
//           <span className="text-sm font-medium">
//             {showSilverMore ? "Show less" : "See 4 more"}
//           </span>
//         </button>
//       </div>
//     </div>
//   );

//   const GoldPlan = ({ mobile = false }) => (
//     <div className={`${mobile ? 'w-[340px]' : 'w-full'} relative rounded-[12px] p-5 bg-[#FFFFFF1A] border-[1px] border-solid border-white shadow-[0_2px_12px_#007B8229] flex flex-col gap-6`}>
//       <span className="absolute top-0 right-0 bg-gradient-to-b from-[#FFAA17] to-[#99660E] px-2 py-1 text-white text-xs font-medium rounded-tr-md rounded-bl-lg">
//         Most Popular
//       </span>
//       <div className="flex flex-col gap-4">
//         <div className="flex justify-between items-center">
//           <h3 className="text-[#00b0ba] text-2xl font-bold">Gold</h3>
//           <img src={Gold} alt="gold" className="w-16 h-16" />
//         </div>
//         <p className="text-white text-sm">
//           Best for professionals, renovators, or anyone seeking top-tier results and personalization.
//         </p>
//         <div className="text-white text-2xl font-bold">
//           $59 or ₹4,799 <span className="text-base font-normal">/per month</span>
//         </div>
//         <div className="bg-[#FFFFFF1A] p-4 rounded-lg text-center text-white shadow-[0_2px_12px_#007B8229]">
//           <p className="text-xs font-medium">Use code (Get 10%OFF)</p>
//           <div className="flex items-center justify-center gap-2 mt-1">
//             <img
//               src={DarkPg}
//               alt="page"
//               className="w-4 h-4 cursor-pointer"
//               onClick={handleCopyCoupon}
//               title="Click to copy coupon"
//             />
//             <span className="font-bold text-lg text-[#00b0ba]">
//               STACKLY20 {copied && <span className="text-xs text-[#00b0ba] ml-1">(Copied!)</span>}
//             </span>
//           </div>
//         </div>
//         <Link to="/AfterConformationPage1">
//           <div className="w-full py-3 bg-white rounded-lg border border-[#007B82] text-[#007B82] flex justify-center items-center hover:text-white hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA]">
//             Get Started
//           </div>
//         </Link>
//       </div>
//       <hr className="border-t border-dashed border-[#1A1A1A2E]" />
//       <div className="flex flex-col gap-4 mt-4">
//         {["Unlimited Room Designs", "Commercial use upto 3-5 members", "Fully customized AI designs with layout and lighting suggestions", "Unlimited design revisions", "3D walk-through visualizations"]
//           .concat(showGoldMore ? ["Dedicated support with 24-hour response time", "Advanced customization tools", "Export designs in multiple formats", "Access to exclusive design templates"] : [])
//           .map((item, idx) => (
//             <div className="flex gap-2 items-start" key={idx}>
//               <img src={Tik} alt="tik" className="w-5 h-5 mt-0.5 flex-shrink-0" />
//               <span className="text-white text-sm font-medium">{item}</span>
//             </div>
//           ))}
//         <button className="flex gap-2 items-center cursor-pointer text-white" onClick={toggleGoldMore}>
//           <img src={Rarrow} alt="arrow" className={`w-3 h-4 transition-transform ${showGoldMore ? "rotate-90" : ""}`} />
//           <span className="text-sm font-medium">{showGoldMore ? "Show less" : "See 4 more"}</span>
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <section className="w-full py-12 px-4 bg-[#021314] max-[440px]:-mt-[118px]">

//       <div className="hidden max-[440px]:block w-[168px] h-[168px] bg-[#00B0BA66] mx-auto mb-6 rounded-full blur-[124px]"></div>

//       <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 max-[440px]:-mt-[185px]">

//         <div className="text-center">
//           <h2 className="text-white text-3xl md:text-4xl font-medium mb-4 max-[440px]:w-[400px] max-[440px]:h-[24px] max-[440px]:text-[20px] max-[440px]:leading-[100%] max-[440px]:text-center" style={{ fontFamily: 'Inter' }}>
//             Find the right plan that suits your needs
//           </h2>

//           <p className="text-white text-lg md:text-xl max-w-2xl mx-auto max-[440px]:w-[400px] max-[440px]:h-[44px] max-[440px]:text-[16px] max-[440px]:leading-[140%] max-[440px]:text-center" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
//             Start free or unlock premium features. Choose what fits your journey best.
//           </p>

//         </div>

//         {/* Mobile Slider */}
//         <div className="w-full md:hidden flex flex-col items-center">
//           {/* Slider Wrapper with Fixed Width */}
//           <div className="overflow-hidden w-[366px]">
//             <div
//               className="flex transition-transform duration-300 ease-in-out"
//               style={{
//                 transform: `translateX(-${currentPlanIndex * 366}px)`, // shift based on fixed width
//               }}
//             >
//               {[<BasicPlan mobile />, <SilverPlan mobile />, <GoldPlan mobile />].map((Plan, index) => (
//                 <div key={index} className="w-[366px] flex-shrink-0 px-2">
//                   {Plan}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Slide Buttons */}
//           <div className="flex justify-center items-center gap-4 mt-6">
//             {/* Left Arrow */}
//             <button
//               onClick={() => setCurrentPlanIndex((prev) => (prev > 0 ? prev - 1 : 0))}
//               className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//               aria-label="Previous plan"
//             >
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M15 18L9 12L15 6"
//                   stroke="#2A2A2A"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>

//             {/* Dots */}
//             <div className="flex gap-2">
//               {[0, 1, 2].map((index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentPlanIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentPlanIndex === index ? 'bg-cyan-400' : 'bg-gray-400'
//                     }`}
//                   aria-label={`Go to plan ${index + 1}`}
//                 />
//               ))}
//             </div>

//             {/* Right Arrow */}
//             <button
//               onClick={() => setCurrentPlanIndex((prev) => (prev < 2 ? prev + 1 : 2))}
//               className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//               aria-label="Next plan"
//             >
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M9 18L15 12L9 6"
//                   stroke="#2A2A2A"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Desktop Layout */}
//         <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
//           <BasicPlan />
//           <SilverPlan />
//           <GoldPlan />
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Tik from "../../assets/pricing-pg/tik.png";
// import Silver from "../../assets/pricing-pg/silver.png";
// import Gold from "../../assets/pricing-pg/grpGold.png";
// import DarkPg from "../../assets/pricing-pg/darkPg.png";
// import BgImage from "../../assets/pricing-pg/bg-plan.png";
// import Rarrow from "../../assets/pricing-pg/Rarrow.png";
// import axios from "axios";

// export default function AfterUiPlans() {
//   const [plans, setPlans] = useState([]);
//   const [expandedPlans, setExpandedPlans] = useState({});

//   const toggleExpand = (plan) => {
//     setExpandedPlans((prev) => ({
//       ...prev,
//       [plan]: !prev[plan],
//     }));
//   };
//   const [copiedCode, setCopiedCode] = useState(null);

// const handleCopy = (code) => {
//   navigator.clipboard.writeText(code);
//   setCopiedCode(code);
//   setTimeout(() => setCopiedCode(null), 2000); // Hide after 2 sec
// };

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8001/api/plans/")
//       .then((response) => {
//         setPlans(response.data.plans);
//       })
//       .catch((error) => {
//         console.error("Error fetching plans:", error);
//       });
//   }, []);

//   return (
//     <section
//       className="w-full min-h-[1000px] flex justify-center items-center bg-fixed bg-cover bg-center py-10"
//       style={{ backgroundImage: `url(${BgImage})` }}
//     >
//       <div className="w-[1300px] flex flex-col items-center gap-[50px]">
//         <div className="text-white text-center">
//           <h1 className="text-4xl font-medium leading-[64px]">
//             Find the right plan that suits your needs
//           </h1>
//           <p className="text-2xl font-medium mt-4">
//             Start free or unlock premium features. Choose what fits your journey
//             best.
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-[18px] ">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className="w-[380px] p-[16px] rounded-[14px] border-[1.5px] border-solid border-white mt-5 mb-0 transition-all duration-300 shadow-[0_2px_14px_0_rgba(0,123,130,0.18)]"
//               style={{
//                 background: plan.background,
//                 height: expandedPlans[plan.name] ? "auto" : "740px",
//               }}
//             >
//               <div className="flex justify-between items-center mb-3">
//                 <div>
//                   <h2
//                     className="text-[36px] font-bold"
//                     style={{ color: plan.highlight }}
//                   >
//                     {plan.name}
//                     {plan.subtitle && (
//                       <span className="text-white text-[26px] ml-2">
//                         {plan.subtitle}
//                       </span>
//                     )}
//                   </h2>
//                   {plan.isPopular && (
//                     <div className="bg-[#FFB500] text-black text-[22px] font-semibold px-2 py-1 rounded-[6px] inline-block mt-2">
//                       Most Popular
//                     </div>
//                   )}
//                 </div>
//                 {plan.image && (
//                   <img
//                     src={`http://127.0.0.1:8001${plan.image}`}
//                     alt="plan"
//                     className="w-[50px]"
//                   />
//                 )}
//               </div>

//               <p className="text-white mb-4 text-[14px]">{plan.description}</p>

//               <h3 className="text-white font-bold text-[34px] mb-5">
//                 ${plan.price}
//                 <span className="text-[15px] font-normal"> / per month</span>
//               </h3>

//               {plan.offerCode && (
//                 <div className="bg-[#FFFFFF1A] p-3 rounded-[10px] text-center mb-5 text-white text-[14px]">
//                   <div>{plan.offerText}</div>
//                   <div className="mt-2 flex justify-center items-center gap-2">
//                     <img src={DarkPg} alt="page" className="w-[18px]" />
//                     <span
//                       className="text-[18px] font-bold text-[#ffffff] cursor-pointerPPP"
//                       onClick={() => handleCopy(plan.offerCode)}
//                     >
//                       {plan.offerCode}
//                     </span>

//                     {copiedCode === plan.offerCode && (
//                       <span className="text-[#FFFFFF] text-[14px] ml-2">
//                         Copied!
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {plan.link && (
//                 <Link to={plan.link} state={{ plan: plan }}>
//                   <button className="w-full py-2 border border-[#007B82] rounded-[5px] text-[#007B82] bg-white hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA] hover:text-white transition font-medium">
//                     Get Started
//                   </button>
//                 </Link>
//               )}

//               <div className="border border-dashed border-[#1A1A1A2E] my-5"></div>

//               <div className="flex flex-col gap-3 mt-6">
//                 {" "}
//                 {/* Added mt-6 here */}
//                 {plan.features
//                   .slice(0, expandedPlans[plan.name] ? undefined : 5)
//                   .map((feature, idx) => (
//                     <div
//                       key={idx}
//                       className="flex gap-2 items-start text-white text-[17.5px]"
//                     >
//                       <img src={Tik} alt="tik" className="w-[18px]" />
//                       {feature.text}
//                     </div>
//                   ))}
//                 {plan.features.length > 5 && (
//                   <button
//                     onClick={() => toggleExpand(plan.name)}
//                     className="flex items-center gap-2 text-white text-[17px] mt-1 hover:text-[#00E1ED] transition"
//                   >
//                     <img
//                       src={Rarrow}
//                       alt="arrow"
//                       className="w-[14px] h-[14px]"
//                     />
//                     {expandedPlans[plan.name] ? "Show less" : "See 4 more"}
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import Tik from "../../assets/pricing-pg/tik.png";
// import Silver from "../../assets/pricing-pg/silver.png";
// import Gold from "../../assets/pricing-pg/grpGold.png";
// import DarkPg from "../../assets/pricing-pg/darkPg.png";
// import Rarrow from "../../assets/pricing-pg/Rarrow.png";
// import BG from "../../assets/pricing-pg/bg-plan.png";
// import { Link } from "react-router-dom";

// export default function AfterUiPlans() {
//   const [showSilverMore, setShowSilverMore] = useState(false);
//   const [showGoldMore, setShowGoldMore] = useState(false);
//   const [currentPlanIndex, setCurrentPlanIndex] = useState(0);
//   const [copied, setCopied] = useState(false);

//   const toggleSilverMore = () => setShowSilverMore(!showSilverMore);
//   const toggleGoldMore = () => setShowGoldMore(!showGoldMore);

//   const BasicPlan = ({ mobile = false }) => (
//     <div className={`${mobile ? 'w-[340px]' : 'w-full'} rounded-[12px] p-5 bg-[#FFFFFF1A] border-[1px] border-solid border-white shadow-[0_2px_12px_#007B8229] flex flex-col gap-6`}>
//       <div className="flex flex-col gap-4">
//         <div className="font-bold text-2xl text-[#00b0ba]">
//           Basic <span className="text-white text-lg">(Free)</span>
//         </div>
//         <p className="text-white text-sm">
//           Perfect for personal or casual users who want a simple idea of interior design.
//         </p>
//         <div className="text-white font-bold text-2xl">
//           $0 <span className="text-base font-normal">/per month</span>
//         </div>
//         {/* <Link to="/Sign-in">
//           <div className="w-full py-3 bg-white rounded-lg border border-[#007B82] text-[#007B82] flex justify-center items-center hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA] hover:text-white">
//             Get Started
//           </div>
//         </Link> */}
//       </div>
//       <hr className="border-dashed border-[#1A1A1A2E]" />
//       <div className="flex flex-col gap-4 mt-4">
//         {["10 Room Designs per month", "Limited AI-generated layouts", "Basic furniture suggestions", "Download SD images,no advanced tools", "Email support (Standard)", "No customization options", "No revision support", "Watermark images"].map((item, idx) => (
//           <div className="flex gap-2 items-start" key={idx}>
//             <img src={Tik} alt="tik" className="w-5 h-5 mt-0.5 flex-shrink-0" />
//             <span className="text-white text-sm font-medium">{item}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const handleCopyCoupon = () => {
//     navigator.clipboard.writeText("STACKLY20").then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000); // Reset copied status after 2s
//     });
//   };

//   const SilverPlan = ({ mobile = false }) => (
//     <div
//       className={`${mobile ? 'w-[340px]' : 'w-full'} rounded-[12px] p-5 border-[5px] border-solid border-[#00B0BA] flex flex-col gap-6`}
//       style={{
//         background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.04) 100%)',
//         boxShadow: '8px 8px 4px 0px #00000029 inset, -8px -8px 4px 0px #00000029 inset',
//       }}
//     >

//       <div className="flex flex-col gap-4">
//         <div className="flex justify-between items-center">
//           <h3 className="text-white text-2xl font-bold">Silver</h3>
//           <img src={Silver} alt="silver" className="w-16 h-16" />
//         </div>
//         <p className="text-white text-sm">
//           Ideal for homeowners or renters looking for more creative control and polished designs.
//         </p>
//         <div className="text-white text-2xl font-bold">
//           $29 or ₹2,399 <span className="text-base font-normal">/per month</span>
//         </div>
//         <div className="bg-[#FFFFFF1A] p-4 rounded-lg text-center text-white shadow-[0_2px_12px_#007B8229]">
//           <p className="text-xs font-medium">Use code (Get 10%OFF)</p>
//           <div className="flex items-center justify-center gap-2 mt-1">
//             <img
//               src={DarkPg}
//               alt="page"
//               className="w-4 h-4 cursor-pointer"
//               onClick={handleCopyCoupon}
//               title="Click to copy coupon"
//             />
//             <span className="font-bold text-lg text-[#00b0ba]">
//               STACKLY20 {copied && <span className="text-xs text-[#00b0ba] ml-1">(Copied!)</span>}
//             </span>
//           </div>
//         </div>
//         <Link to="/AfterConformationPage">
//           <div className="w-full py-3 bg-white rounded-lg border border-[#007B82] text-[#007B82] flex justify-center items-center hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA] hover:text-white">
//             Get Started
//           </div>
//         </Link>
//       </div>
//       <hr className="border-dashed border-[#1A1A1A2E]" />
//       <div className="flex flex-col gap-4 mt-4">
//         {["50 Room Designs per month", "Advanced AI layout suggestions", "Access to premium themes & colour palettes", "Furniture & decor recommendations", "High-resolution image download"]
//           .concat(showSilverMore ? ["Priority email support", "Basic customization options", "Limited revisions (up to 3)", "No watermark on images"] : [])
//           .map((item, idx) => (
//             <div className="flex gap-2 items-start" key={idx}>
//               <img src={Tik} alt="tik" className="w-5 h-5 mt-0.5 flex-shrink-0" />
//               <span className="text-white text-sm font-medium">{item}</span>
//             </div>
//           ))}
//         <button className="flex gap-2 items-center cursor-pointer text-white" onClick={toggleSilverMore}>
//           <img src={Rarrow} alt="arrow" className={`w-3 h-4 transition-transform ${showSilverMore ? "rotate-90" : ""}`} />
//           <span className="text-sm font-medium">
//             {showSilverMore ? "Show less" : "See 4 more"}
//           </span>
//         </button>
//       </div>
//     </div>
//   );
//   const GoldPlan = ({ mobile = false }) => (
//     <div
//       className={`${mobile ? 'w-[340px]' : 'w-full'} relative rounded-[12px] p-5 border-[1px] border-solid shadow-[0_2px_12px_#007B8229] flex flex-col gap-6`}
//       style={{ borderColor: '#B5780F', background: 'linear-gradient(179.75deg, #B5780F 0.22%, rgba(255, 255, 255, 0.1) 100.65%)' }}
//     >

//       <span className="absolute top-0 right-0 bg-gradient-to-b from-[#FFAA17] to-[#99660E] px-2 py-1 text-white text-xs font-medium rounded-tr-md rounded-bl-lg">
//         Most Popular
//       </span>
//       <div className="flex flex-col gap-4">
//         <div className="flex justify-between items-center">
//           <h3 className="text-[#FFFFFF] text-2xl font-bold">Gold</h3>
//           <img src={Gold} alt="gold" className="w-[63px] h-[47px] mt-4" />
//         </div>
//         <p className="text-white text-sm">
//           Best for professionals, renovators, or anyone seeking top-tier results and personalization.
//         </p>
//         <div className="text-white mb-1 text-2xl font-bold">
//           $59 or ₹4,799 <span className="text-base font-normal">/per month</span>
//         </div>
//         <div className="bg-[#F9BC1C] p-4 rounded-lg text-center text-white shadow-[0_2px_12px_#007B8229]">
//           <p className="text-xs font-medium text-white">Use code (Get 10%OFF)</p>
//           <div className="flex items-center justify-center gap-2 mt-1">
//             <img
//               src={DarkPg}
//               alt="page"
//               className="w-4 h-4 invert brightness-0"
//               onClick={handleCopyCoupon}
//               title="Click to copy coupon"
//             />
//             <span className="font-bold text-lg text-white">
//               STACKLY20 {copied && <span className="text-xs text-[#00b0ba] ml-1">(Copied!)</span>}
//             </span>
//           </div>

//         </div>

//         <Link to="/AfterConformationPage1">
//           <div className="w-full py-3 bg-white rounded-lg border-2 border-[#F3A216] text-[#F3A216] shadow-sm flex justify-center items-center hover:text-white hover:bg-gradient-to-b from-[#F3A216] to-[#f5b543]">
//             Get Started
//           </div>

//         </Link>
//       </div>
//       <hr className="border-t border-dashed border-[#1A1A1A2E]" />
//       <div className="flex flex-col gap-4 mt-4">
//         {["Unlimited Room Designs", "Commercial use upto 3-5 members", "Fully customized AI designs with layout and lighting suggestions", "Unlimited design revisions", "3D walk-through visualizations"]
//           .concat(showGoldMore ? ["Dedicated support with 24-hour response time", "Advanced customization tools", "Export designs in multiple formats", "Access to exclusive design templates"] : [])
//           .map((item, idx) => (
//             <div className="flex gap-2 items-start" key={idx}>
//               <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-[linear-gradient(180deg,#FBA716_41.67%,#95630D_157.14%)] rounded-[4px] flex items-center justify-center">
//                 <svg
//                   width="12"
//                   height="12"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-3 h-3"
//                 >
//                   <path
//                     d="M5 13L9 17L19 7"
//                     stroke="white"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//               <span className="text-white text-sm font-medium">{item}</span>
//             </div>

//           ))}
//         <button className="flex gap-2 items-center cursor-pointer text-white" onClick={toggleGoldMore}>
//           <svg
//             width="10.408226013183594"
//             height="18.887561798095703"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className={`w-3 h-4 transition-transform ${showGoldMore ? "rotate-90" : ""}`}
//           >
//             <path
//               d="M8 5L15 12L8 19"
//               stroke="#F3A216"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <span className="text-sm font-medium">{showGoldMore ? "Show less" : "See 4 more"}</span>
//         </button>

//       </div>
//     </div>
//   );

//   return (
//     <section
//       className="w-full py-12 px-4 bg-cover bg-top bg-no-repeat max-[440px]:-mt-[118px]"
//       style={{
//         backgroundImage: `url(${BG})`,
//       }}
//     >

//       <div className="hidden max-[440px]:block w-[168px] h-[168px] bg-[#00B0BA66] mx-auto mb-6 rounded-full blur-[124px]"></div>

//       <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 max-[440px]:-mt-[185px]">

//         <div className="text-center">
//           <h2
//             className="text-white text-[32px] leading-[1.2] md:text-4xl font-medium mb-4 max-w-2xl mx-auto max-[440px]:w-[400px] max-[440px]:h-[24px] max-[440px]:text-[20px] max-[440px]:leading-[100%] max-[440px]:text-center"
//             style={{ fontFamily: 'Aptos Serif' }}
//           >
//             Find the right plan that <br className="hidden md:inline" /> suits your needs
//           </h2>

//           <p
//             className="text-white text-[20px] md:text-xl max-w-2xl mx-auto whitespace-nowrap max-[440px]:w-[400px] max-[440px]:h-[44px] max-[440px]:text-[16px] max-[440px]:leading-[140%] max-[440px]:text-center max-[440px]:whitespace-normal"
//             style={{ fontFamily: 'Inter', fontWeight: 400 }}
//           >
//             Start free or unlock premium features. Choose what fits your journey best.
//           </p>
//         </div>

//         {/* Mobile Slider */}
//         <div className="w-full md:hidden flex flex-col items-center">
//           {/* Slider Wrapper with Fixed Width */}
//           <div className="overflow-hidden w-[366px]">
//             <div
//               className="flex transition-transform duration-300 ease-in-out"
//               style={{
//                 transform: `translateX(-${currentPlanIndex * 366}px)`, // shift based on fixed width
//               }}
//             >
//               {[<BasicPlan mobile />, <SilverPlan mobile />, <GoldPlan mobile />].map((Plan, index) => (
//                 <div key={index} className="w-[366px] flex-shrink-0 px-2">
//                   {Plan}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Slide Buttons */}
//           <div className="flex justify-center items-center gap-4 mt-6">
//             {/* Left Arrow */}
//             <button
//               onClick={() => setCurrentPlanIndex((prev) => (prev > 0 ? prev - 1 : 0))}
//               className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//               aria-label="Previous plan"
//             >
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M15 18L9 12L15 6"
//                   stroke="#2A2A2A"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>

//             {/* Dots */}
//             <div className="flex gap-2">
//               {[0, 1, 2].map((index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentPlanIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentPlanIndex === index ? 'bg-cyan-400' : 'bg-gray-400'
//                     }`}
//                   aria-label={`Go to plan ${index + 1}`}
//                 />
//               ))}
//             </div>

//             {/* Right Arrow */}
//             <button
//               onClick={() => setCurrentPlanIndex((prev) => (prev < 2 ? prev + 1 : 2))}
//               className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//               aria-label="Next plan"
//             >
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M9 18L15 12L9 6"
//                   stroke="#2A2A2A"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Desktop Layout */}
//         <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
//           <BasicPlan />
//           <SilverPlan />
//           <GoldPlan />
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import Tik from "../../assets/pricing-pg/tik.png";
import Silver from "../../assets/pricing-pg/silver.png";
import Gold from "../../assets/pricing-pg/grpGold.png";
import DarkPg from "../../assets/pricing-pg/darkPg.png";
import Rarrow from "../../assets/pricing-pg/Rarrow.png";
import BG from "../../assets/pricing-pg/bg-plan.png";
import { Link } from "react-router-dom";

export default function AfterUiPlans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState({});
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(null);

  // Static descriptions for each plan type
  const staticDescriptions = {
    basic: "Perfect for personal or casual users who want a simple idea of interior design.",
    silver: "Ideal for homeowners or renters looking for more creative control and polished designs.",
    gold: "Best for professionals, renovators, or anyone seeking top-tier results and personalization."
  };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8001/api/plans/");
        if (!response.ok) {
          throw new Error("Failed to fetch plans");
        }
        const data = await response.json();
        
        // Map the API data to our format, keeping static descriptions
        const mappedPlans = data.plans.map(plan => ({
          ...plan,
          // Use static description based on plan name
          description: staticDescriptions[plan.name.toLowerCase()] || plan.description
        }));
        
        setPlans(mappedPlans);

        // Initialize showMore state for each plan
        const showMoreState = {};
        mappedPlans.forEach((plan) => {
          showMoreState[plan.id] = false;
        });
        setShowMore(showMoreState);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const toggleShowMore = (planId) => {
    setShowMore((prev) => ({
      ...prev,
      [planId]: !prev[planId],
    }));
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const PlanCard = ({ plan, mobile = false, isPopular = false }) => {
    const features = Array.isArray(plan.features) ? plan.features : [];
    const visibleFeatures = showMore[plan.id] ? features : features.slice(0, 5);

    return (
      <div
        className={`${
          mobile ? "w-[340px]" : "w-full"
        } relative rounded-[12px] p-5 flex flex-col gap-6 ${
          plan.name.toLowerCase() === "silver"
            ? "border-[5px] border-solid border-[#00B0BA]"
            : plan.name.toLowerCase() === "gold"
            ? "border-[1px] border-solid border-[#B5780F] shadow-[0_2px_12px_#007B8229]"
            : "bg-[#FFFFFF1A] border-[1px] border-solid border-white shadow-[0_2px_12px_#007B8229]"
        }`}
        style={{
          background:
            plan.name.toLowerCase() === "silver"
              ? "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.04) 100%)"
              : plan.name.toLowerCase() === "gold"
              ? "linear-gradient(179.75deg, #B5780F 0.22%, rgba(255, 255, 255, 0.1) 100.65%)"
              : "",
          boxShadow:
            plan.name.toLowerCase() === "silver"
              ? "8px 8px 4px 0px #00000029 inset, -8px -8px 4px 0px #00000029 inset"
              : ""
        }}
      >
        {isPopular && (
          <span className="absolute top-0 right-0 bg-gradient-to-b from-[#FFAA17] to-[#99660E] px-2 py-1 text-white text-xs font-medium rounded-tr-md rounded-bl-lg">
            Most Popular
          </span>
        )}

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl text-white">
              {plan.name}
              {plan.name.toLowerCase() === "basic" && (
                <span className="text-white text-lg"> (Free)</span>
              )}
            </h3>
            {plan.name.toLowerCase() === "silver" && (
              <img src={Silver} alt="silver" className="w-16 h-16" />
            )}
            {plan.name.toLowerCase() === "gold" && (
              <img src={Gold} alt="gold" className="w-[63px] h-[47px] mt-4" />
            )}
          </div>

          {/* Static description from our mapping */}
          <p className="text-white text-sm">{plan.description}</p>

          <div className="text-white text-2xl font-bold">
            ${plan.price}{" "}
            <span className="text-base font-normal">/per month</span>
          </div>

          {plan.offerCode && (
            <div
              className={`p-4 rounded-lg text-center text-white shadow-[0_2px_12px_#007B8229] ${
                plan.name.toLowerCase() === "gold"
                  ? "bg-[#F9BC1C]"
                  : "bg-[#FFFFFF1A]"
              }`}
            >
              <p className="text-xs font-medium">
                {plan.offerText || "Use code (Get 10%OFF)"}
              </p>
              <div className="flex items-center justify-center gap-2 mt-1">
                <img
                  src={DarkPg}
                  alt="copy"
                  className={`w-4 h-4 cursor-pointer ${
                    plan.name.toLowerCase() === "gold"
                      ? "invert brightness-0"
                      : ""
                  }`}
                  onClick={() => handleCopy(plan.offerCode)}
                  title="Click to copy coupon"
                />
                <span
                  onClick={() => handleCopy(plan.offerCode)}
                  className={`font-bold text-lg cursor-pointer ${
                    plan.name.toLowerCase() === "gold"
                      ? "text-white"
                      : "text-[#00B0BA]"
                  }`}
                >
                  {plan.offerCode}
                  {copiedCode === plan.offerCode && (
                    <span className="text-xs ml-1">(Copied!)</span>
                  )}
                </span>
              </div>
            </div>
          )}

          {plan.name.toLowerCase() !== "basic" && (
            <Link
              to={`/AfterConformationPage${
                plan.name.toLowerCase() === "gold" ? "1" : ""
              }`}
              state={{ plan }}
            >
              <div
                className={`w-full py-3 rounded-lg border-2 flex justify-center items-center hover:text-white ${
                  plan.name.toLowerCase() === "gold"
                    ? "bg-white border-[#F3A216] text-[#F3A216] hover:bg-gradient-to-b from-[#F3A216] to-[#f5b543]"
                    : "bg-white border-[#007B82] text-[#007B82] hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA]"
                }`}
              >
                Get Started
              </div>
            </Link>
          )}
        </div>

        <hr className="border-dashed border-[#1A1A1A2E]" />

        <div className="flex flex-col gap-4 mt-4">
          {visibleFeatures.map((item, idx) => (
            <div className="flex gap-2 items-start" key={idx}>
              {plan.name.toLowerCase() === "gold" ? (
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-[linear-gradient(180deg,#FBA716_41.67%,#95630D_157.14%)] rounded-[4px] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <img
                  src={Tik}
                  alt="tik"
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                />
              )}
              <span className="text-white text-sm font-medium">
                {typeof item === "object" ? item.text || item.name : item}
              </span>
            </div>
          ))}

          {features.length > 5 && (
            <button
              className="flex gap-2 items-center cursor-pointer text-white"
              onClick={() => toggleShowMore(plan.id)}
            >
              {plan.name.toLowerCase() === "gold" ? (
                <svg
                  width="10.4"
                  height="18.8"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`w-3 h-4 transition-transform ${
                    showMore[plan.id] ? "rotate-90" : ""
                  }`}
                >
                  <path
                    d="M8 5L15 12L8 19"
                    stroke="#F3A216"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <img
                  src={Rarrow}
                  alt="arrow"
                  className={`w-3 h-4 transition-transform ${
                    showMore[plan.id] ? "rotate-90" : ""
                  }`}
                />
              )}
              <span className="text-sm">
                {showMore[plan.id] ? "Show Less" : `See ${features.length - 5} more`}
              </span>
            </button>
          )}
        </div>
      </div>
    );
  };

  if (loading)
    return <div className="text-white text-center py-12">Loading plans...</div>;
  if (error)
    return <div className="text-white text-center py-12">Error: {error}</div>;
  if (plans.length === 0)
    return (
      <div className="text-white text-center py-12">
        No active plans available
      </div>
    );

  // Sort plans by price
  const sortedPlans = [...plans].sort((a, b) => a.price - b.price);

  return (
    <section
      className="w-full py-12 px-4 bg-cover bg-top bg-no-repeat max-[440px]:-mt-[118px]"
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
      <div className="hidden max-[440px]:block w-[168px] h-[168px] bg-[#00B0BA66] mx-auto mb-6 rounded-full blur-[124px]"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 max-[440px]:-mt-[185px]">
        <div className="text-center">
          <h2
            className="text-white text-[32px] leading-[1.2] md:text-4xl font-medium mb-4 max-w-2xl mx-auto max-[440px]:w-[400px] max-[440px]:h-[24px] max-[440px]:text-[20px] max-[440px]:leading-[100%] max-[440px]:text-center"
            style={{ fontFamily: "Aptos Serif" }}
          >
            Find the right plan that <br className="hidden md:inline" /> suits
            your needs
          </h2>

          <p
            className="text-white text-[20px] md:text-xl max-w-2xl mx-auto whitespace-nowrap max-[440px]:w-[400px] max-[440px]:h-[44px] max-[440px]:text-[16px] max-[440px]:leading-[140%] max-[440px]:text-center max-[440px]:whitespace-normal"
            style={{ fontFamily: "Inter", fontWeight: 400 }}
          >
            Start free or unlock premium features. Choose what fits your journey
            best.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="w-full md:hidden flex flex-col items-center">
          <div className="overflow-hidden w-[366px]">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentPlanIndex * 366}px)`,
              }}
            >
              {sortedPlans.map((plan) => (
                <div key={plan.id} className="w-[366px] flex-shrink-0 px-2">
                  <PlanCard
                    plan={plan}
                    mobile
                    isPopular={plan.name.toLowerCase() === "gold"}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() =>
                setCurrentPlanIndex((prev) => (prev > 0 ? prev - 1 : 0))
              }
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous plan"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#2A2A2A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {sortedPlans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPlanIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentPlanIndex === index ? "bg-cyan-400" : "bg-gray-400"
                  }`}
                  aria-label={`Go to plan ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPlanIndex((prev) =>
                  prev < sortedPlans.length - 1 ? prev + 1 : prev
                )
              }
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next plan"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#2A2A2A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {sortedPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isPopular={plan.name.toLowerCase() === "gold"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

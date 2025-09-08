import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideArrow from "../../assets/pricing-pg/sideArrow.png";
import Tik from "../../assets/pricing-pg/tik.png";
import Rarrow from "../../assets/pricing-pg/Rarrow.png";
import LArrow from "../../assets/pricing-pg/Larrow.png";
import ConfirmPG from "../../assets/pricing-pg/ConfirmPG.png";
import logoImg from "../../assets/Logo1.png";
import Paper from "../../assets/pricing-pg/paper.png";
import Con1 from "../../assets/pricing-pg/Con1.png";

export default function AfterConformationPage() {
     const [showMore, setShowMore] = useState(false);
    return (
       <div>
             <section
               className="relative w-full min-h-[1024px] p-[50px] flex flex-col justify-start items-start bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: `url(${ConfirmPG})` }}
             >
               {/* Back Button */}
               {/* <Link to="/AfterHeroPricing#afteruiplans">
                 <div className="w-[52px] h-[52px] rounded-[48px] px-[17px] py-[8px] bg-[#8A38F5] flex justify-center items-center fill-[#007B82] text-[#007B82]">
                   <img src={LArrow} alt="back" />
                 </div>
               </Link> */}
       
               {/* Main Content */}
               <div className="w-full h-auto flex flex-col md:flex-row justify-center items-start gap-[52px] mt-32">
                 {/* Left Side - Features */}
                 <div className="w-[497px] flex flex-col justify-start items-start gap-[52px]">
                   {/* Logo and Plan Info */}
                   <div className="flex flex-col gap-[18px]">
                     <div className="w-[325.42px] h-[65px]">
                       <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
                       <div className="w-[54px] h-0 border-[2px] border-solid border-white opacity-100"></div>
       
                     </div>
                     <div className="flex flex-col gap-2 w-[497px] h-[98px] opacity-100 mt-8">
                      <div className="flex items-center gap-4 text-white poppins-font">
  <span className="text-[40px] font-[400]">Gold Plan</span>
  <span
    className="text-white text-[16px] border border-[#FFAA17] rounded-[16px] px-[10px] py-[4px] flex items-center justify-center"
    style={{
      width: '122px',
      height: '40px',
      background: 'linear-gradient(180deg, #FFAA17 0%, #99660E 100%)',
    }}
  >
    Most Popular
  </span>
</div>

                       <div className="text-white text-[20px] leading-[100%] font-[400] poppins-font">
                           Get ready to unlock <span style={{ color: '#FFD700', fontWeight: 'bold' }}>Gold</span> Subscription benefits
                            
                       </div>
                     </div>
       
                   </div>
       
                   {/* Features List */}
                   <div className="flex flex-col gap-[16px] -mt-8">
                     {[
                       " Unlimited Room Designs",
                       " Commercial use upto 3-5 members",
                       " Fully customized AI designs with layout and lighting suggestions",
                       "Unlimited design revisions",
                     ].map((feature, idx) => (
                       <div key={idx} className="flex gap-2 items-center">
                         <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-[linear-gradient(180deg,#8A38F5_0%,#51218F_100%)] rounded-[4px] flex items-center justify-center shadow-[0px_0px_4px_0px_#FFFFFF29]">
                           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="w-3 h-3">
                             <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                         </div>
                         <div className="font-medium text-lg text-white">{feature}</div>
                       </div>
                     ))}
       
                     {/* Extra Features if expanded */}
                     {showMore && (
                       <>
                         {[
                           "Priority email support",
                           "Basic customization options",
                           "Limited revisions (up to 3)",
                           "No watermark on images",
                         ].map((feature, idx) => (
                           <div key={idx} className="flex gap-2 items-center">
                             <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-[linear-gradient(180deg,#8A38F5_0%,#51218F_100%)] rounded-[4px] flex items-center justify-center shadow-[0px_0px_4px_0px_#FFFFFF29]">
                               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="w-3 h-3">
                                 <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                               </svg>
                             </div>
                             <div className="font-medium text-lg text-white">{feature}</div>
                           </div>
                         ))}
                       </>
                     )}
       
                     {/* Toggle Button */}
                     <button
                       onClick={() => setShowMore(!showMore)}
                       className="flex gap-2 items-center text-left mt-2"
                     >
                       <svg
                         width="32"
                         height="32"
                         viewBox="0 0 24 24"
                         fill="none"
                         className={`w-5 h-5 transition-transform duration-300 ${showMore ? "rotate-90" : ""}`}
                       >
                         <defs>
                           <linearGradient id="arrowGradient" x1="0" y1="0" x2="24" y2="24">
                             <stop offset="0%" stopColor="#8A38F5" />
                           </linearGradient>
                         </defs>
                         <path
                           d="M8 5L15 12L8 19"
                           stroke="url(#arrowGradient)"
                           strokeWidth="2.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                         />
                       </svg>
                       <div className="font-medium text-lg text-white">{showMore ? "See less" : "See 4 more"}</div>
                     </button>
                   </div>
                 </div>
       
                 {/* Right Side - Plan Details */}
                 <div className="w-[485px] flex flex-col justify-start items-center gap-[20px] ">
                   <div
                     className="w-full h-[490px] rounded-[18px] p-[20px] flex flex-col gap-[30px] border-[1.18px] border-solid border-[#FFFFFF1F] backdrop-blur-lg"
                     style={{
                       backgroundColor: "rgba(255, 255, 255, 0.02)",
                       borderColor: "rgba(255, 255, 255, 0.08)",
                       backdropFilter: "blur(14.18px)",
                       boxShadow: "0px 0px 23.63px 0px #00000040",
                     }}
                   >
                     <div className="font-semibold text-[white] text-[20px] leading-[100%] poppins-font">
                       Plan Details
                     </div>
       
                     <div
                       className="w-[357px] h-[177px] rounded-[18px] p-[18px] border-[1px] border-solid border-[#89898999] mx-auto"
                       style={{
                         backdropFilter: "blur(14.18px)",
                         boxShadow: "0px 0px 23.63px 0px #0A0A0A40",
                       }}
                     >
                       <div className="flex flex-col items-center">
                         {[
                           ["Plan Name", "Gold"],
                           ["Price", "$59.00"],
                           ["Duration", "One Month"],
                           ["Discount", "10%"]
                         ].map(([label, value], idx) => (
                           <div key={idx} className="w-[303px] h-[35px] flex">
                             <div className="w-[50%] flex items-center text-white font-medium poppins-font text-[18px]">{label}</div>
                             <div className="w-[50%] flex items-center text-white font-semibold poppins-font text-[18px]">{value}</div>
                           </div>
                         ))}
                       </div>
                     </div>
       
                     {/* Grand Total */}
                     <div className="w-full flex justify-center mt-12">
                       <div className="w-[334.79px] h-[66.32px] flex justify-between items-center">
                         <div className="flex flex-col justify-start gap-[10.46px]">
                           <div className="text-[20px] font-[400] text-white poppins-font">
                             Grand Total
                           </div>
                           <div className="text-[25px] font-[600] text-white poppins-font">
                            ₹59
                           </div>
                         </div>
                         <div className="w-[38px] h-[51px]">
                           <img src={Paper} alt="page-icon" />
                         </div>
                       </div>
                     </div>
                   </div>
       
                   {/* Confirm Payment Button */}
                   <Link to="/AfterBilling" className="w-full flex justify-center mt-10">
                     <div
                       className="flex items-center justify-center gap-2 text-white text-[18px] font-semibold text-center cursor-pointer"
                       style={{
                         width: 346,
                         height: 52,
                         borderRadius: 35.45,
                         border: "1.18px solid #C22CA299",
                         padding: "11.82px 35.45px",
                         background: "linear-gradient(95.92deg, rgba(138,56,245,0.5) 15.32%, rgba(194,44,162,0.5) 99.87%)",
                         backdropFilter: "blur(14.18px)",
                         boxShadow: "0 0 23.63px 0 #00000040",
                       }}
                     >
                       <span>Confirm Payment</span>
                       <img
                         src={Con1}
                         alt="icon"
                         style={{ width: 28.36, height: 28.36, opacity: 1 }}
                       />
                     </div>
                   </Link>
                 </div>
               </div>
             </section>
           </div>
    );
}

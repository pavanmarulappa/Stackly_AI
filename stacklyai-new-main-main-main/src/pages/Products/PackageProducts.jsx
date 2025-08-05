// import React from "react";
// import Coin from "../../../src/assets/product-pg/coin.png";
// import { Link } from "react-router-dom";

// export default function PackageProducts() {
//   return (
//     <div className="w-full min-h-[689px] flex justify-center items-center flex-col mt-[400px] mb-[-200px]">
//       <div className="w-full min-h-[234px] bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82]"></div>
//       <div className="max-w-[840px] min-h-[441px] rounded-[20px] p-[40px] flex flex-col items-center justify-center gap-[34px] bg-white mt-[-350px] border-2 border-[#007B82] shadow-sm shadow-[#007B82]">
//         <div className="max-w-[760px] min-h-[114px] font-semibold text-[41px] leading-[140%] text-center text-[#2A2A2A]">
//           Step up to <span className="text-[#F3AE00]">GOLD</span> for all
//           Premium Benefits!
//         </div>
//         <Link to="/Sign-in">
//           {" "}
//           <div className="w-[406px] min-h-[60px] rounded-[5px] bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-[20px] font-bold leading-[35px] spacing-[8px] text-center text-white flex justify-center items-center">
//             GET STARTED!
//           </div>
//         </Link>
//       </div>

//       <div className="w-[57.1px] h-[37.47px] rotate-[30deg] relative top-[-100px] right-[-280px]">
//         <img src={Coin} alt="" />
//       </div>
//       <div className="w-[25.22px] h-[16.55px] rotate-[-30deg] relative top-[-100px] right-[-300px]">
//         <img src={Coin} alt="" />
//       </div>
//       <div className="w-[25.22px] h-[16.55px] rotate-[-30deg] relative top-[-150px] right-[-320px]">
//         <img src={Coin} alt="" />
//       </div>

//       <div className="w-[65.84px] h-[43.2px] rotate-[-30deg] relative top-[-300px] left-[-590px]">
//         <img src={Coin} alt="" />
//       </div>
//       <div className="w-[33.03px] h-[21.68px] rotate-[-30deg] opacity-[60%] relative top-[-320px] left-[-630px]">
//         <img src={Coin} alt="" />
//       </div>
//       <div className="w-[65.84px] h-[43.2px] rotate-[30deg] relative top-[-350px] right-[-590px]">
//         <img src={Coin} alt="" />
//       </div>
//       <div className="w-[33.03px] h-[21.68px] rotate-[30deg] opacity-[60%] relative top-[-380px] right-[-630px]">
//         <img src={Coin} alt="" />
//       </div>

//       <div className="w-[65.84px] h-[43.2px] rotate-[-30deg] relative top-[-650px] left-[-420px] -z-10">
//         <img src={Coin} alt="" />
//       </div>
//       <div className="w-[65.84px] h-[55.18px] rotate-[-30deg] relative top-[-710px] -z-10">
//         <img src={Coin} alt="" />
//       </div>
//       <div className="w-[103.57px] h-[86.81px] rotate-[-30deg] opacity-[20%] relative left-[200px] top-[-930px]">
//         <img src={Coin} alt="" />
//       </div>
//       <div className="w-[65.84px] h-[43.2px] rotate-[30deg] opacity-[20%] relative left-[-200px] top-[-1000px]">
//         <img src={Coin} alt="" />
//       </div>
//       <div className="w-[103.57px] h-[86.81px] rotate-[-30deg] opacity-[20%] relative top-[-300px]">
//         <img src={Coin} alt="" />
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import Coin from "../../../src/assets/product-pg/coin.png";
// import { Link } from "react-router-dom";

// export default function PackageProducts() {
//    return (
//     <div>
//       {/* Desktop View (≥441px) */}
//       <div className="w-full min-h-[689px] flex justify-center items-center flex-col mt-[400px] mb-[-200px] hidden min-[441px]:flex">
//         <div className="w-full min-h-[234px] bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82]"></div>
//         <div className="max-w-[840px] min-h-[441px] rounded-[20px] p-[40px] flex flex-col items-center justify-center gap-[34px] bg-white mt-[-350px] border-2 border-[#007B82] shadow-sm shadow-[#007B82]">
//           <div className="max-w-[760px] min-h-[114px] font-semibold text-[41px] leading-[140%] text-center text-[#2A2A2A]">
//             Step up to <span className="text-[#F3AE00]">GOLD</span> for all Premium Benefits!
//           </div>
//           <Link to="/Sign-in">
//             <div className="w-[406px] min-h-[60px] rounded-[5px]  text-[20px] font-bold leading-[35px] spacing-[8px] text-center text-white flex justify-center items-center"
//             style={{backgroundImage:
//                     "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)",
//                 }}
//             >
//               GET STARTED!
//             </div>
//           </Link>
//         </div>

//         {/* Coins (Desktop) */}
//         <div className="w-[57.1px] h-[37.47px] rotate-[30deg] relative top-[-100px] right-[-280px]"><img src={Coin} alt="" /></div>
//         <div className="w-[25.22px] h-[16.55px] rotate-[-30deg] relative top-[-100px] right-[-300px]"><img src={Coin} alt="" /></div>
//         <div className="w-[25.22px] h-[16.55px] rotate-[-30deg] relative top-[-150px] right-[-320px]"><img src={Coin} alt="" /></div>
//         <div className="w-[65.84px] h-[43.2px] rotate-[-30deg] relative top-[-300px] left-[-590px]"><img src={Coin} alt="" /></div>
//         <div className="w-[33.03px] h-[21.68px] rotate-[-30deg] opacity-[60%] relative top-[-320px] left-[-630px]"><img src={Coin} alt="" /></div>
//         <div className="w-[65.84px] h-[43.2px] rotate-[30deg] relative top-[-350px] right-[-590px]"><img src={Coin} alt="" /></div>
//         <div className="w-[33.03px] h-[21.68px] rotate-[30deg] opacity-[60%] relative top-[-380px] right-[-630px]"><img src={Coin} alt="" /></div>
//         <div className="w-[65.84px] h-[43.2px] rotate-[-30deg] relative top-[-650px] left-[-420px] -z-10"><img src={Coin} alt="" /></div>
//         <div className="w-[65.84px] h-[55.18px] rotate-[-30deg] relative top-[-710px] -z-10"><img src={Coin} alt="" /></div>
//         <div className="w-[103.57px] h-[86.81px] rotate-[-30deg] opacity-[20%] relative left-[200px] top-[-930px]"><img src={Coin} alt="" /></div>
//         <div className="w-[65.84px] h-[43.2px] rotate-[30deg] opacity-[20%] relative left-[-200px] top-[-1000px]"><img src={Coin} alt="" /></div>
//         <div className="w-[103.57px] h-[86.81px] rotate-[-30deg] opacity-[20%] relative top-[-300px]"><img src={Coin} alt="" /></div>
//       </div>

//       {/* Mobile View (≤440px) */}
//      {/* Mobile View (≤440px) */}
// <div className="flex flex-col items-center justify-center min-[441px]:hidden relative w-full py-[60px] px-4">

//   {/* Gradient Background */}
//   <div className="w-[400px] h-[87px] absolute top-[172px] left-1/2 -translate-x-1/2 z-0 rounded-[12px] bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82]"></div>

//   {/* White Card */}
//   <div className="w-[320px] min-h-[200px] rounded-[12px] p-[16px] flex flex-col items-center justify-center gap-[24px] bg-white border border-[#007B82] shadow-sm shadow-[#007B82] relative z-10 mt-[60px]">
//     <div className="text-[16px] font-semibold text-center text-[#2A2A2A] leading-[140%]">
//       Step up to <span className="text-[#F3AE00]">GOLD</span> for all Premium Benefits!
//     </div>
//     <Link
//       to="/Sign-in"
//       className="w-full max-w-[282px] h-[45px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-[18px] font-bold text-white flex justify-center items-center hover:opacity-90 transition-opacity"
//     >
//       GET STARTED!
//     </Link>
//   </div>

//   {/* All Coin Decorations */}
//   <div className="absolute inset-0 z-10 pointer-events-none">

//     {/* Top Left Coin */}
//     <div className="w-[64.18px] h-[42.84px] rotate-[-30.86deg] absolute top-[49.91px] left-[90.83px] opacity-20">
//       <img src={Coin} alt="" className="w-full h-full object-contain" />
//     </div>

//     {/* Top Right 2 Coins */}
//     <div className="w-[44.88px] h-[29.45px] rotate-[30deg] absolute top-[33.91px] left-[343.98px]">
//       <img src={Coin} alt="" className="w-full h-full object-contain" />
//     </div>
//     <div className="w-[34.77px] h-[22.82px] rotate-[30deg] absolute top-[62.93px] left-[381.24px] opacity-60">
//       <img src={Coin} alt="" className="w-full h-full object-contain" />
//     </div>

//     {/* Bottom Left Big Coin */}
//     <div className="w-[100.96px] h-[86.09px] rotate-[-30.86deg] opacity-20 absolute top-[379.91px] left-0">
//       <img src={Coin} alt="" className="w-full h-full object-contain" />
//     </div>

//     {/* Bottom Center Coin */}
//     <div className="w-[41.53px] h-[37.15px] rotate-[-30deg] absolute top-[356.23px] left-[146.52px]">
//       <img src={Coin} alt="" className="w-full h-full object-contain" />
//     </div>

//     {/* Bottom Right Coin */}
//     <div className="w-[83.17px] h-[71.77px] rotate-[-16.62deg] absolute top-[350px] left-[341.04px]">
//       <img src={Coin} alt="" className="w-full h-full object-contain" />
//     </div>

//     {/* 👇 Grouped Coins */}
//     <div className="absolute top-[217px] left-[310px]">
//       <div className="w-[33.7px] h-[22.11px] rotate-[30deg] opacity-60 absolute top-0 left-0">
//         <img src={Coin} alt="" className="w-full h-full object-contain" />
//       </div>
//       <div className="w-[14.88px] h-[9.77px] rotate-[-30deg] absolute top-[15px] left-[-7px] -z-10">
//         <img src={Coin} alt="" className="w-full h-full object-contain" />
//       </div>
//       <div className="w-[14.88px] h-[9.77px] rotate-[-30deg] absolute top-0 left-[4px] -z-10">
//         <img src={Coin} alt="" className="w-full h-full object-contain" />
//       </div>
//     </div>
//   </div>
// </div>

//       </div>


//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import Coins from "../../assets/product-pg/GroupCoin.png";
import StarLight from "../../assets/product-pg/StarLight.png";
import bg from "../../assets/product-pg/bg.png";
import Ellipseblur from "../../assets/product-pg/sec3bg.png";
import packageBg from "../../assets/product-pg/packageBg.png";
import Rectangle from "../../assets/product-pg/Rectangle.png";
import EclicpBlur2 from "../../assets/product-pg/EclicpBlur2.png";

export default function SignUpBanner() {
  return (
// NEW FIGMA DISGINE
<section className="w-full h-[647px] bg-black relative overflow-hidden">
  
  <img
          src={Ellipseblur}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
  {/* coin img */}
 <div
  className="absolute w-[123.61px] h-[110.34px] z-[9999]" 
  style={{ top: "476px", left: "1190px" }}
>
  <img
    src={Coins}
    alt="Coins"
    className="w-full h-full object-contain pointer-events-none"
  />
</div>
{/* star light */}
<div
  className="absolute w-[157.53px] h-[150px] z-[9999]"
  style={{ top: "45px", left: "1175px" }} // Change position as needed
>
  <img
    src={StarLight}
    alt="Star Light"
    className="w-full h-full object-contain pointer-events-none"
  />
</div>
{/* BLUR DIV */}
<div className="absolute w-[19px] h-[26px] top-[523.91px] left-[110.31px] rotate-[34.5deg] bg-[#FFB200] opacity-100 blur-[12px] shadow-[0_0_40px_20px_rgba(255,178,0,0.6)] rounded-full z-[9999]"></div>




  {/* <div
  className="absolute w-[888px] h-[888px] top-[-120px] left-[506px] opacity-100 rotate-0"
  style={{
    backgroundImage: `url(${packageBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div> */}
{/* main div */}
<div
  className="absolute w-[1147px] h-[456px] top-[98px] left-1/2 -translate-x-1/2 transform opacity-100 rotate-0 backdrop-blur-sm"
  style={{
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)", // For Safari support
  }}
>
<div
  className="absolute w-[1147px] h-[456px] top-0 left-0 rounded-[32px] border-[8px] overflow-hidden"
  style={{
    background: "#FFD33E1A",
    
  }}
>
  {/* Rectangle image overlay */}
  <img 
    src={Rectangle} 
    alt="Decorative border"
    className="absolute w-full h-full object-cover mix-blend-overlay opacity-20" 
    style={{
      pointerEvents: 'none' // makes the image non-interactive
    }}
  />
  <div
  className="absolute w-[263px] h-[37px] left-[442px] rounded-[40px]"
  style={{
    background: "linear-gradient(180deg, #E19E2C 0%, #F1E06C 39.19%, #694003 78.38%)",
  }}
></div>
<div className="absolute w-[123.61px] h-[110.34px]" style={{ top: "476px", left: "1215px" }}>
  <img src={Coins} alt="Coins" className="w-full h-full object-contain pointer-events-none" />
</div>


  <div
  className="absolute w-[1025px] h-[274px] top-[91.5px] left-[67px] flex flex-col items-center gap-[20px] opacity-100"
>
  {/* Top Child Div - Heading */}
  <div className="w-[927px] h-[200px] flex items-center justify-center text-center">
    <h2
      className="text-[52px] font-[600] italic leading-[140%]"
      style={{
        fontFamily: 'Lora',
        background: "linear-gradient(180deg, #FFFFFF 11%, #FFD980 48.37%, #FFB300 85.75%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Elevate Your Experience with Every High Perk!
    </h2>
  </div>

  {/* Bottom Child Div - Button */}
  <div
  className="w-[337px] h-[54px] flex items-center justify-center rounded-[58px] border-[2px] px-[146px] py-[12px]"
  style={{
    background: "linear-gradient(180deg, #FFF996 -53.7%, #CC8913 40.28%, #9A762A 134.26%)",
  }}
>
  <p
    className="text-[20px] font-medium leading-[100%] text-center whitespace-nowrap"
    style={{
      fontFamily: 'poppins-font',
      color: '#FFFFFF',
    }}
  >
    Activate Pro Subscription
  </p>
</div>
</div>
</div>
</div>
</section>






//old figma disgine
//  <section
//   className="hidden relative w-full min-h-[606px] 
//     flex justify-center items-center px-6 py-16
//     bg-center bg-cover bg-no-repeat
//     max-sm:min-h-[330px] max-sm:px-5 max-sm:py-10
//     min-[441px]:max-[768px]:w-[768px]
//     min-[441px]:max-[768px]:min-h-[490px]
//     min-[441px]:max-[768px]:px-[40px]
//     min-[441px]:max-[768px]:py-[60px]"
//   style={{ backgroundImage: `url(${bg})` }}
// >



      
//       <img
//         src={Coin1}
//         alt="Coin1"
//         className="absolute top-[466px] left-[1250px] w-[66px] h-[56px] object-contain z-10 max-sm:top-[150px] max-sm:left-[80%] max-sm:w-[40px] max-sm:h-[34px]"
//       />
//       <img
//         src={Coin1}
//         alt="Coin1"
//         className="absolute top-[500px] left-[1220px] w-[66px] h-[43px] object-contain z-10 max-sm:top-[180px] max-sm:left-[75%] max-sm:w-[35px] max-sm:h-[23px]"
//       />
//     <img
//   src={Coin1}
//   alt="Coin1"
//   className="absolute top-[429px] left-[231px] w-[104px] h-[87px] object-contain z-0

//     max-sm:top-[100px] max-sm:left-[10%] max-sm:w-[60px] max-sm:h-[50px]

//     min-[441px]:max-[768px]:top-[390px]
//     min-[441px]:max-[768px]:left-[90px]"
// />


//     <div
//   className="relative z-10 w-full max-w-[778px] h-[340px] flex flex-col justify-center items-center gap-6 px-[30px] py-10 rounded-[20px] max-sm:hidden

//     min-[441px]:max-[768px]:max-w-[688px]
//     min-[441px]:max-[768px]:h-[231px]"
//   style={{
//     background: "linear-gradient(98.48deg, #FCBD18 6.37%, #FBEFD0 50.02%, #FCBD18 93.66%)",
//     backdropFilter: "blur(2px)",
//     border: "1px solid transparent",
//     borderRadius: "20px",
//     overflow: "hidden",
//   }}
// >

//         <h1 className="w-[530px] h-[100px] text-[36px] font-semibold leading-[140%] text-center text-[#2A2A2A] font-inter max-md:text-[28px]">
//           Step up to <span className="text-[#F3AE00]">GOLD</span> for all Premium Benefits!
//         </h1>

//         <Link to="/sign-up" className="w-full max-w-[406px]">
//           <div
//             className="w-[406px] h-[60px] flex justify-center items-center rounded-xl text-[18px] font-semibold text-[#FFFFFF] max-md:h-[48px] max-md:text-[16px]"
//             style={{
//               background: "linear-gradient(177.23deg, #FFAB18 -146.36%, #99670E 331.21%)",
//             }}
//           >
//             GET STARTED!
//           </div>
//         </Link>

//         <img
//           src={Coins}
//           alt="Coins"
//           className="absolute bottom-[15px] right-[15px] w-[100px] h-auto object-contain"
//         />
//       </div>

//       <div
//         className="relative z-10 w-full max-w-[90%] h-[280px] sm:hidden flex flex-col justify-center items-center gap-6 px-6 py-8 rounded-[20px]"
//         style={{
//           background: "linear-gradient(98.48deg, #FCBD18 6.37%, #FBEFD0 50.02%, #FCBD18 93.66%)",
//           backdropFilter: "blur(2px)",
//           border: "1px solid transparent",
//           borderRadius: "20px",
//           overflow: "hidden",
//         }}
//       >
//         <h1 className="text-[24px] font-semibold leading-[140%] text-center text-[#2A2A2A] font-inter px-4">
//           Step up to <span className="text-[#F3AE00]">GOLD</span> for Premium!
//         </h1>

//         <Link to="/sign-up" className="w-full max-w-[300px]">
//           <div
//             className="w-full h-[50px] flex justify-center items-center rounded-xl text-[16px] font-semibold text-[#FFFFFF]"
//             style={{
//               background: "linear-gradient(177.23deg, #FFAB18 -146.36%, #99670E 331.21%)",
//             }}
//           >
//             GET STARTED!
//           </div>
//         </Link>

        
//         <img
//           src={Coins}
//           alt="Coins"
//           className="absolute bottom-[10px] right-[10px] w-[70px] h-auto object-contain"
//         />
//       </div>
//     </section>
  );
}
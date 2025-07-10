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
import Frame from "../../assets/home/Frame.png";

export default function SignUpBanner() {
  return (
    <section
      className="relative w-full min-h-[612px] flex justify-center items-center px-6 py-16
        bg-center bg-cover bg-no-repeat
        max-sm:min-h-[330px] max-sm:px-5 max-sm:py-10"
      style={{ backgroundImage: "url('/home/sec8/Bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000cc] z-0" />

      {/* Desktop Version */}
      <div
        className="relative z-10 w-full max-w-[836px] h-[264px] flex flex-col justify-center items-center gap-6 px-[30px] py-10 rounded-[20px] max-sm:hidden"
        style={{
          background: "rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(2px)",
          border: "1px solid transparent",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {/* Border Gradient */}
        <div
          className="absolute inset-0 rounded-[20px] pointer-events-none"
          style={{
            background:
              "linear-gradient(276.41deg, #FFFFFF -0.87%, #999999 97.94%)",
            padding: "2px",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        ></div>

        <h1 className="text-[32px] font-semibold leading-[140%] text-center text-white font-inter max-md:text-[28px]">
          Sign Up Quickly! Get <span className="text-[#00d1dd]">25%</span> Offer
        </h1>

        <div className="flex justify-between items-center w-full max-w-[405px] gap-4 max-md:flex-col max-md:gap-3">
          <p className="text-[#FFFFFF] text-[18px] font-medium leading-[140%] max-md:text-[16px]">
            <span className="w-[8px] h-[8px] rounded-full bg-[#00B0BA] mr-3 inline-block"></span>
            30 free outputs
          </p>
          <p className="text-[#FFFFFF] text-[18px] font-medium leading-[140%] max-md:text-[16px]">
            <span className="w-[8px] h-[8px] rounded-full bg-[#00B0BA] mr-3 inline-block"></span>
            No credit card required
          </p>
        </div>

        <Link to="/sign-up" className="w-full max-w-[406px]">
          <div
            className="w-full h-[54px] flex justify-center items-center rounded-xl text-[18px] font-semibold text-[#FFFFFF] max-md:h-[48px] max-md:text-[16px]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)",
            }}
          >
            <span className="mr-[6px]">Start Free Trial</span>
            <img
              src={Frame}
              alt="upload"
              className="w-[24px] h-[24px] object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Mobile Version */}
      <div
        className="relative z-10 w-full max-w-[371px] min-h-[250px] sm:hidden flex flex-col justify-center items-center gap-3 p-6 rounded-[12px]"
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(2px)",
          border: "1px solid transparent",
          borderRadius: "20px",
        }}
      >
        <h1 className="text-[18px] font-semibold leading-[140%] text-center text-white font-inter">
          Sign Up Quickly! Get <span className="text-[#00d1dd]">25%</span> Offer
        </h1>

        <ul className="flex flex-col gap-3 w-full items-center">
          <li className="text-white text-[13px] font-[500] leading-[140%] flex items-center before:content-[''] before:inline-block before:w-[6px] before:h-[6px] before:bg-[#007B82] before:rounded-full before:mr-2">
            30 free outputs
          </li>
          <li className="text-white text-[13px] font-[500] leading-[140%] flex items-center before:content-[''] before:inline-block before:w-[6px] before:h-[6px] before:bg-[#007B82] before:rounded-full before:mr-2">
            No credit card required
          </li>
        </ul>

        <Link to="/sign-up" className="w-full max-w-[258px]">
          <div
            className="w-full h-[45px] flex justify-center items-center rounded-[8px] border border-white text-[16px] font-[700] text-white px-5"
            style={{
              background:
                "linear-gradient(to right, #00B0BA 0%, #000000 50%, #007B82 100%)",
            }}
          >
            Signup
          </div>
        </Link>
      </div>
    </section>
  );
}


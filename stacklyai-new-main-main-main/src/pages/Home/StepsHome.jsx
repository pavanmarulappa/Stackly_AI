// import React from 'react'

// export default function StepsHome() {
//   return (
// <section className="w-full pb-20 px-5 ">
//     <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
//       <h1 className=" w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black">
//         <span className="text-[#007B82]">SIMPLIFY DESIGN </span>WITH{" "}
//         <span className="text-[#007B82]">STACKLYAI</span>
//       </h1>
//       <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A]">
//         3 Easy Steps to Get Started
//       </p>
//     </div>

//     <div className="step1">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
//         style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
//           Step 1:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//         <span className="text-[#007B82]"> Upload </span>a photo of your room,
//         home, or outdoor space.
//       </p>
//     </div>
//     <div className="step2 flex flex-col items-center">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
//         style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
//           Step 2:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//         <span className="text-[#007B82]"> Personalize your experience </span>—
//         choose the room type, adjust AI creativity, add special
//         instructions, and select your favorite design style
//       </p>
//     </div>

//     <div className="step3 flex flex-col items-end">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
//         style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
//           Step 3:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//         <span className="text-[#007B82]">Generate</span> stunning new decor and
//         design concepts in under 25 seconds.
//       </p>
//     </div>
//   </section>

//     <section className="w-full pb-20 px-5">
//   {/* Header Section */}
//   <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
//     <h1 className="w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black">
//       <span className="text-[#007B82]">SIMPLIFY DESIGN </span>
//       WITH <span className="text-[#007B82]">STACKLYAI</span>
//     </h1>
//     <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A]">
//       3 Easy Steps to Get Started
//     </p>
//   </div>

//   {/* Steps Row */}
//   <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-10 flex-wrap">
//     {/* Step 1 */}
//     <div className="flex flex-col items-center">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//         style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//           Step 1:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//         <span className="text-[#007B82]">Upload</span> a photo of your room,
//         home, or outdoor space.
//       </p>
//     </div>

//     {/* Step 2 */}
//     <div className="flex flex-col items-center">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//         style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//           Step 2:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//         <span className="text-[#007B82]">Personalize your experience</span> —
//         choose the room type, adjust AI creativity, add special instructions, and select your favorite design style
//       </p>
//     </div>

//     {/* Step 3 */}
//     <div className="flex flex-col items-center">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//         style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//           Step 3:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//         <span className="text-[#007B82]">Generate</span> stunning new decor and
//         design concepts in under 25 seconds.
//       </p>
//     </div>
//   </div>
// </section>

//     <section className="w-full pb-20 px-5">
//   <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
//     <h1 className="w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black">
//       <span className="text-[#007B82]">SIMPLIFY DESIGN </span>WITH{' '}
//       <span className="text-[#007B82]">STACKLYAI</span>
//     </h1>
//     <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A]">
//       3 Easy Steps to Get Started
//     </p>
//   </div>

//   {/* Steps Container */}
//   <div className="flex flex-row flex-wrap justify-center items-start gap-8 mt-16">
//     <SlideInView direction="left" delay={0.2}>
//       <div className="flex flex-col items-center">
//         <div
//           className="w-[450px] min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-lg" // Increased width and added border radius
//           style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//         >
//           <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold text-white rounded-[60px]">
//             Step 1:
//           </div>
//         </div>
//         <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//           <span className="text-[#007B82]">Upload</span> a photo of your room,
//           home, or outdoor space.
//         </p>
//       </div>
//     </SlideInView>

//     <SlideInView direction="bottom" delay={0.4}>
//       <div className="flex flex-col items-center">
//         <div
//           className="w-[450px] min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-lg" // Increased width and added border radius
//           style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}
//         >
//           <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold text-white rounded-[60px]">
//             Step 2:
//           </div>
//         </div>
//         <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//           <span className="text-[#007B82]">Personalize your experience</span> — choose the room type, adjust AI creativity, add special instructions, and select your favorite design style.
//         </p>
//       </div>
//     </SlideInView>

//     <SlideInView direction="right" delay={0.6}>
//       <div className="flex flex-col items-center">
//         <div
//           className="w-[450px] min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-lg" // Increased width and added border radius
//           style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//         >
//           <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold text-white rounded-[60px]">
//             Step 3:
//           </div>
//         </div>
//         <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//           <span className="text-[#007B82]">Generate</span> stunning new décor and design concepts in under 25 seconds.
//         </p>
//       </div>
//     </SlideInView>
//   </div>
// </section>
//   )
// }
// import React from "react";
// import SlideInView from "../../components/SlideInView.jsx";

// export default function StepsHome() {
//   return (
//     <section className="w-full h-auto pb-20 px-5 mt-5">
//       {/* Header Section */}
//       <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
//         <h1 className="w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black">
//           <span className="text-[#007B82]">SIMPLIFY DESIGN </span>
//           WITH <span className="text-[#007B82]">STACKLYAI</span>
//         </h1>
//         <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A]">
//           3 Easy Steps to Get Started
//         </p>
//       </div>

//       {/* Steps Row */}
//       <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-10 flex-wrap">
//         {/* Step 1 */}
//         <SlideInView delay={0}>
//           <div className="flex flex-col items-center">
//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//               style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//                 Step 1:
//               </div>
//             </div>
//             <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//               <span className="text-[#007B82]">Upload</span> a photo of your
//               room, home, or outdoor space.
//             </p>
//           </div>
//         </SlideInView>

//         {/* Step 2 */}
//         <SlideInView delay={0.3}>
//           <div className="flex flex-col items-center">
//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//               style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}
//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//                 Step 2:
//               </div>
//             </div>
//             <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//               <span className="text-[#007B82]">
//                 Personalize your experience
//               </span>{" "}
//               — choose the room type, adjust AI creativity, add special
//               instructions, and select your favorite design style
//             </p>
//           </div>
//         </SlideInView>

//         {/* Step 3 */}
//         <SlideInView delay={0.6}>
//           <div className="flex flex-col items-center">
//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//               style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//                 Step 3:
//               </div>
//             </div>
//             <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//               <span className="text-[#007B82]">Generate</span> stunning new
//               decor and design concepts in under 25 seconds.
//             </p>
//           </div>
//         </SlideInView>
//       </div>
//     </section>
//   );
// }
// import React from "react";
// import SlideInView from "../../components/SlideInView.jsx";

// export default function StepsHome() {
//   return (
//    <section className="w-full h-auto pb-20 px-5 mt-5 
//   max-[440px]:w-[440px] max-[440px]:h-[585px] 
//   max-[440px]:flex max-[440px]:flex-col 
//   max-[440px]:pt-[40px] max-[440px]:px-[20px] max-[440px]:pb-[40px] max-[440px]:gap-[45px]">

//       {/* Header Section */}
//     <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5 
//   max-[440px]:w-[400px] max-[440px]:h-[53px] max-[440px]:gap-[16px] 
//   max-[440px]:mt-[-132px]">

//        <h1 className="w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black 
//   max-[440px]:w-[400px] max-[440px]:h-[22px] 
//   max-[440px]:font-['Inter'] max-[440px]:font-semibold 
//   max-[440px]:text-[18px] max-[440px]:leading-[100%] 
//   max-[440px]:tracking-[0] max-[440px]:text-center">
//   <span className="text-[#007B82]">SIMPLIFY DESIGN </span>
//   WITH <span className="text-[#007B82]">STACKLYAI</span>
// </h1>

//       <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A] 
//   max-[440px]:w-[400px] max-[440px]:h-[17px] 
//   max-[440px]:font-['Inter'] max-[440px]:font-normal 
//   max-[440px]:text-[14px] max-[440px]:leading-[100%] 
//   max-[440px]:tracking-[0] max-[440px]:text-center 
//   max-[440px]:mt-[-33px]">
//   3 Easy Steps to Get Started
// </p>


//       </div>

//       {/* Steps Row */}
//       <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-10 flex-wrap 
//   max-[440px]:flex-row max-[440px]:w-[400px] max-[440px]:h-[237px] 
//   max-[440px]:justify-between max-[440px]:px-[4px] max-[440px]:gap-[8px] 
//   max-[440px]:mt-[-120px]">


//         {/* Step 1 */}
//         <SlideInView delay={0}>
//          <div className="flex flex-col items-center 
//   max-[440px]:flex-col max-[440px]:w-[120px] max-[440px]:h-[169px] max-[440px]:gap-[28px]">

//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]
//   max-[440px]:w-[120px] max-[440px]:h-[90px] max-[440px]:rounded-[4px]"
// style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px] max-[440px]:hidden">
//   Step 1:
// </div>

//             </div>
//            <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5
//   max-[440px]:w-[120px] max-[440px]:h-[51px]
//   max-[440px]:font-['Inter'] max-[440px]:font-normal
//   max-[440px]:text-[12px] max-[440px]:leading-[140%]
//   max-[440px]:tracking-[0] max-[440px]:text-center">
//   <span className="text-[#007B82]">Upload</span> a photo of your
//   room, home, or outdoor space.
// </p>

//           </div>
//         </SlideInView>

//         {/* Step 2 */}
//         <SlideInView delay={0.3}>
//          <div className="flex flex-col items-center
//   max-[440px]:flex-col max-[440px]:w-[134px] max-[440px]:h-auto
//   max-[440px]:gap-[28px]">

//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]
//   max-[440px]:w-[120px] max-[440px]:h-[90px] max-[440px]:rounded-[4px]"
// style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}

//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px] max-[440px]:hidden">
//   Step 2:
// </div>

//             </div>
//             <p
//   className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5
//     max-[440px]:w-[134px] max-[440px]:h-[119px] 
//     max-[440px]:text-[12px] max-[440px]:leading-[140%] 
//     max-[440px]:font-['Inter'] max-[440px]:font-normal 
//     max-[440px]:tracking-[0] max-[440px]:text-center"
// >
//   <span className="text-[#007B82]">
//     Personalize your experience
//   </span>{" "}
//   — choose the room type, adjust AI creativity, add special
//   instructions, and select your favorite design style
// </p>

//           </div>
//         </SlideInView>

//         {/* Step 3 */}
//         <SlideInView delay={0.6}>
//           <div
//   className="flex flex-col items-center
//     max-[440px]:flex-col 
//     max-[440px]:w-[120px] 
//     max-[440px]:h-[186px] 
//     max-[440px]:gap-[28px]"
// >

//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]
//   max-[440px]:w-[120px] max-[440px]:h-[90px] max-[440px]:rounded-[4px]"
// style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//             >
//              <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px] max-[440px]:hidden">
//   Step 3:
// </div>

//             </div>
//            <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 
//   max-[440px]:w-[120px] max-[440px]:h-[68px] 
//   max-[440px]:text-[12px] max-[440px]:leading-[140%] 
//   max-[440px]:tracking-[0] max-[440px]:font-normal max-[440px]:text-center font-['Inter']">
//   <span className="text-[#007B82]">Generate</span> stunning new
//   decor and design concepts in under 25 seconds.
// </p>

//           </div>
//         </SlideInView>
//       </div>
//     </section>
//   );
// }

import React from "react";
import SlideInView from "../../components/SlideInView.jsx";

export default function StepsHome() {
  return (
   <section className="w-full bg-white pt-[60px] h-[654px] pb-[60px] px-[20px] max-[440px]:w-[440px] max-[440px]:h-[415px]">
      {/* Container to center all content */}
     <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[32px] h-[654px] max-[440px]:h-[415px]">

        {/* Header */}
       <div className="text-center max-w-[828px] flex flex-col justify-center items-center gap-[12px] 
              max-[440px]:w-[400px] max-[440px]:h-[53px] max-[440px]:gap-[16px]">
         <h1 className="text-[32px] font-medium leading-[140%] text-black font-['Inter']
            max-[440px]:w-[400px] max-[440px]:h-[22px] 
            max-[440px]:text-[18px] max-[440px]:font-semibold 
            max-[440px]:leading-[100%] max-[440px]:text-center">
  SIMPLIFY DESIGN WITH <span className="text-[#007B82]">STACKLYAI</span>
</h1>
         <p className="text-[20px] font-normal leading-[140%] text-[#2A2A2A] font-['Inter']
           max-[440px]:w-[400px] max-[440px]:h-[17px]
           max-[440px]:text-[14px] max-[440px]:leading-[100%]
           max-[440px]:text-center">
  3 Easy Steps to Get Started
</p>
        </div>

       {/* Steps Row */}
<div className="flex flex-row justify-center items-start gap-[20px] flex-wrap max-[440px]:hidden">
  {[
    {
      step: "Step 1:",
      title: "Upload",
      text: "a photo of your room, home, or outdoor space.",
      image: "/home/sec7-5/step1.jpeg",
    },
    {
      step: "Step 2:",
      title: "Personalize your experience",
      text: "— choose the room type, adjust AI creativity, add special instructions, and select your favorite design style",
      image: "/home/sec7-5/step2.jpeg",
    },
    {
      step: "Step 3:",
      title: "Generate",
      text: "stunning new décor and design concepts in under 25 seconds.",
      image: "/home/sec7-5/step3.jpeg",
    },
  ].map((item, index) => (
    <SlideInView key={index} delay={index * 0.3}>
      <div className="flex flex-col w-[411px] h-[417px] relative">
        {/* Step Badge */}
        <div className="self-start mb-2 w-[411px] relative">
          <div
            className="flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px] backdrop-blur-[5px]"
            style={{
              backgroundColor: '#007B82',
            }}
          >
            {item.step}
          </div>
        </div>

        {/* Image block */}
        <div
          className="w-[411px] h-[232px] rounded-[12px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${item.image}')` }}
        ></div>

        {/* Description */}
        <p className="w-[374px] h-[68px] text-[17px] font-['Inter'] font-normal leading-[160%] text-center mt-5 mx-auto">
          <span className="text-[#007B82] font-semibold">{item.title}</span> {item.text}
        </p>
      </div>
    </SlideInView>
  ))}
</div>

{/* MOBILE VERSION */}
{/* Steps Row - visible only on <=440px screens */}
<div
  className="flex flex-col items-center gap-[20px] flex-wrap min-[441px]:hidden
             max-[440px]:flex-row max-[440px]:justify-between max-[440px]:gap-[8px] max-[440px]:px-[10px]"
>
  {[
    {
      step: "Step 1:",
      title: "Upload",
      text: "a photo of your room, home, or outdoor space.",
      image: "/home/sec7-5/step1.jpeg",
    },
    {
      step: "Step 2:",
      title: "Personalize your experience",
      text: "— choose the room type, adjust AI creativity, add special instructions, and select your favorite design style",
      image: "/home/sec7-5/step2.jpeg",
    },
    {
      step: "Step 3:",
      title: "Generate",
      text: "stunning new décor and design concepts in under 25 seconds.",
      image: "/home/sec7-5/step3.jpeg",
    },
  ].map((item, index) => (
    <SlideInView key={index} delay={index * 0.3}>
      <div
        className="flex flex-col w-full max-w-[360px] h-auto relative px-2
                   max-[440px]:w-[120px] max-[440px]:h-[237px]
                   max-[440px]:justify-between max-[440px]:pr-[4px] max-[440px]:pl-[4px]
                   max-[440px]:opacity-100"
      >
        {/* Image */}
       <div
  className="flex flex-col w-full max-w-[360px] h-auto relative px-2
             max-[440px]:w-[120px] max-[440px]:h-[237px]
             max-[440px]:justify-between max-[440px]:pr-[4px] max-[440px]:pl-[4px]
             max-[440px]:opacity-100"
>
  {/* Image + Paragraph wrapper */}
  <div
    className="flex flex-col items-center
               max-[440px]:w-[120px] max-[440px]:h-[169px]
               max-[440px]:gap-[28px] max-[440px]:opacity-100"
  >
    {/* Image */}
    <div
      className="w-full h-[200px] rounded-[12px] bg-cover bg-center bg-no-repeat
                 max-[440px]:w-[120px] max-[440px]:h-[90px]
                 max-[440px]:rounded-[4px] max-[440px]:opacity-100"
      
      style={{ backgroundImage: `url('${item.image}')` }}
    ></div>

    {/* Description */}
    <p
      className="text-[14px] font-normal leading-[160%] text-center mt-4 font-['Inter']
                 max-[440px]:w-[120px] max-[440px]:h-[51px]
                 max-[440px]:text-[12px] max-[440px]:leading-[140%]
                 max-[440px]:font-normal max-[440px]:opacity-100
                 max-[440px]:mt-0"
    >
      <span className="text-[#007B82] font-semibold">{item.title}</span> {item.text}
    </p>
  </div>
</div>

      </div>
    </SlideInView>
  ))}
</div>


      </div>
    </section>
  );
}




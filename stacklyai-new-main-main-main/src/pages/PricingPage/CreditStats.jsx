// import React from "react";
// import TotalCreditsImg from "../../assets/pricing-pg/img1.png"; // Replace with your first image
// import TodaysUsageImg from "../../assets/pricing-pg/img2.png"; // Replace with your first image


// export default function CreditStats() {
//   return (
//     <section className="w-full min-h-[882px] bg-[white] flex flex-col justify-center items-center gap-[50px]">
//       <div className="w-[100%] max-w-[719px] min-h-[31px] text-[26px] font-semibold leading-[100%] text-center text-[#2a2a2a] mt-[200px]">"Powering Millions of Actions — And Growing Every Day!"</div>

//       <div className=" w-full flex justify-evenly">
//         <div>
//             <div className="max-w-[250px] min-h-[34px] font-semibold text-[28px] leading-[100%] text-center text-[black] relative top-[70px] left-[10px] " >Total Credits Used</div>
//             <img src={TotalCreditsImg} alt="" />
//             <div className="w-[140px] max-w-[140px] min-h-[140px] rounded-[50%] font-bold text-[52px] leadimg-[60px]  text-black shadow-[0_3px_20px_0px] shadow-black flex justify-center items-center relative top-[-350px] left-[300px] bg-[white]">10+</div>
//             <div className="w-[100%] max-w-[441px] min-h-[22px] font-medium text-[18px] leading-[100%] text-[#2a2a2a] relative top-[-120px] left-[20px]">“Over 10+ Million Credits Used by Our Community!”</div>
//         </div>

//         <div>
//             <div className="max-w-[250px] min-h-[34px] font-semibold text-[28px] leading-[100%] text-center text-[black] relative top-[70px] left-[10px]" >Today's Usage</div>
//             <img src={TodaysUsageImg} alt="" />
//             <div className="w-[140px] max-w-[140px] min-h-[140px] rounded-[50%] font-bold text-[52px] leadimg-[60px]  text-black shadow-[0_3px_20px_0] shadow-black flex justify-center items-center relative top-[-350px] left-[300px] bg-[white]">85+</div>
//             <div className="w-[100%] max-w-[441px] min-h-[22px] font-medium text-[18px] leading-[100%] text-[#2a2a2a] relative top-[-120px] left-[20px]">“85,000 Credits Used Today — and Counting!”</div>

//         </div>


//       </div>
//     </section>
//   );
// }

// import React from "react";
// import TotalCreditsImg from "../../assets/pricing-pg/img1.png"; // Replace with your first image
// import TodaysUsageImg from "../../assets/pricing-pg/img2.png"; // Replace with your first image


// export default function CreditStats() {
//   return (
//     <section
//       className="w-full min-h-[882px] bg-[white] flex flex-col justify-center items-center gap-[50px]
//              max-[440px]:w-[440px]
//              max-[440px]:min-h-[416px]
//              max-[440px]:flex-col
//              max-[440px]:pt-[40px]
//              max-[440px]:pr-[20px]
//              max-[440px]:pb-[40px]
//              max-[440px]:pl-[20px]
//              max-[440px]:gap-[32px]"
//     >

//      <div
//   className="w-[100%] max-w-[719px] min-h-[31px] text-[26px] font-semibold leading-[100%] text-center text-[#2a2a2a] mt-[200px]
//              max-[440px]:w-[271px] 
//              max-[440px]:h-[50px] 
//              max-[440px]:text-[18px] 
//              max-[440px]:leading-[140%] 
//              max-[440px]:text-center 
//              max-[440px]:font-semibold 
//              max-[440px]:mt-[10px]"  
// >
//   "Powering Millions of Actions — And Growing Every Day!"
// </div>



//      <div className="w-full flex justify-evenly min-[441px]:flex max-[440px]:hidden">
//   <div>
//     <div className="max-w-[250px] min-h-[34px] font-semibold text-[28px] leading-[100%] text-center text-[black] relative top-[70px] left-[10px]">
//       Total Credits Used
//     </div>
//     <img src={TotalCreditsImg} alt="" />
//     <div className="w-[140px] max-w-[140px] min-h-[140px] rounded-[50%] font-bold text-[52px] leading-[60px] text-black shadow-[0_3px_20px_0px] shadow-black flex justify-center items-center relative top-[-350px] left-[300px] bg-[white]">
//       10+
//     </div>
//     <div className="w-full max-w-[441px] min-h-[22px] font-medium text-[18px] leading-[100%] text-[#2a2a2a] relative top-[-120px] left-[20px]">
//       “Over 10+ Million Credits Used by Our Community!”
//     </div>
//   </div>

//   <div>
//     <div className="max-w-[250px] min-h-[34px] font-semibold text-[28px] leading-[100%] text-center text-[black] relative top-[70px] left-[10px]">
//       Today's Usage
//     </div>
//     <img src={TodaysUsageImg} alt="" />
//     <div className="w-[140px] max-w-[140px] min-h-[140px] rounded-[50%] font-bold text-[52px] leading-[60px] text-black shadow-[0_3px_20px_0px] shadow-black flex justify-center items-center relative top-[-350px] left-[300px] bg-[white]">
//       85+
//     </div>
//     <div className="w-full max-w-[441px] min-h-[22px] font-medium text-[18px] leading-[100%] text-[#2a2a2a] relative top-[-120px] left-[20px]">
//       “85,000 Credits Used Today — and Counting!”
//     </div>
//   </div>
// </div>


// {/* MOBILE */}
// <div className="w-full flex flex-col items-center gap-[20px] px-[20px] pt-[20px] pb-[40px] max-[440px]:flex min-[441px]:hidden">
//   {/* Cards Row */}
//   <div className="flex flex-row justify-center gap-[16px]">
//     {/* Total Credits Used Card */}
//     <div className="relative w-[163.5px] h-[208px] rounded-[12px] overflow-hidden shadow-md">
//       <img src={TotalCreditsImg} alt="" className="w-full object-cover rounded-[12px]" />
//       <div className="absolute top-[9px] left-[5px] bg-white p-[4px] rounded-[4px] flex items-center shadow">
//         <span className="text-[12px] leading-[100%] font-normal text-black">Total Credits Used</span>
//       </div>
//       <div className="absolute top-[85px] left-[123.5px] w-[40px] h-[40px] bg-white rounded-full shadow-[0_3px_20px_rgba(0,0,0,0.15)] flex justify-center items-center font-bold text-[14px] text-[#00A57E] border-[2px] border-white">
//         10+
//       </div>
//     </div>

//     {/* Today's Usage Card */}
//     <div className="relative w-[163.5px] h-[208px] rounded-[12px] overflow-hidden shadow-md">
//       <img src={TodaysUsageImg} alt="" className="w-full object-cover rounded-[12px]" />
//       <div className="absolute top-[9px] left-[5px] bg-white p-[4px] rounded-[4px] flex items-center shadow">
//         <span className="text-[12px] leading-[100%] font-normal text-black">Today's Usage</span>
//       </div>
//       <div className="absolute top-[85px] left-[123.5px] w-[40px] h-[40px] bg-white rounded-full shadow-[0_3px_20px_rgba(0,0,0,0.15)] flex justify-center items-center font-bold text-[14px] text-[#00A57E] border-[2px] border-white">
//         85+
//       </div>
//     </div>
//   </div>

//   {/* Descriptions Below Cards */}
//   <div className="flex flex-row justify-center gap-[16px] mt-[10px]">
//     <p className="w-[171px] h-[30px] text-[12px] leading-[100%] font-normal text-[#2a2a2a] text-center">
//       “Over 10+ Million Credits Used by Our Community!”
//     </p>
//     <p className="w-[171px] h-[30px] text-[12px] leading-[100%] font-normal text-[#2a2a2a] text-center">
//       “85,000 Credits Used Today — and Counting!”
//     </p>
//   </div>
// </div>


//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import TotalCreditsImg from "../../assets/pricing-pg/img1.jpg";
import TodaysUsageImg from "../../assets/pricing-pg/img2.jpg";

export default function CreditStats() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full max-w-[1440px] h-[775px] mx-auto opacity-100 px-[80px] py-[60px] flex flex-col justify-center items-center gap-[42px] bg-white

  max-[440px]:w-[440px]
  max-[440px]:h-[416px]
  max-[440px]:pt-[20px]
  max-[440px]:pr-[20px]
  max-[440px]:pb-[20px]
  max-[440px]:pl-[20px]
  max-[440px]:gap-[32px]

  min-[441px]:max-[768px]:w-[768px]
  min-[441px]:max-[768px]:h-[590px]
  min-[441px]:max-[768px]:pt-[60px]
  min-[441px]:max-[768px]:pr-[40px]
  min-[441px]:max-[768px]:pb-[60px]
  min-[441px]:max-[768px]:pl-[40px]
  min-[441px]:max-[768px]:gap-[32px]"
>
     <motion.div
  variants={itemVariants}
  className="w-[586px] h-[78px] text-[32px] leading-[120%] text-center text-[#007B82] mb-[-49px]

    max-[440px]:mt-[-40px]
    max-[440px]:mb-[1px]
    max-[440px]:w-[331px] 
    max-[440px]:h-[50px] 
    max-[440px]:text-[18px] 
    max-[440px]:leading-[140%] 
    max-[440px]:text-center 
    max-[440px]:font-semibold

    min-[441px]:max-[768px]:w-[688px]
    min-[441px]:max-[768px]:h-[68px]
    min-[441px]:max-[768px]:text-[24px]
    min-[441px]:max-[768px]:leading-[140%]
    min-[441px]:max-[768px]:text-center
    min-[441px]:max-[768px]:font-semibold"
  style={{ fontFamily: 'Inter' }}
>
  Track your creative flow with today's credits used and designs generated
</motion.div>


     <div
  className="w-[1004px] h-[535px] opacity-100 mt-[50px] flex justify-evenly gap-[92px] 
    min-[441px]:flex 
    max-[440px]:hidden

    min-[441px]:max-[768px]:w-[688px]
    min-[441px]:max-[768px]:h-[370px]
    min-[441px]:max-[768px]:gap-[32px]"
>
<motion.div 
  className="relative w-[455px] h-[535px] 
    min-[441px]:max-[768px]:w-[250.5px] 
    min-[441px]:max-[768px]:h-[306px] 
    min-[441px]:max-[768px]:rounded-[12px]"
  whileHover="hover"
  variants={cardHoverVariants}
>

        <img
  src={TotalCreditsImg}
  alt=""
  className="w-[438px] h-[535px] opacity-100 rounded-[20px]

    min-[441px]:max-[768px]:w-[236.115px]
    min-[441px]:max-[768px]:h-[306px]
    min-[441px]:max-[768px]:rounded-[12px]"
  style={{ transform: "rotate(0deg)" }}
/>


       <motion.div
  className="absolute w-[272px] h-[54px] opacity-100 rounded-[15px] bg-[#FFFFFFCC] shadow-[3px_5px_9px_0px_#00000040]
    px-[20px] py-[10px] flex items-center justify-center gap-[10px] bottom-[20px] left-[20px]

    min-[441px]:max-[768px]:w-[155.78px]
    min-[441px]:max-[768px]:h-[30.77px]
    min-[441px]:max-[768px]:gap-[14.71px]
    min-[441px]:max-[768px]:rounded-[12px]
    min-[441px]:max-[768px]:top-[13.24px]
    min-[441px]:max-[768px]:left-[7.35px]
    min-[441px]:max-[768px]:px-[5.89px]
    min-[441px]:max-[768px]:py-[5.89px]
    min-[441px]:max-[768px]:bg-[#FFFFFF80]"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.5 }}
>

          <div
  className="w-[232px] h-[34px] text-[28px] font-[400] leading-[100%] text-center text-black whitespace-nowrap

    min-[441px]:max-[768px]:w-[144.2px]
    min-[441px]:max-[768px]:h-[19px]
    min-[441px]:max-[768px]:text-[16px]
    min-[441px]:max-[768px]:font-medium"
  style={{ fontFamily: 'Inter', verticalAlign: 'middle' }}
>
  Total Credits Used
</div>

          </motion.div>

<motion.div 
  className="absolute bg-white p-5 w-fit rounded-full top-[175px] left-[315px]

    min-[441px]:max-[768px]:w-[106.65px]
    min-[441px]:max-[768px]:h-[106.95px]
    min-[441px]:max-[768px]:rounded-[57.1px]
    min-[441px]:max-[768px]:top-[99.52px]
    min-[441px]:max-[768px]:left-[156.27px]
    min-[441px]:max-[768px]:flex
    min-[441px]:max-[768px]:items-center
    min-[441px]:max-[768px]:justify-center"
  variants={pulseVariants}
  initial="initial"
  animate="pulse"
>
  <div
    className="w-[140px] h-[140px] rounded-full bg-white shadow-[0_1px_3px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center

      min-[441px]:max-[768px]:w-[79.94px]
      min-[441px]:max-[768px]:h-[79.94px]
      min-[441px]:max-[768px]:rounded-full"
  >

    <div
      className="text-[42px] font-semibold leading-[100%] text-[#007B82]

        min-[441px]:max-[768px]:w-[53px]
        min-[441px]:max-[768px]:h-[35px]
        min-[441px]:max-[768px]:text-[28px]
        min-[441px]:max-[768px]:leading-[34.26px]
        min-[441px]:max-[768px]:font-bold
        min-[441px]:max-[768px]:text-center"
      style={{ fontFamily: "Inter" }}
    >
      10+
    </div>

    <div
      className="text-[16px] font-normal leading-[100%] text-[#007B82] mt-[4px]

        min-[441px]:max-[768px]:text-[14px]
        min-[441px]:max-[768px]:mt-[2px]"
      style={{ fontFamily: "Inter" }}
    >
      Credit
    </div>
  </div>
</motion.div>

        </motion.div>

        <motion.div 
  className="relative w-[455px] h-[535px] 
    min-[441px]:max-[768px]:w-[250.5px] 
    min-[441px]:max-[768px]:h-[306px] 
    min-[441px]:max-[768px]:rounded-[12px]"
  whileHover="hover"
  variants={cardHoverVariants}
>
  {/* Text box */}
  <motion.div
    className="absolute w-[272px] h-[54px] opacity-100 rounded-[15px] bg-[#FFFFFFCC] shadow-[3px_5px_9px_0px_#00000040]
      px-[20px] py-[10px] flex items-center justify-center gap-[10px] bottom-[20px] left-[20px] z-10

      min-[441px]:max-[768px]:w-[155.78px]
      min-[441px]:max-[768px]:h-[30.77px]
      min-[441px]:max-[768px]:gap-[14.71px]
      min-[441px]:max-[768px]:rounded-[12px]
      min-[441px]:max-[768px]:top-[13.24px]
      min-[441px]:max-[768px]:left-[7.35px]
      min-[441px]:max-[768px]:px-[5.89px]
      min-[441px]:max-[768px]:py-[5.89px]
      min-[441px]:max-[768px]:bg-[#FFFFFF80]"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.5 }}
  >
    <div
      className="w-[232px] h-[34px] text-[28px] font-[400] leading-[100%] text-center text-black whitespace-nowrap

        min-[441px]:max-[768px]:w-[144.2px]
        min-[441px]:max-[768px]:h-[19px]
        min-[441px]:max-[768px]:text-[16px]
        min-[441px]:max-[768px]:font-medium"
      style={{ fontFamily: 'Inter', verticalAlign: 'middle' }}
    >
      Today's Usage
    </div>
  </motion.div>

  {/* Background image */}
  <img
    src={TodaysUsageImg}
    alt=""
    className="absolute w-[438px] h-[535px] opacity-100 rounded-[20px] left-[5px] top-0

      min-[441px]:max-[768px]:w-[236.115px]
      min-[441px]:max-[768px]:h-[306px]
      min-[441px]:max-[768px]:rounded-[12px]"
    style={{ transform: "rotate(0deg)" }}
  />

  {/* Pulse Circle */}
  <motion.div 
    className="absolute bg-white p-5 w-fit rounded-full top-[185px] left-[315px] z-10

      min-[441px]:max-[768px]:w-[106.65px]
      min-[441px]:max-[768px]:h-[106.95px]
      min-[441px]:max-[768px]:rounded-[57.1px]
      min-[441px]:max-[768px]:top-[99.52px]
      min-[441px]:max-[768px]:left-[156.27px]
      min-[441px]:max-[768px]:flex
      min-[441px]:max-[768px]:items-center
      min-[441px]:max-[768px]:justify-center"
    variants={pulseVariants}
    initial="initial"
    animate="pulse"
  >
    {/* Inner Circle */}
    <div
      className="w-[140px] h-[140px] rounded-full bg-white shadow-[0_1px_3px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center

        min-[441px]:max-[768px]:w-[79.94px]
        min-[441px]:max-[768px]:h-[79.94px]
        min-[441px]:max-[768px]:rounded-full"
    >
      {/* Number */}
      <div
        className="text-[42px] font-semibold leading-[100%] text-[#007B82]

          min-[441px]:max-[768px]:w-[53px]
          min-[441px]:max-[768px]:h-[35px]
          min-[441px]:max-[768px]:text-[28px]
          min-[441px]:max-[768px]:leading-[34.26px]
          min-[441px]:max-[768px]:font-bold
          min-[441px]:max-[768px]:text-center"
        style={{ fontFamily: "Inter" }}
      >
        85+
      </div>

      {/* Label */}
      <div
        className="text-[16px] font-normal leading-[100%] text-[#007B82] mt-[4px]

          min-[441px]:max-[768px]:text-[14px]
          min-[441px]:max-[768px]:mt-[2px]"
        style={{ fontFamily: "Inter" }}
      >
        Images
      </div>
    </div>
  </motion.div>
</motion.div>

      </div>

      {/* MOBILE */}
      <motion.div 
        className="w-full flex flex-col items-center gap-[50px] px-[20px] pt-[20px] pb-[40px] max-[440px]:flex min-[441px]:hidden"
        variants={containerVariants}
      >
        <div className="flex flex-row justify-center gap-[16px]">
          <motion.div 
            className="flex flex-col items-center gap-[6px]"
            variants={itemVariants}
          >
            <motion.div 
              className="relative w-[163.5px] h-[208px] rounded-[12px] overflow-hidden shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={TotalCreditsImg}
                alt=""
                className="w-full h-full object-cover rounded-[12px]"
              />

              <motion.div
                className="absolute top-[5px] left-[5px] bg-white p-[4px] rounded-[4px] flex items-center shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-[12px] leading-[100%] font-normal text-black">Total Credits Used</span>
              </motion.div>
              <motion.div 
                className="absolute p-2 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.5)] top-[85px] left-[115.5px]"
                variants={pulseVariants}
                initial="initial"
                animate="pulse"
              >
                <div className="w-[40px] h-[40px] rounded-full bg-white shadow-[0_3px_20px_rgba(0,0,0,0.15)] flex justify-center items-center font-bold text-[14px] text-[#00A57E] border-[2px] border-white">
                  10+
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="w-[171px] h-[30px] text-[12px] mt-[20px] text-center font-normal leading-[100%]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              "Over 10+ Million Credits Used by Our Community!"
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center gap-[6px]"
            variants={itemVariants}
          >
            <motion.div 
              className="relative w-[163.5px] h-[208px] rounded-[12px] overflow-hidden shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img src={TodaysUsageImg} alt="" className="w-full h-full object-cover rounded-[12px]" />
              <motion.div
                className="absolute top-[5px] left-[5px] bg-white p-[4px] rounded-[4px] flex items-center shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-[12px] leading-[100%] font-normal text-black">Today's Usage</span>
              </motion.div>
              <motion.div 
                className="absolute p-2 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.5)] top-[85px] left-[115.5px]"
                variants={pulseVariants}
                initial="initial"
                animate="pulse"
              >
                <div className="w-[40px] h-[40px] rounded-full bg-white shadow-[0_3px_20px_rgba(0,0,0,0.15)] flex justify-center items-center font-bold text-[14px] text-[#00A57E] border-[2px] border-white">
                  85+
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="w-[171px] h-[30px] text-[12px] mt-[20px] text-center font-normal leading-[100%]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              "85,000 Credits Used Today — and Counting!"
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
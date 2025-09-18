import React from "react";
import { motion } from "framer-motion";
import SlideInView from "../../components/SlideInView.jsx";
import Frame from "../../assets/home/Frame.png";
import step1 from "../../assets/home/sec7/step1.png";
import step2 from "../../assets/home/sec7/step2.png";
import step3 from "../../assets/home/sec7/step3.png";
import stepbg from "../../assets/home/sec7/sectionBg.png";

export default function StepsHome() {
  return (
    <section
      className="
        w-full 
        min-h-[777px] lg:min-h-[750px] md:min-h-[600px] sm:min-h-[450px]
        opacity-100 
        pt-[60px] md:pt-[40px] sm:pt-[30px]
        pb-[60px] md:pb-[40px] sm:pb-[30px]
        gap-[53px] md:gap-[40px] sm:gap-[20px]
        bg-cover bg-center
        overflow-hidden
      "
      style={{ backgroundImage: `url(${stepbg})` }}
    >
      <div
        className="
          w-full 
          min-h-[657px] md:min-h-[546px] sm:min-h-[450px]    
          opacity-100 
          flex flex-col items-center mx-auto 
          gap-[65px] md:gap-[54px] sm:gap-[30px]
        "
      >
        {/* Heading */}
        <div className="w-full max-w-[1120px] mx-auto flex flex-col items-center text-center gap-4">
          <h1 className="text-white lora-text text-[32px] md:text-[28px] sm:text-[22px] leading-tight">
            Bringing <span className="text-[#8A38F5]">Beauty</span> to Every Corner
          </h1>
          <p className="text-white poppins-font text-[18px] md:text-[16px] sm:text-[14px] leading-snug">
            Personalized design solutions that make your home truly yours
          </p>
        </div>

        {/* Steps Section */}
        <div className="w-[1440px] min-h-[511px] opacity-100 flex flex-row justify-center items-start gap-[22px] flex-wrap max-[1280px]:w-full max-[1280px]:h-auto max-[1280px]:gap-4 max-[440px]:hidden">
          {/* Sub-heading */}
          <div className="w-[1440px] h-auto opacity-100 gap-[10px] px-[80px] flex items-start max-[1280px]:w-full max-[1280px]:px-[20px]">
            <p className="w-full opacity-100 text-[16px] leading-[100%] font-normal text-left text-white poppins-font max-[1280px]:text-[14px]">
              Create Stunning Designs in 3 Simple Steps, Powered by{" "}
              <span className="text-[#8A38F5]">STACKLYAI</span>
            </p>
          </div>

          {/* Step Cards */}
          <div
            className="w-[1440px] mb-5
                       min-h-[470px] max-[1280px]:min-h-[160px] max-[945px]:min-h-[300px] 
                       px-[80px] max-[1280px]:px-[40px] max-[945px]:px-[20px] 
                       flex justify-between items-start flex-wrap
                       relative"
          >
            {[
              {
                step: "Step 1",
                title: "Upload",
                text: "Upload a photo of your room, home, or outdoor space.",
                image: step1,
              },
              {
                step: "Step 2",
                title: "Personalize your experience",
                text: "Personalize your stay! choose a room, set AI creativity, and pick your design style.",
                image: step2,
              },
              {
                step: "Step 3",
                title: "Generate",
                text: "Generate stunning new decor and design concepts in under 25 seconds.",
                image: step3,
              },
            ].map((item, index) => (
              <SlideInView key={index} delay={index * 0.3}>
                <div
                  className="flex flex-col w-[400px] h-[470px] rounded-[12px] opacity-100 relative 
                              max-[1280px]:w-[280px] max-[1280px]:h-[340px] 
                              max-[945px]:w-[220px] max-[945px]:h-[280px] 
                              max-[640px]:w-[180px] max-[640px]:h-[240px]
                              overflow-hidden"
                >
                  {/* Step Badge */}
                  <div
                    className="absolute top-[394px] left-[250px] z-10 flex items-center gap-[10px] 
                    rounded-[12px] px-[22px] py-[10px] 
                    backdrop-blur-[6px] shadow-[0px_2px_6px_0px_#00000040] 
                    border border-white/20 bg-white/10
                    max-[1280px]:top-[270px] max-[1280px]:left-[160px] max-[1280px]:px-[14px] max-[1280px]:py-[6px] 
                    max-[945px]:top-[200px] max-[945px]:left-[120px] max-[945px]:px-[10px] max-[945px]:py-[4px] 
                    max-[640px]:top-[170px] max-[640px]:left-[95px] max-[640px]:px-[8px] max-[640px]:py-[3px]"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-[19.5px] h-[19.5px] border-[1.5px] border-white opacity-100 overflow-hidden flex items-center justify-center rounded-full 
                                 max-[1280px]:w-[14px] max-[1280px]:h-[14px] 
                                 max-[945px]:w-[12px] max-[945px]:h-[12px] 
                                 max-[640px]:w-[10px] max-[640px]:h-[10px]"
                    >
                      <img src={Frame} alt="star" className="w-full h-full object-cover" />
                    </motion.div>

                    <div className="w-[48px] h-[19px] text-white text-[16px] font-semibold leading-[100%] text-center poppins-font whitespace-nowrap 
                                    max-[1280px]:text-[13px] max-[1280px]:w-[38px] 
                                    max-[945px]:text-[12px] max-[945px]:w-[34px] 
                                    max-[640px]:text-[11px] max-[640px]:w-[30px]">
                      {item.step}
                    </div>
                  </div>

                  {/* Image block */}
                  <div
                    className="group w-[400px] h-[470px] rounded-[12px] overflow-hidden relative z-0 
                                max-[1280px]:w-[280px] max-[1280px]:h-[340px] 
                                max-[945px]:w-[220px] max-[945px]:h-[280px] 
                                max-[640px]:w-[180px] max-[640px]:h-[240px]"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 scale-100 group-hover:scale-110"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    ></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 transition-opacity duration-500 group-hover:opacity-0"></div>
                  </div>

                  {/* Description */}
                  <div
                    className="absolute top-[46px] left-[25px] w-[247px] h-auto text-white z-20 
                                max-[1280px]:top-[25px] max-[1280px]:left-[18px] max-[1280px]:w-[180px] 
                                max-[945px]:top-[18px] max-[945px]:left-[14px] max-[945px]:w-[150px] 
                                max-[640px]:top-[14px] max-[640px]:left-[10px] max-[640px]:w-[130px]"
                  >
                    <p
                      className="font-[600] text-[16px] leading-[140%] font-[Poppins] mb-1 
                                max-[1280px]:text-[13px] 
                                max-[945px]:text-[12px] 
                                max-[640px]:text-[11px]"
                    >
                      {item.title}
                    </p>
                    <p
                      className="font-[400] text-[16px] leading-[140%] font-[Poppins] 
                                max-[1280px]:text-[12px] 
                                max-[945px]:text-[11px] 
                                max-[640px]:text-[10px]"
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </SlideInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
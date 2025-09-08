import React from "react";
import logo from "../../assets/pricing-pg/logo.png"; // replace with your logo path
import iconChat from "../../assets/pricing-pg/chat.png"; // faded background icon
import iconNote from "../../assets/pricing-pg/pad.png"; // another background icon


const AfterContactBanner = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[425px] px-4 py-20 bg-white overflow-hidden gap-[30px]
    max-[440px]:flex max-[440px]:flex-col max-[440px]:w-[440px] max-[440px]:min-h-[195px]
    max-[440px]:px-[20px] max-[440px]:py-[40px] max-[440px]:gap-[27px]">
  
  
        <img src={iconChat} alt="" className="absolute top-[10px] left-20" />
        <img src={iconChat} alt="" className="absolute  left-0 bottom-0" />
        <img
          src={iconNote}
          alt=""
          className="absolute right-[300px] top-[80px]"
        />
        {/* Logo */}
       <img
    src={logo}
    alt="StacklyAI logo"
    className="w-[88.5px] h-[118px] max-[440px]:w-[48px] max-[440px]:h-[64px]"
  />
  
  
        {/* Heading */}
        <h2 className="max-w-[700px] leading-[100%] text-[38px] font-semibold text-center text-[#2A2A2A] max-[440px]:w-[400px] max-[440px]:h-[24px] max-[440px]:text-[20px] max-[440px]:font-semibold max-[440px]:leading-[100%]">
          Get in touch with{" "}
          <span className="text-[#00B0BA] font-bold">STACKLYAI</span> right now!
        </h2>
  
      </section>
  );
};

export default AfterContactBanner;

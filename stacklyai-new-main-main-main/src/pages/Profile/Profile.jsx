import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroProfile from "./HeroProfile";
import Myplan from "./Myplan";
import Mybilling from "./Mybilling";
import HelpCenter from "./HelpCenter";
import bg from "../../assets/afterHome/ProgileBg.png";

export default function Profile() {
  const [active, setActive] = useState("My Profile"); 
   const navigate = useNavigate();

  return (
    <section className="w-full h-auto opacity-100 bg-black pt-[82px] -mt-[82px] overflow-hidden relative">
      {/* Banner Section */}
      <div className="w-[1347px] h-[188px] opacity-100 mx-auto relative">
        <img
          src={bg}
          alt="Profile Banner"
          className="w-full h-full object-cover rounded-md"
        />

        {/* Content div */}
        <div className="absolute top-[30px] left-1/2 transform -translate-x-1/2 w-[717px] flex flex-col items-center gap-6 mt-2">
          {/* Heading */}
          <h2 className="text-[24px] font-[Lora] font-normal uppercase text-center bg-gradient-to-b from-white via-white to-[#F8BD00] bg-clip-text text-transparent">
            Join the Pro Experience
          </h2>

          {/* Paragraph */}
          <p className="text-[16px] font-[Poppins] text-white text-center leading-[140%] tracking-[0.3px] w-[623px] -mt-4">
            Unlock advanced AI styles
          </p>

          {/* Button */}
            <button
      className="w-[219px] h-[42px] rounded-full px-[30px] py-[10px] text-white font-medium bg-gradient-to-b from-[#FBA716] to-[#90600D] mt-3"
      onClick={() => navigate("<AfterUiPlan />")}
    >
      Upgrade Now
    </button>
        </div>
      </div>

      {/* LEFT SIDE BAR */}
      <div className="relative w-full min-h-[581px]">
        {/* Sidebar Container */}
        <div
          className="absolute top-[51px] left-[26px] w-[213px] h-[487px] 
                        rounded-[8px] border-[1px] border-solid border-[#FFFFFF1F] bg-white/10 
                        pr-[15px] pb-[5px] pl-[15px] opacity-100"
        >
          {/* Sidebar Buttons */}
          {["My Profile", "My Plan", "Billings", "Help Center"].map(
            (item, index) => (
              <button
                key={index}
                onClick={() => setActive(item)}
                className="flex items-center gap-2 w-[183px] h-[32px] mt-8 focus:outline-none"
              >
                {/* Left Indicator */}
                <div
                  className={`w-[2px] h-[31px] rounded-[8px] transition-colors ${
                    active === item ? "bg-[#8A38F5]" : "bg-[#2A2A2A]"
                  }`}
                ></div>

                {/* Right Button */}
                <div
                  className={`w-[173px] h-[32px] rounded-[4px] px-3 py-1 text-white transition-colors ${
                    active === item
                      ? "bg-[#8A38F533] border-b-2 border-solid border-[#FFFFFF33]"
                      : "bg-[#2A2A2A] border-b border-solid border-[#444]"
                  }`}
                >
                  {item}
                </div>
              </button>
            )
          )}
        </div>
      </div>

      {/* RIGHT CONTENT AREA */}
    <div
  className={`${
    active === "Billings"
      ? "min-h-[244px]"
      : active === "Help Center"
      ? "min-h-[401px]"
      : "min-h-[0]"
  }`}
>
  {active === "My Profile" && <HeroProfile />}
  {active === "My Plan" && <Myplan />}
  {active === "Billings" && <Mybilling />}
  {active === "Help Center" && <HelpCenter />}
</div>
 {/* ---------------- BLUR FOOTER ---------------- */}
   <div
  className="absolute"
  style={{
    width: "800px",
    height: "500px",
    top: "684px",
    left: "289px",
    borderRadius: "50%", // makes it circular/oval
    background: "radial-gradient(rgba(151, 71, 255, 0.4), transparent)", // soft glow
    filter: "blur(180px)", // strong blur
    pointerEvents: "none",
  }}
></div>


    </section>
  );
}
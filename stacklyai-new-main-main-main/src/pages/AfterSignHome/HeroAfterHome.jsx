import React, { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import G1 from "../../assets/afterHome/g1.png"
import G2 from "../../assets/afterHome/g2.png";
import G3 from "../../assets/afterHome/g3.png";
import G4 from "../../assets/afterHome/g4.png";
import G5 from "../../assets/afterHome/g5.png";
import G6 from "../../assets/afterHome/g6.png";
import L1 from "../../assets/afterHome/l1.png";
import L2 from "../../assets/afterHome/l2.png";
import L3 from "../../assets/afterHome/l3.png";
import L4 from "../../assets/afterHome/l4.png";
import Line from "../../assets/afterHome/line.png";
import DraggableAfter from "../../pages/AfterSignHome/DraggableAfter"




import FormAfter from "../../pages/AfterSignHome/FormAfter"
import AfterFaq from "../../pages/AfterSignHome/AfterFaq"
import ExteriorForm from "./ExteriorForm";
import OutdoorForm from "./OutdoorForm";


export default function HeroAfterHome() {
  const images = [
    "/AfterHome/ahome1.png",
    "/AfterHome/ahome2.png",
    "/AfterHome/ahome3.png",
    "/AfterHome/ahome4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);


  return (
    <div>
      {/* section1  */}
      <section
        className="w-full h-[800px] text-white transition-all duration-1000 bg-cover bg-center bg-no-repeat fit flex justify-center items-center"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <marquee
          behavior=""
          direction=""
          className="w-full h-[46px] bg-[#00000033] backdrop-blur-[3px] flex justify-center items-center font-[400] text-[16px] leading-[100%] text-center absolute top-[150px]"
        >
          Hey! It looks like you are from USA . We support Purchasing Power
          Parity pricing, so enjoy 50% off on your subscription. Use code:
          abc589
        </marquee>
        <div className="w-full h-[242px] flex flex-col gap-[74px] justify-center items-center">
          <div className="w-[100%] h-[112px] flex flex-col justify-center items-center gap-[20px]">
            <div className="w-full h-[62px] text-medium text-[52px] leading-[62px] text-center text-[white]">
              Welcome to your design realm
            </div>
            <div className="w-[100%] h-[30px] text-medium text-[24px] leading-[30px] text-center text-[#F5F5F5]">
              Where imagination evolves into excellence
            </div>
          </div>
          <Link>
            <div className="w-[260px] h-[56px] flex justify-center items-center gap-[74px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] drop-shadow-[0_3px_4px_#2A2A2A29] rounded-[12px] text-white font-medium text-[20px] leading-[35px] text-center ">
              Start a New Design
            </div>
          </Link>
        </div>
      </section>

      {/* section2  */}
      <section
        className="w-full min-h-[1000px] bg-cover bg-no-repeat bg-center p-[40px] flex flex-col justify-start items-center "
        style={{ backgroundImage: 'url("/AfterHome/sec2.png")' }}
      >
        <div className="w-full h-[106px] flex flex-col justify-center items-center gap-[32px] ">
          <div className="w-full h-[46px] font-medium text-[38px] leading-[100%] text-center text-[#007B82]">
            STACKLY AI
          </div>
          <div className="w-full h-[28px] font-medium text-[24px] leading-[28px] text-center text-[#1E1E1E]">
            Design Your Dream Space — Effortlessly
          </div>
        </div>

        <div className="w-[80%] h-[850px] flex justify-center items-center">
          <div>
            {" "}
            <img
              src={G1}
              alt="img-gallery"
              className="w-[317.29px] h-[317.29px] rounded-[8.46px] relative top-8 left-3 "
            />
            <img
              src={G2}
              alt="img-gallery"
              className="w-[317.29px] h-[317.29px] rounded-[8.46px] relative left-5"
            />
          </div>
          <div>
            <img
              src={G3}
              alt="img-gallery"
              className="w-[317.29px] h-[317.29px] rounded-[8.46px] relative top-8"
            />
            <br />
            <img
              src={G4}
              alt="img-gallery"
              className="w-[317.29px] h-[317.29px] rounded-[8.46px] relative left-4"
            />
          </div>
          <div>
            {" "}
            <img
              src={G5}
              alt="img-gallery"
              className="w-[317.29px] h-[317.29px] rounded-[8.46px] relative top-8 right-3"
            />
            <img
              src={G6}
              alt="img-gallery"
              className="w-[317.29px] h-[317.29px] rounded-[8.46px] relative left-[-30px]"
            />
          </div>
        </div>
      </section>

      {/* section-3  */}

      <section
        className="w-full h-[815px] flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/AfterHome/sec3.png")' }}
      >
        <div className="w-[1268px] h-[373px] flex flex-col justify-center items-center gap-[100px]">
          <div className="w-[100%] h-[118px] flex flex-col justify-center items-center gap-[28px]">
            <div className="w-[100%] h-[56px] font-[500] text-[40px] leading-[140%] text-center text-white ">
              Built for efficiency designed for growth
            </div>
            <div className="w-[100%] h-[34px] text-[24px] font-[400] text-center leading-[140%] text-white">
              Trusted by interior pros and style-conscious homeowners around the
              world.
            </div>
          </div>
          <div className="w-[1013px] h-[155px] flex justify-between items-center gap-[12px] p-[10px]">
            <div className="w-[140px] h-[147px] flex flex-col justify-center items-center gap-[12px]">
              <img src={L1} alt="logo" />
              <div className="w-[140px] h-[55px] text-center text-[20px] leading-[140%] text-[white]">
                Data-Driven Insights
              </div>
            </div>
            <img src={Line} alt="line" />
            <div className="w-[140px] h-[147px] flex flex-col justify-center items-center gap-[12px]">
              <img src={L2} alt="logo" />
              <div className="w-[140px] h-[55px] text-center text-[20px] leading-[140%] text-[white]">
                Seamless Integration
              </div>
            </div>
            <img src={Line} alt="line" />
            <div className="w-[140px] h-[147px] flex flex-col justify-center items-center gap-[12px]">
              <img src={L3} alt="logo" />
              <div className="w-[140px] h-[55px] text-center text-[20px] leading-[140%] text-[white]">
                Smart Automation
              </div>
            </div>
            <img src={Line} alt="line" />
            <div className="w-[140px] h-[147px] flex flex-col justify-center items-center gap-[12px]">
              <img src={L4} alt="logo" />
              <div className="w-[140px] h-[55px] text-center text-[20px] leading-[140%] text-[white]">
                Scalable & Secure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-4  */}

      <DraggableAfter />

      {/* section-5  */}

      <section
        className="w-full h-[738px] flex justify-center items-center bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: 'url("/AfterHome/sec5.png")' }}
      >
        <div className="w-[1179px] h-[435px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-center items-center gap-[30px] bg-[#00000099] backdrop-blur-[2px]">
          <div className="w-[1119px] h-[210px] flex flex-col justify-center items-center gap-[60px]">
            <div className="w-[100%] h-[90px] flex flex-col justify-center items-center gap-[20px]">
              <div className="w-[100%] h-[45px] text-[32px] font-bold leading-[140%] text-center text-white">
                Need <span className="text-[#00D1DD]"> more design</span>{" "}
                options?
              </div>
              <div className="w-[100%] h-[25px] text-[18px] leading-[140%] text-center text-white font-[400]">
                Unlock unlimited possibilities and bring your dream home to life
                with Gold!
              </div>
            </div>
            <Link to="">
              {" "}
              <div className="w-[406px] h-[60px] flex justify-center items-center gap-[10px] rounded-[5px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] font-medium text-[18px] text-center text-white">
                Unlock Unlimited with <span className="text-[Gold]">Gold</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* section-6  */}

      <FormAfter />


      {/* section-7  */}

       <AfterFaq />

       {/* <ExteriorForm />

       <OutdoorForm /> */}
      

    </div>
  );
}

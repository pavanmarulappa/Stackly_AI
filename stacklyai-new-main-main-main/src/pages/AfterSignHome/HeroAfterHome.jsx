//HeroAfterHome.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Form from "../../pages/AfterSignHome/FormAfter"; // ✅ Import your actual form
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
import sec5 from "../../assets/afterHome/sec5.png";


export default function HeroAfterHome() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    "/AfterHome/ahome1.png",
    "/AfterHome/ahome2.png",
    "/AfterHome/ahome3.png",
    "/AfterHome/ahome4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const formAfterRef = useRef(null);

  const scrollToForm = () => {
    formAfterRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); //every 2 second section 1 background image will be change.

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div>
      {/* section1  */}
     <section
  className="w-full h-[800px] text-white transition-all duration-1000 bg-cover bg-center bg-no-repeat fit flex justify-center items-center
    max-[440px]:w-[440px] max-[440px]:h-[278px] max-[440px]:p-5 max-[440px]:opacity-100"
  style={{ backgroundImage: `url(${images[currentIndex]})` }}
>

        <marquee
  behavior=""
  direction=""
  className="w-full h-[46px] bg-[#00000033] backdrop-blur-[3px] flex justify-center items-center font-[400] text-[16px] leading-[100%] text-center absolute top-[150px]
    max-[440px]:hidden"
>
  Hey! It looks like you are from USA. We support Purchasing Power
  Parity pricing, so enjoy 50% off on your subscription. Use code:
  abc589
</marquee>

    {/* Mobile-only marquee directly below navbar */}
<marquee
  behavior="scroll"
  direction="left"
  scrollamount="4"
  className="hidden max-[440px]:absolute max-[440px]:top-[70px] max-[440px]:left-0 max-[440px]:z-[40] max-[440px]:w-full max-[440px]:h-[46px] max-[440px]:bg-[#00000033] max-[440px]:backdrop-blur-[3px] max-[440px]:flex max-[440px]:justify-center max-[440px]:items-center max-[440px]:text-[12px] max-[440px]:text-white"
>
  Hey! It looks like you are from USA. We support Purchasing Power Parity
  pricing, so enjoy 50% off on your subscription. Use code: abc589
</marquee>


        <div
          className="w-full h-[242px] flex flex-col gap-[74px] justify-center items-center
          max-[440px]:w-[400px] max-[440px]:h-[151px] max-[440px]:gap-[28px] max-[440px]:opacity-100"
        >

          <div
            className="w-full h-[112px] flex flex-col justify-center items-center gap-[20px]
            max-[440px]:w-[400px] max-[440px]:h-[81px] max-[440px]:gap-[20px] max-[440px]:opacity-100"
          >

            <div
              className="w-full h-[62px] text-medium text-[52px] leading-[62px] text-center text-white
              max-[440px]:w-[400px] max-[440px]:h-[31px] max-[440px]:text-[20px] max-[440px]:font-medium max-[440px]:leading-[62px] max-[440px]:opacity-100 max-[440px]:mx-auto"
            >
              Welcome to your design realm
            </div>

            <div
              className="w-full h-[30px] text-medium text-[24px] leading-[30px] text-center text-[#F5F5F5]
              max-[440px]:w-[400px] max-[440px]:h-[30px] max-[440px]:text-[14px] max-[440px]:font-normal max-[440px]:leading-[30px] max-[440px]:opacity-100 max-[440px]:mx-auto"
            >
              Where imagination evolves into excellence
            </div>

          </div>
          {/* Button that scrolls down */}
        <div onClick={scrollToForm}>
  <div
    className="w-[260px] h-[56px] flex justify-center items-center gap-[74px] 
      bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] 
      drop-shadow-[0_3px_4px_#2A2A2A29] rounded-[12px] text-white 
      font-medium text-[20px] leading-[35px] text-center cursor-pointer
      max-[440px]:h-[42px] max-[440px]:text-[16px] max-[440px]:leading-[35px] 
      max-[440px]:font-medium max-[440px]:w-[260px] max-[440px]:rounded-[12px] 
      max-[440px]:gap-[74px] max-[440px]:opacity-100"
  >
    Start a New Design
  </div>
</div>

        </div>
      </section>

      {/* section2  */}
  <section
 className="w-full bg-cover bg-no-repeat bg-center p-[40px] 
  flex flex-col justify-start items-center
  min-h-[1000px] max-[440px]:min-h-0 max-[440px]:h-[465px]
  max-[440px]:w-[440px] max-[440px]:gap-[82px] 
  max-[440px]:pt-[40px] max-[440px]:pr-[20px] max-[440px]:pb-[40px] max-[440px]:pl-[20px] 
  max-[440px]:opacity-100"

  style={{ backgroundImage: 'url("/AfterHome/sec2.png")' }}
>


        <div
          className="w-full h-[106px] flex flex-col justify-center items-center gap-[32px]
          max-[440px]:w-[272px] max-[440px]:h-[62px] max-[440px]:gap-[18px] max-[440px]:opacity-100 max-[440px]:mx-auto"
        >

          <div
            className="w-full h-[46px] font-medium text-[38px] leading-[100%] text-center text-[#007B82]
             max-[440px]:w-[272px] max-[440px]:h-[24px] max-[440px]:text-[20px] max-[440px]:font-medium max-[440px]:leading-[100%] max-[440px]:opacity-100 max-[440px]:mx-auto"
          >
            STACKLY AI
          </div>

          <div
            className="w-full h-[28px] font-medium text-[24px] leading-[28px] text-center text-[#1E1E1E]
            max-[440px]:w-[272px] max-[440px]:h-[20px] max-[440px]:text-[14px] max-[440px]:font-medium max-[440px]:leading-[28px] max-[440px]:opacity-100 max-[440px]:mx-auto"
          >
            Design Your Dream Space — Effortlessly
          </div>

        </div>

        <div className="w-[80%] h-[850px] flex justify-center items-center max-[440px]:hidden">
  <div>
    <img
      src={G1}
      alt="img-gallery"
      className="w-[317.29px] h-[317.29px] rounded-[8.46px] relative top-8 left-3 transition-transform duration-300 transform hover:scale-[1.15] hover:z-10 will-change-transform"
    />
    <img
      src={G2}
      alt="img-gallery"
      className="w-[317.29px] h-[317.29px] rounded-[8.46px] relative left-5 transition-transform duration-300 transform hover:scale-[1.15] hover:z-10 will-change-transform"
    />
  </div>
  <div>
    <img
      src={G3}
      alt="img-gallery"
      className="w-[317.29px] h-[317.29px] rounded-[8.46px] relative top-8 transition-transform duration-300 transform hover:scale-[1.15] hover:z-10 will-change-transform"
    />
    <br />
    <img
      src={G4}
      alt="img-gallery"
      className="w-[317.29px] h-[317.29px] rounded-[8.46px] relative left-4 transition-transform duration-300 transform hover:scale-[1.15] hover:z-10 will-change-transform"
    />
  </div>
  <div>
    <img
      src={G5}
      alt="img-gallery"
      className="w-[317.29px] h-[317.29px] rounded-[8.46px] relative top-8 right-3 transition-transform duration-300 transform hover:scale-[1.15] hover:z-10 will-change-transform"
    />
    <img
      src={G6}
      alt="img-gallery"
      className="w-[317.29px] h-[317.29px] rounded-[8.46px] relative left-[-30px] transition-transform duration-300 transform hover:scale-[1.15] hover:z-10 will-change-transform"
    />
  </div>
</div>

{/* Mobile-only layout (<441px) */}
<div
  className="relative w-[353.81px] h-[283px] block min-[441px]:hidden mx-auto -mt-28
    max-[440px]:w-[353.81px] max-[440px]:h-[283px] max-[440px]:rounded-[3.35px] max-[440px]:opacity-100"
>
  {/* Row 1 */}
  <img
    src={G1}
    alt="G1"
    className="w-[125.76px] h-[125.76px] rounded-[3.35px] absolute top-[102px] left-[0px]
    transition-transform duration-300 transform hover:scale-[1.15] hover:z-10 will-change-transform"
  />
  <img
    src={G2}
    alt="G2"
    className="w-[125.76px] h-[125.76px] rounded-[3.35px] absolute top-[111.38px] left-[117.69px]
    transition-transform duration-300 transform hover:scale-[1.15] hover:z-10 will-change-transform"
  />
  <img
    src={G3}
    alt="G3"
    className="w-[125.76px] h-[125.76px] rounded-[3.35px] absolute top-[102px] left-[228.05px]
    transition-transform duration-300 transform hover:scale-[1.15] hover:z-10 will-change-transform"
  />

  {/* Row 2 */}
  <img
    src={G4}
    alt="G4"
    className="w-[125.76px] h-[125.76px] rounded-[3.35px] absolute top-[215.47px] left-[48.6px]
    transition-transform duration-300 transform hover:scale-[1.15] hover:z-10 will-change-transform"
  />
  <img
    src={G5}
    alt="G5"
    className="w-[125.76px] h-[125.76px] rounded-[3.35px] absolute top-[215.89px] left-[186.97px]
    transition-transform duration-300 transform hover:scale-[1.15] hover:z-10 will-change-transform"
  />
  <img
    src={G6}
    alt="G6"
    className="w-[125.76px] h-[125.76px] rounded-[3.35px] absolute top-[259.24px] left-[117.69px]
    transition-transform duration-300 transform hover:scale-[1.15] hover:z-10 will-change-transform"
  />
</div>


      </section>

      {/* section-3  */}

    <section
  className="w-full h-[815px] flex justify-center items-center bg-cover bg-center bg-no-repeat
    max-[440px]:w-[440px] max-[440px]:h-[479px] max-[440px]:gap-[10px]
    max-[440px]:pt-[40px] max-[440px]:pr-[20px] max-[440px]:pb-[40px] max-[440px]:pl-[20px]
    max-[440px]:opacity-100"
  style={{ backgroundImage: 'url("/AfterHome/sec3.png")' }}
>

        <div
          className="w-[1268px] h-[373px] flex flex-col justify-center items-center gap-[100px]
             max-[440px]:w-[400px] max-[440px]:h-[212px] max-[440px]:gap-[42px] max-[440px]:opacity-100"
        >

          <div
            className="w-full h-[118px] flex flex-col justify-center items-center gap-[28px]
            max-[440px]:w-[400px] max-[440px]:h-[79px] max-[440px]:gap-[16px] max-[440px]:mx-auto"
          >

            <div
              className="w-full h-[56px] font-[500] text-[40px] leading-[140%] text-center text-white 
              max-[440px]:w-[400px] max-[440px]:h-[25px] max-[440px]:text-[18px] max-[440px]:font-medium max-[440px]:leading-[140%] max-[440px]:mx-auto"
            >
              Built for efficiency designed for growth
            </div>

            <div
              className="w-full h-[34px] text-[24px] font-[400] text-center leading-[140%] text-white 
              max-[440px]:w-[400px] max-[440px]:h-[34px] max-[440px]:text-[14px] max-[440px]:font-normal max-[440px]:leading-[140%] max-[440px]:mx-auto"
            >
              Trusted by interior pros and style-conscious homeowners around the
              world.
            </div>
            </div>
            
          <div className="w-[1013px] h-[155px] flex justify-between items-center gap-[12px] p-[10px] max-[440px]:hidden">
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


<div className="hidden max-[440px]:flex max-[440px]:w-full max-[440px]:justify-center max-[440px]:items-center max-[440px]:px-4">
  <div className="flex items-center justify-center gap-2">
    {/* BOX 1 */}
    <div className="w-[60.95px] flex flex-col items-center gap-[12px]">
      <img
        src={L1}
        alt="logo"
        className="w-[40px] h-[40px] p-[12px_10px] rounded-[45px] border border-solid border-white"
      />
      <div className="w-[74px] text-center text-[12px] font-normal leading-[140%] text-white">
        Data-Driven Insights
      </div>
    </div>

    {/* LINE 1 */}
    <img
      src={Line}
      alt="line"
      className="w-[39.96px] h-[4px] mt-[-32px]"
    />

    {/* BOX 2 */}
    <div className="w-[60.95px] flex flex-col items-center gap-[12px]">
      <img
        src={L2}
        alt="logo"
        className="w-[40px] h-[40px] p-[12px_10px] rounded-[45px] border border-solid border-white"
      />
      <div className="w-[74px] text-center text-[12px] font-normal leading-[140%] text-white">
        Seamless Integration
      </div>
    </div>

    {/* LINE 2 */}
    <img
      src={Line}
      alt="line"
      className="w-[39.96px] h-[4px] mt-[-32px]"
    />

    {/* BOX 3 */}
    <div className="w-[60.95px] flex flex-col items-center gap-[12px]">
      <img
        src={L3}
        alt="logo"
        className="w-[40px] h-[40px] p-[12px_10px] rounded-[45px] border border-solid border-white"
      />
      <div className="w-[74px] text-center text-[12px] font-normal leading-[140%] text-white">
        Smart Automation
      </div>
    </div>

    {/* LINE 3 */}
   <img
  src={Line}
  alt="line"
  className="w-[39.96px] h-[4px] mt-[-32px]"
/>

    {/* BOX 4 */}
    <div className="w-[60.95px] flex flex-col items-center gap-[12px]">
      <img
        src={L4}
        alt="logo"
        className="w-[40px] h-[40px] p-[12px_10px] rounded-[45px] border border-solid border-white"
      />
      <div className="w-[74px] text-center text-[12px] font-normal leading-[140%] text-white">
        Scalable & Secure
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* section-4  */}

      {/* <DraggableAfter formRef={formAfterRef} setSelectedImage={setSelectedImage} /> */}
      <DraggableAfter
        formRef={formAfterRef}
        setSelectedImage={(img) => {
          setSelectedImage(null); // Force reset
          setTimeout(() => setSelectedImage(img), 10); // Then set actual image
        }}
      />
      {/* section-5  */}

  <section
  className="w-full h-[599px] flex justify-center items-center bg-cover bg-center bg-no-repeat 
             max-[440px]:w-[440px] max-[440px]:h-[330px] max-[440px]:opacity-100 max-[440px]:rotate-0"
  style={{ backgroundImage: `url(${sec5})` }}
>

<div
  className="w-[1179px] h-[282px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-center items-center gap-[30px] 
             bg-[#FBA71614] backdrop-blur-[12px]
             max-[440px]:w-[371px] max-[440px]:h-[238px] 
             max-[440px]:px-[12px] max-[440px]:py-[32px] 
             max-[440px]:gap-[10px] 
             max-[440px]:rounded-[12px] 
             max-[440px]:mx-auto 
             max-[440px]:relative 
           
             max-[440px]:rotate-0 
             max-[440px]:opacity-100"
  style={{ border: "1px solid #FFAA1780" }}
>
 




          <div
            className="w-[1119px] h-[202px] flex flex-col justify-center items-center gap-[60px]
             max-[440px]:w-[348px] max-[440px]:h-[174px] max-[440px]:gap-[32px] max-[440px]:opacity-100"
          >

            <div className="w-[100%] h-[82px] flex flex-col justify-center items-center gap-[12px]">
              <div className="w-full h-[45px] text-[32px] font-bold leading-[140%] text-center text-white
                max-[440px]:w-[348px] max-[440px]:h-[25px] max-[440px]:text-[18px] max-[440px]:font-semibold max-[440px]:opacity-100">
                Need <span className="text-[#FFFFFF]"> more design</span> options?
              </div>

              <div className="w-full h-[25px] text-[18px] leading-[140%] text-center text-white font-[400]
                max-[440px]:w-[348px] max-[440px]:h-[40px] max-[440px]:gap-[12px] max-[440px]:text-[14px] max-[440px]:font-medium max-[440px]:opacity-100">
                Unlock unlimited possibilities and bring your dream home to life with <span className="text-[#FBA716]">Gold</span>!
              </div>

            </div>
            <Link to="">
              {" "}
           <div className="w-[406px] h-[60px] flex justify-center items-center gap-[10px] 
                rounded-[8px] bg-[linear-gradient(180deg,#FFAB18_0.09%,#99670E_142.59%)] 
                shadow-[0px_6px_4px_0px_#00000040] 
                font-['Inter'] font-[700] text-[20px] leading-[35px] text-center text-white 
                whitespace-nowrap
                max-[440px]:w-[258px] max-[440px]:h-[45px] 
                max-[440px]:px-[20px] max-[440px]:py-[8px] 
                max-[440px]:gap-[10px] 
                max-[440px]:rounded-[8px] 
                max-[440px]:border max-[440px]:border-solid max-[440px]:border-white 
                max-[440px]:text-[16px] max-[440px]:leading-[35px] max-[440px]:font-bold 
                max-[440px]:whitespace-nowrap max-[440px]:opacity-100">
  Unlock Unlimited with Gold Plan
</div>


            </Link>
          </div>
        </div>
      </section>

      {/* section-6  */}

      <div ref={formAfterRef}>
        <Form selectedImage={selectedImage} />
      </div>


      {/* section-7  */}

      <AfterFaq />

      {/* <ExteriorForm />

       <OutdoorForm /> */}


    </div>
  );
}

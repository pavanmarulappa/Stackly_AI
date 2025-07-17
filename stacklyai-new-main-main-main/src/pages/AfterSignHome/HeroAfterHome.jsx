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
import sec5 from "../../assets/afterHome/sec5.png"
import Line from "../../assets/afterHome/line.png";
import DraggableAfter from "../../pages/AfterSignHome/DraggableAfter"
import FormAfter from "../../pages/AfterSignHome/FormAfter"
import AfterFaq from "../../pages/AfterSignHome/AfterFaq"
import ExteriorForm from "./ExteriorForm";
import OutdoorForm from "./OutdoorForm";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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
        className="w-full h-[550px] text-white transition-all duration-1000 bg-cover bg-center bg-no-repeat 
             flex flex-col justify-center items-center relative
             max-[440px]:h-[300px]"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw'
        }}
      >
        {/* Marquee (positioned at top) */}
        <marquee
          behavior=""
          direction=""
          className="w-full h-[46px] bg-[#00000033] backdrop-blur-[3px] flex justify-center items-center font-[400] text-[16px] leading-[100%] text-center absolute top-0"
        >
          <span className="marquee-text text-[16px] mx-4">
            Hey! It looks like you are from USA. We support Purchasing Power
            Parity pricing, so enjoy 50% off on your subscription. Use code:
            abc589
          </span>
          <span className="marquee-text text-[16px] mx-4">
            Hey! It looks like you are from USA. We support Purchasing Power
            Parity pricing, so enjoy 50% off on your subscription. Use code:
            abc589
          </span>
        </marquee>

        {/* Centered Content */}
        <div className="w-full flex flex-col items-center justify-center h-full absolute top-0">
          <div className="flex flex-col items-center justify-center gap-[20px]">
            {/* Heading */}
            <div className="w-full text-medium text-[42px] leading-[62px] text-center text-white">
              Welcome to your design realm
            </div>

            {/* Subheading */}
            <div className="w-full text-medium text-[24px] leading-[30px] text-center text-[#F5F5F5]">
              Where imagination evolves into excellence
            </div>
          </div>

          {/* Button (centered with margin-top) */}
          <div
            onClick={scrollToForm}
            className="w-[440px] h-[54px] mt-[54px] flex justify-center items-center
               drop-shadow-[0_3px_4px_#2A2A2A29] rounded-[12px] text-white 
               font-medium text-[20px] leading-[35px] text-center cursor-pointer"
            style={{
              backgroundImage:
                "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)",
            }}
          >
            Start a New Design
          </div>
        </div>
      </section>

      {/* section2  */}
      <section
        className="w-full min-h-[1000px] bg-cover bg-no-repeat bg-center p-[40px] flex flex-col justify-start items-center"
        style={{ backgroundImage: 'url("/AfterHome/sec2.png")' }}
      >
        <div className="w-full h-[106px] flex flex-col justify-center items-center gap-[12px]">
          <div className="w-full h-[46px] font-medium text-[23px] leading-[100%] text-center text-[#007B82]">
            STACKLY AI
          </div>
          <div className="w-full h-[28px] font-medium text-[24px] leading-[28px] text-center text-[#1E1E1E]">
            Design Your Dream Space — Effortlessly
          </div>
        </div>

        <div className="w-[80%] h-[850px] flex justify-center items-center">
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
      </section>

      {/* section-3  */}

      <section
        className="w-full h-[686px] flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/AfterHome/sec3.png")' }}
      >
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}  // 👈 FIXED
          className="w-[1268px] h-[373px] flex flex-col justify-center items-center gap-[100px]"
        >
          {/* Headings */}
          <motion.div
            variants={fadeUpVariant}
            className="w-[100%] h-[118px] flex flex-col justify-center items-center gap-[12px]"
          >
            <div className="text-white text-[32px] font-[500] leading-[140%] text-center">
              Built for efficiency designed for growth
            </div>
            <div className="text-white text-[24px] font-[400] leading-[140%] text-center">
              Trusted by interior pros and style-conscious homeowners around the world.
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}  // 👈 FIXED
            className="w-[1013px] h-[155px] flex justify-between items-center gap-[12px] p-[10px]"
          >
            {[L1, L2, L3, L4].map((Logo, index) => (
              <React.Fragment key={index}>
                <motion.div
                  variants={fadeUpVariant}
                  whileHover={{ scale: 1.05 }}
                  className="w-[140px] h-[147px] flex flex-col justify-center items-center gap-[12px] transition-transform duration-300"
                >
                  <img
                    src={Logo}
                    alt={`logo-${index}`}
                    className="transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  />
                  <div className="text-white text-[20px] text-center leading-[140%] w-[140px] h-[55px]">
                    {[
                      "Smart Automation",
                      "Data-Driven Insights",
                      "Seamless Integration",
                      "Scalable & Secure",
                    ][index]}
                  </div>
                </motion.div>

                {index < 3 && (
                  <motion.img
                    src={Line}
                    alt={`divider-${index}`}
                    variants={fadeUpVariant}
                  />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* form */}
      <div ref={formAfterRef}>
        <Form selectedImage={selectedImage} />
      </div>


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

      {/* <section
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
              <div
                className="w-[406px] h-[60px] flex justify-center items-center gap-[10px] rounded-[5px] 
               font-medium text-[18px] text-center text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)",
                }}
              >
                Unlock Unlimited with <span className="text-[Gold]">Gold</span>
              </div>
            </Link>
          </div>
        </div>
      </section> */}

      {/* section-6  */}


      {/* section-5  */}

      <section
        className="w-full h-[599px] flex justify-center items-center bg-cover bg-center bg-no-repeat 
             max-[440px]:w-[440px] max-[440px]:h-[330px] max-[440px]:opacity-100 max-[440px]:rotate-0"
        style={{ backgroundImage: `url(${sec5})` }}
      >

        <div
          className="w-[1179px] h-[282px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-center items-center gap-[30px] 
             bg-[#FBA71614] backdrop-blur-[5px]
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



      {/* section-7  */}

      {/* <AfterFaq /> */}

      {/* <ExteriorForm />

       <OutdoorForm /> */}


    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  const [changeText, setChangeText] = useState(0);
  const [showAfterImage, setShowAfterImage] = useState(false);

  // Rotate text every 1 second
  useEffect(() => {
    const textInterval = setInterval(() => {
      setChangeText((prev) => (prev === 3 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(textInterval);
  }, []);

  // Rotate images every 1 second
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setShowAfterImage((prev) => !prev);
    }, 1000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full h-auto"
      style={{ backgroundImage: "url('/home/sec1/banner-bg.png')" }}
    >
      <div className="bg-[#0000000f]">
        {/* Marquee */}
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-text">
              Hey! It looks like you are from USA. We support Purchasing Power
              Parity pricing, so enjoy 50% off on your subscription. Use code:
              abc589
            </span>
            <span className="marquee-text">
              Hey! It looks like you are from USA. We support Purchasing Power
              Parity pricing, so enjoy 50% off on your subscription. Use code:
              abc589
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-[1000px]:flex-col w-full min-h-screen flex justify-center items-center gap-10 px-[5%] py-[30px]">
          {/* Left Text */}
          <div className="max-w-[700px] min-h-[304px] flex flex-col justify-center gap-10 items-start">
            <h3 className="max-w-[700px] w-full text-5xl font-semibold leading-[100%] text-white max-[500px]:text-4xl">
              Design Your{" "}
              <span className="text-[#ffd56b]">
                {["Interiors", "Kitchen", "Balcony", "Living Room"][changeText]}
              </span>
              <br />
              Space With AI
            </h3>
            <p
              className="max-w-[524px] w-full min-h-[30px] text-[17px] font-medium leading-[150%] text-neutral-100 max-[500px]:text-sm"
              style={{ wordSpacing: "3px" }}
            >
              Easy to Use, Zero Learning, AI Powered Design Tool to generate
              Your Own Space Photo-like images in 25 Seconds
            </p>

            <Link to="sign-in">
              <div className="max-w-[305px] w-[305px] h-[50px] flex justify-center items-center bg-[#007b82] text-white shadow-[10px_10px_10px_10px_#2a2a2a29] cursor-pointer rounded-[5px] hover:bg-[#2e9ea4] hover:text-white max-[500px]:h-10">
                <p
                  className="text-lg font-bold leading-[100%] text-center text-white"
                  style={{ wordSpacing: "2px" }}
                >
                  Design Now!
                </p>
              </div>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-[500px] min-h-[312px] overflow-hidden rounded-lg">
            {/* BEFORE */}
            <div
              className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
                showAfterImage ? "opacity-0" : "opacity-100"
              }`}
              style={{ backgroundImage: "url('/home/sec1/banner-home.png')" }}
            >
              <div className="flex flex-col justify-start items-start gap-1 pl-6 pt-2.5 max-[500px]:p-3">
                <div className="bg-[#00000066] px-2.5 py-1.5 rounded">
                  <p className="text-white text-base font-medium">ORIGINAL ROOM</p>
                </div>
                <p className="text-sm text-white font-medium pl-1">Before</p>
              </div>
            </div>

            {/* AFTER */}
            <div
              className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
                showAfterImage ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: "url('/home/sec1/afterImg.png')" }}
            >
              <div className="flex flex-col justify-start items-start gap-1 pl-6 pt-2.5 max-[500px]:p-3">
                <div className="bg-[#00000066] px-2.5 py-1.5 rounded">
                  <p className="text-white text-base font-medium">STACKLYAI</p>
                </div>
                <p className="text-sm text-white font-medium pl-1">After</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import ellipse from "../../assets/contactus/Ellipse.png"; // Adjust path if needed
import ellipse1 from "../../assets/contactus/Ellipse2.png"; // Adjust path if needed

const ContactForm = () => {
  return (
    
    <div className="relative bg-black overflow-hidden w-full flex justify-center items-center py-28 px-4 min-h-screen mt-[-70px]">
      {" "}
      {/* Added mt-0 and mb-16 */}
      {/* Ellipse background image */}
      <img
        src={ellipse}
        alt="Background Ellipse"
        className="absolute bottom-2 bg-top left-1/2 transform -translate-x-1/2 w-[1568px] md:w-[1568px] z-0 pointer-events-none select-none" // Added rounded-full and border styles
        // Added inline styles for specific border requirements
      />
      <img
        src={ellipse1}
        alt="Background Ellipse"
        className="absolute bottom-0 bg-top left-1/2 transform -translate-x-1/2 w-[1568px] md:w-[1568px] z-0 pointer-events-none select-none" // Added rounded-full and border styles
        // Added inline styles for specific border requirements
      />
      {/* Form section */}
      <div className="relative z-10 w-[668px] flex flex-col items-center gap-[28px] text-white">
        <div className="text-center font-[Poppins]">
          <h2 className="text-[32px] mt-8 font-semibold text-white flex justify-center items-center gap-2">
            Let's Have a Chat
            <span className="inline-block w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.88518 24.312C6.11419 24.1787 6.38675 24.1417 6.643 24.2092C6.89925 24.2767 7.11823 24.4432 7.25184 24.672C8.35451 26.5627 10.0398 27.992 12.1185 28.92C12.2385 28.9735 12.3467 29.0501 12.437 29.1454C12.5274 29.2407 12.598 29.3529 12.645 29.4755C12.692 29.5982 12.7144 29.7289 12.7109 29.8602C12.7073 29.9914 12.678 30.1207 12.6245 30.2407C12.571 30.3606 12.4944 30.4688 12.3991 30.5592C12.3038 30.6495 12.1916 30.7202 12.069 30.7672C11.9463 30.8142 11.8156 30.8366 11.6844 30.833C11.5531 30.8295 11.4238 30.8002 11.3038 30.7467C8.88784 29.668 6.86251 27.9733 5.52518 25.68C5.45896 25.5666 5.41574 25.4412 5.39799 25.311C5.38025 25.1808 5.38832 25.0485 5.42175 24.9214C5.45518 24.7944 5.51332 24.6752 5.59283 24.5706C5.67235 24.466 5.77169 24.3782 5.88518 24.312ZM25.2078 5.72934C23.8558 4.34801 21.9278 3.84001 20.0398 4.37601C19.7881 4.43853 19.5219 4.40079 19.2974 4.27073C19.073 4.14068 18.9079 3.92849 18.8369 3.67898C18.766 3.42947 18.7948 3.16215 18.9172 2.93346C19.0397 2.70478 19.2462 2.53262 19.4932 2.45334C22.0772 1.71734 24.7665 2.42001 26.6372 4.33067C26.8185 4.52103 26.9175 4.77511 26.9129 5.03793C26.9082 5.30076 26.8003 5.55119 26.6124 5.73503C26.4245 5.91888 26.1718 6.02136 25.909 6.02029C25.6461 6.01923 25.3942 5.9147 25.2078 5.72934ZM14.9198 4.91067C14.6345 4.42134 13.8025 4.12401 12.9585 4.60801C12.1158 5.08801 11.9678 5.93734 12.2492 6.41734L15.6158 12.1933C15.7454 12.4223 15.7795 12.693 15.7108 12.9469C15.6421 13.2008 15.4761 13.4174 15.2489 13.5498C15.0216 13.6822 14.7513 13.7198 14.4965 13.6543C14.2418 13.5888 14.0231 13.4256 13.8878 13.2L9.39984 5.50001C9.11451 5.01067 8.28251 4.71334 7.43718 5.19734C6.59584 5.67734 6.44784 6.52667 6.72784 7.00667L11.7798 15.6693C11.846 15.7828 11.8892 15.9082 11.9069 16.0383C11.9247 16.1685 11.9166 16.3009 11.8832 16.4279C11.8497 16.5549 11.7916 16.6741 11.7121 16.7787C11.6326 16.8833 11.5333 16.9712 11.4198 17.0373C11.3064 17.1035 11.181 17.1467 11.0508 17.1644C10.9207 17.1822 10.7883 17.1741 10.6613 17.1407C10.5343 17.1072 10.4151 17.0491 10.3105 16.9696C10.2059 16.8901 10.118 16.7908 10.0518 16.6773L7.80518 12.8267C7.51984 12.3373 6.68784 12.04 5.84384 12.524C5.00118 13.004 4.85318 13.852 5.13451 14.3333L10.1852 22.996C12.3305 26.6747 17.6252 27.868 22.1132 25.3027C26.6012 22.7373 28.1945 17.6173 26.0545 13.9467L22.6865 8.17201C22.4012 7.68267 21.5692 7.38534 20.7252 7.86801C19.8825 8.34934 19.7345 9.19734 20.0158 9.67867L22.2598 13.528C22.3266 13.6421 22.3701 13.7683 22.3878 13.8993C22.4055 14.0303 22.3971 14.1635 22.363 14.2912C22.3289 14.4189 22.2698 14.5386 22.1892 14.6433C22.1085 14.748 22.0079 14.8357 21.8932 14.9013C19.8358 16.0747 19.2052 18.348 20.1065 19.892C20.1727 20.0055 20.2159 20.1309 20.2336 20.261C20.2513 20.3912 20.2433 20.5235 20.2098 20.6506C20.1764 20.7776 20.1183 20.8968 20.0388 21.0014C19.9593 21.1059 19.86 21.1938 19.7465 21.26C19.633 21.3262 19.5077 21.3694 19.3775 21.3871C19.2474 21.4048 19.115 21.3968 18.988 21.3633C18.8609 21.3299 18.7417 21.2718 18.6372 21.1923C18.5326 21.1128 18.4447 21.0135 18.3785 20.9C17.1612 18.8133 17.6532 16.3 19.2252 14.524C19.6652 14.028 19.8145 13.3053 19.4812 12.732L14.9198 4.91067Z"
                  fill="white"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-2 text-[20px] text-white/80">
            Curious how AI can style your space? <br /> Let's talk.
          </p>
        </div>
        <form className="w-full flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm mb-1 text-white">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.40)",
                  background: "rgba(255, 255, 255, 0.12)",
                }}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1 text-white">Last Name</label>
              <input
                type="text"
                placeholder="Paul"
                className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.40)",
                  background: "rgba(255, 255, 255, 0.12)",
                }}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm mb-1 text-white">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.40)",
                  background: "rgba(255, 255, 255, 0.12)",
                }}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1 text-white">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 99999 99999"
                className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.40)",
                  background: "rgba(255, 255, 255, 0.12)",
                }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1 text-white">Message</label>
            <textarea
              rows="4"
              placeholder="Type something..."
              className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
              style={{
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.40)",
                background: "rgba(255, 255, 255, 0.12)",
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2 rounded-full text-white font-semibold flex items-center justify-center gap-2"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "30px",
              background: "rgba(138, 56, 245, 0.2)",
            }}
          >
            Send Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.2125 3.33751C16.2527 3.22588 16.2604 3.1051 16.2345 2.98928C16.2087 2.87346 16.1504 2.7674 16.0665 2.68349C15.9826 2.59957 15.8765 2.54129 15.7607 2.51544C15.6449 2.48959 15.5241 2.49724 15.4124 2.53751L1.66245 7.53751C1.54346 7.58065 1.44038 7.6589 1.36683 7.76191C1.29329 7.86492 1.25275 7.98783 1.25058 8.11438C1.24841 8.24093 1.28472 8.36515 1.35469 8.47062C1.42466 8.57608 1.52501 8.65782 1.64245 8.70501L7.1837 10.9213L10.8087 7.05876L11.6924 7.94251L7.96745 11.9125L10.0449 17.1075C10.092 17.225 10.1736 17.3254 10.279 17.3955C10.3844 17.4656 10.5086 17.502 10.6352 17.5C10.7617 17.498 10.8846 17.4576 10.9877 17.3841C11.0908 17.3107 11.1692 17.2077 11.2125 17.0888L16.2125 3.33751Z"
                fill="white"
              />
            </svg>
          </button>
        </form>

        <p className="text-white text-center text-base font-normal mt-6">
          *Questions, comments, or suggestions? Simply fill in the form and
          we'll be in touch shortly.
        </p>
      </div>
    </div>
  
  );
};

export default ContactForm;
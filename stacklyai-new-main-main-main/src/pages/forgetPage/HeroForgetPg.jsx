// import React, { useState } from "react";
// import close from "../../assets/forgetPg/close.png";
// import Arrow from "../../assets/forgetPg/arrow.png";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function HeroForgetPg() {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSendOTP = async () => {
//     // Basic email validation
//     if (!email.includes("@") || !email.includes(".")) {
//       setError("Please enter a valid email address");
//       return;
//     }

//     setIsLoading(true);
//     setError("");

//     try {
//       await axios.post("http://localhost:8000/forget-password/send-otp", {
//         email,
//       });
//       localStorage.setItem("resetEmail", email);
//       navigate("/Otp", { state: { email } }); // Passing email via state
//     } catch (err) {
//       setError(err.response?.data?.detail || "Error sending OTP");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <section
//         className="w-full min-h-[800px] flex justify-center items-center bg-no-repeat bg-center bg-cover"
//         style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
//       >
//         <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[0px] bg-[#00000033] backdrop-blur-sm">
//           <div className="w-[100%] min-h-[80px] text-end flex justify-end">
//             <img src={close} alt="" className="w-[28px] h-[28px] " />
//           </div>

//           <div className="w-[461px] min-h-[320px] flex flex-col justify-center items-center gap-[40px]">
//             <div className="w-[100%] min-h-[86px] flex flex-col justify-center items-center gap-[12px]">
//               <div className="w-[289px] min-h-[26px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]">
//                 Forgot your password?
//               </div>
//               <div className="w-[461px] min-h-[48px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0] ">
//                 No worries. Enter your email and we'll send you a one-time
//                 password (OTP) to reset it.
//               </div>
//             </div>

//             <div className="w-[461px] min-h-[194px] flex flex-col justify-center items-center gap-[40px]">
//               <input
//                 type="email"
//                 placeholder="ramprakash@example.com"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   setError("");
//                 }}
//                 className="w-[460px] min-h-[48px] rounded-[8px] border-[1px] border-solid border-[#E2E2E2] placeholder:text-[#2A2A2A] placeholder:text-[16px] placeholder:leading-[26px] px-[20px]"
//               />

//               {error && (
//                 <div className="text-red-500 text-sm w-full text-center">
//                   {error}
//                 </div>
//               )}

//               <button
//                 onClick={handleSendOTP}
//                 disabled={isLoading}
//                 className="w-[461px] min-h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] flex justify-center items-center text-white font-bold text-[16px] leading-[35px] text-center cursor-pointer disabled:opacity-70"
//               >
//                 {isLoading ? "Sending..." : "Send OTP"}
//               </button>

//               <div>
//                 <Link
//                   to="/sign-in"
//                   className="w-[122px] h-[20px] flex justify-center items-center gap-[4px]"
//                 >
//                   <img src={Arrow} alt="" />
//                   <span className="font-semibold text-[15px] leading-[100%] text-[#009A98]">
//                     Back to Login
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState } from "react";
import close from "../../assets/forgetPg/close.png";
import Arrow from "../../assets/forgetPg/arrow.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logoImg from "/src/assets/Logo.png";


export default function HeroForgetPg() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    // Basic email validation
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await axios.post("http://localhost:8000/forget-password/send-otp", {
        email,
      });
      localStorage.setItem("resetEmail", email);
      navigate("/Otp", { state: { email } }); // Passing email via state
    } catch (err) {
      setError(err.response?.data?.detail || "Error sending OTP");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <section
        className="w-full min-h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: 'url("/ForgetPg/fgPg.png")',
          height: '100dvh' // Uses dynamic viewport height for mobile
        }}
      >
        {/* Mobile Logo */}
            {window.innerWidth < 769 && (
          <div
            style={{
              position: 'absolute',
              top: '35px',
              
              left: window.innerWidth < 441 ? '24px' : '60px', // Change this value as needed
              backgroundColor: 'white',
              padding: '2px',
              borderRadius: '3px',
              width: '100px',
              height: '30px',
              opacity: 1,
              // left: '44px',
            }}
          >
               <img
                    src={logoImg}
                    alt="logo"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '3px',
                    }}
                  />
        
                 </div>
               )}

        {/* Main Container */}
        <div className="w-[525px] min-h-[444px] px-[32px] py-[28px] rounded-[10px]
                bg-[#00000033] backdrop-blur-[6px]
                border border-white shadow-[0_0_0_2px_rgba(255,255,255,0.6)]
                flex flex-col justify-center items-center
                max-[440px]:w-[400px] max-[440px]:min-h-[439px] max-[440px]:px-[32px] max-[440px]:py-[28px] 
                max-[440px]:gap-[40px]

                min-[441px]:max-[768px]:w-[608px]
                min-[441px]:max-[768px]:h-[444px]
                min-[441px]:max-[768px]:pt-[28px]
                min-[441px]:max-[768px]:pr-[32px]
                min-[441px]:max-[768px]:pb-[28px]
                min-[441px]:max-[768px]:pl-[32px]
                min-[441px]:max-[768px]:gap-[40px]
                min-[441px]:max-[768px]:rounded-[10px]
                min-[441px]:max-[768px]:border-[1px]"
>



          {/* Close Button */}
          <div className="w-full min-h-[80px] text-end flex justify-end">
  <img
    src={close}
    alt="close"
    className="w-[28px] h-[28px]
      min-[441px]:max-[768px]:w-[28px]
      min-[441px]:max-[768px]:h-[28px]
      min-[441px]:max-[768px]:opacity-100
      min-[441px]:max-[768px]:mt-[20px]" 
  />
</div>


          {/* Content Area */}
        <div
  className="w-full min-h-[320px] flex flex-col justify-center items-center gap-[40px]
    max-[440px]:w-[336px] max-[440px]:min-h-[315px] max-[440px]:gap-[40px]
    min-[441px]:max-[768px]:w-[544px] 
    min-[441px]:max-[768px]:h-[320px]
    min-[441px]:max-[768px]:gap-[40px]"
>


            {/* Title Section */}
           <div
  className="w-full min-h-[86px] flex flex-col justify-center items-center gap-[12px]
    max-[440px]:w-full max-[440px]:h-[86px]
    min-[441px]:max-[768px]:w-[336px] 
    min-[441px]:max-[768px]:h-[86px]
    min-[441px]:max-[768px]:gap-[12px]"
>

           <div
  className="text-center text-[#009A98] font-semibold text-[26px] leading-[26px]
    max-[440px]:text-[26px] max-[440px]:leading-[26px]
    min-[441px]:max-[768px]:w-[289px]
    min-[441px]:max-[768px]:h-[26px]"
  style={{ fontFamily: "Inter" }}
>
  Forgot your password?
</div>

<div
  className="w-full min-h-[48px] font-normal text-[15px] leading-[24px] text-center text-[#B0B0B0]
    max-[440px]:text-[14px]
    min-[441px]:max-[768px]:w-[336px]
    min-[441px]:max-[768px]:h-[48px]
    min-[441px]:max-[768px]:text-[14px]"
  style={{ fontFamily: 'Inter' }}
>
  No worries. Enter your email and we'll send you a one-time
  password (OTP) to reset it.
</div>

            </div>

            {/* Form Section */}
           <div className="w-full min-h-[194px] flex flex-col justify-center items-center gap-[40px]
  max-[440px]:w-[336px] max-[440px]:h-[189px]
  min-[441px]:max-[768px]:w-[544px]
  min-[441px]:max-[768px]:h-[194px]
  min-[441px]:max-[768px]:gap-[40px]"
>


              {/* Email Input */}
              <input
  type="email"
  placeholder="ramprakash@example.com"
  value={email}
  onChange={(e) => {
    setEmail(e.target.value);
    setError("");
  }}
  className="w-full h-[48px] rounded-[8px] border border-[#E2E2E2]
    placeholder:text-[#2A2A2A] placeholder:text-[16px] placeholder:leading-[26px] px-[20px]

    max-[440px]:w-full

    min-[441px]:max-[768px]:w-[544px]
    min-[441px]:max-[768px]:h-[48px]
    min-[441px]:max-[768px]:rounded-[8px]
    min-[441px]:max-[768px]:border-[1px]"
/>


              {/* Error Message */}
              {error && (
                <div className="text-red-500 text-sm w-full text-center">
                  {error}
                </div>
              )}

              {/* Send OTP Button */}
           <button
  onClick={handleSendOTP}
  disabled={isLoading}
  className="w-full h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-black to-[#007B82]
    flex justify-center items-center text-white font-bold text-[16px] leading-[35px] 
    cursor-pointer disabled:opacity-70

    max-[440px]:h-[41px] max-[440px]:text-[14px]

    min-[441px]:max-[768px]:w-[544px]
    min-[441px]:max-[768px]:h-[46px]
    min-[441px]:max-[768px]:rounded-[8px]"
>
  {isLoading ? "Sending..." : "Send OTP"}
</button>


              {/* Back to Login Link */}
            <div>
  <Link
    to="/sign-in"
    className="flex justify-center items-center gap-[4px]

      min-[441px]:max-[768px]:w-[116px]
      min-[441px]:max-[768px]:h-[20px]
      min-[441px]:max-[768px]:gap-[4px]"
  >
    <img src={Arrow} alt="arrow" />
    <span className="font-semibold text-[15px] text-[#009A98]">
      Back to Login
    </span>
  </Link>
</div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
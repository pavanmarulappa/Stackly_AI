import React from 'react'
import Tick from "../../assets/pricing-pg/tick.png";
import Tick1 from "../../assets/pricing-pg/tick1.png";
import Logo from "../../assets/Logo1.png";
import Success from "../../assets/pricing-pg/success.png";
import Paper from "../../assets/pricing-pg/paper.png";
import { Link } from "react-router-dom";

export default function AfterPayment() {
  return (
    <div>
      <br />

      <div
        className="bg-[black] w-full min-h-[900px] flex justify-center items-center bg-center bg-no-repeat bg-cover -mt-[82px] pt-[82px] overflow-hidden"
        
      >
        <div className="w-[1280px] min-h-[720px] rounded-[16px] border-[1px] border-solid border-[#FFFFFF33] drop-shadow-[0_0_12px_0] shadow-[#E3EBFB80] bg-blur-[100px] blur-[100px] backdrop-blur-[20px] flex flex-col justify-start items-start px-[50px] py-[30px] mt-2 "
      style={{
  background: "linear-gradient(95.92deg, rgba(138, 56, 245, 0.2) 15.32%, rgba(194, 44, 162, 0.2) 99.87%)"
}}

        >
          <div className="w-full min-h-[50px] flex justify-start"></div>

          <div className="w-[1160px] h-[636px] flex flex-col justify-start items-start gap-[16px]">
            <div className="w-full min-h-[76px] flex justify-center  ml-[40px]">
              <div className="w-[822px] h-[76px] flex justify-start items-center">
                <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px] ">
                  {/* Circle with transparent fill and no border */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 border-[1px] border-solid border-[#FFFFFF33] rounded-full"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="transparent" />
                    <path
                      d="M8 12l3 3 5-5"
                      stroke="#C22CA2"  // tick color
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>


                  <div className="font-semibold text-[16px] leading-[56%] text-white">
                    Billing Info
                  </div>
                </div>
                <div
                  className="w-[226px] h-[4px] rounded-[5px]"
                  style={{
                    background: "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)"
                  }}
                ></div>
                <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
                  {/* Circle with Tick SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 border-[1px] border-solid border-[#FFFFFF33] rounded-full"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="transparent" />
                    <path
                      d="M8 12l3 3 5-5"
                      stroke="#C22CA2"  // tick color
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>

                <div className="w-[156px] ml-[30px] font-semibold text-[16px] leading-[200%] text-white">
                    Payment Processing
                  </div>
                </div>


                 <div
                  className="w-[226px] h-[4px] rounded-[5px]"
                  style={{
                    background: "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)"
                  }}
                ></div>

                <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
                  {/* Circle with Tick SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 border-[1px] border-solid border-[#8A38F5] rounded-full"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="transparent" />
                    <path
                      d="M8 12l3 3 5-5"
                      stroke="#C22CA2"  // tick color
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                  <div className="font-semibold text-[16px] leading-[56%] text-[#8A38F5]">
                    Success
                  </div>
                </div>
              </div>
            </div>

           <div className="w-full min-h-[500px] flex flex-col justify-center items-center gap-[30px]">
  <img src={Logo} alt="Logo" className="w-[170px] h-[30px] object-contain" />

  <div className="w-[610px] h-[31px] font-[400] text-[20px] leading-[156%] text-white text-center">
    “Thank you for subscribing to StacklyAI. Your plan is now active.”
  </div>

  {/* Success SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-24 h-24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8A38F5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Circle */}
    <circle cx="12" cy="12" r="10" stroke="#8A38F5" strokeWidth="2" fill="transparent" />
    {/* Checkmark */}
    <path d="M8 12l3 3 5-5" stroke="#8A38F5" strokeWidth="2" />
  </svg>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import Tick from "../../assets/pricing-pg/tick.png";
// import Tick1 from "../../assets/pricing-pg/tick1.png";
// import Logo from "../../assets/pricing-pg/flogo.png";
// import Success from "../../assets/pricing-pg/success.png";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function AfterPayment() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [status, setStatus] = useState("");

//   const sessionId = new URLSearchParams(location.search).get("session_id"); // ✅ Move this out

//   useEffect(() => {
//   const queryParams = new URLSearchParams(location.search);
//   const sessionId = queryParams.get("session_id");
//   let isMounted = true; // Track if component is mounted

//   if (sessionId && loading) { // Only proceed if loading is true
//     // Step 1: Verify payment
//     axios
//       .get(`http://localhost:8000/pricing/verify-payment/?session_id=${sessionId}`)
//       .then((res) => {
//         if (!isMounted) return;
        
//         if (res.data.success) {
//           setStatus("Payment verified. Updating subscription...");
//           // Step 2: Update subscription
//           return axios.post(
//             "http://localhost:8000/pricing/update-subscription/",
//             null,
//             { params: { session_id: sessionId } }
//           );
//         } else {
//           setStatus("Payment not completed yet.");
//           throw new Error("Payment not completed.");
//         }
//       })
//       .then((res) => {
//         if (!isMounted) return;
//         setStatus("Subscription updated successfully!");
//       })
//       .catch((err) => {
//         if (!isMounted) return;
//         console.error(err);
//         setStatus("Something went wrong during processing.");
//       })
//       .finally(() => {
//         if (isMounted) setLoading(false);
//       });
//   } else {
//     setStatus("No session ID found in URL.");
//     setLoading(false);
//   }

//   return () => {
//     isMounted = false; // Cleanup function
//   };
// }, [location]);

//   return (
//     <div>
//       <br />
//       <div
//         className="bg-[gray] w-full min-h-[800px] flex justify-center items-center bg-center bg-no-repeat bg-cover"
//         style={{ backgroundImage: 'url("/PricingPg/billing.jpg")' }}
//       >
//         <div className="w-[1280px] min-h-[720px] rounded-[16px] border-[1px] border-solid border-[#E8EBF1] drop-shadow-[0_0_12px_0] shadow-[#E3EBFB80] bg-blur-[100px] blur-[100px] backdrop-blur-[20px] flex flex-col justify-start items-start px-[50px] py-[30px]">
//           <div className="w-[1160px] h-[636px] flex flex-col justify-center items-center gap-[16px]">
//             <img src={Logo} alt="Stackly-logo" />
//             <div className="w-[610px] h-[31px] font-[400] text-[20px] leading-[156%] text-[#2A2A2A] text-center">
//               Thank you for subscribing to StacklyAI. Your plan is now active.
//             </div>
//             <img src={Success} alt="logo-success" />
//             <div className="text-[#007B82] text-[16px] font-semibold">
//               {loading ? "Processing your payment..." : status}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

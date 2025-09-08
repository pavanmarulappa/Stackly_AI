// import { React, useState } from "react";
// import SideArrow from "../../assets/pricing-pg/sideArrow.png";
// import Tick from "../../assets/pricing-pg/tick.png";
// import Tick1 from "../../assets/pricing-pg/tick1.png";
// import Paper from "../../assets/pricing-pg/paper.png";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function AfterBilling() {

//   const [plan, setPlan] = useState("silver");
//   const [duration, setDuration] = useState("monthly");
//   const navigate = useNavigate();

//   const handleContinue = async () => {
//     const user_id = localStorage.getItem("user_id"); // must be stored earlier
//     if (!user_id) {
//       alert("User ID not found");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8000/create-checkout-url/", {
//         user_id: user_id,
//         plan: plan,
//         duration: duration,
//         full_name: "test",        // replace with actual input values
//         email: "test@email.com",  // ...
//         address: "somewhere",
//         phone: "1234567890",
//         city: "YourCity",
//         state: "YourState",
//         zip_code: "000000",
//         country: "India",
//         coupon: "COUPON2025"
//       });

//       const checkoutUrl = response.data.checkout_url;
//       window.location.href = checkoutUrl; // Go to Stripe payment
//     } catch (err) {
//       console.error("Error creating checkout:", err);
//       alert("Something went wrong. Try again.");
//     }
//   };

//   return (
//     <div>
//       <div
//         className="bg-[gray] w-full min-h-[800px] flex justify-center items-center bg-center bg-no-repeat bg-cover
//       "
//         style={{ backgroundImage: 'url("/PricingPg/billing.jpg")' }}
//       >
//         <div className="w-[1280px] min-h-[720px] rounded-[16px] border-[1px] border-solid border-[#E8EBF1] drop-shadow-[0_0_12px_0] shadow-[#E3EBFB80] bg-blur-[100px] blur-[100px] backdrop-blur-[20px] flex flex-col justify-start items-start px-[50px] py-[30px]">
//           <div className="w-full min-h-[50px] flex justify-start">
//             <Link to="/AfterUiPlans">
//               <div className="w-[70px] flex justify-center items-center">
//                 <img
//                   src={SideArrow}
//                   alt="Arrow"
//                   className="w-[24px] h-[24px]"
//                 />
//                 <div className="font-medium text-[20px] leading-[156%] text-[#2A2A2A]">
//                   Back
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div className="w-[1160px] h-[636px] flex flex-col justify-start items-start gap-[16px]">
//             <div className="w-full min-h-[76px] flex justify-center items-center">
//               <div className="w-[822px] h-[76px] flex justify-start items-center">
//                 <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
//                   <img src={Tick} alt="tick" className="w-[40px] h-[40px] " />
//                   <div className="font-semibold text-[16px] leading-[56%] text-[#007B82]">
//                     Billing Info
//                   </div>
//                 </div>

//                 <div className="w-[226px] h-[4px] rounded-[5px] bg-[#007B8233] "></div>

//                 <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
//                   <img src={Tick1} alt="tick" className="w-[40px] h-[40px] " />
//                   <div className=" w-[156px] ml-[30px] font-semibold text-[16px] leading-[200%] text-[#B0B0B0]">
//                     Payment Method
//                   </div>
//                 </div>

//                 <div className="w-[226px] h-[4px] rounded-[5px] bg-[#007B8233] "></div>

//                 <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
//                   <img src={Tick1} alt="tick" className="w-[40px] h-[40px] " />
//                   <div className="font-semibold text-[16px] leading-[56%] text-[#B0B0B0]">
//                     Success
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="w-[1160px] h-[544px] flex justify-between items-start gap-[18px]">
//               <div className="w-[716px] h-[544px] flex justify-start items-start flex-col gap-[30px]">
//                 <div className="w-[716px] h-[37px] font-semibold text-[24px] leading-[156%] text-[#007B82] ">
//                   Billing Information
//                 </div>

//                 <div className="w-[716px] h-[477px] flex flex-col justify-start items-start gap-[12px]">
//                   <div className="w-[716px] h-[42px] flex justify-between items-center gap-[16px]">
//                     <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
//                       <div className="font-[400] text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center ">
//                         Basic
//                         <input
//                           type="radio"
//                           className="accent-[#007B82]  w-[308px]"
//                           name="premium"
//                         />
//                       </div>
//                     </div>
//                     <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
//                       <div className="font-[400]  text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center ">
//                         Silver
//                         <input
//                           type="radio"
//                           className="accent-[#007B82] w-[308px]"
//                           name="premium"
//                         />
//                       </div>
//                     </div>
//                     <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
//                       <div className="font-[400] text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center ">
//                         Gold
//                         <input
//                           type="radio"
//                           className="accent-[#007B82] w-[308px]"
//                           name="premium"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="w-[472px] h-[42px] flex justify-between items-center gap-[16px]">
//                     <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
//                       <div className="font-[400] text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center ">
//                         Monthly
//                         <input
//                           type="radio"
//                           className="accent-[#007B82]  w-[278px]"
//                           name="Durations"
//                         />
//                       </div>
//                     </div>

//                     <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
//                       <div className="font-[400] text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center">
//                         Yearly
//                         <input
//                           type="radio"
//                           className="accent-[#007B82] w-[278px] "
//                           name="Durations"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* <div className="w-[716px] h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] flex justify-start items-center text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] bg-white"> */}
//                   <input
//                     type="name"
//                     className="w-[716px] h-[52px] placeholder:text-[#2A2A2A] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] flex justify-start items-center text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] bg-white"
//                     placeholder="Full Name"
//                   />

//                   <input
//                     type="name"
//                     className="w-[716px] h-[52px] placeholder:text-[#2A2A2A] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] flex justify-start items-center text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] bg-white"
//                     placeholder="Email"
//                   />

//                   <div className="w-[716px] h-[52px]  flex justify-between items-start gap-[16px]">
//                     <input
//                       type="text"
//                       className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
//                       placeholder="Address"
//                     />
//                     <input
//                       type="number"
//                       className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
//                       placeholder="Phone Number"
//                     />
//                     <input
//                       type="text"
//                       className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
//                       placeholder="City"
//                     />
//                   </div>

//                   <div className="w-[716px] h-[52px] flex justify-between items-start gap-[16px]">
//                     <input
//                       type="text"
//                       className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
//                       placeholder="State/Province"
//                     />
//                     <input
//                       type="number"
//                       className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
//                       placeholder="Zip/Postal Code"
//                     />
//                     <div className="w-[228px] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] flex justify-between items-center  overflow-hidden px-[20px] cursor-pointer">
//                       <select
//                         name=""
//                         id=""
//                         className="w-[208px] cursor-pointer"
//                       >
//                         <option value="">IND</option>
//                         <option value="">USA</option>
//                       </select>
//                     </div>
//                   </div>

//                   <input
//                     type="name"
//                     className="w-[716px] placeholder:text-[#2A2A2A] h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] flex justify-start items-center text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] bg-white"
//                     placeholder="Enter Coupen Code"
//                   />

//                     <div
//                     onClick={handleContinue}
//                     className="w-[716px] h-[49px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] text-[white] text-[16px] text-bold leading-[35px] tracking-[0px] text-center flex justify-center items-center">
//                       Continue
//                     </div>

//                 </div>
//               </div>

//               {/* right */}
//               <div className="w-[426px] h-[504px] border-[1.5px] flex flex-col justify-center items-center gap-[px]">
//                 <div className="w-[384.54px] h-[327.96px] rounded-[16px] bg-[#007B82B2] backdrop-blur-32 px-[20px] py-[50px] gap-[20px] flex flex-col justify-start">
//                   <div className="font-semibold text-[24px] leading-[100%] text-[white]">
//                     Plan Details
//                   </div>

//                   <div className="w-[334.79px] h-[192.92px] rounded-[16px] p-[16px] bg-[#007B82] flex flex-col justify-center items-center ">
//                     <div className="w-[303px] h-[128px] flex">
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
//                         Plan Name
//                       </div>
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
//                         Silver
//                       </div>
//                     </div>
//                     <div className="w-[303px] h-[128px] flex">
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
//                         Price
//                       </div>
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
//                         $29.00
//                       </div>
//                     </div>
//                     <div className="w-[303px] h-[128px] flex">
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
//                         Duration
//                       </div>
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
//                         One Month
//                       </div>
//                     </div>
//                     <div className="w-[303px] h-[128px] flex">
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
//                         Discount
//                       </div>
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
//                         (Use code)
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-[384.54px] h-[176.04px] rounded-[16px] bg-[#007B82B2] flex items-end py-5 px-5">
//                   <div className="w-[334.79px] h-[66.32px] flex justify-between items-center">
//                     <div className="w-[84px] h-[55px] flex flex-col justify-center items-center">
//                       <div className="w-[77px] h-[17px] font-[400] text-[14px] leading-[100%] text-white">
//                         Grand Total
//                       </div>
//                       <div className="font-[600] text-[25px] leading-[100%] text-[white]">
//                         $29.00
//                       </div>
//                     </div>

//                     <div className="w-[38px] h-[51px]">
//                       <img src={Paper} alt="page-icon" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-[50px] h-[50px] rounded-[50px] bg-white absolute top-[480px] right-[450px]"></div>
//                 <div className="w-[50px] h-[50px] rounded-[50px] bg-white absolute  top-[480px] right-[70px]"></div>
//                 <div className="w-[60%] border-[2px] border-dashed border-white absolute top-[505px]"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//AfterBilling
//AfterBilling
// import React, { useState } from "react";
// import SideArrow from "../../assets/pricing-pg/sideArrow.png";
// import Tick from "../../assets/pricing-pg/tick.png";
// import Tick1 from "../../assets/pricing-pg/tick1.png";
// import Paper from "../../assets/pricing-pg/paper.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function AfterBilling() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const plan = location.state?.plan || {
//     name: "Silver Plan",
//     price: "29.00",
//     duration: "One Month",
//     discount: "10%",
//     features: [
//       "High-resolution image download",
//       "Advanced AI layout suggestions",
//       "Access to premium themes & colour palettes",
//       "High-resolution image download",
//     ],
//   };

//   // Form state
//   const [formData, setFormData] = useState({
//     plan: "Silver",
//     duration: "Monthly",
//     full_name: "",
//     email: "",
//     phone_number: "",
//     street_address: "",
//     city: "",
//     state: "",
//     country: "IND",
//     pincode: "",
//     coupon_code: "",
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle plan selection
//   const handlePlanSelect = (plan) => {
//     setFormData((prev) => ({
//       ...prev,
//       plan,
//     }));
//   };

//   // Handle duration selection
//   const handleDurationSelect = (duration) => {
//     setFormData((prev) => ({
//       ...prev,
//       duration,
//     }));
//   };

//   // Handle form submission
//   const handleContinue = async (e) => {
//     e.preventDefault();

//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       alert("User ID not found");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:8000/pricing/create-checkout-session/",
//         {
//           userid: userId,
//           plan: formData.plan.toLowerCase(),
//           duration: formData.duration.toLowerCase(),
//           email: formData.email,
//           coupon_code: formData.coupon_code,
//           payment_method: "card",
//           payment_success: false,
//           billing_info: {
//             full_name: formData.full_name,
//             email: formData.email,
//             phone_number: formData.phone_number,
//             street_address: formData.street_address,
//             city: formData.city,
//             state: formData.state,
//             country: formData.country,
//             pincode: formData.pincode,
//           },
//         }
//       );

//       if (response.data.checkout_url) {
//         localStorage.setItem("billing_email", formData.email);
//         localStorage.setItem("billing_name", formData.full_name);
//         window.location.href = response.data.checkout_url;
//       }
//     } catch (error) {
//       console.error("Error creating checkout session:", error);
//       alert("Failed to create checkout session. Please try again.");
//     }
//   };

//   // Handle back button click
//   const handleGoBack = () => {
//     navigate(-1); // Go back to previous page
//   };

//   return (
//     <div>
//       <div
//         className="bg-[gray] w-full min-h-[800px] flex justify-center items-center bg-center bg-no-repeat bg-cover"
//         style={{ backgroundImage: 'url("/PricingPg/billing.jpg")' }}
//       >
//         <div className="w-[1280px] min-h-[720px] rounded-[16px] border-[1px] border-solid border-[#E8EBF1] drop-shadow-[0_0_12px_0] shadow-[#E3EBFB80] bg-blur-[100px] blur-[100px] backdrop-blur-[20px] flex flex-col justify-start items-start px-[50px] py-[30px]">
//           <div className="w-full min-h-[50px] flex justify-start">
//             <div
//               className="w-[70px] flex justify-center items-center cursor-pointer"
//               onClick={handleGoBack}
//             >
//               <img src={SideArrow} alt="Arrow" className="w-[24px] h-[24px]" />
//               <div className="font-medium text-[20px] leading-[156%] text-[#2A2A2A]">
//                 Back
//               </div>
//             </div>
//           </div>

//           <div className="w-[1160px] h-[636px] flex flex-col justify-start items-start gap-[16px]">
//             <div className="w-full min-h-[76px] flex justify-center items-center">
//               <div className="w-[822px] h-[76px] flex justify-start items-center">
//                 <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
//                   <img src={Tick} alt="tick" className="w-[40px] h-[40px]" />
//                   <div className="font-semibold text-[16px] leading-[56%] text-[#007B82]">
//                     Billing Info
//                   </div>
//                 </div>

//                 <div className="w-[226px] h-[4px] rounded-[5px] bg-[#007B8233]"></div>

//                 <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
//                   <img src={Tick1} alt="tick" className="w-[40px] h-[40px]" />
//                   <div className="w-[156px] ml-[30px] font-semibold text-[16px] leading-[200%] text-[#B0B0B0]">
//                     Payment Method
//                   </div>
//                 </div>

//                 <div className="w-[226px] h-[4px] rounded-[5px] bg-[#007B8233]"></div>

//                 <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
//                   <img src={Tick1} alt="tick" className="w-[40px] h-[40px]" />
//                   <div className="font-semibold text-[16px] leading-[56%] text-[#B0B0B0]">
//                     Success
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="w-[1160px] h-[544px] flex justify-between items-start gap-[18px]">
//               <div className="w-[716px] h-[544px] flex justify-start items-start flex-col gap-[30px]">
//                 <div className="w-[716px] h-[37px] font-semibold text-[24px] leading-[156%] text-[#007B82]">
//                   Billing Information
//                 </div>

//                 <form
//                   onSubmit={handleContinue}
//                   className="w-[716px] h-[477px] flex flex-col justify-start items-start gap-[12px]"
//                 >
//                   {/* Plan Selection */}
//                   <div className="w-[716px] h-[42px] flex justify-between items-center gap-[16px]">
//                     {["Basic", "Silver", "Gold"].map((plan) => (
//                       <div
//                         key={plan}
//                         className={`w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] flex justify-between items-center px-[16px] py-[10px] cursor-pointer ${
//                           formData.plan === plan ? "bg-[#E8F0FE]" : "bg-white"
//                         }`}
//                         required
//                         onClick={() => handlePlanSelect(plan)}
//                       >
//                         <div className="font-[400] text-[14px] leading-[140%] text-[#007B82]">
//                           {plan}
//                         </div>
//                         <input
//                           type="radio"
//                           className="accent-[#007B82]"
//                           required
//                           name="premium"
//                           checked={formData.plan === plan}
//                           onChange={() => {}}
//                         />
//                       </div>
//                     ))}
//                   </div>

//                   {/* Duration Selection */}
//                   <div className="w-[472px] h-[42px] flex justify-between items-center gap-[16px]">
//                     {["Monthly", "Yearly"].map((duration) => (
//                       <div
//                         key={duration}
//                         className={`w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] flex justify-between items-center px-[16px] py-[10px] cursor-pointer ${
//                           formData.duration === duration
//                             ? "bg-[#E8F0FE]"
//                             : "bg-white"
//                         }`}
//                         onClick={() => handleDurationSelect(duration)}
//                       >
//                         <div className="font-[400] text-[14px] leading-[140%] text-[#007B82]">
//                           {duration}
//                         </div>
//                         <input
//                           type="radio"
//                           className="accent-[#007B82]"
//                           name="Durations"
//                           checked={formData.duration === duration}
//                           onChange={() => {}}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                   {/* Form Fields */}
//                   <input
//                     type="text"
//                     name="full_name"
//                     value={formData.full_name}
//                     onChange={(e) => {
//                       if (/^[A-Za-z\s]*$/.test(e.target.value)) {
//                         handleChange(e);
//                       }
//                     }}
//                     className={`w-[716px] h-[52px] placeholder:text-[#2A2A2A] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] ${
//                       formData.full_name ? "bg-[#E8F0FE]" : "bg-white"
//                     }`}
//                     placeholder="Full Name"
//                     required
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
//                     className={`w-[716px] h-[52px] placeholder:text-[#2A2A2A] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] ${
//                       formData.email ? "bg-[#E8F0FE]" : "bg-white"
//                     }`}
//                     placeholder="Email"
//                     required
//                     title="Please enter a valid email address (e.g., user@example.com)"
//                   />

//                   <div className="w-[716px] h-[52px] flex justify-between items-start gap-[16px]">
//                     <input
//                       type="text"
//                       name="street_address"
//                       value={formData.street_address}
//                       onChange={handleChange}
//                       className={`w-[228px] placeholder:text-[#2A2A2A] h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] ${
//                         formData.street_address ? "bg-[#E8F0FE]" : "bg-white"
//                       }`}
//                       placeholder="Address"
//                       required
//                     />
//                     <input
//                       type="tel"
//                       name="phone_number"
//                       value={formData.phone_number}
//                       onChange={(e) => {
//                         if (/^[0-9+()-]*$/.test(e.target.value)) {
//                           handleChange(e);
//                         }
//                       }}
//                       pattern="[0-9+()-]{10,15}"
//                       className={`w-[228px] placeholder:text-[#2A2A2A] h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] ${
//                         formData.phone_number ? "bg-[#E8F0FE]" : "bg-white"
//                       }`}
//                       placeholder="Phone Number"
//                       required
//                     />
//                     <input
//                       type="text"
//                       name="city"
//                       value={formData.city}
//                       onChange={handleChange}
//                       className={`w-[228px] placeholder:text-[#2A2A2A] h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] ${
//                         formData.city ? "bg-[#E8F0FE]" : "bg-white"
//                       }`}
//                       placeholder="City"
//                       required
//                     />
//                   </div>

//                   <div className="w-[716px] h-[52px] flex justify-between items-start gap-[16px]">
//                     <input
//                       type="text"
//                       name="state"
//                       value={formData.state}
//                       onChange={handleChange}
//                       className={`w-[228px] placeholder:text-[#2A2A2A] h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] ${
//                         formData.state ? "bg-[#E8F0FE]" : "bg-white"
//                       }`}
//                       placeholder="State/Province"
//                       required
//                     />
//                     <input
//                       type="text"
//                       name="pincode"
//                       value={formData.pincode}
//                       onChange={(e) => {
//                         if (/^[0-9]*$/.test(e.target.value)) {
//                           handleChange(e);
//                         }
//                       }}
//                       className={`w-[228px] placeholder:text-[#2A2A2A] h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] ${
//                         formData.pincode ? "bg-[#E8F0FE]" : "bg-white"
//                       }`}
//                       placeholder="Zip/Postal Code"
//                       required
//                     />
//                     <div
//                       className={`w-[228px] h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] flex justify-between items-center px-[20px] cursor-pointer ${
//                         formData.country ? "bg-[#E8F0FE]" : "bg-white"
//                       }`}
//                     >
//                       <select
//                         name="country"
//                         value={formData.country}
//                         onChange={handleChange}
//                         className="w-[208px] cursor-pointer bg-transparent"
//                         required
//                       >
//                         <option value="">Select Country</option>
//                         <option value="IND">India</option>
//                         <option value="USA">United States</option>
//                       </select>
//                     </div>
//                   </div>

//                   <input
//                     type="text"
//                     name="coupon_code"
//                     value={formData.coupon_code}
//                     onChange={handleChange}
//                     className={`w-[716px] h-[52px] placeholder:text-[#2A2A2A] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] ${
//                       formData.coupon_code ? "bg-[#E8F0FE]" : "bg-white"
//                     }`}
//                     placeholder="Enter Coupon Code (optional)"
//                   />

//                   <button
//                     type="submit"
//                     className="w-[716px] h-[49px] rounded-[8px] text-white text-[16px] font-bold leading-[35px] tracking-[0px] text-center flex justify-center items-center"
//                     style={{
//                       background: `linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)`,
//                     }}
//                   >
//                     Continue
//                   </button>
//                 </form>
//               </div>

//               {/* Right side - Plan Details */}

//               <div className="w-[426px] h-[504px] border-[1.5px] flex flex-col justify-center items-center gap-[px]">
//                 <div className="w-[384.54px] h-[327.96px] rounded-[16px] bg-[#007B82B2] backdrop-blur-32 px-[20px] py-[50px] gap-[20px] flex flex-col justify-start">
//                   <div className="font-semibold text-[24px] leading-[100%] text-[white]">
//                     Plan Details
//                   </div>

//                   <div className="w-[334.79px] h-[192.92px] rounded-[16px] p-[16px] bg-[#007B82] flex flex-col justify-center items-center ">
//                     <div className="w-[303px] h-[128px] flex">
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
//                         Plan Name
//                       </div>
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
//                         {plan.name}
//                       </div>
//                     </div>
//                     <div className="w-[303px] h-[128px] flex">
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
//                         Price
//                       </div>
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
//                         ${plan.price}
//                       </div>
//                     </div>
//                     <div className="w-[303px] h-[128px] flex">
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
//                         Duration
//                       </div>
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
//                         {plan.validity_days}
//                       </div>
//                     </div>
//                     <div className="w-[303px] h-[128px] flex">
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
//                         Discount
//                       </div>
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
//                         {plan.offerCode}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-[384.54px] h-[176.04px] rounded-[16px] bg-[#007B82B2] flex items-end py-5 px-5">
//                   <div className="w-[334.79px] h-[66.32px] flex justify-between items-center">
//                     <div className="w-[84px] h-[55px] flex flex-col justify-center items-center">
//                       <div className="w-[77px] h-[17px] font-[400] text-[14px] leading-[100%] text-white">
//                         Grand Total
//                       </div>
//                       <div className="font-[600] text-[25px] leading-[100%] text-[white]">
//                         ${plan.price}
//                       </div>
//                     </div>

//                     <div className="w-[38px] h-[51px]">
//                       <img src={Paper} alt="page-icon" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-[50px] h-[50px] rounded-[50px] bg-white absolute top-[480px] right-[450px]"></div>
//                 <div className="w-[50px] h-[50px] rounded-[50px] bg-white absolute  top-[480px] right-[70px]"></div>
//                 {/* <div className="w-[20%] border-[2px] border-dashed border-white absolute top-[505px]"></div> */}
//                 <div className="w-[360px] border-[2px] border-dashed border-white absolute top-[505px]"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// AfterBilling.js - Modified to only show the selected plan
import React, { useState, useEffect } from "react";
import SideArrow from "../../assets/pricing-pg/sideArrow.png";
import Tick from "../../assets/pricing-pg/tick.png";
import Tick1 from "../../assets/pricing-pg/tick1.png";
import Paper from "../../assets/pricing-pg/paper.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AfterBilling() {
  const navigate = useNavigate();
  const location = useLocation();
  const [plan, setPlan] = useState(null);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlanFromState, setSelectedPlanFromState] = useState(null);

  // Static descriptions
  const staticDescriptions = {
    basic:
      "Perfect for personal or casual users who want a simple idea of interior design.",
    silver:
      "Ideal for homeowners or renters looking for more creative control and polished designs.",
    gold: "Best for professionals, renovators, or anyone seeking top-tier results and personalization.",
  };

  // Show more/less for features
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore((prev) => !prev);

  // Form state
  const [formData, setFormData] = useState({
    plan: "",
    duration: "Monthly",
    full_name: "",
    email: "",
    phone_number: "",
    street_address: "",
    city: "",
    state: "",
    country: "IND",
    pincode: "",
    coupon_code: "",
  });

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        // Get selected plan from location state first
        const selectedPlanFromLocation = location.state?.selectedPlan;
        if (selectedPlanFromLocation) {
          setSelectedPlanFromState(selectedPlanFromLocation);
          setPlan(selectedPlanFromLocation);
          setFormData((prev) => ({
            ...prev,
            plan: selectedPlanFromLocation.name,
            coupon_code: selectedPlanFromLocation.offerCode || "",
          }));
          setLoading(false);
          return; // Exit early if we have the selected plan from state
        }

        // Fallback to API if no plan in state
        const response = await fetch("http://127.0.0.1:8001/api/plans/");
        if (!response.ok) throw new Error("Failed to fetch plans.");
        const data = await response.json();

        const mappedPlans = data.plans.map((plan) => ({
          ...plan,
          description:
            staticDescriptions[plan.name.toLowerCase()] || plan.description,
        }));

        setPlans(mappedPlans);

        const planData = location.state?.plan;
        if (planData) {
          const mappedPlan = {
            ...planData,
            description:
              staticDescriptions[planData.name.toLowerCase()] ||
              planData.description,
          };
          setPlan(mappedPlan);
          setFormData((prev) => ({
            ...prev,
            plan: planData.name,
            coupon_code: planData.offerCode || "",
          }));
        } else {
          const defaultPlan =
            mappedPlans.find((p) => p.name.toLowerCase() === "silver") ||
            mappedPlans[0];
          if (defaultPlan) {
            setPlan(defaultPlan);
            setFormData((prev) => ({
              ...prev,
              plan: defaultPlan.name,
              coupon_code: defaultPlan.offerCode || "",
            }));
          }
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, [location.state]);

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle plan selection - disabled when only one plan is shown
  const handlePlanSelect = (planName) => {
    // Do nothing - plan selection is fixed when coming from confirmation page
  };

  // Handle duration selection
  const handleDurationSelect = (duration) => {
    setFormData((prev) => ({ ...prev, duration }));
  };

  // Submit form
  const handleContinue = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("User ID not found. Please log in.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/pricing/create-checkout-session/",
        {
          userid: userId,
          plan: formData.plan,
          duration: formData.duration.toLowerCase(),
          email: formData.email,
          coupon_code: formData.coupon_code,
          payment_method: "card",
          payment_success: false,
          billing_info: {
            full_name: formData.full_name,
            email: formData.email,
            phone_number: formData.phone_number,
            street_address: formData.street_address,
            city: formData.city,
            state: formData.state,
            country: formData.country,
            pincode: formData.pincode,
          },
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.checkout_url) {
        localStorage.setItem("billing_email", formData.email);
        localStorage.setItem("billing_name", formData.full_name);
        window.location.href = response.data.checkout_url;
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Failed to create checkout session.");
    }
  };

  const handleGoBack = () => navigate(-1);

  if (loading)
    return <div className="text-white text-center py-12">Loading...</div>;
  if (error || !plan)
    return <div className="text-white text-center py-12">Error: {error}</div>;

  // Features + total
  const features = Array.isArray(plan.features) ? plan.features : [];
  const visibleFeatures = showMore ? features : features.slice(0, 4);
  const discountPercentage = plan.discountPercentage || 0;
  const discount = `${discountPercentage}%`;
  const grandTotal = (
    plan.price -
    (plan.price * discountPercentage) / 100
  ).toFixed(2);

  // Determine which plans to show - only the selected one if coming from confirmation
  const plansToShow = selectedPlanFromState ? [selectedPlanFromState] : plans;

  return (
    <div>
      <div
        className="bg-[black] w-full min-h-[800px] flex justify-center items-center bg-center bg-no-repeat bg-cover -mt-[82px] pt-[82px] overflow-hidden"
      >
        <div className="w-[1280px] min-h-[720px] rounded-[16px] border-[1px] border-solid border-[#FFFFFF33] drop-shadow-[0_0_12px_0] shadow-[#E3EBFB80] bg-blur-[100px] blur-[100px] backdrop-blur-[20px] flex flex-col justify-start items-start px-[50px] py-[30px] mt-8 mb-4"
          style={{
            background: "linear-gradient(95.92deg, rgba(138, 56, 245, 0.2) 15.32%, rgba(194, 44, 162, 0.2) 99.87%)"
          }}
        > 
          {/* Back */}
          <div className="w-full min-h-[50px] flex justify-start">
            <div
              className="w-[70px] flex justify-center items-center cursor-pointer"
              onClick={handleGoBack}
            >
              <img src={SideArrow} alt="Arrow" className="w-[24px] h-[24px]" />
              <div className="font-medium text-[20px] text-white">Back</div>
            </div>
          </div>

          <div className="w-[1160px] flex flex-col gap-[16px]">
            {/* Steps */}
            <div className="w-full min-h-[76px] flex justify-center  ml-[40px]">
              <div className="w-[822px] h-[76px] flex justify-start items-center">
                <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px] ">
                  {/* Circle with transparent fill and no border */}
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
                    Success
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between gap-[18px]">
              {/* Left Form */}
              <div className="w-[716px] flex flex-col gap-[30px]">
                <div className="text-[24px] font-semibold text-white">
                  Billing Information
                </div>
                <form
                  onSubmit={handleContinue}
                  className="flex flex-col gap-[12px]"
                >
                  {/* Plan selection - only show if multiple plans available */}
                  {plansToShow.length > 1 ? (
                    <div className="flex gap-[16px]">
                      {plansToShow.map((p) => (
                        <div
                          key={p.id}
                          className={`w-[228px] h-[40px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF66]  flex justify-between items-center px-[16px] cursor-pointer ${
                            formData.plan === p.name ? "bg-[#FFFFFF1F]" : "bg-[#FFFFFF1F]"
                          }`}
                          onClick={() => handlePlanSelect(p.name)}
                        >
                          <div className="text-[14px] text-white">
                            {p.name}
                          </div>
                          <input
                            type="radio"
                            checked={formData.plan === p.name}
                            readOnly
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Show only the selected plan with no option to change
                    <div className="w-full h-[40px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF66] flex items-center px-[16px] bg-[#FFFFFF1F]">
                      <div className="text-[14px] text-white">
                        Selected Plan: {formData.plan}
                      </div>
                    </div>
                  )}

                  {/* Duration */}
                  <div className="flex gap-[16px]">
                    {["Monthly", "Yearly"].map((duration) => (
                      <div
                        key={duration}
                        className={`w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#FFFFFF66]  flex justify-between items-center px-[16px] cursor-pointer ${
                          formData.duration === duration
                            ? "bg-[#FFFFFF1F]"
                            : "bg-[#FFFFFF1F]"
                        }`}
                        onClick={() => handleDurationSelect(duration)}
                      >
                        <div className="text-[14px] text-white">
                          {duration}
                        </div>
                        <input
                          type="radio"
                          checked={formData.duration === duration}
                          readOnly
                        />
                      </div>
                    ))}
                  </div>

                  {/* Inputs */}
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={(e) =>
                      /^[A-Za-z\s]*$/.test(e.target.value) && handleChange(e)
                    }
                    className="w-full h-[52px] border-[1px] border-solid border-[#FFFFFF66]  rounded-[12px] px-[20px] bg-[#FFFFFF1F] text-white"
                    placeholder="Full Name"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-[52px] border-[1px] border-solid border-[#FFFFFF66] rounded-[12px] px-[20px] bg-[#FFFFFF1F] text-white"
                    placeholder="Email"
                    required
                  />

                  <div className="flex gap-[16px]">
                    <input
                      type="text"
                      name="street_address"
                      value={formData.street_address}
                      onChange={handleChange}
                      className="w-[228px] h-[52px] border-[1px] border-solid border-[#FFFFFF66] rounded-[12px] px-[20px] bg-[#FFFFFF1F] text-white"
                      placeholder="Address"
                      required
                    />
                    <input
                      type="tel"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={(e) =>
                        /^[0-9+()\-\s]*$/.test(e.target.value) &&
                        handleChange(e)
                      }
                      className="w-[228px] h-[52px] border-[1px] border-solid border-[#FFFFFF66] rounded-[12px] px-[20px] bg-[#FFFFFF1F] text-white"
                      placeholder="Phone"
                      required
                    />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-[228px] h-[52px] border-[1px] border-solid border-[#FFFFFF66] rounded-[12px] px-[20px] bg-[#FFFFFF1F] text-white"
                      placeholder="City"
                      required
                    />
                  </div>

                  <div className="flex gap-[16px]">
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-[228px] h-[52px] border-[1px] border-solid border-[#FFFFFF66] rounded-[12px] px-[20px] bg-[#FFFFFF1F] text-white"
                      placeholder="State"
                      required
                    />
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={(e) =>
                        /^[0-9]*$/.test(e.target.value) && handleChange(e)
                      }
                      className="w-[228px] h-[52px] border-[1px] border-solid border-[#FFFFFF66] rounded-[12px] px-[20px] bg-[#FFFFFF1F] text-white"
                      placeholder="Pincode"
                      required
                    />
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-[228px] h-[52px] border-[1px] border-solid border-[#FFFFFF66] rounded-[12px] px-[20px] bg-[#FFFFFF1F]"
                      required
                    >
                      <option value="IND" className="text-black font-bold">India</option>
                      <option value="USA" className="text-black font-bold">United States</option>
                    </select>
                  </div>

                  <input
                    type="text"
                    name="coupon_code"
                    value={formData.coupon_code}
                    onChange={handleChange}
                    className="w-full h-[52px]  border-[1px] border-solid border-[#FFFFFF66] rounded-[12px] px-[20px] bg-[#FFFFFF1F] text-white"
                    placeholder="Coupon Code (optional)"
                  />

                  <button
                    type="submit"
                    className="w-full h-[49px] rounded-[8px] text-white font-bold flex justify-center items-center border-[1px] border-solid border-[#FFFFFF66]"
                    style={{
                      background: "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)",
                    }}
                  >
                    Continue
                  </button>
                </form>
              </div>

              {/* Right side - Plan + Features */}
              <div className="w-[426px] flex flex-col gap-[20px]">
                <div className="rounded-[16px] p-[20px] flex flex-col gap-[20px] border-[2px] border-solid border-[#FFFFFF33] "
                 style={{
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                borderColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(14.18px)",
                boxShadow: "0px 0px 23.63px 0px #00000040",
              }}>
                  <div className="text-[24px] font-semibold text-white">
                    Plan Details
                  </div>
                  <div className="rounded-[16px] p-[16px] bg-[#89898933] border-[1px] border-solid border-[#FFFFFF33] flex flex-col gap-2 text-white">

                    <div className="flex justify-between">
                      <span>Plan Name</span>
                      <span className="font-semibold">{plan.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price</span>
                      <span className="font-semibold">
                        ${plan.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration</span>
                      <span className="font-semibold">{plan.validity_days} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discount</span>
                      <span className="font-semibold">
                        {discount}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-3">
                    <div className="text-lg font-semibold text-white">
                      Features
                    </div>
                    {visibleFeatures.map((feature, idx) => (
                      <div key={idx} className="flex gap-2 items-center">
                        <div className="w-4 h-4 flex-shrink-0 bg-[#8A38F5] rounded flex items-center justify-center">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5 13L9 17L19 7"
                              stroke="#000000"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="text-white text-sm">
                          {typeof feature === "object"
                            ? feature.text || feature.name
                            : feature}
                        </div>
                      </div>
                    ))}
                    {features.length > 4 && (
                      <button
                        onClick={toggleShowMore}
                        className="flex items-center gap-2 text-white text-sm mt-2"
                      >
                        {showMore
                          ? "See less"
                          : `See ${features.length - 4} more`}
                      </button>
                    )}
                  </div>
                </div>

                <div
                  className="rounded-[16px] p-5 flex justify-between items-center text-white border-[1px] border-solid border-[#FFFFFF66]"
                  style={{
                    background:
                      "linear-gradient(95.92deg, rgba(138, 56, 245, 0.2) 15.32%, rgba(194, 44, 162, 0.2) 99.87%)",
                  }}
                >
                  <div>
                    <div>Grand Total</div>
                    <div className="text-[25px] font-semibold">
                      ${grandTotal}
                    </div>
                  </div>
                  <img
                    src={Paper}
                    alt="page-icon"
                    className="w-[38px] h-[51px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

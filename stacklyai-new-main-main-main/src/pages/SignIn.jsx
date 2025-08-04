// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function SignIn({ onLogin }) {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const success = onLogin(formData.email, formData.password);
//     if (success) {
//       navigate("/AfterHome");
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div>
//       <div
//         className="bg-center bg-cover bg-no-repeat"
//         style={{ backgroundImage: 'url("/logIn/bg-img.jpeg")' }}
//       >
//         <div className="w-full max-[1000px]:p-[20px] max-[1000px]:flex-col max-[1000px]:gap-[50px] min-h-screen bg-[#000000b2] flex items-center justify-between pt-[44px] pr-[80px] pb-[44px] pl-[80px]">
//           <div className=" max-w-[631px] min-h-[455px] text-center flex flex-col items-center justify-between gap-3">
//             <h3 className="w-full min-h-[192px] font-semibold min-[500px]:text-center text-[28px] min-[631px]:text-[44px] leading-[36px] min-[500px]:leading-[64px] text-white mb-2.5">
//               Redesign your
//               <span className="block text-[#009A98] leading-[100%] text-[44px] min-[500px]:inline min-[500px]:text-[44px] font-semibold">
//                 "Interiors"
//               </span>
//               <br className="hidden min-[500px]:block" />
//               with Stackly in less than 25 seconds.
//             </h3>

//             <button className=" w-full max-w-[435px] min-h-[55px] rounded-[12px] border cursor-pointer font-medium text-base text-white bg-[#0000004d] mt-[50px] pt-[10px] pr-[20px] pb-[10px] pl-[20px]  border-solid border-[white] flex justify-center items-center gap-[10px]">
//               <span className="font-bold max-w-[150px] min-h-[35px] text-[18px] leading-[35px] spacing-[8px] tracking-[1px]">
//                 Start Free Trial
//               </span>
//             </button>

//             <p className="font-medium text-[16px] w-full max-w-[596px] min-h-[19px] leading-[100%] min-[500px]:text-base pt-5 text-[#ffffff] text-center">
//               Get started with 10 free outputs – No credit card needed!
//             </p>
//           </div>

//           <div className=" max-[1000px]:w-full max-w-[529px] min-h-[608px] border flex flex-col gap-10 items-center justify-center bg-[#0000004d] pt-[28px] pr-[32px] pb-[28px] pl-[32px] rounded-[10px] border-solid border-[white]">
//             <h3 className="font-semibold text-[24px] text-[#009A98] leading-[100%] text-center">
//               Welcome Back!
//             </h3>

//             <p className="font-medium text-[16px] text-[#ffffff] leading-[100%]">
//               Log in and bring your dream space to life
//             </p>

//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col gap-5 items-center justify-center w-full"
//             >
//               <input
//                 className="max-w-[465px] min-h-[44px] w-full bg-[white] p-[15px] placeholder:text-base placeholder:font-normal placeholder:text-[#2a2a2a] rounded-[8px]"
//                 type="email"
//                 placeholder="Email"
//                 required
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData((prev) => ({ ...prev, email: e.target.value }))
//                 }
//               />

//               <div className="max-w-[465px] min-h-[44px] w-full bg-[white] flex items-center justify-center p-[15px] rounded-[5px]">
//                 <input
//                   className="bg-white flex-1 placeholder:text-base placeholder:font-normal placeholder:text-[#2a2a2a]"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   required
//                   value={formData.password}
//                   onChange={(e) =>
//                     setFormData((prev) => ({
//                       ...prev,
//                       password: e.target.value,
//                     }))
//                   }
//                 />
//                 <span
//                   className="cursor-pointer"
//                   onClick={() => setShowPassword((prev) => !prev)}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="25"
//                     height="15"
//                     viewBox="0 0 25 15"
//                     fill="none"
//                   >
//                     <path
//                       d="M24.0705 7.51211C21.3277 4.35156 17.5375 0.71875 12.5 0.71875C10.4656 0.71875 8.60078 1.29395 6.63301 2.52305C4.97402 3.56445 3.27266 5.02969 0.935547 7.43945L0.875 7.5L1.28066 7.91777C4.6168 11.3326 7.49883 14.2812 12.5 14.2812C14.71 14.2812 16.8533 13.5607 19.0512 12.0773C20.9221 10.8119 22.5145 9.20742 23.792 7.91172L24.125 7.57871L24.0705 7.51211ZM12.5 12.3438C9.82988 12.3438 7.65625 10.1701 7.65625 7.5C7.65625 4.82988 9.82988 2.65625 12.5 2.65625C15.1701 2.65625 17.3438 4.82988 17.3438 7.5C17.3438 10.1701 15.1701 12.3438 12.5 12.3438Z"
//                       fill="#BEBCBC"
//                     />
//                   </svg>
//                 </span>
//               </div>

//               <p className="max-w-[465px] w-full text-base text-[#b0b0b0] font-normal text-end">
//                 <Link
//                   className="no-underline font-medium text-[#009A98]"
//                   to="/HeroForgetPg"
//                 >
//                   Forget Password?
//                 </Link>
//               </p>

//               <Link to="/AfterHome">
//                 {" "}
//                 <button
//                   type="submit"
//                   className="w-[456px] bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-base text-[white] cursor-pointer font-bold max-w-[465px] p-[15px] rounded-[5px]"
//                 >
//                   Log In
//                 </button>
//               </Link>
//             </form>
//             <div className="w-full max-w-[458px] min-h-[19px] flex justify-between items-center p-[15px]">
//               <div className="w-[202px] border-[1px] border-solid border-[#B0B0B0]"></div>
//               <p className="font-medium text-base text-[#b0b0b0] text-[16px] leading-[100%] px-3">
//                 or
//               </p>
//               <div className="w-[202px] border-[1px] border-solid border-[#B0B0B0]"></div>
//             </div>

//             <p className="font-semibold max-w-[458px] text-[16px] leading-[100%] text-center text-base text-[#b0b0b0]">
//               sign up with
//             </p>
//             <div className="max-w-[458px] flex items-center justify-between gap-2.5 w-full">
//               <a href="#">
//                 <button className="w-[136px] h-[44px] bg-white rounded cursor-pointer shadow-[2px_2px_5px_#00000014] p-2.5 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                   >
//                     <g clipPath="url(#clip0_36_40)">
//                       <path
//                         d="M8.36055 0.789371C5.96258 1.62125 3.89457 3.20018 2.46029 5.29425C1.026 7.38832 0.301037 9.88714 0.391883 12.4237C0.482728 14.9602 1.38459 17.4008 2.96501 19.3869C4.54543 21.373 6.72109 22.7999 9.17243 23.4581C11.1598 23.9709 13.2419 23.9934 15.2399 23.5237C17.0499 23.1172 18.7233 22.2476 20.0962 21C21.5251 19.6619 22.5622 17.9596 23.0962 16.0762C23.6765 14.0281 23.7798 11.8742 23.3981 9.78H12.2381V14.4094H18.7012C18.572 15.1477 18.2952 15.8524 17.8873 16.4813C17.4795 17.1102 16.9489 17.6503 16.3274 18.0694C15.5382 18.5914 14.6485 18.9427 13.7156 19.1006C12.7798 19.2746 11.82 19.2746 10.8843 19.1006C9.93591 18.9045 9.03874 18.5131 8.24993 17.9512C6.98271 17.0542 6.0312 15.7799 5.53118 14.31C5.02271 12.8126 5.02271 11.1893 5.53118 9.69187C5.8871 8.64228 6.47549 7.68663 7.25243 6.89625C8.14154 5.97515 9.26718 5.31674 10.5058 4.99326C11.7445 4.66979 13.0484 4.69374 14.2743 5.0625C15.232 5.35648 16.1078 5.87013 16.8318 6.5625C17.5606 5.8375 18.2881 5.11062 19.0143 4.38187C19.3893 3.99 19.7981 3.61687 20.1674 3.21562C19.0622 2.18714 17.765 1.38685 16.3499 0.860622C13.7731 -0.0750226 10.9536 -0.100167 8.36055 0.789371Z"
//                         fill="white"
//                       />
//                       <path
//                         d="M8.3607 0.789367C10.9536 -0.100776 13.7731 -0.0762934 16.3501 0.858742C17.7654 1.38855 19.062 2.19269 20.1657 3.22499C19.7907 3.62624 19.3951 4.00124 19.0126 4.39124C18.2851 5.11749 17.5582 5.84124 16.832 6.56249C16.1079 5.87012 15.2321 5.35648 14.2745 5.06249C13.0489 4.69244 11.7451 4.66711 10.5061 4.98926C9.26712 5.31141 8.14079 5.96861 7.2507 6.88874C6.47377 7.67912 5.88538 8.63477 5.52945 9.68437L1.64258 6.67499C3.03384 3.91604 5.44273 1.80566 8.3607 0.789367Z"
//                         fill="#E33629"
//                       />
//                       <path
//                         d="M0.611157 9.65624C0.820072 8.62085 1.16691 7.61816 1.64241 6.67499L5.52928 9.69186C5.02081 11.1892 5.02081 12.8126 5.52928 14.31C4.23428 15.31 2.93866 16.315 1.64241 17.325C0.452064 14.9556 0.0890305 12.2559 0.611157 9.65624Z"
//                         fill="#F8BD00"
//                       />
//                       <path
//                         d="M12.2381 9.77814H23.3981C23.7799 11.8724 23.6766 14.0263 23.0963 16.0744C22.5623 17.9578 21.5252 19.66 20.0963 20.9981C18.8419 20.0194 17.5819 19.0481 16.3275 18.0694C16.9494 17.6499 17.4802 17.1092 17.8881 16.4796C18.296 15.8501 18.5726 15.1447 18.7013 14.4056H12.2381C12.2363 12.8644 12.2381 11.3213 12.2381 9.77814Z"
//                         fill="#587DBD"
//                       />
//                       <path
//                         d="M1.64062 17.325C2.93687 16.325 4.2325 15.32 5.5275 14.31C6.02851 15.7804 6.98138 17.0548 8.25 17.9512C9.04127 18.5105 9.94037 18.8987 10.89 19.0912C11.8257 19.2652 12.7855 19.2652 13.7213 19.0912C14.6542 18.9333 15.5439 18.5821 16.3331 18.06C17.5875 19.0387 18.8475 20.01 20.1019 20.9887C18.7292 22.237 17.0558 23.1073 15.2456 23.5144C13.2476 23.9841 11.1655 23.9616 9.17813 23.4487C7.60632 23.0291 6.13814 22.2892 4.86563 21.2756C3.51874 20.2063 2.41867 18.8587 1.64062 17.325Z"
//                         fill="#319F43"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_36_40">
//                         <rect width="24" height="24" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </button>
//               </a>
//               <a href="#">
//                 <button className="w-[136px] h-[44px] bg-white rounded cursor-pointer shadow-[2px_2px_5px_#00000014] p-2.5 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                   >
//                     <path
//                       d="M18.7026 12.7535C18.6719 9.71361 21.2398 8.25549 21.354 8.18348C19.911 6.11931 17.6636 5.83729 16.8629 5.80488C14.9508 5.61527 13.1308 6.90538 12.1594 6.90538C11.1916 6.90538 9.69339 5.83249 8.1067 5.86129C6.02388 5.89129 4.10193 7.04459 3.02858 8.86874C0.862246 12.541 2.47349 17.9835 4.58456 20.9621C5.61615 22.4203 6.84669 24.0584 8.46162 23.9984C10.0164 23.9384 10.6046 23.0155 12.4848 23.0155C14.365 23.0155 14.8943 23.9996 16.5399 23.9696C18.2138 23.9384 19.2737 22.4827 20.2979 21.021C21.483 19.3288 21.9705 17.6907 22 17.6067C21.9632 17.5911 18.7358 16.3826 18.7038 12.7523L18.7026 12.7535ZM15.6103 3.83312C16.4675 2.81663 17.0459 1.40652 16.8875 0C15.6533 0.048004 14.1562 0.804067 13.2708 1.81815C12.4762 2.71823 11.7799 4.15235 11.9666 5.53126C13.3445 5.63687 14.7519 4.8472 15.6103 3.83312Z"
//                       fill="black"
//                     />
//                   </svg>
//                 </button>
//               </a>
//               <a href="#">
//                 <button className="w-[136px] h-[44px] bg-white rounded cursor-pointer shadow-[2px_2px_5px_#00000014] p-2.5 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                   >
//                     <g clipPath="url(#clip0_36_50)">
//                       <mask
//                         id="mask0_36_50"
//                         maskUnits="userSpaceOnUse"
//                         x="0"
//                         y="0"
//                         width="24"
//                         height="24"
//                       >
//                         <path d="M0 0H24V24H0V0Z" fill="white" />
//                       </mask>
//                       <g mask="url(#mask0_36_50)">
//                         <path
//                           fillRule="evenodd"
//                           clipRule="evenodd"
//                           d="M0 12.067C0 18.034 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
//                           fill="#1877F2"
//                         />
//                       </g>
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_36_50">
//                         <rect width="24" height="24" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </button>
//               </a>
//             </div>
//             <p className="max-w-[346px] min-h-[19px] flex justify-center items-center gap-[4px] text-[16] leading-[100%] text-base text-[#b0b0b0] font-normal">
//               Don't You have an account?{" "}
//               <Link
//                 to="/sign-up"
//                 className="nounderline font-[900] text-[16px] text-[#00B0BA]"
//               >
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
//Signin Desktop version
// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
// import axios from "axios";

// export default function SignIn() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const { setUserInfo } = useContext(UserContext);

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError("");

//   try {
//     const res = await axios.post(
//       "http://localhost:8000/login",
//       {
//         email: formData.email,
//         password: formData.password,
//       },
//       { withCredentials: true }
//     );

//     const { userId, email, access_token } = res.data;

//     // ✅ Save to context (already correct)
//     setUserInfo({ userId, email, token: access_token });

//     // ✅ ALSO save to localStorage
//     localStorage.setItem("token", access_token);
//     localStorage.setItem("userId", userId);
//     localStorage.setItem("userEmail", email);

//     navigate("/afterhome");
//   } catch (err) {
//     console.error(err);
//     setError("Invalid email or password");
//   }
// };

//   return (
//     <div>
//       <div
//         className="bg-center bg-cover bg-no-repeat"
//         style={{ backgroundImage: 'url("/logIn/bg-img.jpeg")' }}
//       >
//         <div className="w-full max-[1000px]:p-[20px] max-[1000px]:flex-col max-[1000px]:gap-[50px] min-h-screen bg-[#000000b2] flex items-center justify-between pt-[44px] pr-[80px] pb-[44px] pl-[80px]">
//           <div className=" max-w-[631px] min-h-[455px] text-center flex flex-col items-center justify-between gap-3">
//             <h3 className="w-full min-h-[192px] font-semibold min-[500px]:text-center text-[28px] min-[631px]:text-[44px] leading-[36px] min-[500px]:leading-[64px] text-white mb-2.5">
//               Redesign your{" "}
//               <span className="block text-[#009A98] leading-[100%] text-[44px] min-[500px]:inline min-[500px]:text-[44px] font-semibold">
//                 "Interiors"
//               </span>
//               <br className="hidden min-[500px]:block" />
//               with Stackly in less than 25 seconds.
//             </h3>

//             <button className=" w-full max-w-[435px] min-h-[55px] rounded-[12px] border cursor-pointer font-medium text-base text-white bg-[#0000004d] mt-[50px] pt-[10px] pr-[20px] pb-[10px] pl-[20px]  border-solid border-[white] flex justify-center items-center gap-[10px]">
//               <span className="font-bold max-w-[150px] min-h-[35px] text-[18px] leading-[35px] spacing-[8px] tracking-[1px]">
//                 Start Free Trial
//               </span>
//             </button>

//             <p className="font-medium text-[16px] w-full max-w-[596px] min-h-[19px] leading-[100%] min-[500px]:text-base pt-5 text-[#ffffff] text-center">
//               Get started with 10 free outputs – No credit card needed!
//             </p>
//           </div>

//           <div className=" max-[1000px]:w-full max-w-[529px] min-h-[608px] border flex flex-col gap-10 items-center justify-center bg-[#0000004d] pt-[28px] pr-[32px] pb-[28px] pl-[32px] rounded-[10px] border-solid border-[white]">
//             <h3 className="font-semibold text-[24px] text-[#009A98] leading-[100%] text-center">
//               Welcome Back!
//             </h3>

//             <p className="font-medium text-[16px] text-[#ffffff] leading-[100%]">
//               Log in and bring your dream space to life
//             </p>

//             {error && (
//               <p className="text-red-500 text-center max-w-[465px] w-full">
//                 {error}
//               </p>
//             )}

//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col gap-5 items-center justify-center w-full"
//             >
//               <input
//                 className="max-w-[465px] min-h-[44px] w-full bg-[white] p-[15px] placeholder:text-base placeholder:font-normal placeholder:text-[#2a2a2a] rounded-[8px]"
//                 type="email"
//                 placeholder="Email"
//                 required
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData((prev) => ({ ...prev, email: e.target.value }))
//                 }
//               />

//               <div className="max-w-[465px] min-h-[44px] w-full bg-[white] flex items-center justify-center p-[15px] rounded-[5px]">
//                 <input
//                   className="bg-white flex-1 placeholder:text-base placeholder:font-normal placeholder:text-[#2a2a2a]"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   required
//                   value={formData.password}
//                   onChange={(e) =>
//                     setFormData((prev) => ({
//                       ...prev,
//                       password: e.target.value,
//                     }))
//                   }
//                 />
//                 <span
//                   className="cursor-pointer"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="25"
//                     height="15"
//                     viewBox="0 0 25 15"
//                     fill="none"
//                   >
//                     <path
//                       d="M24.0705 7.51211C21.3277 4.35156 17.5375 0.71875 12.5 0.71875C10.4656 0.71875 8.60078 1.29395 6.63301 2.52305C4.97402 3.56445 3.27266 5.02969 0.935547 7.43945L0.875 7.5L1.28066 7.91777C4.6168 11.3326 7.49883 14.2812 12.5 14.2812C14.71 14.2812 16.8533 13.5607 19.0512 12.0773C20.9221 10.8119 22.5145 9.20742 23.792 7.91172L24.125 7.57871L24.0705 7.51211ZM12.5 12.3438C9.82988 12.3438 7.65625 10.1701 7.65625 7.5C7.65625 4.82988 9.82988 2.65625 12.5 2.65625C15.1701 2.65625 17.3438 4.82988 17.3438 7.5C17.3438 10.1701 15.1701 12.3438 12.5 12.3438Z"
//                       fill="#BEBCBC"
//                     />
//                     <path
//                       d="M12.1609 5.73203C12.1609 5.31426 12.282 4.9207 12.4939 4.59375C10.8895 4.59375 9.59375 5.90156 9.59375 7.51211C9.59375 9.12266 10.8955 10.4244 12.4939 10.4244C14.0924 10.4244 15.4002 9.12266 15.4002 7.51211C15.0732 7.72402 14.6797 7.84512 14.2619 7.84512C13.1055 7.83906 12.1609 6.89453 12.1609 5.73203Z"
//                       fill="#BEBCBC"
//                     />
//                   </svg>
//                 </span>
//               </div>

//               <p className="max-w-[465px] w-full text-base text-[#b0b0b0] font-normal text-end">
//                 <Link
//                   className="no-underline font-medium text-[#009A98]"
//                   to="/HeroForgetPg"
//                 >
//                   Forget Password?
//                 </Link>
//               </p>

//               <button
//                 type="submit"
//                 className="w-[456px] bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-base text-[white] cursor-pointer font-bold max-w-[465px] p-[15px] rounded-[5px]"
//               >
//                 Log In
//               </button>
//             </form>
//             <div className="w-full max-w-[458px] min-h-[19px] flex justify-between items-center p-[15px]">
//               <div className="w-[202px] border-[1px] border-solid border-[#B0B0B0]"></div>
//               <p className="font-medium text-base text-[#b0b0b0] text-[16px] leading-[100%] px-3">
//                 or
//               </p>
//               <div className="w-[202px] border-[1px] border-solid border-[#B0B0B0]"></div>
//             </div>

//             <p className="font-semibold max-w-[458px] text-[16px] leading-[100%] text-center text-base text-[#b0b0b0]">
//               sign up with
//             </p>
//             <div className="max-w-[458px] flex items-center justify-between gap-2.5 w-full">
//               <a href="http://localhost:8000/login/google">
//                 <button className="w-[136px] h-[44px] bg-white rounded cursor-pointer shadow-[2px_2px_5px_#00000014] p-2.5 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                   >
//                     <g clipPath="url(#clip0_36_40)">
//                       <path
//                         d="M8.36055 0.789371C5.96258 1.62125 3.89457 3.20018 2.46029 5.29425C1.026 7.38832 0.301037 9.88714 0.391883 12.4237C0.482728 14.9602 1.38459 17.4008 2.96501 19.3869C4.54543 21.373 6.72109 22.7999 9.17243 23.4581C11.1598 23.9709 13.2419 23.9934 15.2399 23.5237C17.0499 23.1172 18.7233 22.2476 20.0962 21C21.5251 19.6619 22.5622 17.9596 23.0962 16.0762C23.6765 14.0281 23.7798 11.8742 23.3981 9.78H12.2381V14.4094H18.7012C18.572 15.1477 18.2952 15.8524 17.8873 16.4813C17.4795 17.1102 16.9489 17.6503 16.3274 18.0694C15.5382 18.5914 14.6485 18.9427 13.7156 19.1006C12.7798 19.2746 11.82 19.2746 10.8843 19.1006C9.93591 18.9045 9.03874 18.5131 8.24993 17.9512C6.98271 17.0542 6.0312 15.7799 5.53118 14.31C5.02271 12.8126 5.02271 11.1893 5.53118 9.69187C5.8871 8.64228 6.47549 7.68663 7.25243 6.89625C8.14154 5.97515 9.26718 5.31674 10.5058 4.99326C11.7445 4.66979 13.0484 4.69374 14.2743 5.0625C15.232 5.35648 16.1078 5.87013 16.8318 6.5625C17.5606 5.8375 18.2881 5.11062 19.0143 4.38187C19.3893 3.99 19.7981 3.61687 20.1674 3.21562C19.0622 2.18714 17.765 1.38685 16.3499 0.860622C13.7731 -0.0750226 10.9536 -0.100167 8.36055 0.789371Z"
//                         fill="white"
//                       />
//                       <path
//                         d="M8.3607 0.789367C10.9536 -0.100776 13.7731 -0.0762934 16.3501 0.858742C17.7654 1.38855 19.062 2.19269 20.1657 3.22499C19.7907 3.62624 19.3951 4.00124 19.0126 4.39124C18.2851 5.11749 17.5582 5.84124 16.832 6.56249C16.1079 5.87012 15.2321 5.35648 14.2745 5.06249C13.0489 4.69244 11.7451 4.66711 10.5061 4.98926C9.26712 5.31141 8.14079 5.96861 7.2507 6.88874C6.47377 7.67912 5.88538 8.63477 5.52945 9.68437L1.64258 6.67499C3.03384 3.91604 5.44273 1.80566 8.3607 0.789367Z"
//                         fill="#E33629"
//                       />
//                       <path
//                         d="M0.611157 9.65624C0.820072 8.62085 1.16691 7.61816 1.64241 6.67499L5.52928 9.69186C5.02081 11.1892 5.02081 12.8126 5.52928 14.31C4.23428 15.31 2.93866 16.315 1.64241 17.325C0.452064 14.9556 0.0890305 12.2559 0.611157 9.65624Z"
//                         fill="#F8BD00"
//                       />
//                       <path
//                         d="M12.2381 9.77814H23.3981C23.7799 11.8724 23.6766 14.0263 23.0963 16.0744C22.5623 17.9578 21.5252 19.66 20.0963 20.9981C18.8419 20.0194 17.5819 19.0481 16.3275 18.0694C16.9494 17.6499 17.4802 17.1092 17.8881 16.4796C18.296 15.8501 18.5726 15.1447 18.7013 14.4056H12.2381C12.2363 12.8644 12.2381 11.3213 12.2381 9.77814Z"
//                         fill="#587DBD"
//                       />
//                       <path
//                         d="M1.64062 17.325C2.93687 16.325 4.2325 15.32 5.5275 14.31C6.02851 15.7804 6.98138 17.0548 8.25 17.9512C9.04127 18.5105 9.94037 18.8987 10.89 19.0912C11.8257 19.2652 12.7855 19.2652 13.7213 19.0912C14.6542 18.9333 15.5439 18.5821 16.3331 18.06C17.5875 19.0387 18.8475 20.01 20.1019 20.9887C18.7292 22.237 17.0558 23.1073 15.2456 23.5144C13.2476 23.9841 11.1655 23.9616 9.17813 23.4487C7.60632 23.0291 6.13814 22.2892 4.86563 21.2756C3.51874 20.2063 2.41867 18.8587 1.64062 17.325Z"
//                         fill="#319F43"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_36_40">
//                         <rect width="24" height="24" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </button>
//               </a>
//               <a href="http://localhost:8000/login/apple">
//                 <button className="w-[136px] h-[44px] bg-white rounded cursor-pointer shadow-[2px_2px_5px_#00000014] p-2.5 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                   >
//                     <path
//                       d="M18.7026 12.7535C18.6719 9.71361 21.2398 8.25549 21.354 8.18348C19.911 6.11931 17.6636 5.83729 16.8629 5.80488C14.9508 5.61527 13.1308 6.90538 12.1594 6.90538C11.1916 6.90538 9.69339 5.83249 8.1067 5.86129C6.02388 5.89129 4.10193 7.04459 3.02858 8.86874C0.862246 12.541 2.47349 17.9835 4.58456 20.9621C5.61615 22.4203 6.84669 24.0584 8.46162 23.9984C10.0164 23.9384 10.6046 23.0155 12.4848 23.0155C14.365 23.0155 14.8943 23.9996 16.5399 23.9696C18.2138 23.9384 19.2737 22.4827 20.2979 21.021C21.483 19.3288 21.9705 17.6907 22 17.6067C21.9632 17.5911 18.7358 16.3826 18.7038 12.7523L18.7026 12.7535ZM15.6103 3.83312C16.4675 2.81663 17.0459 1.40652 16.8875 0C15.6533 0.048004 14.1562 0.804067 13.2708 1.81815C12.4762 2.71823 11.7799 4.15235 11.9666 5.53126C13.3445 5.63687 14.7519 4.8472 15.6103 3.83312Z"
//                       fill="black"
//                     />
//                   </svg>
//                 </button>
//               </a>
//               <a href="http://localhost:8000/login/facebook">
//                 <button className="w-[136px] h-[44px] bg-white rounded cursor-pointer shadow-[2px_2px_5px_#00000014] p-2.5 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                   >
//                     <g clipPath="url(#clip0_36_50)">
//                       <mask
//                         id="mask0_36_50"
//                         maskUnits="userSpaceOnUse"
//                         x="0"
//                         y="0"
//                         width="24"
//                         height="24"
//                       >
//                         <path d="M0 0H24V24H0V0Z" fill="white" />
//                       </mask>
//                       <g mask="url(#mask0_36_50)">
//                         <path
//                           fillRule="evenodd"
//                           clipRule="evenodd"
//                           d="M0 12.067C0 18.034 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
//                           fill="#1877F2"
//                         />
//                       </g>
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_36_50">
//                         <rect width="24" height="24" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </button>
//               </a>
//             </div>
//             <p className="max-w-[346px] min-h-[19px] flex justify-center items-center gap-[4px] text-[16] leading-[100%] text-base text-[#b0b0b0] font-normal">
//               Don't You have an account?{" "}
//               <Link
//                 to="/sign-up"
//                 className="nounderline font-[900] text-[16px] text-[#00B0BA]"
//               >
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import logoImg from "../assets/Logo.png";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setUserInfo } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:8000/login",
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );

      const { userId, email, access_token } = res.data;

      // ✅ Save to context (already correct)
      setUserInfo({ userId, email, token: access_token });

      // ✅ ALSO save to localStorage
      localStorage.setItem("token", access_token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("userEmail", email);

      navigate("/afterhome");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };


  return (
    <div>
      <div
        className="bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/logIn/bg-img.jpeg")' }}

      >
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

        <div className="w-full max-[1000px]:p-[20px] max-[1000px]:flex-col max-[1000px]:gap-[50px] min-h-screen bg-[#000000b2] flex items-center justify-between pt-[44px] pr-[80px] pb-[44px] pl-[80px]">

          <div className="max-w-[631px] min-h-[455px] text-center flex flex-col items-center justify-between gap-3">
            
            <h3
  className="
    hidden
    max-[440px]:block 
    max-[440px]:absolute max-[440px]:top-[120px] max-[440px]:left-0 max-[440px]:right-0
    max-[440px]:font-semibold max-[440px]:text-[24px] max-[440px]:text-[#009A98] max-[440px]:leading-[100%] max-[440px]:text-center

    min-[441px]:max-[768px]:block 
    min-[441px]:max-[768px]:w-[608px]
    min-[441px]:max-[768px]:h-[34px]
    min-[441px]:max-[768px]:text-[28px]
    min-[441px]:max-[768px]:leading-[100%]
    min-[441px]:max-[768px]:text-[#009A98]
    min-[441px]:max-[768px]:font-semibold
    min-[441px]:max-[768px]:text-center
    min-[441px]:max-[768px]:pt-[100px]
    
  "
>
  Welcome Back!

  
        <p
  className="
    hidden 
    min-[441px]:max-[768px]:block 
    min-[441px]:max-[768px]:w-[608px]
    min-[441px]:max-[768px]:h-[19px]
    min-[441px]:max-[768px]:text-[16px]
    min-[441px]:max-[768px]:leading-[100%]
    min-[441px]:max-[768px]:font-['Inter']
    min-[441px]:max-[768px]:font-[400]
    min-[441px]:max-[768px]:text-[#FFFFFF]
    min-[441px]:max-[768px]:text-center
    min-[441px]:max-[768px]:mt-[15px]
  "
>
  Login and bring your dream space to life
</p>


</h3>




            {/* Heading with adjusted spacing */}
           <h3
  className="
    w-full min-h-[192px] font-semibold text-[28px] leading-[36px] text-white 
    min-[500px]:text-center min-[631px]:text-[44px] min-[500px]:leading-[64px]

    /* Mobile <440px styles */ 
    max-[440px]:w-[281px]
    max-[440px]:h-auto
    max-[440px]:pt-[250px]
    max-[440px]:text-left
    max-[440px]:mx-auto
    max-[440px]:text-[16px]
    max-[440px]:leading-[160%]
    max-[440px]:font-['Inter']
    max-[440px]:font-semibold

    /* Tablet 441px–768px styles */
    min-[441px]:max-[768px]:w-[608px]
    min-[441px]:max-[768px]:h-[45px]
    min-[441px]:max-[768px]:text-[16px]
    min-[441px]:max-[768px]:leading-[160%]
    min-[441px]:max-[768px]:font-semibold
    min-[441px]:max-[768px]:text-center
    min-[441px]:max-[768px]:font-['Inter']
    min-[441px]:max-[768px]:pb[55px]
     min-[441px]:max-[768px]:pt-[90px] 
  "
>
 <div
  className="
    w-full text-center

  /* Tablet */
      min-[441px]:max-[768px]:text-[22px]

    /* Mobile */
    max-[440px]:w-full
  "
>
  Redesign your{" "}
  <span
    className="
      inline font-semibold text-[#009A98] leading-[100%]
      min-[500px]:text-[44px]

      /* Tablet */
      min-[441px]:max-[768px]:text-[16px]
      min-[441px]:max-[768px]:leading-[100%]
      min-[441px]:max-[768px]:text-[#FFD56B]
      min-[441px]:max-[768px]:font-['Inter']

      /* Mobile */
      max-[440px]:text-[#FFD56B]
      max-[440px]:text-[22px]
      max-[440px]:leading-[100%]
      max-[440px]:font-['Inter']
    "
  >
    "Interiors"
  </span>
</div>

  <div
    className="
      max-[440px]:mt-[4px]

      /* Tablet */
      min-[441px]:max-[768px]:text-[22px]
     min-[441px]:max-[768px]:mt-[9px]
    "
  >
    with Stackly in less than 25 seconds.
  </div>
</h3>

          <Link
  to="/sign-up"
  className="
    w-full max-w-[435px] min-h-[55px] rounded-[12px] border cursor-pointer font-medium text-base text-white bg-[#0000004d] mt-[50px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] border-solid border-white flex justify-center items-center gap-[10px]
    hover:bg-[#00000080] hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,184,212,0.5)]
    transition-all duration-300 ease-in-out

    /* Mobile */
    max-[440px]:w-[360px] 
    max-[440px]:h-[44px] 
    max-[440px]:rounded-[8px] 
    max-[440px]:border-[1px] 
    max-[440px]:px-5 
    max-[440px]:py-2.5 
    max-[440px]:gap-[10px]

    /* Tablet */
    min-[441px]:max-[768px]:w-[608px]
    min-[441px]:max-[768px]:h-[52px]
    min-[441px]:max-[768px]:pt-[10px]
    min-[441px]:max-[768px]:pr-[20px]
    min-[441px]:max-[768px]:pb-[10px]
    min-[441px]:max-[768px]:pl-[20px]
    min-[441px]:max-[768px]:gap-[10px]
    min-[441px]:max-[768px]:rounded-[8px]
    min-[441px]:max-[768px]:border-[1px]
    min-[441px]:max-[768px]:max-w-[608px]  /* ✅ This line fixes it */
  "
  role="button"
  aria-label="Start Free Trial"
>
  <span className="font-bold max-w-[150px] min-h-[35px] text-[18px] leading-[35px] tracking-[1px]">
    Start Free Trial
  </span>
</Link>


           <p
  className="
    font-['Inter']
    font-medium
    text-[16px]
    w-full
    max-w-[596px]
    min-h-[19px]
    leading-[100%]
    min-[500px]:text-base
    pt-5
    text-[#ffffff]
    text-center

    /* Tablet-specific overrides */
    min-[441px]:max-[768px]:w-[608px]
    min-[441px]:max-[768px]:h-[19px]
    min-[441px]:max-[768px]:text-[16px]
    min-[441px]:max-[768px]:font-normal
    min-[441px]:max-[768px]:font-['Inter']
     min-[441px]:max-[768px]:pt-[1px]
  "
>
  Get started with 10 free outputs – No credit card needed!
</p>

          </div>

<div
  className="
    max-[1000px]:w-full
    max-w-[529px]
    min-h-[608px]
    flex flex-col items-center justify-center
    gap-10
    bg-[#0000004d]
    pt-[28px] pr-[32px] pb-[28px] pl-[32px]
    rounded-[10px]
    max-[440px]:border-none

    /* Tablet overrides */
    min-[441px]:max-[768px]:w-[608px]
    min-[441px]:max-[768px]:max-w-[608px]
    min-[441px]:max-[768px]:h-[448px]
    min-[441px]:max-[768px]:min-h-[448px]
    min-[441px]:max-[768px]:gap-[32px]
    max-[768px]:bg-transparent
  "
>



            <h3 className="font-semibold text-[24px] text-[#009A98] leading-[100%] text-center
              max-[769px]:hidden">
              Welcome Back!
            </h3>

           <p className="hidden max-[440px]:block 
  font-medium text-[#ffffff] absolute 
  max-[440px]:top-[220px] max-[440px]:left-1/2 max-[440px]:translate-x-[-50%]
  max-[440px]:font-[400] max-[440px]:text-[14px] max-[440px]:leading-[100%] max-[440px]:tracking-[0]
  max-[440px]:text-center max-[440px]:w-[360px] max-[440px]:h-[17px]">
              Log in and bring your dream space to life
            </p>
            {error && (
              <p className="text-red-500 text-center max-w-[465px] w-full">
                {error}
              </p>
            )}

    <form
  onSubmit={handleSubmit}
  className="flex flex-col gap-5 items-center justify-center w-full px-4
             min-[441px]:max-[768px]:w-[608px]"
>

    <input
  className="
    w-full
    min-h-[44px] 
    bg-white 
    p-[15px] 
    placeholder:text-base 
    placeholder:font-normal 
    placeholder:text-[#2a2a2a] 
    rounded-[8px]

    /* Mobile */
    max-[440px]:w-[360px] 
    max-[440px]:h-[44px] 
    max-[440px]:rounded-[8px]

    /* Tablet */
    min-[441px]:max-[768px]:w-[608px] 
    min-[441px]:max-[768px]:h-[44px] 
    min-[441px]:max-[768px]:rounded-[8px]

    /* Desktop */
    min-[769px]:w-[456px]
    min-[769px]:max-w-[465px]
  "
  type="email"
  placeholder="Email"
  required
  value={formData.email}
  onChange={(e) =>
    setFormData((prev) => ({ ...prev, email: e.target.value }))
  }
/>


           {/* Password Field */}
<div
  className="
    relative 
    w-full

    /* Mobile */
    max-[440px]:w-[360px]

    /* Tablet */
    min-[441px]:max-[768px]:w-[608px]

    /* Desktop */
    min-[769px]:w-[456px] min-[769px]:max-w-[465px]
  "
>
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    required
    value={formData.password}
    onChange={(e) =>
      setFormData((prev) => ({ ...prev, password: e.target.value }))
    }
    className="
      w-full 
      min-h-[44px] 
      bg-white 
      p-[15px] 
      pr-[45px] 
      rounded-[8px] 
      border 
      border-[#e0e0e0] 
      focus:border-[#009A98] 
      focus:outline-none 
      placeholder:text-base 
      placeholder:font-normal 
      placeholder:text-[#2a2a2a] 
      text-[#2a2a2a] 
      text-base 
      font-normal
    "
  />



                {/* Eye Icon */}
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="14"
                    viewBox="0 0 25 15"
                    fill="none"
                  >
                    <path
                      d="M24.0705 7.51211C21.3277 4.35156 17.5375 0.71875 12.5 0.71875C10.4656 0.71875 8.60078 1.29395 6.63301 2.52305C4.97402 3.56445 3.27266 5.02969 0.935547 7.43945L0.875 7.5L1.28066 7.91777C4.6168 11.3326 7.49883 14.2812 12.5 14.2812C14.71 14.2812 16.8533 13.5607 19.0512 12.0773C20.9221 10.8119 22.5145 9.20742 23.792 7.91172L24.125 7.57871L24.0705 7.51211ZM12.5 12.3438C9.82988 12.3438 7.65625 10.1701 7.65625 7.5C7.65625 4.82988 9.82988 2.65625 12.5 2.65625C15.1701 2.65625 17.3438 4.82988 17.3438 7.5C17.3438 10.1701 15.1701 12.3438 12.5 12.3438Z"
                      fill="#BEBCBC"
                    />
                    <path
                      d="M12.1609 5.73203C12.1609 5.31426 12.282 4.9207 12.4939 4.59375C10.8895 4.59375 9.59375 5.90156 9.59375 7.51211C9.59375 9.12266 10.8955 10.4244 12.4939 10.4244C14.0924 10.4244 15.4002 9.12266 15.4002 7.51211C15.0732 7.72402 14.6797 7.84512 14.2619 7.84512C13.1055 7.83906 12.1609 6.89453 12.1609 5.73203Z"
                      fill="#BEBCBC"
                    />
                  </svg>
                </span>
              </div>

              {/* Rest of your form remains the same */}
              <p
  className="
    w-[456px] 
    max-w-[465px] 
    max-[440px]:w-[360px] 
    min-[441px]:max-[768px]:w-[608px]
    text-base 
    text-[#b0b0b0] 
    font-normal 
    text-end

    min-[441px]:max-[768px]:-mt-[16px] 
    min-[441px]:max-[768px]:ml-auto
    min-[441px]:max-[768px]:pr-0
  "
>
  <Link
    to="/HeroForgetPg"
    className="
      no-underline 
      text-[#009A98] 
      font-medium
      min-[441px]:max-[768px]:text-[16px]
      min-[441px]:max-[768px]:leading-[100%]
    "
  >
    Forget Password?
  </Link>
</p>
<button
  type="submit"
  className="
    w-full bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] 
    text-white cursor-pointer font-bold p-[15px] rounded-[5px]

    max-[440px]:w-[358px] max-[440px]:h-[41px] max-[440px]:rounded-[8px]
    max-[440px]:py-[3px] max-[440px]:px-[157px] max-[440px]:gap-[10px]
    max-[440px]:flex max-[440px]:items-center max-[440px]:justify-center
    max-[440px]:whitespace-nowrap

    min-[441px]:max-[768px]:w-[608px]
    min-[441px]:max-[768px]:h-[46px]
    min-[441px]:max-[768px]:rounded-[8px]
  "
>
  LOGIN
</button>


            </form>
           
<div
  className="
    w-[458px] min-h-[19px] flex justify-between items-center p-[15px]

    /* Mobile styles (<441px) */
    max-[440px]:w-[360px]
    max-[440px]:gap-[18px]

    /* Tablet styles (441px–768px) */
    min-[441px]:max-[768px]:w-[608px]
    min-[441px]:max-[768px]:gap-[18px]
  "
>

                         <div
                className="
    w-[202px] border border-solid border-[#B0B0B0]

    /* Tablet styles (441px–768px) */
    min-[441px]:max-[768px]:w-[276.5px]
    min-[441px]:max-[768px]:h-0
    min-[441px]:max-[768px]:border
  "
              ></div>

              <p
  className="
    font-medium text-base text-[#b0b0b0] leading-[100%] px-3

    /* Tablet styles (441px–768px) */
    min-[441px]:max-[768px]:w-[19px]
    min-[441px]:max-[768px]:h-[19px]
    min-[441px]:max-[768px]:text-[16px]
    min-[441px]:max-[768px]:leading-[100%]
  "
>
  or
</p>

             <div
  className="
    w-[202px] border border-solid border-[#B0B0B0]

    /* Tablet styles (441px–768px) */
    min-[441px]:max-[768px]:w-[276.5px]
    min-[441px]:max-[768px]:h-[0px]
    min-[441px]:max-[768px]:border-[1px]
  "
></div>
            </div>

                    <p
  className="
    font-semibold max-w-[458px] text-[16px] leading-[100%] text-center text-[#b0b0b0]

    /* Tablet styles (441px–768px) */
    min-[441px]:max-[768px]:max-w-[608px]
    min-[441px]:max-[768px]:text-[14px]
    min-[441px]:max-[768px]:leading-[100%]
    min-[441px]:max-[768px]:text-center
  "
>
  sign up with
</p>
               <div
  className="
    max-w-[458px] flex items-center justify-between gap-2.5 w-full

    max-[440px]:w-[360px]
    max-[440px]:h-[44px]
    max-[440px]:gap-[24px]

    min-[441px]:max-[768px]:max-w-[608px]
    min-[441px]:max-[768px]:h-[44px]
    min-[441px]:max-[768px]:gap-[24px]
    min-[441px]:max-[768px]:justify-center
  "
>
              <a href="http://localhost:8000/login/google">
                          <button
  className="
    w-[136px] h-[44px] bg-white rounded cursor-pointer 
    shadow-[2px_2px_5px_#00000014] p-2.5 flex items-center justify-center

    max-[440px]:w-[104px]
    max-[440px]:h-[44px]
    max-[440px]:rounded-[8px]
    max-[440px]:p-[10px]

    /* Tablet styles (441px–768px) */
    min-[441px]:max-[768px]:w-[186.6667px]
    min-[441px]:max-[768px]:h-[44px]
    min-[441px]:max-[768px]:rounded-[8px]
    min-[441px]:max-[768px]:p-[10px]
  "
>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_36_40)">
                      <path
                        d="M8.36055 0.789371C5.96258 1.62125 3.89457 3.20018 2.46029 5.29425C1.026 7.38832 0.301037 9.88714 0.391883 12.4237C0.482728 14.9602 1.38459 17.4008 2.96501 19.3869C4.54543 21.373 6.72109 22.7999 9.17243 23.4581C11.1598 23.9709 13.2419 23.9934 15.2399 23.5237C17.0499 23.1172 18.7233 22.2476 20.0962 21C21.5251 19.6619 22.5622 17.9596 23.0962 16.0762C23.6765 14.0281 23.7798 11.8742 23.3981 9.78H12.2381V14.4094H18.7012C18.572 15.1477 18.2952 15.8524 17.8873 16.4813C17.4795 17.1102 16.9489 17.6503 16.3274 18.0694C15.5382 18.5914 14.6485 18.9427 13.7156 19.1006C12.7798 19.2746 11.82 19.2746 10.8843 19.1006C9.93591 18.9045 9.03874 18.5131 8.24993 17.9512C6.98271 17.0542 6.0312 15.7799 5.53118 14.31C5.02271 12.8126 5.02271 11.1893 5.53118 9.69187C5.8871 8.64228 6.47549 7.68663 7.25243 6.89625C8.14154 5.97515 9.26718 5.31674 10.5058 4.99326C11.7445 4.66979 13.0484 4.69374 14.2743 5.0625C15.232 5.35648 16.1078 5.87013 16.8318 6.5625C17.5606 5.8375 18.2881 5.11062 19.0143 4.38187C19.3893 3.99 19.7981 3.61687 20.1674 3.21562C19.0622 2.18714 17.765 1.38685 16.3499 0.860622C13.7731 -0.0750226 10.9536 -0.100167 8.36055 0.789371Z"
                        fill="white"
                      />
                      <path
                        d="M8.3607 0.789367C10.9536 -0.100776 13.7731 -0.0762934 16.3501 0.858742C17.7654 1.38855 19.062 2.19269 20.1657 3.22499C19.7907 3.62624 19.3951 4.00124 19.0126 4.39124C18.2851 5.11749 17.5582 5.84124 16.832 6.56249C16.1079 5.87012 15.2321 5.35648 14.2745 5.06249C13.0489 4.69244 11.7451 4.66711 10.5061 4.98926C9.26712 5.31141 8.14079 5.96861 7.2507 6.88874C6.47377 7.67912 5.88538 8.63477 5.52945 9.68437L1.64258 6.67499C3.03384 3.91604 5.44273 1.80566 8.3607 0.789367Z"
                        fill="#E33629"
                      />
                      <path
                        d="M0.611157 9.65624C0.820072 8.62085 1.16691 7.61816 1.64241 6.67499L5.52928 9.69186C5.02081 11.1892 5.02081 12.8126 5.52928 14.31C4.23428 15.31 2.93866 16.315 1.64241 17.325C0.452064 14.9556 0.0890305 12.2559 0.611157 9.65624Z"
                        fill="#F8BD00"
                      />
                      <path
                        d="M12.2381 9.77814H23.3981C23.7799 11.8724 23.6766 14.0263 23.0963 16.0744C22.5623 17.9578 21.5252 19.66 20.0963 20.9981C18.8419 20.0194 17.5819 19.0481 16.3275 18.0694C16.9494 17.6499 17.4802 17.1092 17.8881 16.4796C18.296 15.8501 18.5726 15.1447 18.7013 14.4056H12.2381C12.2363 12.8644 12.2381 11.3213 12.2381 9.77814Z"
                        fill="#587DBD"
                      />
                      <path
                        d="M1.64062 17.325C2.93687 16.325 4.2325 15.32 5.5275 14.31C6.02851 15.7804 6.98138 17.0548 8.25 17.9512C9.04127 18.5105 9.94037 18.8987 10.89 19.0912C11.8257 19.2652 12.7855 19.2652 13.7213 19.0912C14.6542 18.9333 15.5439 18.5821 16.3331 18.06C17.5875 19.0387 18.8475 20.01 20.1019 20.9887C18.7292 22.237 17.0558 23.1073 15.2456 23.5144C13.2476 23.9841 11.1655 23.9616 9.17813 23.4487C7.60632 23.0291 6.13814 22.2892 4.86563 21.2756C3.51874 20.2063 2.41867 18.8587 1.64062 17.325Z"
                        fill="#319F43"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_36_40">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </a>
              <a href="http://localhost:8000/login/apple">
                            <button
  className="
    w-[136px] h-[44px] bg-white rounded cursor-pointer 
    shadow-[2px_2px_5px_#00000014] p-2.5 flex items-center justify-center

    max-[440px]:w-[104px]
    max-[440px]:h-[44px]
    max-[440px]:rounded-[8px]
    max-[440px]:p-[10px]

    /* Tablet styles (441px–768px) */
    min-[441px]:max-[768px]:w-[186.6667px]
    min-[441px]:max-[768px]:h-[44px]
    min-[441px]:max-[768px]:rounded-[8px]
    min-[441px]:max-[768px]:p-[10px]
  "
>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.7026 12.7535C18.6719 9.71361 21.2398 8.25549 21.354 8.18348C19.911 6.11931 17.6636 5.83729 16.8629 5.80488C14.9508 5.61527 13.1308 6.90538 12.1594 6.90538C11.1916 6.90538 9.69339 5.83249 8.1067 5.86129C6.02388 5.89129 4.10193 7.04459 3.02858 8.86874C0.862246 12.541 2.47349 17.9835 4.58456 20.9621C5.61615 22.4203 6.84669 24.0584 8.46162 23.9984C10.0164 23.9384 10.6046 23.0155 12.4848 23.0155C14.365 23.0155 14.8943 23.9996 16.5399 23.9696C18.2138 23.9384 19.2737 22.4827 20.2979 21.021C21.483 19.3288 21.9705 17.6907 22 17.6067C21.9632 17.5911 18.7358 16.3826 18.7038 12.7523L18.7026 12.7535ZM15.6103 3.83312C16.4675 2.81663 17.0459 1.40652 16.8875 0C15.6533 0.048004 14.1562 0.804067 13.2708 1.81815C12.4762 2.71823 11.7799 4.15235 11.9666 5.53126C13.3445 5.63687 14.7519 4.8472 15.6103 3.83312Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </a>
              <a href="http://localhost:8000/login/facebook">
                       <button
                  className="
    w-[136px] h-[44px] bg-white rounded cursor-pointer 
    shadow-[2px_2px_5px_#00000014] p-2.5 flex items-center justify-center

    max-[440px]:flex-row
    max-[440px]:w-[104px]
    max-[440px]:h-[44px]
    max-[440px]:rounded-[8px]
    max-[440px]:p-[10px]

    /* Tablet styles (441px–768px) */
    min-[441px]:max-[768px]:flex-row
    min-[441px]:max-[768px]:w-[186.6667px]
    min-[441px]:max-[768px]:h-[44px]
    min-[441px]:max-[768px]:rounded-[8px]
    min-[441px]:max-[768px]:p-[10px]
  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  > 
                    <g clipPath="url(#clip0_36_50)">
                      <mask
                        id="mask0_36_50"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <path d="M0 0H24V24H0V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_36_50)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 12.067C0 18.034 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
                          fill="#1877F2"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_36_50">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </a>
            </div>
            <p className="max-w-[346px] min-h-[19px] flex justify-center items-center gap-[4px] text-[16] leading-[100%] text-base text-[#b0b0b0] font-normal">
              Don't You have an account?{" "}
              <Link
                to="/sign-up"
                className="nounderline font-[900] text-[16px] text-[#00B0BA]"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


// import React, { useState } from 'react';
// import close from '../../assets/forgetPg/close.png';
// import Arrow from '../../assets/forgetPg/arrow.png';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function ResetPassword() {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleResetPassword = async () => {
//     try {
//       const response = await axios.post(
//         'http://localhost:8000/forget-password/reset-password',
//         {
//           new_password: newPassword,
//           confirm_password: confirmPassword,
//         }
//       );
//       console.log(response.data);
//       navigate('/ResetPopup'); // redirect on success
//     } catch (err) {
//       if (err.response) {
//         setError(err.response.data.detail || 'Failed to reset password');
//       } else {
//         setError('Something went wrong');
//       }
//     }
//   };
//   return (
//     <div>
//       <section
//         className="w-full min-h-[800px] flex justify-center items-center bg-no-repeat bg-center bg-cover"
//         style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
//       >
//         <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm">
//           <div className="w-[461px] min-h-[320px] flex flex-col justify-center items-center gap-[40px]">
//             <div className="w-[100%] min-h-[86px] flex flex-col justify-center items-center gap-[12px]">
//               <div className="w-[289px] min-h-[26px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]">
//                 Reset Password
//               </div>
//               <div className="w-[461px] min-h-[48px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0] ">
//                 Create a strong new password for your account.
//               </div>
//               {error && (
//                 <div className="text-red-500 text-[14px]">{error}</div>
//               )}
//             </div>

//             <div className="w-[461px] min-h-[318px] flex flex-col justify-center items-center gap-[40px]">
//               <div className="w-[461px]  flex flex-col gap-[8px]">
//                 <div className="w-[461px] min-h-[82px] flex flex-col justify-start items-start gap-[8px]">
//                   <div className="w-[100px] min-h-[26px] font-medium text-[14px] leading-[26px] text-[white]">
//                     New Password
//                   </div>
//                   <input
//                     type="password"
//                     placeholder="At least 8 characters"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     className="w-[460px] min-h-[48px] rounded-[8px] border-[1px] border-solid border-[#E2E2E2] placeholder:text-[#2A2A2A] placeholder:text-[16px] placeholder:leading-[26px] px-[20px]"
//                   />
//                 </div>
//                 <div className="w-[461px] min-h-[82px] flex flex-col justify-start items-start gap-[8px]">
//                   <div className="w-[130px] min-h-[26px] font-medium text-[14px] leading-[26px] text-[white]">
//                     Confirm Password
//                   </div>
//                   <input
//                     type="password"
//                     placeholder="At least 8 characters"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     className="w-[460px] min-h-[48px] rounded-[8px] border-[1px] border-solid border-[#E2E2E2] placeholder:text-[#2A2A2A] placeholder:text-[16px] placeholder:leading-[26px] px-[20px]"
//                   />
//                 </div>
//               </div>

//               <div
//                 className="w-[461px] min-h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] flex justify-center items-center text-[white] font-bold text-[16px] leading-[35px] text-center cursor-pointer"
//                 onClick={handleResetPassword}
//               >
//                 Reset Password
//               </div>

//               <div>
//                 <Link
//                   to="/sign-in"
//                   className="w-[122px] h-[20px] flex justify-center items-center gap-[4px]"
//                 >
//                   <img src={Arrow} alt="" />
//                   <div className="font-semibold text-[15px] leading-[100%] text-[#009A98] ">
//                     Back to Login
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState } from 'react';
import close from '../../assets/forgetPg/close.png';
import Arrow from '../../assets/forgetPg/arrow.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logoImg from "/src/assets/Logo.png";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/forget-password/reset-password',
        {
          new_password: newPassword,
          confirm_password: confirmPassword,
        }
      );
      console.log(response.data);
      navigate('/ResetPopup'); // redirect on success
    } catch (err) {
      if (err.response) {
        setError(err.response.data.detail || 'Failed to reset password');
      } else {
        setError('Something went wrong');
      }
    }
  };
  return (
    <div>
      <section
        className="w-full min-h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover bg-fixed"
        style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
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
     <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm

  max-[440px]:flex-col 
  max-[440px]:w-[400px] 
  max-[440px]:h-[552px] 
  max-[440px]:rounded-[10px] 
  max-[440px]:border 
  max-[440px]:border-white 
  max-[440px]:px-[32px] 
  max-[440px]:py-[28px] 
  max-[440px]:gap-[40px]

  min-[441px]:max-[768px]:w-[608px]
  min-[441px]:max-[768px]:h-[556px]
  min-[441px]:max-[768px]:px-[32px]
  min-[441px]:max-[768px]:py-[28px]
  min-[441px]:max-[768px]:gap-[40px]
  min-[441px]:max-[768px]:rounded-[10px]
  min-[441px]:max-[768px]:border-[1px]"
>

{/* close btn */}
<div className="w-full min-h-[80px] text-end flex justify-end
  min-[769px]:hidden">
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

         <div className="w-[461px] min-h-[320px] flex flex-col justify-center items-center gap-[40px]
  max-[440px]:flex-col 
  max-[440px]:w-[336px] 
  max-[440px]:h-[428px] 
  max-[440px]:gap-[40px]
  min-[441px]:max-[768px]:w-[544px]
  min-[441px]:max-[768px]:h-[432px]
  min-[441px]:max-[768px]:gap-[40px]">


          <div className="w-[100%] min-h-[86px] flex flex-col justify-center items-center gap-[12px]
  max-[440px]:flex-col 
  max-[440px]:w-[336px] 
  max-[440px]:h-[62px] 
  max-[440px]:gap-[12px]
  min-[441px]:max-[768px]:w-[544px]
  min-[441px]:max-[768px]:h-[62px]
  min-[441px]:max-[768px]:gap-[12px]">


              <div className="w-[289px] min-h-[26px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]
  max-[440px]:w-[202px] 
  max-[440px]:h-[26px] 
  max-[440px]:font-semibold 
  max-[440px]:text-[26px] 
  max-[440px]:leading-[26px] 
  max-[440px]:tracking-[0] 
  max-[440px]:text-center"
              >
                Reset Password
              </div>

              <div className="w-[461px] min-h-[48px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0]
  max-[440px]:w-[336px]
  max-[440px]:h-[24px]
  max-[440px]:font-[400]
  max-[440px]:text-[14px]
  max-[440px]:leading-[24px]
  max-[440px]:tracking-[0]
  max-[440px]:text-center"
              >
                Create a strong new password for your account.
              </div>

              {error && (
                <div className="text-red-500 text-[14px]">{error}</div>
              )}
            </div>

          <div className="w-[461px] min-h-[318px] flex flex-col justify-center items-center gap-[40px]
  max-[440px]:flex-col
  max-[440px]:w-[336px]
  max-[440px]:h-[184px]
  max-[440px]:gap-[20px]
  max-[768px]:mt-[-40px]
  min-[441px]:max-[768px]:w-[544px]
  min-[441px]:max-[768px]:h-[432px]
  min-[441px]:max-[768px]:gap-[40px]">


           <div className="w-[461px] flex flex-col gap-[8px]
  max-[440px]:flex-col
  max-[440px]:w-[336px]
  max-[440px]:h-[184px]
  max-[440px]:gap-[20px]
  min-[441px]:max-[768px]:w-[544px]
  min-[441px]:max-[768px]:h-[184px]
  min-[441px]:max-[768px]:gap-[20px]">


             <div className="w-[461px] min-h-[82px] flex flex-col justify-start items-start gap-[8px]
  max-[440px]:flex-col
  max-[440px]:w-[336px]
  max-[440px]:h-[82px]
  max-[440px]:gap-[8px]
  min-[441px]:max-[768px]:w-[544px]
  min-[441px]:max-[768px]:h-[82px]
  min-[441px]:max-[768px]:gap-[8px]">

              <div className="w-[100px] min-h-[26px] font-medium text-[14px] leading-[26px] text-white
  max-[440px]:font-medium
  max-[440px]:text-[14px]
  max-[440px]:leading-[26px]
  max-[440px]:tracking-[0]
  max-[440px]:w-[100px]
  max-[440px]:h-[26px]
  min-[441px]:max-[768px]:w-[100px]
  min-[441px]:max-[768px]:h-[26px]
  min-[441px]:max-[768px]:font-medium
  min-[441px]:max-[768px]:text-[14px]
  min-[441px]:max-[768px]:leading-[26px]
  min-[441px]:max-[768px]:tracking-[0]">
  New Password
</div>


                 <input
  type="password"
  placeholder="At least 8 characters"
  value={newPassword}
  onChange={(e) => setNewPassword(e.target.value)}
  className="w-[460px] min-h-[48px] rounded-[8px] border-[1px] border-solid border-[#E2E2E2] 
             placeholder:text-[#2A2A2A] placeholder:text-[16px] placeholder:leading-[26px] 
             px-[20px]

             max-[440px]:w-[336px]
             max-[440px]:h-[48px]
             max-[440px]:rounded-[8px]
             max-[440px]:border
             max-[440px]:border-[#E2E2E2]
             max-[440px]:pt-[11px]
             max-[440px]:pr-[16px]
             max-[440px]:pb-[11px]
             max-[440px]:pl-[16px]
             max-[440px]:mx-auto

             min-[441px]:max-[768px]:w-[544px]
             min-[441px]:max-[768px]:h-[48px]
             min-[441px]:max-[768px]:rounded-[8px]
             min-[441px]:max-[768px]:border
             min-[441px]:max-[768px]:border-[1px]
             min-[441px]:max-[768px]:border-solid
             min-[441px]:max-[768px]:border-[#E2E2E2]"
/>


                </div>
             <div
  className="w-[461px] min-h-[82px] flex flex-col justify-start items-start gap-[8px]

             max-[440px]:flex-col
             max-[440px]:w-[336px]
             max-[440px]:h-[82px]
             max-[440px]:gap-[8px]

             min-[441px]:max-[768px]:w-[544px]
             min-[441px]:max-[768px]:h-[82px]
             min-[441px]:max-[768px]:gap-[8px]"
>

<div className="w-[130px] min-h-[26px] font-medium text-[14px] leading-[26px] text-white

  max-[440px]:font-medium
  max-[440px]:text-[14px]
  max-[440px]:leading-[26px]
  max-[440px]:tracking-[0]
  max-[440px]:w-[123px]
  max-[440px]:h-[26px]

  min-[441px]:max-[768px]:w-[123px]
  min-[441px]:max-[768px]:h-[26px]
">
  Confirm Password
</div>

                <input
  type="password"
  placeholder="At least 8 characters"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  className="w-[460px] min-h-[48px] rounded-[8px] border-[1px] border-solid border-[#E2E2E2] 
             placeholder:text-[#2A2A2A] placeholder:text-[16px] placeholder:leading-[26px] px-[20px]

             max-[440px]:w-[336px]
             max-[440px]:h-[48px]
             max-[440px]:rounded-[8px]
             max-[440px]:border
             max-[440px]:border-[#E2E2E2]
             max-[440px]:mx-auto

             min-[441px]:max-[768px]:w-[544px]
             min-[441px]:max-[768px]:h-[48px]
             min-[441px]:max-[768px]:rounded-[8px]
             min-[441px]:max-[768px]:border-[1px]"
/>


                </div>
              </div>

           <div
  className="w-[461px] min-h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-black to-[#007B82] 
             flex justify-center items-center text-white font-bold text-[16px] leading-[35px] text-center cursor-pointer

             max-[440px]:w-[336px]
             max-[440px]:h-[42px]
             max-[440px]:rounded-[8px]
             max-[440px]:text-[14px]
             max-[440px]:font-bold
             max-[440px]:leading-[35px]
             max-[440px]:tracking-[0]
             max-[440px]:text-center

             min-[441px]:max-[768px]:w-[544px]
             min-[441px]:max-[768px]:h-[46px]
             min-[441px]:max-[768px]:rounded-[8px]"
  onClick={handleResetPassword}
>
                <span className="max-[440px]:hidden">Reset Password</span>
                <span className="hidden max-[440px]:block">Confirm</span>
              </div>



              <div>
                <Link
                  to="/sign-in"
                className="w-[122px] h-[20px] flex justify-center items-center gap-[4px]

  max-[440px]:flex-row
  max-[440px]:w-[336px]
  max-[440px]:h-[20px]
  max-[440px]:gap-[4px]

  min-[441px]:max-[768px]:w-[544px]
  min-[441px]:max-[768px]:h-[20px]
  min-[441px]:max-[768px]:gap-[4px]"


                >
                  <img src={Arrow} alt="" />
                  <div className="font-semibold text-[15px] leading-[100%] text-[#009A98]">
                    <span className="max-[440px]:hidden">Back to Login</span>
                    <span className="hidden max-[440px]:block">Back to Code Entry</span>
                  </div>

                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
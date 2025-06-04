// import React from 'react'
// import close from '../../assets/forgetPg/close.png'
// import Arrow from '../../assets/forgetPg/arrow.png'
// import { Link } from 'react-router-dom'

// export default function Otp() {
//   return (
//     <div>
//       <section
//         className="w-full min-h-[800px] flex justify-center items-center bg-no-repeat bg-center bg-cover
//                "
//         style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
//       >
//         <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm">
//           <div className="w-[461px] min-h-[320px] flex flex-col justify-center items-center gap-[40px]">
//             <div className="w-[100%] min-h-[86px] flex flex-col justify-center items-center gap-[12px]">
//               <div className="w-[289px] min-h-[26px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]">
//                 Enter OTP
//               </div>
//               <div className="w-[461px] min-h-[48px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0] ">
//                 We’ve sent a 6-digit OTP to your email. Please enter it below to
//                 continue.
//               </div>
//             </div>

//             <div className="w-[461px] min-h-[260px] flex flex-col gap-[40px]">
//               <div className="w-[461px] min-h-[200px] flex flex-col gap-[40px]">
//                 <div className="w-[461px] min-h-[50px] flex justify-between">
//                   <div className="w-[461px] min-h-[50px] flex justify-between">
//                     <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
//                     <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
//                     <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
//                     <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
//                     <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
//                     <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
//                   </div>
//                 </div>

//                 <Link to="/ResetPassword">
//                   {" "}
//                   <div className="w-[461px] min-h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] flex justify-center items-center text-[white] font-bold text-[16px] leading-[35px] text-center cursor-pointer">
//                     Verify OTP
//                   </div>
//                 </Link>

//                 <div className="w-[461px] min-h-[24px] font-[400] text-[13px] leading-[24px] text-center text-white">
//                   Didn’t receive the code?
//                   <span className="text-[#007B82]"> Resend in 00:45</span>
//                 </div>

//                 <div className="w-[461px] text-center flex justify-center">
//                   <Link
//                     to=""
//                     className="w-[122px] h-[20px] flex justify-center items-center gap-[4px]"
//                   >
//                     {" "}
//                     <img src={Arrow} alt="" />
//                     <div className="font-semibold text-[15px] leading-[100%] text-[#009A98] ">
//                       <Link to="/Sign-in">Back to Login</Link>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// import React from 'react'
// import close from '../../assets/forgetPg/close.png'
// import Arrow from '../../assets/forgetPg/arrow.png'
// import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import close from '../../assets/forgetPg/close.png'
import Arrow from '../../assets/forgetPg/arrow.png'
import axios from 'axios';

export default function Otp() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(45);
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get email from location state or localStorage
  const email = location.state?.email || localStorage.getItem('resetEmail');

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join('');
    
    if (enteredOtp.length !== 6) {
      setError('Please enter a 6-digit OTP');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/forget-password/verify-otp', 
        { 
          otp: enteredOtp,
          email: email 
        }
      );
      navigate('/ResetPassword', { state: { email } });
    } catch (err) {
      setError(err.response?.data?.detail || 'Invalid OTP');
    }
  };

  const handleResendOTP = async () => {
    if (timer > 0 || !email) return;
    
    setIsResending(true);
    setError('');
    
    try {
      const response = await axios.post(
        'http://localhost:8000/forget-password/resend-otp',
        { email },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      setTimer(45);
      setOtp(['', '', '', '', '', '']);
      alert('New OTP has been sent to your email');
    } catch (err) {
      const errorMsg = err.response?.data?.detail || 'Failed to resend OTP';
      setError(errorMsg);
      
      // If rate limited, set timer to remaining time
      if (err.response?.status === 429) {
        setTimer(60); // Reset to 1 minute
      }
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div>
      <section
        className="w-full min-h-[800px] flex justify-center items-center bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
      >
        <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm">
          <div className="w-[461px] min-h-[320px] flex flex-col justify-center items-center gap-[40px]">
            <div className="w-[100%] min-h-[86px] flex flex-col justify-center items-center gap-[12px]">
              <div className="w-[289px] min-h-[26px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]">
                Enter OTP
              </div>
              <div className="w-[461px] min-h-[48px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0]">
                We've sent a 6-digit OTP to {email}. Please enter it below to continue.
              </div>
            </div>

            <div className="w-[461px] min-h-[260px] flex flex-col gap-[40px]">
              <div className="w-[461px] min-h-[200px] flex flex-col gap-[40px]">
                <div className="w-[461px] min-h-[50px] flex justify-between">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Backspace' && !digit && index > 0) {
                          document.getElementById(`otp-${index - 1}`).focus();
                        }
                      }}
                      className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82] text-white text-center bg-transparent focus:outline-none"
                    />
                  ))}
                </div>

                {error && (
                  <div className="text-red-500 text-center text-sm">
                    {error}
                  </div>
                )}

                <div 
                  onClick={handleVerify}
                  className="w-[461px] min-h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] flex justify-center items-center text-white font-bold text-[16px] leading-[35px] text-center cursor-pointer hover:opacity-90"
                >
                  Verify OTP
                </div>

                <div className="w-[461px] min-h-[24px] font-[400] text-[13px] leading-[24px] text-center text-white">
                  Didn't receive the code?
                  <span 
                    className={`${timer > 0 ? 'text-gray-400' : 'text-[#007B82] cursor-pointer hover:underline'}`}
                    onClick={handleResendOTP}
                  >
                    {isResending ? ' Resending...' : 
                     timer > 0 ? ` Resend in 00:${timer.toString().padStart(2, '0')}` : 
                     ' Resend OTP'}
                  </span>
                </div>

                <div className="w-[461px] text-center flex justify-center">
                  <Link
                    to="/Sign-in"
                    className="w-[122px] h-[20px] flex justify-center items-center gap-[4px] hover:opacity-80"
                  >
                    <img src={Arrow} alt="Back arrow" />
                    <span className="font-semibold text-[15px] leading-[100%] text-[#009A98]">
                      Back to Login
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
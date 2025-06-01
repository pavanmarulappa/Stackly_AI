import React from 'react'
import close from '../../assets/forgetPg/close.png'
import Arrow from '../../assets/forgetPg/arrow.png'
import { Link } from 'react-router-dom'

export default function Otp() {
  return (
    <div>
      <section
        className="w-full min-h-[800px] flex justify-center items-center bg-no-repeat bg-center bg-cover
               "
        style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
      >
        <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm">
          <div className="w-[461px] min-h-[320px] flex flex-col justify-center items-center gap-[40px]">
            <div className="w-[100%] min-h-[86px] flex flex-col justify-center items-center gap-[12px]">
              <div className="w-[289px] min-h-[26px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]">
                Enter OTP
              </div>
              <div className="w-[461px] min-h-[48px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0] ">
                We’ve sent a 6-digit OTP to your email. Please enter it below to
                continue.
              </div>
            </div>

            <div className="w-[461px] min-h-[260px] flex flex-col gap-[40px]">
              <div className="w-[461px] min-h-[200px] flex flex-col gap-[40px]">
                <div className="w-[461px] min-h-[50px] flex justify-between">
                  <div className="w-[461px] min-h-[50px] flex justify-between">
                    <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
                    <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
                    <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
                    <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
                    <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
                    <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
                  </div>
                </div>

                <Link to="/ResetPassword">
                  {" "}
                  <div className="w-[461px] min-h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] flex justify-center items-center text-[white] font-bold text-[16px] leading-[35px] text-center cursor-pointer">
                    Verify OTP
                  </div>
                </Link>

                <div className="w-[461px] min-h-[24px] font-[400] text-[13px] leading-[24px] text-center text-white">
                  Didn’t receive the code?
                  <span className="text-[#007B82]"> Resend in 00:45</span>
                </div>

                <div className="w-[461px] text-center flex justify-center">
                  <Link
                    to=""
                    className="w-[122px] h-[20px] flex justify-center items-center gap-[4px]"
                  >
                    {" "}
                    <img src={Arrow} alt="" />
                    <div className="font-semibold text-[15px] leading-[100%] text-[#009A98] ">
                      <Link to="/Sign-in">Back to Login</Link>
                    </div>
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

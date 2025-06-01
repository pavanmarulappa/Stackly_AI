import React from 'react'
import close from '../../assets/forgetPg/close.png'
import Arrow from '../../assets/forgetPg/arrow.png'
import Pop from '../../assets/forgetPg/pop.png'
import { Link } from 'react-router-dom'





export default function ResetPopup() {
  return (
    <div>
      <section
        className="w-full min-h-[800px] flex justify-center items-center bg-no-repeat bg-center bg-cover
              "
        style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
      >
        <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm">
          <img src={Pop} alt="" />

          <div className="w-[461px] min-h-[104px] flex flex-col justify-center items-center gap-[28px]">
            <div className="w-[461px] min-h-[52px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]">
              Your password has been reset successfully!
            </div>
            <div className="w-[461px] min-h-[24px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0]">
              Create a strong new password for your account.
            </div>
          </div>

          <div>
            <Link
              href=""
              className="w-[122px] h-[20px] flex justify-center items-center gap-[4px]"
            >
              <img src={Arrow} alt="" />
              <div className="font-semibold text-[15px] leading-[100%] text-[#009A98] ">
                <Link to="/Sign-in">Go to Login</Link>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

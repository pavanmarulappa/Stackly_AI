import React, { useState } from 'react';
import close from '../../assets/forgetPg/close.png';
import Arrow from '../../assets/forgetPg/arrow.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        className="w-full min-h-[800px] flex justify-center items-center bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
      >
        <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm">
          <div className="w-[461px] min-h-[320px] flex flex-col justify-center items-center gap-[40px]">
            <div className="w-[100%] min-h-[86px] flex flex-col justify-center items-center gap-[12px]">
              <div className="w-[289px] min-h-[26px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]">
                Reset Password
              </div>
              <div className="w-[461px] min-h-[48px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0] ">
                Create a strong new password for your account.
              </div>
              {error && (
                <div className="text-red-500 text-[14px]">{error}</div>
              )}
            </div>

            <div className="w-[461px] min-h-[318px] flex flex-col justify-center items-center gap-[40px]">
              <div className="w-[461px]  flex flex-col gap-[8px]">
                <div className="w-[461px] min-h-[82px] flex flex-col justify-start items-start gap-[8px]">
                  <div className="w-[100px] min-h-[26px] font-medium text-[14px] leading-[26px] text-[white]">
                    New Password
                  </div>
                  <input
                    type="password"
                    placeholder="At least 8 characters"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-[460px] min-h-[48px] rounded-[8px] border-[1px] border-solid border-[#E2E2E2] placeholder:text-[#2A2A2A] placeholder:text-[16px] placeholder:leading-[26px] px-[20px]"
                  />
                </div>
                <div className="w-[461px] min-h-[82px] flex flex-col justify-start items-start gap-[8px]">
                  <div className="w-[130px] min-h-[26px] font-medium text-[14px] leading-[26px] text-[white]">
                    Confirm Password
                  </div>
                  <input
                    type="password"
                    placeholder="At least 8 characters"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-[460px] min-h-[48px] rounded-[8px] border-[1px] border-solid border-[#E2E2E2] placeholder:text-[#2A2A2A] placeholder:text-[16px] placeholder:leading-[26px] px-[20px]"
                  />
                </div>
              </div>

              <div
                className="w-[461px] min-h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] flex justify-center items-center text-[white] font-bold text-[16px] leading-[35px] text-center cursor-pointer"
                onClick={handleResetPassword}
              >
                Reset Password
              </div>

              <div>
                <Link
                  to="/sign-in"
                  className="w-[122px] h-[20px] flex justify-center items-center gap-[4px]"
                >
                  <img src={Arrow} alt="" />
                  <div className="font-semibold text-[15px] leading-[100%] text-[#009A98] ">
                    Back to Login
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

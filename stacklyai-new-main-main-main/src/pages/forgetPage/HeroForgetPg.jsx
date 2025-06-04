import React, { useState } from "react";
import close from "../../assets/forgetPg/close.png";
import Arrow from "../../assets/forgetPg/arrow.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
        className="w-full min-h-[800px] flex justify-center items-center bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
      >
        <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[0px] bg-[#00000033] backdrop-blur-sm">
          <div className="w-[100%] min-h-[80px] text-end flex justify-end">
            <img src={close} alt="" className="w-[28px] h-[28px] " />
          </div>

          <div className="w-[461px] min-h-[320px] flex flex-col justify-center items-center gap-[40px]">
            <div className="w-[100%] min-h-[86px] flex flex-col justify-center items-center gap-[12px]">
              <div className="w-[289px] min-h-[26px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]">
                Forgot your password?
              </div>
              <div className="w-[461px] min-h-[48px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0] ">
                No worries. Enter your email and we'll send you a one-time
                password (OTP) to reset it.
              </div>
            </div>

            <div className="w-[461px] min-h-[194px] flex flex-col justify-center items-center gap-[40px]">
              <input
                type="email"
                placeholder="ramprakash@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="w-[460px] min-h-[48px] rounded-[8px] border-[1px] border-solid border-[#E2E2E2] placeholder:text-[#2A2A2A] placeholder:text-[16px] placeholder:leading-[26px] px-[20px]"
              />

              {error && (
                <div className="text-red-500 text-sm w-full text-center">
                  {error}
                </div>
              )}

              <button
                onClick={handleSendOTP}
                disabled={isLoading}
                className="w-[461px] min-h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] flex justify-center items-center text-white font-bold text-[16px] leading-[35px] text-center cursor-pointer disabled:opacity-70"
              >
                {isLoading ? "Sending..." : "Send OTP"}
              </button>

              <div>
                <Link
                  to="/sign-in"
                  className="w-[122px] h-[20px] flex justify-center items-center gap-[4px]"
                >
                  <img src={Arrow} alt="" />
                  <span className="font-semibold text-[15px] leading-[100%] text-[#009A98]">
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

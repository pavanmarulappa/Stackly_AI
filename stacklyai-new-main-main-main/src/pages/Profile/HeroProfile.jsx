import React from 'react'
import Banner from "../../assets/profile/banner.jpg"
import Pimage from "../../assets/profile/pimage.png"
import Eye from "../../assets/profile/eye.png"
import { Link } from "react-router-dom";


export default function HeroProfile() {
  return (
    <div>
      <section className="w-full h-auto p-[50px] flex flex-col justify-start items-center gap-[15px]">
        <div className="w-[1280px] text-start h-[31px] text-[26px] font-medium text-[#2A2A2A] flex justify-start leading-[100%]">
          <div className="w-[100%] flex justify-start ml-[5px]">My Profile</div>
        </div>

        <img
          src={Banner}
          alt="banner"
          className="w-[1280px] h-[357px] rounded-[10px] bg-[#00000033] bg-cover bg-center bg-no-repeat fit"
        />

        {/* profiles  */}

        <div className="w-[1280px] h-[869px] flex justify-center items-start gap-[20px] mt-[-100px]">
          {/* profile1  */}

          <div className="w-[373px] h-[859px] rounded-[12px] bg-[#FFFFFFCC] backdrop-blur-[3px] shadow-[0_1px_4px_0] shadow-[#00000040]">
            <div className="w-[100%] h-[97px] rounded-[12px] bg-[#00B0BA33]">
              <div className="text-center flex flex-col justify-center items-center gap-[20px] pt-[40px]">
                <img src={Pimage} alt="profile-pic" className="" />
                <div className="w-[112px] h-[29px] font-medium text-[24px] leading-[100%] text-[#2A2A2A]">
                  John Paul
                </div>
                <div className="w-[100%] h-[2px] bg-[#E0E4E7]"></div>

                {/* basic-info  */}

                <div className="w-[100%] h-auto p-[20px] flex flex-col gap-[20px]">
                  <div className="w-[89px] h-[22px] font-medium text-[18px] leading-[100%] text-[#00B0BA]">
                    Basic info:
                  </div>

                  <div className="w-[147px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
                    First name : <span className="text-[#B0B0B0]">John</span>
                  </div>
                  <div className="w-[147px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
                    Last name : <span className="text-[#B0B0B0]">Paul</span>
                  </div>
                  <div className="w-[247px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
                    Email :{" "}
                    <span className="text-[#B0B0B0]">johnpaul@gamil.com</span>
                  </div>
                  <div className="w-[270px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
                    Contact number :{" "}
                    <span className="text-[#B0B0B0]">+91 1234567890</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* profile 2  */}

          <div className="w-[807px] h-[869px] rounded-[10px] bg-[#FFFFFFCC] backdrop-blur-[6px] shadow-[0_1px_4px_0] shadow-[#0000003D]">
            {/* header  */}
            <div className="w-[100%] h-[98px] flex justify-between items-center px-[30px]">
              <Link to="/HeroProfile">
                <button className="w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus-within:text-[#007B82] focus-within:border-b-[#007B82] cursor-pointer active:text-[#007B82] active:border-b-[#007B82]">
                  Edit Profile
                </button>
              </Link>
              <Link to="/Myplan">
                <button className="w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus:text-[#007B82] focus:border-b-[#007B82] cursor-pointer active:text-[#007B82]">
                  My Plan
                </button>
              </Link>
              <Link to="/Mybilling">
                <button className="w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus:text-[#007B82] focus:border-b-[#007B82] cursor-pointer active:text-[#007B82]">
                  My Billing
                </button>
              </Link>
              <Link to="/HelpCenter">
                <button className="w-[150px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus:text-[#007B82] focus:border-b-[#007B82] cursor-pointer active:text-[#007B82]">
                  Help Center
                </button>
              </Link>
            </div>

            {/* profile  */}

            <div className="w-[807px] h-[771px] py-[30px] px-[40px] flex flex-col gap-[30px] justify-start items-start">
              {/* logo  */}

              <div className="w-[100%] h-[109px] flex flex-col justify-center items-center gap-[12px] ">
                <img
                  src={Pimage}
                  alt="logo"
                  className="border-[2px] border-solid border-[#007B82] rounded-[50%]"
                />
                <Link to="">
                  <div className="w-[111px] h-[17px] font-[400] leading-[100%] text-center text-[14px] text-[#007B82] ">
                    Change image
                  </div>
                </Link>
              </div>

              {/* form  */}

              <div className="w-[687px] h-[488px] flex flex-col justify-start items-start gap-[32px]">
                <div className="w-[687px] h-[70px] flex justify-start items-start gap-[27px]">
                  <div className="w-[330px] h-[70px]">
                    <label
                      htmlFor=""
                      className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
                    />
                  </div>
                  <div className="w-[330px] h-[70px]">
                    <label
                      htmlFor=""
                      className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Paul"
                      className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
                    />
                  </div>
                </div>

                {/* email  */}

                <div className="w-[687px] h-[69px] flex justify-start items-start gap-[27px]">
                  <div className="w-[330px] h-[70px]">
                    <label
                      htmlFor=""
                      className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Johnpaul@gmail.com"
                      className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
                    />
                  </div>
                  <div className="w-[330px] h-[70px]">
                    <label
                      htmlFor=""
                      className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
                    >
                      Contact Number
                    </label>
                    <input
                      type="number"
                      placeholder="+91 1234567890"
                      className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
                    />
                  </div>
                </div>

                {/* password  */}

                <div className="w-[687px] h-[141px] flex flex-col justify-start items-start gap-[13px]">
                  <div className="w-[687px] h-[22px] font-medium text-[18px] leading-[100%] text-[#007B82]">
                    Password
                  </div>

                  <div className="w-[687px] h-[90px] flex flex-col gap-[5px]">
                    <div className="w-[687px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]">
                      Current Password
                    </div>
                    <div className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[687px] h-[44px] border-[1px] border-solid border-[#A0A0A0] rounded-[10px] px-[20px] flex justify-between items-center focus:border-[1px] active:border-[1px] active:border-solid  active:border-[#00B0BA] focus-within:border-[#00B0BA]">
                      <input
                        type="password"
                        placeholder="John@stackly10"
                        className="w-[100%] focus:placeholder:text-[black] active:placeholder:text-[black] active:border-[#00B0BA] focus:border-[#00B0BA]"
                      />
                      <img
                        src={Eye}
                        alt="eye"
                        className="w-[23.25px] h-[13.56px]"
                      />
                    </div>
                    <Link to="">
                      <div className="w-[687px] h-[17px] font-[400] text-[14px] leading-[100%] text-right text-[400] text-[#007B82] underline">
                        Reset Password
                      </div>
                    </Link>
                  </div>
                </div>

                {/* reset password  */}

                <div className="w-[687px] h-[112px] flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[687px] h-[22px] font-medium text-[18px] leading-[100%] text-[#007B82]">
                    Reset Password
                  </div>
                  <div className="w-[687px] h-[70px] flex justify-start items-start gap-[27px]">
                    <div className="w-[330px] h-[70px]">
                      <label
                        htmlFor=""
                        className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
                      >
                        New Password
                      </label>
                      <input
                        type="text"
                        placeholder="Johnpaulstackly10"
                        className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
                      />
                    </div>
                    <div className="w-[330px] h-[70px]">
                      <label
                        htmlFor=""
                        className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="text"
                        placeholder="Johnpaulstackly10"
                        className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
                      />
                    </div>
                  </div>
                </div>

                {/* buttons  */}
                <div className="w-[100%] h-[41px] flex justify-end items-center gap-[24px]">
                  <div className="w-[223px] h-[41px] flex gap-[24px] justify-between ">
                    <Link to="">
                      <div className="w-[99px] h-[41px] rounded-[10px] border-[1px] border-solid border-[#007B82] px-[20px] py-[6px] gap-[8px] flex justify-center items-center text-[#007B82]">
                        Discard
                      </div>
                    </Link>
                    <Link to="">
                      <div className="w-[100px] h-[41px] rounded-[10px] px-[10px] py-[6px] bg-[#007B82] text-[white] flex justify-center items-center">
                        Save
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

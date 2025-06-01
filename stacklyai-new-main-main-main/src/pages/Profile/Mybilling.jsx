import React from 'react'
import Banner from "../../assets/profile/banner.jpg";
import Pimage from "../../assets/profile/pimage.png";
import Eye from "../../assets/profile/eye.png";
import { Link } from "react-router-dom";

export default function Mybilling() {
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

            <div className="w-[807px] h-[714px] flex flex-col justify-between pt-[16px] p-[0px]">
              <div className="w-[767px] h-[451px] flex flex-col justify-start items-center gap-[32px] ">
                {/* text  */}
                <div className="w-[100%] h-[24px] flex justify-center items-center">
                  <div className="font-semibold text-[20px] leading-[100%] text-center text-black tracking-[2px]">
                    Your<span className="text-[#00B0BA]">Active</span>Plan!
                  </div>
                </div>
                {/* line  */}
                <div className="w-[100%] border-[1px] border-solid border-[#007B821A]"></div>
                {/* box */}

                <div className="w-[687px] h-[363px] flex flex-col gap-[32px]">
                  <div className="w-[100%] h-[57px] flex justify-between items-center">
                    <div className="w-[171px] h-[57px] rounded-[12px] p-[20px] bg-white shadow-[0_6.54px_12.2px_0] shadow-[#ABB2BB40] flex justify-center items-center font-medium text-[14px] text-center text-black">
                      Current Plan :{" "}
                      <span className="text-[#00B0BA]">Basic</span>
                    </div>
                    <div className="w-[210px] h-[57px] rounded-[12px] p-[20px] bg-white shadow-[0_6.54px_12.2px_0] shadow-[#ABB2BB40] flex justify-center items-center font-medium text-[14px] text-center text-black">
                      Duration period :{" "}
                      <span className="text-[#00B0BA]">Monthly</span>
                    </div>
                    <div className="w-[172px] h-[57px] rounded-[12px] p-[20px] bg-white shadow-[0_6.54px_12.2px_0] shadow-[#ABB2BB40] flex justify-center items-center font-medium text-[14px] text-center text-black">
                      Total Members: <span className="text-[#00B0BA]">1</span>
                    </div>
                  </div>

                  {/* Payment  */}

                  <div className="w-[687px] h-[70px] flex flex-col justify-start items-start gap-[10px]">
                    <div className="w-[100%] h-[19px] font-[400] text-[16px] text-[#6E6E6E]">
                      Total Payment
                    </div>
                    <div className="w-[687px] h-[44px] rounded-[10px] border-[1px] border-solid border-[#00B0BA] bg-[white] flex justify-center items-center gap-[10px] p-[20px]">
                      <input
                        type="number"
                        placeholder="$0 / month"
                        className="placeholder:text-[black] w-[100%]"
                      />
                      <div className="w-[100%] h-[19px] font-[400] text-[14px] text-[#6E6E6E]">
                        Stay updated on your remaining balance.
                      </div>
                    </div>
                  </div>

                  {/* premium  */}

                  <div className="w-[687px] h-[189px] rounded-[12px] px-[107px] py-[28px] flex flex-col justify-center items-center gap-[26px] bg-[#007B8214] shadow-[0_1.54px_12.2px_0] shadow-[#ABB2BB40]">
                    <div className="w-[473px] h-[24px] font-semibold text-[20px] text-center text-black">
                      Unlock More with{" "}
                      <span className="text-[#F0AC00]">Premium!</span>
                    </div>
                    <div className="w-[473px] h-[17px] font-[400] leading-[100%] text-[#2A2A2A]">
                      Upgrade to Silver or Gold for exclusive features and
                      enhanced benefits!
                    </div>
                    <div className="w-[473px] h-[40px] flex justify-between items-center gap-[13px]">
                      <div className="w-[230px] h-[40px] rounded-[5px] border-[1px] border-solid border-[#A0A0A099] font-bold text-[16px] text-center flex justify-center items-center text-[#2A2A2A] hover:bg-[#00B0BA] hover:text-white cursor-pointer">
                        Upgrade to Silver
                      </div>
                      <div className="w-[230px] h-[40px] rounded-[5px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] flex justify-center items-center font-bold text-center text-[16px] text-[#FFD56B]">
                        Upgrade to Gold
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[807px] h-[222px] relative top-[57px] rounded-bl-[10px] rounded-br-[10px]">
                <div className="w-[100%] h-[22px] text-center font-semibold text-[18px] text-[#2A2A2A]">
                  Billing History
                </div>
                <div className="w-[100%] h-[182px] px-[60px] py-[12px]">
                  <table className="w-[100%] h-[182px] ">
                    <thead className="w-[100%] h-[44px] font-bold text-[16px] text-[#2A2A2A] bg-[#007B8208] px-[60px] py-[12px]">
                      <td className="pl-[30px]">Date</td>
                      <td>Amount</td>
                      <td>Payment Method</td>
                      <td>Status</td>
                      <td>Invoice</td>
                    </thead>
                    <tr>
                      <td className="pl-[30px]">Invoice</td>
                      <td>$XX.XX</td>
                      <td>Credit Card</td>
                      <td>Completed</td>
                      <td className="text-[#007B82]">View</td>
                    </tr>
                    <tr>
                      <td className="pl-[30px]">Invoice</td>
                      <td>$XX.XX</td>
                      <td>Credit Card</td>
                      <td>Completed</td>
                      <td className="text-[#007B82]">View</td>
                    </tr>
                    <tr>
                      <td className="pl-[30px]">Invoice</td>
                      <td>$XX.XX</td>
                      <td>Credit Card</td>
                      <td>Completed</td>
                      <td className="text-[#007B82]">View</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

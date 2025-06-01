import React from "react";
import TotalCreditsImg from "../../assets/pricing-pg/img1.png"; // Replace with your first image
import TodaysUsageImg from "../../assets/pricing-pg/img2.png"; // Replace with your first image


export default function CreditStats() {
  return (
    <section className="w-full min-h-[882px] bg-[white] flex flex-col justify-center items-center gap-[50px]">
      <div className="w-[100%] max-w-[719px] min-h-[31px] text-[26px] font-semibold leading-[100%] text-center text-[#2a2a2a] mt-[200px]">"Powering Millions of Actions — And Growing Every Day!"</div>

      <div className=" w-full flex justify-evenly">
        <div>
            <div className="max-w-[250px] min-h-[34px] font-semibold text-[28px] leading-[100%] text-center text-[black] relative top-[70px] left-[10px] " >Total Credits Used</div>
            <img src={TotalCreditsImg} alt="" />
            <div className="w-[140px] max-w-[140px] min-h-[140px] rounded-[50%] font-bold text-[52px] leadimg-[60px]  text-black shadow-[0_3px_20px_0px] shadow-black flex justify-center items-center relative top-[-350px] left-[300px] bg-[white]">10+</div>
            <div className="w-[100%] max-w-[441px] min-h-[22px] font-medium text-[18px] leading-[100%] text-[#2a2a2a] relative top-[-120px] left-[20px]">“Over 10+ Million Credits Used by Our Community!”</div>
        </div>

        <div>
            <div className="max-w-[250px] min-h-[34px] font-semibold text-[28px] leading-[100%] text-center text-[black] relative top-[70px] left-[10px]" >Today's Usage</div>
            <img src={TodaysUsageImg} alt="" />
            <div className="w-[140px] max-w-[140px] min-h-[140px] rounded-[50%] font-bold text-[52px] leadimg-[60px]  text-black shadow-[0_3px_20px_0] shadow-black flex justify-center items-center relative top-[-350px] left-[300px] bg-[white]">85+</div>
            <div className="w-[100%] max-w-[441px] min-h-[22px] font-medium text-[18px] leading-[100%] text-[#2a2a2a] relative top-[-120px] left-[20px]">“85,000 Credits Used Today — and Counting!”</div>

        </div>


      </div>
    </section>
  );
}


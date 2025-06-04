import React from "react";
import { CheckCircle2 } from "lucide-react";
import Banner1 from "../../assets/pricing-pg/banner1.png";
import Banner2 from "../../assets/pricing-pg/banner2.png";
import AfterCreditStats from "./AfterCreditStats";
import AfterGraph from "./AfterGraph";
import AfterPricingTable from "./AfterPricingTable";
import AfterPricingFaq from "./AfterPricingFaq";
import AfterBilling from "./AfterBilling";
import AfterPayment from "./AfterPayment";
import AfterUiPlans from "./AfterUiPlans";
import AfterConformationPage from "./AfterConformationPage";
import AfterPay from "./AfterPay";
import { Link } from "react-router-dom";

export default function AfterHeroPricing() {
  const features = [
    "Unlimited Designs",
    "High-Resolution 4K Images",
    "Watermark-Free Downloads",
    "Highly Advanced AI Designs",
    "24/7 Support Assistance",
    "Cancel Anytime",
  ];

  return (
    <div>
      {/* section-1  */}

      <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 rotate-[45deg] scale-[2] origin-center">
          <img
            src={Banner1}
            alt="Diagonal Grid 1"
            className="absolute top-[-190px] left-[20%] w-[1000px] max-w-none"
          />
          <img
            src={Banner2}
            alt="Diagonal Grid 2"
            className="absolute top-[230px] left-[-10%] w-[1300px] max-w-none"
          />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-[50px]  font-bold leading-[100%] text-center">
            See How <span className="text-teal-400">Stackly.AI</span> Powers
            Innovation
          </h2>
          <p className="mt-8 text-[22px]  max-w-[937px] mx-auto text-white font-medium text-center">
            Trusted by thousands of creators, developers, and teams. Explore
            live usage stats and see how our community is growing every day.
          </p>
        </div>
      </section>

      {/* section-2  */}

      <AfterCreditStats />

      {/* section-3  */}

      <AfterGraph />

      {/* section-4  */}

      <section className="bg-[#001E20] text-white text-center py-16 px-4 mb-[120px]">
        {/* Heading */}
        <h2 className="text-[44px] font-semibold leading-[140%] text-center mb-6">
          Ready to Experience the Power?
        </h2>

        {/* CTA Button */}
        <Link to="/FormAfter">
          {" "}
          <button className="bg-gradient-to-r from-[#00B0BA] via-[black] to-[#007B82] hover:from-cyan-600  text-white font-bold py-3 px-8 rounded-md text-[20px] transition-all duration-300">
            Get Started for Free
          </button>
        </Link>

        {/* Subtext */}
        <p className="mt-6 text-[16px] leading-[28px] font-[400] text-[#f5f5f5] ">
          No credit card needed. Sign up and explore your free credits today.
        </p>
      </section>

      {/* section-5  */}
      {/* <AfterPricingTable /> */}
      <AfterUiPlans />

      {/* section-6  */}

      <div className="bg-[#001E20] text-white py-12 px-4 md:px-16 text-center mt-[120px]">
        <h2 className="text-[48px] font-bold leading-[64px] text-center text-[white]">
          Why Upgrade to Premium?
        </h2>

        <div className="inline-block mb-8">
          <span className="bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-[22px] leading-[44px] text-center text-white text-sm font-semibold px-[30px] py-[10px] rounded-[50px] relative top-[55px]">
            Features of Paid Plans
          </span>
        </div>

        <div className="border-[1px] border-solid border-teal-700 rounded-[30px] px-[60px] py-[80px] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="text-teal-400 w-5 h-5 mt-1" />
                <span className="text-[20px] leading-[44px] text-center font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section-7  */}

      <AfterPricingFaq />

      {/* section 8  */}
    </div>
  );
}

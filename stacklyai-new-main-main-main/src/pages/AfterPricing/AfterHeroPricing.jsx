import React, { useEffect, useState } from "react";
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
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

export default function AfterHeroPricing() {
  const location = useLocation();
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscriptionData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');

        if (!token) throw new Error('No authentication token found');
        if (!userId) throw new Error('No user ID found');

        const response = await axios.get('http://localhost:8000/subscription', {
          params: { userid: userId },
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setSubscriptionData(response.data);
      } catch (err) {
        console.error('Error fetching subscription data:', err);
        setError(err.response?.data?.detail || 'Failed to load ');
        toast.error(err.response?.data?.detail || 'Failed to load ');
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptionData();
  }, []);

  useEffect(() => {
  if (!loading && subscriptionData) {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Small delay for layout to settle
      }
    }
  }
}, [loading, subscriptionData, location]);

  const features = [
    "Unlimited Designs",
    "High-Resolution 4K Images",
    "Watermark-Free Downloads",
    "Highly Advanced AI Designs",
    "24/7 Support Assistance",
    "Cancel Anytime",
  ];

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading  data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!subscriptionData) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        No subscription data available
      </div>
    );
  }

  // Format dates for display
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  // Convert number to words (simplified version)
  const numberToWords = (num) => {
    const units = [
      '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
      'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
      'Seventeen', 'Eighteen', 'Nineteen'
    ];

    const tens = [
      '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty',
      'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];

    if (num === 0) return 'Zero';
    if (num < 20) return units[num];

    const digit = num % 10;
    return tens[Math.floor(num / 10)] + (digit ? ' ' + units[digit] : '');
  };

  return (
    <div>
      <section className="w-full min-h-screen bg-white py-10 px-4 flex flex-col items-center">
        {/* Heading */}
        <h1
          className="font-bold mb-[60px] text-center"
          style={{ fontSize: '60px' }}
        >
          Your <span className="text-[#00B1A7]">Active</span> Plan!
        </h1>

        {/* Top Info Boxes - 4 in 1 row */}
        <div className="flex justify-center gap-4 mb-12 w-full max-w-[1100px]">
          {[
            {
              label: "Current Plan : ",
              value: subscriptionData.current_plan.charAt(0).toUpperCase() + subscriptionData.current_plan.slice(1) || 'N/A'
            },
            {
              label: "Pricing : ",
              value: `$${subscriptionData.discount_price || subscriptionData.original_price || 0}/${(subscriptionData.duration || "month").toLowerCase()} `
            },
            {
              label: "Start Date : ",
              value: formatDate(subscriptionData.start_date)
            },
            {
              label: "Renews on : ",
              value: formatDate(subscriptionData.renews_on)
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                width: '256px',
                height: '112px',
                border: '1px solid #00B1A7',
                borderRadius: '20.92px',
              }}
              className="px-6 py-4 text-center bg-white shadow-sm flex items-center justify-center"
            >
              <span className="font-bold text-black">{item.label}</span>
              <span className="text-[#00B1A7] font-bold ml-1">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Spacing */}
        <div className="h-8 w-full"></div>

        {/* Credit Boxes - 3 in 1 row */}
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1440px]">
          {/* Monthly Credits */}
          <div
            style={{
              width: '413px',
              height: '400px',
              border: '1px solid #00B1A7',
              borderRadius: '40px',
              boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1)',
            }}
            className="p-8 text-center bg-white flex-col justify-center"
          >
            <h3 className="text-[28px] font-bold text-black mb-auto">Monthly Design Credits</h3>
            <p className="text-[58px] font-bold text-black mt-[70px]">{subscriptionData.total_credits}</p>
            <p className="text-[18px] font-bold text-black ">{numberToWords(subscriptionData.total_credits)}</p>
            <p className="text-[13px] font-bold text-black mt-[90px]">Total credits allocated this month.</p>
          </div>

          {/* Credits Left */}
          <div
            style={{
              width: '413px',
              height: '400px',
              border: '1px solid #00B1A7',
              borderRadius: '40px',
              boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1)',
            }}
            className="p-8 text-center bg-white  flex-col justify-center"
          >
            <h3 className="text-[28px] font-bold text-[#00B1A7] mb-auto">Design Credits Left</h3>
            <p className="text-[58px] font-bold text-black mt-[70px]">{subscriptionData.balance_credits}</p>
            <p className="text-[18px] font-bold text-black">{numberToWords(subscriptionData.balance_credits)}</p>
            <p className="text-[13px] font-bold text-black mt-[90px]">Stay updated on your remaining balance.</p>
          </div>

          {/* Used Credits */}
          <div
            style={{
              width: '413px',
              height: '400px',
              border: '1px solid #00B1A7',
              borderRadius: '40px',
              boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1)',
            }}
            className="p-8 text-center bg-white  flex-col justify-center"
          >
            <h3 className="text-[28px] font-bold text-black mb-auto">Used Design Credits</h3>
            <p className="text-[58px] font-bold text-black mt-[70px]">{subscriptionData.used_credits}</p>
            <p className="text-[18px] font-bold text-black">{numberToWords(subscriptionData.used_credits)}</p>
            <p className="text-[13px] font-bold text-black mt-[90px]">Credits you've used so far.</p>
          </div>
        </div>
      </section>

      {/* section-1  */}

      {/* <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center bg-black overflow-hidden">
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
      </section> */}


      {/* section-2  */}

      {/* <AfterCreditStats /> */}

      {/* section-3  */}
      <AfterGraph />


      {/* section-4  */}

      <section className="bg-[#00B0BA14] text-white text-center py-16 px-4 ">
        {/* Heading */}
        <h2 className="text-[44px] font-semibold leading-[140%] text-black text-center mb-6">
          There’s a <span className="text-[#007B82]">Plan</span> for Creator
        </h2>
        {/* Subtext */}
        <p className="mt-6 mb-6 text-[18px] leading-[28px] text-black font-[400] text-[#f5f5f5] ">
          From casual users to design pros, we’ve got you covered.
        </p>
        {/* CTA Button */}
        <Link to="/">
          <button
            className="bg-gradient-to-r from-[#00B0BA] via-black to-[#007B82] 
               text-white font-bold py-3 w-[406px] rounded-md text-[20px] 
               transition-all duration-300 hover:brightness-110 hover:shadow-lg"
          >
            GET STARTED!
          </button>
        </Link>


      </section>
      {/* <AfterPricingTable /> */}
      {/* section-5  */}
      <div id="afteruiplans"><AfterUiPlans /></div>


      {/* section-6  */}

      <div className="w-full max-w-[1440px] mx-auto py-12 px-4 md:px-16 text-center">
        {/* Heading */}
        <h2 className="text-[48px] font-bold leading-[64px] text-black mt-[60px]">
          Why Go Premium?
        </h2>

        {/* Badge */}
        <div className="inline-block mb-8">
          <span className="bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-[22px] leading-[44px] text-center text-white text-sm font-semibold px-[30px] py-[10px] rounded-[50px] relative top-[55px]">
            Features of Paid Plans
          </span>
        </div>

        {/* Features Container */}
        <div className="border-[1px] border-solid border-teal-700 rounded-[30px] px-[20px] sm:px-[40px] md:px-[60px] py-[80px] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="text-teal-400 w-5 h-5 " />
                <span className="text-[20px] leading-[44px] text-center font-medium ">
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

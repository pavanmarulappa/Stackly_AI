//MyPlan.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Banner from "../../assets/profile/banner.jpg";
import Pimage from "../../assets/profile/pimage.png";
import { toast } from 'react-toastify';

export default function Myplan() {
  const [profileData, setProfileData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    profile_pic: null,
    previewImage: Pimage
  });

  const [subscriptionData, setSubscriptionData] = useState({
    current_plan: 'Basic',
    duration: 'Monthly',
    original_price: 0,
    discount_price: null,
    total_credits: 0,
    used_credits: 0,
    balance_credits: 0,
    renews_on: '',
    plan_expiring_date: '',
    total_members: 0,
    start_date: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        // If no direct userId, fallback to userInfo
        if (!userId) {
          const userInfoRaw = localStorage.getItem("userInfo");
          if (userInfoRaw) {
            try {
              const userInfo = JSON.parse(userInfoRaw);
              userId = userInfo.userId || userInfo.id;
            } catch (err) {
              console.warn("Failed to parse userInfo from localStorage", err);
            }
          }
        }

        if (!token) throw new Error("No authentication token found");
        if (!userId) throw new Error("No user ID found in storage");

        // Fetch profile data
        const profileResponse = await axios.get("http://localhost:8000/profile", {
          params: { userid: userId },
          headers: { Authorization: `Bearer ${token}` },
        });

        const profilePicUrl = profileResponse.data.profile_pic
          ? (profileResponse.data.profile_pic.startsWith("/media/profile_pics")
              ? `http://localhost:8000${profileResponse.data.profile_pic}`
              : profileResponse.data.profile_pic)
          : Pimage;

        setProfileData((prev) => ({
          ...prev,
          first_name: profileResponse.data.first_name || "",
          last_name: profileResponse.data.last_name || "",
          email: profileResponse.data.email || "",
          phone_number: profileResponse.data.phone_number || "",
          profile_pic: profileResponse.data.profile_pic,
          previewImage: profilePicUrl,
        }));

        // Fetch subscription data
        const subscriptionResponse = await axios.get("http://localhost:8000/subscription", {
          params: { userid: userId },
          headers: { Authorization: `Bearer ${token}` },
        });

        const subData = subscriptionResponse.data;
        
        // Format dates for display
        const formatDate = (dateString) => {
          if (!dateString) return 'N/A';
          try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            });
          } catch (e) {
            return dateString;
          }
        };

        setSubscriptionData({
          current_plan: subData.current_plan || "Basic",
          duration: subData.duration || "Monthly",
          original_price: subData.original_price || 0,
          discount_price: subData.discount_price || null,
          total_credits: subData.total_credits || 0,
          used_credits: subData.used_credits || 0,
          balance_credits: subData.balance_credits || 0,
          renews_on: formatDate(subData.renews_on),
          plan_expiring_date: formatDate(subData.plan_expiring_date),
          total_members: subData.total_members || 1,
          start_date: formatDate(subData.start_date)
        });

      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.response?.data?.detail || "Failed to load data");
        toast.error(err.response?.data?.detail || "Failed to load subscription data");

        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading data...
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
  
  return (
    <div>
      <section className="absolute top-[321px] left-[251px] w-[1094px] h-[488px] rounded-[8px] border-[1px] border-solid border-[#FFFFFF1F] bg-[#FFFFFF0A] p-[32px] flex flex-col opacity-100">
        {/* Header */}
        <div className="flex justify-center items-center w-[173px] h-[38px] rounded-[4px] border-b border-[#0000004D] bg-[#0000004D] px-[12px] py-[4px] opacity-100">
          <h2 className="text-[20px] poppins-font text-white">My Plan</h2>
        </div>
        
        {/* Subscription Card */}
        <div className="w-full flex flex-col gap-[20px] mx-auto max-w-[800px] mt-[20px]">
          {/* Header */}
          <div className="w-[657px] h-[30px] text-[20px] font-normal poppins-font text-white text-center leading-[30px] opacity-100 mx-auto">
            Your <span className="text-[#9747FF]">Active</span> Plan!
          </div>

          {/* Plan Details */}
          <div className="flex justify-center gap-[67px]">
            <div className="w-[159px] h-[61px] rounded-[12px] border-[1px] border-solid border-[#9747FF33] bg-gradient-to-r from-[rgba(151,71,255,0.12)] to-[rgba(91,43,153,0.12)] flex items-center justify-center px-[12px] gap-[6px] opacity-100">
  <span className="text-white text-[12px] font-normal poppins-font">Current Plan:</span>
  <span className="text-[#9747FF] text-[14px] font-medium poppins-font">{subscriptionData.current_plan}</span>
</div>


            <div className="w-[159px] h-[61px] rounded-[12px] border-[1px] border-solid border-[#9747FF33] bg-gradient-to-r from-[rgba(151,71,255,0.12)] to-[rgba(91,43,153,0.12)] flex items-center justify-center px-[20px] gap-[2px] opacity-100 text-center">
              <span className="text-white text-[12px] font-normal poppins-font">Duration:</span>
              <span className="text-[#9747FF] text-[14px] font-medium poppins-font">{subscriptionData.duration}</span>
            </div>

            <div className="w-[159px] h-[61px] rounded-[12px] border-[1px] border-solid border-[#9747FF33] bg-gradient-to-r from-[rgba(151,71,255,0.12)] to-[rgba(91,43,153,0.12)] flex items-center justify-center px-[20px] gap-[2px] opacity-100 text-center">
              <span className="text-white text-[12px] font-normal poppins-font">Pricing:</span>
              <span className="text-[#9747FF] text-[14px] font-medium poppins-font">
                {subscriptionData.discount_price 
                  ? `$${subscriptionData.discount_price}/${subscriptionData.duration.toLowerCase()}`
                  : `$${subscriptionData.original_price}/${subscriptionData.duration.toLowerCase()}`
                }
              </span>
            </div>
          </div>

          {/* Spacer to push Credits to bottom */}
          <div className="flex-1"></div>

          {/* Credits & Renewal (Pinned at bottom) */}
          <div className="flex justify-center">
            <div className="flex flex-col gap-3">
              {/* First Row */}
              <div className="flex justify-between gap-3">
                <div className="flex-1 flex flex-col gap-2 items-start">
                  <span className="text-[16px] text-white">Monthly Design Credits</span>
                  <div className="w-[321px] h-[45px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF66] bg-[#FFFFFF1F] flex items-center justify-start font-medium text-white px-3 gap-[10px] opacity-100">
                    {subscriptionData.total_credits}
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2 items-start">
                  <span className="text-[16px] text-white">Used Design Credits</span>
                  <div className="w-[321px] h-[45px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF66] bg-[#FFFFFF1F] flex items-center justify-start font-medium text-white px-3 gap-[10px]">
                    {subscriptionData.used_credits}
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex justify-between gap-3">
                <div className="flex-1 flex flex-col gap-2 items-start">
                  <span className="text-[16px] text-white">Balance Design Credits</span>
                  <div className="w-[321px] h-[45px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF66] bg-[#FFFFFF1F] flex items-center justify-between px-3">
                    <span className="font-medium text-white">{subscriptionData.balance_credits}</span>
                  </div>
                  <span className="text-[14px] text-[#6E6E6E]">*Stay updated for your remaining balance</span>
                </div>

                <div className="flex-1 flex flex-col gap-2 items-start">
                  <span className="text-[16px] text-white">Renews on</span>
                  <div className="w-[321px] h-[45px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF66] bg-[#FFFFFF1F] flex items-center justify-between px-3">
                    <span className="font-medium text-white">{subscriptionData.renews_on || subscriptionData.plan_expiring_date || 'N/A'}</span>
                  </div>
                  <span className="text-[14px] text-[#6E6E6E]">*Stay specified as your received time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
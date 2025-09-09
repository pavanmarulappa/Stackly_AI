import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Banner from "../../assets/profile/banner.jpg";
import Pimage from "../../assets/profile/pimage.png";
import { toast } from "react-toastify";

export default function MyBilling() {
  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    profile_pic: null,
    previewImage: Pimage,
  });

  const [subscriptionData, setSubscriptionData] = useState({
    current_plan: "Basic",
    duration: "Monthly",
    total_members: 1,
    original_price: 0,
    discount_price: null,
    total_credits: 0,
    used_credits: 0,
    balance_credits: 0,
    renews_on: null,
    plan_expiring_date: null,
    start_date: null,
    user: {
      name: "",
      email: "",
      userid: null,
    },
  });

  const [billingHistory, setBillingHistory] = useState([]);
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
        const profileResponse = await axios.get(
          "http://localhost:8000/profile",
          {
            params: { userid: userId },
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const profilePicUrl = profileResponse.data.profile_pic
          ? profileResponse.data.profile_pic.startsWith("/media/profile_pics")
            ? `http://localhost:8000${profileResponse.data.profile_pic}`
            : profileResponse.data.profile_pic
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
        const subscriptionResponse = await axios.get(
          "http://localhost:8000/subscription",
          {
            params: { userid: userId },
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const subData = subscriptionResponse.data;
        setSubscriptionData({
          current_plan: subData.current_plan || "Basic",
          duration: subData.duration || "Monthly",
          total_members: subData.total_members || 1,
          original_price: subData.original_price || 0,
          discount_price: subData.discount_price || null,
          total_credits: subData.total_credits || 0,
          used_credits: subData.used_credits || 0,
          balance_credits:
            subData.balance_credits ||
            (subData.total_credits || 0) - (subData.used_credits || 0),
          renews_on: subData.renews_on || null,
          plan_expiring_date: subData.plan_expiring_date || null,
          start_date: subData.start_date || null,
          user: {
            name: subData.user?.name || "",
            email: subData.user?.email || "",
            userid: subData.user?.userid || null,
          },
        });

        // Fetch billing history
        const billingHistoryResponse = await axios.get(
          "http://localhost:8000/billing/history",
          {
            params: { userid: userId },
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setBillingHistory(billingHistoryResponse.data.billing_history || []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.response?.data?.detail || "Failed to load data");
        toast.error(
          err.response?.data?.detail || "Failed to load billing data"
        );

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
      <section className="absolute top-[321px] left-[251px] w-[1094px] h-auto overflow-y-auto rounded-[8px] border-[1px] border-solid border-[#FFFFFF1F] bg-[#FFFFFF0A] p-[32px] flex flex-col">
        {/* Header */}
        <div className="flex justify-center items-center w-[173px] h-[38px] rounded-[4px] border-b border-[#0000004D] bg-[#0000004D] px-[12px] py-[4px] opacity-100">
          <h2 className="text-[20px] poppins-font text-white">Billing</h2>
        </div>
        <div className="w-full flex flex-col gap-[20px] mx-auto max-w-[800px] mt-[20px]">
          {/* Header */}
          <div className="w-[657px] h-[30px] text-[20px] font-normal poppins-font text-white text-center leading-[30px] opacity-100 mx-auto">
            Your <span className="text-[#9747FF]">Active</span> Plan!
          </div>

          {/* Plan Details */}
          <div className="flex justify-center gap-[67px]">
            <div
              className="w-[159px] h-[61px] rounded-[12px] border-[1px] border-solid border-[#9747FF33] 
                bg-gradient-to-r from-[rgba(151,71,255,0.12)] to-[rgba(91,43,153,0.12)] 
                flex items-center justify-center px-[10px] gap-[4px] opacity-100 text-center whitespace-nowrap"
            >
              <span className="text-white text-[12px] font-normal poppins-font">
                Current Plan:
              </span>
              <span className="text-[#9747FF] text-[14px] font-medium poppins-font">
                {subscriptionData.current_plan
                  ? subscriptionData.current_plan.charAt(0).toUpperCase() +
                    subscriptionData.current_plan.slice(1).toLowerCase()
                  : ""}
              </span>
            </div>

            <div className="w-[197px] h-[61px] rounded-[12px] border-[1px] border-solid border-[#9747FF33] bg-gradient-to-r from-[rgba(151,71,255,0.12)] to-[rgba(91,43,153,0.12)] flex flex-nowrap items-center justify-center px-[20px] gap-[4px] opacity-100 whitespace-nowrap">
              <span className="text-white text-[12px] font-normal poppins-font">
                Duration period:
              </span>
              <span className="text-[#9747FF] text-[14px] font-medium poppins-font">
                {subscriptionData.duration}
              </span>
            </div>

            <div className="w-[159px] h-[61px] rounded-[12px] border-[1px] border-solid border-[#9747FF33] bg-gradient-to-r from-[rgba(151,71,255,0.12)] to-[rgba(91,43,153,0.12)] flex items-center justify-center px-[20px] gap-[2px] opacity-100 text-center">
              <span className="text-white text-[12px] font-normal poppins-font">
                Total members:
              </span>
              <span className="text-[#9747FF] text-[14px] font-medium poppins-font">
                {subscriptionData.total_members}
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
                  <span className="text-[16px] text-white">
                    Monthly Design Credits
                  </span>
                  <div className="w-[321px] h-[45px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF66] bg-[#FFFFFF1F] flex items-center justify-start font-medium text-white px-3 gap-[10px] opacity-100">
                    {subscriptionData.total_credits}
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2 items-start">
                  <span className="text-[16px] text-white">
                    Used Design Credits
                  </span>
                  <div className="w-[321px] h-[45px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF66] bg-[#FFFFFF1F] flex items-center justify-start font-medium text-white px-3 gap-[10px]">
                    {subscriptionData.used_credits}
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex justify-between gap-3">
                <div className="flex-1 flex flex-col gap-2 items-start">
                  <span className="text-[16px] text-white">
                    Balance Design Credits
                  </span>
                  <div className="w-[321px] h-[45px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF66] bg-[#FFFFFF1F] flex items-center justify-between px-3">
                    <span className="font-medium text-white">
                      {subscriptionData.balance_credits}
                    </span>
                  </div>
                  <span className="text-[14px] text-[#6E6E6E]">
                    *Stay updated for your remaining balance
                  </span>
                </div>

                <div className="flex-1 flex flex-col gap-2 items-start">
                  <span className="text-[16px] text-white">Renews on</span>
                  <div className="w-[321px] h-[45px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF66] bg-[#FFFFFF1F] flex items-center justify-between px-3">
                    <span className="font-medium text-white">
                      {subscriptionData.renews_on ||
                        subscriptionData.plan_expiring_date ||
                        "N/A"}
                    </span>
                  </div>
                  <span className="text-[14px] text-[#6E6E6E]">
                    *Stay specified as your received time
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Billing History Section */}
          <div className="mb-8">
            <h3 className="text-[18px] poppins-font text-white mb-4 text-center mx-auto">
              Billing History
            </h3>
            <div className="w-[658px] border-[1px] border-solid border-[#6D6D6D33] mx-auto"></div>

            {/* Conditional Rendering for Billing History */}
            {billingHistory.length > 0 ? (
              <div className="w-full rounded-[8px] overflow-hidden mt-4">
                {/* Table Header */}
                <div className="flex bg-[#9747FF1F] text-white text-[14px] font-medium">
                  <div className="flex-1 p-3 poppins-font">Date</div>
                  <div className="flex-1 p-3 poppins-font">Amount</div>
                  <div className="flex-1 p-3 poppins-font">Payment Method</div>
                  <div className="flex-1 p-3 poppins-font">Status</div>
                  <div className="flex-1 p-3 poppins-font">Invoice</div>
                </div>

                {/* Table Rows */}
                {/* Table Rows */}
                <div className="">
                  {billingHistory
                    .slice(0, 5) // <-- Show only last 5 entries
                    .map((bill, index) => (
                      <div
                        key={index}
                        className="flex text-[14px] border-b border-solid border-[#444]"
                      >
                        <div className="flex-1 p-3 text-[#B0B0B0] poppins-font">
                          {bill.date}
                        </div>
                        <div className="flex-1 p-3 text-[#B0B0B0] poppins-font">
                          ${bill.amount}
                        </div>
                        <div className="flex-1 p-3 text-[#B0B0B0] poppins-font">
                          {bill.payment_method}
                        </div>
                        <div className="flex-1 p-3 text-[#B0B0B0] poppins-font">
                          {bill.status}
                        </div>
                        <div className="flex-1 p-3 text-[#B0B0B0] cursor-pointer hover:underline poppins-font">
                          {bill.invoice_url ? (
                            <a
                              href={bill.invoice_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View
                            </a>
                          ) : (
                            "N/A"
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div className="w-full text-center mt-4">
                <p className="text-[14px] text-[#B0B0B0] poppins-font italic">
                  No Billing history available
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

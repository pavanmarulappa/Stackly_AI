import React, { useState, useEffect } from 'react';
import bg from "../../assets/afterHome/ProgileBg.png";
import Pimage from "../../assets/profile/pimage.png";
import profile from "../../assets/header/ProfileImg.png";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Camera, Eye, EyeOff, Edit, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroProfile() {
  // -------------------------
  // ALL HOOKS AT THE TOP
  // -------------------------
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    new_password: '',
    confirm_password: '',
    profile_pic: null,
    previewImage: Pimage
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  // NEW STATE: Editing mode
  const [isEditing, setIsEditing] = useState(false);
  const [originalData, setOriginalData] = useState({});

  // -------------------------
  // Fetch User Data
  // -------------------------
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

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

        const response = await axios.get("http://localhost:8000/profile", {
          params: { userid: userId },
          headers: { Authorization: `Bearer ${token}` },
        });

        const userDataResponse = {
          first_name: response.data.first_name || "",
          last_name: response.data.last_name || "",
          email: response.data.email || "",
          phone_number: response.data.phone_number || "",
          previewImage: response.data.profile_pic
  ? `http://localhost:8000${response.data.profile_pic}?t=${Date.now()}`
  : Pimage,
        };

        setUserData(userDataResponse);
        setOriginalData(userDataResponse);
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error(error.response?.data?.detail || "Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // -------------------------
  // Input Change Handlers
  // -------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserData(prev => ({
        ...prev,
        profile_pic: file,
        previewImage: URL.createObjectURL(file)
      }));
    }
  };

  // -------------------------
  // Submit & Discard Profile
  // -------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authentication token found');

      const formData = new FormData();
      formData.append('first_name', userData.first_name);
      formData.append('last_name', userData.last_name);
      formData.append('email', userData.email);
      formData.append('phone_number', userData.phone_number);
      
      if (userData.profile_pic) {
        formData.append('profile_pic', userData.profile_pic);
      }

      const response = await axios.post('http://localhost:8000/update_profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });

      toast.success('Profile updated successfully!');
      setIsEditing(false);
      
      // Update the original data with the new values
      setOriginalData({
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        phone_number: userData.phone_number,
        previewImage: userData.previewImage
      });

      // Update the preview image if a new one was uploaded
      if (response.data.profile_pic) {
        setUserData(prev => ({
          ...prev,
          previewImage: `http://localhost:8000${response.data.profile_pic}`
        }));
      }

    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error(error.response?.data?.detail || 'Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const handleDiscard = () => {
    setUserData(prev => ({
      ...prev,
      ...originalData,
      new_password: '',
      confirm_password: '',
      profile_pic: null
    }));
    setIsEditing(false);
  };

  // -------------------------
  // Handle Password Modal Submit
  // -------------------------
  const handlePasswordSubmit = async () => {
    const { new_password, confirm_password } = userData;

    if (!new_password || !confirm_password) {
      toast.error("Please fill all password fields");
      return;
    }

    if (new_password.length < 6) {
      toast.error("New password must be at least 6 characters long");
      return;
    }

    if (new_password !== confirm_password) {
      toast.error("New password and confirm password do not match");
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authentication token found');

      const response = await axios.post('http://localhost:8000/change_password', {
        new_password,
        confirm_password
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      toast.success("Password changed successfully!");
      setShowChangePasswordModal(false);
      setUserData(prev => ({ 
        ...prev, 
        new_password: '', 
        confirm_password: '' 
      }));
    } catch (error) {
      console.error('Error changing password:', error);
      toast.error(error.response?.data?.detail || 'Failed to change password');
    }
  };

  // -------------------------
  // Handle Forgot Password Submit
  // -------------------------
  const handleForgotPassword = async () => {
    if (!forgotEmail) return toast.error("Enter your email");

    try {
      await axios.post("http://localhost:8000/forgot_password", { email: forgotEmail });
      toast.success("Password reset link sent to your email");
      setShowForgotPasswordModal(false);
      setForgotEmail("");
    } catch (err) {
      toast.error(err.response?.data?.detail || "Failed to send reset link");
    }
  };

  // -------------------------
  // Loading fallback
  // -------------------------
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div>Loading profile data...</div>
      </div>
    );
  }

  // -------------------------
  // RETURN
  // -------------------------
  return (
    <div>
      <section className="absolute top-[321px] left-[251px] w-[1094px] h-[488px] rounded-[8px] border-[1px] border-solid border-[#FFFFFF1F] bg-[#FFFFFF0A] p-[32px] flex flex-col justify-between opacity-100">
        {/* Header div */}
        <div className="w-full h-[38px] flex justify-between items-center opacity-100 rotate-0 px-2">
          <div
            className="w-[173px] h-[38px] rounded-[4px] border-b border-white/40 bg-[#0000004D] 
                       flex items-center justify-center px-[12px] py-[4px] opacity-100 "
          >
            <div
              className="text-white text-[20px] font-medium"
              style={{ lineHeight: '30px', fontFamily: 'Poppins, sans-serif' }}
            >
              My Profile
            </div>
          </div>

          {/* Edit Icon - Only show if not already editing */}
          {!isEditing && (
            <div
              className="w-[32px] h-[32px] rounded-full border-[0.5px] border-solid border-[#8A38F533] bg-[#7A1FF133] shadow-[0_0_6px_0_#FFFFFF66] backdrop-blur-[4px] flex items-center justify-center cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              <Edit size={16} className="text-white" />
            </div>
          )}
        </div>

        {/* Bottom Content */}
        <div className="flex gap-[32px] items-start flex-1 mt-4">
          {/* Left Profile Image Section */}
          <div className="w-[220px] flex flex-col items-center gap-[20px] -ml-4">
            <div className="relative">
              <div className="w-[124px] h-[124px] rounded-full overflow-hidden border-[2px] border-solid border-[#8A38F5]">
                <img 
                  src={userData.previewImage} 
                  className="w-full h-full object-cover" 
                  alt="Profile" 
                />
              </div>
              {isEditing && (
                <label className="absolute bottom-0 right-0 w-[32px] h-[32px] rounded-full bg-[#8A38F5] flex items-center justify-center cursor-pointer">
                  <Camera size={16} className="text-white" />
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleFileChange} 
                  />
                </label>
              )}
            </div>

            <label
              className={`flex items-center gap-2 text-[14px] text-[#8A38F5] cursor-pointer -mt-2 -ml-3 ${
                !isEditing ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536M16.5 3.5a2.121 2.121 0 013 3L7 19H4v-3l12.5-12.5z"
                />
              </svg>
              Change image
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleFileChange} 
                disabled={!isEditing}
              />
            </label>
          </div>

          {/* Right Form Content */}
          <div className="flex-1 flex flex-col gap-[24px]">
            {/* First Name & Last Name */}
            <div className="flex gap-[27px]">
              <div className="flex-1">
                <label className="block text-[16px] text-[#A0A0A0] mb-[8px]">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={userData.first_name}
                  onChange={handleChange}
                  readOnly={!isEditing}
                  className={`w-[321px] h-[48px] rounded-[12px] bg-[#FFFFFF0D] border-[1px] border-solid border-[#FFFFFF33] px-[16px] text-white focus:border-[#8A38F5] focus:outline-none ${
                    !isEditing ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                />
              </div>
              <div className="flex-1">
                <label className="block text-[16px] text-[#A0A0A0] mb-[8px]">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={userData.last_name}
                  onChange={handleChange}
                  readOnly={!isEditing}
                  className={`w-[321px] h-[48px] rounded-[12px] bg-[#FFFFFF0D] border-[1px] border-solid border-[#FFFFFF33] px-[16px] text-white focus:border-[#8A38F5] focus:outline-none ${
                    !isEditing ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex gap-[27px]">
              <div className="flex-1">
                <label className="block text-[16px] text-[#A0A0A0] mb-[8px]">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  readOnly={!isEditing}
                  className={`w-[321px] h-[48px] rounded-[12px] bg-[#FFFFFF0D] border-[1px] border-solid border-[#FFFFFF33] px-[16px] text-white focus:border-[#8A38F5] focus:outline-none ${
                    !isEditing ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                />
              </div>
              <div className="flex-1">
                <label className="block text-[16px] text-[#A0A0A0] mb-[8px]">Phone Number</label>
                <input
                  type="tel"
                  name="phone_number"
                  value={userData.phone_number}
                  onChange={handleChange}
                  readOnly={!isEditing}
                  className={`w-[321px] h-[48px] rounded-[12px] bg-[#FFFFFF0D] border-[1px] border-solid border-[#FFFFFF33] px-[16px] text-white focus:border-[#8A38F5] focus:outline-none ${
                    !isEditing ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                />
              </div>
            </div>

            {/* Password & Change Button */}
            <div className="flex gap-[27px]">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-[8px] w-[738px]">
                  <label className="text-[16px] text-[#A0A0A0]">Password</label>
                  <button
                    className="w-[139px] h-[26px] rounded-[12px] bg-[#8A38F5] border-[1px] border-solid border-[#9747FF80] text-white text-[12px]"
                    onClick={() => setShowChangePasswordModal(true)}
                  >
                    Change Password
                  </button>
                </div>

                <div className="relative w-[738px]">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full h-[48px] rounded-[12px] bg-[#FFFFFF0D] border-[1px] border-solid border-[#FFFFFF33] px-[16px] pr-[48px] text-white focus:border-[#8A38F5] focus:outline-none"
                    value="••••••••"
                    readOnly
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-[12px] top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Save / Cancel Buttons */}
            {isEditing && (
              <div className="flex justify-end gap-2 mt-4">
                <button
                  className="px-4 py-2 rounded bg-gray-600 text-white"
                  onClick={handleDiscard}
                  disabled={saving}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded bg-[#8A38F5] text-white"
                  onClick={handleSubmit}
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- Change Password Modal ---------------- */}
      {showChangePasswordModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-[#1A1A1A] p-6 rounded-xl w-[400px] flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-white text-[18px] font-semibold">Change Password</h2>
              <button onClick={() => setShowChangePasswordModal(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                name="new_password"
                placeholder="New Password"
                value={userData.new_password}
                onChange={handleChange}
                className="w-full h-[40px] rounded-[8px] bg-[#FFFFFF0D] border border-[#FFFFFF33] px-3 text-white focus:outline-none focus:border-[#8A38F5]"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-[12px] top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirm_password"
                placeholder="Confirm New Password"
                value={userData.confirm_password}
                onChange={handleChange}
                className="w-full h-[40px] rounded-[8px] bg-[#FFFFFF0D] border border-[#FFFFFF33] px-3 text-white focus:outline-none focus:border-[#8A38F5]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-[12px] top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            <div className="flex justify-end gap-2 mt-2">
              <button
                className="px-3 py-1 rounded bg-gray-600 text-white"
                onClick={() => setShowChangePasswordModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 rounded bg-[#8A38F5] text-white"
                onClick={handlePasswordSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
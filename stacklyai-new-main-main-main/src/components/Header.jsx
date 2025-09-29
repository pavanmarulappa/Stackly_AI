import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import logoImg from "../assets/Logo1.png";
import { UserContext } from "../context/UserContext";
import arrow from "../assets/home/Arrow.png";
import profile from "../assets/header/ProfileImg.png";

export default function Header() {
  const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState(false);
  const location = useLocation();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [profilePic, setProfilePic] = useState(profile);
  const [activePlan, setActivePlan] = useState("Basic");

  // Track screen size
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 769);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 769);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch profile picture and subscription plan
  useEffect(() => {
    const fetchUserData = async () => {
      if (userInfo.userId) {
        const token = localStorage.getItem("token");
        try {
          // Fetch profile picture
          const profileResponse = await axios.get(
            "http://localhost:8000/profile",
            {
              params: { userid: userInfo.userId },
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const profilePicUrl = profileResponse.data.profile_pic
            ? profileResponse.data.profile_pic.startsWith("/media/profile_pics")
              ? `http://localhost:8000${profileResponse.data.profile_pic}`
              : profileResponse.data.profile_pic
            : profile;
          setProfilePic(profilePicUrl);

          // Fetch subscription plan
          const subscriptionResponse = await axios.get(
            "http://localhost:8000/subscription",
            {
              params: { userid: userInfo.userId },
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setActivePlan(subscriptionResponse.data.current_plan || "Basic");
        } catch (error) {
          console.error("Error fetching user data:", error);
          setProfilePic(profile); // Fallback to default image
          setActivePlan("Basic"); // Fallback to default plan
        }
      }
    };
    fetchUserData();
  }, [userInfo.userId]);

  // Route check (case-insensitive)
  const hiddenPages = [
    "/sign-up",
    "/sign-in",
    "/otp",
    "/forgetpg",
    "/signupotp",
    "/resetpassword",
    "/resetpopup",
    "/signuppopup",
    "/heroforgetpg",
    "/afterconformationpage",
    "/afterconformationpage1",
  ];
  const isHiddenPage = hiddenPages.includes(location.pathname.toLowerCase());

  // Optional: route endpoint check for JSX condition
  const endpoint = location.pathname
    .split("/")
    .filter(Boolean)
    .pop()
    ?.toLowerCase();

  // Hide header on all screen sizes for specific pages
  if (isHiddenPage) {
    return null;
  }

  // Navigation links configuration
  const navLinks = userInfo.userId
    ? [
        { to: "/", label: "Canvas" },
        { to: "/products", label: "My Spaces" },
        { to: "/pricing", label: "Inspirations" },
        { to: "/api", label: "API" },
        { to: "/contact", label: "Contact Us" },
      ]
    : [
        { to: "/", label: "Home" },
        { to: "/products", label: "Features" },
        { to: "/pricing", label: "Pricing" },
        { to: "/api", label: "API" },
        { to: "/contact", label: "Contact Us" },
      ];

  return (
    <div className="w-full px-4 sm:px-6">
      <header
        className="w-full max-w-[1348px] h-[82px] 
                   flex justify-between items-center 
                   gap-2 rounded-[90px] shadow-sm 
                   bg-[rgba(255,255,255,0.12)] backdrop-blur-[8px] 
                   relative z-10 mx-auto
                   px-6 sm:px-8 md:px-10 lg:px-12
                   min-[440px]:h-[70px] max-[439px]:h-[64px]"
        style={{
          top: "24px",
          opacity: 1,
          position: "relative",
        }}
      >
        <img
          className="w-[172.75px] h-[34px] cursor-pointer max-[400px]:w-[50%]"
          src={logoImg}
          alt="Logo"
        />

        {![].includes(endpoint) && (
          <nav>
            <ul className="hidden min-[900px]:flex justify-between self-start w-[477px] h-[32px] opacity-100 list-none font-poppins">
              <div className="w-[477px] h-[32px] flex justify-center items-center gap-[4px] px-[8px] opacity-100">
                {navLinks.map(({ to, label }) => (
                  <li key={label}>
                    <NavLink
                      to={to}
                      onClick={() => setShowSideBar(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-center no-underline font-semibold text-[16px] leading-[100%]
                         w-[124px] h-[46px] px-[8px] py-[12px] rounded-[40px] transition-all duration-200
                         tracking-[0%] font-poppins ${
                           isActive ? "text-[#8A38F5]" : "text-white"
                         }`
                      }
                      style={({ isActive }) =>
                        isActive
                          ? {
                              borderBottom: "1px solid",
                              width: "124px",
                              height: "46px",
                              borderImage:
                                "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, #8A38F5 30%, #8A38F5 70%, rgba(255, 255, 255, 0.1) 100%) 1",
                            }
                          : {}
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </div>
            </ul>
          </nav>
        )}
        <div className="flex items-center justify-center z-10 relative gap-5 ">
          {userInfo.userId ? (
            <div
              className="group z-10 relative cursor-pointer inline-flex items-center justify-center gap-[8px] 
             w-[98px] h-[56px] rounded-[80px] border border-solid p-[4px] 
             shadow-[0px_0px_4px_0px_#00000040]"
              style={{
                background: "#8A38F51A",
                backdropFilter: "blur(4px)",
              }}
            >
              <div
                className="w-[90px] h-[48px] flex items-center justify-center gap-[10px] rounded-[80px] 
             px-[12px] py-[8px] border border-[#C22CA280]"
                style={{
                  background:
                    "linear-gradient(93.98deg, rgba(138, 56, 245, 0.7) 3.25%, rgba(194, 44, 162, 0.7) 102.29%)",
                }}
              >
                <div className="w-[32px] h-[32px] rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-[32px] h-[32px] object-cover rounded-full"
                  />
                </div>
                <svg
                  className="group-hover:rotate-180 transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  height="7.5px"
                  viewBox="0 0 13 8"
                  fill="none"
                >
                  <path
                    d="M6.51543 1.86233L1.49227 6.88548C1.32142 7.05634 1.12209 7.13903 0.894278 7.13357C0.666471 7.1281 0.467138 7.03971 0.296283 6.8684C0.125427 6.69709 0.0399991 6.49776 0.0399991 6.2704C0.0399991 6.04305 0.125427 5.84372 0.296283 5.67241L5.54155 0.410054C5.67824 0.273369 5.83201 0.170856 6.00286 0.102514C6.17372 0.0341712 6.34458 7.93651e-08 6.51543 7.73277e-08C6.68629 7.52903e-08 6.85714 0.0341712 7.028 0.102514C7.19885 0.170856 7.35262 0.273369 7.48931 0.410054L12.7517 5.67241C12.9225 5.84327 13.0052 6.04556 12.9997 6.27929C12.9943 6.51302 12.9059 6.71508 12.7346 6.88548C12.5633 7.05588 12.3639 7.14131 12.1366 7.14177C11.9092 7.14222 11.7099 7.0568 11.5386 6.88548L6.51543 1.86233Z"
                    fill="#ffffff"
                  />
                </svg>

                <div className="profile-list min-w-[150px] p-4 z-10 hidden group-hover:flex flex-col gap-2 absolute top-full mt-0.5 right-0 bg-gray-800 rounded-md">
                  <div className="w-[173px] h-[24px] flex items-center gap-1 text-white text-[14px] font-normal poppins-font">
                    Activated plan:{" "}
                    <span className="text-[16px] font-normal">
                      {activePlan
                        ? activePlan.charAt(0).toUpperCase() +
                          activePlan.slice(1)
                        : ""}
                    </span>
                  </div>

                  <p className="w-full h-[1px] bg-gray-600 my-1"></p>
                  <NavLink
                    to="/Profile"
                    className={({ isActive }) =>
                      `w-[173px] h-[32px] flex items-center px-3 pt-1 pb-1 rounded-[4px]
                       text-white border-b-2 border-solid border-[#FFFFFF33]
                       hover:bg-[#8A38F5]/30 active:bg-[#8A38F5]/50 transition-colors
                       ${isActive ? "bg-[#8A38F5]/50" : ""}`
                    }
                  >
                    My Profile
                  </NavLink>

                  <div
                    onClick={() => {
                      try {
                        // Clear user info and localStorage
                        setUserInfo({});
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        localStorage.removeItem("userId");
                        localStorage.removeItem("userInfo");
                        localStorage.removeItem("userEmail");
                        localStorage.removeItem("persist:root");
                        localStorage.removeItem("theme");
                        localStorage.removeItem("resetEmail");

                        // Show toast
                        toast.success("✅ Logged out successfully!");

                        // Delay navigation so toast is visible
                        setTimeout(() => {
                          navigate("/sign-in");
                          window.location.reload();
                        }, 3000); // 3 seconds delay
                      } catch (error) {
                        console.error("Logout failed:", error);
                        toast.error(
                          "❌ Something went wrong while logging out."
                        );
                      }
                    }}
                    className="w-[173px] h-[32px] flex items-center px-3 pt-1 pb-1 rounded-[4px] text-white 
             hover:bg-[#8A38F5]/30 border-b-2 border-solid border-[#FFFFFF33] transition-colors cursor-pointer"
                  >
                    Logout
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="min-[900px]:flex hidden gap-[8px] w-[290px] h-[60px] p-[8px] rounded-[30px] border-[2px] border-solid border-[#FFFFFF33] bg-clip-padding relative"
              style={{
                background: `
                  linear-gradient(92.88deg, rgba(255, 255, 255, 0.1) -0.52%, rgba(0, 176, 186, 0.1) 99.46%) border-box,
                  linear-gradient(#8A38F51A, #8A38F51A) padding-box
                `,
                borderWidth: "1px",
                borderRadius: "30px",
                opacity: 1,
              }}
            >
              <NavLink
                to="/sign-in"
                className="w-[113px] h-[44px] flex items-center justify-center 
                           whitespace-nowrap no-underline rounded-[30px] cursor-pointer
                           bg-[#8A38F533] border-[1px] border-solid border-[#FFFFFF33] 
                           active:text-white
                           text-white poppins-font font-semibold text-[16px] leading-[100%]"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/sign-up"
                className="w-[153px] h-[44px] px-[20px] flex items-center justify-center 
                           whitespace-nowrap no-underline rounded-[30px] border border-[#FFFFFF33] border-solid
                           bg-[linear-gradient(93.98deg,rgba(138,56,245,0.7)_3.25%,rgba(194,44,162,0.7)_102.29%)]
                           bg-clip-padding text-white text-[16px] font-semibold leading-[100%] cursor-pointer 
                           active:opacity-90 focus:outline-none gap-[8px]"
              >
                <span className="poppins-font whitespace-nowrap">Sign Up</span>
                <div className="relative w-[24px] h-[24px] flex-shrink-0">
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="w-[15px] h-[15px] absolute top-[4.5px] left-[4.5px] opacity-100 border border-white"
                    style={{ borderWidth: "1.5px" }}
                  />
                </div>
              </NavLink>
            </div>
          )}
        </div>
        <div
          onClick={() => {
            setShowSideBar(true);
          }}
          className={`hidden max-[900px]:block w-[30px] h-[30px] cursor-pointer rounded-[5px]`}
        >
          <div className="w-full h-1 rounded-md bg-gray-700 transition-all duration-[0.3s] ease-[ease-in-out] mx-0 my-[5px]"></div>
          <div className="w-full h-1 rounded-md bg-gray-700 transition-all duration-[0.3s] ease-[ease-in-out] mx-0 my-[5px]"></div>
          <div className="w-full h-1 rounded-md bg-gray-700 transition-all duration-[0.3s] ease-[ease-in-out] mx-0 my-[5px]"></div>
        </div>
      </header>

      <section
        className={`fixed top-0 ${showSideBar ? "right-0" : "right-[-200%]"} 
                   transition-all w-[70vw] sm:w-[50%] bg-white shadow-2xl min-h-[120vh] flex flex-col min-[900px]:hidden gap-7 justify-start items-start p-[40px] z-50`}
        style={{ listStyle: "none" }}
      >
        <svg
          onClick={() => {
            setShowSideBar(false);
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#1f1f1f"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>

        {navLinks.map(({ to, label }) => (
          <NavLink
            key={label}
            className="text-[20px] font-bold text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] NavLink visited:font-bold"
            to={to}
            onClick={() => {
              setShowSideBar(false);
            }}
          >
            {label}
          </NavLink>
        ))}

        {!userInfo.userId && (
          <>
            <button
              className="w-[107px] h-[39px] text-[20px] font-semibold leading-[100%] border bg-white text-[#007b82] cursor-pointer flex justify-center items-center no-underline rounded-[5px] border-solid border-[#007b82] active:bg-[#007b82] active:text-white"
              onClick={() => {
                navigate("/sign-in");
                setShowSideBar(false);
              }}
            >
              Log In
            </button>
            <button
              className="w-[107px] h-[39px] text-[20px] font-semibold leading-[100%] border bg-[#007b82] text-white cursor-pointer flex justify-center items-center no-underline rounded-[5px] border-solid border-white active:bg-white active:text-[#007b82]"
              onClick={() => {
                navigate("/sign-up");
                setShowSideBar(false);
              }}
            >
              Sign Up
            </button>
          </>
        )}
      </section>
    </div>
  );
}

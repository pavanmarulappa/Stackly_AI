import React, { useContext, useState } from "react";
import logoImg from "../assets/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import User from "../../src/assets/header/user.png";
import Arrow from "../../src/assets/header/arrow.png";

export default function Header1() {
  const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState(false);

  const { userInfo, setUserInfo } = useContext(UserContext);

  return (
    <div>
      <div>
        <header className="w-full  h-[70px] sm:h-[90px] bg-white flex justify-between items-center backdrop-blur-[6px] xl:px-20 xl:py-[25px] md:p-[20px] p-[15px] relative z-10 gap-0 shadow-sm">
          <img
            className="cursor-pointer max-[400px]:w-[50%]"
            onClick={() => {
              navigate("/");
            }}
            src={logoImg}
            alt="Logo"
          />
          <nav>
            <ul
              className={`hidden gap-12 md:gap-8 min-[900px]:flex`}
              style={{ listStyle: "none" }}
            >
              <li>
                <NavLink
                  className="text-[20px] font-bold text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] NavLink visited:font-bold"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-[20px] font-bold text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] NavLink visited:font-bold"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-[20px] font-bold text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] NavLink visited:font-bold"
                  to="/pricing"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-[20px] font-bold text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] NavLink visited:font-bold"
                  to="/Api"
                >
                  API
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-[20px] font-bold text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] NavLink visited:font-bold"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
         <div>
           <div className="w-[94px] h-[32px] flex justify-center items-center py-[4px] px-[20px]">
            <img src={User} alt="user" />
            <img src={Arrow} alt="down arrow" />

           </div>
         </div>
        </header>

        <section
          className={`fixed top-0 ${
            showSideBar ? "right-0" : "right-[-200%]"
          } transition-all w-[70vw] sm:w-[50%] bg-white shadow-2xl min-h-[120vh] flex flex-col min-[900px]:hidden gap-7 justify-start items-start p-[40px] z-10`}
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
          <NavLink
            className="text-[20px] font-bold text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] NavLink visited:font-bold"
            to="/"
            onClick={() => {
              setShowSideBar(false);
            }}
          >
            Home
          </NavLink>

          <NavLink
            className="text-[20px] font-bold text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] NavLink visited:font-bold"
            to="/products"
            onClick={() => {
              setShowSideBar(false);
            }}
          >
            Products
          </NavLink>

          <NavLink
            className="text-[20px] font-bold text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] NavLink visited:font-bold"
            to="/pricing"
            onClick={() => {
              setShowSideBar(false);
            }}
          >
            Pricing
          </NavLink>

          <NavLink
            className="text-[20px] font-bold text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] NavLink visited:font-bold"
            to="/Api"
            onClick={() => {
              setShowSideBar(false);
            }}
          >
            API
          </NavLink>

          <NavLink
            className="text-[20px] font-bold text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] NavLink visited:font-bold"
            to="/Contact"
            onClick={() => {
              setShowSideBar(false);
            }}
          >
            Contact Us
          </NavLink>

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
    </div>
  );
}

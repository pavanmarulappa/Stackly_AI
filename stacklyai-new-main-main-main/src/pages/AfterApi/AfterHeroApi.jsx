import React, { useState } from "react";
import apiBackground from "../../assets/api/back.png";
import AfterKeys from "./AfterKeys";
import AfterApiIntegrate from "./AfterApiIntegrate";
import AfterPlan from "./AfterPlan";
import AfterApiAccess from "./AfterApiAccess";
import AfterHowItWorks from "./AfterHowItWorks";
import AfterCustomAPIPlan from "./AfterCustomApiPlan";
import AfterDraggable from "./AfterDraggable";
import sec14Img2 from "../../assets/home/sec14/Vector.png";
import sec14Img3 from "../../assets/home/sec14/m1.jpg";
import sec14Img4 from "../../assets/home/sec14/m2.jpg";
import sec14Img5 from "../../assets/home/sec14/m3.jpg";
import AfterApiFaq from "./AfterApiFaq";
import keyImage from "../../assets/api/key.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AfterHeroApi() {
  const faqs = [
    {
      question: "How do I get started with StacklyAI APIs?",
      answer:
        "Stackly AI is an intelligent platform designed to streamline your tasks using automation and smart tools. It helps enhance productivity by offering tailored solutions based on your needs.",
    },
    {
      question: "What authentication method does StacklyAI use?",
      answer:
        "Stackly AI works by analyzing your input and tasks, then offering automated suggestions, integrations, and tools to make your workflow more efficient and seamless.",
    },
    {
      question: "Are there any rate limits on API requests?",
      answer:
        "Stackly AI offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced capabilities and integrations.",
    },
    {
      question: " What image formats do StacklyAI APIs support?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
    {
      question: "How to handle other image formats e.g. HEIC, HEIF etc?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
    {
      question: "What is the expiration period for my credit pack?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
  ];
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    contact_number: "",
    company_name: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId"); // FIXED: use the correct key
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      alert("Login required to submit the form.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/submit-api-access",
        {
          user_id: parseInt(userId),
          ...formData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // add token if backend requires auth
          },
        }
      );

      alert(res.data.message);
      setFormData({
        full_name: "",
        email: "",
        contact_number: "",
        company_name: "",
        address: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Submission failed. Please try again.");
    }
  };
  return (
    <div>
      {/* section1 */}
      <div className="relative w-full h-[536px] flex flex-col items-center justify-center bg-white-to-cyan">
        {/* <h1 className="w-[816px] h-[128px] font-bold text-[48px] leading-[64px] text-center text-[#2a2a2a]">
        "Transform Spaces Effortlessly with <span className="text-[#00B0BA]">StacklyAI API</span>"
      </h1> */}
        <h1 className="max-w-full text-[64px] font-extrabold md:text-[40px]  leading-[72%] text-center  text-[#2a2a2a]">
          Transform Spaces Effortlessly with{" "}
          <span className="text-[#00B0BA]">StacklyAI API</span>
        </h1>
        {/* <p className="w-[672px] h-[56px] font-[400] text-[18px] leading-[72px] text-center text-[#b0b0b0] mt-4">
        Explore limitless possibilities to redesign and enhance any home interior, exterior, or outdoor space — all through powerful AI integration.
      </p> */}
        <p className="w-[672px] h-[56px]  font-[900] text-[20px] leading-[28px] text-center text-[#b0b0b0] mt-4">
          <span className="text-[#00B0BA]">
            Get Instant API Access for your AI Design Platform
          </span>
        </p>
        <button
          onClick={() => {
            document.getElementById('connect-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-[306px] h-[45px] mt-8 rounded-[6px] border-[1px] border-solid border-transparent bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-white font-semibold text-[18px] leading-[100%]"
        >
          Let’s Connect!
        </button>
        {/* Positioned Illustration at Bottom Left */}
        <img
          src={keyImage}
          alt="API Key Illustration"
          className="absolute bottom-[40px] right-[80px] w-[330px] h-auto object-contain "
        />
      </div>

      {/* section-2  */}

      {/* //<div className="relative w-full h-[848px] flex items-center justify-center bg-black"> */}
      <div className="relative w-full h-[709px] flex items-center justify-center bg-[#011213]">
        {/* Background API Image */}
        <img
          src={apiBackground}
          alt="API Background"
          className="absolute w-[1150.91px] h-[848px] p-[34px] opacity-60"
        />

        {/* Text Content */}
        <div className="relative z-10 w-[1172px] h-[242px] flex flex-col items-center justify-center text-white text-center">
          <h2 className="w-[816px] h-[64px] font-semibold text-[48px] leading-[64px]">
            What Is StacklyAI API?
          </h2>
          <p className="w-[1172px] h-[113px] font-[400] text-[28px] leading-[36px] mt-4">
            StacklyAI API allows developers, platforms, and businesses to
            generate high-quality AI-
            <br />
            rendered images from user-submitted photos. Whether it's a room
            makeover,
            <br /> architectural facade, or outdoor setting — the API delivers
            instant visual
            <br /> transformations, directly into your product.
          </p>
        </div>
      </div>

      {/* section-3  */}

      <AfterKeys />

      {/* section 4  */}

      <AfterApiIntegrate />

      {/* section-5  */}

      <AfterPlan />

      {/* section-6  */}

      <AfterApiAccess />

      {/* section-7  */}

      <AfterHowItWorks />

      {/* section-8  */}

      <AfterCustomAPIPlan />

      {/* section-9  */}

      <div id="connect-form" className='w-full flex justify-center mt-[-120px] mb-[80px]'>
        <div className='w-[1280px] h-[1049px] rounded-[40px] bg-[white] shadow-[#00000040] shadow-[0_0_4px_0] flex flex-col justify-center items-center'>
          <h2 className="w-full max-w-[743px] min-h-[64px] text-[44px] leading-[64px] font-bold text-center">
            Ready to <span className="text-[#009A98]">Create Something Great?</span>
          </h2>
          <p className=" w-full max-w-[770px] min-h-[56px] text-[18px] font-[400] leading-[28px] text-center text-[#2A2A2A] my-8">
            We offer flexible API plans tailored to your needs.<br />
            Let’s build the right setup—just for you.
          </p>

          <div className="w-[730px] h-[721px] rounded-[10px] border-[1px] border-[#007B8214] border-solid p-[50px] gap-[10px] bg-[#ffffff] shadow-[#ABB2BB40] shadow-[0_0_12px_0] flex justify-center items-center">
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex flex-col">
                  <label className="text-sm font-bold text-[#2A2A2A] mb-1">First Name<span className="text-red-500"> *</span></label>
                  <input
                    name="full_name"
                    type="text"
                    placeholder="Ram"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="border border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="text-sm font-bold text-[#2A2A2A] mb-1">Email<span className="text-red-500"> *</span></label>
                  <input
                    name="email"
                    type="email"
                    placeholder="ramprakash@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex flex-col">
                  <label className="text-sm font-bold text-[#2A2A2A] mb-1">Contact number<span className="text-red-500"> *</span></label>
                  <input
                    name="contact_number"
                    type="tel"
                    placeholder="+91 0123456789"
                    value={formData.contact_number}
                    onChange={handleChange}
                    required
                    className="border border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {/* <div className="flex-1 flex flex-col">
            <label className="text-sm font-bold text-[#2A2A2A] mb-1">Country</label>
            <div className="flex items-center border border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 h-[42px]">
              <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="mr-2" />
              <span className="text-gray-500">India</span>
            </div>
          </div> */}
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#2A2A2A] mb-1">Company Name<span className="text-red-500"> *</span></label>
                <input
                  name="company_name"
                  type="text"
                  placeholder="Companyexample"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                  className="border border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#2A2A2A] mb-1">Address<span className="text-red-500"> *</span></label>
                <input
                  name="address"
                  type="text"
                  placeholder="Address*"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="border border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#2A2A2A] mb-1">Message<span className="text-red-500"> *</span></label>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows="4"
                  maxLength={500}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[465px] h-[45px] bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-white py-2 rounded hover:opacity-90 transition"
                >
                  Let's Connect!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


      {/* {section-10} */}
      {/* <section className="w-full py-16 px-4 flex flex-col justify-center items-center mt-20">
        <h2 className="text-[48px] md:text-5xl font-semibold text-center text-gray-800 leading-[140%]">
          Discover Our{" "}
          <span className="text-[#007B82]">Advanced AI Interior Tools</span> and
          Redesign
        </h2>
        <h2 className="text-[48px] md:text-5xl font-semibold text-center text-[black] mt-3">
          Your Space Instantly
        </h2>
      </section> */}

      {/* <div className="relative w-full h-[709px] flex items-center justify-center bg-[white]">
        //Background API Image 
        <img
          src={apiBackground}
          alt="API Background"
          className="absolute w-[1150.91px] h-[848px] p-[34px] opacity-60"
        />

        //Text Content 
        <div className="relative z-10 w-[1172px] h-[242px] flex flex-col items-center justify-center text-black text-center -mt-40">
          <h2 className="w-[816px] h-[64px] font-semibold text-[48px] leading-[64px]">
            Ready to{" "}
            <span className="text-[#00B0BA]">Create Something Great?</span>
          </h2>
          <p className="w-[1280px] h-[199px] font-[400] text-[28px] leading-[36px] mt-4">
            We offer flexible API plans tailored to your needs.
            <br />
            Let’s build the right setup—just for you.
          </p>
          <Link to="#">
            {" "}
            <button className="w-[800px] h-[70px] mt-[80] rounded-[6px] border border-transparent bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-white font-semibold text-[18px] leading-[100%] ">
              Let’s Connect!
            </button>
          </Link>
        </div>
      </div> */}

      {/* section-11  */}

      <AfterDraggable />

      {/* section-12  */}

      {/* <section
         className="relative w-full  absolute-0  bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "url('./src/assets/home/sec14/bg1.jpg')" }}
       >
         <div className="py-20 px-6 bg-[#00000096]">
           <div className="flex flex-col items-center text-center text-white">
             <h2 className="text-[48px] md:text-5xl leading-[140%] text-center font-bold mb-4">
               <span className="text-6xl font-bold">“</span> Meet Our Members{" "}
               <span className="text-6xl font-bold">”</span>
             </h2>
             <p className="max-w-[630px] min-h-[78px] text-[28px] leading-[140%] text-center md:text-xl text-gray-300 mb-8">
               You're in good company with{" "}
               <span className="text-cyan-400  font-semibold">Stackly AI</span>,
               trusted by people in all 195 countries.
             </p> */}
      {/* Center logo */}
      {/* <div className="mb-16">
               <div className="bg-[#FFFFFF1F] rounded-full p-8 shadow-lg">
                 <img src={sec14Img2} alt="Center Icon" className="w-12 h-12" />
               </div>
             </div> */}

      {/* Member Cards */}
      {/* <div className="w-[100vw] flex justify-center item-center flex-wrap gap-10"> */}
      {/* Card 1 */}
      {/* <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
                 <div className="min-w-[413px] h-full flex justify-around items-center">
                   <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1 ">
                     <h3 className="text-black text-[22px] font-medium leading-[140%] ">Guru Ragav Auditor</h3>
                     <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">Auditor</p>
                   </div>
                   <img
                     src={sec14Img3}
                     alt="Member 1"
                     className="w-20 h-20 rounded-full object-cover"
                   />
                 </div>
                 <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
                   “I use Stackly AI to help my clients visualize how their
                   backyard could look like if they hire me for the job. It works
                   flawlessly!”
                 </p>
               </div> */}

      {/* Card 2 */}
      {/* <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
                 <div className="min-w-[413px] h-full flex justify-around items-center">
                   <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1">
                     <h3 className="text-black text-[22px] font-medium leading-[140%]">Cristian Rama</h3>
                     <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">Architect</p>
                   </div>
                   <img
                     src={sec14Img4}
                     alt="Member 2"
                     className="w-20 h-20 rounded-full object-cover"
                   />
                 </div>
                 <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
                   “I needed to replace my living room furniture so I generated a
                   few design ideas with Stackly AI. Awesome technology!”
                 </p>
               </div> */}

      {/* Card 3 */}
      {/* <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
                 <div className="min-w-[413px] h-full flex justify-around items-center">
                   <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1">
                     <h3 className="text-black text-[22px] font-medium leading-[140%]">Ram Krishnan</h3>
                     <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">Architect</p>
                   </div>
                   <img
                     src={sec14Img5}
                     alt="Member 3"
                     className="w-20 h-20 rounded-full object-cover"
                   />
                 </div>
                 <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
                   “I run a real estate agency and my clients send me pictures
                   with their empty properties. I use Stackly AI to furnish them
                   automatically!”
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section> */}

      {/* section-14  */}

      <AfterApiFaq faqs={faqs} />
    </div>
  );
}

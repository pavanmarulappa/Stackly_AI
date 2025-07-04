// //import React from 'react';
// import React, { useState } from "react";
// import axios from "axios";
// import formBanner from "../../assets/pricing-pg/formBanner.jpg"; // Adjust path as needed

// //Connect fastapi
// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     contact_number: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8000/contact", {
//         ...formData,
//         source: "contact_us",
//       });
//       alert("Message sent successfully!");
//       setFormData({
//         first_name: "",
//         last_name: "",
//         email: "",
//         contact_number: "",
//         subject: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error(error);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <section
//           className="w-full h-[960px] bg-cover bg-center flex items-center justify-center"
//           style={{
//             backgroundImage: `url(${formBanner})`,
//           }}
//         >
//           <div className="max-w-[1400px] w-full rounded-xl flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-10 gap-10">
//             {/* Left Text Content */}
//             <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
//               <h2 className="text-[80px] leading-[85px] font-bold text-[white] text-center">
//                 Let's talk <br /> with us
//               </h2>
//               <p className="text-[#F5F5F5] mt-4  min-h-[51px] text-center text-[18px] ">
//                 Questions, comments, or suggestions? Simply
//                 <br /> fill in the form and we’ll be in touch shortly.
//               </p>
//             </div>
    
//             {/* Right Form - increased size */}
//             <div className="md:w-1/2 min-h-[650px] bg-white p-8 rounded-[10px] shadow-lg">
//               <form className="space-y-6" onSubmit={handleSubmit}>
//                 {/* Name Fields */}
//                 <div className="flex gap-4">
//                   <div className="w-1/2">
//                     <label className="block text-sm font-medium  font-bold">
//                       First name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       name="first_name"
//                       placeholder="Ram"
//                       value={formData.first_name}
//                       onChange={handleChange}
//                       className="mt-1 w-full border rounded-md px-4 py-3 bg-gray-100 focus:border-[1px] border-solid border-[#00B0BA]"
//                     />
//                   </div>
//                   <div className="w-1/2">
//                     <label className="block text-sm font-medium  font-bold">
//                       Last Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="last_name"
//                       required
//                       placeholder="Prakash"
//                       className="mt-1 w-full border rounded-md px-4 py-3 bg-gray-100"
//                       value={formData.last_name}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
    
//                 {/* Email */}
//                 <div>
//                   <label className="block text-sm font-medium  font-bold">
//                     Email <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     placeholder="ramprakash@example.com"
//                     className="mt-1 w-full border rounded-md px-4 py-3 bg-gray-100"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
    
//                 {/* Contact Number */}
//                 <div>
//                   <label className="block text-sm font-medium  ">
//                     Contact Number <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="contact_number"
//                     required
//                     placeholder="+91 0123456789"
//                     className="mt-1 w-full border rounded-md px-4 py-3 bg-gray-100"
//                     value={formData.contact_number}
//                     onChange={handleChange}
//                   />
//                 </div>
    
//                 {/* Subject Dropdown */}
//             <div>
//               <label className="block text-sm font-medium">
//                 Select Subject <span className="text-red-500">*</span>
//               </label>
//               <div className="relative mt-1">
//                 <select
//                   name="subject"
//                   required
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className={`w-full border rounded-md pl-5 pr-10 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${formData.subject === "" ? "text-gray-400 bg-gray-100" : "text-black bg-[#e8f0fe]"
//                     }`}
//                 >
//                   <option value="" disabled hidden>
//                     Select a Subject
//                   </option>
//                   <option value="Support">Support</option>
//                   <option value="Sales">Sales</option>
//                   <option value="Other">Other</option>
//                 </select>

//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <svg
//                     className="fill-current h-4 w-4"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>


//             {/* Message */}
//             <div>
//               <label className="block text-sm font-medium  ">
//                 Message <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 placeholder="Your Message (Max 500 Characters)"
//                 maxLength={500}
//                 rows={5}
//                 name="message"
//                 className="mt-1 w-full rounded-md px-4 py-3 bg-[#e8f0fe]"
//                 value={formData.message}
//                 required
//                 onChange={handleChange}
//               />
//             </div>
    
//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   style={{
//                     background: `linear-gradient(to right, #007c82 0%,rgb(4, 68, 75),rgb(3, 89, 94) 100%)`,
//                   }}
//                   className="w-full bg-gradient-to-r from-cyan-700 to-cyan-500 text-white font-medium py-3 rounded-md hover:opacity-90 text-lg"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>
//       );
//     };

// export default ContactForm;
import React, { useState } from "react";
import axios from "axios";
import formBanner from "../../assets/pricing-pg/formBanner.jpg"; // Adjust path as needed

//Connect fastapi
const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    subject: "",
    message: "",
  });

  const [nameErrors, setNameErrors] = useState({
    first_name: false,
    last_name: false,
  });

  const [emailError, setEmailError] = useState(false);
  const [contactError, setContactError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only letters for first/last name
    if (name === "first_name" || name === "last_name") {
      const isValid = /^[A-Za-z\s]*$/.test(value);
      setNameErrors((prev) => ({
        ...prev,
        [name]: !isValid,
      }));
    }

    // Validate email format (only @gmail.com allowed)
    if (name === "email") {
      const emailRegex = /^[^\s@]+@gmail\.com$/;
      setEmailError(!emailRegex.test(value));
    }

    // Validate phone number (only digits allowed)
    if (name === "contact_number") {
      const isValidNumber = /^[0-9]*$/.test(value);
      setContactError(!isValidNumber);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailError) {
      alert("Please enter a valid Gmail address (example@gmail.com).");
      return;
    }
    if (contactError) {
      alert("Please enter only digits in contact number.");
      return;
    }
    try {
      await axios.post("http://localhost:8000/contact", {
        ...formData,
        source: "contact_us",
      });
      alert("Message sent successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        contact_number: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      className="w-full h-[960px] bg-cover bg-center flex items-center justify-center 
        max-[440px]:flex max-[440px]:flex-col max-[440px]:items-center max-[440px]:justify-center 
        max-[440px]:w-[440px] max-[440px]:min-h-[974px] 
        max-[440px]:pt-[40px] max-[440px]:pr-[20px] max-[440px]:pb-[40px] max-[440px]:pl-[20px] 
        max-[440px]:gap-[32px]"
      style={{
        backgroundImage: `url(${formBanner})`,
      }}
    >
      <div className="max-w-[1400px] w-full rounded-xl flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-10 gap-10">
        {/* Left Text Content */}
        <div
          className="md:w-1/2 text-center md:text-left flex flex-col justify-center
            max-[440px]:flex max-[440px]:flex-col
            max-[440px]:w-[400px] max-[440px]:gap-[12px] max-[440px]:min-h-[95px]"
        >
          <h2
            className="text-[80px] leading-[85px] font-bold text-white text-center
              max-[440px]:text-[24px] max-[440px]:leading-[43px] max-[440px]:font-[700]
              max-[440px]:w-[197px] max-[440px]:h-[43px] max-[440px]:mx-auto 
              max-[440px]:flex max-[440px]:items-center max-[440px]:justify-center"
          >
            Let's talk with us
          </h2>

          <p
            className="text-[#F5F5F5] mt-4 min-h-[51px] text-center text-[18px]
              max-[440px]:w-[400px] max-[440px]:h-[40px] max-[440px]:text-[14px]
              max-[440px]:leading-[140%] max-[440px]:font-[400] max-[440px]:mx-auto"
          >
            Questions, comments, or suggestions? Simply
            <br className="max-[440px]:hidden" />
            fill in the form and we’ll be in touch shortly.
          </p>
        </div>

        {/* Right Form - increased size */}
        <div
          className="md:w-1/2 min-h-[650px] bg-white p-8 rounded-[10px] shadow-lg
            max-[440px]:w-[400px] max-[440px]:rounded-[16px] max-[440px]:p-[24px] 
            max-[440px]:gap-[21px] max-[440px]:h-auto"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="flex flex-col max-[440px]:flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium font-bold">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="first_name"
                  placeholder="Ram"
                  value={formData.first_name}
                  onChange={handleChange}
                  className={`mt-1 w-full border rounded-md px-4 py-3 focus:outline-none focus:border-[1px] border-solid ${
                    nameErrors.first_name ? "bg-red-200 border-red-500" : "bg-gray-100 border-[#00B0BA]"
                  }`}
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium font-bold">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder="Prakash"
                  value={formData.last_name}
                  onChange={handleChange}
                  className={`mt-1 w-full border rounded-md px-4 py-3 focus:outline-none focus:border-[1px] border-solid ${
                    nameErrors.last_name ? "bg-red-200 border-red-500" : "bg-gray-100 border-[#00B0BA]"
                  }`}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium font-bold">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="ramprakash@gmail.com"
                className={`mt-1 w-full border rounded-md px-4 py-3 focus:outline-none focus:border-[1px] border-solid ${
                  emailError ? "bg-red-200 border-red-500" : "bg-gray-100 border-[#00B0BA]"
                }`}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contact_number"
                required
                placeholder="0123456789"
                className={`mt-1 w-full border rounded-md px-4 py-3 focus:outline-none focus:border-[1px] border-solid ${
                  contactError ? "bg-red-200 border-red-500" : "bg-gray-100 border-[#00B0BA]"
                }`}
                value={formData.contact_number}
                onChange={handleChange}
              />
            </div>

            {/* Subject Dropdown */}
            <div>
              <label className="block text-sm font-medium">
                Select Subject <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-1">
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full border rounded-md pl-5 pr-10 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                    formData.subject === "" ? "text-gray-400 bg-gray-100" : "text-black bg-[#e8f0fe]"
                  }`}
                >
                  <option value="" disabled hidden>
                    Select a Subject
                  </option>
                  <option value="Support">Support</option>
                  <option value="Sales">Sales</option>
                  <option value="Other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Your Message (Max 500 Characters)"
                maxLength={500}
                rows={5}
                name="message"
                className="mt-1 w-full rounded-md px-4 py-3 bg-[#e8f0fe]"
                value={formData.message}
                required
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                background: `linear-gradient(to right, #007c82 0%,rgb(4, 68, 75),rgb(3, 89, 94) 100%)`,
              }}
              className="w-full bg-gradient-to-r from-cyan-700 to-cyan-500 text-white font-medium py-3 rounded-md hover:opacity-90 text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
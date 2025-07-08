//import React from 'react';
import React, { useState } from "react";
import axios from "axios";
import formBanner from "../../assets/pricing-pg/formBanner.jpg";

const AfterContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await axios.post("http://localhost:8000/contact", {
        ...formData,
        source: "contact_us",
      });
      
      setIsSubmitted(true);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        contact_number: "",
        subject: "",
        message: "",
      });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full h-[960px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${formBanner})`,
      }}
    >
      <div className="max-w-[1400px] w-full rounded-xl flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-10 gap-10">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-[80px] leading-[85px] font-bold text-[white] text-center">
            Let's talk <br /> with us
          </h2>
          <p className="text-[#F5F5F5] mt-4 min-h-[51px] text-center text-[18px]">
            Questions, comments, or suggestions? Simply
            <br /> fill in the form and we'll be in touch shortly.
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 min-h-[650px] bg-white p-8 rounded-[10px] shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium font-bold">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="first_name"
                  placeholder="Ram"
                  value={formData.first_name}
                  onChange={(e) => {
                    if (/^[A-Za-z\s]*$/.test(e.target.value)) {
                      handleChange(e);
                    }
                  }}
                  className={`mt-1 w-full border rounded-md px-4 py-3 focus:border-[1px] border-solid border-[#00B0BA] ${
                    formData.first_name ? "bg-[#E8F0FE]" : "bg-gray-100"
                  }`}
                />
                {formData.first_name && !/^[A-Za-z\s]+$/.test(formData.first_name) && (
                  <p className="text-red-500 text-xs mt-1">Only letters and spaces allowed</p>
                )}
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium font-bold">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder="Prakash"
                  value={formData.last_name}
                  onChange={(e) => {
                    if (/^[A-Za-z\s]*$/.test(e.target.value)) {
                      handleChange(e);
                    }
                  }}
                  className={`mt-1 w-full border rounded-md px-4 py-3 ${
                    formData.last_name ? "bg-[#E8F0FE]" : "bg-gray-100"
                  }`}
                />
                {formData.last_name && !/^[A-Za-z\s]+$/.test(formData.last_name) && (
                  <p className="text-red-500 text-xs mt-1">Only letters and spaces allowed</p>
                )}
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
                placeholder="ramprakash@example.com"
                value={formData.email}
                onChange={handleChange}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                className={`mt-1 w-full border rounded-md px-4 py-3 ${
                  formData.email ? "bg-[#E8F0FE]" : "bg-gray-100"
                }`}
                title="Please enter a valid email address (e.g., user@example.com)"
              />
              {formData.email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email) && (
                <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
              )}
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
                placeholder="+91 0123456789"
                value={formData.contact_number}
                onChange={(e) => {
                  if (/^[0-9+\-\s]*$/.test(e.target.value)) {
                    handleChange(e);
                  }
                }}
                pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                className={`mt-1 w-full border rounded-md px-4 py-3 ${
                  formData.contact_number ? "bg-[#E8F0FE]" : "bg-gray-100"
                }`}
                title="Please enter a valid phone number (e.g., +91 1234567890)"
              />
              {formData.contact_number && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(formData.contact_number) && (
                <p className="text-red-500 text-xs mt-1">Please enter a valid phone number</p>
              )}
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
                    formData.subject ? "text-black bg-[#E8F0FE]" : "text-gray-400 bg-gray-100"
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
                value={formData.message}
                required
                onChange={handleChange}
                className={`mt-1 w-full rounded-md px-4 py-3 ${
                  formData.message ? "bg-[#E8F0FE]" : "bg-gray-100"
                }`}
              />
              <div className="text-xs text-gray-500 text-right mt-1">
                {formData.message?.length || 0}/500 characters
              </div>
            </div>

            {/* Submit Button */}
<button
  type="submit"
  disabled={isSubmitting || isSubmitted}
  className={`w-full text-white font-medium py-3 rounded-md text-lg transition-all ${
    isSubmitting ? "opacity-70" : ""
  } ${
    isSubmitted ? "bg-green-600" : ""
  }`}
  style={{
    background: isSubmitted 
      ? "" 
      : "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)",
  }}
>
  {isSubmitting ? (
    <span className="flex items-center justify-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      Submitting...
    </span>
  ) : isSubmitted ? (
    "Submitted! ✓"
  ) : (
    "Submit"
  )}
</button>

            {submitError && (
              <p className="text-red-500 text-center mt-2">{submitError}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default AfterContactForm;
// <section
//   className="w-full h-[921px] bg-cover bg-center flex items-center justify-center"
//   style={{
//     backgroundImage: `url(${formBanner})`,
//   }}
// >
//   <div className="max-w-[1400px]  rounded-xl  flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-10 gap-10">
//     {/* Left Text Content */}
//     <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">

//       <h2 className="text-[80px] leading-[85px] font-bold text-[white] text-center">
//         Let's talk <br /> with us
//       </h2>
//       <p className="text-[#F5F5F5] mt-4  min-h-[51px] text-center text-[18px] ">
//         Questions, comments, or suggestions? Simply<br/> fill in the form and we’ll be in touch shortly.
//       </p>
//     </div>

//     {/* Right Form */}
//     {/* <div className="  max-w-[730px] min-h-[80px] bg-white p-6 rounded-[10px]"> */}
//     <div className="w-[730px] h-[650px] bg-white p-6 rounded-[10px] overflow-auto">
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         {/* Name Fields */}
//         <div className="flex gap-4">
//           <div className="w-1/2">
//             <label className="block text-sm font-medium text-gray-700">
//               First name<span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="first_name"
//               placeholder="Ram"
//               value={formData.first_name}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100 focus:border-[1px] border-solid border-[#00B0BA]"
//             />
//           </div>
//           <div className="w-1/2">
//             <label className="block text-sm font-medium text-gray-700">
//               Last Name
//             </label>
//             <input
//               type="text"
//               name="last_name"
//               placeholder="Prakash"
//               className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100"
//               value={formData.last_name}
//               onChange={handleChange}
//               //readOnly
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Email<span className="text-red-500">*</span>
//           </label>
//           <input
//             type="email"
//             name="email"
//             placeholder="ramprakash@example.com"
//             className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Contact Number */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Contact Number<span className="text-red-500">*</span>
//           </label>
//           <input
//             type="tel"
//             name="contact_number"
//             placeholder="+91 0123456789"
//             className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100"
//             value={formData.contact_number}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Subject Dropdown */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Select Subject<span className="text-red-500">*</span>
//           </label>
//           <select
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100"
//           >
//             <option value="">Select a Subject</option>
//             <option value="Support">Support</option>
//             <option value="Sales">Sales</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         {/* Message */}
//         <div>
//           <textarea
//             placeholder="Your Message (Max 500 Characters)"
//             maxLength={500}
//             rows={4}
//             name="message"
//             className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100"
//             value={formData.message}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-cyan-700 to-cyan-500 text-white font-medium py-2 rounded-md hover:opacity-90"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   </div>
// </section>
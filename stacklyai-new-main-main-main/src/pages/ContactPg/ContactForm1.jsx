import React, { useState } from 'react';
import axios from 'axios';
import Group1 from '../../assets/contact/Group1.png';
import Group2 from '../../assets/contact/Group2.png';
import Group3 from '../../assets/contact/Group3.png';
import Frame from '../../assets/contact/Frame.png';

const ContactForm1 = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        subject: '',
        message: ''
    });

    const [focusedFields, setFocusedFields] = useState({
        firstName: false,
        lastName: false,
        email: false,
        contactNumber: false,
        subject: false,
        message: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFocus = (field) => {
        setFocusedFields(prev => ({
            ...prev,
            [field]: true
        }));
    };

    const handleBlur = (field) => {
        setFocusedFields(prev => ({
            ...prev,
            [field]: false
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const payload = {
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                contact_number: formData.contactNumber,
                subject: formData.subject,
                message: formData.message,
                source: 'Contact_form'
            };

            const res = await axios.post(
                'http://localhost:8000/contact',
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            setSubmitStatus({
                success: true,
                message: 'Thank you for contacting us! We will get back to you soon.'
            });

            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                contactNumber: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                success: false,
                message: 'There was an error submitting your form. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-[1440px] h-[694px] flex">
            {/* Left Side - Background Image */}
            <div className="relative w-[610px] h-[694px] bg-[#0000000A] overflow-hidden">
                {/* Frame (Group4) - top-left */}
                <img
                    src={Group3}
                    alt="Frame"
                    className="absolute top-[-80px] left-[-80px] w-[190px] h-[190px] z-10"
                />

                {/* Group3 - top-right */}
                <img
                    src={Frame}
                    alt="Group3"
                    className="absolute top-0 right-0 w-[181px] h-[197px] z-10"
                />

                {/* Group1 - slightly above Group2 */}
                <img
                    src={Group1}
                    alt="Group1"
                    className="absolute top-[130px] left-[27%] transform -translate-x-1/2 -translate-y-full w-[198px] h-[88px] z-20"
                />

                {/* Group2 - center */}
                <img
                    src={Group2}
                    alt="Group2"
                    className="absolute top-[270px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[239px] z-10"
                />

                {/* Text Block */}
                <div className="absolute bottom-[80px] left-[250px] transform -translate-x-1/2 w-[465px] h-[193px] text-center px-4 z-30">
                    <h1 className="w-[338px] text-[32px] text-left font-bold leading-snug text-black mb-4">
                        Let's <span className="bg-gradient-to-b from-[#00B0BA] to-[#005054] bg-clip-text text-transparent">Talk, Design, and Create</span> Some Magic!
                    </h1>
                    <p className="w-[538px] text-left text-[18px] text-black leading-relaxed">
                        Whether you're here to build your dream home design, collaborate, or just curious about how AI can style your space better than your imagination? Reach out us!
                    </p>
                </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="w-[750px] h-[694px] flex items-center justify-center">
                <div className="w-[627px]">
                    {submitStatus && (
                        <div className={`mb-4 p-4 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {submitStatus.message}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-[45px]"
                    >
                        {/* First Name & Last Name Row */}
                        <div className="flex gap-[16px] w-full">
                            <div className="w-[299.5px] relative">
                                <label className={`absolute left-2 transition-all duration-200 ${(focusedFields.firstName || formData.firstName) ? 'top-0 text-[13px] font-bold text-[#000000]' : 'top-3 text-gray-400'}`}>
                                    First Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('firstName')}
                                    onBlur={() => handleBlur('firstName')}
                                    className="w-full h-[40px] border-0 border-b border-gray-300 focus:outline-none px-2 pt-4 bg-transparent text-[#007B82]"
                                    required
                                />
                                <div className="h-[1px] bg-gradient-to-r from-[#007B82] to-[#00B0BA]"></div>
                            </div>
                            <div className="w-[299.5px] relative">
                                <label className={`absolute left-2 transition-all duration-200 ${(focusedFields.lastName || formData.lastName) ? 'top-0 text-[13px] font-bold text-[#000000]' : 'top-3 text-gray-400'}`}>
                                    Last Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('lastName')}
                                    onBlur={() => handleBlur('lastName')}
                                    className="w-full h-[40px] border-0 border-b border-gray-300 focus:outline-none px-2 pt-4 bg-transparent text-[#007B82]"
                                    required
                                />
                                <div className="h-[1px] bg-gradient-to-r from-[#007B82] to-[#00B0BA]"></div>
                            </div>
                        </div>

                        {/* Email & Contact Number Row */}
                        <div className="flex gap-[16px] w-full">
                            <div className="w-[299.5px] relative">
                                <label className={`absolute left-2 transition-all duration-200 ${(focusedFields.email || formData.email) ? 'top-0 text-[13px] font-bold text-[#000000]' : 'top-3 text-gray-400'}`}>
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('email')}
                                    onBlur={() => handleBlur('email')}
                                    className="w-full h-[40px] border-0 border-b border-gray-300 focus:outline-none px-2 pt-4 bg-transparent text-[#007B82]"
                                    required
                                />
                                <div className="h-[1px] bg-gradient-to-r from-[#007B82] to-[#00B0BA]"></div>
                            </div>
                            <div className="w-[299.5px] relative">
                                <label className={`absolute left-2 transition-all duration-200 ${(focusedFields.contactNumber || formData.contactNumber) ? 'top-0 text-[13px] font-bold text-[#000000]' : 'top-3 text-gray-400'}`}>
                                    Contact Number<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('contactNumber')}
                                    onBlur={() => handleBlur('contactNumber')}
                                    className="w-full h-[40px] border-0 border-b border-gray-300 focus:outline-none px-2 pt-4 bg-transparent text-[#007B82]"
                                    required
                                />
                                <div className="h-[1px] bg-gradient-to-r from-[#007B82] to-[#00B0BA]"></div>
                            </div>
                        </div>

                        {/* Subject Dropdown */}
                        <div className="w-full relative">
                            <label className={`absolute left-2 transition-all duration-200 ${(focusedFields.subject || formData.subject) ? 'top-0 text-[13px] font-bold text-[#000000]' : 'top-3 text-gray-400'}`}>
                                Subject<span className="text-red-500">*</span>
                            </label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                onFocus={() => handleFocus('subject')}
                                onBlur={() => handleBlur('subject')}
                                className="w-full h-[40px] border-0 border-b border-gray-300 focus:outline-none px-2 pt-4 bg-transparent appearance-none text-[#007B82]"
                                required
                            >
                                <option value="" disabled hidden></option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Support">Support</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Other">Other</option>
                            </select>
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="h-[1px] bg-gradient-to-r from-[#007B82] to-[#00B0BA]"></div>
                        </div>

                        {/* Message Textarea */}
                        <div className="w-full relative">
                            <label
                                className={`absolute left-2 transition-all duration-200 bg-white px-1 
      ${focusedFields.message || formData.message
                                        ? 'top-[-30px] text-[13px] font-bold text-[#000000]'
                                        : 'top-9 text-gray-400'
                                    }`}
                            >
                                Your Message<span className="text-red-500">*</span>
                            </label>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => handleFocus('message')}
                                onBlur={() => handleBlur('message')}
                                maxLength={500}
                                placeholder="Your Message"
                                className="w-full h-[60px] border-0 border-b border-gray-300 
               focus:outline-none px-2 pt-6 pb-1 bg-transparent resize-none 
               overflow-y-auto text-[#007B82] placeholder-transparent"
                                required
                            />

                            <div className="h-[1px] bg-gradient-to-r from-[#007B82] to-[#00B0BA]"></div>

                            <div className="text-right text-xs text-gray-500">
                                {formData.message.length}/500
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-[627px] h-[45px] rounded-md hover:opacity-90 transition-opacity duration-300 relative overflow-hidden"
                            style={{
                                background: '#007B82',
                                border: '1px solid #007B82',
                                borderRadius: '6px'
                            }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <span className="text-white font-medium">Sending...</span>
                            ) : (
                                <span className="text-white font-medium">Send Message</span>
                            )}
                            <div
                                className="absolute inset-0 border rounded-md pointer-events-none"
                                style={{
                                    borderImage: 'linear-gradient(180deg, #007B82 0%, #00B0BA 100%) 1',
                                    borderRadius: '6px'
                                }}
                            ></div>
                        </button>
                    </form>

                    {/* Footer Text */}
                    <p className="text-left mt-14 text-[16px] text-black">
                        *Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactForm1;
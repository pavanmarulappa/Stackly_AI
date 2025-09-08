import React, { useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";

// Common Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Public Pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Pricing from "./pages/PricingPage/Pricing";
import Api from "./pages/API/Api";
import Contact from "./pages/ContactPg/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignupOtp from "./pages/forgetPage/SignupOtp";
import HeroForgetPg from "./pages/forgetPage/HeroForgetPg";
import Otp from "./pages/forgetPage/Otp";
import ResetPassword from "./pages/forgetPage/ResetPassword";
import ResetPopup from "./pages/forgetPage/ResetPopup";
import Form from "./pages/Home/Form";
import SignUpPopUp from "./pages/forgetPage/SignUpPopUp";

// Authenticated Pages
import AfterHome from "./pages/AfterSignHome/AfterHome";
import AfterProducts from "./pages/AfterProductPage/AfterProducts";
import AfterPricing from "./pages/AfterPricing/AfterPricing";
import AfterApi from "./pages/AfterApi/AfterApi";
import AfterContact from "./pages/AfterContactPage/AfterContact";
import AfterBilling from "./pages/AfterPricing/AfterBilling";
import AfterPayment from "./pages/AfterPricing/AfterPayment";
import AfterPaymentProcessing from "./pages/AfterPricing/AfterPaymentProcessing";
import AfterUiPlan from "./pages/AfterApi/AfterUiPlan";
import AfterPay from "./pages/AfterPricing/AfterPay";
import AfterConformationPage from "./pages/AfterPricing/AfterConformationPage";
import AfterConformationPage1 from "./pages/AfterPricing/AfterConformationPage1";
import AfterHeroPricing from "./pages/AfterPricing/AfterHeroPricing";
import Cancel from "./pages/AfterPricing/Cancel";
import FormAfter from "./pages/AfterSignHome/FormAfter";

// Profile Pages
import Profile from "./pages/Profile/Profile";
import HeroProfile from "./pages/Profile/HeroProfile";
import Myplan from "./pages/Profile/Myplan";
import Mybilling from "./pages/Profile/Mybilling";
import HelpCenter from "./pages/Profile/HelpCenter";

// Design Forms
import ExteriorForm from "./pages/AfterSignHome/ExteriorForm";
import OutdoorForm from "./pages/AfterSignHome/OutdoorForm";
import ImageGeneration from "./pages/Products/ImageGeneration";

// Explore Design Pages
import LivingRoom from "./pages/ExploreDesign/LivingRoom";
import Office from "./pages/ExploreDesign/Office";

//After Contact


// Temporary placeholders for other rooms (you can create files later)
function Bedroom() {
  return <div><p>Bedroom</p></div>;
}
function Kitchen() {
  return <div><p>Kitchen</p></div>;
}
function Bathroom() {
  return <div><p>Bathroom</p></div>;
}
function StudyRoom() {
  return <div><p>Study Room</p></div>;
}

// Auth Callback
import AuthCallback from "./components/AuthCallback";

export default function App() {
  const { userInfo, setUserInfo, loading } = useContext(UserContext);

  console.log("App.jsx userInfo:", userInfo);

  if (loading) return <div className="text-center p-8">Loading...</div>;

  return (
    <>
      <ScrollToTop /> {/* ensures all pages start at top */}
      <div className="overflow-x-hidden">
        <Header />

        <Routes>
          {/* Conditional Home */}
          <Route path="/" element={userInfo.userId ? <AfterHome /> : <Home />} />
          <Route path="/afterhome" element={<AfterHome />} />

          {/* Conditional Pages */}
          <Route path="/products" element={userInfo.userId ? <AfterProducts /> : <Products />} />
          <Route path="/pricing" element={userInfo.userId ? <AfterPricing /> : <Pricing />} />
          <Route path="/api" element={userInfo.userId ? <AfterApi /> : <Api />} />
          <Route path="/contact" element={userInfo.userId ? <AfterContact /> : <Contact />} />

          {/* Auth Pages */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/signupotp" element={<SignupOtp />} />

          {/* Forget Password Flow */}
          <Route path="/heroforgetpg" element={<HeroForgetPg />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/resetpopup" element={<ResetPopup />} />
          <Route path="/signuppopup" element={<SignUpPopUp />} />

          {/* After Payment Pages */}
          <Route path="/afterbilling" element={<AfterBilling />} />
          <Route path="/afteruiplan" element={<AfterUiPlan />} /> 
          <Route path="/afterpay" element={<AfterPay />} />
          <Route path="/afterpayment" element={<AfterPayment />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/afterpaymentprocessing" element={<AfterPaymentProcessing />} />
          <Route path="/afterconformationpage" element={<AfterConformationPage />} />
          <Route path="/afterconformationpage1" element={<AfterConformationPage1 />} />
          <Route path="/afterheropricing" element={<AfterHeroPricing />} />

          {/* Profile Pages */}
          <Route path="/profile" element={<Profile />} />

          {/* Design Form Pages */}
          <Route path="/form" element={<Form />} />
          <Route path="/formafter" element={<FormAfter />} />
          <Route path="/exteriorform" element={<ExteriorForm />} />
          <Route path="/outdoorform" element={<OutdoorForm />} />
          <Route path="/imagegeneration" element={<ImageGeneration />} />

          {/* Explore Flow */}
          <Route path="/explore/livingroom" element={<LivingRoom />} />
          <Route path="/explore/office" element={<Office />} /> {/* <-- added Office route */}
          <Route path="/explore/bedroom" element={<Bedroom />} />
          <Route path="/explore/kitchen" element={<Kitchen />} />
          <Route path="/explore/bathroom" element={<Bathroom />} />
          <Route path="/explore/studyroom" element={<StudyRoom />} />

          {/* Auth Callback */}
          <Route path="/auth-callback" element={<AuthCallback setUserInfo={setUserInfo} />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

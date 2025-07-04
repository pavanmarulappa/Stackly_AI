// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import DragSize from "./../../assets/product-pg/dragsize.png";
// import Search from "./../../assets/product-pg/search.png";
// import Input from "./../../assets/product-pg/input.png";
// import Download from "./../../assets/product-pg/download.png";

// import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
// import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
// import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
// import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
// import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
// import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
// import DraggableImages from "../../components/DraggableImages";
// import Banner from "../../assets/product-pg/bannercode.png";
// import Banner1 from "../../assets/product-pg/bannercode1.png";
// import Star from "../../assets/product-pg/star.png";
// import { Link } from "react-router-dom";

// export default function DraggableImagesProducts() {
//   const navigate = useNavigate();
//   const [fullscreenImage, setFullscreenImage] = useState(null);
//   const [popupImage, setPopupImage] = useState(null);
//   const [showOriginal, setShowOriginal] = useState({
//     livingRoom: true,
//     kitchen: true,
//     kidsRoom: true,
//     diningRoom: true,
//     laundryRoom: true,
//     studyRoom: true,
//   });

//   const handleFullscreen = (image) => {
//     setFullscreenImage(image);
//   };

//   const handleDownload = (imageUrl) => {
//     const link = document.createElement("a");
//     link.href = imageUrl;
//     link.download = `stackly-design-${Date.now()}.png`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleInputRedirect = (roomType, originalImage) => {
//     navigate("/products", {
//       state: {
//         scrollToForm: true,
//         selectedRoom: roomType,
//         originalImage: originalImage,
//       },
//       replace: true,
//     });
//   };

//   const toggleOriginalImage = (room, originalImage) => {
//     setPopupImage(originalImage);
//     setShowOriginal((prev) => ({
//       ...prev,
//       [room]: !prev[room],
//     }));
//   };

//   const RoomCard = ({ roomName, originalImage, transformedImage, roomKey }) => (
//     <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
//       <div className="max-w-[520px] min-h-[35px] flex justify-between">
//         <div className="text-[24px] font-semibold leading-[35px] spacing-[8px] text-center text-[#2A2A2A]">
//           {roomName}
//         </div>
//         <div
//           className="w-[28px] h-[28px] cursor-pointer hover:opacity-80"
//           onClick={() => handleFullscreenn(transformedImage)}
//         >
//           <Link to="/Sign-in">
//             {" "}
//             <img src={DragSize} alt="Fullscreen" title="View fullscreen" />
//           </Link>
//         </div>
//       </div>
//       <div className="max-w-[522px] w-full h-auto rounded-[4px]">
//         <DraggableImages
//           imageRight={originalImage}
//           imageLeft={transformedImage}
//         />
//       </div>
//       <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
//         <div
//           className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80"
//           onClick={() => toggleOriginalImagee(roomKey, originalImage)}
//         >
//           <Link to="/Sign-in">
//           <img src={Search} alt="Toggle original" title="View original image" />
//             {" "}
//             <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//               Show
//             </div>
//           </Link>
//         </div>
//         <div
//           className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80"
//           onClick={() => handleInputRedirectt(roomName, originalImage)}
//         >
//           <Link to="/Sign-in">
//           <img src={Input} alt="Input" title="Go to input form" />
//             {" "}
//             <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//               Input
//             </div>
//           </Link>
//         </div>
//         <div
//           className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80"
//           onClick={() => handleDownloadd(transformedImage)}
//         >
//           <Link to="/sign-in">
//           <img src={Download} alt="Download" title="Download image" />
//             <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//               Download
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div>
//       {/* Fullscreen Modal */}
//       {fullscreenImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
//           <div className="relative max-w-full max-h-full">
//             <img
//               src={fullscreenImage}
//               alt="Fullscreen preview"
//               className="max-w-full max-h-[90vh] object-contain"
//             />
//             <button
//               className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
//               onClick={() => setFullscreenImagee(null)}
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Original Image Popup Modal */}
//       {popupImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
//           <div className="relative max-w-full max-h-full">
//             <img
//               src={popupImage}
//               alt="Original preview"
//               className="max-w-full max-h-[90vh] object-contain"
//             />
//             <button
//               className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
//               onClick={() => setPopupImagee(null)}
//             >
//               ×
//             </button>
//             <div className="absolute bottom-4 left-0 right-0 text-center text-white text-lg">
//               Original Image - Click outside to close
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="max-w-[100vw] min-h-[720px] flex flex-col items-center justify-center gap-5 bg-gradient-to-l from-[#007B8214] to-[white]">
//         <h1 className="w-full max-w-[1064px] text-center font-bold text-[70px] leading-[78px] mt-[150px]">
//           <span className="text-[#009A98]">Stackly.AI</span> Interior Designer
//         </h1>

//         <p className="max-w-[1064px] min-h-[56px] text-[22px] leading-[28px] text-center font-[400] text-[#0F0F0F]">
//           You can now effortlessly bring your design dreams to life using the
//           power of AI. Simply take a photo using your camera and watch as our
//           advanced AI algorithms work their magic.
//         </p>

//         <div className="max-w-[1064px] min-h-[28px] text-[18px] leading-[28px] font-semibold text-center text-[#007B82]">
//           Best quality, lightning fast used by homeowners and professionals
//         </div>

//         <div className="absolute">
//           <img
//             src={Banner}
//             alt="banner1"
//             className="absolute left-[-60px] top-[70px]"
//           />
//           <img src={Banner1} alt="banner2" className="" />
//         </div>

//         <div className="w-[52.38px] h-[50px] relative top-[-300px] left-[-650px]">
//           <img src={Star} alt="star" />
//         </div>
//         <div className="w-[30px] h-[28.64px] relative top-[-330px] left-[-630px]">
//           <img src={Star} alt="star" />
//         </div>
//         <div className="w-[52.38px] h-[50px] relative top-[50px] left-[550px]">
//           <img src={Star} alt="star" />
//         </div>
//         <div className="w-[30px] h-[28.64px] relative top-[20px] left-[580px]">
//           <img src={Star} alt="star" />
//         </div>
//       </div>

//       {/* DraggableImages Section */}
//       <div>
//         <div className="max-w-[100vw] h-auto">
//           <div className="w-full min-h-[158px] flex flex-col justify-center items-center gap-[24px]">
//             <div className="w-[1026px] min-h-[78px] font-bold text-[48px] leading-[78px] text-center text-gradient-to-l from-[#007B82] to-[#001A1C]">
//               Spaces That Inspire You
//             </div>
//             <div className="w-[1026px] min-h-[56px] text-[400] text-[24px] leading-[28px] text-center text-[#000000]">
//               Explore handpicked collections for every corner of your home —
//               from cozy balconies to focused work zones.
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-15 mt-10 p-5 sm:p-10">
//             <RoomCard
//               roomName="Living Room"
//               originalImage={dragImg1_1}
//               transformedImage={dragImg1_2}
//               roomKey="livingRoom"
//             />

//             <RoomCard
//               roomName="Kitchen"
//               originalImage={dragImg2_1}
//               transformedImage={dragImg2_2}
//               roomKey="kitchen"
//             />

//             <RoomCard
//               roomName="Kids Room"
//               originalImage={dragImg3_1}
//               transformedImage={dragImg3_2}
//               roomKey="kidsRoom"
//             />

//             <RoomCard
//               roomName="Dining Room"
//               originalImage={dragImg1_2}
//               transformedImage={dragImg1_1}
//               roomKey="diningRoom"
//             />

//             <RoomCard
//               roomName="Laundry Room"
//               originalImage={dragImg2_2}
//               transformedImage={dragImg2_1}
//               roomKey="laundryRoom"
//             />

//             <RoomCard
//               roomName="Study Room"
//               originalImage={dragImg3_2}
//               transformedImage={dragImg3_1}
//               roomKey="studyRoom"
//             />
//           </div>

//           <div className="w-[146px] h-[38px] rounded-[8px] border-[1px] border-solid border-[#007B82] px-[12px] py-[8px] flex justify-center items-center gap-[8px] relative top-[-860px] right-[-1350px]">
//             <select name="" id="" className="text-[#007B82] cursor-pointer">
//               <option selected disabled value="">Choose Area</option>
//               <option value="" className="text-[#2a2a2a]">
//                 Floor
//               </option>
//               <option value="" className="text-[#2a2a2a]">
//                 Office
//               </option>
//               <option value="" className="text-[#2a2a2a]">
//                 Gym
//               </option>
//               <option value="" className="text-[#2a2a2a]">
//                 Palcony
//               </option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DragSize from "./../../assets/product-pg/dragsize.png";
import Search from "./../../assets/product-pg/search.png";
import Input from "./../../assets/product-pg/input.png";
import Download from "./../../assets/product-pg/download.png";

import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
import DraggableImages from "../../components/DraggableImages";
import Banner from "../../assets/product-pg/bannercode.png";
import Banner1 from "../../assets/product-pg/bannercode1.png";
import Star from "../../assets/product-pg/star.png";
import { Link } from "react-router-dom";

export default function DraggableImagesProducts() {

  const [selectedArea, setSelectedArea] = useState("");

const handleAreaChange = (e) => {
  const value = e.target.value;
  setSelectedArea(value);
  if (value) {
    navigate("/sign-in", { 
      state: { selectedArea: value } 
    });
  }
};

  const navigate = useNavigate();
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [popupImage, setPopupImage] = useState(null);
  const [showOriginal, setShowOriginal] = useState({
    livingRoom: true,
    kitchen: true,
    kidsRoom: true,
    diningRoom: true,
    laundryRoom: true,
    studyRoom: true,
  });

  const handleFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `stackly-design-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInputRedirect = (roomType, originalImage) => {
    navigate("/products", {
      state: {
        scrollToForm: true,
        selectedRoom: roomType,
        originalImage: originalImage,
      },
      replace: true,
    });
  };

  const toggleOriginalImage = (room, originalImage) => {
    setPopupImage(originalImage);
    setShowOriginal((prev) => ({
      ...prev,
      [room]: !prev[room],
    }));
  };

  const RoomCard = ({ roomName, originalImage, transformedImage, roomKey }) => (
    <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2 max-[440px]:w-[188px] max-[440px]:h-[188.02px] max-[440px]:gap-[7.51px]">
       <div className="max-w-[520px] min-h-[35px] flex justify-between max-[440px]:w-[188px] max-[440px]:h-[20px] max-[440px]:justify-between">
          <div className="text-[24px] font-semibold leading-[35px] spacing-[8px] text-center text-[#2A2A2A] max-[440px]:w-[81px] max-[440px]:h-[13px] max-[440px]:font-[400] max-[440px]:text-[14px] max-[440px]:leading-[12.23px] max-[440px]:tracking-[0] max-[440px]:text-center">
          {roomName}
        </div>
       <div
  className="w-[28px] h-[28px] max-[440px]:w-[19.99px] max-[440px]:h-[19.99px] max-[440px]:top-[0px] cursor-pointer hover:opacity-80"
  onClick={() => handleFullscreenn(transformedImage)}
>
          <Link to="/Sign-in">
            {" "}
            <img src={DragSize} alt="Fullscreen" title="View fullscreen" />
          </Link>
        </div>
      </div>
      <div className="max-w-[522px] w-full h-auto rounded-[4px]">
        <DraggableImages
          imageRight={originalImage}
          imageLeft={transformedImage}
        />
      </div>
      <div className="max-w-[520px] min-h-[57px] flex justify-between items-center max-[440px]:w-[188px] max-[440px]:h-[45px]">

       <div
  className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80
             max-[440px]:w-[38px] max-[440px]:h-[45px] max-[440px]:gap-[4px]"
  onClick={() => toggleOriginalImagee(roomKey, originalImage)}
>
          <Link to="/Sign-in">
         <img 
  src={Search} 
  alt="Toggle original" 
  title="View original image"
  className="max-[440px]:w-[24px] max-[440px]:h-[24px] max-[440px]:rounded-[30px] max-[440px]:border max-[440px]:border-[0.47px] max-[440px]:p-[4px]"
/>
            {" "}
            <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]
             max-[440px]:w-[38px] max-[440px]:h-[17px]">
              Show
            </div>
          </Link>
        </div>
        <div
          className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80
             max-[440px]:w-[34px] max-[440px]:h-[45px] max-[440px]:gap-[4px]"
          onClick={() => handleInputRedirectt(roomName, originalImage)}
        >
          <Link to="/Sign-in">
            <img
              src={Input}
              alt="Input"
              title="Go to input form"
              className="max-[440px]:w-[24px] max-[440px]:h-[24px] max-[440px]:rounded-[30px] max-[440px]:border max-[440px]:border-[0.47px] max-[440px]:p-[4px]"
            />
            {" "}
            <div
              className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]
             max-[440px]:w-[34px] max-[440px]:h-[17px] max-[440px]:text-[12px] max-[440px]:leading-[140%] max-[440px]:font-[400] max-[440px]:text-center max-[440px]:font-['Inter']"
            >
              Input
            </div>

          </Link>
        </div>
       <div
          className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80
             max-[440px]:flex-col max-[440px]:w-[67px] max-[440px]:h-[45px] max-[440px]:gap-[4px]"
          onClick={() => handleDownloadd(transformedImage)}
        >

          <Link to="/sign-in">
          <img
  src={Download}
  alt="Download"
  title="Download image"
  className="max-[440px]:flex max-[440px]:flex-row max-[440px]:w-[24px] max-[440px]:h-[24px] 
             max-[440px]:rounded-[30px] max-[440px]:border max-[440px]:border-[0.47px] 
             max-[440px]:p-[4px]"
/>

           <div
  className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]
             max-[440px]:w-[67px] max-[440px]:h-[17px] max-[440px]:text-[12px] max-[440px]:leading-[140%]
             max-[440px]:font-[400] max-[440px]:text-center max-[440px]:font-['Inter']"
>
  Download
</div>

          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            <img
              src={fullscreenImage}
              alt="Fullscreen preview"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setFullscreenImagee(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Original Image Popup Modal */}
      {popupImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            <img
              src={popupImage}
              alt="Original preview"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setPopupImagee(null)}
            >
              ×
            </button>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-lg">
              Original Image - Click outside to close
            </div>
          </div>
        </div>
      )}

    <div className="max-w-[100vw] min-h-[400px] flex flex-col items-center justify-center gap-[20px] px-[20px] pt-[20px] pb-[20px] bg-gradient-to-l from-[#007B8214] to-[white] max-[440px]:min-h-[278px] max-[440px]:gap-[20px]">

  <h1 className="w-full max-w-[1064px] text-center font-bold text-[48px] leading-[52px] mt-[20px] font-['Inter']
  max-[440px]:w-[400px]
  max-[440px]:h-[23px]
  max-[440px]:text-[18px]
  max-[440px]:leading-[18px]
  max-[440px]:tracking-[0px]
  max-[440px]:flex
  max-[440px]:items-center
  max-[440px]:justify-center
  mb-[12px]">
  <span className="text-[#009A98]">Stackly.AI</span> Interior Designer
</h1>

<p className="max-w-[1064px] text-[18px] leading-[24px] text-center font-[400] text-[#0F0F0F] font-['Inter']
  max-[440px]:w-[400px]
  max-[440px]:text-[12px]
  max-[440px]:leading-[140%]
  max-[440px]:tracking-[0px]
  mb-[12px]">
  Bring your design dreams to life using AI. Just take a photo and let our technology do the magic.
</p>

<div className="max-w-[1064px] text-[16px] leading-[22px] font-medium text-center text-[#007B82] font-['Inter']
  max-[440px]:w-[400px]
  max-[440px]:h-[44px]
  max-[440px]:text-[14px]
  max-[440px]:leading-[20px]">
  Best quality, lightning fast – trusted by homeowners & professionals
</div>


  {/* Stars & Banners wrapped separately to avoid pushing layout */}
  
        <div className="absolute">
          <img
            src={Banner}
            alt="banner1"
            className="absolute left-[-60px] top-[70px]"
          />
          <img src={Banner1} alt="banner2" className="" />
        </div>


  {/* Stars for desktop (hidden below 441px) */}
<div className="absolute z-0 min-[441px]:block hidden">
  <div className="w-[52.38px] h-[50px] absolute top-[-300px] left-[-650px]">
    <img src={Star} alt="star" />
  </div>
  <div className="w-[30px] h-[28.64px] absolute top-[-330px] left-[-630px]">
    <img src={Star} alt="star" />
  </div>
  <div className="w-[52.38px] h-[50px] absolute top-[50px] left-[550px]">
    <img src={Star} alt="star" />
  </div>
  <div className="w-[30px] h-[28.64px] absolute top-[20px] left-[580px]">
    <img src={Star} alt="star" />
  </div>
</div>

{/* Stars for mobile (hidden above 440px) */}
<div className="absolute z-0 max-[440px]:block hidden">
  {/* First star pair container */}
    <div className="absolute bottom-[80px] right-[167px] w-[20.42px] h-[22px]">
    {/* First star - positioned relative to container */}
    <div className="absolute w-[17.83px] h-[17.02px] top-[2.49px] left-[1.295px]">
      <img src={Star} alt="star" className="w-full h-full" />
    </div>
    
    {/* Second star - positioned relative to container */}
    <div className="absolute w-[10.21px] h-[9.75px] top-[12.25px] left-[10.21px]">
      <img src={Star} alt="star" className="w-full h-full" />
    </div>
  </div>

  {/* Second star pair container */}
  <div className="absolute top-[108px] left-[160px] w-[20.42px] h-[22px]">
    {/* Third star - positioned relative to container */}
    <div className="absolute w-[17.83px] h-[17.02px] top-[2.49px] left-[1.295px]">
      <img src={Star} alt="star" className="w-full h-full" />
    </div>
    
    {/* Fourth star - positioned relative to container */}
    <div className="absolute w-[10.21px] h-[9.75px] top-[12.25px] left-[10.21px]">
      <img src={Star} alt="star" className="w-full h-full" />
    </div>
  </div>
</div>
</div>





      {/* DraggableImages Section */}
      <div>
        <div className="max-w-[100vw] h-auto
  max-[440px]:flex max-[440px]:flex-col 
  max-[440px]:w-[440px] max-[440px]:h-[643.38px] 
  max-[440px]:pt-[2px] max-[440px]:pr-[20px] 
  max-[440px]:pb-[40px] max-[440px]:pl-[20px] 
  max-[440px]:gap-[32px]">

       <div className="w-full min-h-[158px] flex flex-col justify-center items-center gap-[24px]
  max-[440px]:w-[400px] max-[440px]:h-[76px] max-[440px]:flex-col max-[440px]:gap-[0px]">

            <div className="w-[1026px] min-h-[78px] font-bold text-[48px] leading-[78px] text-center font-inter 
  max-[440px]:w-[400px] max-[440px]:h-[30px] max-[440px]:font-[700] max-[440px]:text-[18px] max-[440px]:leading-[78px] max-[440px]:tracking-[0] max-[440px]:text-center 
  text-[#001A1C] max-[440px]:bg-gradient-to-r max-[440px]:from-[#001A1C] max-[440px]:to-[#007B82] max-[440px]:bg-clip-text max-[440px]:text-transparent">
  Spaces That Inspire You
</div>


            <div className="w-[1026px] min-h-[56px] text-[400] text-[24px] leading-[28px] text-center text-[#000000]
              max-[440px]:w-[400px] max-[440px]:h-[34px] max-[440px]:font-[400] max-[440px]:text-[12px] max-[440px]:leading-[140%] max-[440px]:tracking-[0] max-[440px]:text-center font-inter">
              Explore handpicked collections for every corner of your home —
              from cozy balconies to focused work zones.
            </div>
          </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-15 mt-10 p-5 sm:p-10 max-[440px]:hidden">



            <RoomCard
              roomName="Living Room"
              originalImage={dragImg1_1}
              transformedImage={dragImg1_2}
              roomKey="livingRoom"
            />

            <RoomCard
              roomName="Kitchen"
              originalImage={dragImg2_1}
              transformedImage={dragImg2_2}
              roomKey="kitchen"
            />

            <RoomCard
              roomName="Kids Room"
              originalImage={dragImg3_1}
              transformedImage={dragImg3_2}
              roomKey="kidsRoom"
            />

            <RoomCard
              roomName="Dining Room"
              originalImage={dragImg1_2}
              transformedImage={dragImg1_1}
              roomKey="diningRoom"
            />

            <RoomCard
              roomName="Laundry Room"
              originalImage={dragImg2_2}
              transformedImage={dragImg2_1}
              roomKey="laundryRoom"
            />

            <RoomCard
              roomName="Study Room"
              originalImage={dragImg3_2}
              transformedImage={dragImg3_1}
              roomKey="studyRoom"
            />
          </div>

          {/* MOBILE CARDS */}
      {/* MOBILE CARDS - HORIZONTAL SCROLL */}
{/* MOBILE CARDS - 2x2 Grid for screens < md */}
{/* MOBILE CONTAINER - relative wrapper */}
<div className="relative w-full px-4 py-4 md:hidden">

  {/* CHOOSE AREA - top right for <441px */}
 <div className="hidden max-[440px]:flex absolute top-[-34px] right-0 z-10">
  <div className="w-[107px] h-[30px] rounded-[8px] border border-[#007B82] border-solid p-[8px] flex items-center gap-[8px] bg-white">
     <select
            value={selectedArea}
            onChange={handleAreaChange}
            className="w-full text-[#007B82] cursor-pointer text-[14px] font-medium outline-none bg-transparent"
          >
            <option value="" disabled>Choose Area</option>
            <option value="floor">Floor</option>
            <option value="office">Office</option>
            <option value="gym">Gym</option>
            <option value="balcony">Balcony</option>
          </select>
    
    {/* Custom dropdown arrow */}
    <svg 
      className="w-[14px] h-[14px] text-[#007B82] pointer-events-none"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path 
        fillRule="evenodd" 
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.936a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z" 
        clipRule="evenodd" 
      />
    </svg>
  </div>
</div>

  {/* 2x2 MOBILE CARD GRID */}
  <div className="grid grid-cols-2 gap-8 w-full">
    <RoomCard
      roomName="Living Room"
      originalImage={dragImg1_1}
      transformedImage={dragImg1_2}
      roomKey="livingRoom"
    />
    <RoomCard
      roomName="Kitchen"
      originalImage={dragImg2_1}
      transformedImage={dragImg2_2}
      roomKey="kitchen"
    />
    <RoomCard
      roomName="Kids Room"
      originalImage={dragImg3_1}
      transformedImage={dragImg3_2}
      roomKey="kidsRoom"
    />
    <RoomCard
      roomName="Dining Room"
      originalImage={dragImg1_2}
      transformedImage={dragImg1_1}
      roomKey="diningRoom"
    />
  </div>
</div>
          <div className="w-[146px] h-[38px] rounded-[8px] border-[1px] border-solid border-[#007B82] px-[12px] py-[8px] flex justify-center items-center gap-[8px] relative top-[-860px] right-[-1350px]">
            <select name="" id="" className="text-[#007B82] cursor-pointer">
              <option value="" disabled>Choose Area</option> // ✅ remove selected
              <option value="" className="text-[#2a2a2a]">
                Floor
              </option>
              <option value="" className="text-[#2a2a2a]">
                Office
              </option>
              <option value="" className="text-[#2a2a2a]">
                Gym
              </option>
              <option value="" className="text-[#2a2a2a]">
                Palcony
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
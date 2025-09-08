// OFFICE ROOM COMPONENT
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Arrow from "../../assets/forgetPg/arrow1.png";
import Office1 from "../../assets/afterHome/ExploreLv1.png";
import Office2 from "../../assets/afterHome/ExploreLv1.png";
import Office3 from "../../assets/afterHome/ExploreLv1.png";
import Office4 from "../../assets/afterHome/ExploreLv1.png";
import Office5 from "../../assets/afterHome/ExploreLv1.png";
import Office6 from "../../assets/afterHome/ExploreLv1.png";
import Office7 from "../../assets/afterHome/ExploreLv1.png";
import Office8 from "../../assets/afterHome/ExploreLv1.png";
import Star from "../../assets/afterHome/LikeStar.png";

function OfficeRoom() {
  const roomCategories = ["Office", "Studio", "Buildings", "Shop", "Real Estate"];
  const [currentCategory, setCurrentCategory] = useState(0);

  const categoryImages = {
    Office: [
      { src: Office1, name: "Modern Office" },
      { src: Office2, name: "Classic Office" },
      { src: Office3, name: "Cozy Office" },
      { src: Office4, name: "Minimal Office" },
      { src: Office5, name: "Executive Office" },
      { src: Office6, name: "Open Space Office" },
      { src: Office7, name: "Corporate Office" },
      { src: Office8, name: "Creative Office" },
    ],
    Studio: [
      { src: Office1, name: "Art Studio" },
      { src: Office2, name: "Photography Studio" },
      { src: Office3, name: "Music Studio" },
      { src: Office4, name: "Dance Studio" },
      { src: Office5, name: "Design Studio" },
      { src: Office6, name: "Film Studio" },
      { src: Office7, name: "Recording Studio" },
      { src: Office8, name: "Creative Studio" },
    ],
    Buildings: [
      { src: Office1, name: "Commercial Building" },
      { src: Office2, name: "Residential Building" },
      { src: Office3, name: "Skyscraper" },
      { src: Office4, name: "High-rise Building" },
      { src: Office5, name: "Modern Building" },
      { src: Office6, name: "Classic Building" },
      { src: Office7, name: "Office Complex" },
      { src: Office8, name: "Corporate Tower" },
    ],
    Shop: [
      { src: Office1, name: "Retail Shop" },
      { src: Office2, name: "Fashion Shop" },
      { src: Office3, name: "Grocery Shop" },
      { src: Office4, name: "Boutique Shop" },
      { src: Office5, name: "Electronics Shop" },
      { src: Office6, name: "Furniture Shop" },
      { src: Office7, name: "Coffee Shop" },
      { src: Office8, name: "Book Shop" },
    ],
    "Real Estate": [
      { src: Office1, name: "Luxury Apartment" },
      { src: Office2, name: "Villa" },
      { src: Office3, name: "Penthouse" },
      { src: Office4, name: "Townhouse" },
      { src: Office5, name: "Commercial Property" },
      { src: Office6, name: "Land Plot" },
      { src: Office7, name: "Office Space" },
      { src: Office8, name: "Residential Complex" },
    ],
  };

  const currentCategoryName = roomCategories[currentCategory];
  const images = categoryImages[currentCategoryName];
  const [activeStars, setActiveStars] = useState(Array(images.length).fill(false));

  const handleNextCategory = () => {
    const nextCategory = (currentCategory + 1) % roomCategories.length;
    setCurrentCategory(nextCategory);
    setActiveStars(Array(categoryImages[roomCategories[nextCategory]].length).fill(false));
  };

  const handlePrevCategory = () => {
    const prevCategory = (currentCategory - 1 + roomCategories.length) % roomCategories.length;
    setCurrentCategory(prevCategory);
    setActiveStars(Array(categoryImages[roomCategories[prevCategory]].length).fill(false));
  };

  const toggleStar = (index) => {
    const newStars = [...activeStars];
    newStars[index] = !newStars[index];
    setActiveStars(newStars);
  };

  const handleDownload = (src, index) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = `image-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full h-[1267px] bg-black pt-[82px] -mt-[82px] overflow-hidden relative">
         {/* Header */}
         <div className="w-full max-w-[1334px] h-[42px] absolute top-[142px] left-1/2 -translate-x-1/2 flex items-center px-4">
   
         <Link to="/afterheropricing/">
     <button className="w-[83px] h-[32px] flex items-center gap-[12px] bg-transparent hover:bg-[#8A38F50F] rounded-full px-1 py-1 transition-colors">
       <div className="w-7 h-7 bg-[#FFFFFF1F] rounded-full flex items-center justify-center border border-[#8A38F5]">
         <img src={Arrow} alt="back" className="w-3 h-3" />
       </div>
       <span className="text-[16px] text-white poppins-font">Back</span>
     </button>
   </Link>
           <div className="w-[584px] h-[42px] flex items-center justify-between rounded-[20px] border border-transparent px-[16px] py-[6px] opacity-100 absolute left-1/2 -translate-x-1/2"
        style={{
            background: "rgba(255,255,255,0.08)",
            borderImageSource: "linear-gradient(94deg, rgba(138,56,245,0.4) 0.61%, rgba(255,255,255,0.4) 99.99%)",
            borderImageSlice: 1,
        }}>
        <button 
            className="w-[20px] h-[20px] flex items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity"
            onClick={handlePrevCategory}
        >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2L2 8L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
        
        <span className="text-[18px] poppins-font font-normal text-white text-center">
            {currentCategoryName}
        </span>
        
        <button 
            className="w-[20px] h-[20px] flex items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity"
            onClick={handleNextCategory}
        >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L8 8L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
   </div>
         </div>
   
         {/* Image Grid */}
         <div className="w-[1338px] h-[1020px] absolute top-[236px] left-1/2 -translate-x-1/2 flex flex-col gap-[24px]">
           <div className="grid grid-cols-3 gap-[24px]">
             {images.map((imgObj, index) => {
               const handleDownload = () => {
                 const link = document.createElement("a");
                 link.href = imgObj.src;
                 link.download = `image-${index + 1}.png`;
                 document.body.appendChild(link);
                 link.click();
                 document.body.removeChild(link);
               };
   
               return (
                 <div key={index} className="w-[430px] h-[324px] rounded-[8px] border border-[0.5px] overflow-hidden relative">
                   <img src={imgObj.src} alt={`${imgObj.name}`} className="w-full h-full object-cover" />
   
                   {/* Download Button */}
                   <div onClick={handleDownload} className="w-[24px] h-[24px] rounded-full border border-[#8A38F533] bg-[#7A1FF133] flex items-center justify-center absolute top-2 right-2 cursor-pointer"
                     style={{ boxShadow: "0px 0px 4px 0px #FFFFFF29", backdropFilter: "blur(4px)" }}
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                       <polyline points="7 10 12 15 17 10" />
                       <line x1="12" y1="15" x2="12" y2="3" />
                     </svg>
                   </div>
   
                   {/* Star Icon */}
                   <div onClick={() => toggleStar(index)} className="w-[24px] h-[24px] rounded-full border border-[#FFFFFF33] flex items-center justify-center absolute bottom-2 right-2 cursor-pointer"
                     style={{
                       boxShadow: "0px 0px 4px 0px #FFFFFF33",
                       backgroundColor: activeStars[index] ? "yellow" : "transparent",
                     }}
                   >
                     <img src={Star} alt="star" className="w-[14px] h-[14px] filter brightness-0" />
                   </div>
   
                   {/* Image Name */}
                   <div className="absolute bottom-2 left-2 text-white poppins-font text-[18px]  bg-opacity-50 px-2 py-1 rounded">
                     {imgObj.name}
                   </div>
                 </div>
               );
             })}
           </div>
         </div>
       </section>
  );
}

export default OfficeRoom;

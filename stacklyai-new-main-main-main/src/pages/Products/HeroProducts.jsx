// import React from "react";

// export default function HeroProducts() {
//   return (
//     <div className="px-[20px] sm:px-[50px] pb-[20px] w-full">
//       <div className="w-full  min-h-[208px]  my-[20px] sm:my-[60px] text-center flex flex-col justify-center items-center gap-[24px]">
//         <h1 className="max-w-[969px] w-full min-h-[156px] text-[#2a2a2a] text-[58px] font-[700] md:text-[58px] mb-[10px] sm:text-[50px] leading-[78px] text-center">
//           Discover the <span className="text-[#009A98]">Future of Space </span>
//           Transformation
//         </h1>
//         <p className="text-[20px] text-[#000000] leading-[28px] font-[400] text-center">
//           Smart AI Solutions for Interiors, Exteriors, and Outdoors
//         </p>
//       </div>

//       <div className="flex flex-wrap justify-center items-center gap-[20px] mt-[40px]">
//         {[
//           "Living Room",
//           "Bedroom",
//           "Kitchen",
//           "Dining Room",
//           "Bathroom",
//           "Home Office",
//           "Kids’ Room",
//           "Library",
//           "Walk-In Closet",
//           "Hallway",
//           "Foyer",
//           "Laundry Room",
//           "Guest Room",
//           "Study Room",
//           "Entertainment Room",
//           "Home Gym",
//           "Home Theater",
//         ].map((item, index) => (
//           <p
//             key={index}
//             className="rounded-full cursor-pointer border-2 border-dashed border-[#007b82] p-2 sm:px-[15px] sm:py-[10px] w-fit"
//           >
//             {item}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function HeroProducts() {
  return (
    <div>
  {/* ----- Original Div (Hidden below 441px) ----- */}
  <div className="max-[440px]:hidden px-[20px] sm:px-[50px] pb-[20px] w-full">
    <div className="w-full min-h-[208px] my-[20px] sm:my-[60px] text-center flex flex-col justify-center items-center gap-[24px]">
      <h1 className="max-w-[969px] w-full min-h-[156px] text-[#2a2a2a] text-[58px] font-[700] md:text-[58px] mb-[10px] sm:text-[50px] leading-[78px] text-center">
        Discover the <span className="text-[#009A98]">Future of Space </span>
        Transformation
      </h1>
      <p className="text-[20px] text-[#000000] leading-[28px] font-[400] text-center">
        Smart AI Solutions for Interiors, Exteriors, and Outdoors
      </p>
    </div>

    <div className="flex flex-wrap justify-center items-center gap-[20px] mt-[40px]">
      {[
        "Living Room",
        "Bedroom",
        "Kitchen",
        "Dining Room",
        "Bathroom",
        "Home Office",
        "Kids’ Room",
        "Library",
        "Walk-In Closet",
        "Hallway",
        "Foyer",
        "Laundry Room",
        "Guest Room",
        "Study Room",
        "Entertainment Room",
        "Home Gym",
        "Home Theater",
      ].map((item, index) => (
        <p
          key={index}
          className="rounded-full cursor-pointer border-2 border-dashed border-[#007b82] p-2 sm:px-[15px] sm:py-[10px] w-fit"
        >
          {item}
        </p>
      ))}
    </div>
  </div>

  {/* ----- Mobile Div (Visible only below 441px) ----- */}
  <div className="min-[441px]:hidden flex flex-col w-[440px] h-[411px] px-[20px] pt-[40px] pb-[40px] gap-[32px]">

   <div className="w-[400px] h-[85px] my-[15px] text-center flex flex-col justify-center items-center gap-[20px]">

    <h1 className="w-[400px] h-[37px] text-center font-[700] text-[20px] leading-[20px] tracking-[0px] text-[#2a2a2a] flex flex-col items-center justify-between font-['Inter'] max-[440px]:gap-[4px]">
  <span>
    Discover the <span className="text-[#009A98]">Future of Space</span>
  </span>
  <span>Transformation</span>
</h1>



      <p className="w-[400px] h-[28px] text-[14px] leading-[28px] tracking-[0px] font-[400] text-center text-[#000000] font-['Inter']">
  Smart AI Solutions for Interiors, Exteriors, and Outdoors
</p>

    </div>

<div className="flex flex-wrap justify-center items-center w-[400px] h-[214px] px-[8px] gap-[12px]">
  {[
    { label: "Living Room", width: "w-[95px]", height: "h-[31px]" },
    { label: "Home Gym", width: "w-[88px]", height: "h-[31px]" },
    { label: "Home Theater", width: "w-[106px]", height: "h-[31px]" },
    { label: "Kids’ Room", width: "w-[88px]", height: "h-[31px]" },
    { label: "Guest Room", width: "w-[94px]", height: "h-[31px]" },
    { label: "Bedroom", width: "w-[76px]", height: "h-[31px]" },
    { label: "Library", width: "w-[65px]", height: "h-[31px]" },
    { label: "Study Room", width: "w-[94px]", height: "h-[31px]" },
    { label: "Kitchen", width: "w-[69px]", height: "h-[31px]" },
    { label: "Walk-In Closet", width: "w-[108px]", height: "h-[31px]" },
    { label: "Entertainment Room", width: "w-[142px]", height: "h-[31px]" },
    { label: "Dining Room", width: "w-[97px]", height: "h-[31px]" },
    { label: "Hallway", width: "w-[70px]", height: "h-[31px]" },
    { label: "Foyer", width: "w-[56px]", height: "h-[31px]" },
    { label: "Bathroom", width: "w-[80px]", height: "h-[31px]" },
    { label: "Laundry Room", width: "w-[107px]", height: "h-[31px]" },
    { label: "Home Office", width: "w-[96px]", height: "h-[31px]" },
  ].map((item, index) => (
    <div
      key={index}
      className="p-[1px] rounded-full bg-gradient-to-r from-[#007B82] to-[#00B0BA]"
    >
      <p
        className={`flex items-center justify-center ${item.width} ${item.height} rounded-[100px] bg-white text-[#007B82] text-[10px] font-medium font-['Inter'] whitespace-nowrap px-[12px] py-[8px] gap-[10px]`}
      >
        {item.label}
      </p>
    </div>
  ))}
</div>

  </div>
</div>
  );
}
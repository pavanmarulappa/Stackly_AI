import React from "react";

export default function HeroAfterProducts() {
  return (
    <div className="px-[20px] sm:px-[50px] pb-[20px] w-full">
      <div className="w-full  min-h-[208px]  my-[20px] sm:my-[60px] text-center flex flex-col justify-center items-center gap-[24px]">
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
            className="rounded-full border-dashed cursor-pointer border-2 border border-[#007b82] p-2 sm:px-[15px] sm:py-[10px] w-fit"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

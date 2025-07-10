//In product page new update , i removed this section from product page , so i take it backup.(10/july/25)


<div className="max-w-[100vw] min-h-[400px] flex flex-col items-center justify-center gap-[20px] px-[20px] pt-[20px] pb-[20px] bg-gradient-to-r from-[#007B8214] to-[#007B8214] max-[440px]:min-h-[278px] max-[440px]:gap-[20px]">

  <div className="relative w-full bg-white overflow-hidden">
  {/* Background images – styled like a full visual box */}
  <div className="absolute inset-0 pointer-events-none z-0">
    {/* Left banner */}
    <img
      src={Banner}
      alt="banner1"
      className="absolute top-[50px] left-0 w-[300px] max-[440px]:w-[160px]"
    />
    {/* Right banner */}
    <img
      src={Banner1}
      alt="banner2"
      className="absolute bottom-0 right-0 w-[300px] max-[440px]:w-[160px]"
    />

    {/* Top Right Stars */}
    <img
      src={Star}
      alt="star-top-right-1"
      className="absolute top-[30px] right-[40px] w-[40px] h-[40px] z-0 min-[441px]:block hidden"
    />
    <img
      src={Star}
      alt="star-top-right-2"
      className="absolute top-[70px] right-[80px] w-[24px] h-[24px] z-0 min-[441px]:block hidden"
    />

    {/* Bottom Left Stars */}
    <img
      src={Star}
      alt="star-bottom-left-1"
      className="absolute bottom-[40px] left-[30px] w-[40px] h-[40px] z-0 min-[441px]:block hidden"
    />
    <img
      src={Star}
      alt="star-bottom-left-2"
      className="absolute bottom-[80px] left-[70px] w-[24px] h-[24px] z-0 min-[441px]:block hidden"
    />
  </div>

  {/* Content Block */}
  <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 max-[440px]:py-8">
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
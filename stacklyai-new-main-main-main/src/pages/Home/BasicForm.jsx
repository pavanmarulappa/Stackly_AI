// // import React from 'react'
// // import Upload from "../../assets/home/upload.png"
// // import I from "../../assets/home/i.png"


// // export default function BasicForm() {
// //   return (
// //     <div>
// //       <section
// //         className="w-full h-[914px] px-[40px] py-[80px] bg-center bg-cover bg-no-repeat flex justify-center items-center"
// //         style={{ backgroundImage: 'url("/home/BasicForm/Back.png")' }}
// //       >
// //         <div className="w-[984px] h-[607px] flex flex-col justify-start items-center gap-[52px]">
// //           <div className="w-[984px] h-[278.33px] flex flex-col justify-start items-center gap-[32px]">
// //             <img src={Upload} alt="ulpoad" className="w-[112px] h-[85.33px]" />
// //             <div className="w-[984px] h-[161px] flex flex-col justify-start items-center gap-[32px]">
// //               <div className="w-[100%] h-[39px] font-[400] text-[32px] text-center text-white">
// //                 Upload an image
// //               </div>
// //               <div className="w-[100%] h-[29px] font-[400] text-[24px] text-center text-white">
// //                 Drag & drop or click to upload your image.
// //               </div>
// //               <div className="w-[100%] h-[29px] font-[400] text-center text-[24px] text-white">
// //                 Allowed formats: PNG, JPEG, JPG, HEIC & HEIF (Max size: 25MB)
// //               </div>
// //             </div>
// //             <div
// //               type="file"
// //               className="w-[542px] h-[79px] rounded-[8px] px-[12px] py-[20px] flex justify-center items-center gap-[10px] bg-gradient-to-l from-[#007B82] to-[#00B0BA] font-semibold text-[32px] text-center text-white cursor-pointer"
// //             >
// //               Upload image
// //             </div>
// //           <div className="w-[100%] h-[20px] font-[400] text-[16px] text-center text-white">
// //             Our AI may not preserve watermarks on uploaded images. For best
// //             results, we recommend using images without watermarks
// //           </div>
// //           <div className="w-[143px] h-[36px] rounded-[8px] border-[1.5px] border-solid border-[#007B82] px-[10px] py-[8px] flex justify-center items-center gap-[10px]">
// //             <img src={I} alt="info" />
// //             <div className='font-medium text-[16px] text-center text-white'>Photo guide</div>
// //           </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";
// import Upload from "../../assets/home/upload.png";
// import I from "../../assets/home/i.png";

// export default function BasicForm() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState("");

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//     setUploadStatus("File selected: " + event.target.files[0].name);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       setUploadStatus("Please select a file first");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", selectedFile);

//     try {
//       setUploadStatus("Uploading...");

//       const response = await fetch("http://localhost:5000/api/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUploadStatus("Upload successful! " + data.message);
//       } else {
//         setUploadStatus("Upload failed: " + data.message);
//       }
//     } catch (error) {
//       setUploadStatus("Error: " + error.message);
//     }
//   };

//   return (
//     <div>
//       <section
//         className="w-full h-[914px] px-[40px] py-[80px] bg-center bg-cover bg-no-repeat flex justify-center items-center"
//         style={{ backgroundImage: 'url("/home/BasicForm/Back.png")' }}
//       >
//         <div className="w-[984px] h-[607px] flex flex-col justify-start items-center gap-[52px]">
//           <div className="w-[984px] h-[278.33px] flex flex-col justify-start items-center gap-[32px]">
//             <img src={Upload} alt="upload" className="w-[112px] h-[85.33px]" />
//             <div className="w-[984px] h-[161px] flex flex-col justify-start items-center gap-[32px]">
//               <div className="w-[100%] h-[39px] font-[400] text-[32px] text-center text-white">
//                 Upload an image
//               </div>
//               <div className="w-[100%] h-[29px] font-[400] text-[24px] text-center text-white">
//                 Drag & drop or click to upload your image.
//               </div>
//               <div className="w-[100%] h-[29px] font-[400] text-center text-[24px] text-white">
//                 Allowed formats: PNG, JPEG, JPG, HEIC & HEIF (Max size: 25MB)
//               </div>
//             </div>
//             <div className="flex flex-col items-center gap-4">
//               <input
//                 type="file"
//                 id="file-upload"
//                 accept=".png,.jpg,.jpeg,.heic,.heif"
//                 onChange={handleFileChange}
//                 className="hidden"
//               />
//               <label
//                 htmlFor="file-upload"
//                 className="w-[542px] h-[79px] rounded-[8px] px-[12px] py-[20px] flex justify-center items-center gap-[10px] bg-gradient-to-l from-[#007B82] to-[#00B0BA] font-semibold text-[32px] text-center text-white cursor-pointer hover:opacity-90"
//               >
//                 {selectedFile ? "Change image" : "Upload image"}
//               </label>
//               {selectedFile && (
//                 <button
//                   onClick={handleUpload}
//                   className="w-[542px] h-[79px] rounded-[8px] px-[12px] py-[20px] flex justify-center items-center gap-[10px] bg-gradient-to-l from-[#4CAF50] to-[#2E7D32] font-semibold text-[32px] text-center text-white cursor-pointer hover:opacity-90"
//                 >
//                   Submit for Processing
//                 </button>
//               )}
//               {uploadStatus && (
//                 <div className="w-[100%] h-[20px] font-[400] text-[16px] text-center text-white">
//                   {uploadStatus}
//                 </div>
//               )}
//             </div>
//             <div className="w-[100%] h-[20px] font-[400] text-[16px] text-center text-white">
//               Our AI may not preserve watermarks on uploaded images. For best
//               results, we recommend using images without watermarks
//             </div>
//             <div className="w-[143px] h-[36px] rounded-[8px] border-[1.5px] border-solid border-[#007B82] px-[10px] py-[8px] flex justify-center items-center gap-[10px]">
//               <img src={I} alt="info" />
//               <div className="font-medium text-[16px] text-center text-white">
//                 Photo guide
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// import React from "react";
// import Upload from "../../assets/home/upload.png";
// import I from "../../assets/home/i.png";
// import { Link } from "react-router-dom";

// export default function BasicForm() {
//   return (
//     <div>
//       <section
//         className="w-full h-[914px] px-[40px] py-[80px] bg-center bg-cover bg-no-repeat flex justify-center items-center"
//         style={{ backgroundImage: 'url("/home/BasicForm/Back.png")' }}
//       >
//         <div className="w-[984px] h-[607px] flex flex-col justify-start items-center gap-[52px]">
//           <div className="w-[984px] h-[278.33px] flex flex-col justify-start items-center gap-[32px]">
//             <img src={Upload} alt="upload" className="w-[112px] h-[85.33px]" />
//             <div className="w-[984px] h-[161px] flex flex-col justify-start items-center gap-[32px]">
//               <div className="w-[100%] h-[39px] font-[400] text-[32px] text-center text-white">
//                 Upload an image
//               </div>
//               <div className="w-[100%] h-[29px] font-[400] text-[24px] text-center text-white">
//                 Drag & drop or click to upload your image.
//               </div>
//               <div className="w-[100%] h-[29px] font-[400] text-center text-[24px] text-white">
//                 Allowed formats: PNG, JPEG, JPG, HEIC & HEIF (Max size: 25MB)
//               </div>
//             </div>
//             <div className="flex flex-col items-center gap-4">
//               <Link to="/Sign-in">
//                 {" "}
//                 <div className="w-[542px] h-[79px] rounded-[8px] px-[12px] py-[20px] flex justify-center items-center gap-[10px] bg-gradient-to-l from-[#007B82] to-[#00B0BA] font-semibold text-[32px] text-center text-white">
//                   Upload image
//                 </div>
//               </Link>
//               {/* <div className="w-[542px] h-[79px] rounded-[8px] px-[12px] py-[20px] flex justify-center items-center gap-[10px] bg-gradient-to-l from-[#4CAF50] to-[#2E7D32] font-semibold text-[32px] text-center text-white">
//                 Submit for Processing
//               </div> */}
//               {/* <div className="w-[100%] h-[20px] font-[400] text-[16px] text-center text-white">
//                 File selected: example.jpg
//               </div> */}
//             </div>
//             <div className="w-[100%] h-[20px] font-[400] text-[16px] text-center text-white">
//               Our AI may not preserve watermarks on uploaded images. For best
//               results, we recommend using images without watermarks
//             </div>
//             {/* <div className="w-[143px] h-[36px] rounded-[8px] border-[1.5px] border-solid border-[#007B82] px-[10px] py-[8px] flex justify-center items-center gap-[10px]">
//               <img src={I} alt="info" />
//               <div className="font-medium text-[16px] text-center text-white">
//                 Photo guide
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import Upload from "../../assets/home/upload.png";
import UploadIcon from "../../assets/home/Vector.png"
import Group from "../../assets/home/Group.png"
import BgVideo from "../../assets/home/vd.mp4";
import star from "../../assets/home/Big star.png"

import I from "../../assets/home/i.png";
import { Link } from "react-router-dom";

export default function BasicForm() {
  return (
    <div>
 <section
  className="
    relative w-full h-[580px] px-[40px] py-[80px] 
    flex flex-col justify-center items-center 
    opacity-100 overflow-hidden

    max-[440px]:h-[649px] max-[440px]:w-[440px] max-[440px]:py-[24px]  
    max-[440px]:justify-between

    min-[441px]:max-[768px]:w-[768px] 
    min-[441px]:max-[768px]:h-[487px] 
    min-[441px]:max-[768px]:gap-[52px] 
    min-[441px]:max-[768px]:pt-[60px] 
    min-[441px]:max-[768px]:pr-[40px] 
    min-[441px]:max-[768px]:pb-[60px] 
    min-[441px]:max-[768px]:pl-[40px]
  "
>
  <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="absolute top-0 left-0 w-full h-full object-cover -z-10 saturate-50 brightness-90"
>
  <source src={BgVideo} type="video/mp4" />
</video>





        <div
  className="
    w-[984px] h-[607px] flex flex-col justify-start items-center gap-[52px]

    /* Mobile styles */
    max-[440px]:w-[400px] max-[440px]:h-auto max-[440px]:gap-[32px]

    /* Tablet styles (441px–768px) */
    min-[441px]:max-[768px]:w-[688px]
    min-[441px]:max-[768px]:h-[354px]
    min-[441px]:max-[768px]:gap-[32px]
  "
>



         <div
  className="
    w-[984px] h-[278.33px] max-[440px]:mt-[40px] 
    flex flex-col justify-start items-center gap-[15px]

    /* Tablet styles (441px–768px) */
    min-[441px]:max-[768px]:w-[688px]
    min-[441px]:max-[768px]:h-[153.2px]
    min-[441px]:max-[768px]:gap-[17.07px]
  "
>

  <div
  className="
    w-[112px] h-[85.33px] opacity-100
    rotate-[0deg] 
    flex items-center justify-center
  "
>
  <img
    src={Upload}
    alt="upload"
    className="
      w-[112px] h-[85.33px] 
      max-[440px]:w-[112px] max-[440px]:h-[85.33px]
      min-[441px]:max-[768px]:w-[60px]
      min-[441px]:max-[768px]:h-[46px]
    "
  />
</div>


          <div
  className="
    w-[984px] h-[161px] flex flex-col justify-start items-center gap-[32px]
    max-[440px]:w-[400px] max-[440px]:h-auto max-[440px]:gap-[32px]

    /* Tablet (441px–768px) */
    min-[441px]:max-[768px]:w-[688px]
    min-[441px]:max-[768px]:h-[90.13px]
    min-[441px]:max-[768px]:gap-[25.07px]
  "
>


 <div
  className="w-full h-[39px] font-[400] text-[24px] text-white 
             text-center flex items-center justify-center gap-2
             max-[440px]:w-[400px] max-[440px]:h-[22px]
             max-[440px]:text-[18px] max-[440px]:leading-[100%]
             max-[440px]:font-inter max-[440px]:text-center
             min-[441px]:max-[768px]:w-[523.2px]
             min-[441px]:max-[768px]:h-[22px]
             min-[441px]:max-[768px]:text-[18px]
             min-[441px]:max-[768px]:leading-[100%]
             min-[441px]:max-[768px]:font-inter
             min-[441px]:max-[768px]:text-center"
>
  Upload an image

  <div className="relative w-8 h-[42px] opacity-90">
    {/* First star with gradient */}
    <div
      className="absolute w-5 h-5 top-0 left-0"
      style={{
        background: 'linear-gradient(90deg, #FFFFFF 0%, #8A38F5 100%)',
        WebkitMask: `url(${star}) no-repeat center / contain`,
        mask: `url(${star}) no-repeat center / contain`
      }}
    />

    {/* Second star with gradient */}
    <div
      className="absolute w-6 h-[23px] top-[19px] left-2"
      style={{
        background: 'linear-gradient(90deg, #FFFFFF 0%, #8A38F5 100%)',
        WebkitMask: `url(${star}) no-repeat center / contain`,
        mask: `url(${star}) no-repeat center / contain`
      }}
    />
  </div>
</div>


            <div
  className="w-full h-[29px] font-[400] text-[18px] text-center text-white
             max-[440px]:w-[400px] max-[440px]:h-[17px]
             max-[440px]:text-[14px] max-[440px]:leading-[100%]
             max-[440px]:font-inter max-[440px]:text-center

             /* Tablet styles (441px–768px) */
             min-[441px]:max-[768px]:w-[523.2px]
             min-[441px]:max-[768px]:h-[17px]
             min-[441px]:max-[768px]:text-[14px]
             min-[441px]:max-[768px]:leading-[100%]
             min-[441px]:max-[768px]:font-inter
             min-[441px]:max-[768px]:text-center"
>
  Drag & drop or click to upload your image.
</div>


            <div
  className="w-[100%] h-[29px] mt-[-20px] mb-7 font-[400] text-center text-[16px] text-white
             max-[440px]:w-[400px] max-[440px]:h-[34px]
             max-[440px]:text-[14px] max-[440px]:leading-[100%]
             max-[440px]:font-inter max-[440px]:text-center

             /* Tablet styles (441px–768px) */
             min-[441px]:max-[768px]:w-[523.2px]
             min-[441px]:max-[768px]:h-[17px]
             min-[441px]:max-[768px]:text-[14px]
             min-[441px]:max-[768px]:leading-[100%]
             min-[441px]:max-[768px]:font-inter
             min-[441px]:max-[768px]:text-center"
  style={{ color: "rgba(255, 255, 255, 0.6)" }}
>
  Allowed formats: PNG, JPEG, JPG (Max size: 25MB)
</div>


            </div>
  <div
  className="w-[202px] h-[44px] opacity-100 rotate-0
             flex flex-col items-center gap-4 
             max-[440px]:w-[248px] max-[440px]:h-[42px] max-[440px]:flex-row max-[440px]:gap-[10px]

             /* Tablet (441px–768px) */
             min-[441px]:max-[768px]:w-[289.07px]
             min-[441px]:max-[768px]:h-[42.33px]
             min-[441px]:max-[768px]:gap-[5.33px]
             min-[441px]:max-[768px]:px-[6.4px]
             min-[441px]:max-[768px]:py-[10.67px]
             min-[441px]:max-[768px]:rounded-[8px]"
>


              <Link to="/Sign-in">
         <div
  className="w-[200px] h-[44px] flex justify-center items-center gap-[10px] text-white 
             text-center font-medium text-[16px] leading-[100%] border border-[#C22CA299] rounded-[30px] 
             px-[30px] py-[10px] opacity-100 font-inter

             max-[440px]:w-[248px] max-[440px]:h-[42px] max-[440px]:text-[18px] max-[440px]:leading-[42px] 
             max-[440px]:px-[0] max-[440px]:py-[0] max-[440px]:rounded-[8px]

             min-[441px]:max-[768px]:w-[289.07px]
             min-[441px]:max-[768px]:h-[42.33px]
             min-[441px]:max-[768px]:gap-[5.33px]
             min-[441px]:max-[768px]:px-[6.4px]
             min-[441px]:max-[768px]:py-[10.67px]
             min-[441px]:max-[768px]:rounded-[8px]
             min-[441px]:max-[768px]:text-[17.07px]
             min-[441px]:max-[768px]:font-inter
             min-[441px]:max-[768px]:font-[600]
             min-[441px]:max-[768px]:leading-[100%]
             min-[441px]:max-[768px]:text-center"
  style={{
    background:
      "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)"
  }}
>
  <span className="w-[106px] h-[19px] text-[16px] font-medium leading-[100%] tracking-[0%] font-inter">
    Upload image
  </span>
  <img
    src={UploadIcon}
    alt="upload"
    className="w-[24px] h-[24px] object-contain rotate-0 opacity-100
               max-[440px]:w-[18px] max-[440px]:h-[18px]"
  />
</div>

              </Link>
            </div>

           <div className="w-full h-auto text-[16px] mt-[30px] text-white text-center font-[400]
  flex justify-center items-center px-4

  max-[440px]:w-full max-[440px]:px-[16px] max-[440px]:py-[8px] max-[440px]:text-[14px] max-[440px]:leading-[20px]

  /* Tablet (441px–768px) */
  min-[441px]:max-[768px]:w-[688px]
  min-[441px]:max-[768px]:h-[30px]
  min-[441px]:max-[768px]:gap-[8px]
  min-[441px]:max-[768px]:px-[40px]"
>

    <p
  className="flex items-center justify-center gap-[8px] flex-nowrap text-center 

             max-[440px]:w-[400px] max-[440px]:h-[51px] 
             max-[440px]:px-[12px] max-[440px]:gap-[8px] 
             max-[440px]:opacity-100 max-[440px]:text-left max-[440px]:items-start

             /* Tablet (441px–768px) */
             min-[441px]:max-[768px]:w-[688px]
             min-[441px]:max-[768px]:h-[30px]
             min-[441px]:max-[768px]:gap-[8px]
             min-[441px]:max-[768px]:px-[40px]
             min-[441px]:max-[768px]:opacity-100
"
>

<img
  src={Group}
  alt="upload"
  className="w-[24px] h-[24px] object-contain 

             max-[440px]:w-[20px] max-[440px]:h-[20px] 
             max-[440px]:opacity-100 max-[440px]:border max-[440px]:border-white 
             max-[440px]:absolute max-[440px]:left-[20.5px]

             /* Tablet (441px–768px) */
             min-[441px]:max-[768px]:w-[24px]
             min-[441px]:max-[768px]:h-[24px]
             min-[441px]:max-[768px]:opacity-100
             min-[441px]:max-[768px]:border
             min-[441px]:max-[768px]:border-[0.53px]
             min-[441px]:max-[768px]:border-white
"
/>



       <span
  className="text-left text-[14px] leading-[100%] whitespace-normal opacity-60 font-[400] font-['Inter'] 
             max-[440px]:w-[331px] max-[440px]:h-[51px] 
             max-[440px]:text-center max-[440px]:opacity-100

             /* Tablet (441px–768px) */
             min-[441px]:max-[768px]:w-[576px]
             min-[441px]:max-[768px]:h-[30px]
             min-[441px]:max-[768px]:text-[12px]
             min-[441px]:max-[768px]:opacity-100
             min-[441px]:max-[768px]:text-center
"
  style={{ color: "rgba(255, 255, 255, 0.6)" }}
>
  Our AI may not preserve watermarks on uploaded images. For best results, we recommend using images without watermarks.
</span>


              </p>
            </div>

 <div className="flex w-[143px] h-[36px] rounded-[8px] border-[1.5px] border-solid border-[#C99FFF] px-[10px] py-[8px] justify-center items-center gap-[10px]
  max-[440px]:w-[143px] max-[440px]:h-[36px] max-[440px]:px-[10px] max-[440px]:py-[8px]

  /* Tablet styles: 441px to 768px */
  min-[441px]:max-[768px]:w-[106px]
  min-[441px]:max-[768px]:h-[32.5px]
  min-[441px]:max-[768px]:gap-[5.33px]
  min-[441px]:max-[768px]:px-[5.33px]
  min-[441px]:max-[768px]:py-[4.27px]
  min-[441px]:max-[768px]:rounded-[4.27px]
  min-[441px]:max-[768px]:border-[0.8px]">


              <img
  src={I}
  alt="info"
  className="
    /* Tablet styles: 441px to 768px */
    min-[441px]:max-[768px]:w-[20px]
    min-[441px]:max-[768px]:h-[24px]
    min-[441px]:max-[768px]:opacity-100
    min-[441px]:max-[768px]:border
    min-[441px]:max-[768px]:border-[0.53px]
    min-[441px]:max-[768px]:border-white
"
/>

             <div
  className="font-medium text-[16px] text-center text-white
    min-[441px]:max-[768px]:w-[70px]
    min-[441px]:max-[768px]:h-[15px]
    min-[441px]:max-[768px]:text-[12px]
    min-[441px]:max-[768px]:font-medium
    min-[441px]:max-[768px]:leading-[100%]
    min-[441px]:max-[768px]:text-center
  "
>
  Photo guide
</div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
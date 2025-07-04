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
import I from "../../assets/home/i.png";
import { Link } from "react-router-dom";

export default function BasicForm() {
  return (
    <div>
      <section
        className="w-full h-[914px] px-[40px] py-[80px] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center 
             max-[440px]:h-[580px] max-[440px]:py-[24px] max-[440px]:justify-between"
        style={{ backgroundImage: 'url(\"/home/BasicForm/Back.png\")' }}
      >


        <div
          className="w-[984px] h-[607px] flex flex-col justify-start items-center gap-[52px]
             max-[440px]:w-[400px] max-[440px]:h-auto max-[440px]:gap-[32px]"
        >


          <div className="w-[984px] h-[278.33px] flex flex-col justify-start items-center gap-[32px]">
            <img
              src={Upload}
              alt="upload"
              className="w-[112px] h-[85.33px] max-[440px]:w-[112px] max-[440px]:h-[85.33px]"
            />

            <div
              className="w-[984px] h-[161px] flex flex-col justify-start items-center gap-[32px]
             max-[440px]:w-[400px] max-[440px]:h-auto max-[440px]:gap-[32px]"
            >

              <div className="w-[100%] h-[39px] font-[400] text-[32px] text-center text-white
                max-[440px]:w-[400px] max-[440px]:h-[22px]
                max-[440px]:text-[18px] max-[440px]:leading-[100%]
                max-[440px]:font-inter max-[440px]:text-center">
                Upload an image
              </div>

              <div className="w-[100%] h-[29px] font-[400] text-[24px] text-center text-white
                max-[440px]:w-[400px] max-[440px]:h-[17px]
                max-[440px]:text-[14px] max-[440px]:leading-[100%]
                max-[440px]:font-inter max-[440px]:text-center">
                Drag & drop or click to upload your image.
              </div>

              <div className="w-[100%] h-[29px] font-[400] text-center text-[24px] text-white
                max-[440px]:w-[400px] max-[440px]:h-[34px]
                max-[440px]:text-[14px] max-[440px]:leading-[100%]
                max-[440px]:font-inter max-[440px]:text-center">
                Allowed formats: PNG, JPEG, JPG (Max size: 25MB)
              </div>

            </div>
            <div
              className="flex flex-col items-center gap-4 
    max-[440px]:w-[248px] max-[440px]:h-[42px] max-[440px]:flex-row max-[440px]:gap-[10px]">

              <Link to="/Sign-in">
                <div
                  className="w-[542px] h-[79px] rounded-[8px] px-[12px] py-[20px] flex justify-center items-center gap-[10px]
      text-white text-center font-semibold text-[32px]
      max-[440px]:w-[248px] max-[440px]:h-[42px] max-[440px]:text-[18px] max-[440px]:leading-[42px] max-[440px]:px-[0] max-[440px]:py-[0] max-[440px]:rounded-[8px]"
                  style={{backgroundImage:
                    "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)",
                }}
                >
                  Upload image
                </div>
              </Link>
            </div>

            <div className="w-full h-[20px] font-[400] text-[16px] text-center text-white
  max-[440px]:flex max-[440px]:flex-row max-[440px]:w-[400px] max-[440px]:h-auto
  max-[440px]:px-[12px] max-[440px]:gap-[8px] max-[440px]:justify-center max-[440px]:items-center">

              <p className="max-[440px]:w-[331px] max-[440px]:h-[51px] max-[440px]:text-[14px] max-[440px]:leading-[14px] max-[440px]:font-[400] max-[440px]:text-center">
                Our AI may not preserve watermarks on uploaded images. For best
                results, we recommend using images without watermarks
              </p>
            </div>

            <div className="hidden max-[440px]:flex w-[143px] h-[36px] rounded-[8px] border-[1.5px] border-solid border-[#007B82] px-[10px] py-[8px] justify-center items-center gap-[10px]">
              <img src={I} alt="info" />
              <div className="font-medium text-[16px] text-center text-white">
                Photo guide
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
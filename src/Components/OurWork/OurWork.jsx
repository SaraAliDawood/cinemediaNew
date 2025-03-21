import React from "react";
import mobileReelImg from "../../assets/photo_2025-mobileReel.jpg";
import cameraImg from "../../assets/photo_2025-camera.jpg";
const OurWork = () => {
  const images = [cameraImg, mobileReelImg];
  return (
    <section className="bg-black text-white ">
      {/* First Section: Single Image */}
      <div className="flex justify-center mb-12">
        <img src={mobileReelImg} loading="lazy" alt="Our Work" className="w-full " />
      </div>

      {/* Second & Third Sections: Quote, Image, and Vertical Text */}
      {images.map((image, index) => (
        <div key={index} className="flex flex-col md:flex-row h-screen items-center justify-center ">
          {/* Left Column: Quote & Image */}
          <div className="md:w-2/3 flex flex-col items-center text-center md:text-left px-6">
            <h2 className="text-2xl font-bold">“A CAMERA IS A SAVE BUTTON FOR THE MIND’S EYE.”</h2>
            <p className="text-lg text-gray-400 ">— Roger Kingston</p>
            <img src={image} alt="Quote Section" loading="lazy" className="w-full max-w-md" />
          </div>
          
          {/* Right Column: Vertical Text */}
          <div className="md:w-1/3 text-4xl font-bold text-white flex flex-col items-center md:items-start">
            {"VIDEOGRAPHY".split("" ).map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurWork;

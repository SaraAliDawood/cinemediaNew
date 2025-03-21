import React, { lazy, Suspense, useMemo } from "react";
import backgroundImage from "../../assets/backgroundHero.jpg"; // Use WebP for performance
import contactImg from "../../assets/contactImg.jpg"; // Use optimized image

// Lazy load icons for better performance
const FaPhone = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaPhone })));
const FaEnvelope = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaEnvelope })));
const FaQuoteRight = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaQuoteRight })));
const FaFacebook = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaFacebook })));
const FaInstagram = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaInstagram })));
const FaLinkedin = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaLinkedin })));

function Contact() {
  // Memoize background styles to avoid unnecessary re-renders
  const bgStyle = useMemo(() => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }), []);

  return (
    <div className="bg-cover mx-0 w-full bg-center min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16" style={bgStyle}>
      <div className="w-full mt-20 max-w-6xl flex flex-col lg:flex-row items-center gap-16 p-8 sm:p-12">
        
        {/* Left Section (Image + Title) */}
        <div className="lg:w-1/2 w-full flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-bold uppercase text-white">CineMedia</h2>
          <p className="text-lg font-medium text-gray-300 pb-4">AGENCY</p>

          <img 
            src={contactImg} 
            alt="Contact" 
            loading="lazy" 
            className="aspect-[4/3] w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section (Text & Buttons) */}
        <div className="lg:w-1/2 w-full text-white text-center pt-20 lg:text-left">
          <h3 className="text-yellow-300 text-2xl sm:text-5xl font-bold">GET IN TOUCH!</h3>

          {/* Contact Info Buttons */}
          <div className="mt-6 space-y-4 flex flex-col items-center lg:items-start w-full">
            <Suspense fallback={<div>Loading...</div>}>
              <button className="w-full max-w-sm bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-3 rounded-lg flex items-center gap-3 transition duration-300">
                <FaPhone />
                01288966500
              </button>
              <button className="w-full max-w-sm bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-3 rounded-lg flex items-center gap-3 transition duration-300">
                <FaEnvelope />
                info@cinemediagency.com
              </button>
              <button className="w-full max-w-sm bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-3 rounded-lg flex items-center gap-3 transition duration-300">
                <FaQuoteRight />
                Get Quote
              </button>
            </Suspense>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 justify-start ps-20 md:ps-28">
            <Suspense fallback={<div>Loading...</div>}>
              <a href="#" className="text-3xl text-blue-500 hover:text-yellow-300"><FaFacebook /></a>
              <a href="#" className="text-orange-600 text-3xl hover:text-yellow-300"><FaInstagram /></a>
              <a href="#" className="text-blue-400 text-3xl hover:text-yellow-300"><FaLinkedin /></a>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

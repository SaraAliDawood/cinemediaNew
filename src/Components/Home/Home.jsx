import React, { Suspense, lazy } from "react";
import { FaCamera, FaVideo, FaMicrophone } from "react-icons/fa";
import backgroundImage from "../../assets/backgroundContact.jpg";

const Contact = lazy(() => import("../Contact/Contact"));

function Home() {
  return (
    <>
      <div
        className="vh-100 pb-4 flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div>
          <h1 className="text-4xl sm:text-6xl mt-20 font-bold leading-tight">
            Capturing Stories <br />
            Through Our <span className="text-blue-500">Lens</span>
            <span className="text-yellow-300">.</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between sm:gap-20 mt-10">
            <div className="block">
              <p className="text-lg sm:text-xl text-blue-400 max-w-xl">
                Stay updated on what's happening in 
              </p> 
              <p className="text-start text-lg sm:text-xl text-blue-400 max-w-xl">cinemedia.</p>
            </div>
            <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-8 py-3 text-lg rounded-md transition duration-300">
              GET QUOTE
            </button>
          </div>

          <h2 className="my-16 text-3xl sm:text-4xl font-semibold">
            <span className="italic text-yellow-300 px-2">What</span> you <br /> get from us
          </h2>

          {/* Service Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaCamera className="text-blue-500 text-5xl mb-4" />, title: "Pre-Production" },
              { icon: <FaVideo className="text-blue-500 text-5xl mb-4" />, title: "Media Production" },
              { icon: <FaMicrophone className="text-blue-500 text-5xl mb-4" />, title: "Event Coverage" }
            ].map(({ icon, title }) => (
              <div key={title} className="bg-white text-black rounded-lg p-8 flex flex-col items-center shadow-lg">
                {icon}
                <h3 className="text-xl font-bold">{title}</h3>
                <button className="mt-4 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-6 py-2 text-lg rounded-md transition duration-300">
                  LEARN MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lazy Loaded Contact Component */}
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Home;

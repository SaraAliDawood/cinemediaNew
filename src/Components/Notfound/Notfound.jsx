import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center px-4">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-3xl mt-4">Page Not Found</h2>
      <p className="text-lg text-gray-400 mt-2">Oops! The page you're looking for doesn't exist.</p>
      
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition duration-300">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pagenotfound from "../assets/images/pagenotfound.png";
export const PageNotFound = () => {

  useEffect(() => {
    document.title = 'page not found / cinema-app'
    
  },[])
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4 ">
          <p className="text-7xl text-gray-700 my-10 dark:text-white">
            404, OOPS!
          </p>
          <div className="max-w-lg">
            <img src={pagenotfound} alt="Another" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button
              className="w-64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded px-5 py-2.5 mr-2 mb-2 font-medium
          "
            >
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

import React from 'react';
import Mobonav from './mobonav';
const Navbar = () => {
  return (
    <>
    <div className="flex items-center justify-between px-6 py-4  shadow-md">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-2">
        <img src='/spotify.svg' alt="Spotify Logo" className="w-11 h-11"/>
      </div>

      {/* Middle Section: Home and Search */}
      <div className="flex items-center space-x-6 p-4  rounded-lg shadow-md">
  {/* Home Button */}
  <button className="p-4 flex items-center justify-center bg-gradient-to-br from-[#3b3b3d] to-[#27272a] text-white rounded-full hover:scale-105 hover:shadow-lg transition-all">
    <img src="/home.svg" alt="Home Icon" className="w-6 h-6" />
  </button>

  {/* Search Bar */}
  <div className="flex items-center justify-between bg-gradient-to-r from-[#27272a] to-[#2d2d31] px-6 py-4 rounded-full w-[680px] shadow-md hover:shadow-lg transition-shadow">
    {/* Left Side: Search Input */}
    <div className="flex items-center space-x-4">
      <img src="/search-new.svg" alt="Search Icon" className="w-6 h-6 text-white" />
      <p className="text-gray-400 text-lg font-medium">
        What do you want to play?
      </p>
    </div>
    {/* Right Side: Browser Icon */}
    <img
      src="/browser.svg"
      alt="Browser Icon"
      className="w-6 h-6 cursor-pointer hover:scale-105 transition-transform"
    />
  </div>
</div>


      {/* Right Section: Sign In and Sign Up */}
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-white font-bold text-1xl rounded hover:bg-gray-300 transition">
          Sign Up
        </button>
        <button className="px-4 py-2 bg-white text-black text-1xl font-bold rounded-full hover:bg-blue-600 transition">
          log in
        </button>
      </div>
    </div>

    
    </>
  );
};

export default Navbar;

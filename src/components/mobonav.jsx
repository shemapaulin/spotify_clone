import React from "react";

const Mobonav = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-black shadow-md fixed top-0 left-0 w-full z-50">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img src="/spotify.svg" alt="Spotify Logo" className="w-10 h-10" />
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <button className="p-2 bg-[#1f1f21] rounded-full hover:bg-[#3b3b3d] transition">
          <img src="/search-new.svg" alt="Search Icon" className="w-6 h-6" />
        </button>

        {/* Open App Button */}
        <button className="px-3 py-2 bg-white from-[#3b3b3d] to-[#27272a] text-black rounded-full text-sm font-semibold hover:scale-105 transition-all">
          Open App
        </button>

        {/* Menu Button */}
        <button className="p-2  rounded-full hover:bg-[#3b3b3d] transition">
          <img src="/menu.svg" alt="Menu Icon" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Mobonav;

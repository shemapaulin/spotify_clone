import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-[400px] h-screen bg-[#27272a] p-5 rounded-lg shadow-lg flex flex-col">
      {/* Header Section */}
      <div className="flex items-center justify-between py-10">
        <span className="flex items-center space-x-3">
          <img src="/library.svg" alt="Library Icon" className="w-10 h-10" />
          <h1 className="text-[#817e7e] text-2xl font-semibold">Your Library</h1>
        </span>
        <img
          src="/plus.svg"
          alt="Add Icon"
          className="w-10 h-10 cursor-pointer hover:scale-105 transition-transform"
        />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-hidden hover:overflow-y-auto space-y-6 pb-4">
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-[#1e1e20] to-[#2d2d31] w-full h-auto p-6 rounded-lg shadow-md flex flex-col items-start justify-between space-y-4 hover:shadow-lg transition-shadow">
          <h1 className="text-2xl text-white font-bold">Create Your Playlist</h1>
          <h2 className="text-base text-gray-300 font-medium">
            It's easy, we'll help you.
          </h2>
          <button className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-300 text-lg font-semibold transition-all">
            Create a playlist
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-[#1e1e20] to-[#2d2d31] w-full h-auto p-6 rounded-lg shadow-md flex flex-col items-start justify-between space-y-4 hover:shadow-lg transition-shadow">
          <h1 className="text-2xl text-white font-bold">Discover New Music</h1>
          <h2 className="text-base text-gray-300 font-medium">
            Explore curated playlists for you.
          </h2>
          <button className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-300 text-lg font-semibold transition-all">
            Discover Music
          </button>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="h-[40%] border-t border-gray-600 pt-4 flex items-center flex-col justify-center">
        {/* Footer Links */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-400 text-sm font-medium mb-4">
          <a href="#cookies" className="hover:text-white transition">Cookies</a>
          <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition">Terms of Service</a>
          <a href="#help" className="hover:text-white transition">Help</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#terms" className="hover:text-white transition">Terms of Service</a>
          <a href="#help" className="hover:text-white transition">Help</a>
          <a href="#about" className="hover:text-white transition">About</a>
       
        {/* Language Button */}
        <button className=" border border-gray-400 text-gray-400 px-7 py-2 text-sm font-semibold rounded-full hover:text-white hover:border-white transition">
           English
        </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

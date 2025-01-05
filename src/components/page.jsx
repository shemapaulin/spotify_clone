import React from "react";
import Navbar from "./navbar";
import Body from "./body";
import Sidebar from "./sidebar";
import Mobonav from "./mobonav";

const Page = () => {
  return (
    <div className="h-full w-full">
      {/* Render Navbar for larger screens */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Render Mobonav for smaller screens */}
      <div className="block md:hidden">
        <Mobonav />
      </div>

      {/* Main Content */}
      <div className="flex flex-row gap-2 h-[100%] w-screen">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default Page;

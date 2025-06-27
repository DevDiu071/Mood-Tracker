import React from "react";
import Navbar from "./_components/Navbar";
import Home from "./_components/Home";
import DashBoard from "./_components/DashBoard";

function Page() {
  return (
    <div className="mx-[16px] md:mx-[32px] xlarger:mx-[135px]">
      <Navbar />
      <Home />
      <DashBoard />
    </div>
  );
}

export default Page;

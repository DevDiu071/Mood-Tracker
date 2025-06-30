import React from "react";
import Navbar from "./_components/Navbar";
import Home from "./_components/Home";
import DashBoard from "./_components/DashBoard";
import LogMoodContainer from "./_components/LogMoodContainer";

function Page() {
  return (
    <div className="mx-[16px] relative md:mx-[32px] xlarger:mx-[135px]">
      <Navbar />
      <Home />
      <DashBoard />
      <LogMoodContainer />
    </div>
  );
}

export default Page;

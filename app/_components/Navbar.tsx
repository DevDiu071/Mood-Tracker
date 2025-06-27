import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/images/logo.svg";

function Navbar() {
  return (
    <div className="flex items-center justify-between mt-[32px] mb-[48px]">
      <Image src={Logo} alt="Logo" quality={100} />
      <div>Profile</div>
    </div>
  );
}

export default Navbar;

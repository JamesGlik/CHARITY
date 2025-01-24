import HeaderButton from "@/components/atoms/HeaderButton/HeaderButton";
import HeaderText from "@/components/atoms/HeaderComp/HeaderText";
import HeaderImage from "@/components/atoms/HeaderImage/HeaderImage";
import HeaderLogo from "@/components/atoms/HeaderLogo/HeaderLogo";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#f3f2e7] w-full h-full">
      <div className="flex items-center gap-x-[58px] pl-[16px] pt-[16px] pr-[16px]">
        <div>
          <HeaderLogo logo="CHA" />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-x-[45px]">
            <HeaderText text="About" />
            <HeaderText text="Causes" />
            <HeaderText text="Services" />
            <HeaderText text="Events" />
            <HeaderText text="Blog" />
          </div>

          <div className="w-full md:w-auto">
            <HeaderButton button="contact" />
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        <HeaderImage />
      </div>
    </div>
  );
};

export default Header;

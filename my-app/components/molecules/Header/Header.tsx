import HeaderButton from "@/components/atoms/HeaderButton/HeaderButton";
import HeaderText from "@/components/atoms/HeaderComp/HeaderText";
import HeaderImage from "@/components/atoms/HeaderImage/HeaderImage";
import HeaderLogo from "@/components/atoms/HeaderLogo/HeaderLogo";
import BigRectangle from "@/public/BigRectangle";
import Oval from "@/public/Oval";
import Rectangle from "@/public/Rectangle";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#f3f2e7] relative h-[100vh] z-[1] overflow-hidden">
      <div className="absolute z-[0]">
        <Rectangle />
      </div>
      <div className="absolute top-[150px]">
        <Oval/>
      </div>
      <div className="absolute right-[630px] top-[-40px]">
        <BigRectangle/>
      </div>
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

      <div className="flex justify-between px-[135px] items-center">
        <div className="flex flex-col gap-y-[25px] w-[396px] justify-center items-start">
          <h1 className="text-[72px] font-rowdies text-[#3A1700] font-light leading-[80px] tracking-[-3px]">
            Giving help to those who need it
          </h1>
          <p className="font-manrope leading-[32px] text-[rgba(58, 23, 0, 0.50)]">
            It involves giving money, goods or time and effort to those who need
            it.
          </p>
          <button className="text-[#FFF] font-rowdies uppercase rounded-[24px] bg-[#7E8AB8] px-[32px] py-[16px]">
            make a donation
          </button>
        </div>
        <div className="relative">
          <HeaderImage />
        </div>
      </div>
    </div>
  );
};

export default Header;

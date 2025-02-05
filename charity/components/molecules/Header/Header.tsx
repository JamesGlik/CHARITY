import HeaderButton from "@/components/atoms/HeaderButton/HeaderButton";
import HeaderText from "@/components/atoms/HeaderComp/HeaderText";
import HeaderImage from "@/components/atoms/HeaderImage/HeaderImage";
import HeaderLogo from "@/components/atoms/HeaderLogo/HeaderLogo";
import BigRectangle from "@/public/BigRectangle";
import Oval from "@/public/Oval";
import Rectangle from "@/public/Rectangle";
import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  return (
    <div className="bg-[#f3f2e7] relative h-[100vh] z-[1] overflow-hidden lg:h-full">
      <div className="absolute z-[0]">
        <Rectangle />
      </div>
      <div className="absolute top-[150px]">
        <Oval />
      </div>
      <div className="absolute right-0 top-[-40px] lg:hidden z-[-1]">
        <BigRectangle />
      </div>

      <div className="flex items-center gap-x-[58px] px-[16px] pt-[16px] pb-[16px] lg:justify-between">
        <HeaderLogo logo="CHA" />
        <div className="flex items-center justify-between w-full lg:items-end lg:w-auto">
          <div className="flex gap-x-[45px] lg:hidden">
            <HeaderText text="About" />
            <HeaderText text="Causes" />
            <HeaderText text="Services" />
            <HeaderText text="Events" />
            <div className="z-[61]">
              <HeaderText text="Blog" />
            </div>
          </div>
          <div>
            <div className="lg:hidden">
              <HeaderButton button="contact" />
            </div>
            <div className="hidden lg:block">
              <BurgerMenu />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center h-[calc(90vh-20px)] px-[135px] xl:px-[50px] lg:flex-col-reverse lg:items-center lg:h-auto lg:pb-[48px] md:px-[23px]">
        <div className="flex flex-col gap-y-[25px] justify-center items-start lg:gap-y-[15px]">
          <h1 className="text-[72px] font-rowdies text-[#3A1700] font-light leading-[80px] tracking-[-3px] z-[1] sm:text-[56px] sm:leading-[64px] sm:tracking-[-2px]">
            Giving help <br /> to those who <br /> need it
          </h1>
          <p className="font-manrope leading-[32px] text-[rgba(58, 23, 0, 0.50)]">
            It involves giving money, goods or time and effort <br /> to those
            who need it.
          </p>
          <button className="text-[#FFF] font-rowdies uppercase rounded-[24px] bg-[#7E8AB8] px-[32px] py-[16px] hover:bg-[#FFF] hover:text-[#7E8AB8] transition-all">
            make a donation
          </button>
        </div>
        <div className="z-[1]">
          <HeaderImage />
        </div>
      </div>
    </div>
  );
};

export default Header;

import { Button } from "../../../types/HeaderButtonProps/HeaderButtonProps";

const HeaderButton = ({ button }: Button) => {
  return (
    <button className="px-[35px] py-[15px] uppercase border-[1px] border-[rgba(126, 138, 184, 0.30)] rounded-[24px] cursor-pointer font-rowdies text-[#7E8AB8] hover:bg-[#7E8AB8] hover:text-[#FFF] transition-all">
      {button}
    </button>
  );
};

export default HeaderButton;

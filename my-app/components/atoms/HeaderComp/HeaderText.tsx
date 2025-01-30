import { Header } from '../../../types/HeaderTextProps/HeaderTextProps';

const HeaderText = ({ text }: Header) => {
  return (
    <p className='text-[#3A1700] leading-[32px] cursor-pointer font-manrope'>{text}</p>
  );
};

export default HeaderText;
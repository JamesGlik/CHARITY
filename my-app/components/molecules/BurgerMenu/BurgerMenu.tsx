import { useState } from "react";
import { motion } from "framer-motion";
import BurgerMenuIcon from "@/public/BurgerMenuIcon";
import HeaderText from "@/components/atoms/HeaderComp/HeaderText";

const BurgerMenu = () =>  {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="fixed top-4 right-4 z-[60] p-[17px] text-[#7E8AB8] border border-[#7E8AB84E] rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : <BurgerMenuIcon />}
      </button>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 right-0 h-full w-64 bg-[#e89c74] text-white pt-[20px] pl-[20px] z-[50]"
      >
        <ul className="relative z-[51]">
          <HeaderText text="About" />
          <HeaderText text="Causes" />
          <HeaderText text="Services" />
          <HeaderText text="Events" />
          <HeaderText text="Blog" />
          <HeaderText text="Contacts" />
        </ul>
      </motion.div>
    </div>
  );
}

export default BurgerMenu;

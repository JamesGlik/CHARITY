import React from "react";
import Example from "../components/organisms/Example/Example";
import Header from "@/components/molecules/Header/Header";

const index = () => {
  return (
    <div className="container m-auto w-full bg-[#f3f2e7]">
      <Header />
      <Example />
    </div>
  );
};

export default index;

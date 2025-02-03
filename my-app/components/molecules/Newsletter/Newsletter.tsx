import React from 'react';
import Input from '@/components/atoms/Input.tsx/Input';
import LatestButton from '@/components/atoms/LatestButton/LatestButton';

function Newsletter() {
  return (
    <div className="mt-8 w-full sm:w-[329px]">
      <div className="bg-[#F3F2E7] py-[40px] px-[48px] rounded-[12px] text-left flex justify-between sm:flex-col sm:items-start sm:px-[28px]">
        <div className="sm:w-full text-left"> 
          <h3 className="text-[40px] text-[#3A1700] sm:text-[32px]">Newsletter</h3>
          <p className="text-[#3A170080]">
            Bring together people who care about a cause
          </p>
        </div>
        <div className="flex flex-wrap gap-4 sm:flex-col sm:items-start mt-[20px] sm:mt-[0px]">
          <Input placeholder="Your Email" />
          <LatestButton text="Subscribe" />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
import React from 'react';
import Input from '@/components/atoms/Input.tsx/Input';
import LatestButton from '@/components/atoms/LatestButton/LatestButton';

function Newsletter() {
  return (
    <div className="mt-8 w-full mx-auto">
      <div className="bg-[#F3F2E7] py-[40px] px-[48px] rounded-[12px] text-center flex justify-between items-center flex-wrap">
        <div className="text-left">
          <h3 className="text-[40px] text-[#3A1700]">Newsletter</h3>
          <p className="text-[#3A170080]">Bring together people who care about a cause</p>
        </div>
        <div className="flex justify-center gap-4">
          <Input placeholder="Your Email" />
          <LatestButton text="Subscribe" />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
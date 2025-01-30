import React from 'react';

interface BadgeProps {
  text: string;
}

function Badge({ text }: BadgeProps) {
  return (
    <span className="bg-[#E29F72] text-white text-[12px] px-3 py-2 rounded-[16px]">
      {text}
    </span>
  );
}

export default Badge;
import React from 'react';

type ProgressBarProps = {
  progress: number;
  goal: number;
};

export default function ProgressBar({ progress, goal }: ProgressBarProps) {
  const percentage = (progress / goal) * 100;
  return (
    <div className="w-full h-2 bg-gray-300 rounded-[4px]">
      <div
        className="h-2 bg-[#2FB0AB] rounded-[4px]"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
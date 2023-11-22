// components/ProcessStep.tsx
import React from "react";

interface ProcessStepProps {
  icon: JSX.Element; // Assuming you're using SVG icons or similar JSX elements
  title: string;
  description: string;
  showLine?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  icon,
  title,
  description,
  showLine,
}) => {
  const lineStyles = {
    backgroundImage: "linear-gradient(to right, #cbd5e1 50%, transparent 50%)",
    backgroundSize: "10px 2px", // The first value controls the dash length and spacing
    height: "1.5px",
  };
  return (
    <div className="relative flex flex-col items-center p-4 text-center gap-4">
      <div className="w-full absolute top-[75px] transform translate-x-1/2 -z-10">
        {showLine && <div style={lineStyles}></div>}
      </div>
      <div
        className="bg-white rounded-xl shadow-lg w-[115px] h-[115px] mb-2
      flex-center"
      >
        {icon}
      </div>
      <h3 className="text-lg font-light text-orange">{title}</h3>
      <p className="text-sm font-light text-gray-600 px-8 leading-6">
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;

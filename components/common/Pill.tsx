import React from "react";

interface PillProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full border transition-colors duration-200 ${
        active
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-gray-700 border-gray-300"
      }`}
      type="button">
      {label}
    </button>
  );
};

export default Pill;

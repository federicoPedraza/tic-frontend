import { FC } from "react";

interface FeatureProps {
  label: string;
  description: string;
  icon: string;
  color: string;
}

const Feature: FC<FeatureProps> = ({ label, description, icon, color }) => (
  <div className="mt-6 px-6 py-3 bg-white text-[#809AEC] font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100">
    <div className="flex flex-row gap-4 items-center">
      <div className="rounded-full" style={{ backgroundColor: color }}>
        <img className="w-20 h-20" src={icon} alt={label} />
      </div>
      <div>
        <h2>{label}</h2>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default Feature;

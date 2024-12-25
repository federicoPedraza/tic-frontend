import { FC } from "react";

interface FeatureProps {
  label: string;
  description: string;
  icon: string;
  color: string;
}

const Feature: FC<FeatureProps> = ({ label, description, icon, color }) => (
  <div className="flex flex-col items-center  gap-4 font-bold w-48 p-4 rounded-lg">
    <div
      className="rounded-full flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <img className="w-20 h-20" src={icon} alt={label} />
    </div>
    <div className="text-center flex flex-col items-center gap-3 flex-grow">
      <span className="text-xl">{label}</span>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

export default Feature;

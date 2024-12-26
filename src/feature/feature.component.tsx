import { FC } from "react";
import "./feature.component.sass"

interface FeatureProps {
  label: string;
  description: string;
  icon: string;
  color: string;
}

const Feature: FC<FeatureProps> = ({ label, description, icon, color }) => (
  <div className="flex flex-col text-white-smoke items-center  gap-4 font-bold w-48 p-4 rounded-lg">
    <div
      className="rounded-full flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <img className="w-20 h-20" src={icon} alt={label} />
    </div>
    <div className="text-center flex flex-col font-bold items-center gap-4 flex-grow">
      <span className="text-xl text-outlined">{label}</span>
      <span className="text-sm leading-6 text-outlined">{description}</span>
    </div>
  </div>
);

export default Feature;

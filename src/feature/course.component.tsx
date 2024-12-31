import { FC } from "react";
import "./feature.component.sass";

export interface ICourse {
  name: string;
  subname?: string;
  description: string;
  price: string;
  participantCount: number;
  decoration: ICourseDecoration;
}

export interface ICourseDecoration {
  icon?: string;
  color?: string;
  textColor?: string;
  label?: string;
}

const Course: FC<ICourse> = ({ name, subname, description, decoration }) => (
  <div
    className="flex shadow-xl flex-col text-white-smoke items-center gap-4 font-bold w-80 h-3/4 p-4 rounded-2xl"
    style={{ backgroundColor: decoration.color }}
  >
    <div className="flex flex-col text-center">
      <span className="font-title text-2xl">{name}</span>
      {subname && <span className="font-title text-lg">{subname}</span>}
      <hr className="border-dotted border-t-2 w-full mt-4" />
    </div>
    <div className="text-center flex flex-col font-bold items-center gap-4 flex-grow font-body">
      <span
        className="text-sm leading-6"
        style={{ color: decoration.textColor }}
      >
        {description}
      </span>
    </div>
    <div className="flex flex-row gap-2 justify-between">
      <div className="flex flex-row items-center justify-center gap-2">
        <img src="calendar.png" className="w-4 h-4" />
        <span className="font-title underline text-sm">04/01/2025</span>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <img src="clock.png" className="w-4 h-4" />
        <span className="font-title underline text-sm">04/01/2025</span>
      </div>
    </div>
    <button className="bg-white-smoke border-2 border-tomato rounded-lg py-2 w-3/4">
      <span className="text-tomato font-title">INSCRIBIRSE</span>
    </button>
  </div>
);

export default Course;

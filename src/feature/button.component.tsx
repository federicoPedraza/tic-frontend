import { FC } from "react";

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => (
  <button className="mt-6 px-6 py-3 bg-white text-[#809AEC] font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100">
    {label}
  </button>
);

export default Button;

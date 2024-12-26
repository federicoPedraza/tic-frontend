import { FC } from "react";

interface ButtonProps {
  label: string;
  variant?: 'filled' | 'outlined';
}

const Button: FC<ButtonProps> = ({ label, variant = 'filled' }) => {
  const baseClasses = "mt-6 border-2 border-white px-6 py-3 font-bold font-body rounded-lg shadow-md text-[#809AEC] transition-all  hover:drop-shadow-xl";

  const variantClasses = {
    filled: "bg-white hover:drop-shadow-xl",
    outlined: " text-white hover:bg-white hover:text-[#809AEC]",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {label}
    </button>
  );
};

export default Button;

import { ComponentProps } from "react";

type ButtonIcon = ComponentProps<"button">;
const ButtonIcon = ({ children, className, ...props }: ButtonIcon) => {
  return (
    <button
      type="button"
      {...props}
      className={`rounded-full flex items-center justify-center w-14 h-14 shadow-sm hover:shadow-lg transition-all duration-350 hover:text-blue-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;

import { ComponentProps } from "react";

type Button = ComponentProps<"button">;
const Button = ({ children, ...props }: Button) => {
  return (
    <button
      className={`rounded-md px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white ${props.className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

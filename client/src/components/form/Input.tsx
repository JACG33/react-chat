import { ComponentProps } from "react";

type Input = ComponentProps<"input">;
const Input = ({ ...props }: Input) => {
  return (
    <input
      type="text"
      {...props}
      className={`
        border border-blue-500 rounded-md px-2 py-1 focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 outline-none transition-all duration-250
        ${props.className}
      `}
    />
  );
};

export default Input;

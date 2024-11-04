import { ComponentProps } from "react";

type Label = ComponentProps<"label">;

const Label = ({ children, ...props }: Label) => {
  return <label {...props} className={` ${props.className}`}>{children}</label>;
};

export default Label;

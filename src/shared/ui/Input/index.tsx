import { TextFieldProps } from "@mui/material";
import { forwardRef } from "react";

import { InputField } from "./style";

interface Props extends Omit<TextFieldProps, "variant"> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, ...props }: Props, ref) => {
    return <InputField label={label} inputRef={ref} {...props} />;
  }
);

export { InputField, Input };

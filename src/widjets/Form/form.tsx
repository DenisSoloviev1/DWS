import { PropsWithChildren } from "react";

import { StyledForm } from "./";

interface Params {
  submitFn: () => void;
}

export const Form = ({ children, submitFn }: PropsWithChildren<Params>) => {
  return <StyledForm onSubmit={submitFn}>{children}</StyledForm>;
};

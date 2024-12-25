import { CircularProgress } from "@mui/material";
import React from "react";

import { Flex } from "../Flex";
import { ArrowRight } from "../Icon";

import { IconBtn, SubmitBtn, Text } from "./style";

interface Props {
  label: string;
  loading: boolean;
  disabled: boolean;
}

export const SubmitButton: React.FC<Props> = ({
  label,
  disabled,
  loading,
  ...props
}) => {
  return (
    <SubmitBtn
      {...props}
      type="submit"
      $disabled={disabled}
      disabled={disabled}
    >
      <Flex $justify="space-between" $direction="row">
        <Text>{label}</Text>
        {!loading ? (
          <IconBtn>
            <ArrowRight size={15} />
          </IconBtn>
        ) : (
          <CircularProgress />
        )}
      </Flex>
    </SubmitBtn>
  );
};

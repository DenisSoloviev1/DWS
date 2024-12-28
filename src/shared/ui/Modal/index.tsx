import React from "react";
import { Dialog } from "@mui/material";
import { Flex } from "@/shared/ui";
import styled from "styled-components";

export const ModalText = styled.p`
  color: #38424f;
  font-size: 1.625rem;
  font-weight: 500;
`;

interface ModalProps {
  isOpen: boolean;
  message: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, message }) => {
  return (
    <Dialog open={isOpen}>
      <Flex
        style={{ padding: "30px" }}
        $gap={20}
        $justify="space-between"
        $align="center"
        $direction="column"
      >
        <img src="/ic.png" alt="icon" />

        <ModalText>{message}</ModalText>
      </Flex>
    </Dialog>
  );
};

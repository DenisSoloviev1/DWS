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
  onSuccess: boolean;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onSuccess }) => {
  return (
    <Dialog open={isOpen}>
      <Flex
        style={{ padding: "30px" }}
        $gap={20}
        $justify="space-between"
        $align="center"
        $direction="column"
      >
        {onSuccess ? (
          <>
            <img src="/success.png" alt="icon" />

            <ModalText>Заявка отправлена!</ModalText>
          </>
        ) : (
          <>
            <img src="/error.png" alt="icon" />

            <ModalText>Ошибка отправки</ModalText>
          </>
        )}
      </Flex>
    </Dialog>
  );
};

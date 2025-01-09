import styled from "styled-components";
import "../../variables.css";

export const IconBtn = styled.div`
  border-radius: 8px;
  display: flex;
  width: 30px;
  height: 30px;
  padding: 5px;
  background: var(--color-action);
  justify-content: center;
  align-items: center;

  svg {
    fill: var(--color-background-container);
  }
`;

export const Text = styled.span`
  color: var(--color-font);
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
`;

export const SubmitBtn = styled.button<{ $disabled?: boolean }>`
  width: 320px;
  height: 55px;
  padding: 12px;
  border-radius: 16px;
  border: 1px solid #d2dae3;
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.$disabled ? "#F1F4F9" : "rgba(255, 255, 255, 0.2)"};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid var(--color-action);
  }
  &:focus {
    border: 1px solid #d2dae3;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

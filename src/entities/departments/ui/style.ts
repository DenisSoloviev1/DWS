import styled from "styled-components";
import "@/shared/variables.css";

export const NavItem = styled.button<{ $isActive: boolean }>`
  display: flex;
  margin-top: 16px;
  width: 100%;
  max-width: 480px;
  border-radius: 12px;
  border: 1px solid var(--color-font-disable);
  background: ${(props) =>
    props.$isActive ? "#2169ba" : "var(--color-background-container)"};
  color: ${(props) =>
    props.$isActive
      ? "var(--color-background-container)"
      : "var(--color-font)"};
  padding: 16px 40px;
  font-weight: 500;
  transition: all ease 0.5s;

  &:hover {
    border: 1px solid var(--color-background-container);
    background: var(--color-action);
    color: var(--color-background-container);
  }

  @media (max-width: 550px) {
    font-size: 12px;
  }
`;

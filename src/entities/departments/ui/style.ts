import styled from "styled-components";

export const NavItem = styled.button`
display: flex;
  margin-top: 16px;
  width: 100%;
  max-width: 480px;
  border-radius: 12px;
  border: 1px solid var(--color-font-disable);
  background: var(--color-background-container);
  padding: 16px 40px;

  color: var(--color-font);
  text-decoration: none;
  font-weight: 500;
  transition: all ease 0.5s;

  &:hover {
    border: 1px solid var(--color-background-container);
    background: var(--color-action);
    color: var(--color-background-container);
  }

  &.active {
    background: #2169ba;
    color: var(--color-background-container);
    text-decoration: none;
  }

  @media (max-width: 550px) {
    font-size: 12px;
  }
`;
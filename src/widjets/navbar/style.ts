import { NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";
import "@/shared/variables.css";

export const PlainText = styled.p`
  color: var(--color-font);
  font-size: 1.125rem;
  font-weight: 500;

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const NavBarContainer = styled.div`
  width: 40vw;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 900px) {
    width: 100vw;
    padding: 2em;
  }
`;

export const NavLink = styled(BaseNavLink)`
  display: inline-block;
  margin-top: 1em;
  width: 100%;
  max-width: 480px;
  border-radius: 0.75rem;
  border: 1px solid var(--color-font-disable);
  background: var(--color-background-container);
  padding: 1em 2.5em;

  color: var(--color-font);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.01125rem;
  transition: all ease 0.5s;

  &:hover {
    border: 1px solid var(--color-background-container);
    background: var(--color-action);
    color: var(--color-background-container);
    text-decoration: none;
  }

  &.active {
    background: #2169ba;
    color: var(--color-background-container);
    text-decoration: none;
  }

  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
`;

export const TextMessage = styled.p`
  color: var(--color-font);
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.0125rem;
  margin-top: 1rem;

  @media (max-width: 550px) {
    font-size: 1.125rem;
  }
`;

import styled from "styled-components";
import "@/shared/variables.css";

export const PlainText = styled.p`
  color: var(--color-font);
  font-size: 20px;
  font-weight: 500;
`;

export const NavBarContainer = styled.div`
  width: 40vw;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 900px) {
    padding: 30px;
    width: 100vw;
  }
`;


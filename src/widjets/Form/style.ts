import styled from "styled-components";
import "@/shared/variables.css"

export const FormItem = styled.div`
  margin-bottom: 25px;
  width: 100%;
`;

export const Error = styled.p`
  color: var(--color-warning);
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 580px;
`;

export const Assent = styled.p`
  margin: 20px 0;

  a {
    font-weight: 500;
    width: fit-content;
    color: var(--color-action);

    &:hover,
    &:active {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
import styled from "styled-components";

export const Chip = styled.div<{
  $primary?: boolean;
  $disabled?: boolean;
  $not_style?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.$primary && "gap: 0.5em"};
  ${(props) => !props.$primary && "width: 100%"};
  padding: ${(props) =>
    props.$primary ? "10px 20px" : "1rem 3rem"};
  border-radius: 1.8rem;
  background-color: ${(props) => (props.$disabled ? "#C4C4C4" : "#11519c")};
  margin-top: ${(props) => !props.$primary && ".5rem"};
  transition: all 0.2s ease;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  transition: all ease 0.2s;

  &:hover {
    background-color: ${(props) => (props.$disabled ? "#C4C4C4" : "#2169ba")};
    background-color: ${(props) => (props.$not_style ? "#11519c" : "#2169ba")};
    cursor: ${(props) => (props.$not_style ? "default" : "pointer")};
  }

  @media (max-width: 550px) {
    padding: 1em;
  }

  svg {
    fill: #fff;
  }
`;

export const ChipText = styled.span<{
  $primary?: boolean;
  $not_style?: boolean;
}>`
  color: #f4f4f4;
  font-size: ${(props) => (props.$primary ? "1.6rem" : "2.25rem")};
  font-weight: 500;
  cursor: ${(props) => (props.$not_style ? "default" : "pointer")};

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

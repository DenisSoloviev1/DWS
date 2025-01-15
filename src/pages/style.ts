import styled from "styled-components";
import "../shared/variables.css";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 1340px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  h1,
  h2 {
    font-size: 35px;
    letter-spacing: -0.0275rem;
    margin-bottom: 1rem;

    @media (max-width: 550px) {
      font-size: 1.5rem;
    }
  }

  h4 {
    font-size: 2rem;
    line-height: normal;
    letter-spacing: -0.02rem;
    margin-bottom: 0.5rem;

    @media (max-width: 550px) {
      font-size: 1.25rem;
    }
  }

  p {
    font-size: 1.5rem;
    letter-spacing: -0.01125rem;
  }

  @media screen and (max-width: 900px) {
    padding: 0 20px;
    flex-direction: column-reverse;
  }
`;

export const Image = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 50vw;
    object-fit: contain;
  }

  svg {
    width: 100%;
    height: 90%;
  }

  @media screen and (max-width: 900px) {
    height: auto;

    img {
      margin-top: 50px;
      width: auto;
      height: 40vh;
      object-fit: contain;
    }

    svg {
      width: 100vw;
      height: 50vh;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px;
  height: 60px;
  border-radius: 0.75rem;
  gap: 10px;
  background: #11519c;
  color: #fff;

  padding: 0.5em 1.5em;
  border: 0;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.01125rem;
  transition: all ease 0.2s;

  svg {
    height: 45px;
    width: 45px;
    fill: #fff;
  }

  &:hover {
    background-color: #2169ba;
    cursor: pointer;
  }

  &.active {
    background: #11519c;
    color: #fff;
  }
`;

export const Helper = styled.div`
  width: 200px;
  position: relative;
  color: var(--color-action);
  font-size: 1rem;

  .message {
    color: #38424f;
    display: flex;
    flex-direction: column;
    position: absolute;
    display: none;
    transition: all 0.3s ease-in-out;
  }

  a {
    color: var(--color-action);
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;

    span {
      cursor: default;
    }

    .message {
      display: flex;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 550px) {
    .message {
      flex-direction: column;
    }
  }
`;

export const Aside = styled.aside`
  width: 50%;
  height: 100vh;

  @media (max-width: 900px) {
    height: auto;
    width: 100%;
  }
`;

export const Box = styled.div<{ $show: boolean }>`
  display: ${(props) => (props.$show ? "flex" : "none")};
  flex-direction: column;
  border-radius: 50px 0 0 50px;
  background: var(--color-background-container);
  padding: 40px;
  width: 60%;
  min-height: 100vh;
  animation: slide-x 0.5s ease-in-out;

  @media (max-width: 900px) {
    width: 100%;
    padding: 20px;
    border-radius: 30px 30px 0 0;
    align-items: center;
    animation: slide-y 0.5s ease-in-out;
  }
`;

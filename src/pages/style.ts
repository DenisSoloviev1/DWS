import styled from "styled-components";
import "@/shared/variables.css";

export const Wrapper = styled.div`
  margin: 0 auto;
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

    @media (max-width: 550px) {
      font-size: 1rem;
    }
  }

  svg {
    height: 100%;
  }
  @media screen and (max-width: 900px) {
    padding: 0 20px;
    flex-direction: column;

    svg {
      max-width: 100%;
      height: 50vh;
    }
  }
`;

export const Image = styled.img`
  height: 90vh;
  object-fit: contain;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
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
  position: relative;
  color: var(--color-action);
  font-size: 1rem;

  .message {
    color: #38424f;
    display: flex;
    flex-direction: row;
    position: absolute;
    display: none;
    transition: all 0.3s easi-in-out;
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

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const Box = styled.div`
  border-radius: 3.125rem 0 0 3.125rem;
  background: var(--color-background-container);
  padding: 2.5em;
  width: 60%;
  min-height: 100vh;
  animation: slide-y 0.3s easy-in-out;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 1rem 1rem 3rem;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: slide-x 0.3s easy-in-out;
  }
`;

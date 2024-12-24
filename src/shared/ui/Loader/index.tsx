import styled, { keyframes } from "styled-components";

interface LoaderProps {
  message?: string;
}

const circleAnimation = keyframes`
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }
  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0%;
  }
`;

const shadowAnimation = keyframes`
  0% {
    transform: scaleX(1.5);
  }
  40% {
    transform: scaleX(1);
    opacity: 0.7;
  }
  100% {
    transform: scaleX(0.2);
    opacity: 0.4;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Container = styled.div`
  width: 200px;
  height: 60px;
  z-index: 1;
  position: relative;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #11519c;
  left: 15%;
  transform-origin: 50%;
  animation: ${circleAnimation} 0.5s alternate infinite ease;

  &:nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`;

const Shadow = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: ${shadowAnimation} 0.5s alternate infinite ease;

  &:nth-child(4) {
    left: 45%;
    animation-delay: 0.2s;
  }

  &:nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`;

const Message = styled.h2`
  position: absolute;
  top: 100px;
  left: 5px;
  font-size: 30px;
  font-weight: 500;
`;

// Пример использования в компоненте
export const Loader: React.FC<LoaderProps> = ({ message }) => (
  <Wrapper>
    <Container>
      <Circle />
      <Circle />
      <Circle />
      <Shadow />
      <Shadow />
      <Shadow />
      <Message>{message}</Message>
    </Container>
  </Wrapper>
);

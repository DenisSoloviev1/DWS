import styled from "styled-components";

export const Time = styled.div`
  position: absolute;
  top: 40%;
  z-index: 10;
  max-width: 140px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 0.75rem;
  padding: 0.8em 1.5em;
  background: #f1f4f9;
  box-shadow: 1px 2px 8.1px 0px rgba(174, 174, 174, 0.25);

  @media screen and (max-width: 900px){
    top: 60%;
  }
`;

export const TimeAction = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: transparent;

  &:first-child {
    margin-bottom: 1em;
  }

  &:last-child {
    margin-top: 1em;
  }
`;

export const TimeItem = styled.li`
  color: #38424f;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.3rem;

  border-bottom: 1px solid #d2dae3;
  cursor: pointer;
  list-style-type: none;
  padding: 1rem 0.5rem;
  transition: all 0.1s ease;

  &:hover {
    background-color: #c3d3e7;
    border-radius: 0.5rem;
  }

  // &:last-child {
  //   padding-bottom: 0;
  //   margin-bottom: 0;
  //   border: none;
  // }
`;

export const TimeList = styled.ul`
  max-height: 290px;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  -ms-overflow-style: none;
`;

import styled from "styled-components";

export const InputContainer = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  position: relative;

  .icon {
    position: absolute;
    right: 14px;
    bottom: 16px;
    width: 20px;
    height: 20px;
  }

  input {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #f1f4f9;
    border: 1px solid #b9bcbf;
    border-radius: 16px;
    padding: 16px 14px;
    position: relative;

    &:hover {
      border: 1px solid #1f2020;
    }
  }

  &:focus-within {
    input {
      border: 1px solid #1e78d7;
      box-shadow: 0px 0px 0px 1px rgba(30, 120, 215, 1);
    }
  }
`;

export const InputLabel = styled.label`
  max-width: 100%;
  margin-bottom: 8px;
  color: rgb(56, 66, 79);
  white-space: nowrap;
`;

export const Time = styled.div`
  position: absolute;
  bottom: -10px;
  left: 10px;
  z-index: 10;
  max-width: 140px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 16px;
  border: 1px solid #999b9e;
  padding: 12px 24px;
  background: #f1f4f9;
  box-shadow: 1px 2px 8.1px 0px rgba(174, 174, 174, 0.25);

  #1 {
    top: 15px;
    left: 50%;
  }

  #2 {
    bottom: 15px;
    left: 50%;
  }
`;

export const TimeAction = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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

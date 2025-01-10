import styled from 'styled-components';

export const CalendarBody = styled.div`
  position: absolute;
  top: 40%;
  z-index: 10;
  max-width: 300px;
  width: 100%;

  border-radius: 1rem;
  padding: .5em;
  background: #f1f4f9;
  box-shadow: 1px 2px 8.1px 0px rgba(174, 174, 174, 0.25);

  @media (max-width: 550px) {
    left: 50%;
    transform: translateX(-50%);
    max-width: 300px;
  }
`;

export const CalendarTitle = styled.h2`
  color: #38424f;
  font-size: 0.9rem;
  font-weight: bolder;
  line-height: 1.3rem;
`;

export const CalendarActions = styled.button`
  border-radius: 0.45rem;
  border: 0.874px solid #d2dae3;
  display: flex;
  justify-content: center;x
  align-items: center;
  background: transparent;
  padding: 14px;
  width: 42px;
  height: 42px;
  margin-bottom: 1em;

  cursor: pointer;

  @media (max-width: 550px) {
    width: 30px;
    height: 30px;
    padding: 0;
    align-items: center;
  }
`;

export const Weeek = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  padding-top: 1em;
  border-top: 0.874px solid #d2dae3;
`;

export const Days = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;


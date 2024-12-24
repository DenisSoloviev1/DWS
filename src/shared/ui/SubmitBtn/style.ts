import styled from 'styled-components';

export const IconBtn = styled.div`
  border-radius: 0.5rem;
  display: flex;
  width: 30px;
  height: 30px;
  padding: 0.5rem;
  background: #1370b9;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  color: #38424f;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
`;

export const SubmitBtn = styled.button<{ $disabled?: boolean }>`
  width: 320px;
  height: 55px;
  padding: 12px;
  border-radius: 0.75rem;
  border: 1px solid #d2dae3;
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.$disabled ? '#F1F4F9' : 'rgba(255, 255, 255, 0.2)'};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;

  &:hover{
  border: 1px solid #11519c;}
  &:focus{
  border: 1px solid #d2dae3;
}

  @media (max-width: 550px) {
    width: 100%;
  }
`;

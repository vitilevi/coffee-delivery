import styled from 'styled-components';

export const PillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 4px 8px;
  border-radius: 100px;

  span {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 10px;
    font-weight: 700;
    line-height: 130%;
  }
`;

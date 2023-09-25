import styled from 'styled-components';

export const CartTriggerWrapper = styled.button`
  display: block;
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 8px;
  border-radius: 6px;
  position: relative;
  outline: none;
  border: none;

  svg {
    fill: ${(props) => props.theme['yellow-dark']};
  }

  .counter {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -8px;
    right: -8px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.theme['yellow-dark']};

    span {
      color: ${(props) => props.theme.white};
    }
  }
`;

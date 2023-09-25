import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
`;

export const CartTriggerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .location-box {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme['purple-light']};
    padding: 8px;
    border-radius: 6px;
    gap: 4px;

    svg {
      fill: ${(props) => props.theme.purple};
    }

    span {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  .cart-box {
    display: block;
    background-color: ${(props) => props.theme['yellow-light']};
    padding: 8px;
    border-radius: 6px;
    position: relative;

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
  }
`;

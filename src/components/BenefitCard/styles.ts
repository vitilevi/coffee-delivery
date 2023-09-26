import styled from 'styled-components';

type BenefitCardContainerProps = {
  size: number;
};

export const BenefitCardContainer = styled.p<BenefitCardContainerProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-grow: 0;
  flex-shrink: 0;

  div {
    padding: 8px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.size + 16}px;
    height: ${(props) => props.size + 16}px;

    svg {
      fill: ${(props) => props.theme.white};
    }

    &.cartIcon {
      background-color: ${(props) => props.theme['yellow-dark']};
    }

    &.packageIcon {
      background-color: ${(props) => props.theme['base-text']};
    }

    &.timerIcon {
      background-color: ${(props) => props.theme.yellow};
    }

    &.coffeeIcon {
      background-color: ${(props) => props.theme.purple};
    }

    &.locationIcon {
      background-color: ${(props) => props.theme.purple};
    }

    &.moneyIcon {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`;

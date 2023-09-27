import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 256px;
  height: 310px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  .image {
    margin-top: -20px;
    margin-bottom: 16px;
  }

  .tags {
    display: flex;
    justify-content: center;
    gap: 4px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .details {
    text-align: center;
    margin-bottom: 33px;
    padding: 0 20px;

    h3 {
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      color: ${(props) => props.theme['base-label']};
    }
  }

  .controls-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 24px 20px 24px;

    .price-wrapper {
      .price {
        color: ${(props) => props.theme['base-text']};
      }
    }

    .controls {
      display: flex;
      gap: 8px;

      .add-to-cart {
        background-color: ${(props) => props.theme['purple-dark']};
        padding: 8px;
        border-radius: 6px;
        width: 38px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          fill: ${(props) => props.theme.white};
        }
      }
    }
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 72px;
  height: 38px;
  padding: 8px;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    svg {
      fill: ${(props) => props.theme.purple};
    }
  }
`;

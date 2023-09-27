import styled from 'styled-components';
import { breakpoints } from '../../../../utils/breakpoints';

export const PresentationSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.dt} {
    flex-direction: row;
    margin: 94px 0;
    gap: 56px;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: auto;
      width: 100%;
      max-width: 476px;

      @media ${breakpoints.md} {
        width: 90%;
      }

      @media ${breakpoints.dt} {
        width: 90%;
      }

      @media ${breakpoints.dt} {
        width: 476px;
      }
    }
  }
`;

export const CoffeeDeliveryPresentation = styled.div`
  flex-basis: 90%;

  h1 {
    margin-bottom: 16px;
  }

  .subtitle {
    margin-bottom: 66px;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }

  .benefits-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;

    @media ${breakpoints.dt} {
      margin-bottom: unset;
      flex-flow: row wrap;
      justify-content: flex-start;
    }
  }

  .benefits {
    color: ${(props) => props.theme['base-text']};
    display: flex;
    flex-flow: column nowrap;
    gap: 20px 40px;

    @media ${breakpoints.md} {
      flex-flow: row wrap;
      align-items: center;
      justify-content: flex-start;
    }
  }
`;

import styled from 'styled-components';
import { breakpoints } from '../../../../utils/breakpoints';

export const CoffeeSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
`;

export const CoffeesDisplay = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 40px 32px;
  margin-top: 54px;

  @media ${breakpoints.dt} {
    justify-content: flex-start;
  }
`;

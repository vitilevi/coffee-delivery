import styled from 'styled-components';
import { breakpoints } from '../utils/breakpoints';

export const PageWrapper = styled.div`
  margin: 0 10px;
  width: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media ${breakpoints.sm} {
    margin: 0 auto;
    max-width: 90%;
  }

  @media ${breakpoints.lg} {
    max-width: 85%;
  }

  @media ${breakpoints.dt} {
    max-width: 1120px;
  }

  @media ${breakpoints.xl} {
  }
`;

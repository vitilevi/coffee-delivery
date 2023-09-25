import styled from 'styled-components';
import { breakpoints } from '../utils/breakpoints';

export const PageWrapper = styled.div`
  margin: 0 10px;
  width: auto;

  @media ${breakpoints.md} {
    margin: 0 auto;
    max-width: 90%;
  }

  @media ${breakpoints.lg} {
    margin: 0 auto;
    max-width: 80%;
  }

  @media ${breakpoints.xl} {
    margin: 0 auto;
    max-width: 65%;
  }
`;

export const FooterWrapper = styled.footer``;

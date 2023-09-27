import styled from 'styled-components';
import { breakpoints } from '../../../utils/breakpoints';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  padding: 16px 0;

  @media ${breakpoints.md} {
    padding: 32px 0;
  }

  .icons {
    margin-top: 4px;
    display: flex;
    gap: 8px;

    a {
      height: 22px;
      svg {
        fill: ${(props) => props.theme.purple};

        &:hover {
          fill: ${(props) => props.theme['purple-dark']};
        }
      }
    }
  }
`;

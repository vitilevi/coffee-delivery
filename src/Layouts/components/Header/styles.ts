import styled from 'styled-components';
import { breakpoints } from '../../../utils/breakpoints';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  @media ${breakpoints.md} {
    padding: 32px 0;
  }

  .right-container {
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
  }
`;

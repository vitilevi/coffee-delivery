import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export const CheckoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  @media ${breakpoints.md} {
    flex-direction: row;
  }
`;

export const CompleteYourOrderContainer = styled.div``;

export const PaymentContainer = styled.div``;

export const SelectedCoffeesContainer = styled.div``;

import {
  CheckoutContainer,
  CompleteYourOrderContainer,
  PaymentContainer,
  SelectedCoffeesContainer
} from './styles';

type CheckoutProps = {};

export function Checkout({}: CheckoutProps) {
  return (
    <CheckoutContainer>
      <form>
        <div>
          <CompleteYourOrderContainer></CompleteYourOrderContainer>
          <PaymentContainer></PaymentContainer>
        </div>
        <SelectedCoffeesContainer></SelectedCoffeesContainer>
      </form>
    </CheckoutContainer>
  );
}

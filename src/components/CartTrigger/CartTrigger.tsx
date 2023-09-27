import { ShoppingCart } from '@phosphor-icons/react';
import { CartTriggerWrapper } from './styles';
import { ComponentPropsWithoutRef } from 'react';

type CartTriggerProps = {
  counter?: number;
  size?: number;
} & ComponentPropsWithoutRef<'button'>;

export function CartTrigger({ counter = 0, size = 22, ...attributes }: CartTriggerProps) {
  return (
    <CartTriggerWrapper {...attributes}>
      {counter > 0 && (
        <div className='counter'>
          <span className='text-xs'>{counter}</span>
        </div>
      )}
      <ShoppingCart size={size} weight='fill' />
    </CartTriggerWrapper>
  );
}

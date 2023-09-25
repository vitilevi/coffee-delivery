import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { CartWrapper, HeaderWrapper } from './styles';
import { CoffeeDeliveryIcon } from './CoffeeDeliveryIcon';
import { Link } from 'react-router-dom';

export function Header() {
  const cartItemsLength = 3;

  return (
    <HeaderWrapper>
      <div className='header-logo'>
        <Link to='/'>
          <CoffeeDeliveryIcon />
        </Link>
      </div>
      <CartWrapper>
        <div className='location-box'>
          <MapPin size={22} weight='fill' />
          <span className='text-s'>São Carlos, SP</span>
        </div>
        <Link to='/cart' className='cart-box'>
          {cartItemsLength > 0 && (
            <div className='counter'>
              <span className='text-xs'>{cartItemsLength}</span>
            </div>
          )}
          <ShoppingCart size={22} weight='fill' />
        </Link>
      </CartWrapper>
    </HeaderWrapper>
  );
}

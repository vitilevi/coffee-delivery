import { MapPin } from '@phosphor-icons/react';
import { HeaderWrapper } from './styles';
import { CoffeeDeliveryIcon } from '../../../components/ui/Icons/CoffeeDeliveryIcon';
import { Link, useNavigate } from 'react-router-dom';
import { CartTrigger } from '../../../components/CartTrigger';

export function Header() {
  const navigate = useNavigate();
  const cartItemsLength = 3;

  function handleRedirectToCart() {
    navigate('/cart');
  }

  return (
    <HeaderWrapper>
      <div className='header-logo'>
        <Link to='/'>
          <CoffeeDeliveryIcon />
        </Link>
      </div>
      <div className='right-container'>
        <div className='location-box'>
          <MapPin size={22} weight='fill' />
          <span className='text-s'>São Carlos, SP</span>
        </div>
        <CartTrigger onClick={handleRedirectToCart} counter={cartItemsLength} />
      </div>
    </HeaderWrapper>
  );
}

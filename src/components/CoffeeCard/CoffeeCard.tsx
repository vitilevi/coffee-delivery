import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react';
import { Coffee } from '../../data/coffees';
import { CoffeeCardContainer, QuantityWrapper } from './styles';
import { Pill } from '../ui/Pill';
import { useState } from 'react';

type CoffeeCardProps = {
  coffee: Coffee;
};

export function CoffeeCard({
  coffee: { id, image, tags, name, description, price }
}: CoffeeCardProps) {
  const [counter, setCounter] = useState(1);

  function handleStepUp() {
    if (counter < 9) {
      setCounter((state) => state + 1);
    }
  }

  function handleStepDown() {
    if (counter > 1) {
      setCounter((state) => state - 1);
    }
  }

  const minusIsDisabled = counter === 1;
  const plusIsDisabled = counter === 9;

  return (
    <CoffeeCardContainer key={id}>
      <div className='image'>
        <img src={image} />
      </div>
      <div className='tags'>
        {tags.map((tag, index) => (
          <Pill key={index}>{tag}</Pill>
        ))}
      </div>
      <div className='details'>
        <h3 className='title title-s'>{name}</h3>
        <p className='text text-s'>{description}</p>
      </div>
      <div className='controls-wrapper'>
        <div className='price-wrapper'>
          <span className='currency text text-s'>R$</span>
          <span className='price title title-m'>{price.toString().padEnd(4, '0')}</span>
        </div>
        <div className='controls'>
          <QuantityWrapper>
            <button type='button' onClick={handleStepDown} disabled={minusIsDisabled}>
              <Minus size={14} weight='bold' />
            </button>
            <span>{counter}</span>
            <button type='button' onClick={handleStepUp} disabled={plusIsDisabled}>
              <Plus size={14} weight='bold' />
            </button>
          </QuantityWrapper>
          <button className='add-to-cart' type='button'>
            <ShoppingCartSimple size={22} weight='fill' />
          </button>
        </div>
      </div>
    </CoffeeCardContainer>
  );
}

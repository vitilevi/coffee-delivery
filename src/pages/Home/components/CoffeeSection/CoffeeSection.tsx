import { CoffeeSectionWrapper, CoffeesDisplay } from './styles';
import coffeeList from '../../../../data/coffees';
import { CoffeeCard } from '../../../../components/CoffeeCard';

export function CoffeeSection() {
  return (
    <CoffeeSectionWrapper>
      <h2 className='title title-l'>Nossos cafés</h2>
      <CoffeesDisplay>
        {coffeeList.map((coffee) => (
          <CoffeeCard coffee={coffee} />
        ))}
      </CoffeesDisplay>
    </CoffeeSectionWrapper>
  );
}

import { HomeWrapper } from './styles';
import MainCoffee from '../../assets/main-coffee.png';

export function Home() {
  return (
    <HomeWrapper>
      <section>
        <div>
          <h2 className='title-xl'>Encontre o café perfeito para qualquer hora do dia</h2>
          <p className='text-l'>
            Com o Coffee Delivery você recebe seu café onde estiver a qualquer hora
          </p>
          <div>
            <p></p>
          </div>
        </div>
        <div>
          <img src={MainCoffee} />
        </div>
      </section>
      <section>Coffees</section>
    </HomeWrapper>
  );
}

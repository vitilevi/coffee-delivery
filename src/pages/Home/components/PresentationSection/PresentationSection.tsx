import MainCoffee from '../../../../assets/main-coffee.png';
import { BenefitCard } from '../../../../components/BenefitCard';
import { CoffeeDeliveryPresentation, PresentationSectionWrapper } from './styles';

export function PresentationSection() {
  return (
    <PresentationSectionWrapper>
      <CoffeeDeliveryPresentation>
        <h2 className='title title-xl'>Encontre o café perfeito para qualquer hora do dia</h2>
        <p className='subtitle text-l'>
          Com o Coffee Delivery você recebe seu café onde estiver a qualquer hora
        </p>
        <div className='benefits'>
          <BenefitCard type='cart'>
            <span>Compra simples e segura</span>
          </BenefitCard>
          <BenefitCard type='package'>
            <span>Embalagem mantém o café intacto</span>
          </BenefitCard>
          <BenefitCard type='timer'>
            <span>Entrega rápica e rastreada</span>
          </BenefitCard>
          <BenefitCard type='coffee'>
            <span>O café chega fresquinho até você</span>
          </BenefitCard>
        </div>
      </CoffeeDeliveryPresentation>
      <div className='image-wrapper'>
        <img src={MainCoffee} />
      </div>
    </PresentationSectionWrapper>
  );
}

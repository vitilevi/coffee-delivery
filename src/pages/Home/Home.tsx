import { HomeWrapper } from './styles';
import { PresentationSection } from './components/PresentationSection';
import { CoffeeSection } from './components/CoffeeSection';

export function Home() {
  return (
    <HomeWrapper>
      <PresentationSection />
      <CoffeeSection />
    </HomeWrapper>
  );
}

import { HomeWrapper } from './styles';
import { PresentationSection } from './components/PresentationSection';
import { CoffeesSection } from './components/CoffeesSection';

export function Home() {
  return (
    <HomeWrapper>
      <PresentationSection />
      <CoffeesSection />
    </HomeWrapper>
  );
}

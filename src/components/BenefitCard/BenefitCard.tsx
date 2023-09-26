import {
  ShoppingCart,
  MapPin,
  CurrencyDollar,
  Package,
  Timer,
  Coffee
} from '@phosphor-icons/react';
import { ReactNode } from 'react';
import { BenefitCardContainer } from './styles';

const icons = (size: number) => ({
  cart: <ShoppingCart size={size} weight='fill' />,
  package: <Package size={size} weight='fill' />,
  timer: <Timer size={size} weight='fill' />,
  coffee: <Coffee size={size} weight='fill' />,
  location: <MapPin size={size} weight='fill' />,
  money: <CurrencyDollar size={size} weight='thin' />
});

type BenefitCardProps = {
  children: ReactNode;
  type: keyof ReturnType<typeof icons>;
  size?: number;
};

export function BenefitCard({ children, type, size = 16 }: BenefitCardProps) {
  const Icon = icons(size)[type];
  const iconContainerClassName = `${type}Icon`;

  return (
    <BenefitCardContainer size={size}>
      <div className={iconContainerClassName}>{Icon}</div>
      {children}
    </BenefitCardContainer>
  );
}

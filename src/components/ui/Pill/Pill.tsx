import { ReactNode } from 'react';
import { PillContainer } from './styles';

type PillProps = {
  children: ReactNode;
};

export function Pill({ children }: PillProps) {
  return (
    <PillContainer>
      <span>{children}</span>
    </PillContainer>
  );
}

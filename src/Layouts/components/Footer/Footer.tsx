import { Envelope, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import { FooterWrapper } from './styles';

export function Footer() {
  return (
    <FooterWrapper>
      <span className='text-s'>Developed by Víctor Faria, contact me!</span>
      <div className='icons'>
        <a href='mailto:vitilevi@hotmail.com'>
          <Envelope size={22} weight='fill' />
        </a>
        <a href='https://www.linkedin.com/in/vitilevi/' target='_blank' rel='noopener noreferrer'>
          <LinkedinLogo size={22} weight='fill' />
        </a>
        <a href='https://github.com/vitilevi' target='_blank' rel='noopener noreferrer'>
          <GithubLogo size={22} weight='fill' />
        </a>
      </div>
    </FooterWrapper>
  );
}

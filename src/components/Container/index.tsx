import { ReactNode } from 'react';
import * as S from './styles';
import { Header, Menu, Footer } from '../';
import { useMain } from '@/hooks';

interface IContainer {
  children: ReactNode
}

export interface IButtons {
  title: string;
  value: string;
}

export const Container = ({ children }: IContainer) => {
  const { showMenu, onSetShowMenu, scrollToTop } = useMain();

  const buttons: IButtons[] = [
    {title: "Home",value:"home"},
    {title: "Personagens",value:"characters"},
    {title: "Cenário",value:"tutorial"},
  ]

  const handleGoTo = (value: string) => {
    if (value === "home") {
      scrollToTop();
      return;
    }

    const element = document.getElementById(value);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; 
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

   onSetShowMenu(false);
  }

  return (
    <S.Container>
      <Header
        buttons={buttons}
        handleGoTo={handleGoTo}        
      />

      {showMenu && 
        <Menu
          buttons={buttons}
          handleGoTo={handleGoTo}        
        />}

      {children}
      <Footer />
    </S.Container>
  )
}
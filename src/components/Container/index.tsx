import { ReactNode, useEffect, useState } from 'react';
import * as S from './styles';
import { Header, ModalWallet, Menu, Footer, HeaderFake } from '../';
import { useMain } from '@/hooks';

interface IContainer {
  children: ReactNode
}

export interface IButtons {
  title: string;
  value: string;
}

export const Container = ({ children }: IContainer) => {
  const { showModalWallet, showMenu, onSetShowMenu } = useMain();

  const [changeHeader, setChangeHeader] = useState(false);

  const buttons: IButtons[] = [
    {title: "Feature",value:"feature"},
    {title: "Characters",value:"characters"},
    {title: "Tutorial",value:"tutorial"},
  ]

  const handleGoTo = (value: string) => {
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

  useEffect(() => {
    const handleScroll = () => {
      setChangeHeader(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Container>
      {changeHeader ?
        <Header
          buttons={buttons}
          handleGoTo={handleGoTo}        
        />
        :
        <HeaderFake
          buttons={buttons}
          handleGoTo={handleGoTo}        
        />
      }
      {showModalWallet && 
        <ModalWallet />}
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
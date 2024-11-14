import { ReactNode, useEffect, useState } from 'react';
import * as S from './styles';
import { Header, ModalWallet, Menu, Footer, HeaderFake } from '../';
import { useMain } from '@/hooks';

interface IContainer {
  children: ReactNode
}

export const Container = ({ children }: IContainer) => {
  const { showModalWallet, showMenu } = useMain();

  const [changeHeader, setChangeHeader] = useState(false);

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
        <Header />
        :
        <HeaderFake />
      }
      {showModalWallet && 
        <ModalWallet />}
      {showMenu && 
        <Menu />}

      {children}
      <Footer />
    </S.Container>
  )
}
import { ReactNode } from 'react';
import * as S from './styles';
import { Header, ModalWallet, Menu, Footer } from '../';
import { useMain } from '@/hooks';

interface IContainer {
  children: ReactNode
}

export const Container = ({ children }: IContainer) => {
  const { showModalWallet, showMenu } = useMain();

  return (
    <S.Container>
      <Header />
      {showModalWallet && 
        <ModalWallet />}
      {showMenu && 
        <Menu />}

      {children}
      <Footer />
    </S.Container>
  )
}
import * as S from './styles';
import { IoCloseSharp } from 'react-icons/io5';
import { useMain } from '@/hooks';
import { IButtons } from '../Container';
import { ConnectButton } from "thirdweb/react";

interface IMenu {
  buttons: IButtons[];
  handleGoTo: (value: string) => void;
}

export const Menu = ({ buttons, handleGoTo }: IMenu) => {
  const { onSetShowMenu, client, wallets, userAddress, onSetOpenModal, openModal, pancakeSwapURL } = useMain();

  return (
    <S.Container>
      <S.ButtonClose onClick={() => onSetShowMenu(false)}><IoCloseSharp /></S.ButtonClose>
       
      <S.Main>
        {buttons.map((button: IButtons, index: number) => {
          return <S.Buttons key={index} onClick={() => handleGoTo(button.value)}>{button.title}</S.Buttons>
        })}

        {(userAddress !== "" && userAddress) && <S.ButtonAA href={pancakeSwapURL} target="_blank">Comprar Moeda</S.ButtonAA>}
        {(userAddress !== "" && userAddress) && <S.ButtonA onClick={() => onSetOpenModal(!openModal)}>Comprar Moeda Via QR</S.ButtonA>}

        <ConnectButton
          client={client}
          wallets={wallets}
          connectModal={{
            size: "wide",
            showThirdwebBranding: false,
          }}
          detailsModal={{
            payOptions: {
              buyWithFiat: {
                testMode: true,
              },
            },
          }}
        />
      </S.Main>
    </S.Container>
  );
};
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
  const { onSetShowMenu, client, wallets, userAddress } = useMain();

  return (
    <S.Container>
        <S.ButtonClose onClick={() => onSetShowMenu(false)}>
          <IoCloseSharp />
        </S.ButtonClose>
       
      <S.Main>
        {buttons.map((button: IButtons, index: number) => {
          return (
            <S.Buttons
              key={index}
              onClick={() => handleGoTo(button.value)}
            >
              {button.title}
            </S.Buttons>
          )
          
        })}

         {userAddress && 
            <S.ButtonA href="https://pancakeswap.finance/?outputCurrency=0x5FB60A9e69B53EDbC95a5a2D9DD4ABD8C16c4233&inputCurrency=0x2170Ed0880ac9A755fd29B2688956BD959F933F8" target="_blank">Comprar Moeda</S.ButtonA>
          }

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
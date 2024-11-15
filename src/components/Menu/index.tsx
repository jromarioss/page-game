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
  const { onSetShowMenu, client, wallets } = useMain();

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

        <ConnectButton
          client={client}
          wallets={wallets}
          connectModal={{
            size: "wide",
            showThirdwebBranding: false,
          }}
        />
      </S.Main>
    </S.Container>
  );
};

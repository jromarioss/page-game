import * as S from './styles';
import { IoCloseSharp } from 'react-icons/io5';
import { useMain } from '@/hooks';
import { IButtons } from '../Container';

interface IMenu {
  buttons: IButtons[];
  handleGoTo: (value: string) => void;
}

export const Menu = ({ buttons, handleGoTo }: IMenu) => {
  const { onSetShowMenu, onSetShowModalWallet } = useMain();

  const handleShowModalWallet = () => {
    onSetShowMenu(false);
    onSetShowModalWallet(true)
  }

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

        <S.ButtonWallet onClick={handleShowModalWallet}>
          Connect Wallet
        </S.ButtonWallet>
      </S.Main>
    </S.Container>
  );
};

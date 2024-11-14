import * as S from './styles';
import { IoCloseSharp } from 'react-icons/io5';
import { useMain } from '@/hooks';

interface IButtons {
  title: string;
  value: string;
}

export const Menu = () => {
  const { onSetShowMenu, onSetShowModalWallet } = useMain();

  const buttons: IButtons[] = [
    {title: "Feature",value:"feature"},
    {title: "Characters",value:"characters"},
    {title: "Tutorial",value:"tutorial"},
  ]

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
            <S.Buttons key={index}>
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

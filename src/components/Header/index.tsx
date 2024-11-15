import { useMain } from "@/hooks";
import * as S from "./styles";
import { IoMenu } from "react-icons/io5";
import { IButtons } from "../Container";

interface IHeader {
  buttons: IButtons[];
  handleGoTo: (value: string) => void;
}

export const Header = ({ buttons, handleGoTo }: IHeader) => {
  const { onSetShowMenu, onSetShowModalWallet } = useMain();

  return (
    <S.Container>
      <S.Logo></S.Logo>

      <S.Nav>
        <S.ButtonMenu onClick={() => onSetShowMenu(true)}>
          <IoMenu />
        </S.ButtonMenu>

        <S.NavButtons>
          {buttons.map((button: IButtons, index: number) => {
            return (
              <S.Button
                key={index}
                onClick={() => handleGoTo(button.value)}
              >
                {button.title}
              </S.Button>
            )
          })}

          <S.ButtonWallet onClick={() => onSetShowModalWallet(true)}>
            Connect Wallet
          </S.ButtonWallet>
        </S.NavButtons>       
      </S.Nav>
    </S.Container>
  )
}
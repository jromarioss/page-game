import { useMain } from "@/hooks";
import * as S from "./styles";
import { IoMenu } from "react-icons/io5";


export const Header = () => {
  const { onSetShowMenu } = useMain();

  return (
    <S.Container>
      <S.Logo></S.Logo>

      <S.Nav>
        <S.ButtonMenu onClick={() => onSetShowMenu(true)}>
          <IoMenu />
        </S.ButtonMenu>       
      </S.Nav>
    </S.Container>
  )
}
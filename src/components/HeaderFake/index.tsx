import { useMain } from "@/hooks";
import * as S from "./styles";
import { IoMenu } from "react-icons/io5";


export const HeaderFake = () => {
  const { onSetShowMenu } = useMain();

  return (
    <S.Container>
      <S.Logo></S.Logo>

      <S.Nav>
        <S.ButtonMenu onClick={() => onSetShowMenu(true)}>
          <IoMenu />
        </S.ButtonMenu> 

        <S.NavButtons>
          <S.Button>Features</S.Button>
          <S.Button>Characters</S.Button>
          <S.Button>Tutorial</S.Button>
        </S.NavButtons>        
      </S.Nav>
    </S.Container>
  )
}
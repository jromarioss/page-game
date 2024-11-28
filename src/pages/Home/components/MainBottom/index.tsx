import * as S from "./styles";
import { ButtonPlay } from "@/components";

export const MainBottom = () => {
  return (
    <S.Container>
      <S.Text>
        <h2>Jogue Agora!</h2>
        <p>Prepare-se para a ação! Jogue agora e controle dinossauros explosivos. A aventura começa em Dyno Bomber!</p>
      </S.Text>

      <ButtonPlay />
    </S.Container>
  )
}
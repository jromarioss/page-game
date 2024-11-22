import * as S from "./styles";
import { ButtonPlay } from "@/components";

export const MainBottom = () => {
  return (
    <S.Container>
      <S.Text>
        <h2>SEASON 2 IS LIVE NOW!</h2>
        <p>After a few months of freedom, the queen fell into the hands of the king of Dinosaurland again. Panic? No more! Legends know how to free her.</p>
      </S.Text>

      <ButtonPlay />
    </S.Container>
  )
}
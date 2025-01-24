import * as S from "./styles";
import { useMain } from "@/hooks";
import EggIMG from "@/assets/egg.png";

export const BuyItem = () => {
  const { openModal, onSetOpenModal } = useMain();

  return (
    <S.Container>
      <S.Text>
        <h2>Valores da dynocoin e ovo</h2>
        <p>1 dynocoin custa 1 USDT</p>
        <p>1 ovo custa 100 dynocoins</p>
      </S.Text>

      <S.Ovo className="absolute">
        <img src={EggIMG} alt="" />
      </S.Ovo>

      <S.Subscribe>
        <S.Button onClick={() => onSetOpenModal(true)}>COMPRAR AGORA</S.Button>
      </S.Subscribe>
    </S.Container>
  )
}
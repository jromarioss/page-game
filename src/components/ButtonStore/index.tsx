import * as S from "./styles";
import PlayIMG from "@/assets/play.png";
import AppleIMG from "@/assets/apple.png";

interface IButtonStore {
  type: number;
}

export const ButtonStore = ({ type }: IButtonStore) => {
  return (
    <S.Container>
      {type === 1 ?
        <img src={PlayIMG} />
        :
        <img src={AppleIMG} />
      }

      {type === 1 ?
        <S.Text>
          <p>GET IT ON</p>
          <span>Google Play</span>
        </S.Text>
        :
        <S.Text>
          <p>Available on the</p>
          <span>App Store</span>
        </S.Text>
      }
    </S.Container>
  )
}
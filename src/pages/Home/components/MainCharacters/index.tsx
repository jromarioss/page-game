import * as S from "./styles";
import Dino1PNG from "@/assets/dino01.png";
import Dino2PNG from "@/assets/dino02.png";
import Dino3PNG from "@/assets/dino03.png";
import Dino4PNG from "@/assets/dino04.png";
import Dino5PNG from "@/assets/dino05.png";
import Dino6PNG from "@/assets/dino06.png";

export const MainCharacters = () => {
  return (
    <S.Container id="characters">
      <S.Text>
        <h2>Characters</h2>
        <p>Lorem ipsum dolor charascter</p>
      </S.Text>

      <S.Cards>
        <S.Card>
          <S.CardImg>
            <img src={Dino1PNG} alt="Dinossauro img" />
          </S.CardImg>

          <S.CardInfo>
            <h2>Fearless Healer</h2>
            <p>Becomes tiny and manipulates metal</p>
            <S.Type>Female</S.Type>
          </S.CardInfo>
        </S.Card>

        <S.Wrapp>
          <S.Card2>
            <S.CardImg>
              <img src={Dino3PNG} alt="Dinossauro img" />
            </S.CardImg>

            <S.CardInfo2>
              <h2>Fearless Healer</h2>
              <p>Becomes tiny and manipulates metal</p>
              <S.Type>Female</S.Type>
            </S.CardInfo2>
          </S.Card2>

          <S.Card2>
            <S.CardImg>
              <img src={Dino2PNG} alt="Dinossauro img" />
            </S.CardImg>

            <S.CardInfo2>
              <h2>Fearless Healer</h2>
              <p>Becomes tiny and manipulates metal</p>
              <S.Type>Female</S.Type>
            </S.CardInfo2>
          </S.Card2>

          <S.Card2>
            <S.CardImg>
              <img src={Dino5PNG} alt="Dinossauro img" />
            </S.CardImg>

            <S.CardInfo2>
              <h2>Fearless Healer</h2>
              <p>Becomes tiny and manipulates metal</p>
              <S.Type>Female</S.Type>
            </S.CardInfo2>
          </S.Card2>

          <S.Card2>
            <S.CardImg>
              <img src={Dino4PNG} alt="Dinossauro img" />
            </S.CardImg>

            <S.CardInfo2>
              <h2>Fearless Healer</h2>
              <p>Becomes tiny and manipulates metal</p>
              <S.Type>Female</S.Type>
            </S.CardInfo2>
          </S.Card2>
        </S.Wrapp>
      </S.Cards>
    </S.Container>
  )
}
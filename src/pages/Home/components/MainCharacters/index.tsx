import * as S from "./styles";
import Dino1PNG from "@/assets/dino01.png";
import Dino2PNG from "@/assets/dino02.png";
import Dino3PNG from "@/assets/dino03.png";
import Dino4PNG from "@/assets/dino04.png";

export const MainCharacters = () => {
  return (
    <S.Container id="characters">
      <S.Text>
        <h2>PERSONAGENS</h2>
        <p>Dinossauros únicos, poderosos e estratégicos.</p>
      </S.Text>

      <S.Cards>
        <S.Card>
          <S.CardImg
            className="md:w-[450px] md:h-[450px] xl:w-[400px] xl:h-[400px]"
          >
            <img src={Dino1PNG} alt="Dinossauro img" />
          </S.CardImg>

          <S.CardInfo>
            <h2>Dinossaur</h2>
            <p>Bravura ancestral pronta para explosões.</p>
          </S.CardInfo>
        </S.Card>

        <S.Wrapp>
          <S.Card2>
            <S.CardImg><img src={Dino3PNG} alt="Dinossauro img" /></S.CardImg>

            <S.CardInfo2>
              <h2>Épico</h2>
              <p>Habilidades devastadoras para dominar batalhas.</p>
            </S.CardInfo2>
          </S.Card2>

          <S.Card2>
            <S.CardImg><img src={Dino2PNG} alt="Dinossauro img" /></S.CardImg>

            <S.CardInfo2>
              <h2>Lendario</h2>
              <p>Força incomparável, símbolo de poder.</p>
            </S.CardInfo2>
          </S.Card2>

          <S.Card2>
            <S.CardImg><img src={Dino4PNG} alt="Dinossauro img" /></S.CardImg>

            <S.CardInfo2>
              <h2>Raro</h2>
              <p>Agilidade estratégica para surpreender inimigos.</p>
            </S.CardInfo2>
          </S.Card2>
        </S.Wrapp>
      </S.Cards>
    </S.Container>
  )
}
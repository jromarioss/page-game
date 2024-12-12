import * as S from "./styles";
import Bg02 from "@/assets/bg02.jpg";

export const MainCenary = () => {
  return (
    <S.Container id="cenary">
      <S.Text>
        <h2>Cenários</h2>
        <p>Os cenários de Dyno Bomber são tão emocionantes quanto perigosos! Cada arena é cuidadosamente projetada para oferecer uma experiência única, repleta de obstáculos, armadilhas e elementos interativos que desafiam até os jogadores mais habilidosos. Explore florestas densas, vulcões ativos e ruínas antigas, enquanto utiliza o ambiente ao seu favor para superar seus adversários. Prepare-se para batalhas épicas em locais que trazem a pré-história à vida de forma explosiva!</p>
      </S.Text>

      <S.Video>
        <img src={Bg02} alt="" />
      </S.Video>
    </S.Container>
  );
};

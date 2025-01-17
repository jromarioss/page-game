import * as S from "./styles";
import { FaChevronRight } from "react-icons/fa6";

export const MainTop = () => {
  return (
    <S.Container>
      <S.InfoTop id="home">
        <S.Info>
          <h2>Dyno Bomber</h2>
          <p>Explore aventuras explosivas em Dyno Bomber! Controle dinossauros, plante bombas e conquiste cada desafio!</p>
        </S.Info>
      </S.InfoTop>

      <S.Main>
        <h2>Explosões e Aventura Pré-histórica</h2>
        <p>Junte-se à batalha épica dos dinossauros e prove que você é o melhor em Dyno Bomber!</p>
      </S.Main>

      <S.InfoBottom>
        <S.InfoBottomText>
          <h2>DINOSSAUROS COM PERSONALIDADE</h2>
          <p>Explore uma seleção incrível de dinossauros, cada um com habilidades únicas e muita atitude explosiva.</p>

          <S.ButtonPlay href="https://dynobomb.com.br/dyno/" target="_blank">
            Play now <FaChevronRight />
          </S.ButtonPlay>
        </S.InfoBottomText>

        <S.InfoBottomText>
          <h2>ITENS PODEROSOS</h2>
          <p>Descubra diversos itens especiais que podem virar o jogo e ajudar você a dominar cada partida.</p>

          <S.ButtonPlay href="https://dynobomb.com.br/dyno/" target="_blank">
            Play now <FaChevronRight />
          </S.ButtonPlay>
        </S.InfoBottomText>

        <S.InfoBottomText>
          <h2>CENÁRIOS DINÂMICOS</h2>
          <p>Enfrente desafios em arenas interativas e cheias de armadilhas, testando suas habilidades ao máximo.</p>

          <S.ButtonPlay href="https://dynobomb.com.br/dyno/" target="_blank">
            Play now <FaChevronRight />
          </S.ButtonPlay>
        </S.InfoBottomText>
      </S.InfoBottom>
    </S.Container>
  )
}
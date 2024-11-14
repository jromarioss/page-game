import * as S from "./styles";

export const MainEmail = () => {
  return (
    <S.Container>
      <S.Text>
        <h2>SUBSCRIBE FOR THE QUEEN NEWS</h2>
        <p>Subscribe today to receive the latest Defend the Queen news, updates, behind-the-scenes content, offers, and more (including other news, products, events, and promotions) by email.</p>
      </S.Text>

      <S.Subscribe>
        <S.Input type="email" />
        <S.Button>SUBSCRIBE</S.Button>
      </S.Subscribe>
    </S.Container>
  )
}
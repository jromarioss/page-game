import * as S from "./styles";

interface IBanner {
  data: string;
}

export const Banner = ({ data }: IBanner) => {

  return (
    <S.Container>
      <div className="inline-block whitespace-nowrap mr-12 animate-blinkmarquee">
        <S.Text>Lançamento dia {data}</S.Text>
      </div>
      <div className="inline-block whitespace-nowrap mr-12 animate-blinkmarquee">
        <S.Text>Lançamento dia {data}</S.Text>
      </div>
      <div className="inline-block whitespace-nowrap mr-12 animate-blinkmarquee">
        <S.Text>Lançamento dia {data}</S.Text>
      </div>
      <div className="inline-block whitespace-nowrap mr-12 animate-blinkmarquee">
        <S.Text>Lançamento dia {data}</S.Text>
      </div>
      <div className="inline-block whitespace-nowrap mr-12 animate-blinkmarquee">
        <S.Text>Lançamento dia {data}</S.Text>
      </div>
      <div className="inline-block whitespace-nowrap mr-12 animate-blinkmarquee">
        <S.Text>Lançamento dia {data}</S.Text>
      </div>
    </S.Container>
  )
}
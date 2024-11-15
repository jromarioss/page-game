import * as S from "./styles";

export const MainVideo = () => {
  return (
    <S.Container id="tutorial">
      <S.Text>
        <h2>Quick Tutorial</h2>
        <p>New here? This tutorial is for you!</p>
      </S.Text>

      <S.Video>
        <S.VideoFrame
          src="https://www.youtube.com/embed/tfQbjQIsOiQ"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </S.Video>
    </S.Container>
  );
};

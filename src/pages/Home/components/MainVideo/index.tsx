import * as S from "./styles";
import VideoDino from "@/assets/Dyno.mp4";

export const MainVideo = () => {
  return (
    <S.Container id="tutorial">
      <S.Text>
        <h2>Como Jogar</h2>
      </S.Text>

      <S.Video>
        <S.VideoFrame src={VideoDino} controls />

        {/* 
        <S.VideoFrame
          src={VideoDino}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        */}
      </S.Video>
    </S.Container>
  );
};

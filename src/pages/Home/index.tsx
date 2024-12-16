import { Container, Banner } from "@/components";
import { MainTop, MainCharacters, MainBottom, MainEmail, MainCenary, MainVideo } from "./components";
import * as S from "./styles";
import { FaAngleUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useMain } from "@/hooks";
import { dataInauguracao } from "@/utils";

export function Home() {
  const { scrollToTop } = useMain();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const shouldShowBanner = () => {
    const dataAtual = new Date();
    const [dia, mes, ano] = dataInauguracao.split("/").map(Number);
    const dataInauguracaoFormatada = new Date(ano, mes - 1, dia);

    if (dataAtual <= dataInauguracaoFormatada) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }

  useEffect(() => {
    shouldShowBanner();

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <S.Content>
        {showBanner && <Banner data={dataInauguracao} />}
        <MainTop />
        <MainCharacters />
        <MainBottom />
        <MainCenary />
        <MainVideo />
        <MainEmail />
        {showScrollButton && <S.ButtonScrool onClick={scrollToTop}><FaAngleUp /></S.ButtonScrool>}
      </S.Content>
    </Container>
  )
}
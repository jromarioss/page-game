import { Container, Banner } from "@/components";
import { MainTop, MainCharacters, MainBottom, MainEmail, MainCenary, MainVideo } from "./components";
import * as S from "./styles";
import { FaAngleUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useMain } from "@/hooks";

export function Home() {
  const { scrollToTop } = useMain();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
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
        <Banner />
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
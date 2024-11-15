import { Container } from "@/components";
import { MainTop, MainCharacters, MainBottom, MainEmail, MainVideo } from "./components";
import * as S from "./styles";
import { FaAngleUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

export function Home() {

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <S.Content>
        <MainTop />
        <MainCharacters />
        <MainBottom />
        <MainVideo />
        <MainEmail />

        {showScrollButton &&
          <S.ButtonScrool onClick={scrollToTop}>
            <FaAngleUp />
          </S.ButtonScrool>}
      </S.Content>
    </Container>
  )
}
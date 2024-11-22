import { useMain } from "@/hooks";
import * as S from "./styles";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  const { scrollToTop } = useMain();

  const handleGoTo = (value: string) => {
    const element = document.getElementById(value);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; 
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  return (
    <S.Container>
      <S.EmailArea>
        <S.Logo></S.Logo>
        <p>email@email.com</p>
      </S.EmailArea>
      
      <S.ButtonsAreas>
        <p onClick={scrollToTop}>home</p>
        <p onClick={() => handleGoTo("characters")}>character</p>
        <p onClick={() => handleGoTo("tutorial")}>tutorial</p>
      </S.ButtonsAreas>

      <S.RedesArea>
        <S.Icon>
          <FaInstagram />
        </S.Icon>
        <S.Icon>
          <FaFacebookF />
        </S.Icon>
        <S.Icon>
          <FaYoutube />
        </S.Icon>
      </S.RedesArea>

      <p className="font-lato">Dyno Bomber © 2024</p>
    </S.Container>
  )
}
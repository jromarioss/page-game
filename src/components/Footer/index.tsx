import { ButtonStore } from "../";
import * as S from "./styles";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {

  return (
    <S.Container>
      <S.EmailArea>
        <S.Logo></S.Logo>
        <p>email@email.com</p>
      </S.EmailArea>
      
      <S.ButtonsAreas>
        <p>Features</p>
        <p>character</p>
        <p>tutorial</p>
      </S.ButtonsAreas>

      <S.ButtonsAreas>
        <ButtonStore type={1} />
        <ButtonStore type={2} />
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

      <p className="font-lato">nome projeto aqui © 2024</p>
    </S.Container>
  )
}
import { ButtonStore } from "@/components";
import PhoneImg from "@/assets/phone.png" ;
import * as S from "./styles";
import { FaChevronRight } from "react-icons/fa6";

export const MainTop = () => {
  return (
    <S.Container>
      <S.InfoTop>
        <S.Info>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor, sit amet consectetur Possimus ex temporibus distinctio,</p>

          <S.InfoTopButtonArea>
            <ButtonStore type={1} />
            <ButtonStore type={2} />
          </S.InfoTopButtonArea>
        </S.Info>

        <S.InfoPhone>
          <img src={PhoneImg} alt="phone img" className="z-10" />
          <img src={PhoneImg} alt="phone img" className="absolute top-4 -right-10 md:right-[32px]" />
        </S.InfoPhone>
      </S.InfoTop>

      <S.Main>
        <h2>Lorem ipsum dipisicing elit.</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit, Lorem ipsum dolor, sit amet consectetur elit</p>
      </S.Main>

      <S.InfoBottom>
        <S.InfoBottomText>
          <h2>LEGENDARY CHARACTERS</h2>
          <p>Explore a growing roster of powerful characters, each with their own unique personality, strengths, and abilities.</p>

          <S.ButtonPlay>
            Play now <FaChevronRight />
            </S.ButtonPlay>
        </S.InfoBottomText>

        <S.InfoBottomText>
          <h2>LEGENDARY CHARACTERS</h2>
          <p>Explore a growing roster of powerful characters, each with their own unique personality, strengths, and abilities.</p>

          <S.ButtonPlay>
            Play now <FaChevronRight />
            </S.ButtonPlay>
        </S.InfoBottomText>

        <S.InfoBottomText>
          <h2>LEGENDARY CHARACTERS</h2>
          <p>Explore a growing roster of powerful characters, each with their own unique personality, strengths, and abilities.</p>

          <S.ButtonPlay>
            Play now <FaChevronRight />
          </S.ButtonPlay>
        </S.InfoBottomText>
      </S.InfoBottom>
    </S.Container>
  )
}
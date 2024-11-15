import { useMain } from "@/hooks";
import * as S from "./styles";
import { IoMenu } from "react-icons/io5";
import { ConnectButton } from "thirdweb/react";
import { IButtons } from "../Container";

interface IHeaderFake {
  buttons: IButtons[];
  handleGoTo: (value: string) => void;
}

export const HeaderFake = ({ buttons, handleGoTo }: IHeaderFake) => {
  const { onSetShowMenu, client, wallets } = useMain();

  return (
    <S.Container>
      <S.Logo></S.Logo>

      <S.Nav>
        <S.ButtonMenu onClick={() => onSetShowMenu(true)}>
          <IoMenu />
        </S.ButtonMenu> 

        <S.NavButtons>
          {buttons.map((button: IButtons, index: number) => {
            return (
              <S.Button
                key={index}
                onClick={() => handleGoTo(button.value)}
              >
                {button.title}
              </S.Button>
            )
          })}

          <ConnectButton
            client={client}
            wallets={wallets}
            connectModal={{
              size: "wide",
              showThirdwebBranding: false,
            }}
          />
        </S.NavButtons>        
      </S.Nav>
    </S.Container>
  )
}
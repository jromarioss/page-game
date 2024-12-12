import { useMain } from "@/hooks";
import * as S from "./styles";
import { IoMenu } from "react-icons/io5";
import { IButtons } from "../Container";
import { ConnectButton } from "thirdweb/react";

interface IHeader {
  buttons: IButtons[];
  handleGoTo: (value: string) => void;
}

export const Header = ({ buttons, handleGoTo }: IHeader) => {
  const { onSetShowMenu, client, wallets } = useMain();

  return (
    <S.Container>
      {/* <S.Logo></S.Logo> */}

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

          <S.ButtonA href="https://pancakeswap.finance/?outputCurrency=0x5FB60A9e69B53EDbC95a5a2D9DD4ABD8C16c4233&inputCurrency=0x2170Ed0880ac9A755fd29B2688956BD959F933F8" target="_blank">Comprar Moeda</S.ButtonA>
          
          <ConnectButton
            client={client}
            wallets={wallets}
            connectModal={{
              size: "wide"
            }}
            detailsModal={{
              payOptions: {
                buyWithFiat: {
                  testMode: true,
                },
              },
            }}
          />
        </S.NavButtons>       
      </S.Nav>
    </S.Container>
  )
}
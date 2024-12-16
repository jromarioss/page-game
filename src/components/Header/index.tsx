import { useMain } from "@/hooks";
import * as S from "./styles";
import { IoMenu } from "react-icons/io5";
import { IButtons } from "../Container";
import { ConnectButton  } from "thirdweb/react";

interface IHeader {
  buttons: IButtons[];
  handleGoTo: (value: string) => void;
}

export const Header = ({ buttons, handleGoTo }: IHeader) => {
  const { onSetShowMenu, client, wallets, userAddress, pancakeSwapURL } = useMain();

  return (
    <S.Container>
      <S.Nav>
        <S.ButtonMenu onClick={() => onSetShowMenu(true)}><IoMenu /></S.ButtonMenu>

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

          {(userAddress !== "" && userAddress) && <S.ButtonA href={pancakeSwapURL} target="_blank">Comprar Moeda</S.ButtonA>}
          
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
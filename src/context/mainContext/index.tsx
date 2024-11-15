import { createContext, ReactNode, useState } from 'react';
import { createThirdwebClient } from "thirdweb";
import { createWallet } from "thirdweb/wallets";


interface IMainContext {
  showMenu: boolean;
  onSetShowMenu: (value: boolean) => void;
  client: any;
  wallets: any;
}

interface IMainContextProvider {
  children: ReactNode;
}

export const MainContext = createContext({} as IMainContext);

export function MainContextProvider({ children }: IMainContextProvider) {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const onSetShowMenu = (value: boolean) => setShowMenu(value);

  const client = createThirdwebClient({
    clientId: "50b95ac1db24d3d8b60500af861ae56e",
  });
  
  const wallets = [
    createWallet("walletConnect"),
    createWallet("io.metamask"),
    createWallet("io.zerion.wallet"),
    createWallet("com.fireblocks"),
  ];

  return (
    <MainContext.Provider value={{
      onSetShowMenu, showMenu, client, wallets,
    }}>
      {children}
    </MainContext.Provider>
  );
}

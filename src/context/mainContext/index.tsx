import { createContext, ReactNode, useState } from "react";
import { createThirdwebClient } from "thirdweb";
import { createWallet, inAppWallet } from "thirdweb/wallets";

interface IMainContext {
  showMenu: boolean;
  onSetShowMenu: (value: boolean) => void;
  scrollToTop: () => void;
  client: any;
  wallets: any;
}

interface IMainContextProvider {
  children: ReactNode;
}

export const MainContext = createContext({} as IMainContext);

export function MainContextProvider({ children }: IMainContextProvider) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const client = createThirdwebClient({clientId: "2f4ee41208bb9ed0a47072c26f0fab65"});

  const wallets = [
    inAppWallet({ auth: { options: ["google","phone"] } }),
    createWallet("io.metamask"),
  ];

  const onSetShowMenu = (value: boolean) => setShowMenu(value);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <MainContext.Provider
      value={{
        onSetShowMenu,
        showMenu,
        scrollToTop,
        client,
        wallets
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createThirdwebClient } from "thirdweb";
import { createWallet, inAppWallet } from "thirdweb/wallets";

interface IMainContext {
  showMenu: boolean;
  onSetShowMenu: (value: boolean) => void;
  scrollToTop: () => void;
  client: any;
  wallets: any;
  userAddress: string;
  setUserAddress: Dispatch<SetStateAction<string>>;
}

interface IMainContextProvider {
  children: ReactNode;
}

export const MainContext = createContext({} as IMainContext);

export function MainContextProvider({ children }: IMainContextProvider) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [userAddress, setUserAddress] = useState<string>("");

  const client = createThirdwebClient({clientId: "8e214011a85f0c5ac3d7f5bf52f6a12c"});

  const wallets = [
    inAppWallet({ auth: { options: ["google","email","phone"] } }),
    createWallet("io.metamask"),
  ];

  const onSetShowMenu = (value: boolean) => setShowMenu(value);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <MainContext.Provider
      value={{ onSetShowMenu, showMenu, scrollToTop, setUserAddress, client, userAddress, wallets }}
    >
      {children}
    </MainContext.Provider>
  );
}

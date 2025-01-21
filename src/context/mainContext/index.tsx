import { createContext, ReactNode, useState } from "react";
//import { createThirdwebClient } from "thirdweb";
//import { createWallet, inAppWallet } from "thirdweb/wallets";
//import { useActiveAccount  } from "thirdweb/react";
// baixar "thirdweb": "^5.69.0"

interface IMainContext {
  showMenu: boolean;
  openModal: boolean;
  onSetShowMenu: (value: boolean) => void;
  onSetOpenModal: (value: boolean) => void;
  scrollToTop: () => void;
  //client: any;
  //wallets: any;
  //userAddress: string;
  //pancakeSwapURL: string;
}

interface IMainContextProvider {
  children: ReactNode;
}

export const MainContext = createContext({} as IMainContext);

export function MainContextProvider({ children }: IMainContextProvider) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  //const [userAddress, setUserAddress] = useState<string>("");

  //const client = createThirdwebClient({clientId: "8e214011a85f0c5ac3d7f5bf52f6a12c"});

   //const pancakeSwapURL = userAddress 
      //? "https://pancakeswap.finance/?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0xDa9756415A5D92027d994Fd33aC1823bA2fdc9ED"
      //: "https://pancakeswap.finance";

  // const wallets = [
  //   inAppWallet({ auth: { options: ["google","email","phone"] } }),
  //   createWallet("io.metamask"),
  // ];

  const onSetShowMenu = (value: boolean) => setShowMenu(value);

  const onSetOpenModal = (value: boolean) => {
    if (showMenu) setShowMenu(false);
    setOpenModal(value);
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  //const activeAccount = useActiveAccount();

  // useEffect(() => {
  //   if (activeAccount) setUserAddress(activeAccount?.address)
  //   else setUserAddress("");
  // }, [userAddress, activeAccount, setUserAddress])

  return (
    <MainContext.Provider
      value={{ onSetShowMenu, showMenu, scrollToTop, onSetOpenModal, openModal }}
    >
      {children}
    </MainContext.Provider>
  );
}

import { createContext, ReactNode, useState } from 'react';

interface IMainContext {
  showModalWallet: boolean;
  showMenu: boolean;
  onSetShowModalWallet: (value: boolean) => void;
  onSetShowMenu: (value: boolean) => void;
}

interface IMainContextProvider {
  children: ReactNode;
}

export const MainContext = createContext({} as IMainContext);

export function MainContextProvider({ children }: IMainContextProvider) {

  const [showModalWallet, setShowModalWallet] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const onSetShowModalWallet = (value: boolean) => setShowModalWallet(value);
  const onSetShowMenu = (value: boolean) => setShowMenu(value);

  return (
    <MainContext.Provider value={{
      onSetShowModalWallet, showModalWallet, onSetShowMenu, showMenu
    }}>
      {children}
    </MainContext.Provider>
  );
}

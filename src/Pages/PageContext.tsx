import React, { useState } from "react";
import { useContext } from "react";
import { CoinList } from "../Models/CoinList";
import { Wallet } from "../Models/Wallet";
import { useCoinsList } from "../Services/CoinService";


interface ContextProviderProps {
  wallet: Wallet,
  coinList: CoinList;
  updateWallet: React.Dispatch<React.SetStateAction<Wallet>>
}

const standardWallet: Wallet = {
  coins: {}
}

const ContextProvider = React.createContext<ContextProviderProps>({
  wallet: {
    coins: {}
  },
  coinList: {
    coins: [],
    stats: {}
  },
  updateWallet: () => null
});

ContextProvider.displayName = 'ContextProvider';

export function useContextProvider() {
  return useContext(ContextProvider);
}

interface PageContextProps {
  children: JSX.Element;
}

const PageContext = ({ children }: PageContextProps) => {
  const [wallet, updateWallet] = useState<Wallet>({ ...standardWallet });

  const coinList = useCoinsList();

  return <ContextProvider.Provider
    value={{
      wallet,
      coinList,
      updateWallet
    }}>
    {children}
  </ContextProvider.Provider>
}

export default PageContext;
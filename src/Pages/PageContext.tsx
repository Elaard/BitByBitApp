import React from "react";
import { useContext } from "react";
import { CoinList } from "../Models/CoinList";
import { useCoinsList as useCoinsList } from "../Services/CoinService";


interface ContextProviderProps {
  wallets: any[],
  coinList: CoinList;
}

const ContextProvider = React.createContext<ContextProviderProps>({
  wallets: [],
  coinList: {
    coins: [],
    stats: {}
  }
});

ContextProvider.displayName = 'ContextProvider';

export function useContextProvider() {
  return useContext(ContextProvider);
}

interface PageContextProps {
  children: JSX.Element;
}

const PageContext = ({ children }: PageContextProps) => {
  const coinList = useCoinsList();

  return <ContextProvider.Provider
    value={{
      wallets: [],
      coinList: coinList
    }}>
    {children}
  </ContextProvider.Provider>
}

export default PageContext;
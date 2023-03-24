import React, { useState } from "react";
import { useContext } from "react";
import { AssetEntityBaseModel } from "../Models/AssetentityBaseModel";
import { AssetType } from "../Models/AssetType";
import { CoinList } from "../Models/CoinList";
import { Wallet } from "../Models/Wallet";
import { useCoinsList } from "../Services/CoinService";


interface ContextProviderProps {
  wallet: Wallet,
  coinList: CoinList;
  updateWallet: React.Dispatch<React.SetStateAction<Wallet>>;
  getAssetData: (assetType: AssetType) => AssetEntityBaseModel[];
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
  updateWallet: () => null,
  getAssetData: (_assetType: AssetType) => []
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

  function getAssetData(assetType: AssetType): AssetEntityBaseModel[] {
    switch (assetType) {
      case 'coins': {
        return coinList.coins;
      }
      default:
        return []
    }
  }

  return <ContextProvider.Provider
    value={{
      wallet,
      coinList,
      updateWallet,
      getAssetData
    }}>
    {children}
  </ContextProvider.Provider>
}

export default PageContext;
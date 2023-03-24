import { AssetType } from "../Models/AssetType";
import { Wallet } from "../Models/Wallet";
import { WalletActions } from "../Models/WalletActions";
import { getNumber } from "../Utils/numberUtils";
import { WalletAsset } from "../Models/WalletAsset";

export const WalletActs: WalletActions = {
  getAsset: (wallet: Wallet, assetType: AssetType): WalletAsset => {
    return wallet[assetType];
  },
  getAssetQuantity: (wallet: Wallet, assetType: AssetType, assetId: string) => {
    const asset = WalletActs.getAsset(wallet, assetType);
    return asset[assetId];
  },
  addAsset: (wallet: Wallet, assetType: AssetType, assetId: string): Wallet => {
    const assetQuantity = WalletActs.getAssetQuantity(wallet, assetType, assetId);
    return {
      ...{},
      [assetType]: {
        ...WalletActs.getAsset(wallet, assetType),
        [assetId]: getNumber(assetQuantity) + 1,
      },
    };
  },
};

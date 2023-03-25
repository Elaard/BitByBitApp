import { AssetType } from "../Models/AssetType";
import { Wallet } from "../Models/Wallet";
import { WalletActions } from "../Models/WalletActions";
import { forceNumber } from "../Utils/numberUtils";
import { WalletAsset } from "../Models/WalletAsset";

export const WalletActs: WalletActions = {
  updateWalletAssetQuantity: (wallet: Wallet, assetType: AssetType, assetId: string, assetQuantity: number): Wallet => {
    return {
      [assetType]: {
        ...WalletActs.getAsset(wallet, assetType),
        [assetId]: assetQuantity,
      },
    };
  },
  getAsset: (wallet: Wallet, assetType: AssetType): WalletAsset => {
    return wallet[assetType];
  },
  getAssetQuantity: (wallet: Wallet, assetType: AssetType, assetId: string) => {
    const asset = WalletActs.getAsset(wallet, assetType);
    return asset[assetId];
  },
  addAsset: (wallet: Wallet, assetType: AssetType, assetId: string): Wallet => {
    const assetQuantity = WalletActs.getAssetQuantity(wallet, assetType, assetId);
    const updatedAssetQuantity = forceNumber(assetQuantity) + 1;
    return WalletActs.updateWalletAssetQuantity(wallet, assetType, assetId, updatedAssetQuantity);
  },
  removeAsset: (wallet: Wallet, assetType: AssetType, assetId: string): Wallet => {
    const assetQuantity = WalletActs.getAssetQuantity(wallet, assetType, assetId);
    const updatedAssetQuantity = forceNumber(assetQuantity) - 1;
    return WalletActs.updateWalletAssetQuantity(wallet, assetType, assetId, updatedAssetQuantity);
  },
  deleteAsset: (wallet: Wallet, assetType: AssetType, assetId: string): Wallet => {
    return WalletActs.updateWalletAssetQuantity(wallet, assetType, assetId, 0);
  },
};

import { AssetType } from "./AssetType";
import { Wallet } from "./Wallet";
import { WalletAsset } from "./WalletAsset";

export interface WalletActions {
  getAsset: (wallet: Wallet, assetType: AssetType) => WalletAsset;
  getAssetQuantity: (wallet: Wallet, assetType: AssetType, assetId: string) => number;
  addAsset: (wallet: Wallet, assetType: AssetType, assetId: string) => Wallet;
  removeAsset: (wallet: Wallet, assetType: AssetType, assetId: string) => Wallet;
  deleteAsset: (wallet: Wallet, assetType: AssetType, assetId: string) => Wallet;
  updateWalletAssetQuantity: (wallet: Wallet, assetType: AssetType, assetId: string, assetQuantity: number) => Wallet;
}

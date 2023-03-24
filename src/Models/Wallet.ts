import { AssetType } from "./AssetType";
import { WalletAsset } from "./WalletAsset";

export type Wallet = Record<AssetType, WalletAsset>;

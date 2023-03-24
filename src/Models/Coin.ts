import { AssetEntityBaseModel } from "./AssetentityBaseModel";

export interface Coin extends AssetEntityBaseModel {
  coinrankingUrl?: string;
  iconUrl?: string;
  price?: string;
}

import { AssetType } from "../Models/AssetType";

interface Translations {
  assets: Record<AssetType, string>;
}

const assets: Record<AssetType, string> = {
  coins: "Coins",
};

export const translations: Translations = {
  assets,
};

import { useState } from "react";
import H2 from "../Components/H2";
import { DictionaryItem } from "../Models/DictionaryItem";
import { Wallet } from "../Models/Wallet";
import { translations } from "../Utils/translations";
import { useContextProvider } from "./PageContext";
import Select, { SingleValue } from 'react-select'
import { WalletActs } from "../Actions/WalletActions";
import { AssetType } from "../Models/AssetType";
import { WalletAsset } from "../Models/WalletAsset";
import { AssetEntityBaseModel } from "../Models/AssetentityBaseModel";

interface DictionaryAssetItem extends Omit<DictionaryItem, 'value'> {
  value: AssetType;
}

interface AssetEntityDisplayModel extends AssetEntityBaseModel {
  quantity: number;
}

function getExistingAssets(wallet: Wallet) {
  const assets: DictionaryAssetItem[] = [];

  for (const asset in wallet) {
    const asAssetType = asset as AssetType
    const assetTranslation = translations['assets'][asAssetType];
    assets.push({
      id: assetTranslation,
      label: assetTranslation,
      value: asAssetType
    });
  }
  return assets;
}


function mergeWalletAssetInformationWithAsset(walletAsset: WalletAsset | undefined, allAssets: AssetEntityBaseModel[]) {
  if (!walletAsset || !allAssets) {
    return;
  }

  const constructedOptions: AssetEntityDisplayModel[] = [];

  for (const wAsset in walletAsset) {
    const aAsset = allAssets.find((ass) => ass.uuid === wAsset);
    if (aAsset) {
      const option: AssetEntityDisplayModel = {
        uuid: wAsset,
        name: aAsset.name,
        quantity: walletAsset[wAsset]
      };
      constructedOptions.push(option)
    }
  }
  return constructedOptions;
}


function WalletPage() {
  const { wallet, getAssetData } = useContextProvider();

  const [selectedAsset, setSelectedAsset] = useState<DictionaryAssetItem>();

  const options = getExistingAssets(wallet);

  const onChange = (selected: SingleValue<DictionaryAssetItem>) => {
    setSelectedAsset(selected as DictionaryAssetItem);
  };

  const walletAsset = selectedAsset ? WalletActs.getAsset(wallet, selectedAsset.value) : undefined;

  const assetData = selectedAsset ? getAssetData(selectedAsset.value) : [];

  const displayedData = mergeWalletAssetInformationWithAsset(walletAsset, assetData);

  return <>
    <H2 text={'Assets'} />
    <Select onChange={onChange} className='select-asset' placeholder={'Select asset'} options={options} value={selectedAsset} />
  </>
}

export default WalletPage

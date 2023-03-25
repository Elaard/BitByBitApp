import { useCallback, useMemo, useState } from "react";
import H2 from "../Components/H2";
import { DictionaryItem } from "../Models/DictionaryItem";
import { Wallet } from "../Models/Wallet";
import { translations } from "../Utils/translationsUtils";
import { useContextProvider } from "./PageContext";
import Select, { SingleValue } from 'react-select'
import { WalletActs } from "../Actions/WalletActions";
import { AssetType } from "../Models/AssetType";
import { WalletAsset } from "../Models/WalletAsset";
import { AssetEntityBaseModel } from "../Models/AssetEntityBaseModel";
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import CellInfo from "../Components/Table/CellInfo";
import { AssetEntityDisplayModel } from "../Models/AssetEntityDisplayModel";
import TableBody from "../Components/Table/TableBody";
import TablePagination from "../Components/Table/TablePagination";
import TableHead from "../Components/Table/TableHead";
import ActionButton from "../Components/Table/ActionButton";
import ActionGroupButtons from "../Components/Table/ActionGroupButtons";

interface DictionaryAssetItem extends Omit<DictionaryItem, 'value'> {
  value: AssetType;
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

const noData: AssetEntityDisplayModel[] = [];

function mergeWalletAssetInformationWithAsset(walletAsset: WalletAsset | undefined, allAssets: AssetEntityBaseModel[]) {
  if (!walletAsset || !Object.keys(walletAsset).length || !allAssets) {
    return noData;
  }

  const constructedOptions: AssetEntityDisplayModel[] = [];

  for (const wAsset in walletAsset) {
    const aAsset = allAssets.find((ass) => ass.uuid === wAsset);
    const assetQuantity = walletAsset[wAsset];
    if (aAsset && assetQuantity) {
      const option: AssetEntityDisplayModel = {
        uuid: wAsset,
        name: aAsset.name,
        quantity: assetQuantity
      };
      constructedOptions.push(option)
    }
  }
  return constructedOptions;
}

const columnHelper = createColumnHelper<AssetEntityDisplayModel>();

function WalletPage() {

  const { wallet, getAssetData, updateWallet } = useContextProvider();

  const [selectedAsset, setSelectedAsset] = useState<DictionaryAssetItem>();

  const options = useMemo(() => getExistingAssets(wallet), [wallet]);

  const onChange = (selected: SingleValue<DictionaryAssetItem>) => {
    setSelectedAsset(selected as DictionaryAssetItem);
  };

  const walletAsset = useMemo(() => selectedAsset ? WalletActs.getAsset(wallet, selectedAsset.value) : undefined, [wallet, selectedAsset]);

  const assetData = useMemo(() => selectedAsset ? getAssetData(selectedAsset.value) : [], [walletAsset, getAssetData, selectedAsset]);

  const tableData = useMemo(() => mergeWalletAssetInformationWithAsset(walletAsset, assetData), [walletAsset, assetData]);

  const removeAsset = useCallback((assetId: string) => {
    const updated = WalletActs.removeAsset(wallet, 'coins', assetId);
    updateWallet(updated);
  }, [wallet, updateWallet]);

  const deleteAsset = useCallback((assetId: string) => {
    const updated = WalletActs.deleteAsset(wallet, 'coins', assetId);
    updateWallet(updated);
  }, [wallet, updateWallet]);

  const columns = useMemo(() => ([
    columnHelper.accessor('name', {
      header: () => 'Crypto',
      cell: info => <CellInfo value={info.renderValue()} />
    }),
    columnHelper.accessor('quantity', {
      header: () => 'Quantity',
      cell: info => <CellInfo value={info.renderValue()} />
    }),
    columnHelper.accessor('uuid', {
      header: () => 'Actions',
      cell: info => {
        const actions = [
          {
            title: 'Remove',
            cellValue: info.getValue(),
            action: removeAsset,
            modifier: "remove"
          },
          {
            title: 'Delete',
            cellValue: info.getValue(),
            action: deleteAsset,
            modifier: "delete"
          }
        ]
        return <CellInfo value={<ActionGroupButtons actions={actions} />} />
      }
    }),
  ]), [removeAsset, deleteAsset]);

  const table = useReactTable({
    data: tableData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return <>
    <H2 text={'Assets'} />
    <Select onChange={onChange} className='margin-left-3 margin-top-8 select-asset' placeholder={'Select asset'} options={options} value={selectedAsset} />
    <table className="table">
      <TableHead<AssetEntityDisplayModel> table={table} />
      <TableBody<AssetEntityDisplayModel> table={table} />
      <TablePagination<AssetEntityDisplayModel> table={table} />
    </table>
  </>
}

export default WalletPage;

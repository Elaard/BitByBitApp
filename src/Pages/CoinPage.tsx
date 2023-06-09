import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Coin } from '../Models/Coin'
import { useContextProvider } from './PageContext';
import TablePagination from '../Components/Table/TablePagination';
import { parseNumber } from '../Utils/numberUtils';
import CellInfo from '../Components/Table/CellInfo';
import { useCallback, useMemo } from 'react';
import TableBody from '../Components/Table/TableBody';
import ActionButton from '../Components/Table/ActionButton';
import { WalletActs } from '../Actions/WalletActions';
import H2 from '../Components/H2';
import TableHead from '../Components/Table/TableHead';

const columnHelper = createColumnHelper<Coin>();

const CoinPage = () => {

  const { coinList, wallet, updateWallet } = useContextProvider();

  const addCoin = useCallback((assetId: string) => {
    const updated = WalletActs.addAsset(wallet, 'coins', assetId);
    updateWallet(updated);
  }, [wallet]);

  const columns = useMemo(() => ([
    columnHelper.accessor('name', {
      header: () => 'Crypto',
      cell: info => <CellInfo value={info.getValue()} />
    }),
    columnHelper.accessor('price', {
      header: () => 'Price',
      cell: info => <CellInfo value={parseNumber(info.getValue() as string, 2)} />
    }),
    columnHelper.accessor('iconUrl', {
      header: () => 'Look',
      cell: info => <CellInfo value={<img className='table__icon' src={info.getValue() as string} alt="coin image" />} />
    }),
    columnHelper.accessor('uuid', {
      header: () => 'Actions',
      cell: info => <CellInfo value={<ActionButton title={'Add'} cellValue={info.getValue() as string} action={addCoin} />} />
    }),
  ]), [columnHelper, addCoin]);

  const table = useReactTable({
    data: coinList.coins,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="coin-page">
      <H2 text={'Coins'} />
      <table className="table">
        <TableHead<Coin> table={table} />
        <TableBody<Coin> table={table} />
        <TablePagination<Coin> table={table} />
      </table>
    </div>
  )

}


export default CoinPage;
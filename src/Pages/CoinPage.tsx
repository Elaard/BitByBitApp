import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Coin } from '../Models/Coin'
import { useContextProvider } from './PageContext';
import TablePagination from '../Components/Table/TablePagination';
import { parseNumber } from '../Utils/numberUtils';
import CellInfo from '../Components/Table/CellInfo';
import { memo, useCallback, useMemo } from 'react';
import TableBody from '../Components/Table/TableBody';
import ActionButton from '../Components/Table/ActionButton';
import { WalletActs } from '../Actions/WalletActions';

const columnHelper = createColumnHelper<Coin>();

const CoinPage = () => {

  const { coinList, wallet, updateWallet } = useContextProvider();

  const addCoin = useCallback((assetId: string) => {
    const updated = WalletActs.addAsset(wallet, 'coins', assetId);
    updateWallet(updated);
  }, [wallet]);

  console.log(wallet);

  const columns = useMemo(() => ([
    columnHelper.accessor('name', {
      header: () => 'Name',
      cell: info => <CellInfo value={info.getValue()} />
    }),
    columnHelper.accessor('price', {
      header: () => 'Price',
      cell: info => <CellInfo value={parseNumber(info.renderValue() as string, 2)} />
    }),
    columnHelper.accessor('iconUrl', {
      header: () => 'Look',
      cell: info => <CellInfo value={<img className='table__icon' src={info.renderValue() as string} alt="coin image" />} />
    }),
    columnHelper.accessor('uuid', {
      header: () => 'Actions',
      cell: info => <CellInfo value={<ActionButton title={'Add'} cellValue={info.renderValue() as string} action={addCoin} />} />
    }),
  ]), [columnHelper, addCoin]);

  const table = useReactTable({
    data: coinList.coins,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="coin-page">
      <h2 className='text-align-center coin-page__header2'>Coins</h2>
      <table className="table">
        <thead className='table__thead'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className='table__tr'>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <TableBody<Coin> table={table} />
        <TablePagination<Coin> table={table} />
      </table>
    </div>
  )

}


export default CoinPage;
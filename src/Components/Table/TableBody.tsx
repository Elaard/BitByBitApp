import { flexRender, Table } from "@tanstack/react-table";
import Cell from "./Cell";

interface TableBodyProps<T> {
  table: Table<T>;
}

function TableBody<T>({ table }: TableBodyProps<T>) {
  return <tbody className='table__tbody'>
    {table.getRowModel().rows.map(row => (
      <tr key={row.id}>
        {row.getVisibleCells().map(cell => (
          <Cell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </Cell>
        ))}
      </tr>
    ))}
  </tbody>
}


export default TableBody;
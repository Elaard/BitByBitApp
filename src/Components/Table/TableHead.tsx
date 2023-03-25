import { flexRender, Table } from "@tanstack/react-table";

interface TableHeadProps<T> {
  table: Table<T>
}

function TableHead<T>({ table }: TableHeadProps<T>) {
  return <thead className='table__thead'>
    {table.getHeaderGroups().map(headerGroup => (
      <tr key={headerGroup.id} className='table__tr'>
        {headerGroup.headers.map(header => (
          <th key={header.id}>
            {flexRender(
              header.column.columnDef.header,
              header.getContext()
            )}
          </th>
        ))}
      </tr>
    ))}
  </thead>
}

export default TableHead;
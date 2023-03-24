import { Table } from "@tanstack/react-table";
import PaginationButton from "./PaginationButton";

interface TablePaginationProps<T> {
  table: Table<T>;
}

function TablePagination<T>({ table }: TablePaginationProps<T>) {
  return <tfoot className="tfoot">
    <PaginationButton text={"Start"} onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} />
    <PaginationButton text={"<"} onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} />
    <PaginationButton text={">"} onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} />
    <PaginationButton text={"End"} onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} />
  </tfoot>
}


export default TablePagination;
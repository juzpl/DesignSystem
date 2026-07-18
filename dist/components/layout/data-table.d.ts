import { ColumnDef } from '@tanstack/react-table';
import * as React from "react";
export type DataTableRowAction<TData> = {
    key: string;
    label: string;
    icon?: React.ReactNode;
    onSelect: (row: TData) => void;
    destructive?: boolean;
};
export type DataTableFilterDef = {
    columnId: string;
    type?: "text" | "select";
    placeholder?: string;
    options?: {
        label: string;
        value: string;
    }[];
};
export interface DataTableProps<TData> {
    columns: ColumnDef<TData, any>[];
    data: TData[];
    pageSize?: number;
    pageSizeOptions?: number[];
    enableSelection?: boolean;
    enableSorting?: boolean;
    filters?: DataTableFilterDef[];
    rowActions?: DataTableRowAction<TData>[];
    onRowClick?: (row: TData) => void;
    emptyTitle?: string;
    emptyDescription?: string;
    className?: string;
    getRowId?: (row: TData, index: number) => string;
}
declare const DataTable: <TData>(props: DataTableProps<TData> & {
    ref?: React.Ref<HTMLDivElement>;
}) => React.ReactElement;
export { DataTable };
export type { ColumnDef } from '@tanstack/react-table';

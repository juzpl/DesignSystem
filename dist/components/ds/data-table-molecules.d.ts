import * as React from "react";
export type DataTableColumnMeta = {
    key: string;
    label: string;
    align?: "right";
};
export declare function DataTableToolbar({ query, filtersOpen, columnsOpen, visibleCount, searchPlaceholder, onQueryChange, onFiltersToggle, onColumnsToggle }: {
    query: string;
    filtersOpen: boolean;
    columnsOpen: boolean;
    visibleCount: number;
    searchPlaceholder: string;
    onQueryChange: (value: string) => void;
    onFiltersToggle: () => void;
    onColumnsToggle: () => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function DataTableAdvancedFilters(): import("react/jsx-runtime").JSX.Element;
export declare function DataTableField({ label, children }: {
    label: string;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function SortableColumnHeader({ label, active, direction, filtered, align, onAsc, onDesc, onFilter }: {
    label: string;
    active: boolean;
    direction: "asc" | "desc";
    filtered: boolean;
    align?: "right";
    onAsc: () => void;
    onDesc: () => void;
    onFilter: () => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function ColumnFilterPanel({ label, value, type, options, onValueChange, onApply, onClear, onClose }: {
    label: string;
    value?: string;
    type?: "text" | "select";
    options?: string[];
    onValueChange?: (value: string) => void;
    onApply?: () => void;
    onClear?: () => void;
    onClose: () => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function ColumnManagerPanel({ columns, visible, onVisibleChange, onReset }: {
    columns: DataTableColumnMeta[];
    visible: Record<string, boolean>;
    onVisibleChange: (key: string, value: boolean) => void;
    onReset?: () => void;
}): import("react/jsx-runtime").JSX.Element;

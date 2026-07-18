import * as React from "react";
type StatusTone = "success" | "warning" | "destructive" | "neutral";
type DemoRow = {
    id: string;
    order: string;
    product: string;
    client: string;
    line: string;
    progress: number;
    owner: string;
    status: string;
    tone: StatusTone;
    deadline: string;
};
type BaseRow = Record<string, React.ReactNode> & {
    id: string;
    tone?: StatusTone;
    search?: string;
};
export type DataTableColumn<Row extends BaseRow = BaseRow> = {
    key: Extract<keyof Row, string>;
    label: string;
    align?: "right";
    render?: (row: Row) => React.ReactNode;
};
export declare function DataTablePattern<Row extends BaseRow = DemoRow>({ density, title, description, actionLabel, searchPlaceholder, rows: providedRows, columns: providedColumns, defaultSort }: {
    density?: "default" | "record";
    title?: string;
    description?: string;
    actionLabel?: string;
    searchPlaceholder?: string;
    rows?: Row[];
    columns?: DataTableColumn<Row>[];
    defaultSort?: Extract<keyof Row, string>;
}): import("react/jsx-runtime").JSX.Element;
export {};

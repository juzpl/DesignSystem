import * as React from "react";
export interface RecordPageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    nav?: React.ReactNode;
    summary?: React.ReactNode;
    children?: React.ReactNode;
    /** Domyślnie 3 kolumny. Ustaw "2" jeśli nie ma summary (260px + 1fr). */
    columns?: "2" | "3";
}
export declare const RecordPageLayout: React.ForwardRefExoticComponent<RecordPageLayoutProps & React.RefAttributes<HTMLDivElement>>;

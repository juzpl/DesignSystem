import * as React from "react";
export interface SummaryPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    children?: React.ReactNode;
}
export declare const SummaryPanel: React.ForwardRefExoticComponent<SummaryPanelProps & React.RefAttributes<HTMLDivElement>>;
export interface SummaryRowProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    value?: React.ReactNode;
}
export declare const SummaryRow: React.ForwardRefExoticComponent<SummaryRowProps & React.RefAttributes<HTMLDivElement>>;

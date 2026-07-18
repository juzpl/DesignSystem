import * as React from "react";
export interface DocumentTotalsBreakdownRow {
    vatRate: number;
    net: number;
    vat: number;
}
export interface DocumentTotalsProps extends React.HTMLAttributes<HTMLDivElement> {
    net: number;
    vat: number;
    gross: number;
    currency?: string;
    breakdown?: DocumentTotalsBreakdownRow[];
    netLabel?: string;
    vatLabel?: string;
    grossLabel?: string;
}
declare const DocumentTotals: React.ForwardRefExoticComponent<DocumentTotalsProps & React.RefAttributes<HTMLDivElement>>;
export { DocumentTotals };

import * as React from "react";
export interface DocumentLineItem {
    name: string;
    description?: string;
    qty: number;
    unit: string;
    price: number;
    vatRate: number;
    total: number;
    code?: string;
}
export interface DocumentLineItemsProps extends React.HTMLAttributes<HTMLDivElement> {
    items: DocumentLineItem[];
    currency?: string;
    showOrdinal?: boolean;
    emptyLabel?: string;
}
declare const DocumentLineItems: React.ForwardRefExoticComponent<DocumentLineItemsProps & React.RefAttributes<HTMLDivElement>>;
export { DocumentLineItems };

import * as React from "react";
export interface DocumentParty {
    name: string;
    taxId?: string;
    addressLines?: string[];
    email?: string;
    phone?: string;
    notes?: string;
}
export interface DocumentPartiesProps extends React.HTMLAttributes<HTMLDivElement> {
    seller: DocumentParty;
    buyer: DocumentParty;
    sellerLabel?: string;
    buyerLabel?: string;
}
declare const DocumentParties: React.ForwardRefExoticComponent<DocumentPartiesProps & React.RefAttributes<HTMLDivElement>>;
export { DocumentParties };

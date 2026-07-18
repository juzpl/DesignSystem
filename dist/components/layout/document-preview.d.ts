import * as React from "react";
export type DocumentStatus = "draft" | "issued" | "sent" | "paid" | "overdue" | "cancelled" | "neutral";
export interface DocumentMeta {
    number: string;
    type: string;
    date: string;
    dueDate?: string;
    status: DocumentStatus;
    statusLabel?: string;
}
export interface DocumentPreviewProps extends React.HTMLAttributes<HTMLElement> {
    document: DocumentMeta;
    actions?: React.ReactNode;
    notes?: React.ReactNode;
}
declare const DocumentPreview: React.ForwardRefExoticComponent<DocumentPreviewProps & React.RefAttributes<HTMLElement>>;
export { DocumentPreview };

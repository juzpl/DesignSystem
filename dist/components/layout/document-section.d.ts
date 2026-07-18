import * as React from "react";
export interface DocumentSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    title: React.ReactNode;
    description?: React.ReactNode;
    actions?: React.ReactNode;
    bodyClassName?: string;
}
declare const DocumentSection: React.ForwardRefExoticComponent<DocumentSectionProps & React.RefAttributes<HTMLElement>>;
export { DocumentSection };

import * as React from "react";
export interface InfoSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ElementType;
    title: string;
    required?: boolean;
    toolbar?: React.ReactNode;
    headerClassName?: string;
    bodyClassName?: string;
    children?: React.ReactNode;
}
export declare const InfoSection: React.ForwardRefExoticComponent<InfoSectionProps & React.RefAttributes<HTMLDivElement>>;

import * as React from "react";
export interface FieldGridProps extends React.HTMLAttributes<HTMLDListElement> {
    /** Liczba kolumn na breakpoint xl. Domyślnie 4. */
    columnsXl?: 2 | 3 | 4;
}
export declare const FieldGrid: React.ForwardRefExoticComponent<FieldGridProps & React.RefAttributes<HTMLDListElement>>;
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    value?: React.ReactNode;
    /** Gdy true — wartość pisana monospace (np. NIP, kod) */
    mono?: boolean;
}
export declare const Field: React.ForwardRefExoticComponent<FieldProps & React.RefAttributes<HTMLDivElement>>;

import * as React from "react";
interface FieldDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    value: React.ReactNode;
    hint?: React.ReactNode;
    orientation?: "vertical" | "horizontal";
}
declare const FieldDisplay: React.ForwardRefExoticComponent<FieldDisplayProps & React.RefAttributes<HTMLDivElement>>;
export { FieldDisplay };
export type { FieldDisplayProps };

import * as React from "react";
export interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
    trigger: React.ReactNode;
    children: React.ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    disabled?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare function Collapsible({ trigger, children, defaultOpen, open, disabled, onOpenChange, className, ...props }: CollapsibleProps): import("react/jsx-runtime").JSX.Element;

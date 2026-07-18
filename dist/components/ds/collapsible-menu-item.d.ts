import { BasicMenuItemProps } from './basic-menu-item';
import * as React from "react";
export interface CollapsibleMenuItemEntry extends BasicMenuItemProps {
    key: string;
}
export interface CollapsibleMenuItemProps {
    icon?: React.ReactNode;
    label: React.ReactNode;
    count?: number;
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    items: CollapsibleMenuItemEntry[];
    className?: string;
}
declare const CollapsibleMenuItem: React.ForwardRefExoticComponent<CollapsibleMenuItemProps & React.RefAttributes<HTMLDivElement>>;
export { CollapsibleMenuItem };

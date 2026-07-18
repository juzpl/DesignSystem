import { ButtonProps } from '../ui/button';
import * as React from "react";
export interface ActionButtonItem {
    key: string;
    label: string;
    icon: React.ReactNode;
    variant?: ButtonProps["variant"];
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface ActionButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
    actions: ActionButtonItem[];
    compact?: boolean;
}
declare const ActionButtons: React.ForwardRefExoticComponent<ActionButtonsProps & React.RefAttributes<HTMLDivElement>>;
export { ActionButtons };

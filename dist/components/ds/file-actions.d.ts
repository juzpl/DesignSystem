import { IconActionButtonProps } from '../ui/icon-action-button';
import * as React from "react";
export interface FileMeta {
    name: string;
    size?: number;
    type?: string;
    url?: string;
}
export interface FileActionItem {
    key: string;
    label: string;
    icon: React.ReactNode;
    variant?: IconActionButtonProps["variant"];
    disabled?: boolean;
    onClick?: (file: FileMeta) => void;
}
export interface FileActionsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
    file: FileMeta;
    actions: FileActionItem[];
}
declare const FileActions: React.ForwardRefExoticComponent<FileActionsProps & React.RefAttributes<HTMLDivElement>>;
export { FileActions };

import * as React from "react";
export interface SidebarNavItem {
    key: string;
    label: string;
    icon?: React.ReactNode;
    href?: string;
    count?: number;
    active?: boolean;
    items?: SidebarNavItem[];
    onSelect?: () => void;
}
export interface SidebarGroup {
    label?: string;
    collapsible?: boolean;
    defaultOpen?: boolean;
    items: SidebarNavItem[];
}
export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode;
    groups: SidebarGroup[];
    footer?: React.ReactNode;
    collapsed?: boolean;
    onToggleCollapse?: () => void;
}
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLElement>>;
export { Sidebar };

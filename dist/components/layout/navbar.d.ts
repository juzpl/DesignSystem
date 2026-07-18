import * as React from "react";
export interface NavbarBreadcrumb {
    label: string;
    href?: string;
}
export interface NavbarUser {
    name: string;
    email?: string;
    avatarUrl?: string;
    role?: string;
}
export interface NavbarProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    logo?: React.ReactNode;
    title?: React.ReactNode;
    breadcrumbs?: NavbarBreadcrumb[];
    nav?: React.ReactNode;
    user: NavbarUser;
    notifications?: number;
    searchPlaceholder?: string;
    onSearch?: () => void;
    onOpenNotifications?: () => void;
    onLogout: () => void;
    onProfile?: () => void;
    onSettings?: () => void;
    endSlot?: React.ReactNode;
}
declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>>;
export { Navbar };

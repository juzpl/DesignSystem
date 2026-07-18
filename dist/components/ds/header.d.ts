import * as React from "react";
export interface HeaderBreadcrumb {
    label: React.ReactNode;
    href?: string;
}
export interface HeaderProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    title: React.ReactNode;
    description?: React.ReactNode;
    breadcrumbs?: HeaderBreadcrumb[];
    actions?: React.ReactNode;
    eyebrow?: React.ReactNode;
}
declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
export { Header };

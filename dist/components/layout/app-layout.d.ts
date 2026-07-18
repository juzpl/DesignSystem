import * as React from "react";
export interface AppLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    sidebar: React.ReactNode;
    navbar: React.ReactNode;
    topBar?: React.ReactNode;
    mainClassName?: string;
}
declare const AppLayout: React.ForwardRefExoticComponent<AppLayoutProps & React.RefAttributes<HTMLDivElement>>;
export { AppLayout };

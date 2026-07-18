import * as React from "react";
interface AppSidebarProps extends React.HTMLAttributes<HTMLElement> {
    /** Logo shown in the expanded state (top of the sidebar). */
    logo?: React.ReactNode;
    /** Logo shown in the collapsed (icon-only) state. */
    logoCollapsed?: React.ReactNode;
    /**
     * Width of the expanded sidebar (Tailwind class). Defaults to `w-56`
     * — pass `w-64` etc. to widen.
     */
    expandedWidthClassName?: string;
    /** Width of the collapsed sidebar. Defaults to `w-16`. */
    collapsedWidthClassName?: string;
}
declare const AppSidebar: React.ForwardRefExoticComponent<AppSidebarProps & React.RefAttributes<HTMLElement>>;
export { AppSidebar };
export type { AppSidebarProps };

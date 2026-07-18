import * as React from "react";
interface AppSidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Compose with a custom link element (e.g. Next.js `<Link>`). */
    asChild?: boolean;
    /** Current-page styling. */
    isActive?: boolean;
    /**
     * Render as a top-level item without the nested-indent (no parent group).
     * Adds the same padding as a AppSidebarGroup header so standalone items
     * line up with grouped ones.
     */
    isStandalone?: boolean;
}
declare const AppSidebarItem: React.ForwardRefExoticComponent<AppSidebarItemProps & React.RefAttributes<HTMLButtonElement>>;
export { AppSidebarItem };
export type { AppSidebarItemProps };

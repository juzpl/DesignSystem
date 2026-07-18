import * as React from "react";
interface AppSidebarGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "id"> {
    /** Stable identifier used to persist collapsed state per group. */
    id: string;
    /** Group header label (shown when sidebar is expanded). */
    label: string;
    /** Icon shown next to the label (and as the only marker when collapsed). */
    icon?: React.ReactNode;
    /** Current-page styling on the header itself. */
    isActive?: boolean;
}
declare const AppSidebarGroup: React.ForwardRefExoticComponent<AppSidebarGroupProps & React.RefAttributes<HTMLDivElement>>;
export { AppSidebarGroup };
export type { AppSidebarGroupProps };

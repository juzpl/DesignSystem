import * as React from "react";
interface SectionNavItemProps extends React.HTMLAttributes<HTMLElement> {
    asChild?: boolean;
    icon?: React.ReactNode;
    label: React.ReactNode;
    description?: React.ReactNode;
    active?: boolean;
    badge?: React.ReactNode;
    trailing?: React.ReactNode;
}
declare const SectionNavItem: React.ForwardRefExoticComponent<SectionNavItemProps & React.RefAttributes<HTMLElement>>;
export { SectionNavItem };
export type { SectionNavItemProps };

import * as React from "react";
export interface TopBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    title: React.ReactNode;
    description?: React.ReactNode;
    filters?: React.ReactNode;
    primaryAction?: React.ReactNode;
    secondaryActions?: React.ReactNode;
    meta?: React.ReactNode;
}
declare const TopBar: React.ForwardRefExoticComponent<TopBarProps & React.RefAttributes<HTMLDivElement>>;
export { TopBar };

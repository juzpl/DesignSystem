import * as React from "react";
export interface BasicMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    label: React.ReactNode;
    active?: boolean;
    count?: number;
    asChild?: boolean;
}
declare const BasicMenuItem: React.ForwardRefExoticComponent<BasicMenuItemProps & React.RefAttributes<HTMLButtonElement>>;
export { BasicMenuItem };

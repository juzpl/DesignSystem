import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const iconActionButtonVariants: (props?: ({
    variant?: "default" | "destructive" | "primary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface IconActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconActionButtonVariants> {
    asChild?: boolean;
    label: string;
}
declare const IconActionButton: React.ForwardRefExoticComponent<IconActionButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { IconActionButton, iconActionButtonVariants };
export type { IconActionButtonProps };

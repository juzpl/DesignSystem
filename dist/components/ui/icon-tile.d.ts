import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const iconTileVariants: (props?: ({
    tone?: "success" | "warning" | "destructive" | "primary" | "muted" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface IconTileProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof iconTileVariants> {
    asChild?: boolean;
    icon?: React.ReactNode;
}
declare const IconTile: React.ForwardRefExoticComponent<IconTileProps & React.RefAttributes<HTMLSpanElement>>;
export { IconTile, iconTileVariants };
export type { IconTileProps };

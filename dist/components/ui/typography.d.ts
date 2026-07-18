import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const typographyVariants: (props?: ({
    variant?: "h2" | "h3" | "body" | "caption" | "code" | "h1" | "h4" | "h5" | "h6" | "small" | "muted" | "lead" | "large" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface TypographyProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
    asChild?: boolean;
    as?: keyof React.JSX.IntrinsicElements;
}
declare const Typography: React.ForwardRefExoticComponent<TypographyProps & React.RefAttributes<HTMLElement>>;
export { Typography, typographyVariants };
export type { TypographyProps };

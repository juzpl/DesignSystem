import * as React from "react";
interface PageSizeControlProps {
    value: number;
    onValueChange: (value: number) => void;
    options?: number[];
    label?: string;
    itemSuffix?: string;
    className?: string;
    disabled?: boolean;
}
declare const PageSizeControl: React.ForwardRefExoticComponent<PageSizeControlProps & React.RefAttributes<HTMLDivElement>>;
export { PageSizeControl };
export type { PageSizeControlProps };

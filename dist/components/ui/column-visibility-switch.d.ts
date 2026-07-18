import * as React from "react";
interface ColumnVisibilityItem {
    id: string;
    label: string;
    visible: boolean;
    disabled?: boolean;
}
interface ColumnVisibilitySwitchProps {
    columns: ColumnVisibilityItem[];
    onChange: (id: string, visible: boolean) => void;
    label?: string;
    triggerLabel?: string;
    className?: string;
    align?: "start" | "center" | "end";
}
declare const ColumnVisibilitySwitch: React.ForwardRefExoticComponent<ColumnVisibilitySwitchProps & React.RefAttributes<HTMLButtonElement>>;
export { ColumnVisibilitySwitch };
export type { ColumnVisibilitySwitchProps, ColumnVisibilityItem };

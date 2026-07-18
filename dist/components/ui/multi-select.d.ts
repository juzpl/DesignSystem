import * as React from "react";
interface MultiSelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface MultiSelectProps {
    options: MultiSelectOption[];
    value: string[];
    onValueChange: (value: string[]) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    empty?: string;
    maxBadges?: number;
    disabled?: boolean;
    className?: string;
    contentClassName?: string;
}
declare const MultiSelect: React.ForwardRefExoticComponent<MultiSelectProps & React.RefAttributes<HTMLButtonElement>>;
export { MultiSelect };
export type { MultiSelectProps, MultiSelectOption };

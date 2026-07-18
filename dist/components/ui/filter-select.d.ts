import * as React from "react";
interface FilterSelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface FilterSelectProps {
    options: FilterSelectOption[];
    value?: string;
    onValueChange?: (value: string | undefined) => void;
    placeholder?: string;
    label?: string;
    clearable?: boolean;
    disabled?: boolean;
    className?: string;
    contentClassName?: string;
}
declare const FilterSelect: React.ForwardRefExoticComponent<FilterSelectProps & React.RefAttributes<HTMLButtonElement>>;
export { FilterSelect };
export type { FilterSelectProps, FilterSelectOption };

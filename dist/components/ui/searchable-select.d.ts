import * as React from "react";
interface SearchableSelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface SearchableSelectProps {
    options: SearchableSelectOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    empty?: string;
    disabled?: boolean;
    className?: string;
    contentClassName?: string;
}
declare const SearchableSelect: React.ForwardRefExoticComponent<SearchableSelectProps & React.RefAttributes<HTMLButtonElement>>;
export { SearchableSelect };
export type { SearchableSelectProps, SearchableSelectOption };

import * as React from "react";
export interface AutocompleteOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface AutocompleteProps {
    value?: string;
    onValueChange?: (value: string) => void;
    options: AutocompleteOption[];
    onSearch?: (query: string) => void;
    loading?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    className?: string;
}
declare const Autocomplete: React.ForwardRefExoticComponent<AutocompleteProps & React.RefAttributes<HTMLButtonElement>>;
export { Autocomplete };

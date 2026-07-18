import * as React from "react";
interface DateFilterProps {
    value?: Date;
    onValueChange?: (value: Date | undefined) => void;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    clearable?: boolean;
}
declare const DateFilter: React.ForwardRefExoticComponent<DateFilterProps & React.RefAttributes<HTMLButtonElement>>;
export { DateFilter };
export type { DateFilterProps };

import { DateRange } from 'react-day-picker';
import * as React from "react";
interface DateRangeInputProps {
    value?: DateRange;
    onValueChange?: (value: DateRange | undefined) => void;
    placeholder?: {
        from?: string;
        to?: string;
    };
    disabled?: boolean;
    className?: string;
    numberOfMonths?: number;
}
declare const DateRangeInput: React.ForwardRefExoticComponent<DateRangeInputProps & React.RefAttributes<HTMLDivElement>>;
export { DateRangeInput };
export type { DateRangeInputProps };

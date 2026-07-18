import { Calendar } from '../ui/calendar';
import * as React from "react";
export interface DatePickerProps {
    value?: Date;
    onValueChange?: (value: Date | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    disabledDates?: React.ComponentProps<typeof Calendar>["disabled"];
    className?: string;
    dateFormat?: string;
}
declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLButtonElement>>;
export { DatePicker };

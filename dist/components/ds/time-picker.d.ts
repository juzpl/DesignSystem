import * as React from "react";
export interface TimePickerProps {
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    minuteStep?: number;
    className?: string;
}
declare const TimePicker: React.ForwardRefExoticComponent<TimePickerProps & React.RefAttributes<HTMLButtonElement>>;
export { TimePicker };

import { InputProps } from '../ui/input';
import * as React from "react";
export interface TimeInputProps extends Omit<InputProps, "value" | "onChange" | "type"> {
    value?: string;
    onValueChange?: (value: string) => void;
    invalid?: boolean;
    step?: number;
    showIcon?: boolean;
}
declare const TimeInput: React.ForwardRefExoticComponent<TimeInputProps & React.RefAttributes<HTMLInputElement>>;
export { TimeInput };

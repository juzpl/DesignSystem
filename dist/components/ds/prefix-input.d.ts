import { InputProps } from '../ui/input';
import * as React from "react";
export interface PrefixInputProps extends Omit<InputProps, "prefix"> {
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    containerClassName?: string;
}
declare const PrefixInput: React.ForwardRefExoticComponent<PrefixInputProps & React.RefAttributes<HTMLInputElement>>;
export { PrefixInput };

import * as React from "react";
interface DecimalInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type" | "prefix" | "min" | "max"> {
    value?: number | string | null;
    onValueChange?: (value: number | null) => void;
    precision?: number;
    min?: number;
    max?: number;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
}
declare const DecimalInput: React.ForwardRefExoticComponent<DecimalInputProps & React.RefAttributes<HTMLInputElement>>;
export { DecimalInput };
export type { DecimalInputProps };

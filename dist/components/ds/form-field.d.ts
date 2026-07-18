import * as React from "react";
export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: React.ReactNode;
    htmlFor?: string;
    error?: React.ReactNode;
    hint?: React.ReactNode;
    required?: boolean;
    children: React.ReactNode;
    labelClassName?: string;
    description?: React.ReactNode;
}
declare const FormField: React.ForwardRefExoticComponent<FormFieldProps & React.RefAttributes<HTMLDivElement>>;
export { FormField };

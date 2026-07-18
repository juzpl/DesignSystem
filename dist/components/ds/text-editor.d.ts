import * as React from "react";
export interface TextEditorProps {
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    minHeight?: number;
    toolbarClassName?: string;
    ariaLabel?: string;
}
declare const TextEditor: React.ForwardRefExoticComponent<TextEditorProps & React.RefAttributes<HTMLDivElement>>;
export { TextEditor };

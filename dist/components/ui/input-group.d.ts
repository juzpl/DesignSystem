import * as React from "react";
interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
}
declare const InputGroup: React.ForwardRefExoticComponent<InputGroupProps & React.RefAttributes<HTMLDivElement>>;
export { InputGroup };
export type { InputGroupProps };

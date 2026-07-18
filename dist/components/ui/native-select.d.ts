import * as React from "react";
interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    invalid?: boolean;
}
declare const NativeSelect: React.ForwardRefExoticComponent<NativeSelectProps & React.RefAttributes<HTMLSelectElement>>;
export { NativeSelect };
export type { NativeSelectProps };

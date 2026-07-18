import * as React from "react";
interface KbdProps extends React.HTMLAttributes<HTMLElement> {
    size?: "sm" | "default" | "lg";
}
declare const Kbd: React.ForwardRefExoticComponent<KbdProps & React.RefAttributes<HTMLElement>>;
export { Kbd };
export type { KbdProps };

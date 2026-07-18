import * as React from "react";
type PhoneDevice = "iphone" | "android";
interface PhoneFrameProps extends React.HTMLAttributes<HTMLDivElement> {
    device?: PhoneDevice;
    children?: React.ReactNode;
}
declare const PhoneFrame: React.ForwardRefExoticComponent<PhoneFrameProps & React.RefAttributes<HTMLDivElement>>;
export { PhoneFrame };
export type { PhoneFrameProps, PhoneDevice };

import { Toaster as Sonner, toast } from 'sonner';
import * as React from "react";
type ToasterProps = React.ComponentProps<typeof Sonner>;
declare const Toaster: ({ className, ...props }: ToasterProps) => import("react/jsx-runtime").JSX.Element;
export { Toaster, toast };

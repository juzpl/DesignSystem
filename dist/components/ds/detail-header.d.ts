import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import type * as React from "react";
type DetailHeaderAction = {
    label: string;
    icon?: React.ElementType;
    variant?: React.ComponentProps<typeof Button>["variant"];
};
type DetailHeaderMetaItem = {
    label: string;
    value: string;
};
export type DetailHeaderProps = {
    title?: string;
    subtitle?: string;
    status?: string;
    statusVariant?: React.ComponentProps<typeof Badge>["variant"];
    backLabel?: string;
    actions?: DetailHeaderAction[];
    metaItems?: DetailHeaderMetaItem[];
};
export declare function DetailHeader({ title, subtitle, status, statusVariant, backLabel, actions, metaItems }: DetailHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};

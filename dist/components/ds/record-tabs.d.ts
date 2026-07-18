import { BadgeProps } from '../ui/badge';
export type RecordTabItem = string | {
    value: string;
    label?: string;
    badge?: string;
    badgeVariant?: BadgeProps["variant"];
};
export declare function normalizeRecordTabs(items: RecordTabItem[]): {
    value: string;
    label: string;
    badge?: string;
    badgeVariant?: BadgeProps["variant"];
}[];
export declare function RecordTabs({ items, value, defaultValue, onValueChange, sticky, className, listClassName }: {
    items: RecordTabItem[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    sticky?: boolean;
    className?: string;
    listClassName?: string;
}): import("react/jsx-runtime").JSX.Element;

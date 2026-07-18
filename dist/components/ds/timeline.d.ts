import { LucideIcon } from 'lucide-react';
type VerticalTimelineItem = {
    title: string;
    meta: string;
    icon?: LucideIcon;
    state?: "done" | "active" | "planned";
    description?: string;
};
type PlainTimelineItem = {
    title: string;
    meta: string;
    description?: string;
};
export declare function HorizontalTimeline(): import("react/jsx-runtime").JSX.Element;
export declare function VerticalTimeline({ items }: {
    items?: VerticalTimelineItem[];
}): import("react/jsx-runtime").JSX.Element;
export declare function PlainTimeline({ items }: {
    items: PlainTimelineItem[];
}): import("react/jsx-runtime").JSX.Element;
export {};

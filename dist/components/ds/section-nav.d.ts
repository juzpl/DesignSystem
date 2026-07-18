import * as React from "react";
export interface SectionNavEntry {
    id: string;
    label: string;
    icon: React.ElementType;
    state?: "Wymagane" | "Opcjonalne";
}
export interface SectionNavProps extends Omit<React.HTMLAttributes<HTMLElement>, "onSelect"> {
    title?: string;
    items: SectionNavEntry[];
    activeId?: string;
    onSelect?: (id: string) => void;
}
export declare const SectionNav: React.ForwardRefExoticComponent<SectionNavProps & React.RefAttributes<HTMLElement>>;

import * as React from "react";
interface SidebarContextValue {
    /** Sidebar is pinned in the expanded state */
    isPinned: boolean;
    /** Mouse is hovering the sidebar (temporary expand) */
    isHovered: boolean;
    /** Mobile drawer is open */
    isMobileOpen: boolean;
    /** Derived: sidebar is expanded (pinned OR hovered) */
    isExpanded: boolean;
    /** Per-group open state (true = open) */
    collapsedGroups: Record<string, boolean>;
    togglePin: () => void;
    setHovered: (value: boolean) => void;
    setMobileOpen: (value: boolean) => void;
    toggleGroup: (id: string) => void;
}
interface SidebarProviderProps {
    children: React.ReactNode;
    /**
     * localStorage key prefix. Defaults to `"juz-sidebar"` — set per-app
     * (e.g. `storagePrefix="income"`) when the design system is consumed
     * by multiple apps on the same origin and you want their sidebar
     * state to stay independent.
     */
    storagePrefix?: string;
}
declare const SidebarProvider: ({ children, storagePrefix, }: SidebarProviderProps) => import("react/jsx-runtime").JSX.Element;
declare const useSidebar: () => SidebarContextValue;
export { SidebarProvider, useSidebar };
export type { SidebarContextValue, SidebarProviderProps };

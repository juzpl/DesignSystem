import * as React from "react";
export interface FilterOption {
    value: string;
    label: string;
}
export interface AdvancedFiltersValue {
    dateFrom?: Date | null;
    dateTo?: Date | null;
    statuses?: string[];
    tags?: string[];
    [key: string]: unknown;
}
export interface AdvancedFiltersPanelProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    filters: AdvancedFiltersValue;
    onFiltersChange?: (filters: AdvancedFiltersValue) => void;
    onApply?: (filters: AdvancedFiltersValue) => void;
    onReset?: () => void;
    statusOptions?: FilterOption[];
    tagOptions?: FilterOption[];
    title?: string;
    description?: string;
    dateRangeSlot?: React.ReactNode;
    tagsSlot?: React.ReactNode;
    extraSlot?: React.ReactNode;
    className?: string;
}
declare function AdvancedFiltersPanel({ open, onOpenChange, filters, onFiltersChange, onApply, onReset, statusOptions, tagOptions, title, description, dateRangeSlot, tagsSlot, extraSlot, className, }: AdvancedFiltersPanelProps): import("react/jsx-runtime").JSX.Element;
export { AdvancedFiltersPanel };

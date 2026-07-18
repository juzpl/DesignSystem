import * as React from "react";
export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
    page: number;
    pageCount: number;
    onPageChange?: (page: number) => void;
    siblings?: number;
    showFirstLast?: boolean;
    labelPrevious?: string;
    labelNext?: string;
}
declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>;
export { Pagination };

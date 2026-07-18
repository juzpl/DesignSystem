import * as React from "react";
interface SummaryTileProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    value: React.ReactNode;
    hint?: React.ReactNode;
}
declare const SummaryTile: React.ForwardRefExoticComponent<SummaryTileProps & React.RefAttributes<HTMLDivElement>>;
export { SummaryTile };
export type { SummaryTileProps };

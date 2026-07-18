import * as React from "react";
interface MiniMonthProps {
    month: Date;
    events?: Date[];
    selected?: Date;
    onSelect?: (date: Date | undefined) => void;
    className?: string;
}
declare const MiniMonth: React.ForwardRefExoticComponent<MiniMonthProps & React.RefAttributes<HTMLDivElement>>;
export { MiniMonth };
export type { MiniMonthProps };

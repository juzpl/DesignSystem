import * as React from "react";
export interface Workstation {
    id: string;
    name: string;
    description?: string;
}
export type WeekEventColor = "default" | "success" | "warning" | "destructive" | "neutral";
export interface WeekWorkstationEvent {
    id?: string | number;
    workstationId: string;
    day: number | Date;
    label: React.ReactNode;
    color?: WeekEventColor;
    meta?: React.ReactNode;
    onClick?: () => void;
}
export interface WeekWorkstationsProps extends React.HTMLAttributes<HTMLDivElement> {
    workstations: Workstation[];
    weekStart: Date;
    events: WeekWorkstationEvent[];
    daysCount?: number;
    emptyLabel?: string;
}
declare const WeekWorkstations: React.ForwardRefExoticComponent<WeekWorkstationsProps & React.RefAttributes<HTMLDivElement>>;
export { WeekWorkstations };

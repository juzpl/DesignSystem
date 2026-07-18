import * as React from "react";
export type ScheduleView = "day" | "week" | "month";
export type ScheduleEventStatus = "planned" | "progress" | "done" | "warning" | "blocked";
export interface ScheduleEvent {
    id: string | number;
    title: string;
    start: Date;
    end: Date;
    resource?: string;
    color?: string;
    status?: ScheduleEventStatus;
    description?: string;
}
export interface ScheduleResource {
    id: string;
    name: string;
}
export interface ScheduleProps extends React.HTMLAttributes<HTMLDivElement> {
    view: ScheduleView;
    currentDate: Date;
    events: ScheduleEvent[];
    resources?: ScheduleResource[];
    onEventClick?: (event: ScheduleEvent) => void;
    onDateChange?: (date: Date) => void;
    onViewChange?: (view: ScheduleView) => void;
    startHour?: number;
    endHour?: number;
}
declare const Schedule: React.ForwardRefExoticComponent<ScheduleProps & React.RefAttributes<HTMLDivElement>>;
export { Schedule };

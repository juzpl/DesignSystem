import * as React from "react";
export type CalendarEventStatus = "new" | "planned" | "progress" | "done" | "warning" | "blocked";
export interface CalendarEventProps extends Omit<React.HTMLAttributes<HTMLElement>, "id" | "onClick"> {
    eventId?: number;
    status: CalendarEventStatus;
    title: string;
    startTime: string;
    endTime: string;
    station?: string;
    owner?: string;
    description?: string;
    isActive?: boolean;
    onClick?: (eventId?: number) => void;
}
export declare function CalendarEvent({ eventId, status, title, startTime, endTime, station, owner, description, isActive, className, onClick, ...props }: CalendarEventProps): import("react/jsx-runtime").JSX.Element;

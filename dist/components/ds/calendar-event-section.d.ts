import * as React from "react";
export interface CalendarEventParticipant {
    id: string | number;
    name: string;
    avatarUrl?: string;
}
export interface CalendarEventSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    date: string;
    time?: string;
    location?: string;
    description?: string;
    participants?: CalendarEventParticipant[];
    actions?: React.ReactNode;
}
declare const CalendarEventSection: React.ForwardRefExoticComponent<CalendarEventSectionProps & React.RefAttributes<HTMLDivElement>>;
export { CalendarEventSection };

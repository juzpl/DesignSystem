import * as React from "react";
type MetricTrendDirection = "up" | "down" | "flat";
interface MetricTrend {
    direction: MetricTrendDirection;
    value: string;
    label?: string;
}
interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    value: React.ReactNode;
    description?: React.ReactNode;
    trend?: MetricTrend;
    icon?: React.ReactNode;
}
declare const MetricCard: React.ForwardRefExoticComponent<MetricCardProps & React.RefAttributes<HTMLDivElement>>;
export { MetricCard };
export type { MetricCardProps, MetricTrend, MetricTrendDirection };

import * as React from "react";
interface DonutChartProps {
    data: Array<{
        key: string;
        value: number;
        label?: string;
        color?: string;
    }>;
    className?: string;
    innerRadius?: number;
    outerRadius?: number;
    centerLabel?: React.ReactNode;
}
declare const DonutChart: ({ data, className, innerRadius, outerRadius, centerLabel, }: DonutChartProps) => import("react/jsx-runtime").JSX.Element;
export { DonutChart };
export type { DonutChartProps };

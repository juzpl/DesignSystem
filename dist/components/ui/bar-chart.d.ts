import { ChartConfig } from './chart';
interface BarChartProps {
    data: Array<Record<string, any>>;
    categoryKey: string;
    series: Array<{
        key: string;
        label?: string;
        color?: string;
    }>;
    config?: ChartConfig;
    stacked?: boolean;
    className?: string;
    hideGrid?: boolean;
    hideAxis?: boolean;
}
declare const BarChart: ({ data, categoryKey, series, config, stacked, className, hideGrid, hideAxis, }: BarChartProps) => import("react/jsx-runtime").JSX.Element;
export { BarChart };
export type { BarChartProps };

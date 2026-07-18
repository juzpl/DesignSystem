import { ChartConfig } from './chart';
interface LineChartProps {
    data: Array<Record<string, any>>;
    categoryKey: string;
    series: Array<{
        key: string;
        label?: string;
        color?: string;
        dashed?: boolean;
    }>;
    config?: ChartConfig;
    className?: string;
    hideGrid?: boolean;
    hideAxis?: boolean;
}
declare const LineChart: ({ data, categoryKey, series, config, className, hideGrid, hideAxis, }: LineChartProps) => import("react/jsx-runtime").JSX.Element;
export { LineChart };
export type { LineChartProps };

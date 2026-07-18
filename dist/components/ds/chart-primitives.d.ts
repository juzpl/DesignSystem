type TokenTone = "primary" | "success" | "warning" | "destructive" | "muted";
type ChartPoint = {
    label: string;
    value: number;
};
type DonutSegment = ChartPoint & {
    tone: TokenTone;
};
export declare function TokenBarChart({ title, description, data, className }: {
    title?: string;
    description?: string;
    data: ChartPoint[];
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function TokenLineChart({ title, description, data, className }: {
    title?: string;
    description?: string;
    data: ChartPoint[];
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function TokenDonutChart({ title, description, data, centerLabel, centerCaption, className }: {
    title?: string;
    description?: string;
    data: DonutSegment[];
    centerLabel?: string;
    centerCaption?: string;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export {};

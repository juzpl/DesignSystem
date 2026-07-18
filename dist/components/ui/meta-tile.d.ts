import { IconTileProps } from './icon-tile';
import * as React from "react";
type MetaTileTone = NonNullable<IconTileProps["tone"]>;
interface MetaTileProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ReactNode;
    label: React.ReactNode;
    value: React.ReactNode;
    tone?: MetaTileTone;
    size?: IconTileProps["size"];
}
declare const MetaTile: React.ForwardRefExoticComponent<MetaTileProps & React.RefAttributes<HTMLDivElement>>;
export { MetaTile };
export type { MetaTileProps, MetaTileTone };

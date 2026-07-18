import * as React from "react";
interface AddressCardProps extends React.HTMLAttributes<HTMLDivElement> {
    name: React.ReactNode;
    street: React.ReactNode;
    city: React.ReactNode;
    postalCode: React.ReactNode;
    country?: React.ReactNode;
    tax?: React.ReactNode;
    phone?: React.ReactNode;
    email?: React.ReactNode;
    isPrimary?: boolean;
}
declare const AddressCard: React.ForwardRefExoticComponent<AddressCardProps & React.RefAttributes<HTMLDivElement>>;
export { AddressCard };
export type { AddressCardProps };

import * as React from "react";
export interface ProfileUser {
    name: string;
    email?: string;
    avatarUrl?: string;
    role?: string;
}
export interface ProfileMenuItem {
    key: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}
export interface ProfileMenuProps {
    user: ProfileUser;
    items?: ProfileMenuItem[];
    onLogout?: () => void;
    className?: string;
    showName?: boolean;
    align?: "start" | "center" | "end";
    logoutLabel?: string;
}
declare function ProfileMenu({ user, items, onLogout, className, showName, align, logoutLabel, }: ProfileMenuProps): import("react/jsx-runtime").JSX.Element;
export { ProfileMenu };

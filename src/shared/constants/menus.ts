import type { IconType } from "react-icons"
import { IoGridOutline, IoPeopleOutline, IoFilmOutline } from "react-icons/io5"

export type MenuItem = {
    label: string
    path: string
    icon: IconType
}

export const adminMenu: MenuItem[] = [
    {
        label: "Dashboard",
        path: "/admin/dashboard",
        icon: IoGridOutline,
    },
    {
        label: "Manage Users",
        path: "/admin/users",
        icon: IoPeopleOutline,
    },
    {
        label: "Manage DVDs",
        path: "/admin/dvds",
        icon: IoFilmOutline,
    },
]

export const customerMenu: MenuItem[] = [
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: IoGridOutline,
    },
    {
        label: "Browse DVDs",
        path: "/dvds",
        icon: IoFilmOutline,
    },
]

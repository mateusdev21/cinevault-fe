import { useLocation } from "react-router-dom"
import { useAuthStore } from "../../features/auth/store/auth.store"
import { adminMenu, customerMenu } from "../constants/menus"
import { IoSearchOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5"
import { useState, useMemo } from "react"

export const Header = () => {
    const { user } = useAuthStore()
    const location = useLocation()

    const [searchOpen, setSearchOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    const menus = user?.role === "admin" ? adminMenu : customerMenu

    // Cari title berdasarkan path
    const pageTitle = useMemo(() => {
        const match = menus.find((menu) =>
            location.pathname.startsWith(menu.path)
        )
        return match?.label || "Dashboard"
    }, [location.pathname, menus])

    // Avatar initial
    const initial = user?.name?.charAt(0).toUpperCase()

    const toggleDark = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle("dark")
    }

    return (
        <header className="h-16 px-8 py-9 flex items-center justify-between bg-transparent">

            {/* LEFT: Page Title */}
            <h1 className="text-xl font-semibold">
                {pageTitle}
            </h1>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-4">

                {/* Search */}
                <div className="relative flex items-center">
                    {searchOpen && (
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-3 py-1 mr-4 bg-white rounded-lg focus:outline-[#2a7ff7] focus:outline-1 w-48 transition"
                        />
                    )}
                    <button
                        onClick={() => setSearchOpen(!searchOpen)}
                        className="p-2 rounded-lg bg-white shadow-xs hover:bg-gray-100 hover:cursor-pointer dark:hover:bg-gray-700 transition"
                    >
                        <IoSearchOutline size={20} />
                    </button>
                </div>

                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDark}
                    className="p-2 mx-1 rounded-lg bg-white shadow-xs hover:bg-gray-100 hover:cursor-pointer dark:hover:bg-gray-700 transition"
                >
                    {darkMode ? (
                        <IoSunnyOutline size={20} />
                    ) : (
                        <IoMoonOutline size={20} />
                    )}
                </button>

                {/* User Info */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 text-white font-medium">
                        {initial}
                    </div>
                    <div className="text-sm leading-tight">
                        <div className="font-medium">{user?.name}</div>
                        <div className="text-gray-500 text-xs capitalize">
                            {user?.role}
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

import { NavLink, useNavigate } from "react-router-dom"
import { useAuthStore } from "../../features/auth/store/auth.store"
import { adminMenu, customerMenu } from "../constants/menus"
import { IoLogOutOutline } from "react-icons/io5"

export const Sidebar = () => {
    const { user, clearAuth } = useAuthStore()
    const navigate = useNavigate()

    const menus = user?.role === "admin" ? adminMenu : customerMenu

    const handleLogout = () => {
        clearAuth()
        navigate("/login")
    }

    return (
        <aside className="w-56 h-screen bg-white flex flex-col shadow-lg px-2">
            <div className="p-6 font-extrabold text-xl text-center">CineVault</div>

            <nav className="flex flex-col gap-1 px-2">
                {menus.map((menu) => {
                    const Icon = menu.icon

                    return (
                        <NavLink
                            key={menu.label}
                            to={menu.path}
                            className={({ isActive }) =>
                                `flex items-center gap-4 px-4 py-3 rounded-lg transition font-semibold
                                    ${isActive ? "bg-[#e4f2fb] text-[#027efa]"
                                    : "text-[#4a4b4f] hover:text-[#027efa]"
                                }`
                            }
                        >
                            <Icon size={20} />
                            {menu.label}
                        </NavLink>
                    )
                })}
            </nav>

            <div className="mt-auto p-4">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center text-md font-semibold gap-3 p-4 text-[#4a4b4f] hover:cursor-pointer hover:text-[#027efa] transition"
                >
                    <IoLogOutOutline size={20} />
                    Logout
                </button>
            </div>
        </aside>
    )
}

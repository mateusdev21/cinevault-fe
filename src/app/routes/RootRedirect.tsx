import { Navigate } from "react-router-dom"
import { useAuthStore } from "../../features/auth/store/auth.store"

export const RootRedirect = () => {
    const { token, user } = useAuthStore()

    // belum login
    if (!token || !user) {
        return <Navigate to="/login" replace />
    }

    // sudah login → arahkan berdasarkan role
    if (user.role === "admin") {
        return <Navigate to="/admin/dashboard" replace />
    }

    return <Navigate to="/dashboard" replace />
}

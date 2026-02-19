import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../../features/auth/store/auth.store"

type ProtectedRouteProps = {
  allowedRoles?: string[]
}

export const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { token, user } = useAuthStore()

  // 1️⃣ Belum login
  if (!token || !user) {
    return <Navigate to="/login" replace />
  }

  // 2️⃣ Cek role jika ada aturan
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  // 3️⃣ Lolos semua
  return <Outlet />
}

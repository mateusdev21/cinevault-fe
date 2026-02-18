import { authService } from '../services/auth.service'
import { useAuthStore } from '../store/auth.store'

export const useLogout = () => {
    const clearAuth = useAuthStore((state) => state.clearAuth)

    const logout = async () => {
        await authService.logout()
        clearAuth()
    }

    return { logout }
}

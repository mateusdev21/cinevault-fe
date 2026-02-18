import { useAuthStore } from '../store/auth.store'

export const useAuth = () => {
    const { user, token, isAuthenticated } = useAuthStore()

    return {
        user,
        token,
        isAuthenticated,
    }
}

import { useState } from 'react'
import { authService } from '../services/auth.service'
import { useAuthStore } from '../store/auth.store'
import type { LoginPayload } from '../types'

export const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const setAuth = useAuthStore((state) => state.setAuth)

    const login = async (payload: LoginPayload) => {
        try {
            setLoading(true)
            const response = await authService.login(payload)

            setAuth(response.data.user, response.data.token)
            return response
        } finally {
            setLoading(false)
        }
    }

    return { login, loading }
}

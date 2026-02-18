import { useState } from 'react'
import { authService } from '../services/auth.service'
import { useAuthStore } from '../store/auth.store'
import type { RegisterPayload } from '../types'

export const useRegister = () => {
    const [loading, setLoading] = useState(false)
    const setAuth = useAuthStore((state) => state.setAuth)

    const register = async (payload: RegisterPayload) => {
        try {
            setLoading(true)
            const response = await authService.register(payload)

            setAuth(response.user, response.access_token)
        } finally {
            setLoading(false)
        }
    }

    return { register, loading }
}

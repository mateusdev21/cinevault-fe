import { useState } from 'react'
import { authService } from '../services/auth.service'
import type { RegisterPayload } from '../types'

export const useRegister = () => {
    const [loading, setLoading] = useState(false)

    const register = async (payload: RegisterPayload) => {
        try {
            setLoading(true)
            const response = await authService.register(payload)

            return response

        } finally {
            setLoading(false)
        }
    }

    return { register, loading }
}

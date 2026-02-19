import { create } from 'zustand'
import type { User } from '../types'

interface AuthState {
    user: User | null
    token: string | null
    isAuthenticated: boolean

    setAuth: (user: User, token: string) => void
    clearAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => {
    const storedUser = localStorage.getItem("user")
    const storedToken = localStorage.getItem("token")

    return {
        user: storedUser ? JSON.parse(storedUser) : null,
        token: storedToken,
        isAuthenticated: !!storedToken,

        setAuth: (user, token) => {
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)

            set({
                user,
                token,
                isAuthenticated: true,
            })
        },

        clearAuth: () => {
            localStorage.removeItem("user")
            localStorage.removeItem("token")

            set({
                user: null,
                token: null,
                isAuthenticated: false,
            })
        },
    }
})


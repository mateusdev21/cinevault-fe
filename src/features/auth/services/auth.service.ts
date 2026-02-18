import { authApi } from '../api/auth.api'
import type { LoginPayload, RegisterPayload } from '../types'

export const authService = {
    async login(payload: LoginPayload) {
        const response = await authApi.login(payload)

        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))

        return response
    },

    async register(payload: RegisterPayload) {
        const response = await authApi.register(payload)

        localStorage.setItem('token', response.data?.token)

        return response
    },

    async logout() {
        await authApi.logout()
        localStorage.removeItem('token')
    },
}

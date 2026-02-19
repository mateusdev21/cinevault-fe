import axiosInstance from '../../../shared/lib/axios'
import type { LoginPayload, RegisterPayload, AuthResponse } from '../types'

export const authApi = {
    login: async (payload: LoginPayload) => {
        const { data } = await axiosInstance.post<AuthResponse>('/auth/login', payload)
        return data
    },

    register: async (payload: RegisterPayload) => {
        const data = await axiosInstance.post<AuthResponse>('/auth/register', payload)        
        return data
    },

    logout: async () => {
        await axiosInstance.post('/auth/logout')
    },
}

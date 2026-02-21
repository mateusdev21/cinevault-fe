import axiosInstance from '../../../shared/lib/axios'
import type { CreateDVDPayload, DVDResponse } from "../types"

export const dvdApi = {
    getAll: async () => {
        const { data } = await axiosInstance.get<DVDResponse>('/products')
        return data
    },

    getById: async (id: number | string) => {
        const { data } = await axiosInstance.get<DVDResponse>(`/products/${id}`)
        return data
    },

    create: async (payload: CreateDVDPayload) => {
        const { data } = await axiosInstance.post<DVDResponse>('/products', payload)
        return data
    },

    update: async (id: number | string, payload: Partial<CreateDVDPayload>) => {
        const { data } = await axiosInstance.put<DVDResponse>(`/products/${id}`, payload)
        return data
    },

    delete: async (id: number | string) => {
        await axiosInstance.delete(`/products/${id}`)
    }
}

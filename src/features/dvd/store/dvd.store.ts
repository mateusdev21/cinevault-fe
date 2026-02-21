import { create } from 'zustand'
import type { DVD } from '../types'

interface DVDState {
    dvds: DVD[]
    selectedDVD: DVD | null
    loading: boolean
    error: string | null

    setDVDs: (dvds: DVD[]) => void
    setSelectedDVD: (dvd: DVD | null) => void
    setLoading: (value: boolean) => void
    setError: (error: string | null) => void

    addDVD: (dvd: DVD) => void
    updateDVD: (id: string | number, updated: DVD) => void
    removeDVD: (id: string | number) => void

    clear: () => void
}

export const useDVDStore = create<DVDState>((set) => ({
    dvds: [],
    selectedDVD: null,
    loading: false,
    error: null,

    setDVDs: (dvds) => set({ dvds }),

    setSelectedDVD: (dvd) => set({ selectedDVD: dvd }),

    setLoading: (value) => set({ loading: value }),

    setError: (error) => set({ error }),

    addDVD: (dvd) =>
        set((state) => ({
            dvds: [...state.dvds, dvd],
        })),

    updateDVD: (id, updated) =>
        set((state) => ({
            dvds: state.dvds.map((dvd) =>
                dvd.id === id ? updated : dvd
            ),
        })),

    removeDVD: (id) =>
        set((state) => ({
            dvds: state.dvds.filter((dvd) => dvd.id !== id),
        })),

    clear: () =>
        set({
            dvds: [],
            selectedDVD: null,
            loading: false,
            error: null,
        }),
}))
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

type Role = "admin" | "customer";

interface AuthState {
    user: {
        id: number;
        name: string;
        role: Role;
    } | null;
    token: string | null;
    setAuth: (user: any, token: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: null,
    setAuth: (user, token) => set({ user, token }),
    logout: () => set({ user: null, token: null }),
}));

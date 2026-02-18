export interface User {
    id: number
    name: string
    email: string
    role: string
}

export interface LoginPayload {
    email: string
    password: string
}

export interface RegisterPayload {
    name: string
    email: string
    password: string
}

export interface AuthResponse {
    message: string
    data: {
        user: User
        token: string
    }
}

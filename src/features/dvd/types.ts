export interface DVD {
    id: number
    title: string
    genre: string
    release_year: string
    rental_price_per_day: number
    stock_total: number
    stock_available: number
    description: string
    cover_image_url: string
    created_at: string
}

export interface CreateDVDPayload {
    title: string
    genre: string
    release_year: string
    rental_price_per_day: number
    stock_total: number
    description: string
    cover_image_url: string
}

export interface DVDResponse {
    message: string
    data: DVD[]
}
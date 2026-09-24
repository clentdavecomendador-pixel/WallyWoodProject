import { API_URL } from "../data/data"
import type { Poster } from "../types/api.types"
import { useFetch } from "./useFetch"

export const usePosters = () => {
    return useFetch<Poster[]>(`${API_URL}/poster`)
}

export const usePoster = (id: string) => {
    return useFetch<Poster>(`${API_URL}/poster/${id}`)
}
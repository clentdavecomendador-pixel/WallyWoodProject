import { API_URL } from "../data/data"
import type { Genre } from "../types/api.types"
import { useFetch } from "./useFetch"

export const useGenres = () => {
    return useFetch<Genre[]>(`${API_URL}/genre`)
}
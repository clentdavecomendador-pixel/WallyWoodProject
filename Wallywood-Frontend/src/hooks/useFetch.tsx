import { useEffect, useState } from "react"

type HttpMethod = "GET" | "PUT" | "POST" | "DELETE"

export const useFetch = <T,>(
    url: string,
    method: HttpMethod = "GET",
    token?: string | null
) => {
    const [ data, setData] = useState<T | null>(null)
    const [ error, setError] = useState<string | null>(null)
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(url, {
                    method: method,
                    headers: {
                        "Content-type": "application/json",
                        ...(token && {
                            Authorization: `Bearer ${token}`
                        })
                    }
                })
                if(!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`)
                }

                const result = await response.json()
                setData(result)
            } catch (err) {
                if(err instanceof Error) {
                    setError(err.message)
                }
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [url, method, token])

    return { data, error, isLoading }

}
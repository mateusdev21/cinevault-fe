/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react"
import { dvdApi } from "../api/dvd.api"
import { useDVDStore } from "../store/dvd.store"

export const useFetchDVDs = () => {
    const setDVDs = useDVDStore((state) => state.setDVDs);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);

    const fetchDVDs = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await dvdApi.getAll()
            setDVDs(response.data)
        } catch (err: any) {
            setError(err.message || "Failed to fetch DVDs");
        } finally {
            setLoading(false)
        }
    }, [setDVDs]);

    return { fetchDVDs, loading, error }
}

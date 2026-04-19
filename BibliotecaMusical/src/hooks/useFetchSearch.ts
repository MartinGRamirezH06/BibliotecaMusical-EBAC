import { useEffect, useState } from "react";
import axios from "axios";

interface FetchSearch<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

const useFetchSearch = <T>(url: string) => {
    const [resultsState, setResultsState] = useState<FetchSearch<T>>({
        data: null,
        loading: false,
        error: null
    });

    useEffect(() => {
        let isCancelled = false;

        const busquedaEnAPI = async () => {
            if (!url) {
                setResultsState({
                    data: null,
                    loading: false,
                    error: null
                });
                return;
            }
            setResultsState({
                data: null,
                loading: true,
                error: null
            });

            try {
                const response = await axios.get(url);

                console.log("RESPONSE COMPLETA:", response.data);
                if (!response.data || typeof response.data === "string") {
                    if (!isCancelled) {
                        setResultsState({
                            data: null,
                            loading: false,
                            error: "No se encontraron resultados"
                        });
                    }
                    return;
                }
                const apiData =
                    response.data.album ??
                    response.data.track ??
                    null;

                if (!isCancelled) {
                    if (!apiData) {
                        setResultsState({
                            data: null,
                            loading: false,
                            error: "No se encontraron resultados"
                        });
                    } else {
                        setResultsState({
                            data: apiData,
                            loading: false,
                            error: null
                        });
                    }
                }

            } catch (error) {
                if (!isCancelled) {
                    setResultsState({
                        data: null,
                        loading: false,
                        error: "Fallo en el servidor"
                    });
                }
            }
        };

        busquedaEnAPI();
        return () => {
            isCancelled = true;
        };

    }, [url]);

    return resultsState;
};

export default useFetchSearch;
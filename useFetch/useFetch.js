import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });

    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({
            data: null,
            isLoading: true,
            error: null
        });

        fetch( url )
            .then( resp => resp.json())
            .then( data => {
                if(isMounted.current) {
                    setState({
                        isLoading: false,
                        error: null,
                        data: data
                    });
                }
            })
    }, [url]);

    return state;
}

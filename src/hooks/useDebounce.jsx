
import { useEffect, useRef } from 'react'

// this hooks created for controlling repiad unused api call
const useDebounce = (callback, delay) => {

    const timeoutRef = useRef(null)

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }, [])

    const debouncedCallback = (...args) => {

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            callback(...args)
        }, delay)

    }

    return debouncedCallback
}


export default useDebounce
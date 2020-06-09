import { useState, useEffect, useCallback } from 'react'

const useMinHeight = (minusHeight: number) => {
    const [minHeight, setMinHeight] = useState<number>(0)

    const setContentMinHeight = useCallback(() => {
        const contentMinHeight = document.documentElement.offsetHeight
        setMinHeight(contentMinHeight - minusHeight)
    }, [minusHeight])

    useEffect(() => {
        setContentMinHeight()
        document.addEventListener('resize', setContentMinHeight)
        return () => {
            document.removeEventListener('resize', setContentMinHeight)
        }
    }, [setContentMinHeight])

    return minHeight
}

export default useMinHeight

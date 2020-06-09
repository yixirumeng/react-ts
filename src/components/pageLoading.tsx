import React, { useEffect, Fragment } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const PageLoading: React.FC = () => {
    useEffect(() => {
        NProgress.start()
        return () => {
            NProgress.done()
        }
    }, [])

    return <Fragment />
}

export default PageLoading

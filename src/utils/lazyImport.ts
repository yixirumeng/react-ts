import { lazy, FC } from 'react'

const lazyImport = (fn: () => Promise<{ default: FC }>, timeout = 300) =>
    lazy<FC>(() =>
        Promise.all<Promise<{ default: FC }>, void>([fn(), new Promise(resolve => setTimeout(resolve, timeout))]).then(
            ([moduleExports]) => moduleExports
        )
    )

export default lazyImport

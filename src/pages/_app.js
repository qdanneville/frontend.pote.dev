import React from 'react'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Layout } from '../components/Layout'

import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <ReactQueryDevtools initialIsOpen={true} />
            </Hydrate>
        </QueryClientProvider>
    )
}
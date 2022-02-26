import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html className=''>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=optional" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;600&display=optional" rel="stylesheet" />
            </Head>
            <body className='bg-slate-100 dark:bg-slate-800 text-dark-blue-900 dark:text-white'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
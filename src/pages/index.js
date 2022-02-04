import React from 'react'
import { dehydrate, QueryClient } from 'react-query'
import Head from 'next/head'
import { fetchFormations } from '../hooks'
import { FormationList } from '../components/FormationList'

export default function Home() {

  console.log('Home updated from docker ?')

  return (
    <>
      <Head>
        <title>Pote.dev</title>
      </Head>
      <section>
        <h1 className="text-2xl font-light underline text-yellow">
          Formations lists :
        </h1>
        <FormationList />
      </section>
    </>
  )
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient()

//   await queryClient.prefetchQuery(['formations'], () => fetchFormations())

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }
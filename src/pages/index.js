import React from 'react'
import Head from 'next/head'

import Formations from './formations'

export default function Home() {

  return (
    <>
      <Head>
        <title>Pote.dev</title>
      </Head>
      <section>
        <Formations/>
      </section>
    </>
  )
}
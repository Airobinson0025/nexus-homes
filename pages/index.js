import Head from 'next/head'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Process from './components/Process'
import Values from './components/Values'
import Services from './components/Services'
import Stats from './components/Stats'
import Location from './components/Location'


export default function Home() {
  return (
    <>
      <Head>
        <title>Nexus Homes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Mission />
        <Process />
        <Services />
        <Values />
        <Location />
      </main>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../Components/Layout/Navbar'
import Header from '../Components/Section/Header'
import Hero from '../Components/Section/Hero'
import About from '../Components/Section/About'
import News from '../Components/Section/News'
import Info from '../Components/Section/Info'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navbar />
     <Header />
     <Hero />
     <About />
     <News />
     <Info />
    </>
  )
}

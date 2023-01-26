
import Head from 'next/head'
import { FooterLinks } from '../components/footer'
import { MainHeader } from '../components/header'
import { HeroComponent } from '../components/hero'


export default function Home() {
  return (
    <>
      <Head>
        <title>Zmeu Hausbesorger</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainHeader 
        links={[{link: '/services', label: 'Servicii'}, {link: '/about', label: 'Despre noi'}]} />
        <HeroComponent />
        <FooterLinks data={[{
          title: 'Servicii',
          links: [{label: 'Servicii 1', link: '/services'}, {label: 'Servicii 2', link: '/services'}]
        }]} />
      </main>
    </>
  )
}
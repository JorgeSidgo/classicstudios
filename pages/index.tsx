import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Classic Studios</title>
        <link rel="icon" href="/fav.png" />
        <link rel="stylesheet" href="https://use.typekit.net/pfx4nad.css"/>
        <meta name="description" content=""/>
      </Head>

      <main className={styles.main}>
        <Image className={styles.logo} src={'/classic_big.svg'} height={400} width={400}/>
        <span className={styles.text}>Bajo construcción</span>
      </main>
    </div>
  )
}

export default Home

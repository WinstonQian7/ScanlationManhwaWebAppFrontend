import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { SeriesDashboard } from '../src/SeriesDashboard/SeriesDashboard'
import { TopBar } from '../src/TopBar/TopBar'

const Home: NextPage = () => {
  return (
    <>
      <title>Home Page</title>
      <meta
        name="description"
        content="Displays information about scanlation tracker app"></meta>
      <div className={styles.container}>
        <TopBar />
        <div className={styles.mainContent}>
          <SeriesDashboard />
        </div>
      </div>
    </>
  )
}

export default Home

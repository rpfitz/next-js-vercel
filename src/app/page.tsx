import styles from './page.module.css'
import HeaderComponent from './components/layout/Header/page'
import PersistentDrawerLeft from './components/layout/PersistentDrawer/page'
import LandingPageComponent from './components/LandingPageComponent/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPageComponent />
      {/* <HeaderComponent /> */}
      {/* <PersistentDrawerLeft /> */}
    </main>
  )
}

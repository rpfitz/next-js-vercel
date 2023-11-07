import styles from './page.module.css'
import HeaderComponent from './components/layout/Header/page'
import PersistentDrawerLeft from './components/layout/PersistentDrawer/page'
import Headerzin from './components/Headerzin/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <Headerzin />
      {/* <HeaderComponent /> */}
      {/* <PersistentDrawerLeft /> */}
    </main>
  )
}

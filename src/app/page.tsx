import styles from './page.module.css'
import HeaderComponent from './components/layout/Header/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderComponent />
    </main>
  )
}

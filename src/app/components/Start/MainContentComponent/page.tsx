import styles from './page.module.css'

import { Divider } from '@mui/material';

import HomePage from './Pages/Home/page';
import HomePageMobile from './Pages/Home/Mobile/page';
import FaqPage from './Pages/Faq/page';
import AboutPage from './Pages/About/page';

export default function MainContentComponent() {
  return (
    <div className={styles.pageComponent}>
      <HomePage />
      <HomePageMobile />
      <Divider variant='fullWidth' />
      <AboutPage />
      <Divider variant='fullWidth' />
      <FaqPage />
    </div>
  )
}

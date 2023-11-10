import Image from 'next/image'
import Link from 'next/link';

import styles from './page.module.css'

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { home } from '@/config-app'

export default function HomePageMobile() {
  return (
    <div id="home" className={styles.homePageComponentMobile}>
      <div className={styles.homePageSessionOneComponent}>
        <div className={styles.tryTheBest}>
          <Typography className={styles.homePageSessionOneComponentHahahaha2} variant="h2" gutterBottom  >{home.first_header}</Typography>
          <Typography className={styles.homePageSessionOneComponentHahahaha} variant="h2" gutterBottom><strong>{home.second_header}</strong></Typography>
        </div>
        <Image src={`/${home.hero_img_src_mobile}`} alt={home.alt_hero_image} width={300} height={600} />
        <div>
          <Typography variant="body1" gutterBottom style={{ fontSize: '1.3em' }}>
            <span className={styles.textinResponsivo}>{home.text_message}</span>
          </Typography>
          <div className={styles.homePageSessionOneButtonsComponent}>
            <Button variant="contained"><Link href="#contact">{home.button_message}</Link></Button>
          </div>
        </div>
      </div>
      <div className={styles.homePageSessionTwoComponent}>
      </div>
    </div>
  )
}
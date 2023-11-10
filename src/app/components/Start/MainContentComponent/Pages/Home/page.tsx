import Image from 'next/image'
import Link from 'next/link';

import styles from './page.module.css'

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { home } from '@/config-app'

export default function HomePage() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.session1}>
        <div className={styles.headers}>
          <Typography className={styles.header1} variant="h2" gutterBottom>{home.first_header}</Typography>
          <Typography className={styles.header2} variant="h2" gutterBottom><strong>{home.second_header}</strong></Typography>
        </div>
        <Typography className={styles.paragraph1} variant="body1" gutterBottom>{home.text_message}</Typography>
        <div className={styles.buttonSession1}>
          <Button variant="contained"><Link href="#contact">{home.button_message}</Link></Button>
        </div>
      </div>
      <div className={styles.session2}>
        <Image priority src={`/${home.hero_img_src_desktop}`} alt={home.alt_hero_image} width={300} height={600} />
      </div>
    </div>
  )
}
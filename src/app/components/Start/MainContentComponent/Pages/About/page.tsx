import Link from 'next/link';

import styles from './page.module.css'

import Button from '@mui/material/Button';

import { about } from '@/config-app';

export default function AboutPage() {
  return (
    <div id="about" className={styles.aboutPageComponent}>
      <div className={styles.aboutPageSessionOneComponent}>
        <h1>{about.header_about1}</h1>
        <h2>{about.header2_about1}</h2>
        <p><strong>{about.paragraph_about1}</strong></p>
        <p>{about.paragraph2_about1}</p>
        <p>{about.paragraph3_about1}</p>
        <h2>{about.header_about2}</h2>
        <p>{about.paragraph_about2}</p>
        <p>{about.paragraph2_about2}</p>
        <Button variant="contained"><Link href="#contact">{about.button_about2}</Link></Button>
      </div>
    </div>
  )
}